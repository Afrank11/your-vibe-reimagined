"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

type Node = { x: number; y: number; vx: number; vy: number; brass: boolean };
type Pulse = { a: number; b: number; t: number };

const LINK_DIST = 150;
/** Scattered particles hold alone for this long before lines start drawing. */
const PARTICLE_HOLD_MS = 1000;
const NODE_FADE_MS = 400;
const LINK_FORMATION_MS = 2000;

type Props = {
  className?: string;
  /** ms to wait before the network starts forming (lets the preloader clear). */
  startDelay?: number;
};

/**
 * A living network that FORMS: first scattered particles, then hairline
 * links draw themselves node-to-node with a per-link stagger, then faint
 * data pulses begin traveling along random links. The whole field shifts
 * a few pixels with the cursor for depth. Canvas 2D — cheap, pausable.
 * Static, fully-formed frame under reduced motion.
 */
export function SignalField({ className = "", startDelay = 0 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let raf = 0;
    let visible = true;
    let last = performance.now();
    const formStart = performance.now() + startDelay;
    const mouse = { x: -9999, y: -9999 };
    const drift = { x: 0, y: 0 }; // smoothed parallax offset

    const resize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const memory = (navigator as { deviceMemory?: number }).deviceMemory ?? 8;
      const density = memory <= 4 ? 22000 : 11500;
      const count = Math.max(40, Math.min(150, Math.round((width * height) / density)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        brass: Math.random() < 0.12,
      }));
      pulses = [];
    };

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    /** Deterministic per-link stagger in [0, 0.45) so links connect one after another. */
    const linkOffset = (i: number, j: number) => ((i * 7 + j * 13) % 45) / 100;

    const draw = (nodeT: number, linkT: number) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      ctx.translate(drift.x, drift.y);

      // links — begin drawing only after the particles have held alone
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const d = Math.hypot(dx, dy);
          if (d >= LINK_DIST) continue;

          const off = linkOffset(i, j);
          const p = Math.max(0, Math.min(1, (linkT - off) / (1 - off)));
          if (p === 0) continue;

          const alpha = (1 - d / LINK_DIST) * 0.14 * p;
          ctx.strokeStyle = `rgba(237, 236, 230, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(a.x + dx * p, a.y + dy * p);
          ctx.stroke();
        }
      }

      // data pulses — tiny brass signals traveling along formed links
      for (const pulse of pulses) {
        const a = nodes[pulse.a];
        const b = nodes[pulse.b];
        if (!a || !b) continue;
        const px = a.x + (b.x - a.x) * pulse.t;
        const py = a.y + (b.y - a.y) * pulse.t;
        const fade = Math.sin(pulse.t * Math.PI); // ease in-out of visibility
        ctx.fillStyle = `rgba(194, 165, 123, ${0.75 * fade})`;
        ctx.beginPath();
        ctx.arc(px, py, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      // nodes — appear first, before any links
      const nodeAlpha = nodeT;
      for (const n of nodes) {
        ctx.fillStyle = n.brass
          ? `rgba(194, 165, 123, ${0.9 * nodeAlpha})`
          : `rgba(143, 143, 138, ${0.55 * nodeAlpha})`;
        ctx.fillRect(n.x - 1, n.y - 1, 2, 2);
      }
    };

    const step = (now: number) => {
      const dt = Math.min(50, now - last);
      last = now;
      const nodeT = Math.max(0, Math.min(1, (now - formStart) / NODE_FADE_MS));
      const linkT = easeOutCubic(
        Math.max(0, Math.min(1, (now - formStart - PARTICLE_HOLD_MS) / LINK_FORMATION_MS)),
      );

      for (const n of nodes) {
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const d = Math.hypot(dx, dy);
        if (d < 220 && d > 1) {
          n.vx += (dx / d) * 0.004;
          n.vy += (dy / d) * 0.004;
        }
        n.vx = Math.max(-0.35, Math.min(0.35, n.vx));
        n.vy = Math.max(-0.35, Math.min(0.35, n.vy));
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -10) n.x = width + 10;
        if (n.x > width + 10) n.x = -10;
        if (n.y < -10) n.y = height + 10;
        if (n.y > height + 10) n.y = -10;
      }

      // parallax drift toward the cursor (a few px, smoothed)
      const tx = mouse.x > -9000 ? (mouse.x - width / 2) * 0.012 : 0;
      const ty = mouse.y > -9000 ? (mouse.y - height / 2) * 0.012 : 0;
      drift.x += (tx - drift.x) * 0.05;
      drift.y += (ty - drift.y) * 0.05;

      // spawn/advance pulses only once the network has formed
      if (linkT >= 1) {
        if (pulses.length < 3 && Math.random() < 0.012) {
          const a = Math.floor(Math.random() * nodes.length);
          const na = nodes[a];
          const b = nodes.findIndex(
            (n, idx) => idx !== a && Math.hypot(n.x - na.x, n.y - na.y) < LINK_DIST,
          );
          if (b !== -1) pulses.push({ a, b, t: 0 });
        }
        for (const pulse of pulses) pulse.t += dt / 1400;
        pulses = pulses.filter((p) => p.t < 1);
      }

      draw(nodeT, linkT);
      if (visible && !reduced) raf = requestAnimationFrame(step);
    };

    resize();

    if (reduced) {
      draw(1, 1); // fully-formed static frame — texture without motion
      window.addEventListener("resize", () => {
        resize();
        draw(1, 1);
      });
      return () => window.removeEventListener("resize", resize);
    }

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) {
        cancelAnimationFrame(raf);
        last = performance.now();
        raf = requestAnimationFrame(step);
      }
    });
    io.observe(canvas);

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave, { passive: true });
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [reduced, startDelay]);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}

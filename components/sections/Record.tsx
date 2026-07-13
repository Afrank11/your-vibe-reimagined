"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Star, Sparkle } from "@/components/ui/Icons";
import { record, distinctions } from "@/lib/data";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* Snake geometry: a 1200-unit-wide coordinate space, one bend per entry.
   The SVG stretches to the container (strokes stay 1.5px via
   vector-effect); stations and the traveling dot are HTML so they never
   distort — which lets the same S work from phone to ultrawide. */
const ROW_H = 340;
const X_LEFT = 170;
const X_RIGHT = 1030;
const X_CENTER = 600;
const VIEW_W = 1200;

function snakePath(n: number): string {
  let d = `M ${X_CENTER} 0`;
  let px = X_CENTER;
  let py = 0;
  for (let i = 0; i < n; i++) {
    const x = i % 2 === 0 ? X_LEFT : X_RIGHT;
    const y = i * ROW_H + ROW_H / 2;
    d += ` C ${px} ${(py + y) / 2}, ${x} ${(py + y) / 2}, ${x} ${y}`;
    px = x;
    py = y;
  }
  const end = n * ROW_H;
  d += ` C ${px} ${(py + end) / 2}, ${X_CENTER} ${(py + end) / 2}, ${X_CENTER} ${end}`;
  return d;
}

export function Record() {
  const snakeRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reduced = usePrefersReducedMotion();

  const n = record.length;
  const totalH = n * ROW_H;
  const path = useMemo(() => snakePath(n), [n]);

  /* The journey: the brass path draws itself with scroll, a signal dot
     travels along it, and only the chapter at the dot is fully lit. */
  useLayoutEffect(() => {
    if (reduced || !snakeRef.current || !progressRef.current) return;

    const pathEl = progressRef.current;
    const len = pathEl.getTotalLength();
    gsap.set(pathEl, { strokeDasharray: len, strokeDashoffset: len });

    const placeDot = (p: number) => {
      if (!dotRef.current || !snakeRef.current) return;
      const pt = pathEl.getPointAtLength(len * p);
      const w = snakeRef.current.clientWidth;
      dotRef.current.style.transform = `translate(${(pt.x / VIEW_W) * w}px, ${pt.y}px)`;
      return pt;
    };

    // initial state
    placeDot(0);
    rowRefs.current.forEach((row, i) => {
      if (row) gsap.set(row, { opacity: i === 0 ? 1 : 0.3 });
    });

    const st = ScrollTrigger.create({
      trigger: snakeRef.current,
      start: "top 62%",
      end: "bottom 62%",
      scrub: 0.4,
      onUpdate(self) {
        const p = self.progress;
        gsap.set(pathEl, { strokeDashoffset: len * (1 - p) });
        const pt = placeDot(p);
        if (!pt) return;
        const active = Math.max(0, Math.min(n - 1, Math.floor(pt.y / ROW_H)));
        rowRefs.current.forEach((row, i) => {
          if (!row) return;
          gsap.to(row, {
            opacity: i === active ? 1 : 0.3,
            scale: i === active ? 1 : 0.985,
            duration: 0.35,
            overwrite: "auto",
          });
        });
      },
    });

    return () => st.kill();
  }, [reduced, n]);

  return (
    <section id="record" className="mx-auto max-w-site scroll-mt-24 px-6 py-28 md:px-10 md:py-40">
      <SectionHeading
        index="05"
        label="Record"
        lines={[
          <span key="1">
            A short history of <span className="accent-serif">shipping.</span>
          </span>,
        ]}
      />

      {/* ── The S-path journey — every screen size ── */}
      <div ref={snakeRef} className="relative mt-14 md:mt-20" style={{ height: totalH }}>
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox={`0 0 ${VIEW_W} ${totalH}`}
          preserveAspectRatio="none"
          aria-hidden
        >
          {/* base path — faint, always there */}
          <path
            d={path}
            fill="none"
            stroke="var(--line)"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
          {/* progress path — brass, draws with scroll */}
          <path
            ref={progressRef}
            d={path}
            fill="none"
            stroke="var(--brass)"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* station markers at each bend (HTML — no viewBox distortion) */}
        {record.map((entry, i) => (
          <span
            key={entry.year}
            aria-hidden
            className="absolute h-2.5 w-2.5 rounded-full border border-brass bg-ink"
            style={{
              left: `calc(${((i % 2 === 0 ? X_LEFT : X_RIGHT) / VIEW_W) * 100}% - 5px)`,
              top: i * ROW_H + ROW_H / 2 - 5,
            }}
          />
        ))}

        {/* the traveling signal */}
        {!reduced && (
          <div ref={dotRef} className="pointer-events-none absolute left-0 top-0 z-10" aria-hidden>
            <span className="absolute -ml-2.5 -mt-2.5 block h-5 w-5 rounded-full bg-brass/20" />
            <span className="absolute -ml-1 -mt-1 block h-2 w-2 rounded-full bg-brass" />
          </div>
        )}

        {record.map((entry, i) => (
          <div
            key={entry.year}
            ref={(el) => {
              rowRefs.current[i] = el;
            }}
            className={`absolute flex h-[340px] w-full items-center ${
              i % 2 === 0 ? "justify-start" : "justify-end"
            }`}
            style={{ top: i * ROW_H }}
          >
            <div
              className={`flex-1 md:max-w-md ${
                i % 2 === 0
                  ? "ml-[calc(14%+1.25rem)] md:ml-[calc(14%+3rem)]"
                  : "mr-[calc(14%+1.25rem)] md:mr-[calc(14%+3rem)] text-right"
              }`}
            >
              <p className="label-mono mb-2 !text-brass">{entry.year}</p>
              <h3 className="display text-lg sm:text-xl lg:text-2xl">{entry.title}</h3>
              <p className="mt-1 font-mono text-xs tracking-wide text-bone/80">{entry.org}</p>
              <p
                className={`mt-3 text-sm leading-relaxed text-silver ${
                  i % 2 === 0 ? "" : "ml-auto"
                } max-w-[46ch]`}
              >
                {entry.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Distinctions — the trophy shelf ── */}
      <div id="distinctions" className="mt-24 scroll-mt-28 md:mt-32">
        <Reveal className="mb-8 flex items-center gap-3">
          <Sparkle className="text-brass" />
          <p className="label-mono !text-bone">Distinctions</p>
          <Sparkle size={7} className="text-brass/70" />
          <span className="rule flex-1" />
        </Reveal>
        <Reveal pop stagger duration={0.7} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {distinctions.map((item) => (
            <div
              key={item}
              className="group flex items-start gap-3 border border-line bg-ink-2 p-5 transition-colors duration-300 hover:border-brass/40"
            >
              <Star className="mt-0.5 shrink-0 text-brass transition-transform duration-300 group-hover:rotate-[72deg]" />
              <span className="text-sm leading-relaxed text-silver transition-colors duration-300 group-hover:text-bone">
                {item}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

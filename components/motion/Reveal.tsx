"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EASE, DUR } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Seconds; defaults to the house reveal duration (0.8s). */
  duration?: number;
  /** Direction the content arrives from. */
  from?: "up" | "left" | "right";
  /** Springy back.out entrance with a slight scale — for celebratory moments. */
  pop?: boolean;
  /** Stagger direct children instead of moving the wrapper as one block. */
  stagger?: boolean;
};

/** Fade-rise (or slide) on first entry into the viewport. */
export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = DUR.reveal,
  from = "up",
  pop = false,
  stagger = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (!ref.current || reduced) return;
    const targets = stagger ? Array.from(ref.current.children) : ref.current;
    const offset =
      from === "left" ? { x: -56, y: 0 } : from === "right" ? { x: 56, y: 0 } : { x: 0, y: 32 };
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { ...offset, opacity: 0, scale: pop ? 0.9 : 1 },
        {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration,
          ease: pop ? "back.out(1.7)" : EASE.out,
          delay,
          stagger: stagger ? 0.09 : 0,
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, [reduced, delay, duration, from, pop, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

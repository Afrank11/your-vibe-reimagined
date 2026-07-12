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
  /** Stagger direct children instead of moving the wrapper as one block. */
  stagger?: boolean;
};

/** Fade-rise on first entry into the viewport. */
export function Reveal({ children, className = "", delay = 0, stagger = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (!ref.current || reduced) return;
    const targets = stagger ? Array.from(ref.current.children) : ref.current;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: DUR.reveal,
          ease: EASE.out,
          delay,
          stagger: stagger ? 0.09 : 0,
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, [reduced, delay, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

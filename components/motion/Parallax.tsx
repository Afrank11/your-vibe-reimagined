"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = {
  children: React.ReactNode;
  className?: string;
  /** −0.3 … 0.3 — positive drifts down, negative drifts up. */
  speed?: number;
};

export function Parallax({ children, className = "", speed = -0.15 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (!ref.current || reduced) return;
    const clamped = Math.max(-0.3, Math.min(0.3, speed));
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { yPercent: -clamped * 100 },
        {
          yPercent: clamped * 100,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, [reduced, speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

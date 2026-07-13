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
  /** How faded the content is while off-focus (0–1). */
  rest?: number;
};

/**
 * Scroll-driven presence: content dissolves IN as it approaches the center
 * of the viewport and dissolves back OUT as it leaves — so one block is
 * "on stage" at a time. Both directions are scrubbed, never one-shot.
 */
export function FadeThrough({ children, className = "", rest = 0.12 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (!ref.current || reduced) return;
    const el = ref.current;
    const ctx = gsap.context(() => {
      // entrance: dissolve + rise while approaching mid-viewport
      gsap.fromTo(
        el,
        { opacity: rest, y: 48, scale: 0.985 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            end: "top 45%",
            scrub: true,
          },
        },
      );
      // exit: dissolve away as the block leaves upward
      gsap.fromTo(
        el,
        { opacity: 1 },
        {
          opacity: rest,
          y: -32,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "bottom 38%",
            end: "bottom 6%",
            scrub: true,
          },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, [reduced, rest]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

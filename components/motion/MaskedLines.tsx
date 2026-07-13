"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EASE, DUR, STAGGER } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = {
  /** Each string is one visual line; author controls the breaks. */
  lines: React.ReactNode[];
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  /** Seconds; defaults to the house reveal duration. */
  duration?: number;
};

/**
 * The house headline reveal: each line rises from behind an overflow clip.
 * Content is present in server HTML; GSAP only hides it once JS runs.
 */
export function MaskedLines({
  lines,
  as: Tag = "h2",
  className = "",
  delay = 0,
  duration = DUR.reveal,
}: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (!ref.current) return;
    const spans = ref.current.querySelectorAll<HTMLElement>(".masked-line > span");
    if (reduced) {
      gsap.set(spans, { yPercent: 0 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        spans,
        { yPercent: 110 },
        {
          yPercent: 0,
          duration,
          ease: EASE.out,
          stagger: STAGGER,
          delay,
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, [reduced, delay, duration]);

  return (
    <Tag ref={ref as React.Ref<never>} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="masked-line">
          <span>{line}</span>
        </span>
      ))}
    </Tag>
  );
}

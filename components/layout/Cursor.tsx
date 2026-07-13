"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

/**
 * Custom cursor: 6px dot + trailing ring. The ring expands over anything
 * interactive. Fine-pointer devices only; the native cursor stays visible
 * so nothing breaks in forms or edge cases.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(window.matchMedia("(pointer: fine)").matches && !reduced);
  }, [reduced]);

  useEffect(() => {
    if (!enabled || !dotRef.current || !ringRef.current) return;

    const dotX = gsap.quickTo(dotRef.current, "x", { duration: 0.08, ease: "power2.out" });
    const dotY = gsap.quickTo(dotRef.current, "y", { duration: 0.08, ease: "power2.out" });
    const ringX = gsap.quickTo(ringRef.current, "x", { duration: 0.35, ease: "power3.out" });
    const ringY = gsap.quickTo(ringRef.current, "y", { duration: 0.35, ease: "power3.out" });

    const move = (e: MouseEvent) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const interactive = (e.target as HTMLElement).closest(
        "a, button, [data-cursor='hover'], input, textarea, select",
      );
      gsap.to(ringRef.current, {
        scale: interactive ? 2.2 : 1,
        opacity: interactive ? 0.9 : 0.5,
        duration: 0.25,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    // mix-blend-difference keeps the cursor visible on both dark and light sections
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[95] mix-blend-difference">
      <div
        ref={dotRef}
        className="absolute -ml-[3px] -mt-[3px] h-[6px] w-[6px] rounded-full bg-[#edece6]"
      />
      <div
        ref={ringRef}
        className="absolute -ml-4 -mt-4 h-8 w-8 rounded-full border border-[#edece6]/60 opacity-50"
      />
    </div>
  );
}

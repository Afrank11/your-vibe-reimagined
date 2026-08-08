"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

/**
 * Route enter transition: content settles in with a calm fade-rise.
 * Enter-only (never blocks navigation); disabled under reduced motion.
 *
 * The transform is cleared once the animation finishes — a transformed
 * ancestor becomes a containing block and breaks `position: sticky`
 * for everything inside (e.g. the case-study facts rail).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const clearTransform = () => {
    if (ref.current) ref.current.style.transform = "none";
  };

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE.outCurve }}
      onAnimationComplete={clearTransform}
    >
      {children}
    </motion.div>
  );
}

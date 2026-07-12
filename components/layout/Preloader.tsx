"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

const SEEN_KEY = "fa-preloader-seen";

/**
 * Mono counter 0→100, then the panel wipes upward into the hero.
 * Runs once per session; skipped entirely under reduced motion.
 */
export function Preloader() {
  const reduced = usePrefersReducedMotion();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (reduced || sessionStorage.getItem(SEEN_KEY)) {
      setVisible(false);
      return;
    }
    const start = performance.now();
    const DURATION = 1300;
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      // ease-out so the counter decelerates like a system settling
      setProgress(Math.round((1 - Math.pow(1 - t, 3)) * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem(SEEN_KEY, "1");
        setTimeout(() => setVisible(false), 250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99] flex items-end bg-ink"
          initial={false}
          exit={{ y: "-100%", transition: { duration: 0.9, ease: EASE.outCurve } }}
          aria-hidden
        >
          <div className="flex w-full items-end justify-between p-6 md:p-10">
            <span className="label-mono">Frank Ateh — Portfolio</span>
            <span className="font-mono text-6xl font-medium tabular-nums text-bone md:text-8xl">
              {progress.toString().padStart(3, "0")}
            </span>
          </div>
          <div
            className="absolute bottom-0 left-0 h-px bg-brass transition-[width] duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

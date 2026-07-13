"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { Plus } from "@/components/ui/Icons";

type Props = {
  intro: string;
  rest: string[];
};

/**
 * Short introduction with the full story folded away — visitors who want
 * the whole journey click "Read my full story"; everyone else keeps scrolling.
 */
export function StoryExpander({ intro, rest }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <p className="max-w-[62ch] text-base leading-relaxed text-silver md:text-lg">{intro}</p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="full-story"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.55, ease: EASE.outCurve }}
            className="overflow-hidden"
          >
            <div className="space-y-6 pt-6">
              {rest.map((paragraph, i) => (
                <p key={i} className="max-w-[62ch] text-base leading-relaxed text-silver md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group mt-8 flex items-center gap-3 border border-line px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-bone transition-colors hover:border-brass/60 hover:text-brass"
      >
        {open ? "Read less" : "Read my full story"}
        <Plus
          className={`transition-transform duration-300 ${open ? "rotate-45" : "group-hover:rotate-90"}`}
        />
      </button>
    </div>
  );
}

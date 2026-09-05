"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { Plus } from "@/components/ui/Icons";
import { storyLinks } from "@/lib/data";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionary";

type Props = {
  locale: Locale;
  intro: string;
  rest: string[];
};

/** Turns named terms (e.g. "Frinux Technologies") into links, in place. */
function linkify(text: string): React.ReactNode {
  const terms = Object.keys(storyLinks);
  if (terms.length === 0) return text;
  const pattern = new RegExp(`(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`);
  return text.split(pattern).map((part, i) =>
    storyLinks[part] ? (
      <a
        key={i}
        href={storyLinks[part]}
        target="_blank"
        rel="noopener noreferrer"
        className="link-quiet text-bone underline-offset-4 transition-colors hover:text-brass"
      >
        {part}
      </a>
    ) : (
      part
    ),
  );
}

/**
 * Short introduction with the full story folded away — visitors who want
 * the whole journey click "Read my full story"; everyone else keeps scrolling.
 */
export function StoryExpander({ locale, intro, rest }: Props) {
  const [open, setOpen] = useState(false);
  const t = getDictionary(locale);

  return (
    <div>
      <p className="max-w-[62ch] text-base leading-relaxed text-silver md:text-lg">
        {linkify(intro)}
      </p>

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
                  {linkify(paragraph)}
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
        {open ? t.about.readLess : t.about.readMore}
        <Plus
          className={`transition-transform duration-300 ${open ? "rotate-45" : "group-hover:rotate-90"}`}
        />
      </button>
    </div>
  );
}

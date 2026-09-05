"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, Download, Plus } from "@/components/ui/Icons";
import { contact } from "@/lib/data";
import { EASE } from "@/lib/motion";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionary";

type Variant = "outline" | "solid" | "block";

type Props = {
  locale: Locale;
  /** Whether the French PDF has actually been added to public/ yet. */
  frAvailable: boolean;
  variant?: Variant;
  /** Extra classes for the trigger button. */
  className?: string;
  /** Label override — defaults to "CV" for compact triggers. */
  label?: string;
  /** Fires when the picker opens (used to close the mobile menu behind it). */
  onOpen?: () => void;
};

const TRIGGER: Record<Variant, string> = {
  outline:
    "label-mono group flex items-center gap-2 border border-brass/50 px-4 py-2.5 !text-brass transition-colors hover:bg-brass hover:!text-ink",
  solid:
    "flex items-center gap-3 bg-bone px-7 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-brass",
  block:
    "label-mono flex w-full items-center justify-center gap-3 bg-brass px-5 py-4 !text-ink",
};

/**
 * The CV is published in two editions. Rather than guessing from the
 * interface language, the button opens a small picker so a visitor reading
 * the English site can still take the French PDF to a French employer.
 */
export function CvDownload({
  locale,
  frAvailable,
  variant = "outline",
  className = "",
  label,
  onOpen,
}: Props) {
  const t = getDictionary(locale);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  const options = [
    { code: "en" as const, name: t.cv.english, href: contact.cv.en, available: true },
    { code: "fr" as const, name: t.cv.french, href: contact.cv.fr, available: frAvailable },
  ];

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => {
          onOpen?.();
          setOpen(true);
        }}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={`${TRIGGER[variant]} ${className}`}
      >
        {variant === "outline" ? (
          <>
            {label ?? t.cv.short}
            <Download className="transition-transform duration-300 group-hover:translate-y-0.5" />
          </>
        ) : (
          <>
            <Download />
            {label ?? t.cv.download}
          </>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[95] flex items-end justify-center p-4 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label={t.cv.close}
              onClick={close}
              className="absolute inset-0 bg-[#070707]/80 backdrop-blur-sm"
            />

            <motion.div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label={t.cv.chooseTitle}
              tabIndex={-1}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.99 }}
              transition={{ duration: 0.35, ease: EASE.outCurve }}
              className="relative w-full max-w-md border border-line bg-ink-2 p-7 outline-none md:p-9"
            >
              <span aria-hidden className="absolute left-3 top-3 h-3 w-3 border-l border-t border-brass" />
              <span aria-hidden className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-brass" />

              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="label-mono !text-brass">{t.cv.fileNote}</p>
                  <h2 className="display mt-2 text-2xl md:text-3xl">{t.cv.chooseTitle}</h2>
                </div>
                <button
                  type="button"
                  onClick={close}
                  aria-label={t.cv.close}
                  className="-mr-1 -mt-1 flex h-9 w-9 shrink-0 items-center justify-center text-silver transition-colors hover:text-bone"
                >
                  <Plus size={16} className="rotate-45" />
                </button>
              </div>

              <p className="mt-3 max-w-[38ch] text-sm leading-relaxed text-silver">
                {t.cv.chooseBody}
              </p>

              <div className="mt-7">
                {options.map((option) =>
                  option.available ? (
                    <a
                      key={option.code}
                      href={option.href}
                      download
                      onClick={close}
                      className="rule group flex items-center justify-between gap-4 py-5 transition-colors duration-300 hover:bg-ink"
                    >
                      <span>
                        <span className="display block text-xl transition-transform duration-300 group-hover:translate-x-1.5 md:text-2xl">
                          {option.name}
                        </span>
                        <span className="label-mono mt-1 block">{t.cv.fileNote}</span>
                      </span>
                      <ArrowDown
                        size={20}
                        className="shrink-0 text-smoke transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-brass"
                      />
                    </a>
                  ) : (
                    <div
                      key={option.code}
                      className="rule flex items-center justify-between gap-4 py-5 opacity-45"
                    >
                      <span>
                        <span className="display block text-xl md:text-2xl">{option.name}</span>
                        <span className="label-mono mt-1 block">{t.cv.pending}</span>
                      </span>
                    </div>
                  ),
                )}
                <div className="rule" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

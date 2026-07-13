"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { scrollToAnchor } from "@/components/providers/SmoothScroll";
import { EASE } from "@/lib/motion";

const NAV = [
  { label: "Work", hash: "#work" },
  { label: "About", hash: "#about" },
  { label: "Expertise", hash: "#expertise" },
  { label: "Record", hash: "#record" },
  { label: "Process", hash: "#process" },
  { label: "Contact", hash: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock native scroll while the mobile menu is open
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const goTo = (hash: string) => (e: React.MouseEvent) => {
    setOpen(false);
    if (onHome) {
      e.preventDefault();
      scrollToAnchor(hash);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[80] transition-colors duration-500 ${
        scrolled && !open ? "border-b border-line bg-[#070707]" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-site items-center justify-between px-6 md:h-[72px] md:px-10">
        <Link
          href="/"
          className="font-sans text-sm font-semibold tracking-tight text-bone"
          onClick={() => setOpen(false)}
          aria-label="Ateh Frank Ateh — home"
        >
          ATEH FRANK ATEH<span className="text-brass">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.hash}
              href={`/${item.hash}`}
              onClick={goTo(item.hash)}
              className="link-quiet label-mono !text-bone/70 transition-colors hover:!text-bone"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/notes"
            className={`link-quiet label-mono transition-colors hover:!text-bone ${
              pathname.startsWith("/notes") ? "!text-brass" : "!text-bone/70"
            }`}
          >
            Notes
          </Link>
          <Link
            href="/work"
            className={`label-mono border border-line px-4 py-2.5 transition-colors hover:border-bone/40 ${
              pathname.startsWith("/work") ? "!text-brass" : "!text-bone"
            }`}
          >
            Index
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-px w-6 bg-bone transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-bone transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            className="fixed inset-0 top-16 z-[75] flex flex-col justify-between bg-ink px-6 pb-10 pt-12 md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE.outCurve } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            <ul className="space-y-2">
              {NAV.map((item, i) => (
                <motion.li
                  key={item.hash}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.05 * i, duration: 0.4, ease: EASE.outCurve },
                  }}
                >
                  <Link
                    href={`/${item.hash}`}
                    onClick={goTo(item.hash)}
                    className="display block py-2 text-4xl"
                  >
                    <span className="label-mono mr-4 !text-brass">0{i + 1}</span>
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/work"
                onClick={() => setOpen(false)}
                className="label-mono border border-line px-5 py-4 text-center !text-bone"
              >
                Project index
              </Link>
              <Link
                href="/notes"
                onClick={() => setOpen(false)}
                className="label-mono border border-line px-5 py-4 text-center !text-bone"
              >
                Notes
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

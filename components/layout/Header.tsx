"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { scrollToAnchor } from "@/components/providers/SmoothScroll";
import { Download } from "@/components/ui/Icons";
import { contact } from "@/lib/data";
import { EASE } from "@/lib/motion";

const NAV = [
  { label: "Work", hash: "#work" },
  { label: "About", hash: "#about" },
  { label: "Expertise", hash: "#expertise" },
  { label: "Record", hash: "#record" },
  { label: "Distinctions", hash: "#distinctions" },
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
      <div className="mx-auto flex h-16 max-w-site items-center justify-between px-7 sm:px-10 md:h-[72px] md:px-16 xl:px-24">
        {/* Monogram until there is room for the full name — never wraps */}
        <Link
          href="/"
          className="whitespace-nowrap font-sans text-sm font-semibold tracking-tight text-bone"
          onClick={() => setOpen(false)}
          aria-label="Ateh Frank Ateh — home"
        >
          <span className="lg:hidden">AFA</span>
          <span className="hidden lg:inline">ATEH FRANK ATEH</span>
          <span className="text-brass">.</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Primary">
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
          <a
            href={contact.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="label-mono group flex items-center gap-2 border border-brass/50 px-4 py-2.5 !text-brass transition-colors hover:bg-brass hover:!text-ink"
          >
            CV
            <Download className="transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </nav>

        {/* Tablet + mobile: CV stays reachable without opening the menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={contact.cv}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="label-mono flex items-center gap-2 border border-brass/50 px-3.5 py-2.5 !text-brass"
          >
            CV
            <Download />
          </a>
          <button
            type="button"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5"
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
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            className="fixed inset-0 top-16 z-[75] flex flex-col justify-between overflow-y-auto bg-ink px-7 pb-10 pt-12 sm:px-10 lg:hidden"
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
            <div className="mt-10 space-y-3">
              <a
                href={contact.cv}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="label-mono flex items-center justify-center gap-3 bg-brass px-5 py-4 !text-ink"
              >
                <Download />
                Download CV
              </a>
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
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

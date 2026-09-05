"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { scrollToAnchor } from "@/components/providers/SmoothScroll";
import { CvDownload } from "@/components/ui/CvDownload";
import { LocaleSwitch } from "@/components/layout/LocaleSwitch";
import { localeFromPath, localizePath, stripLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionary";
import { EASE } from "@/lib/motion";

export function Header({ cvFrAvailable }: { cvFrAvailable: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);
  const basePath = stripLocale(pathname);
  const t = getDictionary(locale);
  const onHome = basePath === "/";

  const home = localizePath(locale, "/");
  const nav = [
    { label: t.nav.about, hash: "#about" },
    { label: t.nav.work, hash: "#work" },
    { label: t.nav.expertise, hash: "#expertise" },
    { label: t.nav.record, hash: "#record" },
    { label: t.nav.distinctions, hash: "#distinctions" },
    { label: t.nav.process, hash: "#process" },
    { label: t.nav.contact, hash: "#contact" },
  ];

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
          href={home}
          className="whitespace-nowrap font-sans text-sm font-semibold tracking-tight text-bone"
          onClick={() => setOpen(false)}
          aria-label={t.nav.homeAria}
        >
          <span className="xl:hidden">AFA</span>
          <span className="hidden xl:inline">ATEH FRANK ATEH</span>
          <span className="text-brass">.</span>
        </Link>

        <nav className="hidden items-center gap-4 xl:flex 2xl:gap-5" aria-label={t.nav.primary}>
          {nav.map((item) => (
            <Link
              key={item.hash}
              href={`${home}${item.hash}`}
              onClick={goTo(item.hash)}
              className="link-quiet label-mono !text-bone/70 transition-colors hover:!text-bone"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={localizePath(locale, "/blog")}
            className={`link-quiet label-mono transition-colors hover:!text-bone ${
              basePath.startsWith("/blog") ? "!text-brass" : "!text-bone/70"
            }`}
          >
            {t.nav.blog}
          </Link>
          <Link
            href={localizePath(locale, "/work")}
            className={`label-mono border border-line px-4 py-2.5 transition-colors hover:border-bone/40 ${
              basePath.startsWith("/work") ? "!text-brass" : "!text-bone"
            }`}
          >
            {t.nav.index}
          </Link>
          <LocaleSwitch />
          <CvDownload locale={locale} frAvailable={cvFrAvailable} />
        </nav>

        {/* Tablet + mobile: language and CV stay reachable without opening the menu */}
        <div className="flex items-center gap-2 xl:hidden">
          <LocaleSwitch />
          <CvDownload
            locale={locale}
            frAvailable={cvFrAvailable}
            className="!px-3.5"
            onOpen={() => setOpen(false)}
          />
          <button
            type="button"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
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
            aria-label={t.nav.mobile}
            className="fixed inset-0 top-16 z-[75] flex flex-col justify-between overflow-y-auto bg-ink px-7 pb-10 pt-12 sm:px-10 xl:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE.outCurve } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            <ul className="space-y-2">
              {nav.map((item, i) => (
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
                    href={`${home}${item.hash}`}
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
              <CvDownload
                locale={locale}
                frAvailable={cvFrAvailable}
                variant="block"
                onOpen={() => setOpen(false)}
              />
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href={localizePath(locale, "/work")}
                  onClick={() => setOpen(false)}
                  className="label-mono border border-line px-5 py-4 text-center !text-bone"
                >
                  {t.nav.projectIndex}
                </Link>
                <Link
                  href={localizePath(locale, "/blog")}
                  onClick={() => setOpen(false)}
                  className="label-mono border border-line px-5 py-4 text-center !text-bone"
                >
                  {t.nav.blog}
                </Link>
              </div>
              <LocaleSwitch
                size="comfortable"
                className="w-full [&>a]:flex-1 [&>a]:text-center"
                onNavigate={() => setOpen(false)}
              />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

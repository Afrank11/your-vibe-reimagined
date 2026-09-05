"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  localeFromPath,
  localeLabels,
  localeNames,
  localizePath,
  locales,
  stripLocale,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionary";

type Props = {
  /** Larger tap targets for the mobile menu. */
  size?: "compact" | "comfortable";
  className?: string;
  onNavigate?: () => void;
};

/**
 * EN / FR. Every page exists at both addresses, so the switch keeps the
 * visitor exactly where they are and only changes the language prefix.
 */
export function LocaleSwitch({ size = "compact", className = "", onNavigate }: Props) {
  const pathname = usePathname() || "/";
  const active = localeFromPath(pathname);
  const basePath = stripLocale(pathname);
  const t = getDictionary(active);

  const pad = size === "compact" ? "px-2.5 py-1.5" : "px-4 py-2.5";

  return (
    <div
      className={`flex items-center border border-line ${className}`}
      role="group"
      aria-label={t.locale.switchAria}
    >
      {locales.map((locale, i) => {
        const isActive = locale === active;
        return (
          <Link
            key={locale}
            href={localizePath(locale, basePath)}
            hrefLang={locale}
            lang={locale}
            onClick={onNavigate}
            aria-current={isActive ? "true" : undefined}
            aria-label={localeNames[locale]}
            className={`label-mono ${pad} transition-colors duration-300 ${
              i > 0 ? "border-l border-line" : ""
            } ${isActive ? "bg-brass !text-ink" : "!text-bone/60 hover:!text-bone"}`}
          >
            {localeLabels[locale]}
          </Link>
        );
      })}
    </div>
  );
}

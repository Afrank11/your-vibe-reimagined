/**
 * Locale plumbing. English lives at the root (`/work`), French under `/fr`
 * (`/fr/work`) — so the existing English URLs and their SEO equity are
 * untouched, and every French page has a real, shareable address.
 */

export const locales = ["en", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
};

/** Short label for the header switch. */
export const localeLabels: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
};

export const htmlLang: Record<Locale, string> = {
  en: "en",
  fr: "fr",
};

export const ogLocale: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
};

/**
 * Prefix an app-relative path (always written in its English form, e.g.
 * "/work/frinux-technologies") with the locale segment.
 */
export function localizePath(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  if (locale === "fr") return `/fr${clean}`;
  return clean === "" ? "/" : clean;
}

/** The locale a pathname belongs to. */
export function localeFromPath(pathname: string): Locale {
  return pathname === "/fr" || pathname.startsWith("/fr/") ? "fr" : "en";
}

/** Drop the locale prefix, returning the canonical English-form path. */
export function stripLocale(pathname: string): string {
  if (pathname === "/fr") return "/";
  if (pathname.startsWith("/fr/")) return pathname.slice(3);
  return pathname;
}

/**
 * `alternates` block for a page's metadata: canonical plus both hreflang
 * variants, so Google serves the right language to the right visitor.
 */
export function alternatesFor(locale: Locale, path: string) {
  return {
    canonical: localizePath(locale, path),
    languages: {
      en: localizePath("en", path),
      fr: localizePath("fr", path),
      "x-default": localizePath("en", path),
    },
  };
}

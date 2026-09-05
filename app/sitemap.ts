import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";
import { caseStudies } from "@/lib/data";
import { articles } from "@/lib/articles";
import { locales, localizePath } from "@/lib/i18n/config";

/**
 * Every page exists in both languages, so each entry is emitted once per
 * locale with the full set of hreflang alternates pointing at its siblings.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: { path: string; lastModified: Date; changeFrequency: "monthly" | "weekly" | "yearly"; priority: number }[] = [
    { path: "/", lastModified: now, changeFrequency: "monthly", priority: 1 },
    { path: "/work", lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...caseStudies.map((c) => ({
      path: `/work/${c.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
    { path: "/notes", lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...articles.map((a) => ({
      path: `/notes/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];

  return pages.flatMap((page) => {
    const languages = Object.fromEntries(
      locales.map((locale) => [locale, `${SITE.url}${localizePath(locale, page.path)}`]),
    );

    return locales.map((locale) => ({
      url: `${SITE.url}${localizePath(locale, page.path)}`,
      lastModified: page.lastModified,
      changeFrequency: page.changeFrequency,
      // the French edition is a translation, not the primary entry point
      priority: locale === "fr" ? Math.max(0.1, page.priority - 0.1) : page.priority,
      alternates: { languages },
    }));
  });
}

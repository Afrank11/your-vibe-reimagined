import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";
import { caseStudies } from "@/lib/data";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...caseStudies.map((c) => ({
      url: `${SITE.url}/work/${c.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
    { url: `${SITE.url}/notes`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...articles.map((a) => ({
      url: `${SITE.url}/notes/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}

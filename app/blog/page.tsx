import type { Metadata } from "next";
import { BlogView } from "@/components/pages/BlogView";
import { alternatesFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionary";

const t = getDictionary("en");

export const metadata: Metadata = {
  title: t.blogPage.title,
  description: t.blogPage.description,
  alternates: alternatesFor("en", "/blog"),
};

export default function BlogPage() {
  return <BlogView locale="en" />;
}

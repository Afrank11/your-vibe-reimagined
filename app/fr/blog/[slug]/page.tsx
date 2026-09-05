import type { Metadata } from "next";
import { ArticleView } from "@/components/pages/ArticleView";
import { articles } from "@/lib/articles";
import { alternatesFor } from "@/lib/i18n/config";
import { getArticleFor } from "@/lib/i18n/articles";
import { SITE } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleFor("fr", slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: alternatesFor("fr", `/blog/${article.slug}`),
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
      authors: [SITE.fullName],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  return <ArticleView locale="fr" slug={slug} />;
}

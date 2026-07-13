import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { MaskedLines } from "@/components/motion/MaskedLines";
import { articles, getArticle, type ArticleBlock } from "@/lib/articles";
import { SITE } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/notes/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
      authors: [SITE.fullName],
    },
  };
}

function Block({ block }: { block: ArticleBlock }) {
  if (block.type === "h2") {
    return <h2 className="display pt-6 text-2xl md:text-3xl">{block.text}</h2>;
  }
  if (block.type === "quote") {
    return (
      <blockquote className="border-l border-brass pl-6">
        <p className="accent-serif text-2xl leading-snug md:text-3xl">{block.text}</p>
      </blockquote>
    );
  }
  return <p className="text-base leading-[1.75] text-silver md:text-lg">{block.text}</p>;
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const index = articles.findIndex((a) => a.slug === article.slug);
  const next = articles[(index + 1) % articles.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    inLanguage: "en",
    url: `${SITE.url}/notes/${article.slug}`,
    author: { "@type": "Person", "@id": `${SITE.url}/#person`, name: SITE.fullName },
  };

  return (
    <article className="mx-auto max-w-site px-7 sm:px-10 pb-28 pt-32 md:px-16 xl:px-24 md:pb-40 md:pt-44">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex flex-wrap items-baseline gap-x-4 gap-y-2 md:mb-14">
          <Link href="/notes" className="link-quiet label-mono !text-brass">
            Notes
          </Link>
          <span className="label-mono">{article.displayDate}</span>
          <span className="label-mono">{article.readingTime} read</span>
          <span className="rule mt-[0.35em] flex-1 self-start" />
        </div>

        <MaskedLines
          as="h1"
          className="display text-[clamp(2rem,4.5vw,3.75rem)]"
          lines={[article.title]}
        />

        <Reveal className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {article.tags.map((tag) => (
            <span key={tag} className="font-mono text-[11px] uppercase tracking-[0.14em] text-smoke">
              {tag}
            </span>
          ))}
        </Reveal>

        <div className="mt-14 space-y-8 md:mt-16">
          {article.body.map((block, i) => (
            <Reveal key={i} delay={Math.min(i * 0.03, 0.15)}>
              <Block block={block} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 md:mt-24">
          <p className="label-mono mb-4">Next entry</p>
          <Link
            href={`/notes/${next.slug}`}
            className="rule group flex items-center justify-between py-6"
          >
            <span className="display text-xl transition-transform duration-300 group-hover:translate-x-2 md:text-2xl">
              {next.title}
            </span>
          </Link>
          <div className="rule" />
        </Reveal>
      </div>
    </article>
  );
}

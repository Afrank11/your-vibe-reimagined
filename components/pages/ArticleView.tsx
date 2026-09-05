import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { MaskedLines } from "@/components/motion/MaskedLines";
import type { ArticleBlock } from "@/lib/articles";
import { htmlLang, localizePath, type Locale } from "@/lib/i18n/config";
import { getArticles } from "@/lib/i18n/articles";
import { getDictionary } from "@/lib/i18n/dictionary";
import { SITE } from "@/lib/seo";

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

export function ArticleView({ locale, slug }: { locale: Locale; slug: string }) {
  const t = getDictionary(locale);
  const articles = getArticles(locale);
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const index = articles.findIndex((a) => a.slug === article.slug);
  const next = articles[(index + 1) % articles.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    inLanguage: htmlLang[locale],
    url: `${SITE.url}${localizePath(locale, `/notes/${article.slug}`)}`,
    author: { "@type": "Person", "@id": `${SITE.url}/#person`, name: SITE.fullName },
  };

  return (
    <article className="mx-auto max-w-site px-7 sm:px-10 pb-28 pt-32 md:px-16 xl:px-24 md:pb-40 md:pt-44">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex flex-wrap items-baseline gap-x-4 gap-y-2 md:mb-14">
          <Link href={localizePath(locale, "/notes")} className="link-quiet label-mono !text-brass">
            {t.notesPage.eyebrow}
          </Link>
          <span className="label-mono">{article.displayDate}</span>
          <span className="label-mono">
            {article.readingTime} {t.notesPage.readSuffix}
          </span>
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
          <p className="label-mono mb-4">{t.notesPage.nextEntry}</p>
          <Link
            href={localizePath(locale, `/notes/${next.slug}`)}
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

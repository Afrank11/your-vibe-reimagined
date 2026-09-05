import Link from "next/link";
import { MaskedLines } from "@/components/motion/MaskedLines";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";
import { localizePath, type Locale } from "@/lib/i18n/config";
import { getArticles } from "@/lib/i18n/articles";
import { getDictionary } from "@/lib/i18n/dictionary";

export function NotesView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const articles = getArticles(locale);

  return (
    <div className="mx-auto max-w-site px-7 sm:px-10 pb-28 pt-32 md:px-16 xl:px-24 md:pb-40 md:pt-44">
      <div className="mb-10 flex items-baseline gap-4 md:mb-14">
        <span className="label-mono !text-brass">{t.notesPage.eyebrow}</span>
        <span className="label-mono">{t.notesPage.count(articles.length)}</span>
        <span className="rule mt-[0.35em] flex-1 self-start" />
      </div>

      <MaskedLines
        as="h1"
        className="display text-[clamp(2.8rem,7vw,7rem)]"
        lines={[
          <span key="1">{t.notesPage.headingA}</span>,
          <span key="2">
            <span className="accent-serif">{t.notesPage.headingAccent}</span>
          </span>,
        ]}
      />

      <Reveal className="mt-8 max-w-xl">
        <p className="text-base leading-relaxed text-silver">{t.notesPage.intro}</p>
      </Reveal>

      <div className="mt-16 md:mt-20">
        <Reveal stagger>
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={localizePath(locale, `/notes/${article.slug}`)}
              className="rule group grid gap-3 py-8 transition-colors duration-300 hover:bg-ink-2 md:grid-cols-12 md:gap-6 md:px-2 md:py-10"
            >
              <span className="label-mono md:col-span-2">{article.displayDate}</span>
              <span className="md:col-span-7">
                <span className="display block text-2xl transition-transform duration-300 group-hover:translate-x-2 md:text-3xl">
                  {article.title}
                </span>
                <span className="mt-3 block max-w-[65ch] text-sm leading-relaxed text-silver">
                  {article.excerpt}
                </span>
              </span>
              <span className="flex items-start justify-between gap-3 md:col-span-3 md:justify-end">
                <span className="flex flex-wrap gap-x-4 gap-y-1 md:justify-end">
                  {article.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[11px] tracking-wide text-smoke">
                      {tag}
                    </span>
                  ))}
                </span>
                <ArrowUpRight className="mt-0.5 shrink-0 text-smoke transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brass" />
              </span>
            </Link>
          ))}
        </Reveal>
        <div className="rule" />
      </div>
    </div>
  );
}

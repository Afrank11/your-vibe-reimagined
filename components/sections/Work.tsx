import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { FadeThrough } from "@/components/motion/FadeThrough";
import { ArrowUpRight } from "@/components/ui/Icons";
import { type CaseStudy } from "@/lib/data";
import { localizePath, type Locale } from "@/lib/i18n/config";
import { getContent } from "@/lib/i18n/content";
import { getDictionary, type Dictionary } from "@/lib/i18n/dictionary";
import { resolvePublicImage } from "@/lib/resolve-image";

function MetaRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rule py-4">
      <p className="label-mono mb-2 !text-brass">{label}</p>
      <p className="text-sm leading-relaxed text-silver">{children}</p>
    </div>
  );
}

type PanelProps = { project: CaseStudy; flip: boolean; locale: Locale; t: Dictionary };

function CasePanel({ project, flip, locale, t }: PanelProps) {
  const image = resolvePublicImage(project.image);
  const href = localizePath(locale, `/work/${project.slug}`);

  return (
    <article className="grid gap-8 md:grid-cols-12 md:gap-10">
      {/* Visual panel — screenshot showcase (typographic composition as fallback) */}
      <div className={`md:col-span-7 ${flip ? "md:order-2" : ""}`}>
        <Link
          href={href}
          aria-label={t.work.readCaseStudyAria(project.title)}
          className="group relative block aspect-[4/3] overflow-hidden bg-ink-2 md:aspect-[16/11]"
        >
          {image ? (
            <>
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={image}
                  alt={`${project.title} — ${project.kind}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className={`transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
                    project.imageFit === "contain" ? "object-contain p-10 md:p-16" : "object-cover"
                  }`}
                />
              </div>
              {/* readability scrim — solid at the baseline so type reads over
                  any screenshot, dark or light */}
              <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#070707] via-[#070707]/80 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-8">
                <div>
                  <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#c2a57b]">
                    {project.kind}
                  </p>
                  <p
                    className="display text-2xl !text-[#edece6] transition-transform duration-500 ease-out group-hover:-translate-y-1 md:text-4xl"
                    style={{ textShadow: "0 1px 12px rgba(7,7,7,0.9)" }}
                  >
                    {project.title}
                  </p>
                </div>
                <span className="mb-1 flex h-10 w-10 items-center justify-center border border-bone/25 bg-ink/60 opacity-100 transition-all duration-500 md:opacity-0 md:group-hover:opacity-100">
                  <ArrowUpRight className="text-bone" />
                </span>
              </div>
              <span className="label-mono absolute right-4 top-4 bg-[#070707]/85 px-2.5 py-1.5 !text-[#c2a57b]">
                {project.index}
              </span>
            </>
          ) : (
            <Parallax speed={0.08} className="absolute inset-0">
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-smoke">
                    {project.kind}
                  </span>
                  <span className="font-serif text-7xl italic leading-none text-bone/[0.07] transition-colors duration-700 group-hover:text-brass/20 md:text-9xl">
                    {project.index}
                  </span>
                </div>
                <div>
                  <p className="display text-[clamp(2rem,4.5vw,4rem)] transition-transform duration-700 ease-out group-hover:-translate-y-1.5">
                    {project.title}
                  </p>
                  <div className="rule mt-6 flex flex-wrap gap-x-5 gap-y-2 pt-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[11px] tracking-wide text-smoke">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Parallax>
          )}
          {/* corner ticks — technical-drawing framing */}
          <span aria-hidden className="absolute left-3 top-3 h-3 w-3 border-l border-t border-bone/20" />
          <span aria-hidden className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-bone/20" />
        </Link>

        {/* Mobile: preview only — one short line + the doorway */}
        <div className="mt-4 md:hidden">
          <p className="line-clamp-2 text-sm leading-relaxed text-silver">{project.summary}</p>
          <Link
            href={href}
            className="mt-3 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-brass"
          >
            <span className="link-quiet">{t.work.viewCaseStudy}</span>
            <ArrowUpRight />
          </Link>
        </div>
      </div>

      {/* Case-study meta — desktop only; mobile gets the compact preview above */}
      <div className={`hidden md:block md:col-span-5 ${flip ? "md:order-1" : ""}`}>
        <div className="flex h-full flex-col justify-between">
          <div>
            <h3 className="sr-only">{project.title}</h3>
            <MetaRow label={t.work.context}>{project.context}</MetaRow>
            <MetaRow label={t.work.role}>{project.role}</MetaRow>
            <MetaRow label={t.work.outcome}>{project.outcome}</MetaRow>
            <MetaRow label={t.work.lesson}>{project.lesson}</MetaRow>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link
              href={href}
              className="group/link inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-brass"
            >
              <span className="link-quiet">{t.work.readCaseStudy}</span>
              <ArrowUpRight className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </Link>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-bone"
              >
                <span className="link-quiet">{t.work.visitLiveSite}</span>
                <ArrowUpRight className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export function Work({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const { caseStudies, archiveProjects } = getContent(locale);

  return (
    <section id="work" className="mx-auto max-w-site scroll-mt-24 px-7 sm:px-10 py-28 md:px-16 xl:px-24 md:py-40">
      <SectionHeading
        index="04"
        label={t.work.label}
        lines={[
          <span key="1">
            {t.work.headingA}
            <span className="accent-serif">{t.work.headingAccent}</span>
            {t.work.headingB}
          </span>,
        ]}
      />

      {/* one case on stage at a time: each panel dissolves in, then hands over */}
      <div className="mt-16 space-y-16 md:mt-24 md:space-y-40">
        {caseStudies.map((project, i) => (
          <FadeThrough key={project.slug}>
            <CasePanel project={project} flip={i % 2 === 1} locale={locale} t={t} />
          </FadeThrough>
        ))}
      </div>

      <Reveal className="mt-20 md:mt-28">
        <Link
          href={localizePath(locale, "/work")}
          className="rule group flex items-center justify-between py-8 transition-colors duration-300 hover:bg-ink-2 md:px-4"
        >
          <span className="display text-2xl md:text-4xl">
            {t.work.fullIndex(archiveProjects.length)}
          </span>
          <ArrowUpRight
            size={28}
            className="text-silver transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brass"
          />
        </Link>
        <div className="rule" />
      </Reveal>
    </section>
  );
}

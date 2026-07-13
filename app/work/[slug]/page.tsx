import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { resolvePublicImage } from "@/lib/resolve-image";
import { MaskedLines } from "@/components/motion/MaskedLines";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { ArrowUpRight } from "@/components/ui/Icons";
import { caseStudies } from "@/lib/data";
import { SITE } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} — Case Study`,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: { title: `${study.title} — Case Study by Frank Ateh`, description: study.summary },
  };
}

function NarrativeBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <div className="rule pt-8">
        <p className="label-mono mb-5 !text-brass">{label}</p>
        {children}
      </div>
    </Reveal>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  const index = caseStudies.findIndex((c) => c.slug === study.slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <article className="mx-auto max-w-site px-6 pb-28 pt-32 md:px-10 md:pb-40 md:pt-44">
      {/* Title block */}
      <div className="mb-10 flex flex-wrap items-baseline gap-x-4 gap-y-2 md:mb-14">
        <Link href="/work" className="link-quiet label-mono !text-brass">
          Work
        </Link>
        <span className="label-mono">Case {study.index}</span>
        <span className="label-mono">{study.year}</span>
        <span className="rule mt-[0.35em] flex-1 self-start" />
        <span className="label-mono hidden md:block">{study.kind}</span>
      </div>

      <MaskedLines
        as="h1"
        className="display text-[clamp(2.8rem,8vw,8rem)]"
        lines={[study.title]}
      />

      <Reveal className="mt-8 max-w-2xl">
        <p className="text-lg leading-relaxed text-silver md:text-xl">{study.summary}</p>
      </Reveal>

      {/* Cinematic hero panel — full-bleed screenshot when available */}
      <Reveal className="mt-16 md:mt-20">
        <div className="relative aspect-[16/8] overflow-hidden bg-ink-2 md:aspect-[16/7]">
          {resolvePublicImage(study.image) ? (
            <>
              <Image
                src={study.image!}
                alt={`${study.title} — ${study.kind}`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 90vw"
                className={
                  study.imageFit === "contain" ? "object-contain p-10 md:p-20" : "object-cover"
                }
              />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-ink/80 to-transparent" />
            </>
          ) : (
            <Parallax speed={0.1} className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-[30vw] italic leading-none text-bone/[0.05] md:text-[18vw]">
                {study.index}
              </span>
            </Parallax>
          )}
          <span aria-hidden className="absolute left-4 top-4 h-3 w-3 border-l border-t border-bone/20" />
          <span aria-hidden className="absolute bottom-4 right-4 h-3 w-3 border-b border-r border-bone/20" />
          <span className="label-mono absolute bottom-4 left-4">{study.group}</span>
        </div>
      </Reveal>

      {/* Facts rail + narrative */}
      <div className="mt-16 grid gap-14 md:mt-24 md:grid-cols-12 md:gap-10">
        <aside className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <Reveal stagger>
              <div className="rule py-4">
                <p className="label-mono mb-2">Year</p>
                <p className="font-mono text-xs text-bone">{study.year}</p>
              </div>
              <div className="rule py-4">
                <p className="label-mono mb-2">Field</p>
                <p className="font-mono text-xs text-bone">{study.group}</p>
              </div>
              <div className="rule py-4">
                <p className="label-mono mb-2">Role</p>
                <p className="text-sm leading-relaxed text-silver">{study.role}</p>
              </div>
              <div className="rule py-4">
                <p className="label-mono mb-2">Stack</p>
                <p className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {study.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[11px] tracking-wide text-silver">
                      {tag}
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
            <div className="rule" />
            {study.demo && (
              <Reveal className="mt-8">
                <a
                  href={study.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-between bg-bone px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-brass"
                >
                  Visit live site
                  <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Reveal>
            )}
          </div>
        </aside>

        <div className="space-y-14 md:col-span-7 md:col-start-6 md:space-y-16">
          <NarrativeBlock label="Context">
            <p className="text-base leading-[1.75] text-silver md:text-lg">{study.context}</p>
          </NarrativeBlock>

          <NarrativeBlock label="The problem">
            <p className="text-base leading-[1.75] text-silver md:text-lg">{study.problem}</p>
          </NarrativeBlock>

          <NarrativeBlock label="Decisions">
            <div className="space-y-8">
              {study.decisions.map((decision, i) => (
                <div key={decision.title} className="grid gap-3 md:grid-cols-12">
                  <span className="font-mono text-xs text-smoke md:col-span-1">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <div className="md:col-span-11">
                    <h3 className="display text-lg md:text-xl">{decision.title}</h3>
                    <p className="mt-2 text-sm leading-[1.75] text-silver md:text-base">
                      {decision.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </NarrativeBlock>

          <NarrativeBlock label="Challenges">
            <p className="text-base leading-[1.75] text-silver md:text-lg">{study.challenges}</p>
          </NarrativeBlock>

          <NarrativeBlock label="Result">
            <p className="text-base leading-[1.75] text-silver md:text-lg">{study.result}</p>
          </NarrativeBlock>

          <NarrativeBlock label="Lesson">
            <p className="accent-serif text-2xl leading-snug md:text-3xl">{study.lesson}</p>
          </NarrativeBlock>
        </div>
      </div>

      {/* Next case */}
      <Reveal className="mt-24 md:mt-36">
        <p className="label-mono mb-4">Next case</p>
        <Link
          href={`/work/${next.slug}`}
          className="rule group flex items-center justify-between py-8 transition-colors duration-300 hover:bg-ink-2 md:px-4"
        >
          <span className="flex items-baseline gap-6">
            <span className="font-serif text-3xl italic text-bone/20 md:text-5xl">{next.index}</span>
            <span className="display text-2xl transition-transform duration-300 group-hover:translate-x-2 md:text-5xl">
              {next.title}
            </span>
          </span>
          <ArrowUpRight
            size={28}
            className="shrink-0 text-silver transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brass"
          />
        </Link>
        <div className="rule" />
      </Reveal>
    </article>
  );
}

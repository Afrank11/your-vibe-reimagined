import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { FadeThrough } from "@/components/motion/FadeThrough";
import { StoryExpander } from "./StoryExpander";
import type { Locale } from "@/lib/i18n/config";
import { getContent } from "@/lib/i18n/content";
import { getDictionary } from "@/lib/i18n/dictionary";

export function About({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const { story, facts } = getContent(locale);

  return (
    <section id="about" className="scroll-mt-24">
      {/* the hero dissolves out while this dissolves in — a crossfade, not a scroll-past */}
      <FadeThrough className="mx-auto max-w-site px-7 sm:px-10 py-28 md:px-16 xl:px-24 md:py-40">
      <SectionHeading
        index="02"
        label={t.about.label}
        lines={[
          <span key="1">{t.about.headingA}</span>,
          <span key="2">
            {t.about.headingB}
            <span className="accent-serif">{t.about.headingAccent}</span>
            {t.about.headingC}
          </span>,
        ]}
      />

      <div className="mt-14 grid gap-14 md:mt-20 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-ink-2">
              <Parallax speed={0.12} className="absolute -inset-y-[8%] inset-x-0">
                <Image
                  src="/ateh.jpg"
                  alt={t.about.portraitAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover grayscale transition-[filter] duration-700 ease-out hover:grayscale-0"
                />
              </Parallax>
              <span className="label-mono absolute bottom-4 left-4 bg-ink/80 px-3 py-2">
                {t.about.caption} — {new Date().getFullYear()}
              </span>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            <StoryExpander locale={locale} intro={story[0]} rest={story.slice(1)} />
          </Reveal>

          <Reveal className="mt-12" stagger>
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="rule flex items-baseline justify-between gap-6 py-3.5"
              >
                <span className="label-mono shrink-0">{fact.label}</span>
                {fact.href ? (
                  <a
                    href={fact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-quiet text-right font-mono text-xs tracking-wide text-bone transition-colors hover:text-brass"
                  >
                    {fact.value}
                  </a>
                ) : (
                  <span className="text-right font-mono text-xs tracking-wide text-bone">
                    {fact.value}
                  </span>
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </div>
      </FadeThrough>
    </section>
  );
}

import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import type { Locale } from "@/lib/i18n/config";
import { getContent } from "@/lib/i18n/content";
import { getDictionary } from "@/lib/i18n/dictionary";

export function Process({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const { process } = getContent(locale);

  return (
    // second light passage — the page alternates dark and light movements
    <section id="process" className="theme-light border-y border-line bg-ink text-bone">
      <div className="mx-auto max-w-site scroll-mt-24 px-7 sm:px-10 py-28 md:px-16 xl:px-24 md:py-40">
        <SectionHeading
          index="06"
          label={t.process.label}
          lines={[
            <span key="1">
              {t.process.headingA}
              <span className="accent-serif">{t.process.headingAccent}</span>
              {t.process.headingB}
            </span>,
          ]}
        />

        <Reveal stagger className="mt-14 grid gap-px overflow-hidden border border-line bg-line md:mt-20 md:grid-cols-3">
          {process.map((step) => (
            <div key={step.index} className="group bg-ink-2 p-8 transition-colors duration-300 hover:bg-ink md:p-10">
              <p className="font-mono text-xs text-smoke transition-colors duration-300 group-hover:text-brass">
                {step.index}
              </p>
              <h3 className="display mt-6 text-xl md:text-2xl">{step.title}</h3>
              <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-silver">
                {step.description}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

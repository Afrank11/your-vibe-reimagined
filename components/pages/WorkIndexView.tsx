import { MaskedLines } from "@/components/motion/MaskedLines";
import { Reveal } from "@/components/motion/Reveal";
import { WorkIndex } from "@/components/sections/WorkIndex";
import type { Locale } from "@/lib/i18n/config";
import { getContent } from "@/lib/i18n/content";
import { getDictionary } from "@/lib/i18n/dictionary";

export function WorkIndexView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const { archiveProjects } = getContent(locale);

  return (
    <div className="mx-auto max-w-site px-7 sm:px-10 pb-28 pt-32 md:px-16 xl:px-24 md:pb-40 md:pt-44">
      <div className="mb-10 flex items-baseline gap-4 md:mb-14">
        <span className="label-mono !text-brass">{t.workPage.eyebrow}</span>
        <span className="label-mono">{t.workPage.count(archiveProjects.length)}</span>
        <span className="rule mt-[0.35em] flex-1 self-start" />
      </div>

      <MaskedLines
        as="h1"
        className="display text-[clamp(2.8rem,7vw,7rem)]"
        lines={[
          <span key="1">{t.workPage.headingA}</span>,
          <span key="2">
            {t.workPage.headingB}
            <span className="accent-serif">{t.workPage.headingAccent}</span>
          </span>,
        ]}
      />

      <Reveal className="mt-8 max-w-xl">
        <p className="text-base leading-relaxed text-silver">{t.workPage.intro}</p>
      </Reveal>

      <div className="mt-16 md:mt-20">
        <WorkIndex locale={locale} />
      </div>
    </div>
  );
}

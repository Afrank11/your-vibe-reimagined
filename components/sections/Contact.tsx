import { MaskedLines } from "@/components/motion/MaskedLines";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { CvDownload } from "@/components/ui/CvDownload";
import { ArrowUpRight } from "@/components/ui/Icons";
import { contact } from "@/lib/data";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionary";

type Props = { locale: Locale; cvFrAvailable: boolean };

export function Contact({ locale, cvFrAvailable }: Props) {
  const t = getDictionary(locale);

  const channels = [
    { label: t.contact.email, value: contact.email, href: `mailto:${contact.email}` },
    { label: t.contact.phone, value: contact.phonePrimary, href: contact.whatsapp },
    { label: t.contact.phone, value: contact.phoneSecondary, href: contact.whatsappSecondary },
    { label: t.contact.github, value: "github.com/Afrank11", href: contact.github },
    { label: t.contact.linkedin, value: "in/frank-ateh-ateh", href: contact.linkedin },
  ];

  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-site scroll-mt-24 px-7 sm:px-10 py-28 md:px-16 xl:px-24 md:py-44">
        <div className="mb-10 flex items-baseline gap-4 md:mb-16">
          <span className="label-mono !text-brass">08</span>
          <span className="label-mono">{t.contact.label}</span>
          <span className="rule mt-[0.35em] flex-1 self-start" />
          <span className="label-mono hidden md:block">{t.contact.replies}</span>
        </div>

        <MaskedLines
          as="h2"
          className="display text-[clamp(2.8rem,8vw,8rem)]"
          lines={[
            <span key="1">{t.contact.headingA}</span>,
            <span key="2">
              {t.contact.headingB}
              <span className="accent-serif">{t.contact.headingAccent}</span>
            </span>,
          ]}
        />

        <Reveal className="mt-8 max-w-xl">
          <p className="text-base leading-relaxed text-silver md:text-lg">{t.contact.intro}</p>
        </Reveal>

        <div className="mt-16 md:mt-20">
          <Reveal className="mb-4 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brass" />
            </span>
            <p className="label-mono">{t.contact.pickChannel}</p>
          </Reveal>
          <Reveal stagger pop duration={0.7}>
            {channels.map((channel) => (
              <a
                key={channel.value}
                href={channel.href}
                target={channel.href.startsWith("mailto") ? undefined : "_blank"}
                rel={channel.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="rule group flex items-center justify-between gap-4 py-6 transition-colors duration-300 hover:bg-ink-2 md:px-4 md:py-8"
              >
                <span className="label-mono w-24 shrink-0 md:w-40">{channel.label}</span>
                <span className="display flex-1 truncate text-xl transition-transform duration-300 group-hover:translate-x-2 md:text-3xl">
                  {channel.value}
                </span>
                <span className="animate-nudge shrink-0">
                  <ArrowUpRight
                    size={22}
                    className="text-smoke transition-colors duration-300 group-hover:text-brass"
                  />
                </span>
              </a>
            ))}
          </Reveal>
          <div className="rule" />
        </div>

        <Reveal className="mt-14 flex flex-wrap items-center gap-4">
          <Magnetic>
            <CvDownload locale={locale} frAvailable={cvFrAvailable} variant="solid" />
          </Magnetic>
          <p className="label-mono">
            {t.cv.fileNote} — {t.cv.english} · {t.cv.french}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

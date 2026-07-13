import { MaskedLines } from "@/components/motion/MaskedLines";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { ArrowUpRight, Download } from "@/components/ui/Icons";
import { contact } from "@/lib/data";

const CHANNELS = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "WhatsApp", value: contact.phonePrimary, href: contact.whatsapp },
  { label: "GitHub", value: "github.com/Afrank11", href: contact.github },
  { label: "LinkedIn", value: "in/frank-ateh-ateh", href: contact.linkedin },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-site scroll-mt-24 px-7 sm:px-10 py-28 md:px-16 xl:px-24 md:py-44">
        <div className="mb-10 flex items-baseline gap-4 md:mb-16">
          <span className="label-mono !text-brass">08</span>
          <span className="label-mono">Contact</span>
          <span className="rule mt-[0.35em] flex-1 self-start" />
          <span className="label-mono hidden md:block">Replies within 24h</span>
        </div>

        <MaskedLines
          as="h2"
          className="display text-[clamp(2.8rem,8vw,8rem)]"
          lines={[
            <span key="1">Let’s build something</span>,
            <span key="2">
              that <span className="accent-serif">lasts.</span>
            </span>,
          ]}
        />

        <Reveal className="mt-8 max-w-xl">
          <p className="text-base leading-relaxed text-silver md:text-lg">
            A product to launch, a site that should feel premium, a network that
            has to hold — tell me what you’re building and where it needs to go.
          </p>
        </Reveal>

        <div className="mt-16 md:mt-20">
          <Reveal className="mb-4 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brass" />
            </span>
            <p className="label-mono">Pick a channel — every row is one click</p>
          </Reveal>
          <Reveal stagger pop duration={0.7}>
            {CHANNELS.map((channel) => (
              <a
                key={channel.label}
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
            <a
              href={contact.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-bone px-7 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-brass"
            >
              <Download />
              Download CV
            </a>
          </Magnetic>
          <p className="label-mono">PDF — English</p>
        </Reveal>
      </div>
    </section>
  );
}

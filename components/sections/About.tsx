import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { story, facts } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-site scroll-mt-24 px-6 py-28 md:px-10 md:py-40">
      <SectionHeading
        index="02"
        label="About"
        lines={[
          <span key="1">From a locked phone</span>,
          <span key="2">
            to <span className="accent-serif">production</span> networks.
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
                  alt="Frank Ateh, telecommunications engineer and web developer, in Yaoundé"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover grayscale transition-[filter] duration-700 ease-out hover:grayscale-0"
                />
              </Parallax>
              <span className="label-mono absolute bottom-4 left-4 bg-ink/80 px-3 py-2">
                Yaoundé, CM — {new Date().getFullYear()}
              </span>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <div className="space-y-6">
            {story.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="max-w-[62ch] text-base leading-relaxed text-silver md:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12" stagger>
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="rule flex items-baseline justify-between gap-6 py-3.5"
              >
                <span className="label-mono shrink-0">{fact.label}</span>
                <span className="text-right font-mono text-xs tracking-wide text-bone">
                  {fact.value}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { expertise } from "@/lib/data";

/**
 * Capabilities as a ledger, not cards. This is the site's first LIGHT
 * passage — .theme-light flips the color tokens so the page breathes
 * between dark movements. Rows slide in from alternating sides.
 */
export function Expertise() {
  return (
    // overflow-hidden contains the rows' slide-in offsets, which would
    // otherwise push past the viewport and create horizontal scroll
    <section
      id="expertise"
      className="theme-light scroll-mt-24 overflow-hidden border-y border-line bg-ink text-bone"
    >
      <div className="mx-auto max-w-site px-7 sm:px-10 py-28 md:px-16 xl:px-24 md:py-40">
        <SectionHeading
          index="03"
          label="Expertise"
          lines={[
            <span key="1">
              Capabilities, <span className="accent-serif">not</span> keywords.
            </span>,
          ]}
        />

        <div className="mt-14 md:mt-20">
          {expertise.map((item, i) => (
            <Reveal
              key={item.index}
              from={i % 2 === 0 ? "left" : "right"}
              duration={0.9}
              delay={Math.min(i * 0.03, 0.15)}
            >
              <div className="rule group grid gap-4 py-8 transition-colors duration-300 hover:bg-ink-2 md:grid-cols-12 md:items-baseline md:gap-6 md:px-4 md:py-10">
                <span className="label-mono !text-brass md:col-span-1">{item.index}</span>
                <h3 className="display text-2xl md:col-span-4 md:text-3xl">{item.title}</h3>
                <p className="max-w-[52ch] text-sm leading-relaxed text-silver md:col-span-4 md:text-base">
                  {item.description}
                </p>
                <ul className="flex flex-wrap gap-x-4 gap-y-2 md:col-span-3 md:justify-end">
                  {item.tools.map((tool) => (
                    <li
                      key={tool}
                      className="font-mono text-[11px] tracking-wide text-smoke transition-colors duration-300 group-hover:text-silver"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
          <div className="rule" />
        </div>
      </div>
    </section>
  );
}

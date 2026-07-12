import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { process } from "@/lib/data";

export function Process() {
  return (
    <section id="process" className="border-y border-line bg-ink-2">
      <div className="mx-auto max-w-site scroll-mt-24 px-6 py-28 md:px-10 md:py-40">
        <SectionHeading
          index="06"
          label="Process"
          lines={[
            <span key="1">
              A method you can <span className="accent-serif">rely</span> on.
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

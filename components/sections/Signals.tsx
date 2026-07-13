import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { testimonials, trustedBy, stats } from "@/lib/data";

/**
 * Social proof. Testimonials render automatically once added to lib/data.ts;
 * until then the section leads with verifiable trust: organizations and numbers.
 */
export function Signals() {
  return (
    <section id="signals" className="mx-auto max-w-site scroll-mt-24 px-7 sm:px-10 py-28 md:px-16 xl:px-24 md:py-40">
      <SectionHeading
        index="07"
        label="Signals"
        lines={[
          <span key="1">
            The work <span className="accent-serif">speaks</span> first.
          </span>,
        ]}
      />

      {testimonials.length > 0 && (
        <div className="mt-14 space-y-12 md:mt-20">
          {testimonials.map((t) => (
            <Reveal key={t.name}>
              <blockquote className="max-w-3xl">
                <p className="display text-2xl leading-snug md:text-4xl">
                  <span className="accent-serif">“</span>
                  {t.quote}
                  <span className="accent-serif">”</span>
                </p>
                <footer className="mt-6">
                  <p className="font-mono text-xs text-bone">{t.name}</p>
                  <p className="label-mono mt-1">{t.role}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      )}

      <Reveal stagger className="mt-14 grid grid-cols-2 gap-px border border-line bg-line md:mt-20 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-ink p-8 md:p-10">
            <p className="display text-4xl md:text-5xl">
              {stat.value}
            </p>
            <p className="label-mono mt-3">{stat.label}</p>
          </div>
        ))}
      </Reveal>

      <Reveal className="mt-16 md:mt-20">
        <p className="label-mono mb-6">Built with & for</p>
        <ul className="flex flex-wrap gap-x-10 gap-y-4">
          {trustedBy.map((org) => (
            <li key={org} className="font-sans text-lg font-medium tracking-tight text-smoke transition-colors duration-300 hover:text-bone">
              {org}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

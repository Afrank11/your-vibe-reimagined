import Link from "next/link";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { ArrowUpRight } from "@/components/ui/Icons";
import { caseStudies, archiveProjects, type CaseStudy } from "@/lib/data";

function MetaRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rule py-4">
      <p className="label-mono mb-2 !text-brass">{label}</p>
      <p className="text-sm leading-relaxed text-silver">{children}</p>
    </div>
  );
}

function CasePanel({ project, flip }: { project: CaseStudy; flip: boolean }) {
  return (
    <article className="grid gap-8 md:grid-cols-12 md:gap-10">
      {/* Visual panel: abstract typographic composition, parallax drift — doorway to the case study */}
      <Reveal
        className={`md:col-span-7 ${flip ? "md:order-2" : ""}`}
      >
        <Link
          href={`/work/${project.slug}`}
          aria-label={`Read the ${project.title} case study`}
          className="group relative block aspect-[4/3] overflow-hidden bg-ink-2 md:aspect-[16/11]">
          <Parallax speed={0.08} className="absolute inset-0">
            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-smoke">
                  {project.kind}
                </span>
                <span className="font-serif text-7xl italic leading-none text-bone/[0.07] transition-colors duration-700 group-hover:text-brass/20 md:text-9xl">
                  {project.index}
                </span>
              </div>
              <div>
                <p className="display text-[clamp(2rem,4.5vw,4rem)] transition-transform duration-700 ease-out group-hover:-translate-y-1.5">
                  {project.title}
                </p>
                <div className="rule mt-6 flex flex-wrap gap-x-5 gap-y-2 pt-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[11px] tracking-wide text-smoke">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Parallax>
          {/* corner ticks — technical-drawing framing */}
          <span aria-hidden className="absolute left-3 top-3 h-3 w-3 border-l border-t border-bone/20" />
          <span aria-hidden className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-bone/20" />
        </Link>
      </Reveal>

      {/* Case-study meta */}
      <Reveal delay={0.12} className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}>
        <div className="flex h-full flex-col justify-between">
          <div>
            <h3 className="sr-only">{project.title}</h3>
            <MetaRow label="Context">{project.context}</MetaRow>
            <MetaRow label="Role">{project.role}</MetaRow>
            <MetaRow label="Outcome">{project.outcome}</MetaRow>
            <MetaRow label="Lesson">{project.lesson}</MetaRow>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link
              href={`/work/${project.slug}`}
              className="group/link inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-brass"
            >
              <span className="link-quiet">Read case study</span>
              <ArrowUpRight className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </Link>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-bone"
              >
                <span className="link-quiet">Visit live site</span>
                <ArrowUpRight className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            )}
          </div>
        </div>
      </Reveal>
    </article>
  );
}

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-site scroll-mt-24 px-6 py-28 md:px-10 md:py-40">
      <SectionHeading
        index="04"
        label="Selected work"
        lines={[
          <span key="1">
            Projects that <span className="accent-serif">carry</span> weight.
          </span>,
        ]}
      />

      <div className="mt-16 space-y-24 md:mt-24 md:space-y-36">
        {caseStudies.map((project, i) => (
          <CasePanel key={project.slug} project={project} flip={i % 2 === 1} />
        ))}
      </div>

      <Reveal className="mt-20 md:mt-28">
        <Link
          href="/work"
          className="rule group flex items-center justify-between py-8 transition-colors duration-300 hover:bg-ink-2 md:px-4"
        >
          <span className="display text-2xl md:text-4xl">
            Full index — {archiveProjects.length} projects
          </span>
          <ArrowUpRight
            size={28}
            className="text-silver transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brass"
          />
        </Link>
        <div className="rule" />
      </Reveal>
    </section>
  );
}

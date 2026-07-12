import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";
import { caseStudies, archiveProjects, type CaseStudy } from "@/lib/data";

/**
 * Screenshot auto-detection (build time): drop a capture at
 * public/projects/<slug>.jpg (or .png/.webp) and the card uses it —
 * no code change needed. Until then, an abstract composition holds the frame.
 */
function screenshotFor(slug: string): string | null {
  for (const ext of ["jpg", "jpeg", "png", "webp"]) {
    if (fs.existsSync(path.join(process.cwd(), "public", "projects", `${slug}.${ext}`))) {
      return `/projects/${slug}.${ext}`;
    }
  }
  return null;
}

/** Abstract stand-in visual: dot grid + oversized index numeral. */
function AbstractVisual({ project }: { project: CaseStudy }) {
  return (
    <div className="absolute inset-0">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(237,236,230,0.14) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <span className="label-mono absolute left-6 top-6">{project.kind}</span>
      <span className="absolute bottom-2 right-6 font-serif text-[9rem] italic leading-none text-bone/[0.07] transition-colors duration-700 group-hover:text-brass/25 md:text-[13rem]">
        {project.index}
      </span>
    </div>
  );
}

function ShowcaseCard({
  project,
  shot,
  wide,
}: {
  project: CaseStudy;
  shot: string | null;
  wide: boolean;
}) {
  return (
    <Reveal>
      <Link
        href={`/work/${project.slug}`}
        aria-label={`Open the ${project.title} case study`}
        className="group block"
        data-cursor="hover"
      >
        {/* the visual — ~80% of the card */}
        <div
          className={`relative overflow-hidden bg-ink-2 ${
            wide ? "aspect-[16/9] md:aspect-[21/10]" : "aspect-[16/10]"
          }`}
        >
          {shot ? (
            <>
              <Image
                src={shot}
                alt={`${project.title} — interface`}
                fill
                sizes={wide ? "(max-width: 768px) 100vw, 1600px" : "(max-width: 768px) 100vw, 50vw"}
                className="object-cover object-top transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
              />
              {/* dark veil lifts on hover — the Netflix move */}
              <div className="absolute inset-0 bg-ink/40 transition-opacity duration-500 group-hover:opacity-0" />
              <span className="label-mono absolute left-6 top-6 bg-ink/70 px-3 py-1.5">
                {project.kind}
              </span>
            </>
          ) : (
            <AbstractVisual project={project} />
          )}

          {/* technical corner ticks */}
          <span aria-hidden className="absolute left-3 top-3 h-3 w-3 border-l border-t border-bone/25" />
          <span aria-hidden className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-bone/25" />
        </div>

        {/* the caption bar */}
        <div className="rule flex items-start justify-between gap-6 py-5 md:py-6">
          <div className="min-w-0">
            <h3 className="display text-2xl transition-colors duration-300 md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-2 max-w-[64ch] text-sm leading-relaxed text-silver">
              {project.summary}
            </p>
            <p className="mt-3 font-mono text-[11px] tracking-[0.14em] text-smoke">
              {project.tags.join(" · ")}
            </p>
          </div>
          {/* arrow slides into view on hover */}
          <span className="mt-2 shrink-0 translate-x-2 opacity-0 transition-all duration-400 ease-out group-hover:translate-x-0 group-hover:opacity-100">
            <ArrowUpRight size={26} className="text-brass" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function Work() {
  const shots = Object.fromEntries(caseStudies.map((c) => [c.slug, screenshotFor(c.slug)]));

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

      {/* editorial pacing: flagship full-width, then two-up, then full-width */}
      <div className="mt-16 space-y-16 md:mt-24 md:space-y-24">
        <ShowcaseCard project={caseStudies[0]} shot={shots[caseStudies[0].slug]} wide />
        <div className="grid gap-16 md:grid-cols-2 md:gap-10">
          <ShowcaseCard project={caseStudies[1]} shot={shots[caseStudies[1].slug]} wide={false} />
          <div className="md:mt-24">
            <ShowcaseCard project={caseStudies[2]} shot={shots[caseStudies[2].slug]} wide={false} />
          </div>
        </div>
        <ShowcaseCard project={caseStudies[3]} shot={shots[caseStudies[3].slug]} wide />
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

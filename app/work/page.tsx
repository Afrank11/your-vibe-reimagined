import type { Metadata } from "next";
import { MaskedLines } from "@/components/motion/MaskedLines";
import { Reveal } from "@/components/motion/Reveal";
import { WorkIndex } from "@/components/sections/WorkIndex";
import { archiveProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work — Project Index",
  description:
    "The complete project index of Frank Ateh: web platforms, network infrastructure, cybersecurity labs, cloud deployments, and data systems — 23 documented builds.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-site px-7 sm:px-10 pb-28 pt-32 md:px-16 xl:px-24 md:pb-40 md:pt-44">
      <div className="mb-10 flex items-baseline gap-4 md:mb-14">
        <span className="label-mono !text-brass">Index</span>
        <span className="label-mono">{archiveProjects.length} projects — 2022 → today</span>
        <span className="rule mt-[0.35em] flex-1 self-start" />
      </div>

      <MaskedLines
        as="h1"
        className="display text-[clamp(2.8rem,7vw,7rem)]"
        lines={[
          <span key="1">Everything</span>,
          <span key="2">
            I’ve <span className="accent-serif">built.</span>
          </span>,
        ]}
      />

      <Reveal className="mt-8 max-w-xl">
        <p className="text-base leading-relaxed text-silver">
          Web platforms, enterprise infrastructure, security labs, telecom networks,
          data systems, and embedded machines — every documented project, filterable by field.
        </p>
      </Reveal>

      <div className="mt-16 md:mt-20">
        <WorkIndex />
      </div>
    </div>
  );
}

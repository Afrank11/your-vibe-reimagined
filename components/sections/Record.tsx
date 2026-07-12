"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { record, distinctions } from "@/lib/data";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Record() {
  const railRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const reduced = usePrefersReducedMotion();

  // The rail draws itself down as the timeline is scrolled through.
  useLayoutEffect(() => {
    if (!railRef.current || !listRef.current || reduced) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        railRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 75%",
            end: "bottom 60%",
            scrub: 0.5,
          },
        },
      );
    });
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="record" className="mx-auto max-w-site scroll-mt-24 px-6 py-28 md:px-10 md:py-40">
      <SectionHeading
        index="05"
        label="Record"
        lines={[
          <span key="1">
            A short history of <span className="accent-serif">shipping.</span>
          </span>,
        ]}
      />

      <div className="mt-14 grid gap-16 md:mt-20 md:grid-cols-12 md:gap-10">
        <div className="relative md:col-span-8">
          {/* rail */}
          <div className="absolute bottom-0 left-[3px] top-1 w-px bg-line" aria-hidden />
          <div
            ref={railRef}
            className="absolute bottom-0 left-[3px] top-1 w-px bg-brass"
            style={{ transform: "scaleY(0)", transformOrigin: "top" }}
            aria-hidden
          />

          <ol ref={listRef} className="space-y-14">
            {record.map((entry) => (
              <Reveal key={entry.year}>
                <li className="relative pl-10">
                  <span
                    className="absolute left-0 top-[7px] h-[7px] w-[7px] rounded-full bg-brass"
                    aria-hidden
                  />
                  <p className="label-mono mb-2 !text-brass">{entry.year}</p>
                  <h3 className="display text-xl md:text-2xl">{entry.title}</h3>
                  <p className="mt-1 font-mono text-xs tracking-wide text-bone/80">{entry.org}</p>
                  <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-silver">
                    {entry.detail}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="md:col-span-4">
          <Reveal>
            <p className="label-mono mb-6">Distinctions</p>
          </Reveal>
          <Reveal stagger>
            {distinctions.map((item) => (
              <p key={item} className="rule py-4 text-sm leading-relaxed text-silver">
                {item}
              </p>
            ))}
          </Reveal>
          <div className="rule" />
        </div>
      </div>
    </section>
  );
}

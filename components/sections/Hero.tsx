"use client";

import { useState } from "react";
import Link from "next/link";
import { SignalField } from "@/components/canvas/SignalField";
import { MaskedLines } from "@/components/motion/MaskedLines";
import { Magnetic } from "@/components/motion/Magnetic";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowDown, ArrowUpRight } from "@/components/ui/Icons";
import { scrollToAnchor } from "@/components/providers/SmoothScroll";
import { contact } from "@/lib/data";

export function Hero() {
  // Hold the entrance until the preloader wipe clears (first visit only).
  const [delay] = useState(() =>
    typeof window !== "undefined" && sessionStorage.getItem("fa-preloader-seen") ? 0.15 : 1.5,
  );

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      <SignalField className="absolute inset-0" />
      {/* bottom fade so the headline sits on solid ink */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink via-ink/60 to-transparent" />

      <div className="relative mx-auto w-full max-w-site px-6 pb-10 pt-32 md:px-10 md:pb-14">
        <Reveal delay={delay} className="mb-8 flex items-center justify-between">
          <p className="label-mono !text-brass">Frank Ateh — Telecommunications Engineer & Web Developer</p>
          <p className="label-mono hidden md:block">{contact.coordinates} — Yaoundé, CM</p>
        </Reveal>

        <h1 className="display text-[clamp(3rem,9.5vw,10rem)]">
          <MaskedLines
            as="span"
            className="block"
            delay={delay}
            lines={[
              <span key="l1">
                <span className="sr-only">Frank Ateh — </span>Engineering
              </span>,
              <span key="l2">
                <span className="accent-serif">digital</span> experiences
              </span>,
              <span key="l3">that perform.</span>,
            ]}
          />
        </h1>

        <div className="mt-10 flex flex-col gap-10 md:mt-14 md:flex-row md:items-end md:justify-between">
          <Reveal delay={delay + 0.3}>
            <p className="max-w-md text-base leading-relaxed text-silver md:text-lg">
              I design and build premium websites, resilient networks, and secure
              systems — where technology, design, and performance meet.
            </p>
          </Reveal>

          <Reveal delay={delay + 0.4} className="flex flex-wrap items-center gap-4">
            <Magnetic>
              <button
                type="button"
                onClick={() => scrollToAnchor("#work")}
                className="group flex items-center gap-3 bg-bone px-7 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-brass"
              >
                View selected work
                <ArrowDown className="transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>
            </Magnetic>
            <Magnetic>
              <Link
                href="/#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToAnchor("#contact");
                }}
                className="group flex items-center gap-3 border border-line px-7 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-bone transition-colors hover:border-bone/50"
              >
                Start a project
                <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Magnetic>
          </Reveal>
        </div>

        <Reveal delay={delay + 0.55} className="mt-12 flex items-center gap-4 md:mt-16">
          <span className="label-mono !text-brass">01</span>
          <span className="label-mono">Scroll</span>
          <span className="rule flex-1" />
          <span className="label-mono flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brass" aria-hidden />
            Available for select projects
          </span>
        </Reveal>
      </div>
    </section>
  );
}

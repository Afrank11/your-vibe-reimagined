"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SignalField } from "@/components/canvas/SignalField";
import { MaskedLines } from "@/components/motion/MaskedLines";
import { Magnetic } from "@/components/motion/Magnetic";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowDown, ArrowUpRight } from "@/components/ui/Icons";
import { scrollToAnchor } from "@/components/providers/SmoothScroll";
import { contact } from "@/lib/data";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  // Hold the entrance until the preloader wipe clears (first visit only).
  const [delay] = useState(() =>
    typeof window !== "undefined" && sessionStorage.getItem("fa-preloader-seen") ? 0.15 : 1.5,
  );

  useLayoutEffect(() => {
    if (reduced || !rootRef.current) return;

    // Depth on exit: the hero recedes and dims as you scroll past it.
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          yPercent: -14,
          opacity: 0.25,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, rootRef);

    // Ambient light that follows the cursor — atmosphere, not spotlight.
    let move: ((e: MouseEvent) => void) | undefined;
    if (lightRef.current && window.matchMedia("(pointer: fine)").matches) {
      const x = gsap.quickTo(lightRef.current, "x", { duration: 0.9, ease: "power3.out" });
      const y = gsap.quickTo(lightRef.current, "y", { duration: 0.9, ease: "power3.out" });
      move = (e) => {
        x(e.clientX);
        y(e.clientY);
      };
      window.addEventListener("mousemove", move, { passive: true });
    }

    return () => {
      ctx.revert();
      if (move) window.removeEventListener("mousemove", move);
    };
  }, [reduced]);

  return (
    <section ref={rootRef} className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      <SignalField className="absolute inset-0" />

      {/* mouse-reactive ambient light */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          ref={lightRef}
          className="absolute -ml-[35vmax] -mt-[35vmax] h-[70vmax] w-[70vmax] rounded-full mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle, rgba(194,165,123,0.07) 0%, rgba(237,236,230,0.03) 35%, transparent 65%)",
          }}
        />
      </div>

      {/* faint standing light from the upper left — the "hint of light" */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 18% -10%, rgba(237,236,230,0.045), transparent 60%)",
        }}
      />

      {/* bottom fade so the headline sits on solid ink */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink via-ink/60 to-transparent" />

      <div ref={contentRef} className="relative mx-auto w-full max-w-site px-6 pb-10 pt-32 md:px-10 md:pb-14">
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
              systems — where engineering meets design.
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

"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
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

const ROLES = ["Software Engineer", "Digital Product Builder", "Telecommunications Engineer"];

/** Corner markers for the portrait frame — tiny technical ticks. */
function FrameMarks() {
  return (
    <>
      <span aria-hidden className="absolute -left-px -top-px h-4 w-4 border-l border-t border-brass" />
      <span aria-hidden className="absolute -right-px -top-px h-4 w-4 border-r border-t border-brass" />
      <span aria-hidden className="absolute -bottom-px -left-px h-4 w-4 border-b border-l border-brass" />
      <span aria-hidden className="absolute -bottom-px -right-px h-4 w-4 border-b border-r border-brass" />
    </>
  );
}

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const canvasWrapRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const photoInnerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  // Hold the entrance until the preloader wipe clears (first visit only).
  const [delay] = useState(() =>
    typeof window !== "undefined" && sessionStorage.getItem("fa-preloader-seen") ? 0.15 : 1.5,
  );

  useLayoutEffect(() => {
    if (reduced || !rootRef.current) return;

    const mm = gsap.matchMedia();

    // The scroll transformation (desktop): the hero pins briefly while the
    // portrait shrinks toward the top-left, the text recedes, and the
    // network expands to fill the screen — then releases into the site.
    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "+=65%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
      tl.to(photoRef.current, { scale: 0.55, xPercent: 10, yPercent: -14, transformOrigin: "top right", ease: "none" }, 0)
        .to(textRef.current, { yPercent: -16, opacity: 0, ease: "none" }, 0)
        .to(stripRef.current, { opacity: 0, ease: "none" }, 0)
        .to(canvasWrapRef.current, { scale: 1.22, ease: "none" }, 0);
    });

    // Mobile: no pin — a light recede as the hero scrolls away.
    mm.add("(max-width: 767px)", () => {
      gsap.to([photoRef.current, textRef.current], {
        yPercent: -8,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Mouse depth: portrait drifts a few px, ambient light follows the cursor.
    let move: ((e: MouseEvent) => void) | undefined;
    if (window.matchMedia("(pointer: fine)").matches) {
      const px = photoInnerRef.current ? gsap.quickTo(photoInnerRef.current, "x", { duration: 0.7, ease: "power3.out" }) : null;
      const py = photoInnerRef.current ? gsap.quickTo(photoInnerRef.current, "y", { duration: 0.7, ease: "power3.out" }) : null;
      const lx = lightRef.current ? gsap.quickTo(lightRef.current, "x", { duration: 0.9, ease: "power3.out" }) : null;
      const ly = lightRef.current ? gsap.quickTo(lightRef.current, "y", { duration: 0.9, ease: "power3.out" }) : null;
      move = (e) => {
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        px?.(nx * 10);
        py?.(ny * 8);
        lx?.(e.clientX);
        ly?.(e.clientY);
      };
      window.addEventListener("mousemove", move, { passive: true });
    }

    return () => {
      mm.revert();
      if (move) window.removeEventListener("mousemove", move);
    };
  }, [reduced]);

  return (
    <section ref={rootRef} className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* the living network — forms after the preloader clears */}
      <div ref={canvasWrapRef} className="absolute inset-0">
        <SignalField className="absolute inset-0" startDelay={delay * 1000 - 400} />
      </div>

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

      {/* faint standing light from the upper left */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 18% -10%, rgba(237,236,230,0.045), transparent 60%)",
        }}
      />

      {/* bottom fade so the content sits on solid ink */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink via-ink/50 to-transparent" />

      {/* ── content ── */}
      <div className="relative mx-auto flex w-full max-w-site flex-1 flex-col justify-center px-6 pb-24 pt-28 md:px-10 md:pb-28 md:pt-32">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
          {/* portrait in a technical frame — right column on desktop, centered first on mobile */}
          <Reveal
            delay={delay + 0.7}
            duration={1.3}
            className="order-1 flex justify-center md:order-2 md:col-span-4 md:block md:justify-self-end"
          >
            <div ref={photoRef} className="w-full max-w-[260px] md:max-w-none">
              {/* frame zone — the corner marks frame the photo only, and stay
                  static while the photo inside drifts with the cursor */}
              <div className="relative">
                <div
                  ref={photoInnerRef}
                  className="relative aspect-[4/5] overflow-hidden rounded-lg border border-bone/25 bg-ink-2"
                >
                  <Image
                    src="/ateh.jpg"
                    alt="Frank Ateh — software engineer and telecommunications engineer"
                    fill
                    priority
                    sizes="(max-width: 768px) 260px, 32vw"
                    className="object-cover grayscale-[0.35] transition-[filter] duration-700 ease-out hover:grayscale-0"
                  />
                  {/* subtle scanline sheen at the top of the frame */}
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(237,236,230,0.06) 0%, transparent 18%)",
                    }}
                  />
                </div>
                <FrameMarks />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="label-mono">Fig. 01 — The engineer</span>
                <span className="label-mono hidden lg:block">{contact.coordinates}</span>
              </div>
            </div>
          </Reveal>

          {/* name, roles, statement, CTAs — left column on desktop */}
          <div ref={textRef} className="order-2 md:order-1 md:col-span-8">
            <h1 className="display text-[clamp(2.9rem,8vw,8.5rem)] leading-[0.95]">
              <MaskedLines
                as="span"
                className="block"
                delay={delay + 0.2}
                duration={1.15}
                lines={[
                  <span key="l1">Ateh Frank</span>,
                  <span key="l2">
                    Ateh<span className="text-brass">.</span>
                  </span>,
                ]}
              />
            </h1>

            <Reveal delay={delay + 0.75} duration={1.1} className="mt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-silver md:text-xs">
                {ROLES.map((role, i) => (
                  <span key={role}>
                    <span className="text-bone">{role}</span>
                    {i < ROLES.length - 1 && <span className="mx-3 text-brass">•</span>}
                  </span>
                ))}
              </p>
            </Reveal>

            <Reveal delay={delay + 0.95} duration={1.1} className="mt-6">
              <p className="max-w-xl text-base leading-relaxed text-silver md:text-lg">
                I design and engineer digital experiences where technology,
                creativity, and performance meet.
              </p>
            </Reveal>

            <Reveal delay={delay + 1.15} duration={1.1} className="mt-9 flex flex-wrap items-center gap-4">
              <Magnetic>
                <button
                  type="button"
                  onClick={() => scrollToAnchor("#work")}
                  className="group flex items-center gap-3 bg-bone px-7 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-brass"
                >
                  Explore my work
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
                  Get in touch
                  <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      </div>

      {/* bottom strip */}
      <div ref={stripRef} className="relative mx-auto w-full max-w-site px-6 pb-8 md:px-10 md:pb-10">
        <Reveal delay={delay + 1.35} duration={1.1} className="flex items-center gap-4">
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

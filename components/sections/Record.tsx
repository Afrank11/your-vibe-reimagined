"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Star, Sparkle } from "@/components/ui/Icons";
import { record, distinctions } from "@/lib/data";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* Snake geometry: a 1200-unit-wide coordinate space, one bend per entry. */
const ROW_H = 340;
const X_LEFT = 170;
const X_RIGHT = 1030;
const X_CENTER = 600;

function snakePath(n: number): string {
  let d = `M ${X_CENTER} 0`;
  let px = X_CENTER;
  let py = 0;
  for (let i = 0; i < n; i++) {
    const x = i % 2 === 0 ? X_LEFT : X_RIGHT;
    const y = i * ROW_H + ROW_H / 2;
    d += ` C ${px} ${(py + y) / 2}, ${x} ${(py + y) / 2}, ${x} ${y}`;
    px = x;
    py = y;
  }
  const end = n * ROW_H;
  d += ` C ${px} ${(py + end) / 2}, ${X_CENTER} ${(py + end) / 2}, ${X_CENTER} ${end}`;
  return d;
}

export function Record() {
  const snakeRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGGElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reduced = usePrefersReducedMotion();

  const n = record.length;
  const totalH = n * ROW_H;
  const path = useMemo(() => snakePath(n), [n]);

  /* The journey: the brass path draws itself with scroll, a signal dot
     travels along it, and only the chapter at the dot is fully lit. */
  useLayoutEffect(() => {
    if (reduced || !snakeRef.current || !progressRef.current) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const pathEl = progressRef.current!;
      const len = pathEl.getTotalLength();
      gsap.set(pathEl, { strokeDasharray: len, strokeDashoffset: len });

      // start dimmed
      rowRefs.current.forEach((row, i) => {
        if (row) gsap.set(row, { opacity: i === 0 ? 1 : 0.3 });
      });

      const st = ScrollTrigger.create({
        trigger: snakeRef.current,
        start: "top 62%",
        end: "bottom 62%",
        scrub: 0.4,
        onUpdate(self) {
          const p = self.progress;
          gsap.set(pathEl, { strokeDashoffset: len * (1 - p) });
          const pt = pathEl.getPointAtLength(len * p);
          dotRef.current?.setAttribute("transform", `translate(${pt.x}, ${pt.y})`);
          const active = Math.max(0, Math.min(n - 1, Math.floor(pt.y / ROW_H)));
          rowRefs.current.forEach((row, i) => {
            if (!row) return;
            gsap.to(row, {
              opacity: i === active ? 1 : 0.3,
              scale: i === active ? 1 : 0.985,
              duration: 0.35,
              overwrite: "auto",
            });
          });
        },
      });
      return () => st.kill();
    });

    return () => mm.revert();
  }, [reduced, n]);

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

      {/* ── Desktop: the S-path journey ── */}
      <div
        ref={snakeRef}
        className="relative mt-14 hidden md:block md:mt-20"
        style={{ height: totalH }}
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox={`0 0 1200 ${totalH}`}
          preserveAspectRatio="none"
          aria-hidden
        >
          {/* base path — faint, always there */}
          <path
            d={path}
            fill="none"
            stroke="var(--line)"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
          {/* progress path — brass, draws with scroll */}
          <path
            ref={progressRef}
            d={path}
            fill="none"
            stroke="var(--brass)"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            style={reduced ? undefined : { strokeDasharray: 1, strokeDashoffset: 1 }}
          />
          {/* station markers at each bend */}
          {record.map((entry, i) => (
            <circle
              key={entry.year}
              cx={i % 2 === 0 ? X_LEFT : X_RIGHT}
              cy={i * ROW_H + ROW_H / 2}
              r="6"
              fill="var(--ink)"
              stroke="var(--brass)"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          {/* the traveling signal */}
          {!reduced && (
            <g ref={dotRef} transform={`translate(${X_CENTER}, 0)`}>
              <circle r="10" fill="rgba(194,165,123,0.15)" />
              <circle r="4" fill="var(--brass)" />
            </g>
          )}
        </svg>

        {record.map((entry, i) => (
          <div
            key={entry.year}
            ref={(el) => {
              rowRefs.current[i] = el;
            }}
            className={`absolute flex h-[340px] w-full items-center ${
              i % 2 === 0 ? "justify-start" : "justify-end"
            }`}
            style={{ top: i * ROW_H }}
          >
            <div
              className={`w-full max-w-md ${
                i % 2 === 0 ? "ml-[calc(14%+3rem)]" : "mr-[calc(14%+3rem)] text-right"
              }`}
            >
              <p className="label-mono mb-2 !text-brass">{entry.year}</p>
              <h3 className="display text-xl lg:text-2xl">{entry.title}</h3>
              <p className="mt-1 font-mono text-xs tracking-wide text-bone/80">{entry.org}</p>
              <p
                className={`mt-3 text-sm leading-relaxed text-silver ${
                  i % 2 === 0 ? "" : "ml-auto"
                } max-w-[46ch]`}
              >
                {entry.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Mobile: simple rail ── */}
      <div className="relative mt-14 md:hidden">
        <div className="absolute bottom-0 left-[3px] top-1 w-px bg-line" aria-hidden />
        <ol className="space-y-12">
          {record.map((entry) => (
            <Reveal key={entry.year}>
              <li className="relative pl-9">
                <span
                  className="absolute left-0 top-[7px] h-[7px] w-[7px] rounded-full bg-brass"
                  aria-hidden
                />
                <p className="label-mono mb-2 !text-brass">{entry.year}</p>
                <h3 className="display text-xl">{entry.title}</h3>
                <p className="mt-1 font-mono text-xs tracking-wide text-bone/80">{entry.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-silver">{entry.detail}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* ── Distinctions — the trophy shelf ── */}
      <div className="mt-24 md:mt-32">
        <Reveal className="mb-8 flex items-center gap-3">
          <Sparkle className="text-brass" />
          <p className="label-mono !text-bone">Distinctions</p>
          <Sparkle size={7} className="text-brass/70" />
          <span className="rule flex-1" />
        </Reveal>
        <Reveal pop stagger duration={0.7} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {distinctions.map((item) => (
            <div
              key={item}
              className="group flex items-start gap-3 border border-line bg-ink-2 p-5 transition-colors duration-300 hover:border-brass/40"
            >
              <Star className="mt-0.5 shrink-0 text-brass transition-transform duration-300 group-hover:rotate-[72deg]" />
              <span className="text-sm leading-relaxed text-silver transition-colors duration-300 group-hover:text-bone">
                {item}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

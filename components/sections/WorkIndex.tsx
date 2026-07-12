"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "@/components/ui/Icons";
import { EASE } from "@/lib/motion";
import { archiveProjects, projectGroups, type ProjectGroup } from "@/lib/data";

type Filter = ProjectGroup | "All";

export function WorkIndex() {
  const [filter, setFilter] = useState<Filter>("All");
  const projects =
    filter === "All" ? archiveProjects : archiveProjects.filter((p) => p.group === filter);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {(["All", ...projectGroups] as Filter[]).map((group) => {
          const active = filter === group;
          const count =
            group === "All"
              ? archiveProjects.length
              : archiveProjects.filter((p) => p.group === group).length;
          return (
            <button
              key={group}
              type="button"
              onClick={() => setFilter(group)}
              aria-pressed={active}
              className={`flex items-center gap-2 border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-300 ${
                active
                  ? "border-brass bg-brass text-ink"
                  : "border-line text-silver hover:border-bone/40 hover:text-bone"
              }`}
            >
              {group}
              <span className={active ? "text-ink/60" : "text-smoke"}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* Ledger */}
      <div className="mt-12" aria-live="polite">
        <div className="rule hidden gap-6 py-3 md:grid md:grid-cols-12">
          <span className="label-mono md:col-span-1">Nº</span>
          <span className="label-mono md:col-span-3">Project</span>
          <span className="label-mono md:col-span-5">Summary</span>
          <span className="label-mono md:col-span-3 md:text-right">Field</span>
        </div>
        <AnimatePresence mode="popLayout">
          {projects.map((project, i) => {
            const inner = (
              <>
                <span className="font-mono text-xs text-smoke md:col-span-1">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <span className="md:col-span-3">
                  <span className="display block text-xl transition-transform duration-300 group-hover:translate-x-2 md:text-2xl">
                    {project.title}
                  </span>
                  <span className="mt-1 block font-mono text-[11px] tracking-wide text-smoke">
                    {project.kind}
                  </span>
                </span>
                <span className="text-sm leading-relaxed text-silver md:col-span-5">
                  {project.summary}
                </span>
                <span className="flex items-start gap-3 md:col-span-3 md:justify-end">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-smoke">
                    {project.group}
                  </span>
                  {("problem" in project || project.demo) && (
                    <ArrowUpRight className="mt-0.5 shrink-0 text-smoke transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brass" />
                  )}
                </span>
              </>
            );
            const rowClass =
              "rule group grid gap-3 py-7 transition-colors duration-300 md:grid-cols-12 md:gap-6 md:px-2";
            return (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, ease: EASE.outCurve, delay: Math.min(i * 0.03, 0.3) },
                }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
              >
                {"problem" in project ? (
                  <Link href={`/work/${project.slug}`} className={`${rowClass} hover:bg-ink-2`}>
                    {inner}
                  </Link>
                ) : project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${rowClass} hover:bg-ink-2`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={rowClass}>{inner}</div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
        <div className="rule" />
      </div>
    </div>
  );
}

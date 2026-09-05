import {
  archiveProjects,
  caseStudies,
  distinctions,
  expertise,
  facts,
  process,
  projectGroups,
  record,
  stats,
  story,
  testimonials,
  trustedBy,
  type CaseStudy,
  type Expertise,
  type ProcessStep,
  type Project,
  type ProjectGroup,
  type RecordEntry,
  type Testimonial,
} from "@/lib/data";
import type { Locale } from "./config";
import {
  archiveProjectsFr,
  caseStudiesFr,
  distinctionsFr,
  expertiseFr,
  factsFr,
  groupsFr,
  processFr,
  recordFr,
  statsFr,
  storyFr,
} from "./content.fr";

/**
 * One localized view of every piece of site content.
 *
 * English comes straight from lib/data.ts; French overlays the translated
 * strings from content.fr.ts onto the same structures, so components read
 * identical field names either way and never branch on locale themselves.
 */

export type Fact = { label: string; value: string; href?: string };
export type Stat = { value: string; label: string };
export type GroupOption = { key: ProjectGroup; label: string };

export type SiteContent = {
  caseStudies: CaseStudy[];
  archiveProjects: Project[];
  groups: GroupOption[];
  groupLabel: (group: ProjectGroup) => string;
  story: string[];
  facts: Fact[];
  expertise: Expertise[];
  record: RecordEntry[];
  distinctions: string[];
  process: ProcessStep[];
  testimonials: Testimonial[];
  trustedBy: string[];
  stats: Stat[];
};

function localizeCaseStudy(study: CaseStudy): CaseStudy {
  const fr = caseStudiesFr[study.slug];
  if (!fr) return study;
  return {
    ...study,
    title: fr.title ?? study.title,
    kind: fr.kind,
    tags: fr.tags ?? study.tags,
    summary: fr.summary,
    year: fr.year,
    context: fr.context,
    role: fr.role,
    outcome: fr.outcome,
    lesson: fr.lesson,
    problem: fr.problem,
    decisions: fr.decisions,
    challenges: fr.challenges,
    result: fr.result,
  };
}

function localizeProject(project: Project): Project {
  if ("problem" in project) return localizeCaseStudy(project as CaseStudy);
  const fr = archiveProjectsFr[project.slug];
  if (!fr) return project;
  return {
    ...project,
    title: fr.title ?? project.title,
    kind: fr.kind,
    tags: fr.tags ?? project.tags,
    summary: fr.summary,
  };
}

const englishContent: SiteContent = {
  caseStudies,
  archiveProjects,
  groups: projectGroups.map((key) => ({ key, label: key })),
  groupLabel: (group) => group,
  story,
  facts,
  expertise,
  record,
  distinctions,
  process,
  testimonials,
  trustedBy,
  stats,
};

const frenchCaseStudies = caseStudies.map(localizeCaseStudy);

const frenchContent: SiteContent = {
  caseStudies: frenchCaseStudies,
  archiveProjects: archiveProjects.map(localizeProject),
  groups: projectGroups.map((key) => ({ key, label: groupsFr[key] })),
  groupLabel: (group) => groupsFr[group] ?? group,
  story: storyFr,
  // `href` (e.g. the Frinux link) is structure, not copy — carried over by index
  facts: factsFr.map((fact, i) => ({ ...fact, href: facts[i]?.href })),
  expertise: expertise.map((item) => ({ ...item, ...(expertiseFr[item.index] ?? {}) })),
  record: record.map((entry) => ({ ...entry, ...(recordFr[entry.year] ?? {}) })),
  distinctions: distinctionsFr,
  process: process.map((step) => ({ ...step, ...(processFr[step.index] ?? {}) })),
  // no testimonials yet in either language; translate them here once they exist
  testimonials,
  trustedBy,
  stats: stats.map((stat, i) => ({ ...stat, label: statsFr[i] ?? stat.label })),
};

const content: Record<Locale, SiteContent> = {
  en: englishContent,
  fr: frenchContent,
};

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}

export function getCaseStudy(locale: Locale, slug: string): CaseStudy | undefined {
  return getContent(locale).caseStudies.find((study) => study.slug === slug);
}

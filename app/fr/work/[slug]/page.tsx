import type { Metadata } from "next";
import { CaseStudyView } from "@/components/pages/CaseStudyView";
import { caseStudies } from "@/lib/data";
import { alternatesFor } from "@/lib/i18n/config";
import { getCaseStudy } from "@/lib/i18n/content";
import { getDictionary } from "@/lib/i18n/dictionary";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy("fr", slug);
  if (!study) return {};
  const t = getDictionary("fr");
  return {
    title: t.caseStudy.metaTitle(study.title),
    description: study.summary,
    alternates: alternatesFor("fr", `/work/${study.slug}`),
    openGraph: { title: t.caseStudy.ogTitle(study.title), description: study.summary },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  return <CaseStudyView locale="fr" slug={slug} />;
}

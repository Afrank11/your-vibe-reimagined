import type { Metadata } from "next";
import { WorkIndexView } from "@/components/pages/WorkIndexView";
import { alternatesFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionary";

const t = getDictionary("fr");

export const metadata: Metadata = {
  title: t.workPage.title,
  description: t.workPage.description,
  alternates: alternatesFor("fr", "/work"),
};

export default function WorkPage() {
  return <WorkIndexView locale="fr" />;
}

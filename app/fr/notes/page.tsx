import type { Metadata } from "next";
import { NotesView } from "@/components/pages/NotesView";
import { alternatesFor } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionary";

const t = getDictionary("fr");

export const metadata: Metadata = {
  title: t.notesPage.title,
  description: t.notesPage.description,
  alternates: alternatesFor("fr", "/notes"),
};

export default function NotesPage() {
  return <NotesView locale="fr" />;
}

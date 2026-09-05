import type { Metadata } from "next";
import { HomeView } from "@/components/pages/HomeView";
import { alternatesFor, ogLocale } from "@/lib/i18n/config";
import { SITE_FR } from "@/lib/seo";

export const metadata: Metadata = {
  // absolute: the /fr home is its own full title, not a "%s — Frank Ateh" leaf
  title: { absolute: SITE_FR.title },
  description: SITE_FR.description,
  alternates: alternatesFor("fr", "/"),
  openGraph: {
    type: "profile",
    url: `${SITE_FR.url}/fr`,
    siteName: SITE_FR.fullName,
    title: SITE_FR.title,
    description: SITE_FR.description,
    locale: ogLocale.fr,
  },
};

export default function FrenchHomePage() {
  return <HomeView locale="fr" />;
}

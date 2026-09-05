import type { Metadata } from "next";
import { HomeView } from "@/components/pages/HomeView";
import { alternatesFor } from "@/lib/i18n/config";

export const metadata: Metadata = {
  alternates: alternatesFor("en", "/"),
};

export default function HomePage() {
  return <HomeView locale="en" />;
}

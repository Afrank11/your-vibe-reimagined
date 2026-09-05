import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { Work } from "@/components/sections/Work";
import { Record } from "@/components/sections/Record";
import { Process } from "@/components/sections/Process";
import { Signals } from "@/components/sections/Signals";
import { Contact } from "@/components/sections/Contact";
import { contact } from "@/lib/data";
import type { Locale } from "@/lib/i18n/config";
import { publicFileExists } from "@/lib/resolve-image";

/** The one-page site, rendered per locale by app/page.tsx and app/fr/page.tsx. */
export function HomeView({ locale }: { locale: Locale }) {
  const cvFrAvailable = publicFileExists(contact.cv.fr);

  return (
    <>
      <Hero locale={locale} />
      <About locale={locale} />
      <Expertise locale={locale} />
      <Work locale={locale} />
      <Record locale={locale} />
      <Process locale={locale} />
      <Signals locale={locale} />
      <Contact locale={locale} cvFrAvailable={cvFrAvailable} />
    </>
  );
}

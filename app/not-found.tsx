"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPath, localizePath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionary";

export default function NotFound() {
  // A 404 has no route segment to read the locale from, so it comes from the
  // URL the visitor actually asked for — /fr/... keeps them in French.
  const locale = localeFromPath(usePathname() || "/");
  const t = getDictionary(locale);

  return (
    <div className="mx-auto flex min-h-[100svh] max-w-site flex-col items-start justify-center px-7 sm:px-10 md:px-16 xl:px-24">
      <p className="label-mono !text-brass">{t.notFound.eyebrow}</p>
      <h1 className="display mt-6 text-[clamp(2.5rem,7vw,6rem)]">
        {t.notFound.headingA}
        <span className="accent-serif">{t.notFound.headingAccent}</span>
      </h1>
      <Link href={localizePath(locale, "/")} className="link-quiet label-mono mt-10 !text-bone">
        {t.notFound.home}
      </Link>
    </div>
  );
}

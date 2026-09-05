"use client";

import { usePathname } from "next/navigation";
import { localeFromPath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionary";

/** Lives in the shared root layout, so it reads its language off the route. */
export function SkipLink() {
  const t = getDictionary(localeFromPath(usePathname() || "/"));

  return (
    <a
      href="#main"
      className="label-mono fixed left-4 top-4 z-[100] -translate-y-20 bg-ink-3 px-4 py-3 text-bone transition-transform focus:translate-y-0"
    >
      {t.meta.skipToContent}
    </a>
  );
}

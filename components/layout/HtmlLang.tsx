"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { htmlLang, localeFromPath } from "@/lib/i18n/config";

/**
 * Keeps <html lang> honest across client-side navigation. The initial value
 * is server-rendered ("en" in the root layout, overridden by the inline
 * script in app/fr/layout.tsx), and this syncs it on every route change.
 */
export function HtmlLang() {
  const pathname = usePathname() || "/";

  useEffect(() => {
    document.documentElement.lang = htmlLang[localeFromPath(pathname)];
  }, [pathname]);

  return null;
}

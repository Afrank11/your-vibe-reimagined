import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { AmbientField } from "@/components/canvas/AmbientField";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";
import { Cursor } from "@/components/layout/Cursor";
import { Grain } from "@/components/layout/Grain";
import { SITE, personJsonLd, websiteJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: "%s — Frank Ateh",
  },
  description: SITE.description,
  keywords: [
    "Frank Ateh",
    "Ateh Frank",
    "Ateh Frank Ateh",
    "Franck Ateh",
    "Frank Ateh Cameroon",
    "Frank Ateh portfolio",
    "Frank Ateh web developer",
    "Frank Ateh software engineer",
    "telecommunications engineer Cameroon",
    "web developer Yaoundé",
    "SUP'PTIC",
    "Afrank11",
  ],
  authors: [{ name: SITE.fullName, url: SITE.url }],
  creator: SITE.fullName,
  alternates: {
    canonical: "/",
  },
  // og/twitter images come from app/opengraph-image.tsx (file convention),
  // so previews always match the current design
  openGraph: {
    type: "profile",
    url: SITE.url,
    siteName: SITE.fullName,
    title: SITE.title,
    description: SITE.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    creator: SITE.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#070707",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = [personJsonLd, websiteJsonLd, faqJsonLd, breadcrumbJsonLd];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${grotesk.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <a
          href="#main"
          className="label-mono fixed left-4 top-4 z-[100] -translate-y-20 bg-ink-3 px-4 py-3 text-bone transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        {/* quiet ambient network behind every dark passage of the page */}
        <div aria-hidden className="pointer-events-none fixed inset-0 opacity-40">
          <AmbientField />
        </div>
        <SmoothScroll>
          <Preloader />
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
        <Cursor />
        <Grain />
      </body>
    </html>
  );
}

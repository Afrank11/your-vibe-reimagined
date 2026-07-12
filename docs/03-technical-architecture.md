# Technical Architecture

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15 (App Router)** + React 18 | SSG for every route → real HTML for SEO (fixes the SPA meta problem), `next/font` zero-CLS fonts, `metadata` API, Vercel-native |
| Language | TypeScript strict | |
| Styling | Tailwind CSS 3.4 + design tokens as CSS variables | Tokens (`ink/bone/brass/line`) live in `:root`, Tailwind maps to them — no raw hex in components |
| Scroll | **Lenis** | Smooth scroll, driven by GSAP's ticker so ScrollTrigger and Lenis share one clock |
| Scroll choreography | **GSAP + ScrollTrigger** | Section reveals, pinning, parallax, masked headlines |
| Micro-interactions | **Framer Motion** | Preloader AnimatePresence, hover states, accordion — declarative where GSAP would be ceremony |
| 3D | **None (deliberate)** | R3F would cost ~150kB + GPU on low-end mobiles; the canvas 2D signal field delivers the atmosphere at a fraction of the budget. Revisit only with a strong art-direction reason |

## Project structure

```
app/
  layout.tsx            fonts, metadata base, JSON-LD, providers, header/footer
  page.tsx              home (8 sections, server component shell)
  work/page.tsx         project archive (SSG + client filter island)
  sitemap.ts robots.ts  generated SEO files
  not-found.tsx
components/
  providers/SmoothScroll.tsx     Lenis ⇄ GSAP ticker bridge (client)
  layout/   Header · Footer · Preloader · Cursor · Grain
  motion/   Reveal · MaskedLines · Parallax · Magnetic   (reusable primitives)
  sections/ Hero · About · Expertise · Work · Record · Process · Signals · Contact
  canvas/SignalField.tsx         hero background (canvas 2D)
lib/
  data.ts               single source of content (projects, experience, skills…)
  seo.ts                site constants, JSON-LD builders
  motion.ts             shared eases/durations/reduced-motion helper
public/                 CV, photo, og image, GSC verification
```

## Rendering strategy

Every route is **statically generated** — there is no server state. The page shell and all copy are server components (HTML visible to crawlers with JS disabled); interactivity is pushed into leaf client components (`"use client"` only where a hook or GSAP is needed). Framer/GSAP animate elements that are already in the HTML — content is never gated behind JS.

## Motion system

One clock: Lenis is stepped inside `gsap.ticker` and `ScrollTrigger.update` is bound to Lenis' scroll event — this is what keeps pinned sections judder-free.

```ts
lenis.on("scroll", ScrollTrigger.update)
gsap.ticker.add((t) => lenis.raf(t * 1000))
gsap.ticker.lagSmoothing(0)
```

Primitives (see 04-motion-system.md): `MaskedLines` (headline reveals), `Reveal` (fade-rise on enter), `Parallax` (y-offset by scroll velocity of section), `Magnetic` (cursor-attracted CTAs, desktop only).

**Reduced motion**: a single `usePrefersReducedMotion()` gate. When true — Lenis not instantiated, ScrollTriggers created with `toggleActions: "play none none none"` and zero transforms (opacity only), SignalField renders one static frame, cursor disabled.

## Performance budget

- JS shipped: < 180kB gz total (gsap ~28, lenis ~4, framer-motion tree-shaken, no react-query/radix/recharts — all removed).
- Canvas field: capped node count (device-memory & pointer aware), `devicePixelRatio` clamped to 2, paused when hero off-screen via IntersectionObserver.
- Fonts: 3 families via `next/font` (self-hosted, `display: swap`, subset latin).
- Images: `next/image`, AVIF/WebP, explicit dimensions (CLS 0).
- Lighthouse targets: Perf ≥ 90 mobile / ≥ 95 desktop, SEO 100, A11y ≥ 95.

## SEO implementation

- `metadataBase: https://atehfrank.com` — **canonical corrected** (was pointing at lovable.app).
- Root metadata: title template, description, OG profile card, Twitter summary_large_image, self-hosted OG image.
- JSON-LD (Person with all name variants, WebSite, BreadcrumbList, FAQPage) rendered in the server layout — present in initial HTML.
- `app/sitemap.ts` + `app/robots.ts` generated; GSC verification file kept in `public/`.
- Old routes 301 in `next.config.ts` (`/projects → /work`, `/about → /#about`, …) so existing index equity transfers.
- Semantic HTML: one `h1` (hero), sequential `h2` per section, `nav`/`main`/`footer` landmarks, skip link.

## Deployment

Vercel: zero config (`next build`). Domain `atehfrank.com` + `www` redirect. The Lovable subdomain should be pointed/redirected here once live, then request re-indexing in GSC.

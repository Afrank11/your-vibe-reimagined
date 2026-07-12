# atehfrank.com — Portfolio v2 "Quiet Signal"

The portfolio of **Frank Ateh** — telecommunications & ICT engineer and full-stack developer, Yaoundé, Cameroon. A cinematic, motion-first single-page experience built with Next.js.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS · GSAP + ScrollTrigger · Lenis smooth scroll · Framer Motion. Every route is statically generated; deploys to Vercel with zero config.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (static)
```

## Where things live

| Path | What |
|---|---|
| `lib/data.ts` | **All content** — projects, case studies, experience, skills, testimonials. Edit copy here, not in components. |
| `lib/seo.ts` | Site constants (canonical URL), JSON-LD schemas |
| `lib/motion.ts` | Shared animation tokens (eases, durations) |
| `app/` | Routes: `/` (8-section experience), `/work` (filterable index), `/work/[slug]` (case studies), `/notes` + `/notes/[slug]` (essays), generated `sitemap.ts` / `robots.ts` |
| `lib/articles.ts` | Notes essays — add an object to publish (index, sitemap, and JSON-LD update automatically) |
| `components/sections/` | One file per page section |
| `components/motion/` | Reusable primitives: `MaskedLines`, `Reveal`, `Parallax`, `Magnetic` |
| `components/layout/` | Header, Footer, Preloader, custom Cursor, Grain overlay |
| `components/canvas/SignalField.tsx` | Hero canvas background (2D, no WebGL) |
| `docs/` | Audit, creative direction, IA & wireframes, technical architecture, motion system |

## Common edits

- **Add a testimonial**: push an object into `testimonials` in `lib/data.ts` — the Signals section renders it automatically.
- **Add a project**: append to `archiveProjects` in `lib/data.ts` (appears on `/work` with filtering). To feature it on the home page and give it a `/work/[slug]` case-study page, add it to `caseStudies` with the full narrative fields (`context/problem/role/decisions/challenges/result/lesson/year`).
- **Publish an essay**: append to `articles` in `lib/articles.ts` — `/notes`, the article page, sitemap, and Article JSON-LD are generated from it.
- **Change availability line**: `Hero.tsx` bottom strip + `facts` in `lib/data.ts`.

## Design & motion rules

Read `docs/01-creative-direction.md` and `docs/04-motion-system.md` before adding anything visual. Short version: near-black `#070707`, off-white type, one brass accent used sparingly, hairline rules, mono labels; animations use transforms/opacity only, `power3.out`, and must collapse gracefully under `prefers-reduced-motion` (every motion component already handles this — reuse them instead of writing new GSAP).

## SEO notes

- Canonical is `https://atehfrank.com` (`lib/seo.ts`) — was previously (wrongly) the Lovable subdomain.
- JSON-LD (Person with name variants, WebSite, FAQ, Breadcrumbs) is injected in `app/layout.tsx`.
- Old routes (`/projects`, `/about`, `/blog`, …) 301-redirect in `next.config.ts`.
- After deploying to the domain, point/redirect the old `*.lovable.app` site here and request re-indexing in Google Search Console (verification file is kept in `public/`).

## Deferred (intentionally)

- **French locale**: all FR strings are preserved in `lib/data.ts` (`summaryFr` fields) and git history; ship as a proper SSG `/fr` route in phase 2 rather than a client-side toggle Google can't index.
- **React Three Fiber**: rejected for performance; the canvas signal field covers the atmosphere at ~1% of the cost.

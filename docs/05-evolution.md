# Evolution Audit — v2 → v2.1 "Quiet Signal, Deeper"

A critical second pass on the redesigned site, judged against o-scs / studiomodular / vectr standards rather than against the old site.

## What v2 already does well (preserve)

- The identity system: ink/bone/brass palette, Space Grotesk + Instrument Serif + IBM Plex Mono, hairlines, grain, mono indices. This *is* the premium direction — it needs depth, not replacement.
- The motion foundation: one Lenis/GSAP clock, masked-line reveals, reduced-motion discipline.
- Content architecture: everything in `lib/data.ts`, SSG everywhere, honest copy.
- SEO plumbing: correct canonical, JSON-LD suite, redirects.

## What still whispers "template" (fix)

1. **The hero is attractive but static in depth.** One canvas layer + type. Reference sites have *atmosphere* — light that responds to you, content that recedes as you leave it. Missing: mouse-reactive ambient light, scroll-out parallax, layered z-depth.
2. **Case studies are modules, not experiences.** Four panels on the home page with meta columns is good pacing, but "Context/Role/Outcome/Lesson" in four short rows reads like a well-dressed card. There is no room for *how he thinks* — decisions, trade-offs, challenges. Fix: dedicated `/work/[slug]` pages with scroll-based storytelling; home panels become doorways into them.
3. **No voice.** Premium studios publish thinking. The site has zero writing surface since the placeholder blog was removed — right call then, but the replacement (real, edited build logs) was deferred. Fix: `/notes` — an insights section seeded with three genuine engineering essays derived from documented projects. This is also the compounding SEO asset.
4. **Positioning still says "student" once** (About story ¶2). In July 2026 — final year completed, five organizations shipped for — the honest and stronger framing is *engineer trained at SUP'PTIC, class of 2026*.
5. **Expertise lacks a "Product thinking" row** — the founder signal. Skills read engineering-complete but product-silent.
6. **Route changes cut hard.** No transition between `/`, `/work`, `/notes` — every navigation is a hard swap. Fix: a calm enter transition (fade-rise + brass hairline sweep), enter-only so it never blocks.
7. **Stats block claims "21" but the ledger is the proof** — fine; but "Signals" can carry distinctions more prominently now that Record exists.

## v2.1 scope (this pass)

| Area | Change |
|---|---|
| Hero | Mouse-following ambient light (radial, blend-screen, ~5% opacity), scroll-scrub recede (content drifts up + dims as you scroll away), corner metadata; canvas kept |
| Work | `/work/[slug]` case-study pages: cinematic title block, sticky facts rail (desktop), narrative sections — Context → Problem → Role → Decisions → Challenges → Result → Lessons — plus stack, live link, next-case footer. Home panels now link internally |
| Notes | `/notes` index + `/notes/[slug]` articles. Three seeded essays (7-server infrastructure, security-lab detection, Terra Talent Hub trust engineering) written from real project history. Article JSON-LD, reading time, premium measure |
| Copy | Story rewrite (engineer, founder, no "student"), outcome-led expertise descriptions, new Product Thinking capability |
| Motion | Route enter transition via `app/template.tsx`; case-study pages get scroll-pinned facts rail; all existing primitives reused |
| SEO | Case studies + notes in sitemap; BreadcrumbList extended; per-page metadata |

## Content honesty rules (unchanged)

No invented metrics, clients, or certifications. Case-study "Decisions/Challenges" narrate documented builds; essays are reflections on work that exists. Testimonials stay empty until real ones arrive.

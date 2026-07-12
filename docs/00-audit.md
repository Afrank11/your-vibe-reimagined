# Site Audit — atehfrank.com (pre-redesign)

Audited: July 2026 · Stack found: Vite + React 18 SPA (Lovable-generated), react-router, shadcn/ui, framer-motion, react-helmet-async.

---

## 1. What works

**Content depth is real and rare.** Twenty documented projects spanning full-stack web (Terra Talent Hub, school management), infrastructure (7-server Linux, OpenStack private cloud), cybersecurity (multi-OS attack/defense lab, MobSF, HackThisSite), networking (Huawei eNSP, CAMTEL production IP networks), robotics, and data science. Five real work engagements. Quantified achievements (U.S. Embassy accelerator, ODSA Hackathon bronze, 50k+ LOC). Most student portfolios have three CRUD apps; this one has an actual engineering record. **This content is the asset — everything else is packaging.**

**SEO groundwork is unusually serious.** Person / WebSite / BreadcrumbList / FAQPage JSON-LD, name-variant coverage (Frank Ateh / Ateh Frank / Ateh Frank Jr / Franck Ateh…), hreflang, Google Search Console verification, sitemap + robots. The intent is right even where execution has bugs (see below).

**Centralized data layer.** `src/data/portfolio.ts` holds projects, experience, and contacts in one typed file — a good pattern worth carrying forward.

**Bilingual EN/FR content** already written for everything.

## 2. What feels outdated

The current visual identity is a **"gamer terminal" aesthetic**: neon cyan `#00F0FF` glows, `> whoami` prompt decorations, a typewriter headline, Orbitron display font, floating particles, click/hover sound effects, and a Spotify player. It reads as an enthusiastic student's hobby site. For the stated goal — *"this person builds modern, premium digital experiences"* and charges international rates — it actively works against the content. Specifically:

- **Neon glow + terminal cosplay** signals hobbyist, not studio. Premium references (o-scs, studiomodular, vectr) use restraint: near-black, off-white, one quiet accent, editorial type.
- **Every layout is a centered card grid.** Identical `bg-card border rounded-xl hover:border-primary/30` boxes repeated across 10+ sections — the signature of a template.
- **Cheap animation grammar**: typing effect, bouncing scroll arrow, `hover:scale-105` on everything, marquee ticker. Motion is decoration, not storytelling.
- **Seven fragmented routes** (`/about`, `/projects`, `/blog`, `/experience`, `/guestbook`, `/contact`) dilute a story that should build momentum in one scroll. Blog and Guestbook are placeholder shells — visible incompleteness undermines trust.

## 3. Technical / SEO defects found

1. **Canonical URL points to `atehfrank-vibe-folio.lovable.app`**, not `https://atehfrank.com` — every signal on the page tells Google the Lovable subdomain is the real site. This is the single most damaging SEO bug.
2. **Client-rendered SPA**: all meta beyond `index.html` is injected via react-helmet after JS loads; no SSR/SSG. Per-route SEO is fragile.
3. **OG image hosted on a Lovable R2 bucket** (`pub-…r2.dev`) — an external dependency that can vanish.
4. **~48 shadcn/ui components installed, ~6 used** — dead bundle weight and maintenance surface (calendar, charts, OTP inputs, sidebar… none used).
5. **Duplicate stray files** (`Footer.tsx` at repo root, Google verification HTML in three places).
6. `theme-color` is neon cyan; light theme exists but is half-maintained.

## 4. Decisions

| Verdict | Items |
|---|---|
| **Remove** | Sound effects, Spotify player, Guestbook, placeholder Blog, typing effect, particle background, neon glow system, marquee, light theme (commit to one cinematic identity), ~42 unused shadcn components, react-query (no server state), react-helmet (Next metadata replaces it) |
| **Redesign** | Everything visual: hero, layout system, typography, motion, navigation, contact |
| **Restructure** | 7 routes → one immersive page (`/`) + `/work` archive; old routes 301-redirect to anchors |
| **Keep (content)** | All 20 projects, 5 experience entries, education, achievements, story, contact channels, CV PDF, photo, GSC verification file |
| **Keep (intent), fix (execution)** | JSON-LD suite and metadata — ported to Next.js `metadata` API with canonical fixed to `https://atehfrank.com` |
| **Defer** | FR localization — all FR strings are preserved in the data layer for a phase-2 `/fr` route done properly (SSG per locale), instead of the current client-side toggle that Google never sees |

## 5. New creative direction (summary)

See [01-creative-direction.md](01-creative-direction.md). In one line: from *"gamer terminal"* to *"quiet signal"* — a cinematic, near-black editorial experience where telecom-grade engineering is the aesthetic, motion is calm and purposeful, and the work is presented as case studies rather than cards.

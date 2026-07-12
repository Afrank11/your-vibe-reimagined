# Information Architecture — Sitemap, Journeys, Wireframes

## Sitemap

```
atehfrank.com
├── /                  One-page immersive experience (8 numbered sections)
│    ├── #work         anchor — featured case studies
│    ├── #about        anchor
│    ├── #expertise    anchor
│    ├── #record       anchor — achievements timeline
│    ├── #process      anchor
│    └── #contact      anchor
├── /work              Complete project index (20 projects, filterable)
├── /Ateh_Frank_Ateh_CV.pdf
├── /sitemap.xml  /robots.txt  (generated)
└── 301 redirects: /projects→/work · /about /experience /contact /blog /guestbook → / anchors
```

Rationale: a portfolio pitch is a narrative — it should build in one scroll, not fragment across seven thin pages. `/work` stays a real route because 20 projects deserve a browsable, indexable archive and it gives Google a second strong page.

## User journeys

**Founder / client (goal: "can he build my thing, is he premium?")**
Hero (positioning, 3s) → scrolls → featured case studies with problem/role/outcome → process section (reassurance: he has a method) → contact → WhatsApp/email. Total: under 3 minutes. Every section ends pointing at the next; contact is reachable from the permanent header.

**Recruiter / technical team (goal: "verify depth")**
Hero → jumps via header to Expertise → Work archive (filters: Infrastructure, Cybersecurity, Networking…) → CV download → LinkedIn/GitHub. CV and GitHub are one click from anywhere (header + contact).

**Judge / investor (goal: "is this person exceptional?")**
Hero → About (story: locked Android phone → engineer-founder) → Record timeline (Embassy accelerator, hackathons, founder of Absurd Geeks) → contact.

## Wireframes (desktop → mobile notes)

### 0. Preloader (≤1.6s, once per session)
```
█████████████████████████████████████
█                                   █
█        FRANK ATEH   [counter 0-100]
█   ────────────────────────────    █  thin progress rule, then the whole
█████████████████████████████████████  screen wipes upward (mask) into hero
```

### 1. Hero — full viewport
```
┌─────────────────────────────────────────────────┐
│ FA·          work about expertise record contact│  fixed header, hairline under
│                                                 │
│      ( canvas: sparse drifting signal field )   │
│                                                 │
│  FRANK ATEH                    [mono] YAOUNDÉ,CM│
│  ENGINEERING                              04°03N│
│  digital experiences.   ← "digital" serif italic│
│                                                 │
│  Telecom engineer & full-stack developer.       │
│  I build systems people rely on.                │
│  [ View work ↓ ]  [ Start a project ]           │
│  01 — SCROLL ──────────────────── AVAILABLE ─── │
└─────────────────────────────────────────────────┘
```
Mobile: headline stacks 3 lines at ~13vw, coordinates move below CTAs, field density halved.

### 2. About — asymmetric editorial split
```
│ 02 — ABOUT                                      │
│ ┌────────────┐   From a locked Android phone    │
│ │ photo,     │   to production telecom networks.│  headline: masked line reveal
│ │ grayscale, │                                  │
│ │ parallax   │   story paragraphs (65ch)        │
│ │ inside mask│   ── hairline ──                 │
│ └────────────┘   SUP'PTIC · CAMTEL · founder    │  mono fact strip
```
Mobile: photo full-width first, text after; parallax reduced.

### 3. Expertise — hover-expand ledger (not cards)
```
│ 03 — EXPERTISE                                  │
│ ───────────────────────────────────────────────│
│ 01  Frontend Engineering        React·Next·TS ↗│  each row: hairline top,
│ ───────────────────────────────────────────────│  hover = row lifts to ink-2,
│ 02  Backend & APIs                              │  detail line + tools fade in
│ 03  Networks & Telecom                          │
│ 04  Cybersecurity                               │
│ 05  Cloud & Infrastructure                      │
│ 06  AI & Automation                             │
```
Mobile: rows always show detail (no hover dependency), tap expands.

### 4. Featured work — case-study panels, one per viewport-ish
```
│ 04 — SELECTED WORK                              │
│ ┌───────────────────────────────┬──────────────┐│
│ │  TERRA TALENT HUB             │ CONTEXT      ││  visual panel: abstract
│ │  (large visual panel,         │ ROLE         ││  typographic composition
│ │   image scales 1.06→1 on     │ STACK        ││  per project (no fake
│ │   scroll, parallax)           │ OUTCOME      ││  screenshots), brass index
│ │                               │ [Visit ↗]    ││
│ └───────────────────────────────┴──────────────┘│
│   … ×4 featured, alternating layout, then       │
│   [ View all 20 projects → /work ]              │
```
Mobile: visual on top, meta stacked, swipe-free vertical flow.

### 5. Record — achievements timeline (pinned progress line)
```
│ 05 — RECORD                                     │
│   2022 ●──── Cam e-guide / Skolarr              │  vertical hairline grows
│   2023 ●──── Dewise Energy                      │  with scroll; entries
│   2024 ●──── Terra Talent Hub · founder         │  alternate sides on desktop,
│   2025 ●──── CAMTEL · Embassy accelerator       │  single column mobile
│   2026 ●──── Zenorva · SUP'PTIC engineering deg.│
```

### 6. Process — numbered steps, horizontal on desktop
```
│ 06 — PROCESS                                    │
│  01 Discover  02 Strategy  03 Design            │  steps revealed with
│  04 Build     05 Optimize  06 Launch            │  stagger; active step
│  each: title + 2 lines + mono duration          │  numeral in brass
```

### 7. Signals — testimonial placeholder system + trust indicators
```
│ 07 — SIGNALS                                    │
│  " quote slot (data-driven, accepts future      │
│    testimonials) "        — name, role          │
│  ── trust strip: CAMTEL · Terra Talent Hub ·    │
│     U.S. Embassy accelerator · SUP'PTIC ──      │
```
Ships with working-relationship quotes clearly labeled; adding a testimonial = one object in `data`.

### 8. Contact — the memorable close
```
│ 08 — CONTACT                                    │
│                                                 │
│   Let's build something                         │
│   that lasts.            ← huge, serif italic   │
│                                                 │
│   EMAIL ↗   WHATSAPP ↗   GITHUB ↗   LINKEDIN ↗ │  oversized hover rows
│   [ Download CV ]                               │
│ ────────────────────────────────────────────────│
│ © 2026 Frank Ateh · Yaoundé ·  local time 14:32 │  footer with live clock
```

## Responsive strategy

- Breakpoints: 375 / 768 / 1024 / 1440 / 1920+. Ultrawide: content capped at `max-w-[1600px]`, hairlines run full-bleed so the frame still feels composed.
- Layouts recompose (split → stack, ledger hover → accordion, timeline alternating → single rail) rather than shrink.
- Touch: no hover-dependent information anywhere; all targets ≥44px.

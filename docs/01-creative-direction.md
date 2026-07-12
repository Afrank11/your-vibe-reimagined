# Creative Direction — "Quiet Signal"

## Concept

Frank's discipline is telecommunications: moving signal through noise. The site borrows that as its metaphor and its manner. Everything loud has been removed; what remains is signal — precise typography, deep black space, thin luminous lines, and motion that behaves like a well-engineered system: calm, damped, never overshooting.

The answer to *"if this belonged to a young engineer-founder competing globally, what would make visitors remember him?"* is not more effects — it is **composure**. Visitors remember the site that feels inevitable: content that lands with weight, in silence, at 60fps. A 22-year-old from Yaoundé presenting with the restraint of a Zurich design studio *is* the memorable move.

## Personality

Luxurious · minimal · technical · cinematic · confident. Never playful-neon, never corporate-safe.

Voice: first person, short declarative sentences, zero exclamation marks. "I build systems people rely on." Numbers are stated, not hyped.

## Color

| Token | Value | Use |
|---|---|---|
| `ink` | `#070707` | Page background |
| `ink-2` | `#0D0D0D` | Raised panels, cards |
| `ink-3` | `#161616` | Deep surfaces, code blocks |
| `bone` | `#EDECE6` | Primary type |
| `silver` | `#8F8F8A` | Secondary type |
| `smoke` | `#55554F` | Tertiary / disabled |
| `line` | `rgba(237,236,230,0.10)` | Hairline rules, borders |
| `brass` | `#C2A57B` | The single accent: active states, index numerals, key words. Used at <5% of the surface |

No gradients as decoration. No blue. No glow. Depth comes from grain, hairlines, and layered blacks.

## Typography

| Role | Face | Notes |
|---|---|---|
| Display | **Space Grotesk** (700/500) | Headlines set huge, tracking −2% to −4%, tight leading (0.95–1.05) |
| Editorial accent | **Instrument Serif** italic | One or two words inside each display headline ("*digital* experiences") — the signature detail |
| Body / UI | **Space Grotesk** (400) | 16–18px, leading 1.6, max measure 65ch |
| Technical labels | **IBM Plex Mono** (400/500) | Uppercase 11–12px, tracking +8–12%: section indices ("01 — ABOUT"), coordinates, metadata |

Scale: fluid `clamp()` from mobile to ultrawide; hero display reaches ~9–11vw on desktop, capped at 160px.

## Texture & atmosphere

- **Grain**: fixed full-screen SVG fractal-noise overlay at ~4% opacity, `mix-blend-mode: overlay` — kills the "flat black rectangle" feel.
- **Signal field** (hero background): a sparse canvas network of drifting nodes and hairline connections in `smoke`/`brass` — an abstract telecom topology. Subtle mouse gravity. Density and framerate degrade gracefully; removed entirely under reduced motion.
- **Hairlines everywhere**: 1px `line` rules structure the page like a technical drawing.
- **Section indices**: mono `01 — 08` numerals give the scroll a sense of a numbered dossier.

## Motion philosophy

Calm, confident, purposeful. Rules:

1. Nothing moves without narrative reason (reveal = "this exists now"; parallax = depth; pin = "stay with this").
2. Ease of record: `power3.out` entering, `power2.in` exiting; durations 0.6–1.0s for reveals, 150–300ms for micro-interactions.
3. Transforms and opacity only. Never animate layout.
4. Masked line reveals for headlines (words rise from behind a clipped line) — the house move.
5. `prefers-reduced-motion`: every animation collapses to a simple fade or nothing; the canvas field renders a static frame.

## Anti-patterns (enforced)

No typing effects · no bouncing arrows · no glow shadows · no `scale(1.05)` hover on cards · no marquees · no emoji as icons · no glassmorphism panels · no bright gradients.

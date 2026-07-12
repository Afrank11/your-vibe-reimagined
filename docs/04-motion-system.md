# Motion System Reference

Shared tokens live in `lib/motion.ts`. Every animated component consumes these — never ad-hoc values.

## Tokens

| Token | Value | Used for |
|---|---|---|
| `EASE.out` | `power3.out` / `[0.16, 1, 0.3, 1]` | Entrances, reveals |
| `EASE.inOut` | `power2.inOut` | Pins, masks, preloader wipe |
| `DUR.micro` | 0.2s | Hover, press |
| `DUR.reveal` | 0.8s | Section entrances |
| `DUR.slow` | 1.2s | Hero, preloader |
| Stagger | 0.06–0.09s per element | Lines, rows, grid items |

## Primitives

- **`<MaskedLines>`** — splits a headline into lines, wraps each in `overflow-hidden`, GSAP raises them `yPercent: 110 → 0` with stagger on ScrollTrigger enter. The house reveal.
- **`<Reveal>`** — children fade-rise (`y: 32 → 0`, opacity) once, on enter (85% viewport).
- **`<Parallax speed={±0.1..0.3}>`** — translates children against scroll inside their section. Speeds beyond ±0.3 are banned (disorientation).
- **`<Magnetic>`** — CTA gently follows cursor within 0.35 strength radius; desktop pointer-fine only.
- **`SignalField`** — hero canvas; node drift + link opacity by distance; mouse adds mild gravity. Pauses off-screen; static frame under reduced motion.
- **Preloader** — mono counter 0→100 while fonts/hero settle, then full-screen panel wipes up (`scaleY 1→0`, origin top). Runs once per session (`sessionStorage`).
- **Cursor** — 8px dot + trailing ring; ring expands over links/buttons (`data-cursor="hover"`). Hidden on touch/reduced-motion; native cursor never removed on form fields.

## Choreography rules

1. One idea per viewport: a section animates its headline, then content, never both loudly.
2. Exit ≈ 65% of enter duration.
3. Transforms/opacity only; `will-change` applied by GSAP, not in CSS.
4. Pinning: only Work case-study meta column (desktop ≥1024px) — everything else flows.
5. All ScrollTriggers `once: true` except parallax/pins — re-triggering on scroll-up feels needy.

## Reduced motion

`usePrefersReducedMotion()` gates everything: Lenis off, parallax/magnetic/cursor off, MaskedLines & Reveal become opacity-only 0.3s fades, SignalField static, preloader skipped.

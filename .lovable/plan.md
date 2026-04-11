
# Replicate & Enhance Frank Ateh Portfolio

## Overview
Rebuild the full portfolio from https://frank-ateh-vibe-folio.lovable.app with all exact content, animations, and sound effects — plus the modifications you requested.

## Pages to Build

### Home Page (Index) — Single-page with all sections in order:
1. **Hero Section** — Profile photo (uploaded Ateh.jpg) with "Available for collaboration" badge, terminal animation typing "Ateh Frank Ateh — Network Engineer • Developer • Builder", CTA buttons (View Projects, My Story, CV, Contact), tagline text + "Hire Me Now" button. Particle/dot background animation. **Image also shown here.**
2. **About Me Section** — Profile picture (Ateh.jpg) displayed as the about me image, quick facts, bio text, "Read My Full Story" link to /about page
3. **Skills & Technologies (Tech Arsenal)** — Languages, Networking, Infrastructure & Sysadmin, Cybersecurity, Databases, Frameworks & Tools, Data & AI, Mastering Next 🔥 — all with tech badges
4. **Experience Numbers** — 50,000+ Lines of Code, 30+ Projects Built, 10+ Years Experience, 5,000+ Hours Coding (animated counters)
5. **Featured Projects** — 4 project cards (Cybersecurity Virtual Security Lab, Linux Enterprise Infrastructure, NoSQL Social Media Database, Autonomous Parking Robot) with tech tags
6. **Now Doing** — 4 activity cards (React+TS portfolio, Cybersecurity lab, React/Next.js/Laravel, Network architecture)
7. **Education** — SUP'PTIC card
8. **Impact & Work** — Terra Talent, Absurd Geeks, Terra Crowd Fund, CAMTEL cards
9. **Accomplishments** — 7 achievement items + Download CV button
10. **Case Studies** — 3 detailed cards (Enterprise Security Lab, 7-Server Linux Infrastructure, 4-Paradigm NoSQL Database)
11. **Blogs & Insights** — 3 blog preview cards
12. **GitHub Activity** — 6 repo cards
13. **Beyond the Terminal** — Chess, Football, Gaming, Side Projects, CTF Challenges, Learning
14. **Guestbook** — CTA with "Sign the Guestbook" button
15. **Scrolling Accomplishments Ticker** — Horizontal marquee
16. **Let's Build Something Together** — CTA with Contact Me + Download CV buttons
17. **Footer** — Social links, copyright

### About Page (/about)
- Terminal command rain background animation
- Profile collage/photo (Ateh.jpg used here too)
- Quick facts list
- Full bio text (all paragraphs from the original)

### Other Pages
- **/projects** — Projects listing page
- **/blog** — Blog listing + individual blog pages (OpenStack, Security Lab, African Tech)
- **/experience** — Experience/work timeline
- **/guestbook** — Guestbook page
- **/contact** — Contact form

## Key Modifications from Original
1. **Profile picture**: Use the uploaded Ateh.jpg as profile picture in hero + about sections (not the speaking photo from original)
2. **Centered headings & text**: All section headings and descriptive text centered
3. **Mobile spacing**: Add proper top padding/margin so content doesn't go under the sticky navbar on mobile
4. **Spotify integration**: Embed Spotify track (5g0YH8ubl5G5qHid3sNbbU) as a background music player — small floating player widget that plays while scrolling

## Design & UX
- **Dark theme** (black/dark gray background, cyan/turquoise #00F0FF accent)
- **Gaming/terminal aesthetic** — monospace fonts for terminal elements, typing animations
- **Sound effects** — Click sounds, hover sounds, navigation sounds (using Web Audio API)
- **Animations** — Particle background, fade-in on scroll, typing terminal effect, counter animations, marquee ticker, hover effects on cards
- **Sticky navbar** with FA logo, nav links (Home, About, Projects, Experience, Blog, Guestbook, Contact), FR language toggle, sound toggle, dark/light toggle, GitHub/LinkedIn icons, CV button
- **Floating Spotify mini-player** — small control in corner to play/pause the track

## Tech Stack
- React + TypeScript + Tailwind CSS
- Framer Motion for animations
- React Router for multi-page navigation
- Web Audio API for sound effects
- Spotify Embed API for background music

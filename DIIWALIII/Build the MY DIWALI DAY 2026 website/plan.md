# MY DIWALI DAY 2026 — Implementation Plan

## Product scope

Build a fully responsive, route-based React website that turns one Diwali day into a premium visual memory journal. The experience begins with a click-to-ignite rocket intro, then moves through five complete pages: Home, About Diwali, My Day, Gallery, and Crackers. The personal story on My Day is source-of-truth content and will remain unchanged in wording and sequence.

The app will run locally with `npm install` and `npm run dev`, use React Router DOM for page navigation, Tailwind CSS for the utility layer, and a dedicated global CSS layer for the cinematic theme, timeline, particles, fireworks, responsive layout, and motion. No backend, login, or database is needed.

## Design direction

### Alternative styles considered

- **Cinematic Diwali editorial** — 0.07 probability: dark, filmic, gallery-like storytelling with warm gold light.
- **Royal festive palace** — 0.05 probability: ornate, jewel-toned, ceremonial, and highly decorative.
- **Minimal midnight celebration** — 0.03 probability: restrained black canvas with sparse luminous accents.

### Chosen style: Cinematic Diwali editorial

**Design Movement:** Contemporary editorial storytelling blended with Indian festive night photography and luxury hospitality visual language.

**Core Principles:**
1. Treat every section as a memory vignette, not a generic content block.
2. Use warm light against near-black space to create depth and focus.
3. Keep interactions tactile and celebratory: ignition, glow, reveal, filter, and lightbox.
4. Preserve breathing room around the personal story so exact timings and details stay easy to read.

**Color Philosophy:** Obsidian and deep plum backgrounds create a quiet night sky; marigold gold and saffron orange carry the warmth of diyas, fireworks, and family food; warm ivory is used for long-form readability. The ownable brand color is **Diwali Gold `#f6c453`**, used as a controlled signal for active states, timeline nodes, and primary actions.

**Layout Paradigm:** A vertical “memory trail” runs through the site. Sections are asymmetrical editorial compositions: a hero with offset information, a split story layout, alternating timeline cards, and wide visual bands rather than a uniform centered grid.

**Signature Elements:**
- A diya-shaped glow/halo motif in navigation, section labels, and footer.
- Thin gold timeline rails and “memory pin” markers.
- Slow-moving star/firework particles layered behind content.

**Interaction Philosophy:** Every control should feel like part of the celebration. The rocket intro is an actual object to ignite. Filters narrow the memory archive; image cards open into a focus view; audio controls make sound optional and explicit; page navigation is always available and functional.

**Animation:** Use a restrained motion system: slow ambient drift for particles and diyas, sharp ignition/fly/explode phases for the rocket, soft fade-and-rise page transitions, and reduced-motion fallbacks. Avoid constant motion behind dense reading content.

**Typography System:** Use `Playfair Display` for expressive headlines and `DM Sans` for interface and body copy, with a serif display scale for page titles and compact uppercase eyebrow labels for structure. Body copy stays at readable line lengths and high-contrast warm white.

**Brand Essence:** A private, cinematic archive of one unforgettable Diwali day for the people who lived it. Personality: warm, vivid, intimate.

**Brand Voice:** Headlines are concise and emotionally specific; CTAs sound like invitations into a memory. Example lines: “A day lit from within.” and “Open the next memory.”

**Wordmark & Logo:** A compact diya mark beside a two-line stacked wordmark: `MY DIWALI DAY` over `2026`, with a small gold flame notch used as the visual signature.

**Signature Brand Color:** Diwali Gold `#f6c453`.

## Implementation approach

- Use Vite + React with a small, readable component system.
- Use `react-router-dom` routes for `/`, `/about`, `/my-day`, `/gallery`, and `/crackers`.
- Persist the intro-complete state in `sessionStorage` so refreshes can return to the site after the first ignition, while a “Replay intro” control remains available from the footer.
- Implement the intro in React/CSS: central rocket button, ignition state, flight path, return-to-center phase, layered canvas-like CSS fireworks, sound toggle, and Web Audio API oscillator/noise effects so the project remains functional without shipping binary audio files.
- Use reusable components: `SiteShell`, `Navbar`, `Footer`, `PageNav`, `AmbientParticles`, `Diya`, `FireworkField`, `SectionHeading`, `MemoryCard`, `Timeline`, `Lightbox`, and `BackToTop`.
- Keep all requested photo filenames in `public/assets/images/` and video filenames in `public/assets/videos/`. Because no user media was attached, create visually coherent SVG-based sample photographs at those exact `.jpg` paths and short SVG/MP4-safe placeholder strategy with README instructions; the React app falls back to visual placeholders if a file is absent, so replacement is a simple file swap.
- Add `public/manus-routes.json`, `public/favicon.svg`, and a browser title/meta configuration.
- Use Tailwind for layout/spacing/responsive utility classes in JSX and global CSS for the custom visual system.

## Project structure

```text
.
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── README.md
├── plan.md
├── TODO.md
├── public/
│   ├── manus-routes.json
│   ├── favicon.svg
│   └── assets/
│       ├── images/           # Exact replaceable photo filenames
│       └── videos/           # Exact replaceable video filenames + README
└── src/
    ├── main.jsx              # React entry point and router
    ├── App.jsx               # Routes, intro gate, global shell
    ├── data/content.js       # Story, gallery, about, and video data
    ├── components/           # Reusable navigation, effects, cards, modals
    ├── pages/                # Home, About, My Day, Gallery, Crackers
    └── styles/index.css      # Tailwind directives + custom theme/motion
```

## Serving and validation workflow

The local preview will use the Webdev session runtime port declared through `webdev.config` and Vite will bind to `127.0.0.1` with strict-port behavior. Before the first server start, `manus-routes.json` and diagnostics setup will be in place. Validation will include `npm install`, a production build, route-manifest HTTP verification, source inspection for every required interaction, and a running preview probe. Any build or diagnostic issue found will be fixed before handoff.

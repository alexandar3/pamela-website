# Pamela — AI Agency Website

A single-page marketing site for Pamela, an AI agency, built to convert visitors into booked calls.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion for scroll/entrance animations
- Static export (`output: "export"`) — no backend/database required

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Building for production

```bash
npm run build
```

This produces a static export in the `out/` directory, deployable to any static host (Vercel, Netlify, GitHub Pages, S3, etc.).

## Editing content

Almost everything you'll want to change lives in [`src/lib/site-config.ts`](src/lib/site-config.ts):

- **Calendly link** — update `CALENDLY_URL`.
- **Contact email / social links** — update `CONTACT_EMAIL` and `SOCIAL_LINKS`.
- **Services** — edit the `SERVICES` array. Each entry is a video + copy block rendered by the Services section. Add a new object to the array to add a new service showcase — no layout changes needed.
- **Pricing** — edit the `PRICING_TIERS` array. Each tier is a plain object (price, clip count, features, turnaround, revisions). Set `highlighted: true` on the tier you want visually emphasized as the recommended option.

## Adding portfolio videos

Drop new `.mp4` files into `public/videos/`, then reference them (e.g. `/videos/your-file.mp4`) from the `video` field of an entry in the `SERVICES` array in `src/lib/site-config.ts`. Videos autoplay muted/looped and can be unmuted by hovering and clicking the "Unmute" button.

Current videos:

- `public/videos/real-estate-cinematic.mp4` — Real Estate Cinematic Videos
- `public/videos/product-motion-design.mp4` — Product Motion Design Videos

## Project structure   

```
src/
  app/
    layout.tsx       Root layout, fonts, metadata
    page.tsx          Assembles all sections
    globals.css       Tailwind + theme setup
  components/
    Logo.tsx           Wordmark logo (code-based, no image asset)
    Header.tsx         Sticky nav with scroll-aware background
    Hero.tsx           Hero section
    Services.tsx       Video + copy showcase for each service
    ShowcaseVideo.tsx  Reusable autoplay/click-to-unmute video player
    WhyAI.tsx          Three-value-prop differentiator section
    Pricing.tsx        Pricing cards driven by PRICING_TIERS config
    FinalCta.tsx        Repeated headline + CTA
    Footer.tsx         Footer with contact/social links
  lib/
    site-config.ts     Single source of truth for links, services, pricing
```

# PGHandle Marketing Site

`pghandlemkt` is a single-page marketing experience that mirrors the React + Tailwind tech stack used by `pghandlefe`. It highlights the product story, automation benefits, testimonial proof, and transparent pricing while routing primary calls-to-action straight into the PGHandle application.

## Tech stack

- Vite 5 + React 19 + TypeScript
- Tailwind CSS 3.4 with custom theme tokens
- PostCSS + Autoprefixer build pipeline

## Getting started

```bash
cd pghandlemkt
npm install
npm run dev
```

> **Node requirement:** Vite 5 supports Node.js 18.0+ (we recommend ≥20.11). Upgrade Node if you see an EBADENGINE warning.

## Available scripts

- `npm run dev` – local development server with hot reload
- `npm run build` – type-check and create an optimized production bundle in `dist/`
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint across the project

## Customisation notes

- Update `APP_URL` and `DEMO_URL` inside `src/App.tsx` if your production app or booking flow lives elsewhere.
- Tailwind tokens live in `tailwind.config.js`, while global theming (fonts, backgrounds) is handled in `src/index.css`.
- Hero, pricing, testimonials, and FAQ sections are data-driven arrays; adjust copy or add new cards without rewriting layout code.

## Deployment

The site is a static bundle—drop the `dist/` output behind any CDN (Netlify, Vercel, S3 + CloudFront, etc.). The primary CTA links already deep-link into the PGHandle application so visitors can jump straight into the product experience.

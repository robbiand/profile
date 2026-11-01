# Andrian Robby Pratama | Senior Frontend Engineer

Personal portfolio website: [robbiand.github.io/profile](https://robbiand.github.io/profile/)

Built with React 19, Vite 7, and Tailwind CSS 3. A static single page with a bento-style hero, experience cards, a tech stack section, and project cards with screenshot galleries.

## Features

- Responsive layout (mobile, tablet, desktop) with a sticky navbar and active-section highlight
- Light and dark mode (follows the system setting, remembers the choice)
- Screenshot galleries with a keyboard-accessible lightbox
- Open Graph and Twitter meta tags for link previews

## Project structure

```
src/
  data/content.js      # all text, links, and image references live here
  components/          # navbar, hero, experience, tech-stack, projects, contact
  components/ui/       # Card, Badge, SectionHeading, Gallery
  hooks/               # useTheme, useActiveSection
  assets/              # profile photo and project screenshots (WebP)
public/                # favicons, manifest, og-image.jpg
```

To change content, edit `src/data/content.js`; no component changes are needed.
Theme colors are CSS variables in `src/index.css`.

## Getting started

Requires Node.js 20.19+ or 22.12+ (Vite 7).

```bash
npm install
npm run dev       # local dev server
npm run build     # production build into dist/
npm run preview   # preview the production build
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.
The production `base` path is `/profile/` (see `vite.config.mjs`).

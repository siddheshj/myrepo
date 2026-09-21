# Sudhir Joglekar — personal website

Static Astro site for **Sudhir Joglekar** (Marathi & Hindi actor, writer, producer) and the **Akshay Telemedia / अक्षय क्रिएशन्स** banner.

This folder is self-contained so it does not replace the repository root README.

## Pages

| Path | Contents |
| --- | --- |
| `/` | Home — identity, portrait, public-credit teasers |
| `/journey` | Animated career infographic (scroll line + stepped cards) |
| `/acting` | Named film credits + TBD cards + portfolio stills |
| `/writing` | *Akshay Katha* placeholder cover, catalogued books, serials/plays TBD |
| `/producing` | *The Blue Revolution / Nil Kranti* spotlight (poster TBD), *Akka*, banner |
| `/contact` | Netlify form + letterhead address (flagged as possibly historical) |

Radio sits on Home (chip) and Journey. Untitled radio programmes are **not** invented.

## Local

```bash
cd sudhir-joglekar-website
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

Output directory: `dist/`.

## Netlify

`netlify.toml` in this folder sets `command = npm run build` and `publish = dist`.

**If the Netlify site’s base directory is this folder** (or you deploy from here with the CLI):

```bash
cd sudhir-joglekar-website
npm install
npm run build
npx netlify login          # once, if needed
npx netlify deploy --prod --dir=dist
```

Preview deploy (no production alias):

```bash
npx netlify deploy --dir=dist
```

**If the Git repo root is the Netlify site**, set Base directory in Site configuration → Build & deploy to `sudhir-joglekar-website`. Do not add a second `netlify.toml` at the repo root unless you intend the whole repo to be one site.

Enable **Netlify Forms** so the contact form is collected.

## Facts & assets

Credits are limited to public listings and the project brief. Untitled serials, plays, radio programmes, telefilms, and extra documentaries use TBD cards.

Staging images live in `public/assets/`. Sources and rights notes: [SOURCES.md](./SOURCES.md). Footer on every page: *Placeholder publicity images — replace before final launch.*

The *Akshay Katha* cover and *Nil Kranti* poster were not found publicly; those cards are honest placeholders.

## Motion

Journey uses Intersection Observer and a scroll-linked ink line. `prefers-reduced-motion: reduce` shows the timeline fully drawn, with no enter animations.

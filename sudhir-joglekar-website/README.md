# Sudhir Vinayak Joglekar — personal website

Static Astro site for **Sudhir Vinayak Joglekar** (Marathi & Hindi actor, writer, producer) and the **Akshay Telemedia / अक्षय क्रिएशन्स** banner.

This folder is self-contained so it does not replace the repository root README.

**Identity:** this site is only for Sudhir Vinayak Joglekar. It does not use Talentrack/open-web stills or film credits that belong to another person of the same name. Portraits and the *Jab I Met…* cover are client-supplied.

## Pages

| Path | Contents |
| --- | --- |
| `/` | Home — identity, Nehru-jacket portrait, *Jab I Met…*, TBD cards |
| `/journey` | Animated career infographic (scroll line + stepped cards) |
| `/acting` | Craft statement + TBD titles + client portraits |
| `/writing` | Featured *Jab I Met…* cover; *Akshay Katha* placeholder; serials/plays TBD |
| `/producing` | *The Blue Revolution / Nil Kranti* spotlight (poster TBD) |
| `/contact` | Netlify form + letterhead address (flagged as possibly historical) |

Radio sits on Home (chip) and Journey. Untitled radio programmes are **not** invented.

## Theme

Royal blue + orange. Light and dark modes. Default follows `prefers-color-scheme`; the header toggle writes `localStorage` key `sj-theme`.

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

**If the Git repo root is the Netlify site**, set Base directory in Site configuration → Build & deploy to `sudhir-joglekar-website`.

Enable **Netlify Forms** so the contact form is collected.

## Facts & assets

Named work on this staging site: *Jab I Met…* (2014) and *The Blue Revolution / Nil Kranti* (as stated by Siddhesh Joglekar). Acting, radio, serials, plays, telefilms, further books, and documentaries use TBD cards.

Client images live in `public/assets/`. See [SOURCES.md](./SOURCES.md).

## Motion

Journey uses Intersection Observer and a scroll-linked line. `prefers-reduced-motion: reduce` shows the timeline fully drawn, with no enter animations.

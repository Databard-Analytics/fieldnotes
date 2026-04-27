# Fieldnotes

Fieldnotes is a public publication for Databard.

**Tagline:** Observations on strategy, intelligence, and coaching in an AI-shaped world.

Primary role:
- build a distinctive public voice
- publish practical daily briefs
- surface signal on AI, data, coaching, leadership, and strategic change
- support trust and demand for coaching and advisory services

This project is intentionally separate from the main Databard website.
The main site handles the broader business, services, and blog context.
Fieldnotes focuses on a tighter editorial format.

## Brand reference

- Main site: <https://databard.co.uk/>
- Planned subdomain: `fieldnotes.databard.co.uk`

## Core content types

- **Briefs**: short, timely observations and daily briefings
- **Notes**: concise reflections, frameworks, and practical takeaways
- **Themes**: grouped topic areas for navigation and content organization

## Site stack

- Astro
- static build output
- Vercel-friendly deployment setup
- markdown-based content collections

## Project files

- `brand.md` — brand positioning and homepage structure
- `writing.md` — tone and writing rules for Fieldnotes briefs
- `src/content.config.ts` — content model definitions

## Content locations

- `src/content/briefs/` — dated markdown briefs
- `src/content/notes/` — evergreen short notes and frameworks
- `src/content/themes/` — theme definitions and landing content

## Local development

```bash
bun install
bun run dev
```

## Build

```bash
bun run build
```

## Publishing intent

Content should be:
- public-safe
- practical
- clear
- strategically useful
- consistent with Databard’s voice of clarity, signal, and practical leadership

## Exclusions

Fieldnotes does **not** handle essays as a primary content type.
Longer essay-style writing will live separately in the main blog.

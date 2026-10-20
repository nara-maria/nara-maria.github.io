# Josh Jones mentoring website

Migrated from the public Emergent deployment with the site owner's permission. The portfolio at the repository root is not modified.

## Hosting
This directory is a standalone static website, published at https://nara-maria.github.io/josh-mentor/. No Emergent subscription or backend is needed for the current functionality. Instagram links, Google Fonts and Unsplash imagery remain external dependencies. Emergent's injected preview script and analytics were removed; the site app and visual styles are preserved.

## Editing
Editable React/TypeScript source is in `source/`. Main copy, links, draft flags and imagery are in `source/src/config/site.ts`.

To develop: `cd source && npm install && npm run dev`.
To rebuild: `npm run build`, then copy the contents of `source/dist/` over this directory's published files, preserving `source/` and this README. The initial deployment preserves the original production JS and CSS bundles; no source-map files are needed at runtime.

The recovered stylesheet includes precompiled utility classes because the original Tailwind build configuration was not exposed. New utility names may require adding CSS explicitly or configuring Tailwind.

## Content status
Existing draft portraits, testimonial placeholders, location text and offer settings were intentionally left unchanged. No booking URL is configured; the primary call to action currently opens Instagram messages. Review these with Josh before treating the site as final approved client content.

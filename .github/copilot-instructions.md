<!-- Copilot instructions tailored for the SMSG Astro site -->

# Repo snapshot

- Project: Astro static site (SMSG) using `@astrojs/netlify` adapter and Tailwind.
- Key runtime: Node.js >= 18 (see README). Local dev runs on port 4321.

# Quick dev commands (run from repo root)

- Install: `npm install`
- Dev server: `npm run dev` (alias: `npm start`)
- Build: `npm run build` (outputs to `./dist/`)

# Architecture & entry points

- Pages/routing: the site uses file-based routing under [src/pages](src/pages). Example: [src/pages/index.astro](src/pages/index.astro).
- Layouts and shared HTML: [src/layouts/Layout.astro](src/layouts/Layout.astro) provides `<slot />`, page title, meta and font preloads.
- UI components: reusable components live in [src/components](src/components) (e.g. [src/components/Header.astro](src/components/Header.astro), [src/components/Footer.astro](src/components/Footer.astro)).
- Styles: Tailwind + custom utilities in [src/styles/globals.css](src/styles/globals.css). Pay attention to helper classes like `container-custom`, `section`, `btn`, and `nav-link`.
- Netlify / edge: Netlify-specific entry points are under `netlify/edge-functions` and site-level edge pages under [src/pages/edge](src/pages/edge). Inspect those before touching server/edge logic.
- Static blobs / assets: see [src/pages/blobs](src/pages/blobs) and `public/images` for image usage and Netlify blob patterns.

# Project-specific conventions (follow these exactly)

- Use Astro file frontmatter and props for pages. Pattern: top-level `---` frontmatter, imports, then template. See [src/pages/index.astro](src/pages/index.astro).
- Styling: prefer Tailwind utility classes and the project's shared component classes in `globals.css`. Avoid adding global CSS outside `globals.css` unless necessary.
- Fonts: `@fontsource-variable/inter` is imported in the layout (`Layout.astro`) and preloaded — keep that pattern for new fonts.
- Small client JS: minimal DOM scripts are included inline in component files (example: mobile menu in `Header.astro`). If you add client scripts, keep them small and local to the component.

# Integration notes & what to check before changes

- Adapter & deploy: the project uses `@astrojs/netlify` — changes to server-side or edge behavior may require Netlify configuration review (check `netlify/edge-functions`).
- Assets: image and blob handling may rely on Netlify Blob/Image CDN; verify how images are referenced in `src/pages/blobs` and `public/images` before changing paths.
- No test framework present: there are no test scripts in `package.json`. If adding tests, also add scripts and docs for running them.

# Examples & patterns to copy

- Page pattern: follow [src/pages/galeri.astro](src/pages/galeri.astro) / [src/pages/index.astro](src/pages/index.astro) for frontmatter, using `Layout`, and markup structure.
- Component pattern: follow `Header.astro` for server-rendered navigation with a small client-side toggle script.
- Style pattern: use `container-custom` and `section` utilities from [src/styles/globals.css](src/styles/globals.css) instead of creating many bespoke containers.

# Guidance for AI code edits

- Small UI/content changes: edit files directly under `src/pages` or `src/components`. Keep markup accessible and localized (lang is `id`).
- New routes: add `.astro` files under `src/pages`. Use `Layout` and follow existing metadata patterns.
- Edge/Server changes: only modify `netlify/edge-functions` or `src/pages/edge` when the change is explicitly about server behavior — note deploy implications.
- Keep changes scoped: prefer adding new components in `src/components` and reusing `globals.css` tokens.

# If unsure / where to look

- Start: [README.md](README.md) then [package.json](package.json) scripts.
- UI patterns: [src/components/Header.astro](src/components/Header.astro) and [src/styles/globals.css](src/styles/globals.css).
- Edge/Netlify: `netlify/edge-functions` and [src/pages/edge](src/pages/edge).

---
If any section is unclear or you'd like more examples (component, page or edge function), tell me which area to expand and I will update this file.

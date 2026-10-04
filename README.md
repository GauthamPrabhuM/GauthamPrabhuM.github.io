# gauthamprabhum.github.io

Source for my research site: https://gauthamprabhum.github.io

Next.js 14 (App Router), TypeScript and Tailwind CSS, exported as static HTML and deployed to GitHub Pages by a workflow on every push to `main`.

One page, in this order: research overview, research journey, publications, projects, experience, awards and leadership, contact. All content lives in [`src/lib/data.ts`](src/lib/data.ts); components only render it.

## Project structure

```
src/
  app/
    layout.tsx        # metadata, SEO, fonts, JSON-LD Person schema, theme provider
    page.tsx          # section composition
    globals.css       # design tokens (light/dark), base styles
  components/
    nav.tsx           # sticky nav + mobile menu
    footer.tsx
    theme-provider.tsx, theme-toggle.tsx
    sections/         # hero, research, publications, projects, experience, achievements, contact
    ui/               # card, badge, button, section, fade-in (shadcn-style primitives)
  lib/
    data.ts           # all site content
    utils.ts          # cn(), asset() base-path helper
```

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
```

## Deploying to GitHub Pages

A workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the static
export and publishes it on every push to `main`.

1. Create a new GitHub repository and push this folder to `main`.
2. In **Settings → Pages**, set **Source = GitHub Actions**.
3. Push. The site deploys automatically.

**User site** (`GauthamPrabhuM.github.io`): serves at the domain root, no base path.
**Project site** (e.g. `research-site`): the workflow detects the `/research-site` base path
via `actions/configure-pages` and passes it to Next.js as `NEXT_PUBLIC_BASE_PATH`.

Vercel also works without changes.

## Editing content

Open `src/lib/data.ts`. Narrative, publications, projects, experience,
achievements and links are typed and kept in one place. Components render whatever is there.

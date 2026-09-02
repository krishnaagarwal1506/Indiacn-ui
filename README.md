# 🇮🇳 IndiaCN UI — Community Design System for India

IndiaCN is an **open-source design system** built for India's digital services — especially government and public-service applications. Based on the [UX4G 2.0 design system](https://www.figma.com/community/file/1471833723727926454), it ships as a **shadcn-compatible registry** with 39 production-ready components.

- **Accessibility-first** — WCAG 2.1 AA text contrast, checked in CI; built on Radix UI primitives
- **Copy-pasteable** — source lands directly in your repo; no runtime dependency, no version lock
- **shadcn-compatible** — install any component with a single `npx shadcn add <url>`
- **Dark mode** — every component themes from mirrored token ramps, with no `dark:` overrides to maintain

> This project is **not affiliated with the Government of India** — it is a community initiative inspired by UX4G design principles.

---

## 📌 Status

🟢 **Active development**

- **39 components**, each measured against the UX4G Figma kit rather than approximated
- **40 documentation pages** at [indiacn.in/docs](https://indiacn.in/docs)
- UX4G 2.0 theme: 7 semantic colour scales, mirrored light/dark ramps, focus rings
- Installable today by registry URL. A listing in the public
  [shadcn registry directory](https://ui.shadcn.com/registry) has been submitted and is not yet accepted — the URL install works regardless.

### Built for public services

Some of what is here exists because government services need it, and most component libraries do not have it:

| Component                                                                                 | Why                                                                                                                                                                                  |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Accessibility Widget](https://indiacn.in/docs/accessibility-widget)                      | Text size, spacing, contrast and reading aids applied to the whole document and remembered. A citizen who needs larger text should not have to know how to change a browser setting. |
| [Navbar](https://indiacn.in/docs/navbar)                                                  | The two-tier government header, with the Government of India mark and a skip link that actually works                                                                                |
| [Input](https://indiacn.in/docs/input) / [Textarea](https://indiacn.in/docs/textarea)     | The four validation states UX4G defines, so each application does not invent its own                                                                                                 |
| [Stepper](https://indiacn.in/docs/stepper) / [Progress](https://indiacn.in/docs/progress) | Multi-stage applications and status tracking                                                                                                                                         |

---

## 📦 Using IndiaCN in your project

IndiaCN ships as a **shadcn-compatible registry**. Install components into any Tailwind CSS v4 + React project.

> **Requires Tailwind CSS v4.** The theme uses `@theme inline` syntax — it does not work on Tailwind v3.

### 1. Initialize shadcn (if not already done)

```bash
npx shadcn@latest init
```

### 2. Add the IndiaCN theme

Installs all design tokens: 7 semantic colour scales, focus rings, dark mode variables, radius ladder, and keyframe animations.

```bash
npx shadcn@latest add https://indiacn.in/r/theme.json
```

### 3. Add components

Dependencies (theme, typography, and any component a component composes) are pulled in automatically.

```bash
# Foundation
npx shadcn@latest add https://indiacn.in/r/typography.json
npx shadcn@latest add https://indiacn.in/r/button.json

# Any component — deps auto-resolve
npx shadcn@latest add https://indiacn.in/r/input.json
npx shadcn@latest add https://indiacn.in/r/modal.json
npx shadcn@latest add https://indiacn.in/r/accessibility-widget.json
```

### Shorthand with the `@indiacn` namespace

Add the registry to your `components.json` for a cleaner install syntax:

```json
{
  "registries": {
    "@indiacn": "https://indiacn.in/r/{name}.json"
  }
}
```

```bash
npx shadcn@latest add @indiacn/button
npx shadcn@latest add @indiacn/input @indiacn/card @indiacn/dropdown
```

### What ships with `theme`

The `theme` item is a `registry:theme` preset that writes into your `globals.css`:

- **7 semantic colour scales** (50–900): `primary`, `secondary`, `neutral`, `success`, `danger`, `warning`, `info`
- Light and dark variants of every scale, **mirrored** so `light-50` maps to `dark-900`. That is why components need no `dark:` overrides
- A `-foreground` pair for every semantic base, so text on a filled surface is never a guess
- `--shadow-focus-*` ring utilities (4px, 48% tint — the value measured off the Figma symbols)
- `--radius-*` ladder derived from a single `--radius`
- The national tricolour, fixed in both themes because a flag is not a palette
- Keyframes: `accordion-up/down`, `collapsible-up/down`, `spinner-border`, `spinner-grow`, `progress-bar-stripes`, `shimmer`

Each `registry:ui` item carries the exact source file plus its npm `dependencies` and `registryDependencies`. The shadcn CLI walks the graph and pulls everything required — including component-to-component dependencies, so `add modal` brings `close-button` with it.

---

## 🛠 Local development

```bash
git clone https://github.com/krishnaagarwal1506/Indiacn-ui.git
cd Indiacn-ui
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full contribution guide, and the
[open issues](https://github.com/krishnaagarwal1506/Indiacn-ui/issues) — several are labelled
`good first issue`.

---

## ✅ Checks

Four guards exist because each one was added after something slipped through:

```bash
npm run lint            # eslint, including the frontend-rules plugin
npm run check:contrast  # every token pair against WCAG 2.1 AA
npm run check:facts     # figures quoted on the site vs their real sources
npm run theme:check     # globals.css tokens vs the published theme
```

- **`check:contrast`** resolves `var()` chains and computes contrast for filled pairs, text-on-page pairs, alert pairs and body text in both themes. It exists because 8 of 12 base-as-text pairs were failing AA before the `-foreground` tokens were added.
- **`check:facts`** verifies the component count, page count, type-style count and scale count against `registry.json`, `content/docs`, `typography.tsx` and the token ramps. It exists because the homepage advertised 25 components long after there were more.
- **`theme:check`** catches the theme drifting from what consumers install. `npm run theme:sync` fixes it.

### What the audits found

- [`docs/state-audit.md`](./docs/state-audit.md) — every interactive component checked for hover, pressed, focus and disabled, with the deliberate deviations recorded
- [`docs/lint-findings.md`](./docs/lint-findings.md) — the real defects linting surfaced, so no rule gets disabled without knowing what it caught

---

## 🛠 Maintainer notes — building the registry

`registry.json` at the repo root declares what ships. `registry/index.ts` wires components and examples into the docs site. After editing either, regenerate the per-item JSON:

```bash
npm run registry:build
```

This runs `npx shadcn build`, which inlines source from each `files[].path`, validates against the shadcn schema, and writes `public/r/*.json`. The output is committed and served as static assets with permissive CORS (see `next.config.mjs`).

Two things to know:

- **Run it after formatting, not before.** `public/r` inlines source verbatim, so building before lint-staged reformats a file publishes the unformatted copy.
- **`registry/index.ts` is a 92KB hand-maintained file**, and it has silently eaten a change once and caused serial conflicts across four PRs. Generating it is [#57](https://github.com/krishnaagarwal1506/Indiacn-ui/issues/57). Until then, extract example `code` strings from the demo sources rather than retyping them.

---

## 📜 License

MIT — free for commercial and government use.

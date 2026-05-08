# 🇮🇳 IndiaCN UI — Community Design System for India

IndiaCN is an **open-source design system** built for India's digital services — especially government and public-service applications. Based on the [UX4G 2.0 design system](https://www.figma.com/community/file/1471833723727926454), it ships as a **shadcn-compatible registry** with 25+ production-ready components.

- **Accessibility-first** — WCAG 2.1 AA compliant, built on Radix UI primitives
- **Copy-pasteable** — source lands directly in your repo; no runtime dependency, no version lock
- **Registered in the shadcn registry** — install with a single `npx shadcn add` command
- **Dark mode** — all components support light and dark themes out of the box

> This project is **not affiliated with the Government of India** — it is a community initiative inspired by UX4G design principles.

---

## 📌 Status

🟢 **Active development**

- 25+ components (Button, Card, Modal, Tabs, Toast, and more)
- UX4G 2.0 theme with 8 semantic color scales, dark mode, and focus rings
- Registered in the [shadcn registry](https://ui.shadcn.com/registry)
- Full documentation at [indiacn.in/docs](https://indiacn.in/docs)

---

## 📦 Using IndiaCN in your project

IndiaCN ships as a **shadcn-compatible registry**. Install components into any Tailwind CSS v4 + React project.

> **Requires Tailwind CSS v4.** The theme uses `@theme inline` syntax — it does not work on Tailwind v3.

### 1. Initialize shadcn (if not already done)

```bash
npx shadcn@latest init
```

### 2. Add the IndiaCN theme

Installs all design tokens: 8 semantic color scales, focus rings, dark mode variables, radius ladder, and keyframe animations.

```bash
npx shadcn@latest add https://indiacn.in/r/theme.json
```

### 3. Add components

Dependencies (theme, typography, etc.) are pulled in automatically.

```bash
# Foundation
npx shadcn@latest add https://indiacn.in/r/typography.json
npx shadcn@latest add https://indiacn.in/r/button.json

# Any component — deps auto-resolve
npx shadcn@latest add https://indiacn.in/r/badge.json
npx shadcn@latest add https://indiacn.in/r/card.json
npx shadcn@latest add https://indiacn.in/r/modal.json
```

### Shorthand with `@indiacn` namespace

Add the registry to your `components.json` for a cleaner install syntax:

```json
{
  "registries": {
    "@indiacn": "https://indiacn.in/r/{name}.json"
  }
}
```

Then install with the `@indiacn/` prefix:

```bash
npx shadcn@latest add @indiacn/button
npx shadcn@latest add @indiacn/badge @indiacn/card @indiacn/dropdown
```

### What ships with `theme`

The `theme` item is a `registry:theme` preset that writes into your `globals.css`:

- **8 semantic color scales** (50–900): `primary`, `secondary`, `neutral`, `success`, `danger`, `warning`, `info`
- Light and dark variants of every scale
- `--shadow-focus-*` ring utilities (4 px primary-tinted focus halo)
- `--radius-*` ladder derived from a single `--radius` variable
- Keyframes: `accordion-up/down`, `collapsible-up/down`, `progress-bar-stripes`, `spinner-grow`, `shimmer`
- Global `:focus-visible` outline using `var(--primary)`

Each `registry:ui` item carries the exact source file plus its npm `dependencies` and `registryDependencies`. The shadcn CLI walks the dependency graph and pulls everything required.

---

## 🛠 Local development

```bash
git clone https://github.com/krishnaagarwal1506/Indiacn-ui.git
cd Indiacn-ui
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full contribution guide.

---

## 🛠 Maintainer notes — building the registry

The single source of truth is `registry.json` at the repo root. After editing it, regenerate the per-item JSON files in `public/r/`:

```bash
npm run registry:build
```

This runs `npx shadcn build`, which inlines source from each `files[].path`, validates against the shadcn schema, and writes `public/r/*.json`. The output is committed and served as static assets by Next.js with permissive CORS (see `next.config.mjs`).

---

## 📜 License

MIT — Free for commercial and government use.

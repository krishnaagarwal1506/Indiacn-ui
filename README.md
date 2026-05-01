# 🇮🇳 IndiaCN UI — Community Design System for India (Early Stage)

IndiaCN is an upcoming **open-source design system** created to help build better digital experiences for India — especially government and public-service applications. Based on [UX4G 2.0 theme](https://www.figma.com/community/file/1471833723727926454)

The project is currently in a **very early stage**, and we are starting with a strong foundation of:

- **Accessibility-first**
- **India-focused UX patterns**
- **Consistency across services**
- **Copy-pasteable React + Tailwind components** (ShadCN-style)

Our mission is to make public digital services **easy to use, trustworthy, and truly built for every Indian**.

> 📌 This project is **not affiliated with the Government of India** — it is a **community initiative inspired by UX4G design principles**.

---

## 🌟 Why IndiaCN?

Millions of citizens interact with digital government services every day.  
But UX quality still varies — inconsistent components, language issues, low accessibility…

IndiaCN aims to address this by providing:

- Standardized **UI components**
- Support for **multiple Indian languages**
- **Accessibility-friendly** interactions
- Faster and more consistent development experience

If a team wants to build a citizen-facing experience — IndiaCN should give them the **best building blocks** from day one.

---

## 🚀 Future Vision

| Focus Area       | Aim                                                                       |
| ---------------- | ------------------------------------------------------------------------- |
| 🎨 Theme         | India-compatible design tokens: colors, typography, spacing               |
| 🧩 Components    | Core UI + gov-specific patterns (forms, banners, accessibility bar, etc.) |
| 📚 Documentation | UX usage guidelines, do’s & dont’s for public apps                        |
| 🌍 Localization  | Multilingual + RTL support                                                |
| ♿ Accessibility | WCAG-compliant components for inclusive design                            |
| 🧱 Templates     | Pre-built screens & workflows (eKYC, forms, status tracking, etc.)        |
| 🤝 Community     | A collaborative ecosystem built for India                                 |

The long-term goal is to become a **community standard** for India’s public digital interfaces.

---

## 🙌 How You Can Contribute

We welcome everyone interested in improving digital India:

- React + Tailwind developers
- UI/UX designers
- Accessibility advocates
- Beginners eager to learn & contribute

Ways to help:

- Suggest UI components & patterns
- Build small UI elements (buttons, badges, etc.)
- Improve accessibility and localization
- Draft documentation & UX guidelines
- Share design ideas & resources

No experience requirement — **all contributions matter** 💛  
We will add **good first issues** for newcomers.

---

## 📌 Current Status

🟡 **In planning phase** — setting up:

- Project structure
- Theme tokens
- First core components (Button, Input, Card)

Not production-ready yet — but **growing soon with your help**.

---

## ✉️ Join the Movement

- ⭐ Star the repo to support the vision
- 📝 Open issues with ideas and suggestions
- 🤝 Join early as a contributor — be part of shaping something meaningful

Let’s build better public digital services for India — together 🇮🇳

---

## 📜 License

MIT — Free for commercial and government use.

---

> 🌠 If you believe in accessible digital services for India, please give this project a star and help spread the word!

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📦 Using IndiaCN in your own project

IndiaCN ships as a **shadcn-compatible registry**. Install components into any
Tailwind v4 + Next.js project with `npx shadcn add`.

> **Requires Tailwind CSS v4.** The theme preset uses `@theme inline` and
> `rgb(from var(--color) r g b / α)` — neither works on Tailwind v3.

### One-time setup

If you don't already have shadcn configured:

```bash
npx shadcn@latest init
```

Then add the IndiaCN theme (it carries every brand token, focus shadow,
radius, and animation):

```bash
npx shadcn@latest add https://indiacn.in/r/theme.json
```

### Adding components

```bash
# Foundation
npx shadcn@latest add https://indiacn.in/r/typography.json
npx shadcn@latest add https://indiacn.in/r/button.json

# Anything else — dependencies (theme, typography, button, …) auto-resolve
npx shadcn@latest add https://indiacn.in/r/badge.json
npx shadcn@latest add https://indiacn.in/r/card.json
npx shadcn@latest add https://indiacn.in/r/dropdown.json
```

### Namespaced installs

Add the registry to your project's `components.json`:

```json
{
  "registries": {
    "@indiacn": "https://indiacn.in/r/{name}.json"
  }
}
```

Then:

```bash
npx shadcn@latest add @indiacn/button
npx shadcn@latest add @indiacn/badge @indiacn/card @indiacn/dropdown
```

### What ships in `theme`

The `theme` item is a `registry:theme` preset and lands in your `globals.css`:

- **8 semantic color scales** (50–900): `primary`, `secondary`, `neutral`,
  `success`, `danger`, `warning`, `info`, plus alert tokens
- **Light + dark variants** of every scale
- `--shadow-focus-{primary,secondary,success,danger,warning,neutral}` ring
  utilities (4 px primary-tinted focus halo)
- `--radius-{none,xxs,xs,sm,md,lg,xl,2xl,3xl,4xl,5xl,full}` ladder derived
  from a single `--radius`
- Keyframes: `accordion-{up,down}`, `collapsible-{up,down}`,
  `progress-bar-stripes`, `spinner-grow`, `shimmer`
- Global `:focus-visible` outline using `var(--primary)`

### What ships in each component

Each `registry:ui` item carries the **exact source file** from this repo,
plus its npm `dependencies` and registry `registryDependencies`. The shadcn
CLI walks the dependency graph and pulls everything required (e.g. `card`
pulls `theme` + `typography` automatically).

---

## 🛠 Maintainer notes — building the registry

The single source of truth is `registry.json` at the repo root. To
regenerate the per-item JSON files in `public/r/` after editing it:

```bash
npm run registry:build
```

This runs `npx shadcn build`, which inlines source from each `files[].path`,
validates against the shadcn schema, and writes `public/r/*.json`. The
output is committed and served as static assets by Next.js with permissive
CORS (see `next.config.mjs`).

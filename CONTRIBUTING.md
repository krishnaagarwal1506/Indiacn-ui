# Contributing to IndiaCN UI

Thank you for your interest in contributing to IndiaCN — a community design system built to improve digital experiences for India. Every contribution matters, regardless of size or experience level.

This document outlines the guidelines and process for contributing to this project.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [How to Contribute](#how-to-contribute)
  - [Reporting Issues](#reporting-issues)
  - [Suggesting Features](#suggesting-features)
  - [Contributing Code](#contributing-code)
  - [Contributing Documentation](#contributing-documentation)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
  - [Commit Messages](#commit-messages)
  - [Code Style](#code-style)
  - [TypeScript](#typescript)
- [Component Guidelines](#component-guidelines)
- [Pull Request Process](#pull-request-process)
- [Good First Issues](#good-first-issues)

---

## Code of Conduct

By participating in this project, you agree to uphold a respectful and inclusive environment. We are committed to making IndiaCN a welcoming space for everyone — regardless of experience, background, or identity.

Please be kind, constructive, and considerate in all interactions.

---

## Getting Started

1. **Fork** the repository on GitHub.
2. **Clone** your fork locally:

   ```bash
   git clone https://github.com/<your-username>/indiacn.git
   cd indiacn
   ```

3. **Install dependencies** (Node.js ≥ 20.x required):

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
indiacn/
├── app/                  # Next.js app directory (pages, layout, routes)
├── components/
│   ├── docs/             # Documentation-specific components
│   ├── examples/         # Demo/example components for docs
│   ├── home/             # Landing page section components
│   └── ui/               # Core UI components (the design system)
├── content/docs/         # MDX documentation files
├── registry/             # Component registry (shadcn-compatible)
├── constants/            # Shared constants
├── lib/                  # Utility libraries
├── public/               # Static assets
└── utils/                # Shared utilities and MDX helpers
```

---

## How to Contribute

### Reporting Issues

Before opening an issue, please search existing issues to avoid duplicates.

When reporting a bug, include:

- A clear and descriptive title
- Steps to reproduce the issue
- Expected vs. actual behavior
- Screenshots or a minimal reproduction (if applicable)
- Browser, OS, and Node.js version

### Suggesting Features

Open an issue with the `enhancement` label and include:

- A description of the problem your feature solves
- The proposed solution or component behavior
- Any relevant design references (UX4G, WCAG guidelines, etc.)
- Whether you'd like to implement it yourself

### Contributing Code

1. Find or create an issue for the work you want to do.
2. Leave a comment to let others know you're working on it.
3. Create a branch from `main` using a descriptive name:

   ```bash
   git checkout -b feat/button-component
   git checkout -b fix/tooltip-alignment
   git checkout -b docs/accordion-usage
   ```

4. Make your changes following the [coding standards](#coding-standards).
5. Run lint and format checks before committing:

   ```bash
   npm run lint:format
   ```

6. Commit your changes (see [Commit Messages](#commit-messages)).
7. Push your branch and open a Pull Request.

### Contributing Documentation

Documentation lives in `content/docs/` as MDX files. To add or update docs:

- Follow the existing file structure and frontmatter format.
- Keep language clear, concise, and beginner-friendly.
- Include code examples for any UI components you document.

---

## Development Setup

### Requirements

- **Node.js** ≥ 20.x
- **npm** (bundled with Node.js)

### Available Scripts

| Command                  | Description                      |
| ------------------------ | -------------------------------- |
| `npm run dev`            | Start local development server   |
| `npm run build`          | Build for production             |
| `npm run start`          | Run the production build locally |
| `npm run lint`           | Run ESLint                       |
| `npm run format`         | Run Prettier formatter           |
| `npm run lint:format`    | Run lint and format together     |
| `npm run registry:build` | Build the component registry     |

### Git Hooks

This project uses [Husky](https://typicode.github.io/husky/) to enforce quality checks automatically:

- **pre-commit**: Runs `lint-staged` — lints and formats only staged files.
- **commit-msg**: Validates commit messages against the [Conventional Commits](https://www.conventionalcommits.org/) specification.

These run automatically when you commit. Make sure your environment has the hooks set up by running `npm install` (which triggers `prepare`).

---

## Coding Standards

### Commit Messages

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification, enforced via commitlint.

Format:

```
<type>(<scope>): <short description>
```

Common types:

| Type       | When to use                                  |
| ---------- | -------------------------------------------- |
| `feat`     | A new component or feature                   |
| `fix`      | A bug fix                                    |
| `docs`     | Documentation changes only                   |
| `style`    | Formatting changes (no logic change)         |
| `refactor` | Code restructuring without feature/fix       |
| `chore`    | Tooling, config, or dependency updates       |
| `a11y`     | Accessibility improvements                   |
| `i18n`     | Localization or multilingual support changes |

Examples:

```
feat(ui): add Badge component with variant support
fix(button): correct disabled state hover style
docs(accordion): add usage example and props table
chore: update eslint to v9
```

### Code Style

- **Prettier** handles formatting automatically on commit.
- **ESLint** enforces code quality rules (Next.js + TypeScript + import order).
- Config: `.prettierrc` — single quotes, 2-space indent, 100-char print width, trailing commas.
- Do not disable ESLint or Prettier rules without a clear reason and a comment explaining why.

### TypeScript

- All new files must be written in TypeScript (`.ts` or `.tsx`).
- Avoid using `any` — use proper types or generics.
- Export prop types for all components.

---

## Component Guidelines

IndiaCN components follow a [shadcn/ui](https://ui.shadcn.com/)-compatible registry pattern. When building a new component:

1. **Place the component** in `components/ui/`.
2. **Create a demo** in `components/examples/<component-name>-demo.tsx`.
3. **Write documentation** in `content/docs/components/<component-name>.mdx`.
4. **Register the component** in `registry/index.ts` and `registry.json`.

**Design principles to follow:**

- **Accessibility first** — use semantic HTML and ARIA attributes. Follow [WCAG 2.1 AA](https://www.w3.org/TR/WCAG21/) guidelines.
- **Composable** — prefer primitive-based composition (Radix UI) over opinionated wrappers.
- **India-aware** — consider multilingual text, RTL support, and common Indian UX patterns where relevant.
- **Copy-pasteable** — components should be understandable and usable without importing from a package.
- **Use CVA** (`class-variance-authority`) for defining component variants.
- **Use `cn()`** from `lib/utils` for conditional class merging.

---

## Pull Request Process

1. Ensure your branch is up to date with `main` before opening a PR.
2. Fill out the PR description — include what was changed and why, and reference the related issue (e.g., `Closes #42`).
3. Make sure all checks pass (lint, format, build).
4. Keep PRs focused — one feature or fix per PR makes review faster.
5. Be responsive to review feedback. Discussions are kept constructive and respectful.
6. A maintainer will merge your PR once approved.

---

## Good First Issues

New to open source or this project? Look for issues labeled [`good first issue`](../../issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) — these are specifically chosen to be approachable for first-time contributors.

Not sure where to start? You can always:

- Fix a typo or improve documentation
- Add a missing prop or accessibility attribute to an existing component
- Write an example for a component that doesn't have one yet
- Suggest a new component by opening an issue

---

## Thank You

Every star, issue, PR, and suggestion helps build a better digital India. We're grateful you're here. 🇮🇳

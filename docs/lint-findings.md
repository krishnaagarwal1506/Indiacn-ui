# What linting found

A record of real defects surfaced by `eslint-frontend-rules`, kept so the value of
each rule is traceable and nobody disables one without knowing what it caught.

## Before anything else: the lint script could not pass

`npm run lint` reported **2,889 problems (2,789 errors)**, and the script runs with
`--max-warnings 0`, so it always failed. Nearly all of it came from `.claude/**`,
which was missing from ESLint's `ignores` and holds a full git worktree clone.

Ignoring it took the count to **15** — all genuine, all in `components/home`:
10 components missing JSDoc, 5 relative imports that should use the `@` alias.

Worth noting: `components/ui` had none. The components that ship to consumers were
already clean.

## Unstable Context values — 3 components

Rule: `no-unstable-context-value`

`Pagination`, `Stepper` and the toast provider each passed a fresh object literal
as the Context `value`:

```tsx
<PAGINATION_CONTEXT.Provider value={{ size, variant }}>
```

A new object identity on every render re-renders **every consumer**, whether or
not anything actually changed. All three now use `useMemo`.

This is the class of bug that does not show up in review or in a screenshot — the
UI looks correct, it just does more work than it needs to.

## Static style objects rebuilt on every render — 5 sites

Rule: `no-inline-static-style-object`

Two in `stepper.tsx`, three on the marketing page: fully static objects written
inline on `style`, so a new object was allocated per render. Hoisted to module
scope.

The OG image routes are exempt — Next renders them through satori, which only
accepts inline styles, so hoisting is not possible there.

## Ten dead `eslint-disable` comments

Rule: ESLint's own `--report-unused-disable-directives`

Upgrading the plugin from 1.1.3 to 4.5.0 turns several rules off in its
`recommended` config, including `enforce-typography-components`,
`top-level-const-snake` and `enforce-interface-type-naming`.

Ten files carry `eslint-disable` comments for exactly those rules. Had the new
defaults been accepted, all ten would have become dead comments that silently
stopped protecting anything. Re-enabling the rules explicitly made them
meaningful again, and no file needed editing.

## A bug in the plugin itself

Rule: `enforce-event-handler-naming` (added in 4.x)

```
Error: Fix objects must not be overlapped in a report.
Occurred while linting components/examples/chip-demo.tsx
```

This is a crash, not a lint failure — ESLint exits with code 2 and reports
nothing at all for the run.

It triggers when a handler is both declared and referenced:

```tsx
const toggle = (label: string) => { /* ... */ };
// ...
<Chip onClick={toggle.bind(null, label)}>
```

The rule wants `handleToggle` and emits a fix for the declaration and the call
site, whose ranges overlap. Isolated by disabling candidate rules one at a time.
The rule is off, with the reason recorded in `eslint.config.mjs`.

## Rules deliberately off, and why

Recorded here so the decisions are not re-litigated from scratch:

| Rule                                          | Why off                                                                                                                                                                          |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enforce-event-handler-naming`                | Crashes ESLint, see above                                                                                                                                                        |
| `enforce-boolean-prop-naming`                 | Wants `isChecked`, `isDisabled`, `isSelected`. Those names come from HTML, ARIA and Radix; `asChild` is shadcn's. For a component library the prop names are the public contract |
| `filename-matches-component-name`             | Assumes one component per file named after it. Next requires `layout.tsx` to export `RootLayout`, and `card.tsx` exports seven names by design                                   |
| `require-jsdoc-on-component` (docs site only) | Flagged 153 components, 128 of them one-line preview demos. Stays on for `components/ui`, `lib` and `utils`                                                                      |

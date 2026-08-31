# Design token architecture

This project does not use a free-form color system. The theme is intentionally structured so every component can inherit the same semantic colors across both light and dark modes without hand-tuning per component.

The rules below are the source of truth for contributors. If they are ignored, a component can look fine in one theme and fail in another even when the code is otherwise correct.

## 1) Every semantic color has a base + foreground pair

Each theme color is defined as a pair:

```css
:root {
  --primary: #613af5;
  --primary-foreground: var(--neutral-0);
}

.dark {
  --primary: #ac7aff;
  --primary-foreground: var(--neutral-0);
}
```

Use the foreground token for text on a colored surface:

```tsx
<Button className='bg-primary text-primary-foreground'>Continue</Button>
```

Do not hard-code `text-neutral-0` on every colored background. The base color changes by theme, and the foreground token is the contract that keeps contrast safe.

---

## 2) Ramps are mirrored between themes

The semantic ramp is not a random 50–900 ladder. It is intentionally mirrored so a light-mode step and a dark-mode step stay visually equivalent in contrast terms.

```css
:root {
  --primary-50: #faefff;
  --primary-100: #ecd0ff;
  --primary-200: #dab2ff;
  --primary-300: #c495ff;
  --primary-400: #ac7aff;
  --primary-500: #9161ff;
  --primary-600: #774bff;
  --primary-700: #5f39e9;
  --primary-800: #4a2bc2;
  --primary-900: #392095;
}

.dark {
  --primary-50: #392095;
  --primary-100: #4a2bc2;
  --primary-200: #5f39e9;
  --primary-300: #774bff;
  --primary-400: #9161ff;
  --primary-500: #ac7aff;
  --primary-600: #c495ff;
  --primary-700: #dab2ff;
  --primary-800: #ecd0ff;
  --primary-900: #faefff;
}
```

The important idea is that light-mode `--primary-100` and dark-mode `--primary-800` intentionally map to the same visual weight. This is why components built from the ramp work with no `dark:` override once the pair is correctly mirrored.

If a component uses a raw hex instead of a token, it breaks this relationship and loses the contrast guarantees the system relies on.

---

## 3) Base colors are theme-specific and AA-constrained

The base tokens are not simply duplicated from a single source of truth. Some colors are adjusted by theme so the text-on-page and foreground-on-base combinations pass WCAG AA at 4.5:1 in both modes.

```css
:root {
  --secondary: #746d96;
  --warning: #a46212;
}

.dark {
  --secondary: #938bb6;
  --warning: #d08d47;
}
```

This is a deliberate accessibility guardrail. The published tones for some semantics were too weak against black or white, so their ramps were stepped down to maintain readable contrast in both light and dark modes.

The consequence: do not treat the token as a generic brand color. It is an accessibility-aware semantic token.

---

## 4) `--color-*` entries in `@theme inline` generate Tailwind utilities

The values in `:root` and `.dark` are only half of the system. Tailwind utilities are generated from the `@theme inline` block:

```css
@theme inline {
  --color-primary: var(--primary);
  --color-primary-50: var(--primary-50);
  --color-primary-100: var(--primary-100);
  --color-primary-foreground: var(--primary-foreground);
}
```

This is what makes classes like `bg-primary`, `text-primary-200`, and `text-primary-foreground` work.

If a token exists in `:root` but does not also have a matching `--color-*` entry in `@theme inline`, the utility will not exist even though the CSS variable itself exists. This is one of the easiest ways to create a token that is technically present but invisible to the component layer.

---

## 5) Keyframes live outside `@theme` and must be synced separately

Animations are split across two places:

```css
@keyframes accordion-down {
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
}

@theme inline {
  --animate-accordion-down: accordion-down 0.2s ease-out;
}
```

The `@keyframes` block defines the motion. The `--animate-*` token exposes it to utility use. If only one side is present, the animation silently does nothing in the shipped registry.

This is why the project has a theme sync step:

```bash
npm run theme:check
```

The script compares `app/globals.css` to the registry metadata so the published theme stays aligned with the source of truth.

---

## 6) Contrast and registry guards are part of the design process

Two commands exist to protect contributors from shipping broken tokens:

```bash
npm run check:contrast
npm run theme:check
```

- `npm run check:contrast` fails if any color pair drops below AA in either light or dark mode.
- `npm run theme:check` fails if `registry.json` drifts from `globals.css`.

These are not optional cleanup tasks. They are part of the architecture and should be treated as the same quality gate as a component test.

---

## Adding a new color token checklist

Before adding a new semantic color or adjusting an existing one, check this list:

1. Add the base token in `:root` and any theme-specific override in `.dark`.
2. Add the matching foreground token, and use the foreground token instead of `text-neutral-0` on colored surfaces.
3. Fill the full ramp (`50` through `900`) and mirror the ramp values correctly between themes.
4. Add the matching `--color-*` entries in `@theme inline` so utility classes are generated.
5. If this token affects motion or component animation, add the matching `@keyframes` and `--animate-*` token.
6. Run:

```bash
npm run check:contrast
npm run theme:check
```

If the checks fail, the component is not ready to merge.

---

## Practical rule of thumb

Treat every semantic color as a system contract, not an isolated CSS declaration. The token must be:

- accessible in both themes,
- mirrored across the ramp,
- exported to Tailwind utilities,
- and guarded by the project’s validation scripts.

When the token architecture stays consistent, components inherit the right contrast and theme behavior automatically.

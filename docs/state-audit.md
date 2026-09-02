# Interaction state audit

Every interactive component checked for the four interaction states — hover,
pressed, focus-visible, disabled — against the UX4G Figma kit where a page for
it exists, and against WCAG where one does not.

## How the audit was run

A grep for Tailwind state variants (`hover:`, `active:`, …) across
`components/ui`. That first pass produced **three false negatives**, which is
worth recording because the naive version of this check is misleading:

| Component | Reported    | Actually                                                                            |
| --------- | ----------- | ----------------------------------------------------------------------------------- |
| `chip`    | no disabled | `disabled && 'pointer-events-none opacity-50'` — a conditional class, not a variant |
| `input`   | no disabled | `has-[input:disabled]:opacity-50` — the substring is `disabled]`, not `disabled:`   |
| `search`  | no disabled | same                                                                                |

The corrected detector also matches conditional classes, `aria-disabled`,
`data-disabled`, `peer-`/`group-disabled`, and `disabled]`. Container and
overlay components — Modal, Offcanvas, Popover, Tooltip, Toast, Alert,
ButtonGroup, Collapse — are excluded: their interaction states belong to the
controls inside them, and every one of those is now a component with its own
states.

## Fixed

### Switch — hover and pressed were both absent

The clearest gap, and the one that prompted this audit. Figma defines a
**state layer**: a circle centred on the handle, clipped by the track.

|         | track | layer | handle off | on hover | on press | checked |
| ------- | ----- | ----- | ---------- | -------- | -------- | ------- |
| default | 52×32 | 34px  | 16         | 16       | **20**   | 24      |
| `sm`    | 39×24 | 30px  | 16         | 16       | **20**   | 18      |

The 20% opacity is measured, not guessed: the layer reads `#9e9e9e` over the
`#c6c6c6` track and `#4e2ec4` over the `#613af5` one, and both are exactly
black at 20%.

The handle also **grows on press**, to 20px at both sizes — which at `sm`
makes the pressed handle larger than the checked one. Odd, but that is what
the symbols measure.

One deliberate deviation: Figma's layer is pure black at 20%; we ship
`neutral/20`, which measures `#5435cb` against Figma's `#4e2ec4` — a
difference of about 6/255. Pure black is not a token and does not invert: in
dark mode `--neutral` is `#fff`, so `neutral/20` becomes a light overlay on a
dark control, where black at 20% would be almost invisible.

The layer is its own element rather than a pseudo-element on the handle,
because it sits _behind_ the handle — the handle stays pure white on hover.

### Pagination — no pressed state

Figma's `.page` symbol set includes `state=clicked`. Measured: fill `#c6c6c6`
(`neutral-200`) with the hover border retained. Hover was already correct at
`#b0b0b0` (`neutral-300`).

### Breadcrumb — no visible focus at all

`BreadcrumbLink` had `hover:` but no focus style, so keyboard users had
nothing. There are no `State=` variants on the Figma Breadcrumbs page, so this
is not a fidelity gap — it is WCAG 2.4.7, which applies regardless.

### ListGroupAction — no visible focus

Same class of bug on an interactive anchor.

### Accordion — no hover, pressed or disabled

The trigger is a button with focus styling only. There is **no Accordion page
in the reachable Figma kit**, so rather than invent values this follows the
library's own convention for a text-on-surface control: `primary/8` on hover,
`primary/16` on press — the same values Button, CloseButton and Chip use, and
the same ones measured off the Close button symbols.

Flagged rather than asserted: if an Accordion page turns up, these want
re-checking.

## Checked and correct

`button`, `checkbox`, `radio-group`, `chip`, `close-button`, `tabs`,
`dropdown`, `input`, `search`, `textarea`, `navbar`, `carousel`,
`accessibility-widget` — all four states handled.

## Not gaps

- **Text fields have no pressed state.** Figma's Input page defines Empty,
  Hover, Focused, Filled, Error, Success and Warning. There is no pressed
  variant, and a pressed text field is not a thing.
- **Dropdown items have no pressed state.** The Figma variants are `Hovered`,
  `Active` and `Disabled`; `Active` is selection, not a press.
- **Containers and overlays.** See above.

## Still unverifiable

These have no reachable page in the Figma kit, so their states rest on the
library's conventions rather than on measurement: Accordion, Tabs, List Group,
Modal, Offcanvas, Popover, Tooltip, Collapse, Stepper, Separator, Skeleton,
Button Group.

Closing that gap needs the node URLs — see the note in
[#59](https://github.com/krishnaagarwal1506/Indiacn-ui/issues/59) about the
MCP listing only opened pages.

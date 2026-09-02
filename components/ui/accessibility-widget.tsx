'use client';

import {
  Accessibility,
  ALargeSmall,
  Baseline,
  Ban,
  Contrast,
  Link2,
  RotateCcw,
  Space,
  Type,
  X,
} from 'lucide-react';
import {
  ComponentProps,
  ReactNode,
  useCallback,
  useEffect,
  useState,
  useSyncExternalStore,
} from 'react';

import { Body2, Label1, Label2 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

/*
 * UX4G accessibility widget: a floating button opening a panel of reading
 * adjustments. Every setting is applied to the document root and remembered,
 * so it survives navigation.
 *
 * UX4G also lists a "Screen Reader" row. That is deliberately not shipped —
 * a browser-based text-to-speech toy is not a screen reader, and pretending
 * otherwise is worse for the people it claims to serve. Pass `extraRows` if
 * you have a real integration to offer.
 */
const STORAGE_KEY = 'indiacn-accessibility';

const STEP_MAX = 3;

interface IAccessibilitySettings {
  textStep: number;
  lineStep: number;
  spacingStep: number;
  highlightLinks: boolean;
  dyslexiaFont: boolean;
  hideImages: boolean;
  invertColors: boolean;
  readingMask: boolean;
}

const DEFAULT_SETTINGS: IAccessibilitySettings = {
  textStep: 0,
  lineStep: 0,
  spacingStep: 0,
  highlightLinks: false,
  dyslexiaFont: false,
  hideImages: false,
  invertColors: false,
  readingMask: false,
};

/*
 * Settings live in a module store read through useSyncExternalStore. Loading
 * them in an effect would set state during render-commit, and it would also
 * let two widgets on one page disagree.
 */
let currentSettings: IAccessibilitySettings = DEFAULT_SETTINGS;
const LISTENERS = new Set<() => void>();

if (typeof window !== 'undefined') {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) currentSettings = { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
  } catch {
    // Storage blocked or nothing saved; defaults stand.
  }
}

/** Subscribes a widget instance to setting changes. */
function subscribeSettings(listener: () => void) {
  LISTENERS.add(listener);
  return () => LISTENERS.delete(listener);
}

/** Current settings, for useSyncExternalStore. */
const getSettings = () => currentSettings;

/** Server render has no storage, so it always sees the defaults. */
const getServerSettings = () => DEFAULT_SETTINGS;

/** Replaces the settings and notifies every mounted widget. */
function writeSettings(next: IAccessibilitySettings) {
  currentSettings = next;
  LISTENERS.forEach(listener => listener());
}

/** Injected once. Registry consumers get the behaviour without extra CSS. */
const BEHAVIOUR_CSS = `
[data-a11y-highlight-links='true'] a {
  outline: 2px solid currentColor;
  outline-offset: 2px;
  text-decoration: underline !important;
}
[data-a11y-dyslexia='true'] * {
  font-family: 'Atkinson Hyperlegible', 'Comic Sans MS', Verdana, sans-serif !important;
  letter-spacing: 0.05em;
}
[data-a11y-hide-images='true'] :is(img, picture, video, svg:not([data-a11y-keep])) {
  visibility: hidden !important;
}
[data-a11y-invert='true'] {
  filter: invert(1) hue-rotate(180deg);
}
[data-a11y-invert='true'] :is(img, picture, video) {
  filter: invert(1) hue-rotate(180deg);
}
.indiacn-a11y-mask {
  position: fixed;
  inset-inline: 0;
  height: 8rem;
  pointer-events: none;
  z-index: 2147483000;
  box-shadow: 0 0 0 100vh rgb(0 0 0 / 0.6);
}
@media (prefers-reduced-motion: reduce) {
  .indiacn-a11y-mask { transition: none; }
}
`;

/** Adds the behaviour stylesheet to the document a single time. */
function useBehaviourStyles() {
  useEffect(() => {
    const id = 'indiacn-a11y-styles';
    if (document.getElementById(id)) return;
    const style = document.createElement('style');
    style.id = id;
    style.textContent = BEHAVIOUR_CSS;
    document.head.appendChild(style);
  }, []);
}

/** Applies settings to the document root and remembers them. */
function useApplySettings(settings: IAccessibilitySettings) {
  useEffect(() => {
    const root = document.documentElement;
    root.style.fontSize = settings.textStep ? `${100 + settings.textStep * 12.5}%` : '';
    root.style.lineHeight = settings.lineStep ? String(1.5 + settings.lineStep * 0.25) : '';
    root.style.letterSpacing = settings.spacingStep ? `${settings.spacingStep * 0.05}em` : '';
    root.dataset.a11yHighlightLinks = String(settings.highlightLinks);
    root.dataset.a11yDyslexia = String(settings.dyslexiaFont);
    root.dataset.a11yHideImages = String(settings.hideImages);
    root.dataset.a11yInvert = String(settings.invertColors);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // Private browsing and blocked storage are fine; the settings just do not persist.
    }
  }, [settings]);
}

/** Horizontal reading band that follows the pointer. */
function ReadingMask({ active }: { active: boolean }) {
  const [top, setTop] = useState(0);

  useEffect(() => {
    if (!active) return;
    const move = (e: PointerEvent) => setTop(e.clientY - 64);
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, [active]);

  if (!active) return null;
  return <div className='indiacn-a11y-mask' style={{ top }} aria-hidden />;
}

interface IRowProps {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}

/** One panel row: icon, label, control. */
function AccessibilityRow({ icon, label, children }: IRowProps) {
  return (
    <div className='flex items-center gap-3 border-b border-neutral-100 px-4 py-3 last:border-b-0'>
      <div className='text-neutral flex size-8 shrink-0 items-center justify-center rounded-md bg-neutral-50 [&>svg]:size-4'>
        {icon}
      </div>
      <Label1 className='text-neutral flex-1'>{label}</Label1>
      {children}
    </div>
  );
}

interface IStepperButtonProps {
  label: string;
  step: number;
  onStep: () => void;
}

/** Cycles a stepped setting and reports where it is. */
function StepControl({ label, step, onStep }: IStepperButtonProps) {
  return (
    <button
      type='button'
      onClick={onStep}
      aria-label={`${label}. Level ${step} of ${STEP_MAX}`}
      className='bg-primary-100 text-primary-800 focus-visible:shadow-focus-primary flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-md text-sm font-semibold transition-opacity hover:opacity-80 focus-visible:outline-none'
    >
      {step === 0 ? '+' : step}
    </button>
  );
}

interface IToggleControlProps {
  label: string;
  on: boolean;
  onToggle: () => void;
}

/** Small switch used by the boolean rows. */
function ToggleControl({ label, on, onToggle }: IToggleControlProps) {
  return (
    <button
      type='button'
      role='switch'
      aria-checked={on}
      aria-label={label}
      onClick={onToggle}
      className={cn(
        'focus-visible:shadow-focus-primary relative h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors focus-visible:outline-none',
        on ? 'bg-primary' : 'bg-neutral-200',
      )}
    >
      <div
        className={cn(
          'bg-neutral-0 absolute top-1 size-4 rounded-full transition-[left]',
          on ? 'left-6' : 'left-1',
        )}
      />
    </button>
  );
}

interface IAccessibilityWidgetProps extends Omit<ComponentProps<'div'>, 'children'> {
  /** Extra rows appended before the footer, for integrations we cannot ship. */
  extraRows?: ReactNode;
  title?: string;
}

/**
 * Floating accessibility panel with reading adjustments.
 *
 * Settings apply to the whole document and persist across pages.
 */
function AccessibilityWidget({
  className,
  extraRows,
  title = 'Accessibility options',
  ...props
}: IAccessibilityWidgetProps) {
  const [open, setOpen] = useState(false);
  const settings = useSyncExternalStore(subscribeSettings, getSettings, getServerSettings);

  useBehaviourStyles();
  useApplySettings(settings);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const toggleOpen = useCallback(() => setOpen(o => !o), []);
  const close = useCallback(() => setOpen(false), []);
  const reset = useCallback(() => writeSettings(DEFAULT_SETTINGS), []);

  const bump = useCallback(
    (key: 'textStep' | 'lineStep' | 'spacingStep') =>
      writeSettings({ ...currentSettings, [key]: (currentSettings[key] + 1) % (STEP_MAX + 1) }),
    [],
  );
  const flip = useCallback(
    (key: keyof IAccessibilitySettings) =>
      writeSettings({ ...currentSettings, [key]: !currentSettings[key] }),
    [],
  );

  const bumpText = useCallback(() => bump('textStep'), [bump]);
  const bumpLine = useCallback(() => bump('lineStep'), [bump]);
  const bumpSpacing = useCallback(() => bump('spacingStep'), [bump]);
  const flipLinks = useCallback(() => flip('highlightLinks'), [flip]);
  const flipDyslexia = useCallback(() => flip('dyslexiaFont'), [flip]);
  const flipImages = useCallback(() => flip('hideImages'), [flip]);
  const flipInvert = useCallback(() => flip('invertColors'), [flip]);
  const flipMask = useCallback(() => flip('readingMask'), [flip]);

  return (
    <div className={cn('fixed right-5 bottom-5 z-50', className)} {...props}>
      <ReadingMask active={settings.readingMask} />

      {open && (
        <div
          role='dialog'
          aria-label={title}
          className='bg-neutral-0 absolute right-0 bottom-16 flex max-h-[70vh] w-[340px] flex-col overflow-hidden rounded-lg border border-neutral-100 shadow-lg'
        >
          <div className='bg-primary text-primary-foreground flex items-center justify-between px-4 py-3'>
            <Label1 className='font-semibold'>{title}</Label1>
            <button
              type='button'
              onClick={close}
              aria-label='Close accessibility options'
              className='focus-visible:shadow-focus-neutral cursor-pointer rounded-sm opacity-80 transition-opacity hover:opacity-100 focus-visible:outline-none'
            >
              <X className='size-5' aria-hidden />
            </button>
          </div>

          <div className='min-h-0 flex-1 overflow-y-auto'>
            <AccessibilityRow icon={<ALargeSmall />} label='Increase text size'>
              <StepControl label='Increase text size' step={settings.textStep} onStep={bumpText} />
            </AccessibilityRow>
            <AccessibilityRow icon={<Baseline />} label='Increase line height'>
              <StepControl
                label='Increase line height'
                step={settings.lineStep}
                onStep={bumpLine}
              />
            </AccessibilityRow>
            <AccessibilityRow icon={<Space />} label='Increase text spacing'>
              <StepControl
                label='Increase text spacing'
                step={settings.spacingStep}
                onStep={bumpSpacing}
              />
            </AccessibilityRow>
            <AccessibilityRow icon={<Link2 />} label='Highlight links'>
              <ToggleControl
                label='Highlight links'
                on={settings.highlightLinks}
                onToggle={flipLinks}
              />
            </AccessibilityRow>
            <AccessibilityRow icon={<Type />} label='Dyslexia friendly'>
              <ToggleControl
                label='Dyslexia friendly'
                on={settings.dyslexiaFont}
                onToggle={flipDyslexia}
              />
            </AccessibilityRow>
            <AccessibilityRow icon={<Ban />} label='Hide images'>
              <ToggleControl label='Hide images' on={settings.hideImages} onToggle={flipImages} />
            </AccessibilityRow>
            <AccessibilityRow icon={<Contrast />} label='Invert colours'>
              <ToggleControl
                label='Invert colours'
                on={settings.invertColors}
                onToggle={flipInvert}
              />
            </AccessibilityRow>
            <AccessibilityRow icon={<Accessibility />} label='Reading mask'>
              <ToggleControl label='Reading mask' on={settings.readingMask} onToggle={flipMask} />
            </AccessibilityRow>
            {extraRows}
          </div>

          <div className='flex items-center justify-between border-t border-neutral-100 px-4 py-3'>
            <button
              type='button'
              onClick={reset}
              aria-label='Reset accessibility settings'
              className='bg-primary-100 text-primary-800 focus-visible:shadow-focus-primary inline-flex cursor-pointer items-center gap-1.5 rounded-md px-3 py-1.5 transition-opacity hover:opacity-80 focus-visible:outline-none'
            >
              <RotateCcw className='size-3.5' aria-hidden />
              <Label2>Reset</Label2>
            </button>
            <Body2 className='text-neutral-500'>Settings are remembered</Body2>
          </div>
        </div>
      )}

      <button
        type='button'
        onClick={toggleOpen}
        aria-expanded={open}
        aria-label={title}
        className='bg-primary text-primary-foreground focus-visible:shadow-focus-primary flex size-14 cursor-pointer items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105 focus-visible:outline-none'
      >
        <Accessibility className='size-7' aria-hidden />
      </button>
    </div>
  );
}

export type { IAccessibilitySettings };

export { AccessibilityWidget };

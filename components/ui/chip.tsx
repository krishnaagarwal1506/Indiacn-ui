'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { Check, X } from 'lucide-react';
import { ComponentProps, ReactNode } from 'react';

import { Body2 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

/**
 * Creates an onClick handler for a chip's dismiss button that stops event
 * propagation (so the parent chip click doesn't fire) and no-ops when disabled.
 */
function createDismissHandler(onDismiss: () => void, disabled?: boolean) {
  return (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!disabled) onDismiss();
  };
}

/*
 * UX4G chip: 32px tall, radius 8px, padding 6px 12px, body-2 type. Selected is
 * a tonal fill with a leading check, not a solid fill.
 */
const CHIP_VARIANTS = cva(
  'inline-flex cursor-pointer items-center gap-[5px] whitespace-nowrap transition-[color,background-color,border-color,box-shadow] duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-0',
  {
    variants: {
      theme: {
        primary:
          '[--chip-bg:var(--color-primary)] [--chip-fg:var(--color-primary-foreground)] [--chip-bg-tonal:var(--color-primary-100)] [--chip-border-color:var(--color-primary)] [--chip-text-color:var(--color-primary)] focus-visible:shadow-focus-primary',
        secondary:
          '[--chip-bg:var(--color-secondary)] [--chip-fg:var(--color-secondary-foreground)] [--chip-bg-tonal:var(--color-secondary-100)] [--chip-border-color:var(--color-secondary)] [--chip-text-color:var(--color-secondary)] focus-visible:shadow-focus-secondary',
        success:
          '[--chip-bg:var(--color-success)] [--chip-fg:var(--color-success-foreground)] [--chip-bg-tonal:var(--color-success-100)] [--chip-border-color:var(--color-success)] [--chip-text-color:var(--color-success)] focus-visible:shadow-focus-success',
        danger:
          '[--chip-bg:var(--color-danger)] [--chip-fg:var(--color-danger-foreground)] [--chip-bg-tonal:var(--color-danger-100)] [--chip-border-color:var(--color-danger)] [--chip-text-color:var(--color-danger)] focus-visible:shadow-focus-danger',
        warning:
          '[--chip-bg:var(--color-warning)] [--chip-fg:var(--color-warning-foreground)] [--chip-bg-tonal:var(--color-warning-100)] [--chip-border-color:var(--color-warning)] [--chip-text-color:var(--color-warning)] focus-visible:shadow-focus-warning',
        info: '[--chip-bg:var(--color-info)] [--chip-fg:var(--color-info-foreground)] [--chip-bg-tonal:var(--color-info-100)] [--chip-border-color:var(--color-info)] [--chip-text-color:var(--color-info)]',
        neutral:
          '[--chip-bg:var(--color-neutral)] [--chip-bg-tonal:var(--color-neutral-100)] [--chip-border-color:var(--color-neutral-200)] [--chip-text-color:var(--color-neutral)] focus-visible:shadow-focus-neutral',
      },
      variant: {
        outlined:
          'border border-(--chip-border-color) bg-transparent text-(--chip-text-color) hover:bg-(--chip-bg)/8 active:bg-(--chip-bg)/16',
        filled:
          'border border-transparent bg-(--chip-bg) text-[var(--chip-fg,var(--color-neutral-0))] hover:shadow-xs active:opacity-90',
        tonal:
          'border border-transparent bg-(--chip-bg-tonal) text-(--chip-text-color) hover:shadow-xs active:opacity-90',
      },
      size: {
        sm: 'h-7 px-2 rounded-md',
        md: 'h-8 px-3 rounded-md',
        lg: 'h-10 px-4 rounded-md',
      },
    },
    defaultVariants: {
      theme: 'neutral',
      variant: 'outlined',
      size: 'md',
    },
  },
);

interface IChipProps
  extends Omit<ComponentProps<'div'>, 'color'>,
    VariantProps<typeof CHIP_VARIANTS> {
  icon?: ReactNode;
  avatar?: ReactNode;
  onDismiss?: () => void;
  selected?: boolean;
  disabled?: boolean;
}

/**
 * A compact chip component for displaying tags, filters, or selections.
 * Matches the UX4G 2.0 Chip specification.
 *
 * Supports:
 * - Visual variants: outlined, filled, tonal
 * - Theme colors: primary, secondary, success, danger, warning, info, neutral
 * - Sizes: sm, md, lg
 * - Avatar / leading icon slot
 * - Dismissible via onDismiss
 * - Selected state (toggled via selected prop)
 * - Disabled state
 */
function Chip({
  className,
  variant,
  theme,
  size,
  icon,
  avatar,
  onDismiss,
  selected,
  disabled,
  children,
  ...props
}: IChipProps) {
  return (
    <div
      role='button'
      tabIndex={disabled ? -1 : 0}
      aria-pressed={selected ? true : undefined}
      data-selected={selected || undefined}
      data-disabled={disabled || undefined}
      className={cn(
        CHIP_VARIANTS({ variant, theme, size, className }),
        selected && [
          'gap-1 border-transparent bg-(--chip-bg-tonal) pr-3 pl-2 text-(--chip-text-color)',
          'hover:bg-(--chip-bg-tonal) hover:shadow-xs',
        ],
        disabled && 'pointer-events-none opacity-50',
      )}
      {...props}
    >
      {avatar && <div className='-ml-0.5 [&>img]:size-6 [&>img]:rounded-full'>{avatar}</div>}
      {selected && !icon && <Check className='size-[18px]' />}
      {icon && <div className='[&>svg]:size-3.5'>{icon}</div>}
      <Body2>{children}</Body2>
      {onDismiss && (
        <button
          type='button'
          onClick={createDismissHandler(onDismiss, disabled)}
          disabled={disabled}
          className='ml-0.5 rounded-full opacity-60 transition-opacity hover:opacity-100 focus:outline-none'
          aria-label='Remove'
        >
          <X className='size-3.5' />
        </button>
      )}
    </div>
  );
}

export { Chip, CHIP_VARIANTS };

import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { Label2 } from '@/components/ui/typography';
import { cn } from '@/utils';

/* UX4G badge: padding 0.35em 0.61em, font-size 0.75em, font-weight 400, border-radius 0.375rem */
const BADGE_VARIANTS = cva(
  'inline-flex items-center justify-center whitespace-nowrap align-baseline text-center text-[0.75em] leading-none transition-colors focus:outline-none',
  {
    variants: {
      theme: {
        primary:
          'text-primary [--badge-bg:var(--color-primary)] [--badge-bg-tonal:var(--color-primary-100)] [--badge-border-color:var(--color-primary)] [--badge-text-color:var(--color-primary)]',
        secondary:
          'text-secondary [--badge-bg:var(--color-secondary)] [--badge-bg-tonal:var(--color-secondary-100)] [--badge-border-color:var(--color-secondary)] [--badge-text-color:var(--color-secondary)]',
        success:
          'text-success [--badge-bg:var(--color-success)] [--badge-bg-tonal:var(--color-success-100)] [--badge-border-color:var(--color-success)] [--badge-text-color:var(--color-success)]',
        danger:
          'text-danger [--badge-bg:var(--color-danger)] [--badge-bg-tonal:var(--color-danger-100)] [--badge-border-color:var(--color-danger)] [--badge-text-color:var(--color-danger)]',
        warning:
          'text-warning [--badge-bg:var(--color-warning)] [--badge-bg-tonal:var(--color-warning-100)] [--badge-border-color:var(--color-warning)] [--badge-text-color:var(--color-warning)]',
        info: 'text-info [--badge-bg:var(--color-info)] [--badge-bg-tonal:var(--color-info-100)] [--badge-border-color:var(--color-info)] [--badge-text-color:var(--color-info)]',
        neutral:
          'text-neutral [--badge-bg:var(--color-neutral)] [--badge-bg-tonal:var(--color-neutral-100)] [--badge-border-color:var(--color-neutral)] [--badge-text-color:var(--color-neutral)]',
        light:
          'text-neutral [--badge-bg:var(--color-neutral-50)] [--badge-bg-tonal:var(--color-neutral-50)] [--badge-border-color:var(--color-neutral-200)] [--badge-text-color:var(--color-neutral)]',
        dark: 'text-neutral-0 [--badge-bg:var(--color-neutral)] [--badge-bg-tonal:var(--color-neutral-900)] [--badge-border-color:var(--color-neutral)] [--badge-text-color:var(--color-neutral-0)]',
      },
      variant: {
        filled: 'bg-(--badge-bg) text-neutral-0 border border-transparent',
        outlined: 'bg-transparent border border-(--badge-border-color) text-(--badge-text-color)',
        tonal: 'bg-(--badge-bg-tonal) text-(--badge-text-color) border border-transparent',
      },
      size: {
        sm: 'px-[0.4em] py-[0.2em]',
        md: 'px-[0.61em] py-[0.35em]',
        lg: 'px-[0.8em] py-[0.45em]',
      },
      shape: {
        default: 'rounded-[0.375rem]',
        pill: 'rounded-full',
      },
    },
    compoundVariants: [
      { theme: 'light', variant: 'filled', className: 'text-neutral' },
      { theme: 'dark', variant: 'filled', className: 'text-neutral-0' },
    ],
    defaultVariants: {
      theme: 'primary',
      variant: 'filled',
      size: 'md',
      shape: 'default',
    },
  },
);

interface IBadgeProps
  extends Omit<ComponentProps<'span'>, 'color'>,
    VariantProps<typeof BADGE_VARIANTS> {}

/**
 * A compact badge component for displaying status, counts, or category labels.
 * Matches the UX4G 2.0 Badge specification.
 *
 * Supports:
 * - Visual variants: filled, outlined, tonal
 * - Theme colors: primary, secondary, success, danger, warning, info, neutral, light, dark
 * - Sizes: sm, md, lg
 * - Shapes: default (rounded), pill (fully rounded)
 */
function Badge({ className, variant, theme, size, children, shape, ...props }: IBadgeProps) {
  return (
    <Label2 className={cn(BADGE_VARIANTS({ variant, theme, size, shape, className }))} {...props}>
      {children}
    </Label2>
  );
}

export { Badge, BADGE_VARIANTS };

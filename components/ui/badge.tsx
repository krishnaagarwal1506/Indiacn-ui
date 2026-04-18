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
        primary: '[--badge-bg:#613AF5] [--badge-text:#fff]',
        secondary: '[--badge-bg:#938BB6] [--badge-text:#fff]',
        success: '[--badge-bg:#3C9718] [--badge-text:#fff]',
        danger: '[--badge-bg:#B7131A] [--badge-text:#fff]',
        warning: '[--badge-bg:#B77224] [--badge-text:#fff]',
        info: '[--badge-bg:#00AAFF] [--badge-text:#fff]',
        light: '[--badge-bg:#f8f9fa] [--badge-text:#000]',
        dark: '[--badge-bg:#212121] [--badge-text:#fff]',
      },
      variant: {
        filled: 'bg-(--badge-bg) text-(--badge-text) border border-transparent',
        outlined: 'bg-transparent border border-(--badge-bg) text-(--badge-bg)',
        tonal: 'bg-(--badge-bg)/15 text-(--badge-bg) border border-transparent',
      },
      size: {
        sm: 'px-[0.4em] py-[0.2em]',
        md: 'px-[0.61em] py-[0.35em]',
        lg: 'px-[0.8em] py-[0.45em]',
      },
      shape: {
        default: 'rounded-[0.375rem]',
        pill: 'rounded-[6.25rem]',
      },
    },
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
 * - Multiple visual variants: filled, outlined, tonal
 * - Theme colors: primary, secondary, success, danger, warning, info, light, dark
 * - Three sizes: sm, md, lg
 * - Shape options: default (rounded) or pill (fully rounded)
 */
function Badge({ className, variant, theme, size, children, shape, ...props }: IBadgeProps) {
  return (
    <Label2 className={cn(BADGE_VARIANTS({ variant, theme, size, shape, className }))} {...props}>
      {children}
    </Label2>
  );
}

export { Badge, BADGE_VARIANTS };

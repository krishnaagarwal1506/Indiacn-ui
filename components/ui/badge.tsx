/* eslint-disable eslint-frontend-rules/enforce-typography-components */
import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '@/utils';

const BADGE_VARIANTS = cva(
  'inline-flex items-center font-medium transition-colors focus:outline-none',
  {
    variants: {
      theme: {
        primary:
          '[--badge-bg:var(--color-primary)] [--badge-bg-tonal:var(--color-primary-100)] [--badge-border:var(--color-primary)] [--badge-text:var(--color-primary)]',
        secondary:
          '[--badge-bg:var(--color-secondary)] [--badge-bg-tonal:var(--color-secondary-100)] [--badge-border:var(--color-secondary)] [--badge-text:var(--color-secondary)]',
        success:
          '[--badge-bg:var(--color-success)] [--badge-bg-tonal:var(--color-success-100)] [--badge-border:var(--color-success)] [--badge-text:var(--color-success)]',
        danger:
          '[--badge-bg:var(--color-danger)] [--badge-bg-tonal:var(--color-danger-100)] [--badge-border:var(--color-danger)] [--badge-text:var(--color-danger)]',
        warning:
          '[--badge-bg:var(--color-warning)] [--badge-bg-tonal:var(--color-warning-100)] [--badge-border:var(--color-warning)] [--badge-text:var(--color-warning)]',
      },
      variant: {
        filled: 'bg-(--badge-bg) text-neutral-0 border border-transparent',
        outlined: 'bg-transparent border border-(--badge-border) text-(--badge-text)',
        tonal: 'bg-(--badge-bg-tonal) text-(--badge-text) border border-transparent',
      },
      size: {
        sm: 'px-1.5 py-0.5 text-[0.625rem] leading-tight',
        md: 'px-2.5 py-0.5 text-xs leading-normal',
        lg: 'px-3 py-1 text-sm leading-normal',
      },
      shape: {
        default: 'rounded',
        pill: 'rounded-full',
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

interface IBadgeProps extends ComponentProps<'span'>, VariantProps<typeof BADGE_VARIANTS> {}

function Badge({ className, variant, theme, size, shape, ...props }: IBadgeProps) {
  return (
    <span className={cn(BADGE_VARIANTS({ variant, theme, size, shape, className }))} {...props} />
  );
}

export { Badge, BADGE_VARIANTS };

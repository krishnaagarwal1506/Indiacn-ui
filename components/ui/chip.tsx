'use client';
/* eslint-disable eslint-frontend-rules/enforce-typography-components */

import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import { ComponentProps, ReactNode } from 'react';

import { cn } from '@/utils';

const CHIP_VARIANTS = cva(
  'inline-flex items-center gap-1.5 font-medium transition-colors cursor-default',
  {
    variants: {
      theme: {
        primary:
          '[--chip-bg:var(--color-primary)] [--chip-bg-tonal:var(--color-primary-100)] [--chip-border:var(--color-primary)] [--chip-text:var(--color-primary)]',
        secondary:
          '[--chip-bg:var(--color-secondary)] [--chip-bg-tonal:var(--color-secondary-100)] [--chip-border:var(--color-secondary)] [--chip-text:var(--color-secondary)]',
        success:
          '[--chip-bg:var(--color-success)] [--chip-bg-tonal:var(--color-success-100)] [--chip-border:var(--color-success)] [--chip-text:var(--color-success)]',
        danger:
          '[--chip-bg:var(--color-danger)] [--chip-bg-tonal:var(--color-danger-100)] [--chip-border:var(--color-danger)] [--chip-text:var(--color-danger)]',
        warning:
          '[--chip-bg:var(--color-warning)] [--chip-bg-tonal:var(--color-warning-100)] [--chip-border:var(--color-warning)] [--chip-text:var(--color-warning)]',
      },
      variant: {
        filled: 'bg-(--chip-bg) text-neutral-0 border border-transparent',
        outlined: 'bg-transparent border border-(--chip-border) text-(--chip-text)',
        tonal: 'bg-(--chip-bg-tonal) text-(--chip-text) border border-transparent',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs rounded',
        md: 'px-3 py-1 text-sm rounded-md',
        lg: 'px-4 py-1.5 text-sm rounded-lg',
      },
    },
    defaultVariants: {
      theme: 'primary',
      variant: 'outlined',
      size: 'md',
    },
  },
);

interface IChipProps extends ComponentProps<'span'>, VariantProps<typeof CHIP_VARIANTS> {
  icon?: ReactNode;
  avatar?: ReactNode;
  onDismiss?: () => void;
  selected?: boolean;
  disabled?: boolean;
}

function Chip({
  className,
  theme,
  variant,
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
    <span
      data-selected={selected || undefined}
      data-disabled={disabled || undefined}
      className={cn(
        CHIP_VARIANTS({ theme, variant, size, className }),
        selected && 'ring-2 ring-(--chip-bg) ring-offset-1',
        disabled && 'pointer-events-none opacity-50',
      )}
      {...props}
    >
      {avatar && <span className='-ml-0.5 [&>img]:size-5 [&>img]:rounded-full'>{avatar}</span>}
      {icon && <span className='[&>svg]:size-3.5'>{icon}</span>}
      {children}
      {onDismiss && (
        <button
          type='button'
          onClick={onDismiss}
          disabled={disabled}
          className='ml-0.5 rounded-full opacity-70 transition-opacity hover:opacity-100 focus:outline-none'
          aria-label='Remove'
        >
          <X className='size-3' />
        </button>
      )}
    </span>
  );
}

export { Chip, CHIP_VARIANTS };

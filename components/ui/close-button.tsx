'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

/*
 * UX4G close button: 32/40/48px at radius 8px, with a neutral glyph in all
 * three variants. Interaction matches the rest of the library — primary at 8%
 * on hover, 16% on press, a 4px focus ring, and 50% when disabled.
 */
const CLOSE_BUTTON_VARIANTS = cva(
  'text-neutral focus-visible:shadow-focus-primary inline-flex shrink-0 cursor-pointer items-center justify-center rounded-md transition-[color,background-color,border-color,box-shadow,opacity] duration-150 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        text: 'hover:bg-primary/8 active:bg-primary/16 bg-transparent',
        outlined:
          'hover:bg-primary/8 active:bg-primary/16 border border-neutral-100 bg-transparent',
        tonal: 'bg-primary-100 hover:shadow-xs active:opacity-90',
      },
      size: {
        sm: 'size-8 [&>svg]:size-5',
        md: 'size-10 [&>svg]:size-6',
        lg: 'size-12 [&>svg]:size-8',
      },
    },
    defaultVariants: {
      variant: 'text',
      size: 'md',
    },
  },
);

interface ICloseButtonProps
  extends Omit<ComponentProps<'button'>, 'children'>,
    VariantProps<typeof CLOSE_BUTTON_VARIANTS> {
  /** Accessible name. Say what closes, not just "Close". */
  label?: string;
}

/**
 * Dismiss control for modals, toasts, panels and banners.
 *
 * Always renders its own accessible name, so a dismiss control cannot ship as
 * an unlabelled glyph.
 */
function CloseButton({
  className,
  variant,
  size,
  label = 'Close',
  type = 'button',
  ...props
}: ICloseButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      className={cn(CLOSE_BUTTON_VARIANTS({ variant, size }), className)}
      {...props}
    >
      <X aria-hidden />
    </button>
  );
}

export { CloseButton, CLOSE_BUTTON_VARIANTS };

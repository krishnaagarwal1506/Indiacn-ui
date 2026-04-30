'use client';
/* eslint-disable eslint-frontend-rules/top-level-const-snake */

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

/*
 * UX4G tooltip: max-width 200px, padding 0.25rem 0.5rem, border-radius 0.25rem,
 * bg neutral (#212121), text neutral-0, font-size 0.875rem.
 */
const TOOLTIP_VARIANTS = cva('z-50 overflow-hidden rounded px-2 py-1 text-sm shadow-md', {
  variants: {
    theme: {
      neutral: 'bg-neutral text-neutral-0',
      primary: 'bg-primary text-neutral-0',
      secondary: 'bg-secondary text-neutral-0',
      success: 'bg-success text-neutral-0',
      danger: 'bg-danger text-neutral-0',
      warning: 'bg-warning text-neutral-0',
      info: 'bg-info text-neutral-0',
      light: 'bg-neutral-0 text-neutral border border-neutral-200',
    },
  },
  defaultVariants: {
    theme: 'neutral',
  },
});

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

interface ITooltipContentProps
  extends ComponentProps<typeof TooltipPrimitive.Content>,
    VariantProps<typeof TOOLTIP_VARIANTS> {}

/** Tooltip popup content with positioning. */
function TooltipContent({ className, sideOffset = 4, theme, ...props }: ITooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        sideOffset={sideOffset}
        className={cn(
          TOOLTIP_VARIANTS({ theme }),
          'animate-in fade-in-0 zoom-in-95',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className,
        )}
        {...props}
      />
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, TOOLTIP_VARIANTS };

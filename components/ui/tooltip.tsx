'use client';
/* eslint-disable eslint-frontend-rules/top-level-const-snake */

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { ComponentProps } from 'react';

import { cn } from '@/utils';

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

function TooltipContent({
  className,
  sideOffset = 4,
  ...props
}: ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        sideOffset={sideOffset}
        className={cn(
          'text-neutral-0 animate-in fade-in-0 zoom-in-95 z-50 overflow-hidden rounded-md bg-neutral-900 px-3 py-1.5 text-xs shadow-md dark:bg-neutral-100 dark:text-neutral-900',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className,
        )}
        {...props}
      />
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };

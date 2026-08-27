'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check, Minus } from 'lucide-react';
import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

/**
 * Tri-state checkbox. UX4G: 18px box at radius-xs, 40px state layer at radius-md
 * tinted primary/8% hover and primary/16% pressed; focus ring 4px primary/48%.
 */
function Checkbox({ className, ...props }: ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        'group peer relative size-[18px] shrink-0 cursor-pointer rounded-xs border transition-[color,background-color,border-color,box-shadow] duration-150 ease-in-out',
        'border-neutral-500 bg-transparent',
        'data-[state=checked]:bg-primary data-[state=indeterminate]:bg-primary data-[state=checked]:border-transparent data-[state=indeterminate]:border-transparent',
        'focus-visible:shadow-focus-primary focus-visible:outline-none',
        'disabled:pointer-events-none disabled:opacity-[0.38]',
        'disabled:data-[state=checked]:bg-neutral disabled:data-[state=indeterminate]:bg-neutral',
        'before:absolute before:-inset-[11px] before:rounded-md before:transition-colors before:duration-150 before:content-[""]',
        'hover:before:bg-primary/8 active:before:bg-primary/16',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className='text-primary-foreground flex items-center justify-center'>
        <Check
          className='size-3.5 group-data-[state=indeterminate]:hidden'
          strokeWidth={3}
          aria-hidden
        />
        <Minus className='size-3.5 group-data-[state=checked]:hidden' strokeWidth={3} aria-hidden />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };

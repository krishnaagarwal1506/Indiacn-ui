'use client';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

/** Container for a set of mutually exclusive radio options. */
function RadioGroup({ className, ...props }: ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return <RadioGroupPrimitive.Root className={cn('grid gap-3', className)} {...props} />;
}

/**
 * Single radio option. UX4G: 20px ring, 10px dot, 40px state layer at radius-md
 * tinted primary/8% hover and primary/16% focused; focus ring 4px primary/48%.
 */
function RadioGroupItem({ className, ...props }: ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      className={cn(
        'group peer relative size-5 shrink-0 cursor-pointer rounded-full border-2 transition-[color,border-color,box-shadow] duration-150 ease-in-out',
        'data-[state=checked]:border-primary border-neutral-500',
        'focus-visible:shadow-focus-primary focus-visible:outline-none',
        'disabled:data-[state=checked]:border-neutral disabled:pointer-events-none disabled:opacity-50',
        'before:absolute before:-inset-[10px] before:rounded-md before:transition-colors before:duration-150 before:content-[""]',
        'hover:before:bg-primary/8 active:before:bg-primary/16',
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className='flex size-full items-center justify-center'>
        <div className='bg-primary group-disabled:bg-neutral size-2.5 rounded-full' />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };

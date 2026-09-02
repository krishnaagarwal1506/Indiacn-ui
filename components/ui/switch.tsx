'use client';

import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

/*
 * UX4G toggle: track 52x32 (small 39x24). The handle grows on check —
 * 16 -> 24 at the default size, 16 -> 18 at small — and again on press, to
 * 20 at both sizes.
 *
 * Hover and press also draw a state layer: a circle centred on the handle,
 * neutral at 20%, clipped by the track. Measured as exactly 20%: #9e9e9e over
 * the #c6c6c6 track and #4e2ec4 over the #613af5 one.
 */
const SWITCH_VARIANTS = cva(
  'peer group relative inline-flex shrink-0 cursor-pointer overflow-hidden rounded-full bg-neutral-200 transition-[background-color,box-shadow] duration-150 ease-in-out data-[state=checked]:bg-primary focus-visible:shadow-focus-primary focus-visible:outline-none disabled:pointer-events-none disabled:opacity-[0.38]',
  {
    variants: {
      size: {
        default: 'h-8 w-[52px]',
        sm: 'h-6 w-[39px]',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

const SWITCH_LAYER_VARIANTS = cva(
  'bg-neutral/20 pointer-events-none absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-[left,opacity] duration-150 ease-in-out group-hover:opacity-100 group-active:opacity-100 group-disabled:opacity-0',
  {
    variants: {
      size: {
        default:
          'size-[34px] left-[calc(50%-10px)] group-data-[state=checked]:left-[calc(50%+10px)]',
        sm: 'size-[30px] left-[calc(50%-7.5px)] group-data-[state=checked]:left-[calc(50%+7.5px)]',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

const SWITCH_THUMB_VARIANTS = cva(
  'bg-neutral-0 pointer-events-none absolute top-1/2 block -translate-x-1/2 -translate-y-1/2 rounded-full transition-[left,width,height] duration-150 ease-in-out group-active:data-[state=unchecked]:size-5',
  {
    variants: {
      size: {
        default:
          'size-4 left-[calc(50%-10px)] data-[state=checked]:size-6 data-[state=checked]:left-[calc(50%+10px)]',
        sm: 'size-4 left-[calc(50%-7.5px)] data-[state=checked]:size-[18px] data-[state=checked]:left-[calc(50%+7.5px)]',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

interface ISwitchProps
  extends ComponentProps<typeof SwitchPrimitive.Root>,
    VariantProps<typeof SWITCH_VARIANTS> {}

/** On/off control for a single setting. Built on Radix Switch primitive. */
function Switch({ className, size, ...props }: ISwitchProps) {
  return (
    <SwitchPrimitive.Root className={cn(SWITCH_VARIANTS({ size }), className)} {...props}>
      <div className={SWITCH_LAYER_VARIANTS({ size })} aria-hidden />
      <SwitchPrimitive.Thumb className={SWITCH_THUMB_VARIANTS({ size })} />
    </SwitchPrimitive.Root>
  );
}

export { Switch };

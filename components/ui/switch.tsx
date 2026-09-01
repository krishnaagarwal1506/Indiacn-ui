'use client';

import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

/* UX4G toggle: track 52x32 (small 39x24). The handle grows on check:
 * 16 -> 24 at the default size, 16 -> 18 at small. */
const SWITCH_VARIANTS = cva(
  'peer relative inline-flex shrink-0 cursor-pointer rounded-full transition-[background-color,box-shadow] duration-150 ease-in-out bg-neutral-200 data-[state=checked]:bg-primary focus-visible:shadow-focus-primary focus-visible:outline-none disabled:pointer-events-none disabled:opacity-[0.38]',
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

const SWITCH_THUMB_VARIANTS = cva(
  'bg-neutral-0 pointer-events-none absolute top-1/2 block -translate-x-1/2 -translate-y-1/2 rounded-full transition-[left,width,height] duration-150 ease-in-out',
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
      <SwitchPrimitive.Thumb className={SWITCH_THUMB_VARIANTS({ size })} />
    </SwitchPrimitive.Root>
  );
}

export { Switch };

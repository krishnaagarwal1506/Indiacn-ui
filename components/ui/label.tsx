'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

/** Accessible caption for a form control. Dims when the control it labels is disabled. */
function Label({ className, ...props }: ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      className={cn(
        'text-neutral flex items-center gap-2 text-sm leading-5 font-medium select-none',
        'peer-disabled:pointer-events-none peer-disabled:opacity-[0.38]',
        'group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-[0.38]',
        className,
      )}
      {...props}
    />
  );
}

export { Label };

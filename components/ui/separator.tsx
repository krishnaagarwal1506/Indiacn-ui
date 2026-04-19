'use client';

import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { ComponentProps } from 'react';

import { cn } from '@/utils';

/** Visual divider line, horizontal or vertical. */
function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-neutral-200',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className,
      )}
      {...props}
    />
  );
}

export { Separator };

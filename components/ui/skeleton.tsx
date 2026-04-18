import { ComponentProps } from 'react';

import { cn } from '@/utils';

/** Placeholder loading skeleton with pulse animation. */
function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-700', className)}
      {...props}
    />
  );
}

export { Skeleton };

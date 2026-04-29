import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '@/utils';

/*
 * UX4G skeleton: background-color neutral-100, pulse/wave animation.
 * Shape variants cover typical loading states (line, avatar, thumbnail, rectangle).
 */
const SKELETON_VARIANTS = cva('bg-neutral-100', {
  variants: {
    shape: {
      rect: 'rounded-md',
      circle: 'rounded-full',
      pill: 'rounded-full',
      text: 'rounded w-full h-4',
    },
    animation: {
      pulse: 'animate-pulse',
      wave: 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)]',
      none: '',
    },
  },
  defaultVariants: {
    shape: 'rect',
    animation: 'pulse',
  },
});

interface ISkeletonProps extends ComponentProps<'div'>, VariantProps<typeof SKELETON_VARIANTS> {}

/** Placeholder loading skeleton. */
function Skeleton({ className, shape, animation, ...props }: ISkeletonProps) {
  return <div className={cn(SKELETON_VARIANTS({ shape, animation, className }))} {...props} />;
}

export { Skeleton, SKELETON_VARIANTS };

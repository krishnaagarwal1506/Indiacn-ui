'use client';

import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentProps, createContext, useContext } from 'react';

import { cn } from '@/lib/utils';

/*
 * UX4G avatar: 24/32/40/48px, circular or 8px-rounded, primary-100 on
 * primary-800. Initials scale with the box: 11/12/14/16px.
 */
const AVATAR_VARIANTS = cva(
  'relative inline-flex shrink-0 items-center justify-center overflow-hidden font-medium select-none',
  {
    variants: {
      size: {
        sm: 'size-6 text-[11px] leading-4 tracking-[0.5px]',
        md: 'size-8 text-xs leading-4 tracking-[0.5px]',
        lg: 'size-10 text-sm leading-5 tracking-[0.1px]',
        xl: 'size-12 text-base leading-6 tracking-[0.15px]',
      },
      shape: {
        circular: 'rounded-full',
        rectangular: 'rounded-md',
      },
    },
    defaultVariants: {
      size: 'md',
      shape: 'circular',
    },
  },
);

type TAvatarSize = NonNullable<VariantProps<typeof AVATAR_VARIANTS>['size']>;

const AVATAR_CONTEXT = createContext<TAvatarSize>('md');

interface IAvatarProps
  extends ComponentProps<typeof AvatarPrimitive.Root>,
    VariantProps<typeof AVATAR_VARIANTS> {}

/** Avatar container. Wrap an AvatarImage and an AvatarFallback. */
function Avatar({ className, size, shape, ...props }: IAvatarProps) {
  return (
    <AVATAR_CONTEXT.Provider value={size ?? 'md'}>
      <AvatarPrimitive.Root
        className={cn(AVATAR_VARIANTS({ size, shape }), className)}
        {...props}
      />
    </AVATAR_CONTEXT.Provider>
  );
}

/** Avatar picture. Falls back automatically if the image fails to load. */
function AvatarImage({ className, ...props }: ComponentProps<typeof AvatarPrimitive.Image>) {
  return <AvatarPrimitive.Image className={cn('size-full object-cover', className)} {...props} />;
}

/** Shown while the image loads or when there is none. Holds initials or an icon. */
function AvatarFallback({ className, ...props }: ComponentProps<typeof AvatarPrimitive.Fallback>) {
  const size = useContext(AVATAR_CONTEXT);
  const iconSize = {
    sm: '[&>svg]:size-3.5',
    md: '[&>svg]:size-4',
    lg: '[&>svg]:size-5',
    xl: '[&>svg]:size-6',
  };

  return (
    <AvatarPrimitive.Fallback
      className={cn(
        'bg-primary-100 text-primary-800 flex size-full items-center justify-center uppercase',
        iconSize[size],
        className,
      )}
      {...props}
    />
  );
}

export type { TAvatarSize };

export { Avatar, AvatarImage, AvatarFallback, AVATAR_VARIANTS };

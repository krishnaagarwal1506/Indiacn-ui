'use client';

import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cva, type VariantProps } from 'class-variance-authority';
import { Children, ComponentProps, ReactNode, createContext, useContext } from 'react';

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
type TAvatarShape = NonNullable<VariantProps<typeof AVATAR_VARIANTS>['shape']>;

const AVATAR_CONTEXT = createContext<TAvatarSize>('md');

interface IAvatarGroupContext {
  size: TAvatarSize;
  shape: TAvatarShape;
  inGroup: boolean;
}

const GROUP_CONTEXT = createContext<IAvatarGroupContext>({
  size: 'md',
  shape: 'circular',
  inGroup: false,
});

const GROUP_OVERLAP: Record<TAvatarSize, string> = {
  sm: '-ml-1.5',
  md: '-ml-2',
  lg: '-ml-2.5',
  xl: '-ml-3',
};

interface IAvatarProps
  extends ComponentProps<typeof AvatarPrimitive.Root>,
    VariantProps<typeof AVATAR_VARIANTS> {}

/** Avatar container. Wrap an AvatarImage and an AvatarFallback. */
function Avatar({ className, size, shape, ...props }: IAvatarProps) {
  const { size: groupSize, shape: groupShape, inGroup } = useContext(GROUP_CONTEXT);
  const effectiveSize = size ?? (inGroup ? groupSize : 'md');
  const effectiveShape = shape ?? (inGroup ? groupShape : 'circular');

  return (
    <AVATAR_CONTEXT.Provider value={effectiveSize}>
      <AvatarPrimitive.Root
        className={cn(
          AVATAR_VARIANTS({ size: effectiveSize, shape: effectiveShape }),
          inGroup && 'ring-neutral-0 ring-2',
          className,
        )}
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

interface IAvatarGroupProps {
  children: ReactNode;
size?: TAvatarSize;
shape?: TAvatarShape;
/** Maximum avatars shown before a +N overflow badge appears. Defaults to 5. */
  max?: number;
className?: string;
}

/** Stacks multiple avatars with overlap. Excess avatars beyond `max` render as a +N badge. */
function AvatarGroup({
  size = 'md',
  shape = 'circular',
  max = 5,
  className,
  children,
}: IAvatarGroupProps) {
  const all = Children.toArray(children);
  const visible = all.slice(0, max);
  const overflow = all.length - visible.length;

  return (
    <GROUP_CONTEXT.Provider value={{ size, shape, inGroup: true }}>
      <div className={cn('flex items-center', className)}>
        {visible.map((child, i) => (
          <div key={i} className={cn(i > 0 && GROUP_OVERLAP[size])}>
            {child}
          </div>
        ))}
        {overflow > 0 && (
          <div
            className={cn(
              GROUP_OVERLAP[size],
              AVATAR_VARIANTS({ size, shape }),
              'ring-neutral-0 ring-2',
            )}
          >
            <div className='flex size-full items-center justify-center bg-neutral-100 font-medium text-neutral-700'>
              +{overflow}
            </div>
          </div>
        )}
      </div>
    </GROUP_CONTEXT.Provider>
  );
}

export type { TAvatarSize, TAvatarShape };

export { Avatar, AvatarImage, AvatarFallback, AvatarGroup, AVATAR_VARIANTS };

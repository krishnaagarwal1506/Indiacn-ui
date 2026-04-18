'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import { ComponentProps } from 'react';

import { cn } from '@/utils';

/*
 * UX4G nav-tabs: border-bottom 1px solid #dee2e6, link padding 0.5rem 1rem, font-size 14px
 * active: color #495057, bg #fff, border-color #dee2e6 #dee2e6 #fff (top, sides, bottom=white)
 * hover border: #e9ecef #e9ecef #dee2e6
 * disabled: color #938BB6, pointer-events none
 * nav-pills: active bg #613AF5 text #fff, border-radius 0.375rem
 * nav-underline: animated ::after underline, 2px height, 0.8s transition
 */

/** Tabs root component. */
function Tabs({ className, ...props }: ComponentProps<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root className={cn('w-full', className)} {...props} />;
}

interface ITabsListProps extends ComponentProps<typeof TabsPrimitive.List> {
  variant?: 'tabs' | 'pills' | 'underline';
}

/** Container for tab trigger buttons. */
function TabsList({ className, variant = 'tabs', ...props }: ITabsListProps) {
  return (
    <TabsPrimitive.List
      className={cn(
        'inline-flex items-center gap-0',
        variant === 'tabs' && 'border-b border-[#dee2e6]',
        variant === 'pills' && 'gap-1',
        variant === 'underline' && 'gap-0 border-b border-[#dee2e6]',
        className,
      )}
      {...props}
    />
  );
}

interface ITabsTriggerProps extends ComponentProps<typeof TabsPrimitive.Trigger> {
  variant?: 'tabs' | 'pills' | 'underline';
}

/** Clickable tab trigger button. */
function TabsTrigger({ className, variant = 'tabs', ...props }: ITabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        'disabled:text-secondary inline-flex items-center justify-center px-4 py-2 text-sm transition-all disabled:pointer-events-none disabled:opacity-50',
        variant === 'tabs' && [
          'relative -mb-px rounded-t-[0.375rem] border border-transparent',
          'hover:border-[#e9ecef] hover:border-b-[#dee2e6]',
          'data-[state=active]:border-[#dee2e6] data-[state=active]:border-b-white data-[state=active]:bg-white data-[state=active]:text-[#495057]',
        ],
        variant === 'pills' && [
          'rounded-[0.375rem]',
          'data-[state=active]:bg-primary data-[state=active]:text-white',
          'hover:text-primary',
        ],
        variant === 'underline' && [
          'relative border-b-2 border-transparent',
          'hover:text-primary',
          'data-[state=active]:border-b-primary data-[state=active]:text-primary',
        ],
        className,
      )}
      {...props}
    />
  );
}

/** Content panel displayed when its associated tab is active. */
function TabsContent({ className, ...props }: ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      className={cn(
        'focus-visible:ring-primary/50 mt-2 focus-visible:ring-2 focus-visible:outline-none',
        className,
      )}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };

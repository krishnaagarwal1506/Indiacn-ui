'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import { ComponentProps, createContext, useContext } from 'react';

import { cn } from '@/lib/utils';

/*
 * UX4G nav variants:
 * - tabs:      border-bottom 1px neutral-200, link rounded-top; active = neutral-0 bg, visible top/side border
 * - pills:     active bg primary, text neutral-0, rounded
 * - underline: border-bottom animates in on active (2px primary)
 * Disabled: color neutral-500, pointer-events none.
 */

type TTabsVariant = 'tabs' | 'pills' | 'underline';

const TABS_CONTEXT = createContext<TTabsVariant>('tabs');

interface ITabsProps extends ComponentProps<typeof TabsPrimitive.Root> {
  variant?: TTabsVariant;
}

/** Tabs root component. Passes variant down to list/trigger via context. */
function Tabs({ className, variant = 'tabs', ...props }: ITabsProps) {
  return (
    <TABS_CONTEXT.Provider value={variant}>
      <TabsPrimitive.Root className={cn('w-full', className)} {...props} />
    </TABS_CONTEXT.Provider>
  );
}

interface ITabsListProps extends ComponentProps<typeof TabsPrimitive.List> {
  variant?: TTabsVariant;
}

/** Container for tab trigger buttons. */
function TabsList({ className, variant, ...props }: ITabsListProps) {
  const ctxVariant = useContext(TABS_CONTEXT);
  const resolved = variant ?? ctxVariant;
  return (
    <TabsPrimitive.List
      className={cn(
        'inline-flex items-center',
        resolved === 'tabs' && 'gap-0 border-b border-neutral-200',
        resolved === 'pills' && 'gap-1',
        resolved === 'underline' && 'gap-0 border-b border-neutral-200',
        className,
      )}
      {...props}
    />
  );
}

interface ITabsTriggerProps extends ComponentProps<typeof TabsPrimitive.Trigger> {
  variant?: TTabsVariant;
}

/** Clickable tab trigger button. */
function TabsTrigger({ className, variant, ...props }: ITabsTriggerProps) {
  const ctxVariant = useContext(TABS_CONTEXT);
  const resolved = variant ?? ctxVariant;
  return (
    <TabsPrimitive.Trigger
      className={cn(
        'inline-flex items-center justify-center px-4 py-2 text-sm transition-[color,background-color,border-color] duration-150 focus-visible:outline-none disabled:pointer-events-none disabled:text-neutral-500 disabled:opacity-50',
        resolved === 'tabs' && [
          'relative -mb-px rounded-t-md border border-transparent text-neutral-600',
          'hover:text-neutral hover:border-neutral-100 hover:border-b-neutral-200',
          'data-[state=active]:bg-neutral-0 data-[state=active]:border-b-neutral-0 data-[state=active]:text-neutral data-[state=active]:border-neutral-200',
        ],
        resolved === 'pills' && [
          'rounded-md text-neutral-600',
          'hover:text-primary',
          'data-[state=active]:bg-primary data-[state=active]:text-primary-foreground',
        ],
        resolved === 'underline' && [
          'relative -mb-px border-b-2 border-transparent text-neutral-600',
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
        'focus-visible:shadow-focus-primary mt-2 rounded-md focus-visible:outline-none',
        className,
      )}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };

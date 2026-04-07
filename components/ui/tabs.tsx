'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import { ComponentProps } from 'react';

import { cn } from '@/utils';

function Tabs({ className, ...props }: ComponentProps<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root className={cn('w-full', className)} {...props} />;
}

function TabsList({ className, ...props }: ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      className={cn(
        'inline-flex h-10 items-center justify-center rounded-md bg-neutral-100 p-1 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400',
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }: ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        'focus-visible:ring-primary/50 inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
        'data-[state=active]:bg-neutral-0 data-[state=active]:text-neutral data-[state=active]:shadow-sm dark:data-[state=active]:bg-neutral-900',
        className,
      )}
      {...props}
    />
  );
}

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

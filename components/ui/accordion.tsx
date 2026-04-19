'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { ComponentProps } from 'react';

import { cn } from '@/utils';

/*
 * UX4G accordion:
 * - item: border-top/bottom only (no left/right), first-child no top, last-child no bottom
 * - button padding: 1rem 1.25rem, font-size 1rem
 * - active (not collapsed): box-shadow: 0px 0px 0px 4px rgba(97,58,245,0.50), border-radius: 8px, border: 1px solid primary
 * - focus: border-color #9161FF, box-shadow: 0 0 0 0.25rem rgba(13,110,253,0.25)
 * - body padding: 1rem 1.25rem
 * - icon: 1.25rem, rotates -180deg
 */

/** Accordion root component. */
function Accordion({ className, ...props }: ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root className={cn('w-full', className)} {...props} />;
}

/** Single collapsible accordion item. */
function AccordionItem({ className, ...props }: ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      className={cn(
        'border-t border-b border-neutral-200 first:border-t-0 last:border-b-0',
        className,
      )}
      {...props}
    />
  );
}

/** Clickable trigger that toggles an accordion item. */
function AccordionTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        className={cn(
          'text-neutral flex flex-1 items-center justify-between px-5 py-4 text-base transition-all',
          'focus:border-primary focus:shadow-focus-primary focus:z-3 focus:outline-none',
          'data-[state=open]:border-primary data-[state=open]:rounded-lg data-[state=open]:border data-[state=open]:shadow-[0px_0px_0px_4px_rgba(97,58,245,0.50)]',
          '[&[data-state=open]>svg]:rotate-180',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDown className='size-5 shrink-0 text-neutral-500 transition-transform duration-200' />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

/** Collapsible content panel for an accordion item. */
function AccordionContent({
  className,
  children,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm'
      {...props}
    >
      <div className={cn('px-5 pt-0 pb-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

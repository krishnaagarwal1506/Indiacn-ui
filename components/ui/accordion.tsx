'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

/*
 * UX4G accordion: item has a single bottom border in neutral-100; trigger and
 * body both pad 16px/20px; trigger type is label-1; chevron is 24px. The open
 * item is not outlined — only the focus ring is.
 */

/** Accordion root component. */
function Accordion({ className, ...props }: ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root className={cn('w-full', className)} {...props} />;
}

interface IAccordionItemProps extends ComponentProps<typeof AccordionPrimitive.Item> {
  borderless?: boolean;
}

/** Single collapsible accordion item. `borderless` drops the divider. */
function AccordionItem({ className, borderless, ...props }: IAccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      className={cn('border-b border-neutral-100', borderless && 'border-b-0', className)}
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
          'text-neutral flex flex-1 cursor-pointer items-center justify-between px-5 py-4 text-sm font-medium tracking-[0.1px] transition-all',
          // No Accordion page in the Figma kit, so this follows the library's own
          // convention for a text-on-surface control rather than inventing values.
          'hover:bg-primary/8 active:bg-primary/16 disabled:pointer-events-none disabled:opacity-50',
          'focus-visible:border-primary focus-visible:shadow-focus-primary focus-visible:z-3 focus-visible:rounded-lg focus-visible:border focus-visible:outline-none',
          '[&[data-state=open]>svg]:rotate-180',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDown className='size-6 shrink-0 text-neutral-500 transition-transform duration-200' />
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
      <div className={cn('px-5 py-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

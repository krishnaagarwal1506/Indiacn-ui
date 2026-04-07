'use client';
/* eslint-disable eslint-frontend-rules/top-level-const-snake */

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { ComponentProps } from 'react';

import { cn } from '@/utils';

const Collapse = CollapsiblePrimitive.Root;
const CollapseTrigger = CollapsiblePrimitive.Trigger;

function CollapseContent({
  className,
  ...props
}: ComponentProps<typeof CollapsiblePrimitive.Content>) {
  return (
    <CollapsiblePrimitive.Content
      className={cn(
        'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden',
        className,
      )}
      {...props}
    />
  );
}

export { Collapse, CollapseTrigger, CollapseContent };

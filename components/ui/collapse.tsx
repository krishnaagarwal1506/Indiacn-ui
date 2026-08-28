'use client';

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

/**
 * Collapsible root component.
 *
 * Takes full width so the container does not resize when the content mounts.
 * Without it, a shrink-to-fit parent sizes itself to the trigger while closed
 * and to the wider content once open, stretching the trigger on every toggle.
 */
function Collapse({ className, ...props }: ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root className={cn('w-full', className)} {...props} />;
}

/** Collapsible trigger button. */
function CollapseTrigger(props: ComponentProps<typeof CollapsiblePrimitive.Trigger>) {
  return <CollapsiblePrimitive.Trigger {...props} />;
}

/**
 * Collapsible content panel.
 * Uses radix-collapsible-content-height (not the accordion height var) so the
 * animated height matches the actual content; mismatched vars caused the
 * trigger to jump on toggle.
 */
function CollapseContent({
  className,
  ...props
}: ComponentProps<typeof CollapsiblePrimitive.Content>) {
  return (
    <CollapsiblePrimitive.Content
      className={cn(
        'data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden',
        className,
      )}
      {...props}
    />
  );
}

export { Collapse, CollapseTrigger, CollapseContent };

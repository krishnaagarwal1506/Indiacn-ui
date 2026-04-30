'use client';
/* eslint-disable eslint-frontend-rules/enforce-typography-components */

import { Button } from '@/components/ui/button';
import { Collapse, CollapseContent, CollapseTrigger } from '@/components/ui/collapse';

export function CollapseDefault() {
  return (
    <Collapse className='flex flex-col gap-2'>
      <CollapseTrigger asChild>
        <Button variant='outlined'>Toggle Content</Button>
      </CollapseTrigger>
      <CollapseContent>
        <div className='rounded-md border border-neutral-200 p-4 dark:border-neutral-700'>
          <p className='text-sm'>
            This content can be shown or hidden by clicking the button above. The transition is
            smooth and animated.
          </p>
        </div>
      </CollapseContent>
    </Collapse>
  );
}

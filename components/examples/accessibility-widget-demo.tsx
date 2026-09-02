'use client';

import { AccessibilityWidget } from '@/components/ui/accessibility-widget';
import { Body1, Headline5 } from '@/components/ui/typography';

export function AccessibilityWidgetDefault() {
  return (
    <div className='relative h-[420px] w-full overflow-hidden rounded-md border border-neutral-100'>
      <div className='flex flex-col gap-3 p-6'>
        <Headline5>Apply for a ration card</Headline5>
        <Body1 className='max-w-[420px] text-neutral-600'>
          Adjust text size, spacing and contrast from the button in the corner. Settings apply to
          the whole page and are remembered.
        </Body1>
        <Body1>
          Read the{' '}
          <a href='#eligibility' className='text-primary underline'>
            eligibility criteria
          </a>{' '}
          before you begin.
        </Body1>
      </div>
      <AccessibilityWidget className='absolute right-4 bottom-4' />
    </div>
  );
}

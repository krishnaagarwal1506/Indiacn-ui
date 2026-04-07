/* eslint-disable eslint-frontend-rules/enforce-typography-components */
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export function PopoverDefault() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outlined'>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className='space-y-2'>
          <h4 className='leading-none font-medium'>Popover Title</h4>
          <p className='text-sm text-neutral-500'>
            This is the popover content. Place any elements here.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function PopoverPlacements() {
  return (
    <div className='flex flex-wrap gap-4'>
      {(['top', 'bottom', 'left', 'right'] as const).map(side => (
        <Popover key={side}>
          <PopoverTrigger asChild>
            <Button variant='outlined' size='sm'>
              {side}
            </Button>
          </PopoverTrigger>
          <PopoverContent side={side} className='w-60'>
            <p className='text-sm'>Popover on {side}</p>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
}

import { Bell, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Indicator } from '@/components/ui/indicator';
import { Body3, Label2 } from '@/components/ui/typography';

export function IndicatorDefault() {
  return (
    <div className='flex items-center gap-6'>
      <Indicator variant='dot' />
      <Indicator variant='count'>3</Indicator>
      <Indicator variant='count'>32</Indicator>
      <Indicator variant='text'>Primary</Indicator>
    </div>
  );
}

export function IndicatorThemes() {
  return (
    <div className='grid gap-4'>
      <div className='flex items-center gap-4'>
        <Indicator theme='primary' variant='dot' />
        <Indicator theme='primary' variant='count'>
          3
        </Indicator>
        <Indicator theme='primary' variant='text'>
          Primary
        </Indicator>
      </div>
      <div className='flex items-center gap-4'>
        <Indicator theme='success' variant='dot' />
        <Indicator theme='success' variant='count'>
          3
        </Indicator>
        <Indicator theme='success' variant='text'>
          Success
        </Indicator>
      </div>
      <div className='flex items-center gap-4'>
        <Indicator theme='danger' variant='dot' />
        <Indicator theme='danger' variant='count'>
          3
        </Indicator>
        <Indicator theme='danger' variant='text'>
          Danger
        </Indicator>
      </div>
    </div>
  );
}

export function IndicatorAttached() {
  return (
    <div className='flex items-center gap-8'>
      <div className='relative inline-flex'>
        <Button theme='primary' variant='outlined' size='md' iconButton aria-label='Notifications'>
          <Bell />
        </Button>
        <Indicator theme='danger' variant='count' className='absolute -top-1 -right-1'>
          5
        </Indicator>
      </div>

      <div className='relative inline-flex'>
        <Button theme='primary' variant='outlined' size='md' iconButton aria-label='Inbox'>
          <Mail />
        </Button>
        <Indicator theme='danger' variant='dot' className='absolute top-0 right-0' />
      </div>

      <div className='flex items-center gap-2'>
        <Label2>Grievance status</Label2>
        <Indicator theme='success' variant='text'>
          Resolved
        </Indicator>
      </div>
    </div>
  );
}

export function IndicatorCounts() {
  return (
    <div className='grid gap-3'>
      <div className='flex items-center gap-4'>
        <Indicator variant='count'>1</Indicator>
        <Indicator variant='count'>12</Indicator>
        <Indicator variant='count'>99+</Indicator>
      </div>
      <Body3 className='text-neutral-500'>
        A single digit renders a 16px circle; longer values grow into a pill.
      </Body3>
    </div>
  );
}

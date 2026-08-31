import { User } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from '@/components/ui/avatar';
import { Indicator } from '@/components/ui/indicator';
import { Body3 } from '@/components/ui/typography';

export function AvatarDefault() {
  return (
    <div className='flex items-center gap-4'>
      <Avatar>
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>
          <User aria-hidden />
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src='/icon.svg' alt='Aarav Sharma' />
        <AvatarFallback>AS</AvatarFallback>
      </Avatar>
    </div>
  );
}

export function AvatarSizes() {
  return (
    <div className='flex items-end gap-4'>
      <Avatar size='sm'>
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar size='md'>
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar size='lg'>
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
      <Avatar size='xl'>
        <AvatarFallback>XL</AvatarFallback>
      </Avatar>
    </div>
  );
}

export function AvatarShapes() {
  return (
    <div className='flex items-center gap-4'>
      <Avatar shape='circular' size='lg'>
        <AvatarFallback>CI</AvatarFallback>
      </Avatar>
      <Avatar shape='rectangular' size='lg'>
        <AvatarFallback>RE</AvatarFallback>
      </Avatar>
    </div>
  );
}

export function AvatarGroupDemo() {
  return (
    <div className='flex flex-col gap-6'>
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>RK</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>PM</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src='/icon.svg' alt='Dev User' />
          <AvatarFallback>DU</AvatarFallback>
        </Avatar>
      </AvatarGroup>
      <AvatarGroup max={3}>
        <Avatar>
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>RK</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>PM</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>DU</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>VN</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    </div>
  );
}

export function AvatarWithBadge() {
  return (
    <div className='flex items-center gap-6'>
      <div className='relative inline-flex'>
        <Avatar size='lg'>
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <Indicator
          theme='success'
          variant='dot'
          className='ring-neutral-0 absolute right-0 bottom-0 ring-2'
        />
      </div>
      <Body3 className='text-neutral-600'>
        The 6px status dot is an Indicator, positioned by the consumer.
      </Body3>
    </div>
  );
}

'use client';

import { Check, Star, User } from 'lucide-react';

import { Chip } from '@/components/ui/chip';

export function ChipDefault() {
  return <Chip>Label</Chip>;
}

export function ChipVariants() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Chip variant='filled'>Filled</Chip>
      <Chip variant='outlined'>Outlined</Chip>
      <Chip variant='tonal'>Tonal</Chip>
    </div>
  );
}

export function ChipThemes() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Chip theme='primary'>Primary</Chip>
      <Chip theme='secondary'>Secondary</Chip>
      <Chip theme='success'>Success</Chip>
      <Chip theme='danger'>Danger</Chip>
      <Chip theme='warning'>Warning</Chip>
    </div>
  );
}

export function ChipSizes() {
  return (
    <div className='flex flex-wrap items-center gap-2'>
      <Chip size='sm'>Small</Chip>
      <Chip size='md'>Medium</Chip>
      <Chip size='lg'>Large</Chip>
    </div>
  );
}

export function ChipWithIcon() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Chip icon={<Star />}>Favourite</Chip>
      <Chip icon={<Check />} theme='success'>
        Approved
      </Chip>
      <Chip icon={<User />} theme='secondary'>
        User
      </Chip>
    </div>
  );
}

export function ChipDismissible() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Chip onDismiss={() => {}}>Dismissible</Chip>
      <Chip onDismiss={() => {}} theme='danger'>
        Remove
      </Chip>
      <Chip onDismiss={() => {}} theme='success' icon={<Check />}>
        Approved
      </Chip>
    </div>
  );
}

export function ChipDisabled() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Chip disabled>Disabled</Chip>
      <Chip disabled variant='filled'>
        Disabled Filled
      </Chip>
    </div>
  );
}

'use client';

import { Check, Star, User } from 'lucide-react';
import { useState } from 'react';

import { Chip } from '@/components/ui/chip';

/** No-op callback for demo purposes. */
const noop = () => {};

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
      <Chip>Default</Chip>
      <Chip variant='filled'>Filled</Chip>
      <Chip variant='tonal'>Tonal</Chip>
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
      <Chip icon={<Check />}>Approved</Chip>
      <Chip icon={<User />}>User</Chip>
    </div>
  );
}

export function ChipDismissible() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Chip onDismiss={noop}>Dismissible</Chip>
      <Chip onDismiss={noop} icon={<Check />}>
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

export function ChipSelectable() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (label: string) => {
    setSelected(prev => (prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]));
  };

  return (
    <div className='flex flex-wrap gap-2'>
      {['React', 'Vue', 'Angular', 'Svelte'].map(label => (
        <Chip key={label} selected={selected.includes(label)} onClick={toggle.bind(null, label)}>
          {label}
        </Chip>
      ))}
    </div>
  );
}

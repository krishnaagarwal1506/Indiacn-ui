'use client';

import { useState } from 'react';

import { Search } from '@/components/ui/search';

export function SearchDefault() {
  const [value, setValue] = useState('');
  return (
    <Search
      placeholder='Search...'
      value={value}
      onChange={e => setValue(e.target.value)}
      onClear={() => setValue('')}
    />
  );
}

export function SearchSizes() {
  return (
    <div className='flex w-full max-w-sm flex-col gap-3'>
      <Search placeholder='Small search...' size='sm' />
      <Search placeholder='Medium search...' size='md' />
      <Search placeholder='Large search...' size='lg' />
    </div>
  );
}

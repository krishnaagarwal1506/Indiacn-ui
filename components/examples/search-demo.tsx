'use client';

import { useCallback, useState } from 'react';

import { Search } from '@/components/ui/search';

export function SearchDefault() {
  const [value, setValue] = useState('');
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    [],
  );
  const handleClear = useCallback(() => setValue(''), []);
  return (
    <Search placeholder='Search...' value={value} onChange={handleChange} onClear={handleClear} />
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

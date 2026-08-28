'use client';

import { Mic, Sparkles } from 'lucide-react';
import { useCallback, useState } from 'react';

import { Search } from '@/components/ui/search';
import { Body3 } from '@/components/ui/typography';

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

/** Icon button used in the search trailing slot. */
function TrailingAction({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <button
      type='button'
      className='hover:text-primary shrink-0 rounded-md p-2 text-neutral-600 transition-colors focus-visible:outline-none'
      aria-label={label}
    >
      {children}
    </button>
  );
}

export function SearchWithTrailingActions() {
  return (
    <div className='grid w-full max-w-md gap-2'>
      <Search
        size='xl'
        placeholder='Search for services'
        trailing={
          <>
            <TrailingAction label='Search by voice'>
              <Mic className='size-6' aria-hidden />
            </TrailingAction>
            <TrailingAction label='Ask the assistant'>
              <Sparkles className='size-6' aria-hidden />
            </TrailingAction>
          </>
        }
      />
      <Body3 className='text-neutral-600'>
        UX4G puts voice search and an assistant here. The slot takes any node.
      </Body3>
    </div>
  );
}

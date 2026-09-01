'use client';

import { ChevronsDownUp, ChevronsUpDown } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

const TOGGLE_CLASS =
  'focus-visible:shadow-focus-primary pointer-events-auto inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-0 px-3.5 py-1.5 font-sans text-xs font-medium text-neutral-600 transition-colors hover:border-neutral-300 hover:text-neutral focus-visible:outline-none';

/*
 * Fades long code out rather than painting a coloured gradient over it: a mask
 * dissolves the content itself, so it needs no knowledge of the code surface's
 * colour and behaves in both themes.
 */
export function CodeCollapsibleWrapper({ children, className }: React.ComponentProps<'div'>) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const handleToggle = React.useCallback(() => setIsExpanded(v => !v), []);

  return (
    <div className={cn('relative', className)}>
      <div
        className={cn(
          'overflow-hidden',
          !isExpanded &&
            'max-h-72 mask-[linear-gradient(to_bottom,black_calc(100%-5rem),transparent)]',
        )}
      >
        {children}
      </div>

      {isExpanded ? (
        <div className='flex justify-center border-t border-neutral-100 py-2.5'>
          <button type='button' onClick={handleToggle} className={TOGGLE_CLASS}>
            <ChevronsDownUp className='size-3.5' aria-hidden />
            Collapse
          </button>
        </div>
      ) : (
        <div className='pointer-events-none absolute inset-x-0 bottom-0 flex justify-center pb-4'>
          <button type='button' onClick={handleToggle} className={TOGGLE_CLASS}>
            <ChevronsUpDown className='size-3.5' aria-hidden />
            Expand code
          </button>
        </div>
      )}
    </div>
  );
}

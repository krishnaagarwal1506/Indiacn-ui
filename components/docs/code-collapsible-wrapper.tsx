'use client';
/* eslint-disable eslint-frontend-rules/no-direct-colors */

import { ChevronsDownUp, ChevronsUpDown } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

export function CodeCollapsibleWrapper({ children, className }: React.ComponentProps<'div'>) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const handleExpand = React.useCallback(() => setIsExpanded(true), []);
  const handleCollapse = React.useCallback(() => setIsExpanded(false), []);

  return (
    <div className={cn('relative', className)}>
      {/* Code content with max height when collapsed */}
      <div
        className={cn(
          'overflow-hidden transition-[max-height] duration-300 ease-in-out',
          !isExpanded && 'max-h-72',
        )}
      >
        {children}
      </div>

      {/* Gradient fade + expand button — only when collapsed */}
      {!isExpanded && (
        <div className='pointer-events-none absolute inset-x-0 bottom-0 flex h-28 flex-col justify-end bg-linear-to-t from-zinc-900 via-zinc-900/80 to-transparent pb-3'>
          <div className='pointer-events-auto flex justify-center'>
            <button
              onClick={handleExpand}
              className='flex items-center gap-1.5 rounded-full border border-zinc-300 bg-white/90 px-4 py-1.5 text-xs font-medium text-zinc-600 shadow-sm backdrop-blur-sm transition-all hover:border-zinc-400 hover:bg-zinc-50 hover:text-zinc-900 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800/90 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:bg-zinc-700 dark:hover:text-white'
            >
              <ChevronsUpDown className='size-3.5' />
              Expand code
            </button>
          </div>
        </div>
      )}

      {/* Collapse button — only when expanded */}
      {isExpanded && (
        <div className='flex justify-center border-t border-zinc-200 py-2.5 dark:border-zinc-700/60'>
          <button
            onClick={handleCollapse}
            className='flex items-center gap-1.5 rounded-full border border-zinc-300 bg-white/90 px-4 py-1.5 text-xs font-medium text-zinc-600 shadow-sm transition-all hover:border-zinc-400 hover:bg-zinc-50 hover:text-zinc-900 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800/90 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:bg-zinc-700 dark:hover:text-white'
          >
            <ChevronsDownUp className='size-3.5' />
            Collapse
          </button>
        </div>
      )}
    </div>
  );
}

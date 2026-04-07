'use client';
/* eslint-disable eslint-frontend-rules/no-focusable-non-interactive-elements */

import { cva, type VariantProps } from 'class-variance-authority';
import { SearchIcon, X } from 'lucide-react';
import { ComponentProps, useRef } from 'react';

import { cn } from '@/utils';

const SEARCH_VARIANTS = cva(
  'flex items-center gap-2 rounded-lg border transition-colors focus-within:ring-2 focus-within:ring-primary/50',
  {
    variants: {
      size: {
        sm: 'h-8 px-2.5 text-xs',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12 px-4 text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

interface ISearchProps
  extends Omit<ComponentProps<'input'>, 'size'>,
    VariantProps<typeof SEARCH_VARIANTS> {
  onClear?: () => void;
  containerClassName?: string;
}

function Search({ className, size, onClear, containerClassName, value, ...props }: ISearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={cn(
        SEARCH_VARIANTS({ size, className: containerClassName }),
        'bg-neutral-0 border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900',
      )}
      onClick={() => inputRef.current?.focus()}
    >
      <SearchIcon className='size-4 shrink-0 text-neutral-400' />
      <input
        ref={inputRef}
        type='search'
        className={cn('flex-1 bg-transparent outline-none placeholder:text-neutral-400', className)}
        value={value}
        {...props}
      />
      {value && onClear && (
        <button
          type='button'
          onClick={onClear}
          className='shrink-0 rounded-sm opacity-50 hover:opacity-100'
        >
          <X className='size-3.5' />
        </button>
      )}
    </div>
  );
}

export { Search, SEARCH_VARIANTS };

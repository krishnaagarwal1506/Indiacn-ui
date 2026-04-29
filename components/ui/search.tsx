'use client';
/* eslint-disable eslint-frontend-rules/no-focusable-non-interactive-elements */

import { cva, type VariantProps } from 'class-variance-authority';
import { SearchIcon, X } from 'lucide-react';
import { ComponentProps, useCallback, useRef } from 'react';

import { cn } from '@/utils';

const SEARCH_VARIANTS = cva(
  'flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-0 transition-[color,background-color,border-color,box-shadow] duration-150 focus-within:border-primary focus-within:shadow-focus-primary',
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

/** Search input field with icon and optional clear button. */
function Search({ className, size, onClear, containerClassName, value, ...props }: ISearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleContainerClick = useCallback(() => inputRef.current?.focus(), []);

  return (
    <div
      className={cn(SEARCH_VARIANTS({ size, className: containerClassName }))}
      onClick={handleContainerClick}
    >
      <SearchIcon className='size-4 shrink-0 text-neutral-500' />
      <input
        ref={inputRef}
        type='search'
        className={cn('flex-1 bg-transparent outline-none placeholder:text-neutral-500', className)}
        value={value}
        {...props}
      />
      {value && onClear && (
        <button
          type='button'
          onClick={onClear}
          className='shrink-0 rounded-sm opacity-60 transition-opacity hover:opacity-100 focus:outline-none'
          aria-label='Clear search'
        >
          <X className='size-3.5' />
        </button>
      )}
    </div>
  );
}

export { Search, SEARCH_VARIANTS };

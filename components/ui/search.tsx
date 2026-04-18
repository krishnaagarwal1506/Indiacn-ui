'use client';
/* eslint-disable eslint-frontend-rules/no-focusable-non-interactive-elements */

import { cva, type VariantProps } from 'class-variance-authority';
import { SearchIcon, X } from 'lucide-react';
import { ComponentProps, useCallback, useRef } from 'react';

import { cn } from '@/utils';

const SEARCH_VARIANTS = cva(
  'flex items-center gap-2 rounded-lg border border-[#C6C6C6] bg-white transition-all focus-within:border-primary focus-within:shadow-[0px_0px_0px_4px_rgba(97,58,245,0.50)] dark:border-neutral-700 dark:bg-neutral-900',
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

/** Search input field with icon and clear button. */
function Search({ className, size, onClear, containerClassName, value, ...props }: ISearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleContainerClick = useCallback(() => inputRef.current?.focus(), []);

  return (
    <div
      className={cn(SEARCH_VARIANTS({ size, className: containerClassName }), '')}
      onClick={handleContainerClick}
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

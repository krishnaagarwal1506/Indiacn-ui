'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { SearchIcon, X } from 'lucide-react';
import { ComponentProps, ReactNode, useRef } from 'react';

import { cn } from '@/lib/utils';

/*
 * UX4G search: 56px tall (xl), radius 8px, 1px neutral-100 border, 24px leading
 * icon, body-1 text. Hover turns the border primary; focus keeps the border and
 * adds the 4px focus ring.
 */
const SEARCH_VARIANTS = cva(
  'flex items-center gap-2 rounded-md border border-neutral-100 bg-neutral-0 tracking-[0.5px] transition-[color,background-color,border-color,box-shadow] duration-150 hover:border-primary focus-within:shadow-focus-primary has-[input:disabled]:pointer-events-none has-[input:disabled]:opacity-50',
  {
    variants: {
      size: {
        sm: 'h-8 px-2.5 text-xs',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12 px-4 text-base',
        xl: 'h-14 px-4 text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const ICON_SIZES = {
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6',
  xl: 'size-6',
} as const;

interface ISearchProps
  extends Omit<ComponentProps<'input'>, 'size'>,
    VariantProps<typeof SEARCH_VARIANTS> {
  onClear?: () => void;
  containerClassName?: string;
  trailing?: ReactNode;
}

/**
 * Search input with a leading icon, an optional clear button, and a trailing
 * slot for the voice-search and assistant actions UX4G places there.
 *
 * The field is wrapped in a label, so clicking anywhere focuses the input
 * without a click handler.
 */
function Search({
  className,
  size,
  onClear,
  containerClassName,
  trailing,
  value,
  ...props
}: ISearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const iconSize = ICON_SIZES[size ?? 'md'];

  return (
    <label className={cn(SEARCH_VARIANTS({ size, className: containerClassName }))}>
      <SearchIcon className={cn('shrink-0 text-neutral-600', iconSize)} aria-hidden />
      <input
        ref={inputRef}
        type='search'
        className={cn(
          'placeholder:text-disabled flex-1 bg-transparent outline-none',
          // Hide the browser's native "x" clear control on type=search inputs.
          // We render our own button so we don't want two of them.
          '[&::-ms-clear]:hidden [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none',
          className,
        )}
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
          <X className={cn('shrink-0', iconSize)} aria-hidden />
        </button>
      )}
      {trailing}
    </label>
  );
}

export { Search, SEARCH_VARIANTS };

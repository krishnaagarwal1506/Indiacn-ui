/* eslint-disable eslint-frontend-rules/enforce-typography-components */
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { ComponentProps } from 'react';

import { cn } from '@/utils';

function Pagination({ className, ...props }: ComponentProps<'nav'>) {
  return (
    <nav
      role='navigation'
      aria-label='pagination'
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  );
}

function PaginationContent({ className, ...props }: ComponentProps<'ul'>) {
  return <ul className={cn('flex flex-row items-center gap-1', className)} {...props} />;
}

function PaginationItem({ className, ...props }: ComponentProps<'li'>) {
  return <li className={cn('', className)} {...props} />;
}

interface IPaginationLinkProps extends ComponentProps<'a'> {
  isActive?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

function PaginationLink({
  className,
  isActive,
  disabled,
  size = 'md',
  ...props
}: IPaginationLinkProps) {
  const sizeClasses = {
    sm: 'h-8 min-w-8 text-xs',
    md: 'h-9 min-w-9 text-sm',
    lg: 'h-10 min-w-10 text-base',
  };

  return (
    <a
      aria-current={isActive ? 'page' : undefined}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
      className={cn(
        'inline-flex items-center justify-center rounded-md px-3 transition-colors',
        sizeClasses[size],
        isActive
          ? 'bg-primary text-neutral-0 pointer-events-none'
          : 'hover:bg-neutral-100 dark:hover:bg-neutral-800',
        disabled && 'pointer-events-none opacity-50',
        className,
      )}
      {...props}
    />
  );
}

function PaginationPrevious({ className, ...props }: ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink aria-label='Go to previous page' className={cn('gap-1', className)} {...props}>
      <ChevronLeft className='size-4' />
      <span>Previous</span>
    </PaginationLink>
  );
}

function PaginationNext({ className, ...props }: ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink aria-label='Go to next page' className={cn('gap-1', className)} {...props}>
      <span>Next</span>
      <ChevronRight className='size-4' />
    </PaginationLink>
  );
}

function PaginationEllipsis({ className, ...props }: ComponentProps<'span'>) {
  return (
    <span
      aria-hidden
      className={cn('flex h-9 w-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontal className='size-4' />
      <span className='sr-only'>More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};

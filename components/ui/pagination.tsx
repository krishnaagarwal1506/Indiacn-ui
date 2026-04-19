import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { ComponentProps } from 'react';

import { Label2 } from '@/components/ui/typography';
import { cn } from '@/utils';

/*
 * UX4G pagination:
 * Default: bordered, padding 0.375rem 0.75rem, border 1px solid #dee2e6, border-radius 0.375rem,
 *   link color #613AF5, hover bg #e9ecef, active bg #613AF5 text #fff, disabled color #938BB6
 * Flat: no border, 32x32px items, border-radius 8px, active has 1px border #613AF5
 * Sizes: sm (0.25rem 0.5rem), lg (0.75rem 1.5rem)
 */

/** Navigation pagination component. */
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

/** Container list for pagination items. */
function PaginationContent({ className, ...props }: ComponentProps<'ul'>) {
  return (
    <ul
      className={cn('flex flex-row items-center', className)}
      style={{ listStyle: 'none', paddingLeft: 0 }}
      {...props}
    />
  );
}

/** Single pagination list item wrapper. */
function PaginationItem({ className, ...props }: ComponentProps<'li'>) {
  return <li className={cn('', className)} {...props} />;
}

interface IPaginationLinkProps extends ComponentProps<'a'> {
  isActive?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'flat';
}

/**
 * UX4G page-link: bordered by default, active uses primary bg.
 */
function PaginationLink({
  className,
  isActive,
  disabled,
  size = 'md',
  variant = 'default',
  children,
  ...props
}: IPaginationLinkProps) {
  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-1.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  if (variant === 'flat') {
    return (
      <a
        aria-current={isActive ? 'page' : undefined}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        className={cn(
          'mx-0.5 flex size-8 items-center justify-center rounded-lg text-sm text-neutral-600 transition-[color,background-color,border-color,box-shadow] duration-150',
          isActive && 'border-primary text-neutral border font-bold',
          disabled && 'pointer-events-none text-neutral-600',
          !isActive && !disabled && 'hover:bg-neutral-100',
          className,
        )}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      aria-current={isActive ? 'page' : undefined}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
      className={cn(
        'text-primary relative -ml-px inline-flex items-center justify-center border border-neutral-200 no-underline transition-[color,background-color,border-color,box-shadow] duration-150 first:ml-0 first:rounded-l-[0.375rem] last:rounded-r-[0.375rem]',
        sizeClasses[size],
        isActive
          ? 'border-primary bg-primary z-3 text-white'
          : 'hover:text-primary-400 bg-neutral-0 hover:z-2 hover:bg-neutral-100',
        disabled && 'text-secondary bg-neutral-0 pointer-events-none',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

/** Previous page navigation link. */
function PaginationPrevious({
  className,
  children,
  ...props
}: ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink aria-label='Go to previous page' className={cn('gap-1', className)} {...props}>
      <ChevronLeft className='size-4' />
      {children ?? <Label2>Previous</Label2>}
    </PaginationLink>
  );
}

/** Next page navigation link. */
function PaginationNext({ className, children, ...props }: ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink aria-label='Go to next page' className={cn('gap-1', className)} {...props}>
      {children ?? <Label2>Next</Label2>}
      <ChevronRight className='size-4' />
    </PaginationLink>
  );
}

/** Ellipsis indicator for truncated page ranges. */
function PaginationEllipsis({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      aria-hidden
      className={cn('flex h-9 w-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontal className='size-4' />
      <Label2 className='sr-only'>More pages</Label2>
    </div>
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

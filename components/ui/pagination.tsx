'use client';

import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { ComponentProps, createContext, useContext, useMemo } from 'react';

import { Label2 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

type TPaginationSize = 'sm' | 'md' | 'lg';
type TPaginationVariant = 'default' | 'flat';

const PAGINATION_CONTEXT = createContext<{ size: TPaginationSize; variant: TPaginationVariant }>({
  size: 'md',
  variant: 'default',
});

/** Navigation pagination component. */
function Pagination({
  className,
  size = 'md',
  variant = 'default',
  ...props
}: ComponentProps<'nav'> & { size?: TPaginationSize; variant?: TPaginationVariant }) {
  const contextValue = useMemo(() => ({ size, variant }), [size, variant]);

  return (
    <PAGINATION_CONTEXT.Provider value={contextValue}>
      <nav
        role='navigation'
        aria-label='pagination'
        className={cn('mx-auto flex w-full justify-center', className)}
        {...props}
      />
    </PAGINATION_CONTEXT.Provider>
  );
}

/** Container list for pagination items. */
function PaginationContent({ className, ...props }: ComponentProps<'ul'>) {
  const { variant } = useContext(PAGINATION_CONTEXT);

  return (
    <ul
      className={cn(
        'flex list-none flex-row items-center pl-0',
        variant === 'flat'
          ? 'gap-1.5'
          : // The `first:`/`last:` Tailwind selectors compile to :first-child/:last-child.
            // Each <a> is the only child of its <li>, so applying them on the link
            // matches every link. Apply them at the <ul> level via descendant
            // selectors so only the actual edge items get rounded corners.
            'gap-0 [&>li:first-child>*]:rounded-l-md [&>li:last-child>*]:rounded-r-md',
        className,
      )}
      {...props}
    />
  );
}

/** Single pagination list item wrapper. */
function PaginationItem({ className, ...props }: ComponentProps<'li'>) {
  return <li className={cn('list-none', className)} {...props} />;
}

interface IPaginationLinkProps extends ComponentProps<'a'> {
  isActive?: boolean;
  disabled?: boolean;
  size?: TPaginationSize;
  variant?: TPaginationVariant;
}

const PAGINATION_SIZE_CLASSES: Record<TPaginationVariant, Record<TPaginationSize, string>> = {
  default: {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-1.5 text-base',
    lg: 'px-6 py-3 text-lg',
  },
  flat: {
    sm: 'size-7 text-sm',
    md: 'size-8 text-base',
    lg: 'size-10 text-lg',
  },
};

/** UX4G-style page link with default and flat variants. */
function PaginationLink({
  className,
  isActive,
  disabled,
  size,
  variant,
  children,
  ...props
}: IPaginationLinkProps) {
  const pagination = useContext(PAGINATION_CONTEXT);
  const resolvedSize = size ?? pagination.size;
  const resolvedVariant = variant ?? pagination.variant;

  if (resolvedVariant === 'flat') {
    return (
      <a
        aria-current={isActive ? 'page' : undefined}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        className={cn(
          'focus-visible:shadow-focus-primary inline-flex items-center justify-center rounded-lg border border-transparent bg-transparent no-underline transition-[color,background-color,border-color,box-shadow] duration-150 focus-visible:outline-none',
          PAGINATION_SIZE_CLASSES.flat[resolvedSize],
          isActive
            ? 'border-primary text-neutral bg-transparent font-bold'
            : 'hover:text-neutral text-neutral-600 hover:bg-neutral-100',
          disabled && 'pointer-events-none text-neutral-400',
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
        'text-primary focus-visible:shadow-focus-primary bg-neutral-0 relative -ml-px inline-flex items-center justify-center border border-neutral-200 no-underline transition-[color,background-color,border-color,box-shadow] duration-150 focus-visible:z-10 focus-visible:outline-none',
        PAGINATION_SIZE_CLASSES.default[resolvedSize],
        isActive
          ? 'border-primary bg-primary text-primary-foreground z-3'
          : 'hover:text-primary hover:z-2 hover:bg-neutral-100',
        disabled && 'pointer-events-none text-neutral-400',
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
    <PaginationLink
      aria-label='Go to previous page'
      className={cn('gap-1.5', className)}
      {...props}
    >
      <ChevronLeft className='size-4' />
      {children ?? <Label2>Previous</Label2>}
    </PaginationLink>
  );
}

/** Next page navigation link. */
function PaginationNext({ className, children, ...props }: ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink aria-label='Go to next page' className={cn('gap-1.5', className)} {...props}>
      {children ?? <Label2>Next</Label2>}
      <ChevronRight className='size-4' />
    </PaginationLink>
  );
}

/** Ellipsis indicator for truncated page ranges. */
function PaginationEllipsis({ className, ...props }: ComponentProps<'div'>) {
  const { size, variant } = useContext(PAGINATION_CONTEXT);

  return (
    <div
      aria-hidden
      className={cn(
        variant === 'flat'
          ? 'inline-flex items-center justify-center rounded-lg text-neutral-600'
          : 'bg-neutral-0 relative -ml-px inline-flex items-center justify-center border border-neutral-200 text-neutral-600',
        PAGINATION_SIZE_CLASSES[variant][size],
        className,
      )}
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

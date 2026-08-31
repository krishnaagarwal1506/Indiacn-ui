'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ComponentProps, createContext, useContext, useMemo } from 'react';

import { Label2 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

type TPaginationSize = 'sm' | 'md' | 'lg';
/**
 * `flat` is UX4G's pagination: separate 32px rounded squares. `joined` is the
 * Bootstrap-style shared-border row, which UX4G does not define; `default` is
 * kept as a deprecated alias for it.
 */
type TPaginationVariant = 'flat' | 'joined' | 'default';
type TResolvedVariant = 'flat' | 'joined';

/** Maps the deprecated `default` value onto `joined`. */
function resolveVariant(variant: TPaginationVariant): TResolvedVariant {
  return variant === 'default' ? 'joined' : variant;
}

const PAGINATION_CONTEXT = createContext<{ size: TPaginationSize; variant: TResolvedVariant }>({
  size: 'md',
  variant: 'flat',
});

/*
 * UX4G pagination: 32px pages at radius 8px, px-2 py-1.5, 2px gaps. Inactive is
 * plain neutral-600 text; selected is white with a primary border at weight 500;
 * hover draws a neutral-300 border. The `joined` variant's shared borders are a
 * Bootstrap pattern with no UX4G counterpart, so it borrows the same 28/32/40px
 * heights rather than sizing itself from its own text.
 */

/** Navigation pagination component. */
function Pagination({
  className,
  size = 'md',
  variant = 'flat',
  ...props
}: ComponentProps<'nav'> & { size?: TPaginationSize; variant?: TPaginationVariant }) {
  const resolved = resolveVariant(variant);
  const contextValue = useMemo(() => ({ size, variant: resolved }), [size, resolved]);

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
          ? 'gap-0.5'
          : // The `first:`/`last:` Tailwind selectors compile to :first-child/:last-child.
            // Each <a> is the only child of its <li>, so applying them on the link
            // matches every link. Apply them at the <ul> level via descendant
            // selectors so only the actual edge items get rounded corners.
            'gap-0 [&>li:first-child>*]:rounded-l-md [&>li:last-child>*]:rounded-r-md [&>li:not(:first-child)>*]:-ml-px',
        className,
      )}
      {...props}
    />
  );
}

/**
 * Single pagination list item wrapper. Laid out as flex so the link is a flex
 * item rather than an inline box: an icon-led link and a digit-led link resolve
 * different baselines, which otherwise offsets them from each other.
 */
function PaginationItem({ className, ...props }: ComponentProps<'li'>) {
  return <li className={cn('flex list-none', className)} {...props} />;
}

interface IPaginationLinkProps extends ComponentProps<'a'> {
  isActive?: boolean;
  disabled?: boolean;
  size?: TPaginationSize;
  variant?: TPaginationVariant;
}

const PAGINATION_SIZE_CLASSES: Record<TResolvedVariant, Record<TPaginationSize, string>> = {
  joined: {
    sm: 'h-7 min-w-7 px-1.5 text-xs',
    md: 'h-8 min-w-8 px-2 text-sm',
    lg: 'h-10 min-w-10 px-3 text-base',
  },
  flat: {
    sm: 'size-7 text-xs tracking-[0.25px]',
    md: 'size-8 text-sm tracking-[0.25px]',
    lg: 'size-10 text-base tracking-[0.25px]',
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
  const resolvedVariant = variant ? resolveVariant(variant) : pagination.variant;

  if (resolvedVariant === 'flat') {
    return (
      <a
        aria-current={isActive ? 'page' : undefined}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        className={cn(
          'focus-visible:shadow-focus-primary inline-flex items-center justify-center rounded-md border border-transparent bg-transparent no-underline transition-[color,background-color,border-color,box-shadow] duration-150 focus-visible:outline-none',
          PAGINATION_SIZE_CLASSES.flat[resolvedSize],
          isActive
            ? 'border-primary bg-neutral-0 text-neutral font-medium tracking-[0.1px]'
            : 'hover:text-neutral text-neutral-600 hover:border-neutral-300',
          disabled && 'text-disabled pointer-events-none',
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
        'focus-visible:shadow-focus-primary bg-neutral-0 relative inline-flex items-center justify-center border border-neutral-200 text-neutral-600 no-underline transition-[color,background-color,border-color,box-shadow] duration-150 focus-visible:z-10 focus-visible:outline-none',
        PAGINATION_SIZE_CLASSES.joined[resolvedSize],
        isActive
          ? 'border-primary bg-primary text-primary-foreground z-3'
          : 'hover:text-primary hover:z-2 hover:bg-neutral-100',
        disabled && 'text-disabled pointer-events-none',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

/**
 * Previous page navigation link. In the flat variant it sits 8px from the page
 * numbers, which are only 2px apart from each other, per UX4G.
 */
function PaginationPrevious({
  className,
  children,
  ...props
}: ComponentProps<typeof PaginationLink>) {
  const { variant } = useContext(PAGINATION_CONTEXT);

  return (
    <PaginationLink
      aria-label='Go to previous page'
      className={cn('gap-1.5', variant === 'flat' && 'mr-1.5 h-8 w-auto px-2', className)}
      {...props}
    >
      <ChevronLeft className='size-4 shrink-0' aria-hidden />
      {children ?? <Label2>Previous</Label2>}
    </PaginationLink>
  );
}

/** Next page navigation link. Mirrors PaginationPrevious's spacing. */
function PaginationNext({ className, children, ...props }: ComponentProps<typeof PaginationLink>) {
  const { variant } = useContext(PAGINATION_CONTEXT);

  return (
    <PaginationLink
      aria-label='Go to next page'
      className={cn('gap-1.5', variant === 'flat' && 'ml-1.5 h-8 w-auto px-2', className)}
      {...props}
    >
      {children ?? <Label2>Next</Label2>}
      <ChevronRight className='size-4 shrink-0' aria-hidden />
    </PaginationLink>
  );
}

/**
 * Ellipsis for truncated page ranges. UX4G renders it as a page-shaped "..."
 * rather than an icon, so it lines up with the numbers either side.
 */
function PaginationEllipsis({ className, ...props }: ComponentProps<'div'>) {
  const { size, variant } = useContext(PAGINATION_CONTEXT);

  return (
    <div
      className={cn(
        variant === 'flat'
          ? 'inline-flex items-center justify-center rounded-md text-neutral-600'
          : 'bg-neutral-0 relative inline-flex items-center justify-center border border-neutral-200 text-neutral-600',
        PAGINATION_SIZE_CLASSES[variant][size],
        className,
      )}
      {...props}
    >
      <Label2 aria-hidden>...</Label2>
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

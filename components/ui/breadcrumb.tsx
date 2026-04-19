import { MoreHorizontal } from 'lucide-react';
import { ComponentProps } from 'react';

import { Body2, Label2 } from '@/components/ui/typography';
import { cn } from '@/utils';

/* UX4G breadcrumb: divider "/", divider-color #727272, active-color #1C1D1F, link-color #727272 */

/**
 * Root navigation container for breadcrumb trails.
 */
function Breadcrumb({ ...props }: ComponentProps<'nav'>) {
  return <nav aria-label='breadcrumb' {...props} />;
}

/**
 * Ordered list container for breadcrumb items.
 * UX4G: display flex, flex-wrap, padding 0, margin-bottom 1rem, list-style none.
 */
function BreadcrumbList({ className, ...props }: ComponentProps<'ol'>) {
  return (
    <ol
      className={cn('mb-4 flex flex-wrap items-center gap-2 p-0 wrap-break-word', className)}
      style={{ listStyle: 'none' }}
      {...props}
    />
  );
}

/**
 * Individual breadcrumb item wrapper.
 */
function BreadcrumbItem({ className, ...props }: ComponentProps<'li'>) {
  return <li className={cn('inline-flex items-center gap-2', className)} {...props} />;
}

/**
 * Link element for navigable breadcrumb items.
 * UX4G: color #727272, no underline.
 */
function BreadcrumbLink({ className, children, ...props }: ComponentProps<'a'>) {
  return (
    <a
      className={cn(
        'text-neutral-500 no-underline transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100',
        className,
      )}
      {...props}
    >
      <Body2>{children}</Body2>
    </a>
  );
}

/**
 * Non-interactive element for the current page in breadcrumb.
 * UX4G: color #1C1D1F, aria-current="page".
 */
function BreadcrumbPage({ className, children, ...props }: ComponentProps<'span'>) {
  return (
    <Label2
      aria-current='page'
      className={cn('text-[#1C1D1F] dark:text-neutral-100', className)}
      {...props}
    >
      <Body2 className='font-medium'>{children}</Body2>
    </Label2>
  );
}

/**
 * Visual separator between breadcrumb items.
 * UX4G default divider: "/" in color #727272.
 */
function BreadcrumbSeparator({ children, className, ...props }: ComponentProps<'li'>) {
  return (
    <li
      role='presentation'
      aria-hidden='true'
      className={cn('text-neutral-500 dark:text-neutral-400 [&>svg]:size-3.5', className)}
      {...props}
    >
      {children ?? <Body2>/</Body2>}
    </li>
  );
}

/**
 * Ellipsis indicator for collapsed breadcrumb items.
 */
function BreadcrumbEllipsis({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      role='presentation'
      aria-hidden='true'
      className={cn('flex size-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontal className='size-4' />
      <Label2 className='sr-only'>More</Label2>
    </div>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};

import { ComponentProps } from 'react';

import { Body2, Label1, Label2 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

/*
 * UX4G breadcrumb: links are body-2 in neutral-600, the current page is
 * label-1 in neutral, separators are neutral-600, and a chevron divider is 6px.
 */

/** Root navigation container for breadcrumb trails. */
function Breadcrumb({ ...props }: ComponentProps<'nav'>) {
  return <nav aria-label='breadcrumb' {...props} />;
}

/** Ordered list container for breadcrumb items. */
function BreadcrumbList({ className, ...props }: ComponentProps<'ol'>) {
  return (
    <ol
      className={cn('flex list-none flex-wrap items-center gap-2 p-0 wrap-break-word', className)}
      {...props}
    />
  );
}

/** Individual breadcrumb item wrapper. */
function BreadcrumbItem({ className, ...props }: ComponentProps<'li'>) {
  return <li className={cn('inline-flex items-center gap-2', className)} {...props} />;
}

/** Link element for navigable breadcrumb items. */
function BreadcrumbLink({ className, children, ...props }: ComponentProps<'a'>) {
  return (
    <a
      className={cn(
        'hover:text-neutral text-neutral-600 no-underline transition-colors',
        className,
      )}
      {...props}
    >
      <Body2>{children}</Body2>
    </a>
  );
}

/** Non-interactive element for the current page in breadcrumb. */
function BreadcrumbPage({ className, children, ...props }: ComponentProps<'p'>) {
  return (
    <Label1 aria-current='page' className={cn('text-neutral', className)} {...props}>
      {children}
    </Label1>
  );
}

/** Visual separator between breadcrumb items. */
function BreadcrumbSeparator({ children, className, ...props }: ComponentProps<'li'>) {
  return (
    <li
      role='presentation'
      aria-hidden='true'
      className={cn('text-neutral-600 [&>svg]:size-1.5', className)}
      {...props}
    >
      {children ?? <Body2>/</Body2>}
    </li>
  );
}

/** Ellipsis indicator for collapsed breadcrumb items. */
function BreadcrumbEllipsis({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div role='presentation' className={cn('text-neutral-600', className)} {...props}>
      <Body2 aria-hidden='true'>...</Body2>
      <Label2 className='sr-only'>More pages</Label2>
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

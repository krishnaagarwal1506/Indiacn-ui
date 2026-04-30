import { MoreHorizontal } from 'lucide-react';
import { ComponentProps } from 'react';

import { Body2, Label2 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

/* UX4G breadcrumb: divider "/", divider-color neutral-500, active-color neutral, link-color neutral-500 */

/** Root navigation container for breadcrumb trails. */
function Breadcrumb({ ...props }: ComponentProps<'nav'>) {
  return <nav aria-label='breadcrumb' {...props} />;
}

/** Ordered list container for breadcrumb items. */
function BreadcrumbList({ className, ...props }: ComponentProps<'ol'>) {
  return (
    <ol
      className={cn(
        'mb-4 flex list-none flex-wrap items-center gap-2 p-0 wrap-break-word',
        className,
      )}
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
        'hover:text-neutral text-neutral-500 no-underline transition-colors',
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
    <Body2 aria-current='page' className={cn('text-neutral font-medium', className)} {...props}>
      {children}
    </Body2>
  );
}

/** Visual separator between breadcrumb items. */
function BreadcrumbSeparator({ children, className, ...props }: ComponentProps<'li'>) {
  return (
    <li
      role='presentation'
      aria-hidden='true'
      className={cn('text-neutral-500 [&>svg]:size-3.5', className)}
      {...props}
    >
      {children ?? <Body2>/</Body2>}
    </li>
  );
}

/** Ellipsis indicator for collapsed breadcrumb items. */
function BreadcrumbEllipsis({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      role='presentation'
      aria-hidden='true'
      className={cn('flex size-9 items-center justify-center text-neutral-500', className)}
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

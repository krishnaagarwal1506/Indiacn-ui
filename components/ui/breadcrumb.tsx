/* eslint-disable eslint-frontend-rules/enforce-typography-components */
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { ComponentProps } from 'react';

import { cn } from '@/utils';

function Breadcrumb({ ...props }: ComponentProps<'nav'>) {
  return <nav aria-label='breadcrumb' {...props} />;
}

function BreadcrumbList({ className, ...props }: ComponentProps<'ol'>) {
  return (
    <ol
      className={cn(
        'flex flex-wrap items-center gap-1.5 text-sm break-words text-neutral-500 sm:gap-2.5',
        className,
      )}
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }: ComponentProps<'li'>) {
  return <li className={cn('inline-flex items-center gap-1.5', className)} {...props} />;
}

function BreadcrumbLink({ className, ...props }: ComponentProps<'a'>) {
  return (
    <a
      className={cn(
        'text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100',
        className,
      )}
      {...props}
    />
  );
}

function BreadcrumbPage({ className, ...props }: ComponentProps<'span'>) {
  return (
    <span
      role='link'
      aria-disabled='true'
      aria-current='page'
      className={cn('font-medium text-neutral-900 dark:text-neutral-100', className)}
      {...props}
    />
  );
}

function BreadcrumbSeparator({ children, className, ...props }: ComponentProps<'li'>) {
  return (
    <li
      role='presentation'
      aria-hidden='true'
      className={cn('[&>svg]:size-3.5', className)}
      {...props}
    >
      {children ?? <ChevronRight className='size-3.5' />}
    </li>
  );
}

function BreadcrumbEllipsis({ className, ...props }: ComponentProps<'span'>) {
  return (
    <span
      role='presentation'
      aria-hidden='true'
      className={cn('flex size-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontal className='size-4' />
      <span className='sr-only'>More</span>
    </span>
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

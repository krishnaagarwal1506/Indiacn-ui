import { ComponentProps, ReactNode } from 'react';

import { Body2, Label1, Label2 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

/*
 * UX4G footer: a white body over a 52px primary bottom strip. The body holds a
 * brand column with 28px circular social links, link columns, and space for
 * department attribution; the strip holds the copyright and policy links.
 */

/** Footer root. Renders the landmark, so no wrapper element is needed. */
function Footer({ className, ...props }: ComponentProps<'footer'>) {
  return <footer className={cn('bg-neutral-0 w-full', className)} {...props} />;
}

/** The white body. Lay columns out inside it. */
function FooterBody({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cn('border-t border-neutral-100', className)} {...props}>
      <div className='mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,3fr)_minmax(0,1.2fr)]'>
        {children}
      </div>
    </div>
  );
}

/** Brand column: a logo slot, a tagline, and usually FooterSocial beneath. */
function FooterBrand({
  className,
  tagline,
  children,
  ...props
}: ComponentProps<'div'> & { tagline?: ReactNode }) {
  return (
    <div className={cn('flex flex-col gap-4', className)} {...props}>
      {children}
      {tagline && <Body2 className='max-w-[280px] text-neutral-600'>{tagline}</Body2>}
    </div>
  );
}

/** Row of social links. Wraps, because there are usually more than fit. */
function FooterSocial({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('flex flex-wrap gap-2.5', className)} {...props} />;
}

interface IFooterSocialLinkProps extends ComponentProps<'a'> {
  /** Required: an icon-only link is nameless without it. */
  label: string;
}

/** One 28px circular social link. */
function FooterSocialLink({ className, label, children, ...props }: IFooterSocialLinkProps) {
  return (
    <a
      aria-label={label}
      className={cn(
        'focus-visible:shadow-focus-primary hover:border-primary hover:text-primary inline-flex size-7 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-colors focus-visible:outline-none [&>svg]:size-3.5',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

/** Grid of link columns. */
function FooterColumns({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4', className)}
      {...props}
    />
  );
}

/** One link column. `title` becomes the list's accessible name. */
function FooterColumn({
  className,
  title,
  children,
  ...props
}: ComponentProps<'nav'> & { title: string }) {
  return (
    <nav aria-label={title} className={cn('flex flex-col gap-3', className)} {...props}>
      <Label1 className='text-neutral font-semibold'>{title}</Label1>
      <ul className='flex list-none flex-col gap-2.5 p-0'>{children}</ul>
    </nav>
  );
}

/** One link within a column. Renders its own list item. */
function FooterLink({ className, children, ...props }: ComponentProps<'a'>) {
  return (
    <li className='list-none'>
      <a
        className={cn(
          'focus-visible:shadow-focus-primary hover:text-primary rounded-sm text-neutral-600 no-underline transition-colors hover:underline focus-visible:outline-none',
          className,
        )}
        {...props}
      >
        <Body2>{children}</Body2>
      </a>
    </li>
  );
}

/** Attribution column, for department marks and "powered by" content. */
function FooterAttribution({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('flex flex-col gap-3', className)} {...props} />;
}

/**
 * The 52px primary strip.
 *
 * `children` sits on the left, `actions` on the right — policy links, usually.
 */
function FooterBottom({
  className,
  actions,
  children,
  ...props
}: ComponentProps<'div'> & { actions?: ReactNode }) {
  return (
    <div className={cn('bg-primary text-primary-foreground', className)} {...props}>
      <div className='mx-auto flex min-h-13 max-w-[1440px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3 sm:px-6'>
        <Label2>{children}</Label2>
        {actions && <div className='flex flex-wrap items-center gap-x-6 gap-y-2'>{actions}</div>}
      </div>
    </div>
  );
}

/** A link in the bottom strip. */
function FooterBottomLink({ className, children, ...props }: ComponentProps<'a'>) {
  return (
    <a
      className={cn(
        'focus-visible:shadow-focus-neutral rounded-sm no-underline transition-opacity hover:underline focus-visible:outline-none',
        className,
      )}
      {...props}
    >
      <Label2>{children}</Label2>
    </a>
  );
}

export {
  Footer,
  FooterBody,
  FooterBrand,
  FooterSocial,
  FooterSocialLink,
  FooterColumns,
  FooterColumn,
  FooterLink,
  FooterAttribution,
  FooterBottom,
  FooterBottomLink,
};

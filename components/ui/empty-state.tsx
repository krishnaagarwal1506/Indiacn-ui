import { ComponentProps } from 'react';

import { Body1 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

/*
 * UX4G empty state: centred column, 8px gap, 16px/24px copy. The default
 * illustration is UX4G's simple empty box, redrawn with theme tokens so it
 * works on a dark surface.
 */

/** Default illustration: UX4G's empty box, coloured from neutral tokens. */
function EmptyStateIllustration({ className, ...props }: ComponentProps<'svg'>) {
  return (
    <svg
      viewBox='0 0 64 40'
      width='64'
      height='40'
      fill='none'
      role='presentation'
      aria-hidden
      className={cn('shrink-0', className)}
      {...props}
    >
      <path
        className='fill-neutral-50'
        d='M32 39.7031C49.6731 39.7031 64 36.5923 64 32.755C64 28.9177 49.6731 25.807 32 25.807C14.3269 25.807 0 28.9177 0 32.755C0 36.5923 14.3269 39.7031 32 39.7031Z'
      />
      <path
        className='fill-none stroke-neutral-200'
        d='M55 13.6653L44.854 2.24866C44.367 1.47048 43.656 1 42.907 1H21.093C20.344 1 19.633 1.47048 19.146 2.24767L9 13.6663V22.8367H55V13.6653Z'
      />
      <path
        className='fill-neutral-0 stroke-neutral-200'
        d='M41.613 16.8127C41.613 15.2197 42.607 13.9045 43.84 13.9035H55V31.9059C55 34.0131 53.68 35.7402 52.05 35.7402H11.95C10.32 35.7402 9 34.0121 9 31.9059V13.9035H20.16C21.393 13.9035 22.387 15.2167 22.387 16.8098V16.8316C22.387 18.4247 23.392 19.7111 24.624 19.7111H39.376C40.608 19.7111 41.613 18.4128 41.613 16.8197V16.8127Z'
      />
    </svg>
  );
}

/** Centred placeholder shown when there is nothing to display. */
function EmptyState({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex flex-col items-center justify-center gap-2 text-center', className)}
      {...props}
    />
  );
}

/** Slot for the illustration. Renders the UX4G default when given no children. */
function EmptyStateMedia({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cn('flex items-center justify-center', className)} {...props}>
      {children ?? <EmptyStateIllustration />}
    </div>
  );
}

/** Primary message, e.g. "No applications yet". */
function EmptyStateTitle({ className, ...props }: ComponentProps<typeof Body1>) {
  return <Body1 className={cn('text-neutral', className)} {...props} />;
}

/** Supporting copy explaining what to do next. */
function EmptyStateDescription({ className, ...props }: ComponentProps<typeof Body1>) {
  return <Body1 className={cn('text-neutral-600', className)} {...props} />;
}

/** Row of actions. UX4G puts a single primary button here. */
function EmptyStateActions({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('flex items-center gap-3 pt-2', className)} {...props} />;
}

export {
  EmptyState,
  EmptyStateMedia,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateActions,
  EmptyStateIllustration,
};

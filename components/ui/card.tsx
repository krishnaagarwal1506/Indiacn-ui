import Image from 'next/image';
import { ComponentProps } from 'react';

import { Body2, Headline5 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

/*
 * UX4G card: border-radius 0.5rem, border 1px solid neutral-200, bg neutral-0,
 * card-body / card-header / card-footer padding 1rem, card-header border-bottom 1px,
 * card-footer border-top 1px, card-img-top border-radius calc(0.5rem - 1px)
 */

/** Card container component. */
function Card({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'bg-neutral-0 text-neutral flex flex-col rounded-lg border border-neutral-200',
        className,
      )}
      {...props}
    />
  );
}

/** Card header section. */
function CardHeader({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cn('text-neutral border-b border-neutral-200 p-4', className)} {...props} />
  );
}

/** Card title heading. */
function CardTitle({ className, ...props }: ComponentProps<'h3'>) {
  return <Headline5 className={cn('mb-2 tracking-tight', className)} {...props} />;
}

/** Card description text. */
function CardDescription({ className, ...props }: ComponentProps<'p'>) {
  return <Body2 className={cn('text-neutral-500', className)} {...props} />;
}

/** Card body content area. */
function CardContent({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('p-4', className)} {...props} />;
}

/** Card footer section. */
function CardFooter({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('text-neutral flex items-center border-t border-neutral-200 p-4', className)}
      {...props}
    />
  );
}

/** Card top image. */
function CardImage({ className, alt = '', ...props }: ComponentProps<typeof Image>) {
  return (
    <Image
      className={cn('w-full rounded-t-[calc(var(--radius)-1px)] object-cover', className)}
      alt={alt}
      {...props}
    />
  );
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardImage };

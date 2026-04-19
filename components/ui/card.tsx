import Image from 'next/image';
import { ComponentProps } from 'react';

import { Body2, Headline3 } from '@/components/ui/typography';
import { cn } from '@/utils';

/*
 * UX4G card: border-radius 0.5rem, border 1px solid rgba(0,0,0,0.175),
 * card-body padding 1rem, card-header/footer padding 1rem, bg rgba(255,255,255,1),
 * card-header border-bottom 1px solid rgba(0,0,0,0.175)
 * card-footer border-top 1px solid rgba(0,0,0,0.175)
 * card-title margin-bottom 1rem
 * card-img-top border-radius calc(0.5rem - 1px)
 */

/** Card container component. */
function Card({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('text-neutral bg-neutral-0 rounded-lg border border-black/17.5', className)}
      {...props}
    />
  );
}

/** Card header section. */
function CardHeader({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('text-neutral bg-neutral-0 border-b border-black/17.5 p-4', className)}
      {...props}
    />
  );
}

/** Card title heading. */
function CardTitle({ className, ...props }: ComponentProps<'h3'>) {
  return (
    <Headline3
      className={cn('mb-4 text-lg leading-none font-semibold tracking-tight', className)}
      {...props}
    />
  );
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
      className={cn(
        'text-neutral bg-neutral-0 flex items-center border-t border-black/17.5 p-4',
        className,
      )}
      {...props}
    />
  );
}

/** Card top image. */
function CardImage({ className, alt = '', ...props }: ComponentProps<typeof Image>) {
  return (
    <Image
      className={cn('w-full rounded-t-[calc(0.5rem-1px)] object-cover', className)}
      alt={alt}
      {...props}
    />
  );
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardImage };

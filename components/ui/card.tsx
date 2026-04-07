/* eslint-disable eslint-frontend-rules/enforce-typography-components */
import { ComponentProps } from 'react';

import { cn } from '@/utils';

function Card({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'bg-neutral-0 text-neutral rounded-lg border border-neutral-200 shadow-sm dark:border-neutral-700 dark:bg-neutral-900',
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />;
}

function CardTitle({ className, ...props }: ComponentProps<'h3'>) {
  return (
    <h3 className={cn('text-lg leading-none font-semibold tracking-tight', className)} {...props} />
  );
}

function CardDescription({ className, ...props }: ComponentProps<'p'>) {
  return (
    <p className={cn('text-sm text-neutral-500 dark:text-neutral-400', className)} {...props} />
  );
}

function CardContent({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('p-6 pt-0', className)} {...props} />;
}

function CardFooter({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('flex items-center p-6 pt-0', className)} {...props} />;
}

function CardImage({ className, alt = '', ...props }: ComponentProps<'img'>) {
  return <img className={cn('w-full rounded-t-lg object-cover', className)} alt={alt} {...props} />;
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardImage };

import { cva, type VariantProps } from 'class-variance-authority';
import Image from 'next/image';
import { ComponentProps } from 'react';

import { Body2, Headline5 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

/*
 * UX4G card: radius 8px, 1px neutral-100 border, no section dividers. Header
 * and footer pad 16px, body 16px/12px. Elevated adds shadow-card.
 */
const CARD_VARIANTS = cva(
  'bg-neutral-0 text-neutral flex flex-col overflow-hidden rounded-md border border-neutral-100',
  {
    variants: {
      variant: {
        outlined: '',
        elevated: 'shadow-card',
      },
    },
    defaultVariants: {
      variant: 'outlined',
    },
  },
);

interface ICardProps extends ComponentProps<'div'>, VariantProps<typeof CARD_VARIANTS> {}

/** Card container. `elevated` adds the UX4G card shadow. */
function Card({ className, variant, ...props }: ICardProps) {
  return <div className={cn(CARD_VARIANTS({ variant }), className)} {...props} />;
}

/** Card header section. */
function CardHeader({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('text-neutral flex items-center p-4', className)} {...props} />;
}

/** Card title heading. */
function CardTitle({ className, ...props }: ComponentProps<'h3'>) {
  return <Headline5 className={className} {...props} />;
}

/** Card description text. */
function CardDescription({ className, ...props }: ComponentProps<'p'>) {
  return <Body2 className={cn('text-neutral-600', className)} {...props} />;
}

/** Card body content area. */
function CardContent({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('px-4 py-3', className)} {...props} />;
}

/** Card footer section. Content is right-aligned with a 12px gap, per UX4G. */
function CardFooter({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('text-neutral flex items-center justify-end gap-3 p-4', className)}
      {...props}
    />
  );
}

/** Card top image. */
function CardImage({ className, alt = '', ...props }: ComponentProps<typeof Image>) {
  return <Image className={cn('w-full object-cover', className)} alt={alt} {...props} />;
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardImage,
  CARD_VARIANTS,
};

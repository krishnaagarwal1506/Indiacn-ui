import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { Label3 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

/*
 * UX4G badge indicator: 6px dot, 16px single-digit circle, 22x16 multi-digit
 * pill, text pill at 8px/2px padding. Type comes from Label3 (11px/16px/0.5px).
 */
const INDICATOR_VARIANTS = cva(
  'inline-flex shrink-0 items-center justify-center rounded-full text-center align-middle whitespace-nowrap',
  {
    variants: {
      theme: {
        primary: 'bg-primary text-primary-foreground',
        success: 'bg-success text-success-foreground',
        danger: 'bg-danger text-danger-foreground',
      },
      variant: {
        dot: 'size-1.5',
        count: 'h-4 min-w-4 px-1',
        text: 'h-5 px-2',
      },
    },
    defaultVariants: {
      theme: 'primary',
      variant: 'count',
    },
  },
);

interface IIndicatorProps
  extends ComponentProps<typeof Label3>,
    VariantProps<typeof INDICATOR_VARIANTS> {}

/**
 * Status or count indicator for attaching to another element. Use `dot` for
 * unread state, `count` for a number, and `text` for a short label.
 */
function Indicator({ className, theme, variant, children, ...props }: IIndicatorProps) {
  const isDot = variant === 'dot';

  return (
    <Label3
      className={cn(INDICATOR_VARIANTS({ theme, variant }), className)}
      role={isDot ? 'presentation' : undefined}
      {...props}
    >
      {isDot ? null : children}
    </Label3>
  );
}

export { Indicator, INDICATOR_VARIANTS };

/* eslint-disable eslint-frontend-rules/enforce-typography-components */
import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '@/utils';

const SPINNER_VARIANTS = cva('inline-block rounded-full', {
  variants: {
    theme: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      success: 'text-success',
      danger: 'text-danger',
      warning: 'text-warning',
      neutral: 'text-neutral',
    },
    variant: {
      border: 'animate-spin border-2 border-current border-t-transparent',
      grow: 'animate-pulse bg-current opacity-0 [animation:spinner-grow_0.75s_linear_infinite]',
    },
    size: {
      sm: 'size-4',
      md: 'size-8',
      lg: 'size-12',
    },
  },
  defaultVariants: {
    theme: 'primary',
    variant: 'border',
    size: 'md',
  },
});

interface ISpinnerProps extends ComponentProps<'div'>, VariantProps<typeof SPINNER_VARIANTS> {
  label?: string;
}

function Spinner({
  className,
  theme,
  variant,
  size,
  label = 'Loading...',
  ...props
}: ISpinnerProps) {
  return (
    <div
      role='status'
      className={cn(SPINNER_VARIANTS({ theme, variant, size, className }))}
      {...props}
    >
      <span className='sr-only'>{label}</span>
    </div>
  );
}

export { Spinner, SPINNER_VARIANTS };

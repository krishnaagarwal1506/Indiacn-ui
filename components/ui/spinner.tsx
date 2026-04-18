import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { Label2 } from '@/components/ui/typography';
import { cn } from '@/utils';

/* UX4G spinner: border-width 0.3em, size 2rem, animation 0.75s, sm size 1rem, sm border 0.2em */
const SPINNER_VARIANTS = cva('inline-block rounded-full align-[-0.125em]', {
  variants: {
    theme: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      success: 'text-success',
      danger: 'text-danger',
      warning: 'text-warning',
      info: 'text-info',
      light: 'text-neutral-100',
      dark: 'text-neutral-800',
      neutral: 'text-neutral',
    },
    variant: {
      border: 'animate-spin border-[0.3em] border-current border-r-transparent',
      grow: 'bg-current [animation:spinner-grow_0.75s_linear_infinite]',
    },
    size: {
      sm: 'size-4',
      md: 'size-8',
      lg: 'size-12',
    },
  },
  compoundVariants: [{ variant: 'border', size: 'sm', className: 'border-[0.2em]' }],
  defaultVariants: {
    theme: 'primary',
    variant: 'border',
    size: 'md',
  },
});

interface ISpinnerProps
  extends Omit<ComponentProps<'div'>, 'children'>,
    VariantProps<typeof SPINNER_VARIANTS> {
  label?: string;
}

/**
 * A loading spinner component for indicating async operations.
 * Matches the UX4G 2.0 Spinner specification.
 *
 * Supports:
 * - Theme colors: primary, secondary, success, danger, warning, info, light, dark, neutral
 * - Animation variants: border (spin) or grow (pulse)
 * - Three sizes: sm (1rem), md (2rem), lg (3rem)
 * - Accessible with screen reader label
 */
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
      <Label2 className='sr-only'>{label}</Label2>
    </div>
  );
}

export { Spinner, SPINNER_VARIANTS };

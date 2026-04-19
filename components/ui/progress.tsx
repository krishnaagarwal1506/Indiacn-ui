import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '@/utils';

/* UX4G progress: height 0.5rem, border-radius 5rem, bar bg #613AF5, transition width 0.6s ease */
const PROGRESS_BAR_VARIANTS = cva('h-full rounded-[5rem] transition-all duration-600 ease-in-out', {
  variants: {
    theme: {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      success: 'bg-success',
      danger: 'bg-danger',
      warning: 'bg-warning',
    },
    striped: {
      true: 'bg-[length:1rem_1rem] bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)]',
      false: '',
    },
    animated: {
      true: 'animate-[progress-bar-stripes_1s_linear_infinite]',
      false: '',
    },
  },
  defaultVariants: {
    theme: 'primary',
    striped: false,
    animated: false,
  },
});

interface IProgressProps extends ComponentProps<'div'> {
  value?: number;
  max?: number;
  height?: string;
  showLabel?: boolean;
}

interface IProgressBarProps
  extends ComponentProps<'div'>,
    VariantProps<typeof PROGRESS_BAR_VARIANTS> {
  value?: number;
}

/** Progress bar track container. */
function Progress({
  className,
  value = 0,
  max = 100,
  height,
  showLabel = false,
  children,
  ...props
}: IProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      className={cn('w-full overflow-hidden rounded-[5rem] bg-neutral-100', className)}
      style={{ height: height ?? '0.5rem' }}
      {...props}
    >
      {children ?? (
        <div
          className={cn(
            'bg-primary h-full rounded-[5rem] transition-all duration-600 ease-in-out',
            showLabel &&
              'text-neutral-0 flex items-center justify-center text-[0.625rem] font-medium',
          )}
          style={{ width: `${percentage}%` }}
        >
          {showLabel && `${Math.round(percentage)}%`}
        </div>
      )}
    </div>
  );
}

/** Individual progress bar segment with theme and animation support. */
function ProgressBar({
  className,
  theme,
  striped,
  animated,
  value = 0,
  children,
  ...props
}: IProgressBarProps) {
  return (
    <div
      className={cn(
        PROGRESS_BAR_VARIANTS({ theme, striped, animated, className }),
        children && 'text-neutral-0 flex items-center justify-center text-[0.625rem] font-medium',
      )}
      style={{ width: `${value}%` }}
      {...props}
    >
      {children}
    </div>
  );
}

export { Progress, ProgressBar, PROGRESS_BAR_VARIANTS };

import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

/*
 * UX4G progress: height 0.5rem, border-radius full (pill), bar bg primary,
 * transition width 0.6s ease. Sizes: xs (2px), sm (4px), md (8px), lg (16px), xl (24px).
 * Striped uses 1rem diagonal gradient with animated variant (progress-bar-stripes 1s linear).
 */
const PROGRESS_BAR_VARIANTS = cva('h-full rounded-full transition-all duration-600 ease-in-out', {
  variants: {
    theme: {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      success: 'bg-success',
      danger: 'bg-danger',
      warning: 'bg-warning',
      info: 'bg-info',
      neutral: 'bg-neutral',
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

type TProgressSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const PROGRESS_SIZES: Record<TProgressSize, string> = {
  xs: 'h-0.5',
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-4',
  xl: 'h-6',
};

interface IProgressProps extends ComponentProps<'div'> {
  value?: number;
  max?: number;
  size?: TProgressSize;
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
  size = 'md',
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
      className={cn(
        'w-full overflow-hidden rounded-full bg-neutral-100',
        !height && PROGRESS_SIZES[size],
        className,
      )}
      style={height ? { height } : undefined}
      {...props}
    >
      {children ?? (
        <div
          className={cn(
            'bg-primary h-full rounded-full transition-all duration-600 ease-in-out',
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

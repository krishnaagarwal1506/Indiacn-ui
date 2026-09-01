import { ComponentProps } from 'react';

import { Body2, Label1 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

/*
 * UX4G progress circle: 64/160/200/240/280px, stroke a flat 10% of the
 * diameter, neutral-50 track and a primary arc with a round cap. The circle
 * starts at twelve o'clock; the half circle spans the top 180 degrees from
 * nine o'clock.
 */
const DIAMETERS = { xxs: 64, xs: 160, sm: 200, md: 240, lg: 280 } as const;

/** Cap heights measured off the Figma symbols resolve to this ladder. */
const VALUE_CLASSES = {
  xxs: 'text-sm',
  xs: 'text-2xl',
  sm: 'text-3xl',
  md: 'text-4xl',
  lg: 'text-5xl',
} as const;

const LABEL_CLASSES = {
  xxs: 'text-xs',
  xs: 'text-sm',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-base',
} as const;

type TProgressCircleSize = keyof typeof DIAMETERS;
type TProgressCircleShape = 'circle' | 'half';

interface IProgressCircleProps extends Omit<ComponentProps<'div'>, 'children'> {
  value?: number;
  max?: number;
  size?: TProgressCircleSize;
  shape?: TProgressCircleShape;
  /** Caption shown with the value. Below the ring at `xxs`, inside it otherwise. */
  label?: string;
  showValue?: boolean;
}

/** Circular or half-circular progress indicator. */
function ProgressCircle({
  className,
  value = 0,
  max = 100,
  size = 'md',
  shape = 'circle',
  label,
  showValue = true,
  ...props
}: IProgressCircleProps) {
  const diameter = DIAMETERS[size];
  const stroke = Math.round(diameter * 0.1);
  const radius = (diameter - stroke) / 2;
  const centre = diameter / 2;
  const isHalf = shape === 'half';

  const percent = Math.min(Math.max((value / max) * 100, 0), 100);
  const length = (isHalf ? Math.PI : 2 * Math.PI) * radius;
  const height = isHalf ? centre + stroke / 2 : diameter;

  // Half sweeps left-to-right over the top; full starts at twelve o'clock.
  const track = isHalf
    ? `M ${stroke / 2} ${centre} A ${radius} ${radius} 0 0 1 ${diameter - stroke / 2} ${centre}`
    : undefined;

  const shared = {
    fill: 'none',
    strokeWidth: stroke,
    strokeLinecap: 'round' as const,
  };

  const captionInside = Boolean(label) && size !== 'xxs';

  return (
    <div className={cn('inline-flex flex-col items-center', className)} {...props}>
      <div className='relative' style={{ width: diameter, height }}>
        <svg width={diameter} height={height} viewBox={`0 0 ${diameter} ${height}`} aria-hidden>
          {isHalf ? (
            <>
              <path d={track} className='stroke-neutral-50' {...shared} />
              <path
                d={track}
                className='stroke-primary transition-[stroke-dashoffset] duration-600 ease-in-out'
                strokeDasharray={length}
                strokeDashoffset={length * (1 - percent / 100)}
                {...shared}
              />
            </>
          ) : (
            <>
              <circle cx={centre} cy={centre} r={radius} className='stroke-neutral-50' {...shared} />
              <circle
                cx={centre}
                cy={centre}
                r={radius}
                className='stroke-primary transition-[stroke-dashoffset] duration-600 ease-in-out'
                strokeDasharray={length}
                strokeDashoffset={length * (1 - percent / 100)}
                transform={`rotate(-90 ${centre} ${centre})`}
                {...shared}
              />
            </>
          )}
        </svg>

        <div
          role='progressbar'
          aria-valuenow={Math.round(percent)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={label ?? 'Progress'}
          className={cn(
            'absolute inset-0 flex flex-col justify-center text-center',
            isHalf ? 'justify-end pb-[6%]' : 'justify-center',
          )}
        >
          {captionInside && (
            <Body2 className={cn('text-neutral-600', LABEL_CLASSES[size])}>{label}</Body2>
          )}
          {showValue && (
            <Label1 className={cn('text-neutral font-semibold', VALUE_CLASSES[size])}>
              {Math.round(percent)}%
            </Label1>
          )}
        </div>
      </div>

      {label && size === 'xxs' && (
        <Body2 className={cn('mt-1 text-neutral-600', LABEL_CLASSES[size])}>{label}</Body2>
      )}
    </div>
  );
}

export type { TProgressCircleSize, TProgressCircleShape };

export { ProgressCircle };

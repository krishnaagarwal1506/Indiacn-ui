'use client';

import * as SliderPrimitive from '@radix-ui/react-slider';
import { ComponentProps, useMemo } from 'react';

import { Body1 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

/*
 * UX4G range slider: an 8px neutral-100 track, an 8px primary range, and 24px
 * white thumbs with a 1px primary border. The label variant puts each thumb's
 * value 13px beneath the track, the first left-aligned and the last
 * right-aligned so neither runs off the end.
 */
/** Default label format. Hoisted so it is not a new reference each render. */
const asPercent = (value: number) => `${value}%`;

interface ISliderProps extends Omit<ComponentProps<typeof SliderPrimitive.Root>, 'children'> {
  /** Shows each thumb's value beneath the track. */
  showLabels?: boolean;
  /** Formats a value for its label and for the thumb's accessible name. */
  formatValue?: (value: number) => string;
}

/**
 * Single or range slider, built on Radix so dragging, touch and keyboard
 * behaviour are not reimplemented.
 *
 * Pass two values for a range. Every thumb gets its own accessible name
 * through `formatValue`, because "50" alone tells a screen-reader user
 * nothing about what is being set.
 */
function Slider({
  className,
  showLabels = false,
  formatValue = asPercent,
  value,
  defaultValue,
  min = 0,
  max = 100,
  ...props
}: ISliderProps) {
  const values = useMemo(() => value ?? defaultValue ?? [min], [value, defaultValue, min]);

  return (
    <div className={cn('w-full', className)}>
      <SliderPrimitive.Root
        className='relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50'
        value={value}
        defaultValue={defaultValue}
        min={min}
        max={max}
        {...props}
      >
        <SliderPrimitive.Track className='relative h-2 w-full grow overflow-hidden rounded-full bg-neutral-100'>
          <SliderPrimitive.Range className='bg-primary absolute h-full' />
        </SliderPrimitive.Track>
        {values.map((_, i) => (
          <SliderPrimitive.Thumb
            key={i}
            aria-label={`${formatValue(values[i])}`}
            className='border-primary bg-neutral-0 focus-visible:shadow-focus-primary block size-6 cursor-grab rounded-full border transition-[box-shadow] focus-visible:outline-none active:cursor-grabbing'
          />
        ))}
      </SliderPrimitive.Root>

      {showLabels && (
        <div className='mt-3 flex justify-between'>
          {values.map((current, i) => (
            <Body1 key={i} className='text-neutral'>
              {formatValue(current)}
            </Body1>
          ))}
        </div>
      )}
    </div>
  );
}

export { Slider };

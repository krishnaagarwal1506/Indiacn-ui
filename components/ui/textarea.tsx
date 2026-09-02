'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentProps, useId } from 'react';

import { Body3 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

/*
 * UX4G input area: 94px tall at rest, 1px border at radius 8px, 4px focus ring,
 * resize handle, and a character counter beneath the right edge. Validation
 * states colour the border from the -500 step, matching Input.
 */
const TEXTAREA_VARIANTS = cva(
  'block w-full resize-y rounded-md border bg-neutral-0 px-3 py-2.5 text-sm transition-[color,background-color,border-color,box-shadow] duration-150 outline-none placeholder:text-neutral-500 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      state: {
        default:
          'border-neutral-200 hover:border-primary focus:border-primary-500 focus:shadow-focus-primary',
        error: 'border-danger-500 focus:shadow-focus-danger',
        success: 'border-success-500 focus:shadow-focus-success',
        warning: 'border-warning-500 focus:shadow-focus-warning',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  },
);

interface ITextareaProps
  extends ComponentProps<'textarea'>,
    VariantProps<typeof TEXTAREA_VARIANTS> {
  /** Shows a `used/maxLength` counter beneath the field, as UX4G specifies. */
  showCount?: boolean;
  containerClassName?: string;
}

/** Multi-line text field with optional character counter. */
function Textarea({
  className,
  containerClassName,
  state,
  showCount = false,
  maxLength,
  value,
  defaultValue,
  id,
  ...props
}: ITextareaProps) {
  const generatedId = useId();
  const textareaId = id ?? generatedId;
  const counterId = `${textareaId}-count`;
  const current = String(value ?? defaultValue ?? '').length;
  const withCount = showCount && maxLength !== undefined;

  return (
    <div className={cn('w-full', containerClassName)}>
      <textarea
        id={textareaId}
        className={cn('min-h-[94px]', TEXTAREA_VARIANTS({ state }), className)}
        maxLength={maxLength}
        value={value}
        defaultValue={defaultValue}
        aria-describedby={withCount ? counterId : undefined}
        {...props}
      />
      {withCount && (
        <Body3
          id={counterId}
          aria-live='polite'
          className='mt-1.5 block text-right text-neutral-600'
        >
          {current}/{maxLength}
        </Body3>
      )}
    </div>
  );
}

export { Textarea, TEXTAREA_VARIANTS };

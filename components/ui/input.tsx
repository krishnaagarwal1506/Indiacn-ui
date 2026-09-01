'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { AlertTriangle, CheckCircle2, Info, OctagonAlert, X } from 'lucide-react';
import { ComponentProps, ReactNode } from 'react';

import { Body3 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

/*
 * UX4G input: 44px (default) and 48px (large), 1px border at radius 8px, and a
 * 4px focus ring. Validation states colour the border from the -500 step.
 *
 * UX4G also lists a Small size, but its Figma symbol renders byte-identically
 * to Default, so there is nothing to ship — see the docs page.
 */
const INPUT_VARIANTS = cva(
  'flex w-full items-center gap-2 rounded-md border bg-neutral-0 transition-[color,background-color,border-color,box-shadow] duration-150 has-[input:disabled]:pointer-events-none has-[input:disabled]:opacity-50 [&>svg]:shrink-0 [&>svg]:text-neutral-600',
  {
    variants: {
      size: {
        md: 'h-11 px-3 text-sm [&>svg]:size-[18px]',
        lg: 'h-12 px-3.5 text-base [&>svg]:size-5',
      },
      state: {
        default:
          'border-neutral-200 hover:border-primary focus-within:border-primary focus-within:shadow-focus-primary',
        error: 'border-danger-500 focus-within:shadow-focus-danger',
        success: 'border-success-500 focus-within:shadow-focus-success',
        warning: 'border-warning-500 focus-within:shadow-focus-warning',
      },
    },
    defaultVariants: {
      size: 'md',
      state: 'default',
    },
  },
);

type TInputState = NonNullable<VariantProps<typeof INPUT_VARIANTS>['state']>;

const ICON_SIZES = {
  md: 'size-[18px]',
  lg: 'size-5',
} as const;

interface IInputProps
  extends Omit<ComponentProps<'input'>, 'size'>,
    VariantProps<typeof INPUT_VARIANTS> {
  prefixIcon?: ReactNode;
  suffix?: ReactNode;
  onClear?: () => void;
  containerClassName?: string;
}

/**
 * Text field with optional leading icon, clear button and trailing slot.
 *
 * The field is a label element, so clicking anywhere inside focuses the input
 * without a click handler.
 */
function Input({
  className,
  containerClassName,
  size,
  state,
  prefixIcon,
  suffix,
  onClear,
  value,
  ...props
}: IInputProps) {
  const iconSize = ICON_SIZES[size ?? 'md'];

  return (
    <label className={cn(INPUT_VARIANTS({ size, state, className: containerClassName }))}>
      {prefixIcon}
      <input
        className={cn(
          'placeholder:text-neutral-500 min-w-0 flex-1 bg-transparent outline-none',
          className,
        )}
        value={value}
        {...props}
      />
      {value && onClear && (
        <button
          type='button'
          onClick={onClear}
          aria-label='Clear'
          className='text-neutral-600 hover:text-neutral shrink-0 cursor-pointer rounded-sm transition-colors focus:outline-none'
        >
          <X className={iconSize} aria-hidden />
        </button>
      )}
      {suffix}
    </label>
  );
}

const MESSAGE_ICONS = {
  default: Info,
  error: OctagonAlert,
  success: CheckCircle2,
  warning: AlertTriangle,
} as const;

const MESSAGE_COLORS = {
  default: 'text-neutral-600',
  error: 'text-danger',
  success: 'text-success',
  warning: 'text-warning',
} as const;

/** Description or validation message shown beneath an Input or Textarea. */
function InputMessage({
  className,
  state = 'default',
  children,
  ...props
}: ComponentProps<typeof Body3> & { state?: TInputState }) {
  const Icon = MESSAGE_ICONS[state];

  return (
    <Body3
      className={cn('mt-2 flex items-center gap-1.5', MESSAGE_COLORS[state], className)}
      {...props}
    >
      <Icon className='size-3.5 shrink-0' aria-hidden />
      {children}
    </Body3>
  );
}

export type { TInputState };

export { Input, InputMessage, INPUT_VARIANTS };

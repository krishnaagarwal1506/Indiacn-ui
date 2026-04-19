'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { CheckCircle, X } from 'lucide-react';
import { ComponentProps, ReactNode } from 'react';

import { Label2 } from '@/components/ui/typography';
import { cn } from '@/utils';

/*
 * UX4G chip: border-radius 8px, padding 6px 12px, font-size 14px, font-weight 400,
 * border: 1px solid #C6C6C6, bg: #fff, hover bg: #FAEFFF, hover shadow: 0px 2px 3px 1px rgba(33,33,33,0.12)
 */
const CHIP_VARIANTS = cva(
  'inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-0 px-3 py-1.5 text-sm font-normal text-neutral transition-all hover:bg-[#FAEFFF] hover:shadow-xs active:shadow-none',
  {
    variants: {
      variant: {
        outlined: '',
        filled:
          'border-primary bg-primary text-neutral-0 hover:bg-primary-600 hover:text-neutral-0',
        tonal: 'border-transparent bg-primary-100 text-primary hover:bg-[#FAEFFF]',
      },
      size: {
        sm: 'px-2 py-1 text-xs rounded-md',
        md: 'px-3 py-1.5 text-sm rounded-lg',
        lg: 'px-4 py-2.5 text-sm rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'outlined',
      size: 'md',
    },
  },
);

interface IChipProps
  extends Omit<ComponentProps<'div'>, 'color'>,
    VariantProps<typeof CHIP_VARIANTS> {
  icon?: ReactNode;
  avatar?: ReactNode;
  onDismiss?: () => void;
  selected?: boolean;
  disabled?: boolean;
}

/**
 * A compact chip component for displaying tags, filters, or selections.
 * Matches the UX4G 2.0 Chip specification.
 *
 * UX4G chips use neutral border by default (#C6C6C6), with a purple-tinted
 * hover background (#FAEFFF) and active toggle behavior.
 */
function Chip({
  className,
  variant,
  size,
  icon,
  avatar,
  onDismiss,
  selected,
  disabled,
  children,
  ...props
}: IChipProps) {
  return (
    <div
      data-selected={selected || undefined}
      data-disabled={disabled || undefined}
      className={cn(
        CHIP_VARIANTS({ variant, size, className }),
        selected && 'border-primary text-primary bg-[#FAEFFF]',
        disabled && 'pointer-events-none opacity-50',
      )}
      {...props}
    >
      {avatar && <div className='-ml-0.5 [&>img]:size-6 [&>img]:rounded-full'>{avatar}</div>}
      {selected && !icon && <CheckCircle className='size-3.5' />}
      {icon && <div className='[&>svg]:size-3.5'>{icon}</div>}
      <Label2 className='mx-0.5'>{children}</Label2>
      {onDismiss && (
        <button
          type='button'
          onClick={onDismiss}
          disabled={disabled}
          className='ml-0.5 rounded-full opacity-50 transition-opacity hover:opacity-100 focus:outline-none'
          aria-label='Remove'
        >
          <X className='size-3.5' />
        </button>
      )}
    </div>
  );
}

export { Chip, CHIP_VARIANTS };

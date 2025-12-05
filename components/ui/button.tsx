import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentProps, ReactNode } from 'react';

import { Label1, Label2, Title2 } from '@/components/ui/typography';
import { cn } from '@/utils';

interface IButtonProps extends ComponentProps<'button'>, VariantProps<typeof BUTTON_VARIANTS> {
  asChild?: boolean;
  loading?: boolean;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  contentContainerClassName?: string;
  iconButton?: boolean;
}

const BUTTON_VARIANTS = cva(
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded disabled:opacity-50 disabled:pointer-events-none transition-[color,background-color,border-color,box-shadow] duration-150 ease-in-out flex-nowrap focus:ring-0 focus:outline-0',
  {
    variants: {
      theme: {
        primary:
          'text-primary [--btn-bg:var(--color-primary)] [--btn-bg-tonal:var(--color-primary-100)] [--btn-border-color:var(--color-primary)] [--btn-text-color:var(--color-primary)] focus:shadow-focus-primary',
        success:
          'text-success [--btn-bg:var(--color-success)] [--btn-bg-tonal:var(--color-success-100)] [--btn-border-color:var(--color-success-300)] [--btn-text-color:var(--color-success)] focus:shadow-focus-success',
        destructive:
          'text-danger [--btn-bg:var(--color-danger)] [--btn-bg-tonal:var(--color-danger-100)] [--btn-border-color:var(--color-danger-300)] [--btn-text-color:var(--color-danger)] focus:shadow-focus-danger',
      },
      variant: {
        filled: 'bg-(--btn-bg) text-neutral-0 hover:shadow-xs active:opacity-90',
        outlined:
          'border border-(--btn-border-color) bg-transparent hover:bg-(--btn-bg)/8 active:bg-(--btn-bg)/16 text-(--btn-text-color)',
        tonal: 'bg-(--btn-bg-tonal) text-neutral active:opacity-90 hover:shadow-xs',
        text: 'bg-transparent hover:bg-(--btn-bg)/8 active:bg-(--btn-bg)/16 text-(--btn-text-color)',
      },
      size: {
        sm: 'py-2 px-4 text-sm',
        md: 'py-2.5 px-6 text-base',
        lg: 'py-3 px-6 text-base',
      },
      iconButton: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      { iconButton: false, className: '[&>svg]:size-4.5' },
      // Regular button padding (when iconOnly is false)
      {
        iconButton: false,
        size: 'sm',
        className: 'py-2 px-4 has-[>svg:first-child]:pl-3 has-[>svg:last-child]:pr-3',
      },
      {
        iconButton: false,
        size: 'md',
        className: 'py-2.5 px-6 has-[>svg:first-child]:pl-4 has-[>svg:last-child]:pr-4',
      },
      {
        iconButton: false,
        size: 'lg',
        className: 'py-3 px-6 has-[>svg:first-child]:pl-4 has-[>svg:last-child]:pr-4',
      },

      // Icon button padding (when iconButton is true)
      { iconButton: true, size: 'sm', className: 'p-1.5 [&>svg]:size-5' },
      { iconButton: true, size: 'md', className: 'p-2 [&>svg]:size-6' },
      { iconButton: true, size: 'lg', className: 'p-2 [&>svg]:size-8' },
    ],

    defaultVariants: {
      theme: 'primary',
      variant: 'filled',
      size: 'md',
      iconButton: false,
    },
  },
);

/**
 * A versatile button component with multiple variants, themes, and sizes.
 *
 * Supports:
 * - Multiple visual variants: filled, outlined, text, tonal
 * - Theme colors: primary, success, destructive
 * - Three sizes: sm, md, lg
 * - Icon support with prefix/suffix positioning
 * - Icon-only button mode
 * - Loading state with spinner
 * - Full accessibility with ARIA attributes
 * - Polymorphic rendering via Radix UI Slot
 *
 * @component
 * @example
 * ```tsx
 * // Basic button
 * <Button>Click me</Button>
 *
 * // Button with icons
 * <Button prefixIcon={<Icon />} suffixIcon={<Icon />}>
 *   Click me
 * </Button>
 *
 * // Icon-only button
 * <Button iconButton>
 *   <Icon />
 * </Button>
 *
 * // Loading state
 * <Button loading>Submitting...</Button>
 *
 * // As a different element
 * <Button asChild>
 *   <a href="/link">Link Button</a>
 * </Button>
 * ```
 *
 * @param  props - The button component props
 * @returns The rendered button element
 */
function Button({
  className,
  variant,
  theme,
  size,
  asChild = false,
  disabled,
  loading = false,
  children,
  prefixIcon,
  suffixIcon,
  contentContainerClassName,
  iconButton = false,
  ...props
}: IButtonProps) {
  const Comp = asChild ? Slot : 'button';
  const TextComponent = (() => {
    if (size === 'sm') return Label2;
    if (size === 'md') return Label1;
    if (size === 'lg') return Title2;
    else return Label1;
  })();

  const buttonEl = (
    <Comp
      data-slot='button'
      className={cn(BUTTON_VARIANTS({ variant, size, className, theme, iconButton }))}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div
          className='border-neutral-0/60 inline-block size-4.5 animate-spin rounded-full border-2 border-t-transparent'
          aria-hidden='true'
        />
      ) : (
        prefixIcon
      )}
      {!iconButton && (
        <TextComponent className={cn('text-nowrap', contentContainerClassName)}>
          {children}
        </TextComponent>
      )}

      {iconButton && children}

      {suffixIcon}
    </Comp>
  );

  return buttonEl;
}

export { Button, BUTTON_VARIANTS };

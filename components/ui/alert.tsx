'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import { ComponentProps, useState } from 'react';

import { Body2, Headline6 } from '@/components/ui/typography';
import { cn } from '@/utils';

/*
 * UX4G alert: border-radius 0.25rem, padding 1rem, border 1px solid.
 * Colors use the --alert-{theme}-{color|bg|border} CSS variables defined in globals.css.
 * Icons are inline (d-flex align-items-center) — use <AlertIcon> to wrap content.
 * alert-link: font-weight 700. alert-dismissible: padding-right 3rem.
 */
const ALERT_VARIANTS = cva('relative w-full rounded border p-4 mb-4', {
  variants: {
    theme: {
      primary:
        'border-(--alert-primary-border) bg-(--alert-primary-bg) text-(--alert-primary-color)',
      secondary:
        'border-(--alert-secondary-border) bg-(--alert-secondary-bg) text-(--alert-secondary-color)',
      success:
        'border-(--alert-success-border) bg-(--alert-success-bg) text-(--alert-success-color)',
      danger: 'border-(--alert-danger-border) bg-(--alert-danger-bg) text-(--alert-danger-color)',
      warning:
        'border-(--alert-warning-border) bg-(--alert-warning-bg) text-(--alert-warning-color)',
      info: 'border-(--alert-info-border) bg-(--alert-info-bg) text-(--alert-info-color)',
      light: 'border-(--alert-light-border) bg-(--alert-light-bg) text-(--alert-light-color)',
      dark: 'border-(--alert-dark-border) bg-(--alert-dark-bg) text-(--alert-dark-color)',
    },
  },
  defaultVariants: {
    theme: 'primary',
  },
});

interface IAlertProps extends ComponentProps<'div'>, VariantProps<typeof ALERT_VARIANTS> {
  dismissible?: boolean;
  onDismiss?: () => void;
}

/**
 * Alert component for contextual feedback messages.
 * Matches the UX4G 2.0 Alert specification.
 *
 * Themes: primary, secondary, success, danger, warning, info, light, dark.
 * Icons render inline — compose with <AlertIcon> or place an icon before <AlertTitle>.
 */
function Alert({ className, theme, dismissible, onDismiss, children, ...props }: IAlertProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleDismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  return (
    <div
      role='alert'
      className={cn(ALERT_VARIANTS({ theme, className }), dismissible && 'pr-12')}
      {...props}
    >
      {children}
      {dismissible && (
        <button
          type='button'
          onClick={handleDismiss}
          className='focus:shadow-focus-primary absolute top-0 right-0 rounded-lg p-[1.25rem_1rem] opacity-70 transition-opacity hover:opacity-100 focus:outline-none'
          aria-label='Close'
        >
          <X className='size-4' />
        </button>
      )}
    </div>
  );
}

/** Alert title — UX4G .alert-heading, inherits color. */
function AlertTitle({ className, children, ...props }: ComponentProps<'h5'>) {
  return (
    <Headline6 className={cn('mb-1 text-inherit', className)} {...props}>
      {children}
    </Headline6>
  );
}

/** Alert description text. */
function AlertDescription({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cn('[&_p]:leading-relaxed', className)} {...props}>
      <Body2>{children}</Body2>
    </div>
  );
}

/** Styled link inside an alert. UX4G: font-weight 700. */
function AlertLink({ className, children, ...props }: ComponentProps<'a'>) {
  return (
    <a className={cn('font-bold underline underline-offset-4', className)} {...props}>
      {children}
    </a>
  );
}

/** Wrapper for inline icon + content layout inside an alert. */
function AlertIcon({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cn('flex items-center gap-2', className)} {...props}>
      {children}
    </div>
  );
}

export { Alert, AlertTitle, AlertDescription, AlertLink, AlertIcon, ALERT_VARIANTS };

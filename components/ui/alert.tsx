'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import { ComponentProps, createContext, useState } from 'react';

import { Body2, Headline6 } from '@/components/ui/typography';
import { cn } from '@/utils';

/*
 * UX4G alert: border-radius 0.25rem, padding 1rem, border 1px solid
 * Icons are INLINE via flex layout (d-flex align-items-center), NOT absolute positioned.
 * alert-link: font-weight 700
 * alert-dismissible: padding-right 3rem
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

const ALERT_CONTEXT = createContext<{ onDismiss?: () => void }>({});

interface IAlertProps extends ComponentProps<'div'>, VariantProps<typeof ALERT_VARIANTS> {
  dismissible?: boolean;
  onDismiss?: () => void;
}

/**
 * An alert component for displaying contextual feedback messages.
 * Matches the UX4G 2.0 Alert specification.
 *
 * Icons are placed INLINE (adjacent to text) using flex layout,
 * matching UX4G's `d-flex align-items-center` pattern.
 * Simply place an icon as a child before AlertTitle/AlertDescription.
 */
function Alert({ className, theme, dismissible, onDismiss, children, ...props }: IAlertProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleDismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  return (
    <ALERT_CONTEXT.Provider value={{ onDismiss: dismissible ? handleDismiss : undefined }}>
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
            className='hover:bg-primary/8 focus:shadow-focus-primary active:bg-primary/16 absolute top-0 right-0 z-2 rounded-lg p-[1.25rem_1rem] opacity-70 transition-opacity hover:opacity-100 focus:outline-none'
            aria-label='Close'
          >
            <X className='size-4' />
          </button>
        )}
      </div>
    </ALERT_CONTEXT.Provider>
  );
}

/**
 * Alert title element. Maps to UX4G's .alert-heading.
 * Renders color:inherit per UX4G spec.
 */
function AlertTitle({ className, children, ...props }: ComponentProps<'h5'>) {
  return (
    <Headline6 className={cn('mb-1 text-inherit', className)} {...props}>
      {children}
    </Headline6>
  );
}

/**
 * Alert description text.
 */
function AlertDescription({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cn('[&_p]:leading-relaxed', className)} {...props}>
      <Body2>{children}</Body2>
    </div>
  );
}

/**
 * Styled link for use within alerts. UX4G: font-weight 700.
 */
function AlertLink({ className, children, ...props }: ComponentProps<'a'>) {
  return (
    <a className={cn('font-bold underline underline-offset-4', className)} {...props}>
      {children}
    </a>
  );
}

/**
 * Alert icon wrapper for inline icon layout.
 * UX4G places icons inline using d-flex align-items-center.
 * Wrap your alert content in this for icon + text side by side.
 */
function AlertIcon({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cn('flex items-center gap-2', className)} {...props}>
      {children}
    </div>
  );
}

export { Alert, AlertTitle, AlertDescription, AlertLink, AlertIcon, ALERT_VARIANTS };

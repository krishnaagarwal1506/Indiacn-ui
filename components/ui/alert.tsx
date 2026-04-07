'use client';
/* eslint-disable eslint-frontend-rules/enforce-typography-components, eslint-frontend-rules/top-level-const-snake */

import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import { ComponentProps, createContext, useState } from 'react';

import { cn } from '@/utils';

const ALERT_VARIANTS = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-3.5 [&>svg]:size-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-10',
  {
    variants: {
      theme: {
        primary:
          'border-primary/30 bg-primary-50 text-primary-900 [&>svg]:text-primary dark:bg-primary-900/20 dark:text-primary-100',
        secondary:
          'border-secondary/30 bg-secondary-50 text-secondary-900 [&>svg]:text-secondary dark:bg-secondary-900/20 dark:text-secondary-100',
        success:
          'border-success/30 bg-success-50 text-success-900 [&>svg]:text-success dark:bg-success-900/20 dark:text-success-100',
        danger:
          'border-danger/30 bg-danger-50 text-danger-900 [&>svg]:text-danger dark:bg-danger-900/20 dark:text-danger-100',
        warning:
          'border-warning/30 bg-warning-50 text-warning-900 [&>svg]:text-warning dark:bg-warning-900/20 dark:text-warning-100',
      },
    },
    defaultVariants: {
      theme: 'primary',
    },
  },
);

const AlertContext = createContext<{ onDismiss?: () => void }>({});

interface IAlertProps extends ComponentProps<'div'>, VariantProps<typeof ALERT_VARIANTS> {
  dismissible?: boolean;
  onDismiss?: () => void;
}

function Alert({ className, theme, dismissible, onDismiss, children, ...props }: IAlertProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleDismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  return (
    <AlertContext.Provider value={{ onDismiss: dismissible ? handleDismiss : undefined }}>
      <div
        role='alert'
        className={cn(ALERT_VARIANTS({ theme, className }), dismissible && 'pr-10')}
        {...props}
      >
        {children}
        {dismissible && (
          <button
            type='button'
            onClick={handleDismiss}
            className='absolute top-3 right-3 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none'
            aria-label='Close'
          >
            <X className='size-4' />
          </button>
        )}
      </div>
    </AlertContext.Provider>
  );
}

function AlertTitle({ className, ...props }: ComponentProps<'h5'>) {
   
  return (
    <h5 className={cn('mb-1 leading-none font-semibold tracking-tight', className)} {...props} />
  );
}

function AlertDescription({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('text-sm [&_p]:leading-relaxed', className)} {...props} />;
}

function AlertLink({ className, ...props }: ComponentProps<'a'>) {
  return <a className={cn('font-medium underline underline-offset-4', className)} {...props} />;
}

export { Alert, AlertTitle, AlertDescription, AlertLink, ALERT_VARIANTS };

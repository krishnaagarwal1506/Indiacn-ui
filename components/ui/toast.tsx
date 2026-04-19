'use client';
/* eslint-disable eslint-frontend-rules/top-level-const-snake */

import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import { ComponentProps, createContext, useCallback, useContext, useState } from 'react';

import { cn } from '@/utils';

/*
 * UX4G toast: max-width 350px, font-size 0.875rem, border-radius 0.5rem,
 * border 1px solid #ddd, shadow: 0px 4px 6px -2px rgba(33,33,33,0.03), 0px 12px 16px -4px rgba(33,33,33,0.08)
 * header: padding 0.75rem, color #1C1D1F, NO border-bottom
 * body: padding 0.75rem
 */
const TOAST_VARIANTS = cva(
  'pointer-events-auto relative flex w-[350px] max-w-full items-center justify-between overflow-hidden rounded-lg border border-[#ddd] p-3 text-sm shadow-[0px_4px_6px_-2px_rgba(33,33,33,0.03),0px_12px_16px_-4px_rgba(33,33,33,0.08)] transition-all',
  {
    variants: {
      theme: {
        default:
          'bg-white text-neutral dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100',
        primary: 'border-primary/30 bg-primary text-neutral-0',
        success: 'border-success/30 bg-success text-neutral-0',
        danger: 'border-danger/30 bg-danger text-neutral-0',
        warning: 'border-warning/30 bg-warning text-neutral-0',
      },
    },
    defaultVariants: {
      theme: 'default',
    },
  },
);

interface IToast {
  id: string;
  title?: string;
  description?: string;
  theme?: 'default' | 'primary' | 'success' | 'danger' | 'warning';
  duration?: number;
}

interface IToastContext {
  toasts: IToast[];
  addToast: (toast: Omit<IToast, 'id'>) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<IToastContext>({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
});

/** Context provider that manages toast state. */
function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<IToast[]>([]);

  const addToast = useCallback((toast: Omit<IToast, 'id'>) => {
    const id = Math.random().toString(36).slice(2);
    setToasts(prev => [...prev, { ...toast, id }]);

    if (toast.duration !== 0) {
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, toast.duration ?? 5000);
    }
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

/** Hook to create and dismiss toast notifications. */
function useToast() {
  const context = useContext(ToastContext);
  return { toast: context.addToast, dismiss: context.removeToast, toasts: context.toasts };
}

interface IToastProps extends ComponentProps<'div'>, VariantProps<typeof TOAST_VARIANTS> {
  onDismiss?: () => void;
}

/** Dismissable toast notification component. */
function Toast({ className, theme, onDismiss, children, ...props }: IToastProps) {
  return (
    <div
      role='alert'
      aria-live='assertive'
      aria-atomic='true'
      className={cn(TOAST_VARIANTS({ theme, className }))}
      {...props}
    >
      <div className='flex-1'>{children}</div>
      {onDismiss && (
        <button
          type='button'
          onClick={onDismiss}
          className='ml-2 shrink-0 rounded-sm opacity-70 transition-opacity hover:opacity-100'
        >
          <X className='size-4' />
        </button>
      )}
    </div>
  );
}

/** Title heading for a toast notification. */
function ToastTitle({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('text-sm font-semibold text-[#1C1D1F] dark:text-neutral-100', className)}
      {...props}
    />
  );
}

/** Description body text for a toast notification. */
function ToastDescription({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cn('text-sm text-neutral-600 dark:text-neutral-300', className)} {...props} />
  );
}

/** Fixed-position container for stacking toast notifications. */
function ToastContainer({
  className,
  position = 'bottom-right',
  ...props
}: ComponentProps<'div'> & {
  position?:
    | 'top-left'
    | 'top-right'
    | 'top-center'
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom-center';
}) {
  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
  };

  return (
    <div
      className={cn(
        'fixed z-50 flex w-full max-w-sm flex-col gap-2',
        positionClasses[position],
        className,
      )}
      {...props}
    />
  );
}

export {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastContainer,
  ToastProvider,
  useToast,
  TOAST_VARIANTS,
};

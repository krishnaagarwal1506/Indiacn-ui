'use client';
/* eslint-disable eslint-frontend-rules/top-level-const-snake */

import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import { ComponentProps, createContext, useCallback, useContext, useState } from 'react';

import { cn } from '@/lib/utils';

/*
 * UX4G toast: max-width 350px, font-size 0.875rem, border-radius 0.5rem,
 * border 1px solid neutral-200,
 * shadow: 0px 4px 6px -2px rgba(33,33,33,0.03), 0px 12px 16px -4px rgba(33,33,33,0.08).
 * Header: padding 0.75rem, NO border-bottom. Body: padding 0.75rem.
 */
const TOAST_VARIANTS = cva(
  'pointer-events-auto relative flex w-[350px] max-w-full items-center justify-between overflow-hidden rounded-lg border p-3 text-sm shadow-lg transition-all',
  {
    variants: {
      theme: {
        default: 'bg-neutral-0 text-neutral border-neutral-200',
        primary: 'bg-primary text-neutral-0 border-transparent',
        secondary: 'bg-secondary text-neutral-0 border-transparent',
        success: 'bg-success text-neutral-0 border-transparent',
        danger: 'bg-danger text-neutral-0 border-transparent',
        warning: 'bg-warning text-neutral-0 border-transparent',
        info: 'bg-info text-neutral-0 border-transparent',
      },
    },
    defaultVariants: {
      theme: 'default',
    },
  },
);

type TToastTheme = NonNullable<VariantProps<typeof TOAST_VARIANTS>['theme']>;

interface IToast {
  id: string;
  title?: string;
  description?: string;
  theme?: TToastTheme;
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
          className='ml-2 shrink-0 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none'
          aria-label='Close'
        >
          <X className='size-4' />
        </button>
      )}
    </div>
  );
}

/** Title heading for a toast notification. */
function ToastTitle({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('text-sm font-semibold', className)} {...props} />;
}

/** Description body text for a toast notification. */
function ToastDescription({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('text-sm opacity-90', className)} {...props} />;
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

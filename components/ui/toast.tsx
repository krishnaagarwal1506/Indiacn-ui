'use client';
/* eslint-disable eslint-frontend-rules/top-level-const-snake */

import { cva, type VariantProps } from 'class-variance-authority';
import { AlertTriangle, CheckCircle2, Info, Loader2, XCircle } from 'lucide-react';
import { ComponentProps, createContext, useCallback, useContext, useMemo, useState } from 'react';

import { CloseButton } from '@/components/ui/close-button';
import { Body2, Title3 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

/*
 * UX4G toast: 358px wide, radius 8px, 1px neutral-100 border, padding 12px,
 * shadow-lg. Optional 24px status icon leads the row.
 */
/* Figma leads each toast with a 24px status glyph. Colours use semantic
 * tokens, so a status only reads correctly on the default (white) theme. */
const TOAST_STATUS_ICONS = {
  success: { Icon: CheckCircle2, className: 'text-success' },
  warning: { Icon: AlertTriangle, className: 'text-warning' },
  info: { Icon: Info, className: 'text-info' },
  error: { Icon: XCircle, className: 'text-danger' },
  loading: { Icon: Loader2, className: 'text-primary animate-spin' },
} as const;

type TToastStatus = keyof typeof TOAST_STATUS_ICONS;

const TOAST_VARIANTS = cva(
  'pointer-events-auto relative flex w-[358px] max-w-full items-center gap-2 overflow-hidden rounded-md border p-3 text-sm shadow-lg transition-all',
  {
    variants: {
      theme: {
        default: 'bg-neutral-0 text-neutral border-neutral-100',
        primary: 'bg-primary text-primary-foreground border-transparent',
        secondary: 'bg-secondary text-secondary-foreground border-transparent',
        success: 'bg-success text-success-foreground border-transparent',
        danger: 'bg-danger text-danger-foreground border-transparent',
        warning: 'bg-warning text-warning-foreground border-transparent',
        info: 'bg-info text-info-foreground border-transparent',
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

  const contextValue = useMemo(
    () => ({ toasts, addToast, removeToast }),
    [toasts, addToast, removeToast],
  );

  return <ToastContext.Provider value={contextValue}>{children}</ToastContext.Provider>;
}

/** Hook to create and dismiss toast notifications. */
function useToast() {
  const context = useContext(ToastContext);
  return { toast: context.addToast, dismiss: context.removeToast, toasts: context.toasts };
}

interface IToastProps extends ComponentProps<'div'>, VariantProps<typeof TOAST_VARIANTS> {
  onDismiss?: () => void;
  status?: TToastStatus;
}

/** 24px status glyph shown at the start of a toast. */
function ToastStatusIcon({ status }: { status: TToastStatus }) {
  const { Icon, className } = TOAST_STATUS_ICONS[status];

  return <Icon className={cn('size-6 shrink-0', className)} aria-hidden />;
}

/** Dismissable toast notification component. */
function Toast({ className, theme, onDismiss, status, children, ...props }: IToastProps) {
  return (
    <div
      role='alert'
      aria-live='assertive'
      aria-atomic='true'
      className={cn(TOAST_VARIANTS({ theme, className }))}
      {...props}
    >
      {status && <ToastStatusIcon status={status} />}
      <div className='flex-1'>{children}</div>
      {onDismiss && <CloseButton size='sm' onClick={onDismiss} className='-mr-1 ml-2' />}
    </div>
  );
}

/** Title heading for a toast notification. UX4G title-3: 14px/20px, weight 500. */
function ToastTitle({ className, ...props }: ComponentProps<typeof Title3>) {
  return <Title3 className={className} {...props} />;
}

/** Description body text for a toast notification. UX4G body-2. */
function ToastDescription({ className, ...props }: ComponentProps<typeof Body2>) {
  return <Body2 className={className} {...props} />;
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

export type { TToastStatus };

export {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastContainer,
  ToastProvider,
  useToast,
  TOAST_VARIANTS,
};

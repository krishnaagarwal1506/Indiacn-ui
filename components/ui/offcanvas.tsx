'use client';
/* eslint-disable eslint-frontend-rules/enforce-typography-components, eslint-frontend-rules/top-level-const-snake */

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { ComponentProps } from 'react';

import { cn } from '@/utils';

const Offcanvas = DialogPrimitive.Root;
const OffcanvasTrigger = DialogPrimitive.Trigger;
const OffcanvasClose = DialogPrimitive.Close;

function OffcanvasOverlay({ className, ...props }: ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className,
      )}
      {...props}
    />
  );
}

interface IOffcanvasContentProps extends ComponentProps<typeof DialogPrimitive.Content> {
  side?: 'left' | 'right' | 'top' | 'bottom';
}

function OffcanvasContent({
  className,
  side = 'right',
  children,
  ...props
}: IOffcanvasContentProps) {
  const sideClasses = {
    left: 'inset-y-0 left-0 h-full w-3/4 max-w-sm border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
    right:
      'inset-y-0 right-0 h-full w-3/4 max-w-sm border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
    top: 'inset-x-0 top-0 w-full border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
    bottom:
      'inset-x-0 bottom-0 w-full border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
  };

  return (
    <DialogPrimitive.Portal>
      <OffcanvasOverlay />
      <DialogPrimitive.Content
        className={cn(
          'bg-neutral-0 fixed z-50 shadow-lg transition duration-300 ease-in-out dark:bg-neutral-900',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
          sideClasses[side],
          className,
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

function OffcanvasHeader({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex items-center justify-between border-b border-neutral-200 px-6 py-4 dark:border-neutral-700',
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className='rounded-sm opacity-70 transition-opacity hover:opacity-100'>
        <X className='size-4' />
        <span className='sr-only'>Close</span>
      </DialogPrimitive.Close>
    </div>
  );
}

function OffcanvasTitle({ className, ...props }: ComponentProps<typeof DialogPrimitive.Title>) {
  return <DialogPrimitive.Title className={cn('text-lg font-semibold', className)} {...props} />;
}

function OffcanvasBody({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('flex-1 overflow-y-auto p-6', className)} {...props} />;
}

export {
  Offcanvas,
  OffcanvasTrigger,
  OffcanvasClose,
  OffcanvasContent,
  OffcanvasHeader,
  OffcanvasTitle,
  OffcanvasBody,
};

'use client';
/* eslint-disable eslint-frontend-rules/enforce-typography-components, eslint-frontend-rules/top-level-const-snake */

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { ComponentProps } from 'react';

import { cn } from '@/utils';

const Modal = DialogPrimitive.Root;
const ModalTrigger = DialogPrimitive.Trigger;
const ModalClose = DialogPrimitive.Close;
const ModalPortal = DialogPrimitive.Portal;

function ModalOverlay({ className, ...props }: ComponentProps<typeof DialogPrimitive.Overlay>) {
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

interface IModalContentProps extends ComponentProps<typeof DialogPrimitive.Content> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen';
}

function ModalContent({ className, size = 'md', children, ...props }: IModalContentProps) {
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-3xl',
    xl: 'max-w-5xl',
    fullscreen: 'max-w-none h-full w-full rounded-none',
  };

  return (
    <ModalPortal>
      <ModalOverlay />
      <DialogPrimitive.Content
        className={cn(
          'bg-neutral-0 fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 gap-0 rounded-lg border border-neutral-200 shadow-lg duration-200 dark:border-neutral-700 dark:bg-neutral-900',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </ModalPortal>
  );
}

function ModalHeader({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex items-center justify-between border-b border-neutral-200 px-6 py-4 dark:border-neutral-700',
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className='rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none'>
        <X className='size-4' />
        <span className='sr-only'>Close</span>
      </DialogPrimitive.Close>
    </div>
  );
}

function ModalTitle({ className, ...props }: ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={cn('text-lg leading-none font-semibold tracking-tight', className)}
      {...props}
    />
  );
}

function ModalDescription({
  className,
  ...props
}: ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      className={cn('text-sm text-neutral-500 dark:text-neutral-400', className)}
      {...props}
    />
  );
}

function ModalBody({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('px-6 py-4', className)} {...props} />;
}

function ModalFooter({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex items-center justify-end gap-2 border-t border-neutral-200 px-6 py-4 dark:border-neutral-700',
        className,
      )}
      {...props}
    />
  );
}

export {
  Modal,
  ModalTrigger,
  ModalClose,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
};

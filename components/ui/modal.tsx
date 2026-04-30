'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { ComponentProps } from 'react';

import { Body2, Headline5, Label2 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

/*
 * UX4G modal: border-radius 0.5rem, padding 1rem, border 1px solid rgba(0,0,0,0.175),
 * NO header border-bottom, NO footer border-top,
 * sizes: sm=300px, default=500px, lg=800px, xl=1140px,
 * animation: translate(0,-50px) -> none, 0.3s ease-out
 */

/** Modal dialog root component. */
function Modal(props: ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root {...props} />;
}

/** Modal trigger button. */
function ModalTrigger(props: ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger {...props} />;
}

/** Modal close button. */
function ModalClose(props: ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close {...props} />;
}

/** Modal portal container. */
function ModalPortal(props: ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal {...props} />;
}

/** Semi-transparent backdrop overlay for modals. */
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
  scrollable?: boolean;
}

/**
 * Main modal content container.
 * Matches the UX4G 2.0 Modal specification.
 *
 * Sizes match UX4G: sm=300px, md=500px, lg=800px, xl=1140px, fullscreen=100%.
 * UX4G removes borders between header/body/footer sections.
 */
function ModalContent({
  className,
  size = 'md',
  scrollable = false,
  children,
  ...props
}: IModalContentProps) {
  const sizeClasses = {
    sm: 'max-w-[300px]',
    md: 'max-w-[500px]',
    lg: 'max-w-[800px]',
    xl: 'max-w-[1140px]',
    fullscreen: 'max-w-none h-full w-full rounded-none',
  };

  return (
    <ModalPortal>
      <ModalOverlay />
      <DialogPrimitive.Content
        className={cn(
          'bg-neutral-0 fixed top-1/2 left-1/2 z-50 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col rounded-lg border border-neutral-200 shadow-lg duration-300 ease-out',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-[50px] data-[state=open]:slide-in-from-top-[50px]',
          scrollable && 'max-h-[calc(100vh-3.5rem)]',
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

/**
 * Modal header. UX4G: padding 1rem, NO border-bottom.
 */
function ModalHeader({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cn('flex shrink-0 items-center justify-between p-4', className)} {...props}>
      {children}
      <DialogPrimitive.Close className='hover:bg-primary/8 focus:shadow-focus-primary active:bg-primary/16 rounded-lg p-2 opacity-70 transition-all hover:opacity-100 focus:outline-none'>
        <X className='size-6' />
        <Label2 className='sr-only'>Close</Label2>
      </DialogPrimitive.Close>
    </div>
  );
}

/**
 * Modal title. UX4G: line-height 1.5.
 */
function ModalTitle({
  className,
  children,
  ...props
}: ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title asChild {...props}>
      <Headline5 className={cn('leading-normal', className)}>{children}</Headline5>
    </DialogPrimitive.Title>
  );
}

/** Accessible description text for a modal. */
function ModalDescription({
  className,
  children,
  ...props
}: ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description asChild {...props}>
      <Body2 className={cn('text-neutral-500', className)}>{children}</Body2>
    </DialogPrimitive.Description>
  );
}

/**
 * Modal body. UX4G: padding 1rem, flex 1 1 auto.
 */
function ModalBody({
  className,
  scrollable,
  ...props
}: ComponentProps<'div'> & { scrollable?: boolean }) {
  return (
    <div className={cn('flex-1 p-4', scrollable && 'overflow-y-auto', className)} {...props} />
  );
}

/**
 * Modal footer. UX4G: padding ~0.75rem, NO border-top, flex-end, gap 0.5rem.
 */
function ModalFooter({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex shrink-0 flex-wrap items-center justify-end gap-2 p-3', className)}
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

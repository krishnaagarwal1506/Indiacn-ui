'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { ComponentProps } from 'react';

import { Headline5, Label2 } from '@/components/ui/typography';
import { cn } from '@/utils';

/*
 * UX4G offcanvas: width 400px, height 30vh (top/bottom), padding 1rem,
 * border 1px solid rgba(0,0,0,0.175), transition 0.3s ease-in-out,
 * backdrop opacity 0.5
 */

/** Offcanvas dialog root component. */
function Offcanvas(props: ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root {...props} />;
}

/** Offcanvas trigger button. */
function OffcanvasTrigger(props: ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger {...props} />;
}

/** Offcanvas close button. */
function OffcanvasClose(props: ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close {...props} />;
}

/** Semi-transparent backdrop overlay for offcanvas panels. */
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
  bodyScroll?: boolean;
}

/**
 * Sliding panel component for off-canvas navigation or content.
 * Matches the UX4G 2.0 Offcanvas specification.
 *
 * Supports:
 * - Four slide directions: left (start), right (end), top, bottom
 * - Body scroll option (UX4G data-bs-scroll="true")
 * - Width: 400px for left/right, height: 30vh for top/bottom
 */
function OffcanvasContent({
  className,
  side = 'right',
  bodyScroll = false,
  children,
  ...props
}: IOffcanvasContentProps) {
  const sideClasses = {
    left: 'inset-y-0 left-0 h-full w-[400px] max-w-full border-r border-neutral-200 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
    right:
      'inset-y-0 right-0 h-full w-[400px] max-w-full border-l border-neutral-200 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
    top: 'inset-x-0 top-0 w-full h-[30vh] max-h-full border-b border-neutral-200 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
    bottom:
      'inset-x-0 bottom-0 w-full h-[30vh] max-h-full border-t border-neutral-200 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
  };

  return (
    <DialogPrimitive.Portal>
      {!bodyScroll && <OffcanvasOverlay />}
      <DialogPrimitive.Content
        onInteractOutside={bodyScroll ? e => e.preventDefault() : undefined}
        className={cn(
          'bg-neutral-0 fixed z-50 flex flex-col shadow-sm transition duration-300 ease-in-out',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-300',
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

/**
 * Offcanvas header. UX4G: padding 1rem, display flex, justify-content space-between.
 */
function OffcanvasHeader({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cn('flex items-center justify-between p-4', className)} {...props}>
      {children}
      <DialogPrimitive.Close className='hover:bg-primary/8 focus:shadow-focus-primary active:bg-primary/16 rounded-lg p-2 opacity-70 transition-all hover:opacity-100 focus:outline-none'>
        <X className='size-6' />
        <Label2 className='sr-only'>Close</Label2>
      </DialogPrimitive.Close>
    </div>
  );
}

/**
 * Offcanvas title. UX4G: line-height 1.5.
 */
function OffcanvasTitle({
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

/**
 * Offcanvas body. UX4G: padding 1rem, flex-grow 1, overflow-y auto.
 */
function OffcanvasBody({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('flex-1 overflow-y-auto p-4', className)} {...props} />;
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

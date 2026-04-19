'use client';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';
import { ComponentProps } from 'react';

import { Label2 } from '@/components/ui/typography';
import { cn } from '@/utils';

/*
 * UX4G dropdown: min-width 10rem, border-radius 0.5rem, padding-y 0.5rem, padding-x 0,
 * border 1px solid rgba(0,0,0,0.175), item padding 0.25rem 1rem,
 * item hover bg #FAEFFF, active bg #613AF5, header color #938BB6
 */

/** Dropdown menu root component. */
function Dropdown(props: ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root {...props} />;
}

/** Dropdown menu trigger button. */
function DropdownTrigger(props: ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return <DropdownMenuPrimitive.Trigger {...props} />;
}

/** Dropdown menu item group. */
function DropdownGroup(props: ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return <DropdownMenuPrimitive.Group {...props} />;
}

/** Dropdown menu portal container. */
function DropdownPortal(props: ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return <DropdownMenuPrimitive.Portal {...props} />;
}

/** Dropdown submenu root. */
function DropdownSub(props: ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub {...props} />;
}

/** Dropdown radio item group. */
function DropdownRadioGroup(props: ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return <DropdownMenuPrimitive.RadioGroup {...props} />;
}

/** Dropdown submenu trigger item. */
function DropdownSubTrigger({
  className,
  inset,
  children,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & { inset?: boolean }) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      className={cn(
        'flex cursor-default items-center px-4 py-1 outline-none select-none focus:bg-[#FAEFFF] data-[state=open]:bg-[#FAEFFF]',
        inset && 'pl-8',
        className,
      )}
      {...props}
    >
      <Label2 className='text-sm'>{children}</Label2>
      <ChevronRight className='ml-auto size-4' />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

/** Dropdown submenu content panel. */
function DropdownSubContent({
  className,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      className={cn(
        'bg-neutral-0 z-50 min-w-40 overflow-hidden rounded-lg border border-black/17.5 py-2 shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)]',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        className,
      )}
      {...props}
    />
  );
}

interface IDropdownContentProps extends ComponentProps<typeof DropdownMenuPrimitive.Content> {
  variant?: 'default' | 'dark';
}

/** Dropdown menu content container. */
function DropdownContent({
  className,
  sideOffset = 2,
  variant = 'default',
  ...props
}: IDropdownContentProps) {
  return (
    <DropdownPortal>
      <DropdownMenuPrimitive.Content
        sideOffset={sideOffset}
        className={cn(
          'z-50 min-w-40 overflow-hidden rounded-lg border py-2 shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)]',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          variant === 'dark'
            ? 'border-black/17.5 bg-[#343a40] text-[#dee2e6]'
            : 'text-neutral bg-neutral-0 border-black/17.5',
          className,
        )}
        {...props}
      />
    </DropdownPortal>
  );
}

/** Single selectable dropdown menu item. */
function DropdownItem({
  className,
  inset,
  children,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Item> & { inset?: boolean }) {
  return (
    <DropdownMenuPrimitive.Item
      className={cn(
        'relative flex w-full cursor-default items-center px-4 py-1 text-sm transition-colors outline-none select-none focus:bg-[#FAEFFF] data-disabled:pointer-events-none data-disabled:text-neutral-400',
        inset && 'pl-8',
        className,
      )}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Item>
  );
}

/** Dropdown menu item with a checkbox indicator. */
function DropdownCheckboxItem({
  className,
  children,
  checked,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      className={cn(
        'relative flex cursor-default items-center py-1 pr-4 pl-8 text-sm transition-colors outline-none select-none focus:bg-[#FAEFFF] data-disabled:pointer-events-none data-disabled:text-neutral-400',
        className,
      )}
      checked={checked}
      {...props}
    >
      <div className='absolute left-2 flex size-3.5 items-center justify-center'>
        <DropdownMenuPrimitive.ItemIndicator>
          <Check className='size-4' />
        </DropdownMenuPrimitive.ItemIndicator>
      </div>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

/** Dropdown menu item with a radio indicator. */
function DropdownRadioItem({
  className,
  children,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      className={cn(
        'relative flex cursor-default items-center py-1 pr-4 pl-8 text-sm transition-colors outline-none select-none focus:bg-[#FAEFFF] data-disabled:pointer-events-none data-disabled:text-neutral-400',
        className,
      )}
      {...props}
    >
      <div className='absolute left-2 flex size-3.5 items-center justify-center'>
        <DropdownMenuPrimitive.ItemIndicator>
          <Circle className='size-2 fill-current' />
        </DropdownMenuPrimitive.ItemIndicator>
      </div>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

/**
 * UX4G dropdown header: font-size 0.875rem, color #938BB6, padding 0.5rem 1rem
 */
function DropdownLabel({
  className,
  inset,
  children,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Label> & { inset?: boolean }) {
  return (
    <DropdownMenuPrimitive.Label
      className={cn('text-secondary px-4 py-2 text-sm', inset && 'pl-8', className)}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Label>
  );
}

/**
 * UX4G dropdown divider: margin 0.5rem 0, border-top 1px solid rgba(0,0,0,0.175)
 */
function DropdownSeparator({
  className,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      className={cn('my-2 h-px bg-black/17.5', className)}
      {...props}
    />
  );
}

/** Keyboard shortcut hint displayed in a dropdown item. */
function DropdownShortcut({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <Label2 className={cn('ml-auto tracking-widest opacity-60', className)} {...props}>
      {children}
    </Label2>
  );
}

export {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownCheckboxItem,
  DropdownRadioItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownShortcut,
  DropdownGroup,
  DropdownPortal,
  DropdownSub,
  DropdownSubContent,
  DropdownSubTrigger,
  DropdownRadioGroup,
};

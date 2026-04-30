'use client';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';
import { ComponentProps } from 'react';

import { Label2 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

/*
 * UX4G dropdown: min-width 10rem, border-radius 0.5rem, padding-y 0.5rem,
 * border 1px solid neutral-200, item padding 0.25rem 1rem,
 * item hover bg primary-50, active bg primary, header color secondary (neutral-500),
 * divider: border-top 1px neutral-200, margin-y 0.5rem.
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
        'hover:bg-primary-50 focus:bg-primary-50 data-[state=open]:bg-primary-50 flex cursor-default items-center px-4 py-1 outline-none select-none',
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
        'bg-neutral-0 text-neutral z-50 min-w-40 overflow-hidden rounded-lg border border-neutral-200 py-2 shadow-lg',
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
          'z-50 min-w-40 overflow-hidden rounded-lg border py-2 shadow-lg',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          variant === 'dark'
            ? 'text-neutral-0 border-neutral-800 bg-neutral-900'
            : 'bg-neutral-0 text-neutral border-neutral-200',
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
        'focus:bg-primary-50 relative flex w-full cursor-default items-center px-4 py-1.5 text-sm transition-colors outline-none select-none data-disabled:pointer-events-none data-disabled:text-neutral-400',
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
        'focus:bg-primary-50 relative flex cursor-default items-center py-1.5 pr-4 pl-8 text-sm transition-colors outline-none select-none data-disabled:pointer-events-none data-disabled:text-neutral-400',
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
        'focus:bg-primary-50 relative flex cursor-default items-center py-1.5 pr-4 pl-8 text-sm transition-colors outline-none select-none data-disabled:pointer-events-none data-disabled:text-neutral-400',
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

/** Section label inside a dropdown. UX4G: neutral-500, padding 0.5rem 1rem. */
function DropdownLabel({
  className,
  inset,
  children,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Label> & { inset?: boolean }) {
  return (
    <DropdownMenuPrimitive.Label
      className={cn('px-4 py-2 text-sm text-neutral-500', inset && 'pl-8', className)}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Label>
  );
}

/** Divider inside a dropdown. UX4G: margin 0.5rem 0, border-top 1px neutral-200. */
function DropdownSeparator({
  className,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      className={cn('my-2 h-px bg-neutral-200', className)}
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

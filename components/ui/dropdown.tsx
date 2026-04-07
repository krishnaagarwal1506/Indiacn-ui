'use client';
/* eslint-disable eslint-frontend-rules/enforce-typography-components, eslint-frontend-rules/top-level-const-snake */

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';
import { ComponentProps } from 'react';

import { cn } from '@/utils';

const Dropdown = DropdownMenuPrimitive.Root;
const DropdownTrigger = DropdownMenuPrimitive.Trigger;
const DropdownGroup = DropdownMenuPrimitive.Group;
const DropdownPortal = DropdownMenuPrimitive.Portal;
const DropdownSub = DropdownMenuPrimitive.Sub;
const DropdownRadioGroup = DropdownMenuPrimitive.RadioGroup;

function DropdownSubTrigger({
  className,
  inset,
  children,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & { inset?: boolean }) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      className={cn(
        'flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none focus:bg-neutral-100 data-[state=open]:bg-neutral-100 dark:focus:bg-neutral-800 dark:data-[state=open]:bg-neutral-800',
        inset && 'pl-8',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRight className='ml-auto size-4' />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

function DropdownSubContent({
  className,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      className={cn(
        'bg-neutral-0 text-neutral z-50 min-w-[8rem] overflow-hidden rounded-md border border-neutral-200 p-1 shadow-lg dark:border-neutral-700 dark:bg-neutral-900',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        className,
      )}
      {...props}
    />
  );
}

function DropdownContent({
  className,
  sideOffset = 4,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownPortal>
      <DropdownMenuPrimitive.Content
        sideOffset={sideOffset}
        className={cn(
          'bg-neutral-0 text-neutral z-50 min-w-[8rem] overflow-hidden rounded-md border border-neutral-200 p-1 shadow-md dark:border-neutral-700 dark:bg-neutral-900',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          className,
        )}
        {...props}
      />
    </DropdownPortal>
  );
}

function DropdownItem({
  className,
  inset,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Item> & { inset?: boolean }) {
  return (
    <DropdownMenuPrimitive.Item
      className={cn(
        'focus:text-neutral relative flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800',
        inset && 'pl-8',
        className,
      )}
      {...props}
    />
  );
}

function DropdownCheckboxItem({
  className,
  children,
  checked,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      className={cn(
        'relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm transition-colors outline-none select-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800',
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className='absolute left-2 flex size-3.5 items-center justify-center'>
        <DropdownMenuPrimitive.ItemIndicator>
          <Check className='size-4' />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

function DropdownRadioItem({
  className,
  children,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      className={cn(
        'relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm transition-colors outline-none select-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800',
        className,
      )}
      {...props}
    >
      <span className='absolute left-2 flex size-3.5 items-center justify-center'>
        <DropdownMenuPrimitive.ItemIndicator>
          <Circle className='size-2 fill-current' />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

function DropdownLabel({
  className,
  inset,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Label> & { inset?: boolean }) {
  return (
    <DropdownMenuPrimitive.Label
      className={cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
      {...props}
    />
  );
}

function DropdownSeparator({
  className,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      className={cn('-mx-1 my-1 h-px bg-neutral-200 dark:bg-neutral-700', className)}
      {...props}
    />
  );
}

function DropdownShortcut({ className, ...props }: ComponentProps<'span'>) {
  return (
    <span className={cn('ml-auto text-xs tracking-widest opacity-60', className)} {...props} />
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

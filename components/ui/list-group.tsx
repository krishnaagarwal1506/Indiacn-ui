import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

/*
 * UX4G list-group:
 * - container: rounded-lg, border 1px neutral-200, overflow-hidden, shared borders between items
 * - flush variant: no outer borders, no rounding (edge-to-edge)
 * - item: padding 0.5rem 1rem, border-top 1px neutral-200 (except first)
 * - hover (on action items): bg neutral-50
 * - active: bg primary, text neutral-0, border-primary
 * - disabled: opacity 0.5, pointer-events-none
 * - contextual themes: tonal backgrounds (primary-50, success-50, etc.)
 */

const LIST_GROUP_ITEM_VARIANTS = cva(
  'relative flex items-center px-4 py-2 text-sm transition-colors border-t border-neutral-200 first:border-t-0',
  {
    variants: {
      theme: {
        default: 'text-neutral',
        primary: 'bg-primary-50 text-primary-900',
        secondary: 'bg-secondary-50 text-secondary-900',
        success: 'bg-success-50 text-success-900',
        danger: 'bg-danger-50 text-danger-900',
        warning: 'bg-warning-50 text-warning-900',
        info: 'bg-info-50 text-info-900',
      },
    },
    defaultVariants: {
      theme: 'default',
    },
  },
);

interface IListGroupProps extends ComponentProps<'ul'> {
  flush?: boolean;
  horizontal?: boolean;
}

/** List group container. */
function ListGroup({ className, flush, horizontal, ...props }: IListGroupProps) {
  return (
    <ul
      role='list'
      className={cn(
        'flex list-none flex-col',
        !flush && 'bg-neutral-0 overflow-hidden rounded-lg border border-neutral-200',
        horizontal && 'flex-row',
        className,
      )}
      {...props}
    />
  );
}

interface IListGroupItemProps
  extends ComponentProps<'li'>,
    VariantProps<typeof LIST_GROUP_ITEM_VARIANTS> {
  active?: boolean;
  disabled?: boolean;
  action?: boolean;
}

/** Individual item within a list group. */
function ListGroupItem({
  className,
  theme,
  active,
  disabled,
  action,
  ...props
}: IListGroupItemProps) {
  return (
    <li
      aria-current={active ? 'page' : undefined}
      className={cn(
        LIST_GROUP_ITEM_VARIANTS({ theme, className }),
        action && 'cursor-pointer hover:bg-neutral-50 active:bg-neutral-100',
        active && 'bg-primary text-primary-foreground border-primary',
        disabled && 'pointer-events-none opacity-50 select-none',
      )}
      {...props}
    />
  );
}

interface IListGroupActionProps
  extends ComponentProps<'a'>,
    VariantProps<typeof LIST_GROUP_ITEM_VARIANTS> {
  active?: boolean;
  disabled?: boolean;
}

/** Actionable anchor item within a list group. */
function ListGroupAction({ className, theme, active, disabled, ...props }: IListGroupActionProps) {
  return (
    <a
      aria-current={active ? 'page' : undefined}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
      className={cn(
        LIST_GROUP_ITEM_VARIANTS({ theme, className }),
        'focus-visible:shadow-focus-primary relative cursor-pointer no-underline hover:bg-neutral-50 focus-visible:z-10 focus-visible:outline-none active:bg-neutral-100',
        active && 'bg-primary text-primary-foreground hover:bg-primary border-primary',
        disabled && 'pointer-events-none opacity-50 select-none',
      )}
      {...props}
    />
  );
}

export { ListGroup, ListGroupItem, ListGroupAction, LIST_GROUP_ITEM_VARIANTS };

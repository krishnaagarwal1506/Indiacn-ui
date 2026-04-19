import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '@/utils';

/*
 * UX4G list-group: border-width 0, border-color transparent, border-radius 0
 * item: padding 0.5rem 1rem, border 0 solid transparent
 * hover bg: #F4F5F5, active bg: #DFE0E2 color #fff
 * disabled: opacity 0.5 (color/bg NOT changed, just opacity)
 */

const LIST_GROUP_ITEM_VARIANTS = cva(
  'relative flex items-center px-4 py-2 text-sm text-neutral transition-colors',
  {
    variants: {
      theme: {
        default: '',
        primary: 'bg-primary-50 text-primary-900',
        secondary: 'bg-secondary-50 text-secondary-900',
        success: 'bg-success-50 text-success-900',
        danger: 'bg-danger-50 text-danger-900',
        warning: 'bg-warning-50 text-warning-900',
      },
    },
    defaultVariants: {
      theme: 'default',
    },
  },
);

interface IListGroupProps extends ComponentProps<'div'> {
  flush?: boolean;
  horizontal?: boolean;
}

/** List group container component. */
function ListGroup({ className, flush, horizontal, ...props }: IListGroupProps) {
  return (
    <div
      role='list'
      className={cn('flex flex-col', !flush && 'rounded-none', horizontal && 'flex-row', className)}
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
      aria-current={active ? 'true' : undefined}
      className={cn(
        LIST_GROUP_ITEM_VARIANTS({ theme, className }),
        active && 'bg-primary text-white',
        disabled && 'pointer-events-none opacity-50 select-none',
        action && 'cursor-pointer hover:bg-neutral-50 active:bg-neutral-100',
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
        'cursor-pointer no-underline hover:bg-neutral-50 active:bg-neutral-100',
        active && 'bg-primary text-white',
        disabled && 'pointer-events-none opacity-50 select-none',
      )}
      {...props}
    />
  );
}

export { ListGroup, ListGroupItem, ListGroupAction, LIST_GROUP_ITEM_VARIANTS };

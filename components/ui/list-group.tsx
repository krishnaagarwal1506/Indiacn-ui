 
import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '@/utils';

const LIST_GROUP_ITEM_VARIANTS = cva(
  'relative flex items-center px-4 py-3 text-sm transition-colors',
  {
    variants: {
      theme: {
        default: '',
        primary: 'bg-primary-50 text-primary-900 dark:bg-primary-900/20 dark:text-primary-100',
        secondary:
          'bg-secondary-50 text-secondary-900 dark:bg-secondary-900/20 dark:text-secondary-100',
        success: 'bg-success-50 text-success-900 dark:bg-success-900/20 dark:text-success-100',
        danger: 'bg-danger-50 text-danger-900 dark:bg-danger-900/20 dark:text-danger-100',
        warning: 'bg-warning-50 text-warning-900 dark:bg-warning-900/20 dark:text-warning-100',
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
  numbered?: boolean;
}

function ListGroup({ className, flush, horizontal, ...props }: IListGroupProps) {
  return (
    <div
      role='list'
      className={cn(
        'flex flex-col',
        !flush && 'rounded-lg border border-neutral-200 dark:border-neutral-700',
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
      aria-disabled={disabled || undefined}
      className={cn(
        LIST_GROUP_ITEM_VARIANTS({ theme, className }),
        'border-b border-neutral-200 last:border-b-0 dark:border-neutral-700',
        active && 'bg-primary text-neutral-0 border-primary',
        disabled && 'pointer-events-none opacity-50',
        action && 'cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800',
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

function ListGroupAction({ className, theme, active, disabled, ...props }: IListGroupActionProps) {
  return (
    <a
      aria-current={active ? 'page' : undefined}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
      className={cn(
        LIST_GROUP_ITEM_VARIANTS({ theme, className }),
        'border-b border-neutral-200 last:border-b-0 dark:border-neutral-700',
        'cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800',
        active && 'bg-primary text-neutral-0 border-primary',
        disabled && 'pointer-events-none opacity-50',
      )}
      {...props}
    />
  );
}

export { ListGroup, ListGroupItem, ListGroupAction, LIST_GROUP_ITEM_VARIANTS };

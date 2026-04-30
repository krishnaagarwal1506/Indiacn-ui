import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

interface IButtonGroupProps extends ComponentProps<'div'> {
  orientation?: 'horizontal' | 'vertical';
}

/** Group of related buttons displayed together. */
function ButtonGroup({ className, orientation = 'horizontal', ...props }: IButtonGroupProps) {
  return (
    <div
      role='group'
      className={cn(
        'inline-flex',
        orientation === 'horizontal'
          ? '*:rounded-none [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md [&>*:not(:first-child)]:-ml-px'
          : 'flex-col *:rounded-none [&>*:first-child]:rounded-t-md [&>*:last-child]:rounded-b-md [&>*:not(:first-child)]:-mt-px',
        className,
      )}
      {...props}
    />
  );
}

/** Toolbar container for button groups. */
function ButtonToolbar({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div role='toolbar' className={cn('flex flex-wrap items-center gap-2', className)} {...props} />
  );
}

export { ButtonGroup, ButtonToolbar };

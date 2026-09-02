import { ComponentProps } from 'react';

import { Body2, Label1 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

/*
 * UX4G table: a neutral-50 header at 40px over neutral-0 rows at 60px,
 * separated by a primary-100 rule — the separator is purple-tinted, not grey.
 * A selected row fills primary-50 and turns its text primary.
 *
 * Built on real table elements. A grid of divs loses the row and column
 * relationships a screen reader needs, and that is the whole reason a table
 * exists.
 */

/** Table container. Scrolls horizontally rather than squashing columns. */
function Table({ className, ...props }: ComponentProps<'table'>) {
  return (
    <div className='bg-neutral-0 w-full overflow-x-auto rounded-xl border border-neutral-100'>
      <table className={cn('w-full border-collapse text-left', className)} {...props} />
    </div>
  );
}

/** Header group. Its cells should be `TableHead`, not `TableCell`. */
function TableHeader({ className, ...props }: ComponentProps<'thead'>) {
  return <thead className={cn('bg-neutral-50', className)} {...props} />;
}

/** Body group. */
function TableBody({ className, ...props }: ComponentProps<'tbody'>) {
  return <tbody className={className} {...props} />;
}

/** Footer group, for totals. */
function TableFooter({ className, ...props }: ComponentProps<'tfoot'>) {
  return (
    <tfoot
      className={cn('border-t border-neutral-100 bg-neutral-50 font-medium', className)}
      {...props}
    />
  );
}

interface ITableRowProps extends ComponentProps<'tr'> {
  selected?: boolean;
}

/** A row. `selected` fills primary-50 and is announced through aria-selected. */
function TableRow({ className, selected, ...props }: ITableRowProps) {
  return (
    <tr
      aria-selected={selected || undefined}
      className={cn(
        'border-primary-100 border-b transition-colors last:border-b-0',
        selected ? 'bg-primary-50 text-primary-800' : 'hover:bg-neutral-50',
        className,
      )}
      {...props}
    />
  );
}

/**
 * Header cell.
 *
 * `scope` defaults to `col`. Leaving it off is the usual reason a table reads
 * as an unlabelled grid, so it is set rather than left to the caller.
 */
function TableHead({ className, scope = 'col', children, ...props }: ComponentProps<'th'>) {
  return (
    <th scope={scope} className={cn('px-4 py-2.5 align-middle', className)} {...props}>
      <Label1 className='text-neutral font-semibold'>{children}</Label1>
    </th>
  );
}

/** Body cell. Pass `scope='row'` on the cell that names the row. */
function TableCell({ className, children, ...props }: ComponentProps<'td'>) {
  return (
    <td className={cn('px-4 py-5 align-middle', className)} {...props}>
      <Body2 className='text-[inherit]'>{children}</Body2>
    </td>
  );
}

/**
 * Row header cell — the cell that names its row.
 *
 * Every row wants one. Without it a screen reader reads "Owner, Your Friend
 * Buzz, Australia" with no idea whose row that is.
 */
function TableRowHeader({ className, children, ...props }: ComponentProps<'th'>) {
  return (
    <th scope='row' className={cn('px-4 py-5 text-left align-middle', className)} {...props}>
      <Body2 className='font-normal text-[inherit]'>{children}</Body2>
    </th>
  );
}

/** Caption describing the table. Visible by default; add `sr-only` to hide it. */
function TableCaption({ className, ...props }: ComponentProps<'caption'>) {
  return (
    <caption className={cn('px-4 py-3 text-left text-sm text-neutral-600', className)} {...props} />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableRowHeader,
  TableCaption,
};

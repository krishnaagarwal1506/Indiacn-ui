'use client';

import { KeyboardEvent, useCallback, useEffect, useMemo, useRef } from 'react';

import { Button } from '@/components/ui/button';
import { Label1 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

/*
 * UX4G time picker: three scrolling columns of 56x28 items. Hover fills
 * #faefff (primary-50) and the current value fills #ecd0ff (primary-100), with
 * 1px #dee2e6 dividers between the columns.
 *
 * Each column is a listbox where selection follows focus, so the arrow keys
 * change the value directly instead of needing a second confirm keystroke.
 * That is the right pattern for a spinner and it keeps each column to one tab
 * stop rather than sixty.
 */
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;

interface ITimeValue {
  hours: number;
  minutes: number;
  seconds: number;
}

/** Zero-padded two-digit label, the only form the kit shows. */
function pad(value: number) {
  return String(value).padStart(2, '0');
}

/** "14:05:00", or "14:05" when seconds are hidden. */
function formatTime(value: ITimeValue, showSeconds: boolean) {
  const base = `${pad(value.hours)}:${pad(value.minutes)}`;

  return showSeconds ? `${base}:${pad(value.seconds)}` : base;
}

/** Wall-clock time from a Date, with seconds. */
function toTimeValue(date: Date): ITimeValue {
  return { hours: date.getHours(), minutes: date.getMinutes(), seconds: date.getSeconds() };
}

interface ITimeOptionProps {
  option: number;
  selected: boolean;
  onSelect: (value: number) => void;
  registerRef: (option: number, node: HTMLButtonElement | null) => void;
}

/** One number in a column. Split out so its callbacks stay stable. */
function TimeOption({ option, selected, onSelect, registerRef }: ITimeOptionProps) {
  const handleClick = useCallback(() => onSelect(option), [onSelect, option]);
  const handleRef = useCallback(
    (node: HTMLButtonElement | null) => registerRef(option, node),
    [registerRef, option],
  );

  return (
    <button
      ref={handleRef}
      type='button'
      role='option'
      aria-selected={selected}
      tabIndex={selected ? 0 : -1}
      onClick={handleClick}
      className={cn(
        'focus-visible:shadow-focus-primary text-neutral hover:bg-primary-50 flex h-7 w-14 shrink-0 cursor-pointer items-center justify-center rounded-md text-sm transition-colors focus-visible:outline-none',
        selected && 'bg-primary-100 font-medium',
      )}
    >
      {pad(option)}
    </button>
  );
}

interface ITimeColumnProps {
  label: string;
  count: number;
  value: number;
  onValueChange: (value: number) => void;
}

/** One scrolling column of numbers, keyboard-driven as a listbox. */
function TimeColumn({ label, count, value, onValueChange }: ITimeColumnProps) {
  const options = useMemo(() => Array.from({ length: count }, (_, index) => index), [count]);
  const nodes = useRef(new Map<number, HTMLButtonElement>());
  const list = useRef<HTMLDivElement>(null);

  const registerRef = useCallback((option: number, node: HTMLButtonElement | null) => {
    if (node) nodes.current.set(option, node);
    else nodes.current.delete(option);
  }, []);

  // scrollTop rather than scrollIntoView: the latter also scrolls every
  // ancestor, which would yank the page on mount. The container is `relative`
  // so that offsetTop is measured against it and not the document body.
  useEffect(() => {
    const node = nodes.current.get(value);
    const container = list.current;
    if (!node || !container) return;
    container.scrollTop = node.offsetTop - (container.clientHeight - node.offsetHeight) / 2;
  }, [value]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const steps: Record<string, number> = {
        ArrowUp: -1,
        ArrowDown: 1,
        PageUp: -10,
        PageDown: 10,
      };
      if (event.key in steps) {
        event.preventDefault();
        const next = (value + steps[event.key] + count) % count;
        onValueChange(next);
        nodes.current.get(next)?.focus();

        return;
      }
      if (event.key === 'Home' || event.key === 'End') {
        event.preventDefault();
        const next = event.key === 'Home' ? 0 : count - 1;
        onValueChange(next);
        nodes.current.get(next)?.focus();
      }
    },
    [value, count, onValueChange],
  );

  return (
    <div
      ref={list}
      role='listbox'
      aria-label={label}
      onKeyDown={handleKeyDown}
      className='relative flex h-56 flex-col gap-0.5 overflow-y-auto px-1.5'
    >
      {options.map(option => (
        <TimeOption
          key={option}
          option={option}
          selected={option === value}
          onSelect={onValueChange}
          registerRef={registerRef}
        />
      ))}
    </div>
  );
}

interface ITimeColumnsProps {
  value: ITimeValue;
  onValueChange: (value: ITimeValue) => void;
  showSeconds?: boolean;
  className?: string;
}

/**
 * The three columns on their own, for composing into a larger surface.
 *
 * DateTimePicker uses this beside a Calendar; TimePicker wraps it in the card
 * with the header and footer.
 */
function TimeColumns({ value, onValueChange, showSeconds = true, className }: ITimeColumnsProps) {
  const setHours = useCallback(
    (hours: number) => onValueChange({ ...value, hours }),
    [onValueChange, value],
  );
  const setMinutes = useCallback(
    (minutes: number) => onValueChange({ ...value, minutes }),
    [onValueChange, value],
  );
  const setSeconds = useCallback(
    (seconds: number) => onValueChange({ ...value, seconds }),
    [onValueChange, value],
  );

  return (
    <div className={cn('flex divide-x divide-neutral-100', className)}>
      <TimeColumn label='Hour' count={HOURS_IN_DAY} value={value.hours} onValueChange={setHours} />
      <TimeColumn
        label='Minute'
        count={MINUTES_IN_HOUR}
        value={value.minutes}
        onValueChange={setMinutes}
      />
      {showSeconds && (
        <TimeColumn
          label='Second'
          count={MINUTES_IN_HOUR}
          value={value.seconds}
          onValueChange={setSeconds}
        />
      )}
    </div>
  );
}

interface ITimePickerProps {
  value: ITimeValue;
  onValueChange: (value: ITimeValue) => void;
  showSeconds?: boolean;
  /** Shows the header echoing the current value. */
  showHeader?: boolean;
  /** Called by the Ok button. Omit it and the button is not rendered. */
  onConfirm?: () => void;
  className?: string;
}

/** Time picker card: the value echoed above the columns, Now and Ok below. */
function TimePicker({
  value,
  onValueChange,
  showSeconds = true,
  showHeader = false,
  onConfirm,
  className,
}: ITimePickerProps) {
  const handleNow = useCallback(() => onValueChange(toTimeValue(new Date())), [onValueChange]);

  return (
    <div
      className={cn(
        'bg-neutral-0 inline-flex flex-col divide-y divide-neutral-100 rounded-lg shadow-md',
        className,
      )}
    >
      {showHeader && (
        <Label1 className='text-neutral px-4 py-2.5 text-center tabular-nums'>
          {formatTime(value, showSeconds)}
        </Label1>
      )}
      <TimeColumns
        value={value}
        onValueChange={onValueChange}
        showSeconds={showSeconds}
        className='py-2'
      />
      <div className='flex items-center justify-between gap-3 p-2.5'>
        <Button variant='text' size='sm' onClick={handleNow}>
          Now
        </Button>
        {onConfirm && (
          <Button size='sm' onClick={onConfirm}>
            Ok
          </Button>
        )}
      </div>
    </div>
  );
}

export type { ITimeValue };

export { TimePicker, TimeColumns, formatTime, toTimeValue };

'use client';

import { ChevronDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { KeyboardEvent, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Label1, Label2 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

/*
 * UX4G calendar: four views off one surface — a single month, two months side
 * by side for ranges, a year of months, and a decade of years.
 *
 * Measured from the kit at 1:1 — today is a 1px #613af5 outline, the selected
 * day is filled #613af5, a range fills #faefff (primary-50), and the card
 * carries a shadow rather than a border.
 *
 * Two deliberate departures. The kit's day cells are 24px on a 41px pitch;
 * these are 36px on a 37px pitch, so the footprint is unchanged but the target
 * clears WCAG 2.5.8 comfortably. And in the two-month view the kit repeats the
 * full arrow set under both headers; here the back arrows sit on the first
 * month and the forward arrows on the last, because two controls that move the
 * same window read as four different destinations to a screen reader.
 */
const WEEKDAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const;

const MONTH_LABELS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
] as const;

const MONTH_LABELS_LONG = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

const DAYS_IN_GRID = 42;

/** Midnight on the given day, so comparisons ignore the clock. */
function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

/** Shifts by whole days, rolling over month and year boundaries. */
function addDays(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
}

/** Shifts by whole months, landing on the first of the target month. */
function addMonths(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

/** True when both dates fall on the same calendar day. */
function isSameDay(a?: Date | null, b?: Date | null) {
  return (
    !!a &&
    !!b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

/** True when both dates fall in the same calendar month. */
function isSameMonth(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}

/** Stable key for a day, used to address the cell refs. */
function dayKey(date: Date) {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

/** The six weeks that cover a month, including the days either side of it. */
function monthMatrix(month: Date, weekStartsOn: number) {
  const first = new Date(month.getFullYear(), month.getMonth(), 1);
  const offset = (first.getDay() - weekStartsOn + 7) % 7;
  const start = addDays(first, -offset);

  return Array.from({ length: DAYS_IN_GRID }, (_, index) => addDays(start, index));
}

/** Weekday names rotated so the configured first day of the week leads. */
function weekdayLabels(weekStartsOn: number) {
  return Array.from({ length: 7 }, (_, index) => WEEKDAY_LABELS[(weekStartsOn + index) % 7]);
}

/** Long-form label used in the day cell's accessible name. */
function describeDay(date: Date) {
  return `${date.getDate()} ${MONTH_LABELS_LONG[date.getMonth()]} ${date.getFullYear()}`;
}

interface IDateRange {
  from: Date | null;
  to: Date | null;
}

type TCalendarView = 'day' | 'month' | 'year';

const CELL_BASE =
  'focus-visible:shadow-focus-primary flex size-9 cursor-pointer items-center justify-center rounded-md border border-transparent text-sm transition-colors focus-visible:outline-none disabled:pointer-events-none';

interface ICalendarNavProps {
  label: ReactNode;
  onStepBack: () => void;
  onStepForward: () => void;
  onJumpBack: () => void;
  onJumpForward: () => void;
  stepBackLabel: string;
  stepForwardLabel: string;
  jumpBackLabel: string;
  jumpForwardLabel: string;
  showStep?: boolean;
  showBack?: boolean;
  showForward?: boolean;
}

/**
 * The arrow row above a grid.
 *
 * `showBack` / `showForward` let the two-month view put the back arrows on the
 * first header and the forward arrows on the last without duplicating them.
 */
function CalendarNav({
  label,
  onStepBack,
  onStepForward,
  onJumpBack,
  onJumpForward,
  stepBackLabel,
  stepForwardLabel,
  jumpBackLabel,
  jumpForwardLabel,
  showStep = true,
  showBack = true,
  showForward = true,
}: ICalendarNavProps) {
  return (
    <div className='flex h-8 items-center justify-between gap-2'>
      <div className='flex items-center gap-1'>
        {showBack && (
          <CalendarNavButton onClick={onJumpBack} label={jumpBackLabel}>
            <ChevronsLeft aria-hidden />
          </CalendarNavButton>
        )}
        {showBack && showStep && (
          <CalendarNavButton onClick={onStepBack} label={stepBackLabel}>
            <ChevronLeft aria-hidden />
          </CalendarNavButton>
        )}
      </div>
      <Label1 className='text-neutral flex-1 text-center'>{label}</Label1>
      <div className='flex items-center gap-1'>
        {showForward && showStep && (
          <CalendarNavButton onClick={onStepForward} label={stepForwardLabel}>
            <ChevronRight aria-hidden />
          </CalendarNavButton>
        )}
        {showForward && (
          <CalendarNavButton onClick={onJumpForward} label={jumpForwardLabel}>
            <ChevronsRight aria-hidden />
          </CalendarNavButton>
        )}
      </div>
    </div>
  );
}

/** One arrow. Always carries a text label, since the glyph is decorative. */
function CalendarNavButton({
  onClick,
  label,
  children,
}: {
  onClick: () => void;
  label: string;
  children: ReactNode;
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      aria-label={label}
      className='focus-visible:shadow-focus-primary hover:bg-primary-50 hover:text-primary-800 flex size-7 cursor-pointer items-center justify-center rounded-md text-neutral-600 transition-colors focus-visible:outline-none [&>svg]:size-4'
    >
      {children}
    </button>
  );
}

interface ICalendarDayProps {
  date: Date;
  label: string;
  outside: boolean;
  disabled: boolean;
  selected: boolean;
  today: boolean;
  inRange: boolean;
  focused: boolean;
  onSelect: (date: Date) => void;
  registerRef: (key: string, node: HTMLButtonElement | null) => void;
}

/** A single day. Split out so its click and ref callbacks stay stable. */
function CalendarDay({
  date,
  label,
  outside,
  disabled,
  selected,
  today,
  inRange,
  focused,
  onSelect,
  registerRef,
}: ICalendarDayProps) {
  const handleClick = useCallback(() => onSelect(date), [onSelect, date]);
  const handleRef = useCallback(
    (node: HTMLButtonElement | null) => registerRef(dayKey(date), node),
    [registerRef, date],
  );

  return (
    <button
      ref={handleRef}
      type='button'
      role='gridcell'
      aria-label={label}
      aria-selected={selected}
      aria-current={today ? 'date' : undefined}
      aria-disabled={disabled || undefined}
      disabled={disabled}
      tabIndex={focused ? 0 : -1}
      onClick={handleClick}
      className={cn(
        CELL_BASE,
        'text-neutral hover:bg-primary-50 hover:text-primary-800',
        outside && 'text-neutral-400',
        inRange && !selected && 'bg-primary-50 text-primary-800 hover:bg-primary-100',
        today && !selected && 'border-primary text-primary',
        selected &&
          'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground',
        disabled &&
          'cursor-not-allowed text-neutral-400 hover:bg-transparent hover:text-neutral-400',
      )}
    >
      {date.getDate()}
    </button>
  );
}

interface ICalendarMonthProps {
  month: Date;
  weekStartsOn: number;
  today: Date;
  focusedDate: Date;
  selected: Date | null;
  range: IDateRange | null;
  fixedWeeks: boolean;
  onSelect: (date: Date) => void;
  registerRef: (key: string, node: HTMLButtonElement | null) => void;
  min?: Date;
  max?: Date;
}

/** One month's day grid, with its weekday header row. */
function CalendarMonth({
  month,
  weekStartsOn,
  today,
  focusedDate,
  selected,
  range,
  min,
  max,
  fixedWeeks,
  onSelect,
  registerRef,
}: ICalendarMonthProps) {
  const labels = useMemo(() => weekdayLabels(weekStartsOn), [weekStartsOn]);
  const days = useMemo(() => {
    const all = monthMatrix(month, weekStartsOn);
    if (fixedWeeks) return all;
    const lastWeek = all.slice(35);

    return lastWeek.every(day => !isSameMonth(day, month)) ? all.slice(0, 35) : all;
  }, [month, weekStartsOn, fixedWeeks]);

  const rangeFrom = range?.from ? startOfDay(range.from) : null;
  const rangeTo = range?.to ? startOfDay(range.to) : null;

  return (
    <div className='flex flex-col gap-1'>
      <div role='row' className='grid grid-cols-7'>
        {labels.map(label => (
          <Label2
            key={label}
            role='columnheader'
            className='text-neutral flex size-9 items-center justify-center'
          >
            {label}
          </Label2>
        ))}
      </div>
      <div className='grid grid-cols-7 gap-y-1'>
        {days.map(day => {
          const outside = !isSameMonth(day, month);
          const beforeMin = !!min && day < startOfDay(min);
          const afterMax = !!max && day > startOfDay(max);
          const isEdge = isSameDay(day, rangeFrom) || isSameDay(day, rangeTo);
          const inRange = !!rangeFrom && !!rangeTo && day >= rangeFrom && day <= rangeTo && !isEdge;

          return (
            <CalendarDay
              key={dayKey(day)}
              date={day}
              label={describeDay(day)}
              outside={outside}
              disabled={beforeMin || afterMax || outside}
              selected={isSameDay(day, selected) || isEdge}
              today={isSameDay(day, today)}
              inRange={inRange}
              focused={isSameDay(day, focusedDate)}
              onSelect={onSelect}
              registerRef={registerRef}
            />
          );
        })}
      </div>
    </div>
  );
}

/** One month name in the year view, or one year in the decade view. */
function CalendarChoice({
  value,
  label,
  selected,
  muted,
  onSelect,
}: {
  value: number;
  label: string;
  selected: boolean;
  muted: boolean;
  onSelect: (value: number) => void;
}) {
  const handleClick = useCallback(() => onSelect(value), [onSelect, value]);

  return (
    <button
      type='button'
      onClick={handleClick}
      aria-pressed={selected}
      className={cn(
        CELL_BASE,
        'h-10 w-full',
        muted ? 'text-neutral-400' : 'text-neutral hover:bg-primary-50 hover:text-primary-800',
        selected &&
          'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground',
      )}
    >
      {label}
    </button>
  );
}

interface ICalendarProps {
  /** Selected day in single-select mode. */
  value?: Date | null;
  onValueChange?: (date: Date) => void;
  /** Selected span in range mode. Providing this switches the calendar to ranges. */
  range?: IDateRange;
  onRangeChange?: (range: IDateRange) => void;
  /** Months shown side by side. Two is the kit's range layout. */
  months?: 1 | 2;
  /** Which grid opens first. Month and year views drill down into days. */
  defaultView?: TCalendarView;
  /** Shows the month and year selects plus the Month/Year view toggle. */
  showViewControls?: boolean;
  /**
   * Always render six week rows. Off by default: a trailing week made
   * entirely of next month's days is noise, and the kit never shows one.
   */
  fixedWeeks?: boolean;
  weekStartsOn?: 0 | 1;
  min?: Date;
  max?: Date;
  /** Anchors "today" and the initial view. Pass a fixed date in tests. */
  referenceDate?: Date;
  className?: string;
}

/**
 * Date grid with day, month and year views.
 *
 * Keyboard support follows the ARIA grid pattern: arrows move a day at a time,
 * Home and End jump to the ends of the week, PageUp and PageDown change month,
 * and only the focused cell is tabbable so the grid is a single tab stop.
 */
function Calendar({
  value = null,
  onValueChange,
  range,
  onRangeChange,
  months = 1,
  defaultView = 'day',
  showViewControls = false,
  fixedWeeks = false,
  weekStartsOn = 1,
  min,
  max,
  referenceDate,
  className,
}: ICalendarProps) {
  const today = useMemo(() => startOfDay(referenceDate ?? new Date()), [referenceDate]);
  const [view, setView] = useState<TCalendarView>(defaultView);
  const [viewMonth, setViewMonth] = useState(() =>
    addMonths(value ?? range?.from ?? referenceDate ?? new Date(), 0),
  );
  const [focusedDate, setFocusedDate] = useState(() => value ?? range?.from ?? today);
  const cells = useRef(new Map<string, HTMLButtonElement>());
  const pendingFocus = useRef(false);

  const registerRef = useCallback((key: string, node: HTMLButtonElement | null) => {
    if (node) cells.current.set(key, node);
    else cells.current.delete(key);
  }, []);

  useEffect(() => {
    if (!pendingFocus.current) return;
    pendingFocus.current = false;
    cells.current.get(dayKey(focusedDate))?.focus();
  }, [focusedDate]);

  const moveFocus = useCallback((next: Date) => {
    pendingFocus.current = true;
    setFocusedDate(next);
    setViewMonth(current => (isSameMonth(next, current) ? current : addMonths(next, 0)));
  }, []);

  const handleSelect = useCallback(
    (date: Date) => {
      setFocusedDate(date);
      if (range && onRangeChange) {
        const open = range.from && !range.to;
        if (open && range.from && date >= range.from) onRangeChange({ from: range.from, to: date });
        else onRangeChange({ from: date, to: null });

        return;
      }
      onValueChange?.(date);
    },
    [range, onRangeChange, onValueChange],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const moves: Record<string, number> = {
        ArrowLeft: -1,
        ArrowRight: 1,
        ArrowUp: -7,
        ArrowDown: 7,
      };
      if (event.key in moves) {
        event.preventDefault();
        moveFocus(addDays(focusedDate, moves[event.key]));

        return;
      }
      if (event.key === 'Home' || event.key === 'End') {
        event.preventDefault();
        const offset = (focusedDate.getDay() - weekStartsOn + 7) % 7;
        moveFocus(addDays(focusedDate, event.key === 'Home' ? -offset : 6 - offset));

        return;
      }
      if (event.key === 'PageUp' || event.key === 'PageDown') {
        event.preventDefault();
        const step = event.key === 'PageUp' ? -1 : 1;
        const shifted = addMonths(focusedDate, event.shiftKey ? step * 12 : step);
        const lastDay = new Date(shifted.getFullYear(), shifted.getMonth() + 1, 0).getDate();
        moveFocus(
          new Date(
            shifted.getFullYear(),
            shifted.getMonth(),
            Math.min(focusedDate.getDate(), lastDay),
          ),
        );
      }
    },
    [focusedDate, moveFocus, weekStartsOn],
  );

  const stepMonth = useCallback((amount: number) => {
    setViewMonth(current => addMonths(current, amount));
  }, []);
  const stepBack = useCallback(() => stepMonth(-1), [stepMonth]);
  const stepForward = useCallback(() => stepMonth(1), [stepMonth]);
  const jumpBack = useCallback(() => stepMonth(-12), [stepMonth]);
  const jumpForward = useCallback(() => stepMonth(12), [stepMonth]);

  const pickMonth = useCallback((month: number) => {
    setViewMonth(current => new Date(current.getFullYear(), month, 1));
    setView('day');
  }, []);
  const pickYear = useCallback((year: number) => {
    setViewMonth(current => new Date(year, current.getMonth(), 1));
    setView('month');
  }, []);
  const openMonthView = useCallback(
    () => setView(current => (current === 'month' ? 'day' : 'month')),
    [],
  );
  const openYearView = useCallback(
    () => setView(current => (current === 'year' ? 'day' : 'year')),
    [],
  );

  const handleMonthSelect = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => pickMonth(Number(event.target.value)),
    [pickMonth],
  );
  const handleYearSelect = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    const year = Number(event.target.value);
    setViewMonth(current => new Date(year, current.getMonth(), 1));
  }, []);

  const years = useMemo(() => {
    const first = min ? min.getFullYear() : today.getFullYear() - 100;
    const last = max ? max.getFullYear() : today.getFullYear() + 10;

    return Array.from({ length: last - first + 1 }, (_, index) => first + index);
  }, [min, max, today]);

  const decadeStart = Math.floor(viewMonth.getFullYear() / 10) * 10;
  const shownMonths = useMemo(
    () => Array.from({ length: months }, (_, index) => addMonths(viewMonth, index)),
    [months, viewMonth],
  );

  return (
    <div
      className={cn('bg-neutral-0 inline-flex flex-col gap-4 rounded-lg p-5 shadow-md', className)}
    >
      {view === 'day' && showViewControls && (
        <div className='flex items-center gap-2'>
          <CalendarSelect
            value={viewMonth.getMonth()}
            onChange={handleMonthSelect}
            label='Month'
            options={MONTH_LABELS.map((label, index) => ({ value: index, label }))}
          />
          <CalendarSelect
            value={viewMonth.getFullYear()}
            onChange={handleYearSelect}
            label='Year'
            options={years.map(year => ({ value: year, label: String(year) }))}
          />
          <div className='ml-auto flex overflow-hidden rounded-md border border-neutral-200 [&>*+*]:border-l [&>*+*]:border-neutral-200'>
            <CalendarViewToggle label='Month' onClick={openMonthView} />
            <CalendarViewToggle label='Year' onClick={openYearView} />
          </div>
        </div>
      )}

      {view === 'day' && (
        <div
          role='grid'
          aria-label='Calendar'
          onKeyDown={handleKeyDown}
          className='flex flex-wrap gap-6'
        >
          {shownMonths.map((month, index) => (
            <div key={month.toISOString()} className='flex flex-col gap-2'>
              <CalendarNav
                label={`${MONTH_LABELS[month.getMonth()]} ${month.getFullYear()}`}
                onStepBack={stepBack}
                onStepForward={stepForward}
                onJumpBack={jumpBack}
                onJumpForward={jumpForward}
                stepBackLabel='Previous month'
                stepForwardLabel='Next month'
                jumpBackLabel='Previous year'
                jumpForwardLabel='Next year'
                showBack={index === 0}
                showForward={index === shownMonths.length - 1}
              />
              <CalendarMonth
                month={month}
                weekStartsOn={weekStartsOn}
                today={today}
                focusedDate={focusedDate}
                selected={value}
                range={range ?? null}
                min={min}
                max={max}
                fixedWeeks={fixedWeeks}
                onSelect={handleSelect}
                registerRef={registerRef}
              />
            </div>
          ))}
        </div>
      )}

      {view === 'month' && (
        <div className='flex w-[260px] flex-col gap-3'>
          <CalendarNav
            label={String(viewMonth.getFullYear())}
            onStepBack={stepBack}
            onStepForward={stepForward}
            onJumpBack={jumpBack}
            onJumpForward={jumpForward}
            stepBackLabel='Previous month'
            stepForwardLabel='Next month'
            jumpBackLabel='Previous year'
            jumpForwardLabel='Next year'
            showStep={false}
          />
          <div className='grid grid-cols-3 gap-2'>
            {MONTH_LABELS.map((label, index) => (
              <CalendarChoice
                key={label}
                value={index}
                label={label}
                selected={viewMonth.getMonth() === index}
                muted={false}
                onSelect={pickMonth}
              />
            ))}
          </div>
        </div>
      )}

      {view === 'year' && (
        <div className='flex w-[260px] flex-col gap-3'>
          <CalendarNav
            label={`${decadeStart}-${decadeStart + 9}`}
            onStepBack={stepBack}
            onStepForward={stepForward}
            onJumpBack={jumpBack}
            onJumpForward={jumpForward}
            stepBackLabel='Previous year'
            stepForwardLabel='Next year'
            jumpBackLabel='Previous decade'
            jumpForwardLabel='Next decade'
            showStep={false}
          />
          <div className='grid grid-cols-3 gap-2'>
            {Array.from({ length: 12 }, (_, index) => decadeStart - 1 + index).map(year => (
              <CalendarChoice
                key={year}
                value={year}
                label={String(year)}
                selected={viewMonth.getFullYear() === year}
                muted={year < decadeStart || year > decadeStart + 9}
                onSelect={pickYear}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/** Month or year select in the day header. Native, so it works on touch. */
function CalendarSelect({
  value,
  onChange,
  label,
  options,
}: {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
  options: { value: number; label: string }[];
}) {
  return (
    <div className='relative'>
      <select
        value={value}
        onChange={onChange}
        aria-label={label}
        className='bg-neutral-0 text-neutral focus-visible:shadow-focus-primary hover:border-primary h-8 cursor-pointer appearance-none rounded-md border border-neutral-200 pr-7 pl-2.5 text-sm transition-colors focus-visible:outline-none'
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className='pointer-events-none absolute top-1/2 right-2 size-4 -translate-y-1/2 text-neutral-600'
        aria-hidden
      />
    </div>
  );
}

/**
 * One half of the Month/Year toggle.
 *
 * These open the month and decade grids. The kit paints one of them filled,
 * but nothing is selected while the day grid is showing, so neither is marked
 * pressed here — the fill would claim a state that does not exist.
 */
function CalendarViewToggle({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='focus-visible:shadow-focus-primary text-neutral hover:bg-primary-50 hover:text-primary-800 h-8 cursor-pointer px-3 text-sm transition-colors focus-visible:outline-none'
    >
      {label}
    </button>
  );
}

export type { IDateRange, TCalendarView };

export { Calendar, addDays, addMonths, isSameDay, startOfDay, MONTH_LABELS, MONTH_LABELS_LONG };

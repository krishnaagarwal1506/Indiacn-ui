'use client';

import { CalendarDays, Clock } from 'lucide-react';
import { ReactNode, useCallback, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Calendar, IDateRange, MONTH_LABELS, startOfDay } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ITimeValue, TimeColumns, formatTime, toTimeValue } from '@/components/ui/time-picker';
import { Label1 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

/*
 * UX4G picker triggers: an input-shaped field with a trailing icon, or a bare
 * 32px icon button. Both open the same surface.
 *
 * The field is a button rather than a text input. The kit draws it as a field,
 * and it looks identical here, but a real input invites typing and then has to
 * guess what "03/04" means. The button says what it is — aria-haspopup dialog,
 * the chosen date as its label — and the grid stays the one way in.
 */
const TRIGGER_FIELD =
  'border-neutral-200 bg-neutral-0 hover:border-primary focus-visible:border-primary focus-visible:shadow-focus-primary flex h-11 w-full cursor-pointer items-center gap-2 rounded-md border px-3 text-left text-sm transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&>svg]:size-[18px] [&>svg]:shrink-0 [&>svg]:text-neutral-600';

const TRIGGER_ICON =
  'border-neutral-200 bg-neutral-0 hover:border-primary hover:text-primary focus-visible:shadow-focus-primary flex size-8 cursor-pointer items-center justify-center rounded-md border text-neutral-600 transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&>svg]:size-[18px]';

const PANEL = 'w-auto border-0 bg-transparent p-0 shadow-none';

type TPickerTrigger = 'field' | 'icon';

/** "21 Oct 2021" — spelled out so the day and month can never be read the wrong way round. */
function formatDate(date: Date) {
  return `${date.getDate()} ${MONTH_LABELS[date.getMonth()]} ${date.getFullYear()}`;
}

/** "21 Oct 2021 – 30 Oct 2021", or just the start while the span is open. */
function formatRange(range: IDateRange) {
  if (!range.from) return '';

  return range.to ? `${formatDate(range.from)} – ${formatDate(range.to)}` : formatDate(range.from);
}

interface IPickerTriggerProps {
  trigger: TPickerTrigger;
  text: string;
  placeholder: string;
  icon: ReactNode;
  triggerLabel: string;
  disabled?: boolean;
  className?: string;
}

/** Shared trigger for every picker on this page. */
function PickerTrigger({
  trigger,
  text,
  placeholder,
  icon,
  triggerLabel,
  disabled,
  className,
}: IPickerTriggerProps) {
  if (trigger === 'icon') {
    return (
      <PopoverTrigger
        aria-label={text ? `${triggerLabel}: ${text}` : triggerLabel}
        disabled={disabled}
        className={cn(TRIGGER_ICON, className)}
      >
        {icon}
      </PopoverTrigger>
    );
  }

  return (
    <PopoverTrigger
      aria-label={text ? `${triggerLabel}: ${text}` : triggerLabel}
      disabled={disabled}
      className={cn(TRIGGER_FIELD, className)}
    >
      <Label1
        className={cn('flex-1 truncate font-normal', text ? 'text-neutral' : 'text-neutral-500')}
      >
        {text || placeholder}
      </Label1>
      {icon}
    </PopoverTrigger>
  );
}

interface IDatePickerProps {
  value: Date | null;
  onValueChange: (date: Date) => void;
  trigger?: TPickerTrigger;
  placeholder?: string;
  /** Overrides the trigger text. Useful for a locale-aware format. */
  format?: (date: Date) => string;
  showViewControls?: boolean;
  min?: Date;
  max?: Date;
  disabled?: boolean;
  className?: string;
}

/** Single date. Picking a day commits it and closes the surface. */
function DatePicker({
  value,
  onValueChange,
  trigger = 'field',
  placeholder = 'Select Date',
  format = formatDate,
  showViewControls = true,
  min,
  max,
  disabled,
  className,
}: IDatePickerProps) {
  const [open, setOpen] = useState(false);

  const handleSelect = useCallback(
    (date: Date) => {
      onValueChange(date);
      setOpen(false);
    },
    [onValueChange],
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PickerTrigger
        trigger={trigger}
        text={value ? format(value) : ''}
        placeholder={placeholder}
        icon={<CalendarDays aria-hidden />}
        triggerLabel='Choose date'
        disabled={disabled}
        className={className}
      />
      <PopoverContent align='start' className={PANEL}>
        <Calendar
          value={value}
          onValueChange={handleSelect}
          showViewControls={showViewControls}
          min={min}
          max={max}
        />
      </PopoverContent>
    </Popover>
  );
}

interface IDateRangePickerProps {
  value: IDateRange;
  onValueChange: (range: IDateRange) => void;
  trigger?: TPickerTrigger;
  placeholder?: string;
  min?: Date;
  max?: Date;
  disabled?: boolean;
  className?: string;
}

/**
 * Date span across two months.
 *
 * The surface stays open until both ends are set, since closing on the first
 * click would make the second one impossible.
 */
function DateRangePicker({
  value,
  onValueChange,
  trigger = 'field',
  placeholder = 'Select Dates',
  min,
  max,
  disabled,
  className,
}: IDateRangePickerProps) {
  const [open, setOpen] = useState(false);

  const handleChange = useCallback(
    (range: IDateRange) => {
      onValueChange(range);
      if (range.from && range.to) setOpen(false);
    },
    [onValueChange],
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PickerTrigger
        trigger={trigger}
        text={formatRange(value)}
        placeholder={placeholder}
        icon={<CalendarDays aria-hidden />}
        triggerLabel='Choose dates'
        disabled={disabled}
        className={className}
      />
      <PopoverContent align='start' className={PANEL}>
        <Calendar
          months={2}
          range={value}
          onRangeChange={handleChange}
          min={min}
          max={max}
          weekStartsOn={1}
        />
      </PopoverContent>
    </Popover>
  );
}

interface ITimePickerFieldProps {
  value: ITimeValue | null;
  onValueChange: (value: ITimeValue) => void;
  trigger?: TPickerTrigger;
  placeholder?: string;
  showSeconds?: boolean;
  disabled?: boolean;
  className?: string;
}

/** Time of day. Ok commits the draft, so scrolling past a value costs nothing. */
function TimePickerField({
  value,
  onValueChange,
  trigger = 'field',
  placeholder = 'Select Time',
  showSeconds = true,
  disabled,
  className,
}: ITimePickerFieldProps) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<ITimeValue>(value ?? { hours: 0, minutes: 0, seconds: 0 });

  const handleOpenChange = useCallback(
    (next: boolean) => {
      if (next && value) setDraft(value);
      setOpen(next);
    },
    [value],
  );

  const handleNow = useCallback(() => setDraft(toTimeValue(new Date())), []);
  const handleConfirm = useCallback(() => {
    onValueChange(draft);
    setOpen(false);
  }, [onValueChange, draft]);

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PickerTrigger
        trigger={trigger}
        text={value ? formatTime(value, showSeconds) : ''}
        placeholder={placeholder}
        icon={<Clock aria-hidden />}
        triggerLabel='Choose time'
        disabled={disabled}
        className={className}
      />
      <PopoverContent align='start' className={PANEL}>
        <div className='bg-neutral-0 inline-flex flex-col divide-y divide-neutral-100 rounded-lg shadow-md'>
          <TimeColumns
            value={draft}
            onValueChange={setDraft}
            showSeconds={showSeconds}
            className='py-2'
          />
          <PickerFooter onReset={handleNow} resetLabel='Now' onConfirm={handleConfirm} />
        </div>
      </PopoverContent>
    </Popover>
  );
}

interface IDateTimePickerProps {
  value: Date | null;
  onValueChange: (date: Date) => void;
  trigger?: TPickerTrigger;
  placeholder?: string;
  showSeconds?: boolean;
  min?: Date;
  max?: Date;
  disabled?: boolean;
  className?: string;
}

/** Calendar and clock on one surface. Ok commits both halves at once. */
function DateTimePicker({
  value,
  onValueChange,
  trigger = 'field',
  placeholder = 'Select Date & Time',
  showSeconds = true,
  min,
  max,
  disabled,
  className,
}: IDateTimePickerProps) {
  const [open, setOpen] = useState(false);
  const [draftDate, setDraftDate] = useState<Date | null>(value);
  const [draftTime, setDraftTime] = useState<ITimeValue>(
    value ? toTimeValue(value) : { hours: 0, minutes: 0, seconds: 0 },
  );

  const handleOpenChange = useCallback(
    (next: boolean) => {
      if (next && value) {
        setDraftDate(value);
        setDraftTime(toTimeValue(value));
      }
      setOpen(next);
    },
    [value],
  );

  const handleToday = useCallback(() => setDraftDate(startOfDay(new Date())), []);
  const handleConfirm = useCallback(() => {
    const day = draftDate ?? startOfDay(new Date());
    onValueChange(
      new Date(
        day.getFullYear(),
        day.getMonth(),
        day.getDate(),
        draftTime.hours,
        draftTime.minutes,
        draftTime.seconds,
      ),
    );
    setOpen(false);
  }, [draftDate, draftTime, onValueChange]);

  const text = value ? `${formatDate(value)} ${formatTime(toTimeValue(value), showSeconds)}` : '';

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PickerTrigger
        trigger={trigger}
        text={text}
        placeholder={placeholder}
        icon={<CalendarDays aria-hidden />}
        triggerLabel='Choose date and time'
        disabled={disabled}
        className={className}
      />
      <PopoverContent align='start' className={PANEL}>
        <div className='bg-neutral-0 inline-flex flex-col divide-y divide-neutral-100 rounded-lg shadow-md'>
          <div className='flex divide-x divide-neutral-100'>
            <Calendar
              value={draftDate}
              onValueChange={setDraftDate}
              min={min}
              max={max}
              className='rounded-none bg-transparent p-4 shadow-none'
            />
            <div className='flex flex-col'>
              <Label1 className='text-neutral border-b border-neutral-100 px-4 py-2.5 text-center tabular-nums'>
                {formatTime(draftTime, showSeconds)}
              </Label1>
              <TimeColumns
                value={draftTime}
                onValueChange={setDraftTime}
                showSeconds={showSeconds}
                className='py-2'
              />
            </div>
          </div>
          <PickerFooter onReset={handleToday} resetLabel='Today' onConfirm={handleConfirm} />
        </div>
      </PopoverContent>
    </Popover>
  );
}

/** The reset-and-confirm row under a draft surface. */
function PickerFooter({
  onReset,
  resetLabel,
  onConfirm,
}: {
  onReset: () => void;
  resetLabel: string;
  onConfirm: () => void;
}) {
  return (
    <div className='flex items-center justify-between gap-3 p-2.5'>
      <div className='flex-1 text-center'>
        <Button variant='text' size='sm' onClick={onReset}>
          {resetLabel}
        </Button>
      </div>
      <Button size='sm' onClick={onConfirm}>
        Ok
      </Button>
    </div>
  );
}

export type { TPickerTrigger };

export { DatePicker, DateRangePicker, DateTimePicker, TimePickerField, formatDate, formatRange };

'use client';

import { useCallback, useState } from 'react';

import { Calendar, IDateRange } from '@/components/ui/calendar';
import { Body3 } from '@/components/ui/typography';

export function CalendarDefault() {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className='flex flex-col gap-4'>
      <Calendar value={date} onValueChange={setDate} showViewControls />
      <Body3 className='text-neutral-600'>
        {date ? date.toDateString() : 'No date chosen yet.'}
      </Body3>
    </div>
  );
}

export function CalendarRange() {
  const [range, setRange] = useState<IDateRange>({ from: null, to: null });

  return <Calendar months={2} range={range} onRangeChange={setRange} />;
}

export function CalendarMonthView() {
  const [date, setDate] = useState<Date | null>(null);
  const handleChange = useCallback((next: Date) => setDate(next), []);

  return <Calendar value={date} onValueChange={handleChange} defaultView='month' />;
}

export function CalendarYearView() {
  const [date, setDate] = useState<Date | null>(null);
  const handleChange = useCallback((next: Date) => setDate(next), []);

  return <Calendar value={date} onValueChange={handleChange} defaultView='year' />;
}

export function CalendarBounded() {
  const [date, setDate] = useState<Date | null>(null);
  const today = new Date();
  const min = new Date(today.getFullYear(), today.getMonth(), 1);
  const max = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  return (
    <div className='flex flex-col gap-4'>
      <Calendar value={date} onValueChange={setDate} min={min} max={max} />
      <Body3 className='text-neutral-600'>
        Only days in the current month can be chosen; everything outside the range is disabled.
      </Body3>
    </div>
  );
}

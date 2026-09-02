'use client';

import { useState } from 'react';

import { IDateRange } from '@/components/ui/calendar';
import {
  DatePicker,
  DateRangePicker,
  DateTimePicker,
  TimePickerField,
} from '@/components/ui/date-picker';
import { ITimeValue } from '@/components/ui/time-picker';
import { Label1 } from '@/components/ui/typography';

export function DatePickerDefault() {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className='w-full max-w-[320px]'>
      <DatePicker value={date} onValueChange={setDate} />
    </div>
  );
}

export function DatePickerTriggers() {
  const [field, setField] = useState<Date | null>(null);
  const [icon, setIcon] = useState<Date | null>(null);

  return (
    <div className='flex w-full max-w-[420px] items-end gap-4'>
      <div className='flex-1'>
        <DatePicker value={field} onValueChange={setField} />
      </div>
      <DatePicker value={icon} onValueChange={setIcon} trigger='icon' />
    </div>
  );
}

export function DateRangePickerDefault() {
  const [range, setRange] = useState<IDateRange>({ from: null, to: null });

  return (
    <div className='w-full max-w-[360px]'>
      <DateRangePicker value={range} onValueChange={setRange} />
    </div>
  );
}

export function TimePickerFieldDefault() {
  const [time, setTime] = useState<ITimeValue | null>(null);

  return (
    <div className='w-full max-w-[320px]'>
      <TimePickerField value={time} onValueChange={setTime} />
    </div>
  );
}

export function DateTimePickerDefault() {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <div className='flex w-full max-w-[360px] flex-col gap-2'>
      <Label1 className='text-neutral'>Appointment</Label1>
      <DateTimePicker value={value} onValueChange={setValue} showSeconds={false} />
    </div>
  );
}

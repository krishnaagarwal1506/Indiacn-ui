'use client';

import { useState } from 'react';

import { ITimeValue, TimePicker, formatTime } from '@/components/ui/time-picker';
import { Body3 } from '@/components/ui/typography';

export function TimePickerDefault() {
  const [time, setTime] = useState<ITimeValue>({ hours: 9, minutes: 30, seconds: 0 });

  return (
    <div className='flex flex-col gap-4'>
      <TimePicker value={time} onValueChange={setTime} showHeader />
      <Body3 className='text-neutral-600'>Chosen: {formatTime(time, true)}</Body3>
    </div>
  );
}

export function TimePickerNoSeconds() {
  const [time, setTime] = useState<ITimeValue>({ hours: 14, minutes: 0, seconds: 0 });

  return <TimePicker value={time} onValueChange={setTime} showSeconds={false} showHeader />;
}

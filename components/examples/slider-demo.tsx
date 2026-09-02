'use client';

import { useCallback, useState } from 'react';

import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

export function SliderDefault() {
  const [value, setValue] = useState([40]);

  return (
    <div className='w-full max-w-[360px]'>
      <Label className='mb-3 block'>Household income share</Label>
      <Slider value={value} onValueChange={setValue} showLabels />
    </div>
  );
}

export function SliderRange() {
  const [value, setValue] = useState([25, 75]);

  return (
    <div className='w-full max-w-[360px]'>
      <Label className='mb-3 block'>Age range</Label>
      <Slider value={value} onValueChange={setValue} showLabels />
    </div>
  );
}

export function SliderFormatted() {
  const [value, setValue] = useState([20000, 65000]);
  const formatRupees = useCallback((amount: number) => `₹${amount.toLocaleString('en-IN')}`, []);

  return (
    <div className='w-full max-w-[360px]'>
      <Label className='mb-3 block'>Annual income</Label>
      <Slider
        value={value}
        onValueChange={setValue}
        min={0}
        max={100000}
        step={5000}
        showLabels
        formatValue={formatRupees}
      />
    </div>
  );
}

export function SliderDisabled() {
  return (
    <div className='w-full max-w-[360px]'>
      <Label className='mb-3 block'>Locked after submission</Label>
      <Slider defaultValue={[30, 60]} showLabels disabled />
    </div>
  );
}

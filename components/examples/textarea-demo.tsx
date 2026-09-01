'use client';

import { ChangeEvent, useCallback, useState } from 'react';

import { InputMessage } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function TextareaDefault() {
  return (
    <div className='w-full max-w-[420px]'>
      <Label htmlFor='grievance' className='mb-2'>
        Describe your grievance
      </Label>
      <Textarea id='grievance' placeholder='What happened, and when?' />
    </div>
  );
}

export function TextareaWithCount() {
  const [value, setValue] = useState('');
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value),
    [],
  );

  return (
    <div className='w-full max-w-[420px]'>
      <Label htmlFor='counted' className='mb-2'>
        Summary
      </Label>
      <Textarea
        id='counted'
        showCount
        maxLength={200}
        value={value}
        onChange={handleChange}
        placeholder='Up to 200 characters'
      />
    </div>
  );
}

export function TextareaStates() {
  return (
    <div className='flex w-full max-w-[420px] flex-col gap-5'>
      <div>
        <Label htmlFor='ta-error' className='mb-2'>
          Error
        </Label>
        <Textarea id='ta-error' state='error' defaultValue='Too short' />
        <InputMessage state='error'>Give at least 50 characters of detail.</InputMessage>
      </div>
      <div>
        <Label htmlFor='ta-success' className='mb-2'>
          Success
        </Label>
        <Textarea id='ta-success' state='success' defaultValue='Saved as draft.' />
        <InputMessage state='success'>Draft saved.</InputMessage>
      </div>
    </div>
  );
}

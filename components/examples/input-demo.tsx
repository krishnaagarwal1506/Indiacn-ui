'use client';

import { Mail, Search as SearchIcon } from 'lucide-react';
import { ChangeEvent, useCallback, useState } from 'react';

import { Input, InputMessage } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function InputDefault() {
  return (
    <div className='w-full max-w-[360px]'>
      <Label htmlFor='aadhaar' className='mb-2'>
        Aadhaar number
      </Label>
      <Input id='aadhaar' placeholder='XXXX XXXX XXXX' />
      <InputMessage>Twelve digits, as printed on your card.</InputMessage>
    </div>
  );
}

export function InputSizes() {
  return (
    <div className='flex w-full max-w-[360px] flex-col gap-5'>
      <div>
        <Label htmlFor='size-md' className='mb-2'>
          Default — 44px
        </Label>
        <Input id='size-md' placeholder='Placeholder' />
      </div>
      <div>
        <Label htmlFor='size-lg' className='mb-2'>
          Large — 48px
        </Label>
        <Input id='size-lg' size='lg' placeholder='Placeholder' />
      </div>
    </div>
  );
}

export function InputStates() {
  return (
    <div className='flex w-full max-w-[360px] flex-col gap-5'>
      <div>
        <Label htmlFor='st-error' className='mb-2'>
          Error
        </Label>
        <Input id='st-error' state='error' defaultValue='1234' />
        <InputMessage state='error'>Enter all twelve digits.</InputMessage>
      </div>
      <div>
        <Label htmlFor='st-success' className='mb-2'>
          Success
        </Label>
        <Input id='st-success' state='success' defaultValue='2345 6789 0123' />
        <InputMessage state='success'>Verified with UIDAI.</InputMessage>
      </div>
      <div>
        <Label htmlFor='st-warning' className='mb-2'>
          Warning
        </Label>
        <Input id='st-warning' state='warning' defaultValue='2345 6789 0123' />
        <InputMessage state='warning'>This number is already linked to a claim.</InputMessage>
      </div>
      <div>
        <Label htmlFor='st-disabled' className='mb-2'>
          Disabled
        </Label>
        <Input id='st-disabled' disabled defaultValue='Locked after submission' />
      </div>
    </div>
  );
}

export function InputWithIcons() {
  const [value, setValue] = useState('priya@example.in');
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value), []);
  const handleClear = useCallback(() => setValue(''), []);

  return (
    <div className='flex w-full max-w-[360px] flex-col gap-5'>
      <Input prefixIcon={<Mail />} placeholder='Email address' />
      <Input
        prefixIcon={<SearchIcon />}
        value={value}
        onChange={handleChange}
        onClear={handleClear}
        placeholder='Clearable'
      />
    </div>
  );
}

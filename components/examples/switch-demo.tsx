'use client';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export function SwitchDefault() {
  return (
    <div className='flex items-center gap-3'>
      <Switch id='notifications' defaultChecked />
      <Label htmlFor='notifications'>SMS notifications</Label>
    </div>
  );
}

export function SwitchSizes() {
  return (
    <div className='grid gap-4'>
      <div className='flex items-center gap-3'>
        <Switch id='size-default' defaultChecked />
        <Label htmlFor='size-default'>Default</Label>
      </div>
      <div className='flex items-center gap-3'>
        <Switch id='size-sm' size='sm' defaultChecked />
        <Label htmlFor='size-sm'>Small</Label>
      </div>
    </div>
  );
}

export function SwitchDisabled() {
  return (
    <div className='grid gap-4'>
      <div className='flex items-center gap-3'>
        <Switch id='disabled-on' disabled defaultChecked />
        <Label htmlFor='disabled-on'>Disabled, on</Label>
      </div>
      <div className='flex items-center gap-3'>
        <Switch id='disabled-off' disabled />
        <Label htmlFor='disabled-off'>Disabled, off</Label>
      </div>
    </div>
  );
}

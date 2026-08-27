'use client';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export function RadioGroupDefault() {
  return (
    <RadioGroup defaultValue='hindi'>
      <div className='flex items-center gap-3'>
        <RadioGroupItem value='hindi' id='lang-hindi' />
        <Label htmlFor='lang-hindi'>हिन्दी</Label>
      </div>
      <div className='flex items-center gap-3'>
        <RadioGroupItem value='english' id='lang-english' />
        <Label htmlFor='lang-english'>English</Label>
      </div>
      <div className='flex items-center gap-3'>
        <RadioGroupItem value='tamil' id='lang-tamil' />
        <Label htmlFor='lang-tamil'>தமிழ்</Label>
      </div>
    </RadioGroup>
  );
}

export function RadioGroupDisabled() {
  return (
    <RadioGroup defaultValue='self'>
      <div className='flex items-center gap-3'>
        <RadioGroupItem value='self' id='applicant-self' />
        <Label htmlFor='applicant-self'>Applying for myself</Label>
      </div>
      <div className='flex items-center gap-3'>
        <RadioGroupItem value='other' id='applicant-other' />
        <Label htmlFor='applicant-other'>Applying on behalf of someone</Label>
      </div>
      <div className='flex items-center gap-3'>
        <RadioGroupItem value='agent' id='applicant-agent' disabled />
        <Label htmlFor='applicant-agent'>Applying as an agent (unavailable)</Label>
      </div>
    </RadioGroup>
  );
}

export function RadioGroupHorizontal() {
  return (
    <RadioGroup defaultValue='yes' className='flex gap-6'>
      <div className='flex items-center gap-3'>
        <RadioGroupItem value='yes' id='consent-yes' />
        <Label htmlFor='consent-yes'>Yes</Label>
      </div>
      <div className='flex items-center gap-3'>
        <RadioGroupItem value='no' id='consent-no' />
        <Label htmlFor='consent-no'>No</Label>
      </div>
    </RadioGroup>
  );
}

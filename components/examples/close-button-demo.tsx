'use client';

import { CloseButton } from '@/components/ui/close-button';
import { Label3 } from '@/components/ui/typography';

export function CloseButtonDefault() {
  return <CloseButton label='Close dialog' />;
}

export function CloseButtonVariants() {
  return (
    <div className='flex items-center gap-6'>
      {(['text', 'outlined', 'tonal'] as const).map(variant => (
        <div key={variant} className='flex flex-col items-center gap-2'>
          <CloseButton variant={variant} label={`Close (${variant})`} />
          <Label3 className='text-neutral-600'>{variant}</Label3>
        </div>
      ))}
    </div>
  );
}

export function CloseButtonSizes() {
  return (
    <div className='flex items-center gap-6'>
      {(['sm', 'md', 'lg'] as const).map(size => (
        <div key={size} className='flex flex-col items-center gap-2'>
          <CloseButton size={size} variant='outlined' label={`Close (${size})`} />
          <Label3 className='text-neutral-600'>{size}</Label3>
        </div>
      ))}
    </div>
  );
}

export function CloseButtonDisabled() {
  return (
    <div className='flex items-center gap-6'>
      <CloseButton disabled label='Close' />
      <CloseButton variant='outlined' disabled label='Close' />
      <CloseButton variant='tonal' disabled label='Close' />
    </div>
  );
}

import { ProgressCircle } from '@/components/ui/progress-circle';
import { Label3 } from '@/components/ui/typography';

export function ProgressCircleDefault() {
  return <ProgressCircle value={40} size='xs' />;
}

export function ProgressCircleSizes() {
  return (
    <div className='flex flex-wrap items-end justify-center gap-6'>
      {(['xxs', 'xs', 'sm'] as const).map(size => (
        <div key={size} className='flex flex-col items-center gap-2'>
          <ProgressCircle value={40} size={size} />
          <Label3 className='text-neutral-600'>{size}</Label3>
        </div>
      ))}
    </div>
  );
}

export function ProgressCircleHalf() {
  return (
    <div className='flex flex-wrap items-end justify-center gap-8'>
      <ProgressCircle value={40} size='xs' shape='half' />
      <ProgressCircle value={72} size='sm' shape='half' />
    </div>
  );
}

export function ProgressCircleWithLabel() {
  return (
    <div className='flex flex-wrap items-end justify-center gap-8'>
      <ProgressCircle value={40} size='xxs' label='Users' />
      <ProgressCircle value={40} size='xs' label='Uploading' />
    </div>
  );
}

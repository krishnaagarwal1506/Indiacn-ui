import { ProgressCircle } from '@/components/ui/progress-circle';
import { Label3 } from '@/components/ui/typography';

export function ProgressCircleDefault() {
  return <ProgressCircle value={40} />;
}

export function ProgressCircleSizes() {
  return (
    <div className='flex flex-wrap items-end justify-center gap-8'>
      {([32, 48, 64, 96] as const).map(size => (
        <div key={size} className='flex flex-col items-center gap-2'>
          <ProgressCircle value={40} size={size} showValue={size >= 48} />
          <Label3 className='text-neutral-600'>{size}px</Label3>
        </div>
      ))}
    </div>
  );
}

export function ProgressCircleHalf() {
  return (
    <div className='flex flex-wrap items-end justify-center gap-8'>
      <ProgressCircle value={40} size={96} shape='half' />
      <ProgressCircle value={72} size={140} shape='half' />
    </div>
  );
}

export function ProgressCircleWithLabel() {
  return (
    <div className='flex flex-wrap items-end justify-center gap-8'>
      <ProgressCircle value={40} label='Users' />
      <ProgressCircle value={40} size='xs' label='Uploading' />
    </div>
  );
}

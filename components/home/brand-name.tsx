import { Label1 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

export const BrandName = ({ className }: { className?: string }) => (
  <Label1 className={cn('text-[17px] font-semibold tracking-tight', className)}>
    india<mark className='text-primary bg-transparent'>cn</mark>
  </Label1>
);

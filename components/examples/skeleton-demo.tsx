import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonDefault() {
  return (
    <div className='flex items-center space-x-4'>
      <Skeleton className='h-12 w-12 rounded-full' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[250px]' />
        <Skeleton className='h-4 w-[200px]' />
      </div>
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className='flex w-[300px] flex-col space-y-3'>
      <Skeleton className='h-[125px] w-full rounded-xl' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-3/4' />
      </div>
    </div>
  );
}

export function SkeletonList() {
  return (
    <div className='w-full max-w-sm space-y-4'>
      {[1, 2, 3].map(i => (
        <div key={i} className='flex items-center space-x-4'>
          <Skeleton className='size-10 rounded-full' />
          <div className='flex-1 space-y-2'>
            <Skeleton className='h-4 w-3/4' />
            <Skeleton className='h-3 w-1/2' />
          </div>
        </div>
      ))}
    </div>
  );
}

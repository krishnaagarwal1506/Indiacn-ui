import { Spinner } from '@/components/ui/spinner';

export function SpinnerDefault() {
  return <Spinner />;
}

export function SpinnerThemes() {
  return (
    <div className='flex flex-wrap items-center gap-4'>
      <Spinner theme='primary' />
      <Spinner theme='secondary' />
      <Spinner theme='success' />
      <Spinner theme='danger' />
      <Spinner theme='warning' />
      <Spinner theme='info' />
      <Spinner theme='dark' />
      <Spinner theme='neutral' />
    </div>
  );
}

export function SpinnerGrow() {
  return (
    <div className='flex flex-wrap items-center gap-4'>
      <Spinner variant='grow' theme='primary' />
      <Spinner variant='grow' theme='secondary' />
      <Spinner variant='grow' theme='success' />
      <Spinner variant='grow' theme='danger' />
      <Spinner variant='grow' theme='warning' />
      <Spinner variant='grow' theme='info' />
      <Spinner variant='grow' theme='dark' />
    </div>
  );
}

export function SpinnerSizes() {
  return (
    <div className='flex flex-wrap items-center gap-4'>
      <Spinner size='sm' />
      <Spinner size='md' />
      <Spinner size='lg' />
    </div>
  );
}

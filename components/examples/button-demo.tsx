import { ArrowRight, Download, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function ButtonDefault() {
  return <Button>Primary Action</Button>;
}

export function ButtonVariants() {
  return (
    <div className='flex flex-wrap items-center gap-3'>
      <Button>Filled</Button>
      <Button variant='outlined'>Outlined</Button>
      <Button variant='tonal'>Tonal</Button>
      <Button variant='text'>Text</Button>
    </div>
  );
}

export function ButtonThemes() {
  return (
    <div className='flex flex-wrap items-center gap-3'>
      <Button theme='primary'>Primary</Button>
      <Button theme='success'>Success</Button>
      <Button theme='destructive'>Destructive</Button>
    </div>
  );
}

export function ButtonSizes() {
  return (
    <div className='flex flex-wrap items-center gap-3'>
      <Button size='sm'>Small</Button>
      <Button size='md'>Medium</Button>
      <Button size='lg'>Large</Button>
    </div>
  );
}

export function ButtonWithIcons() {
  return (
    <div className='flex flex-wrap items-center gap-3'>
      <Button prefixIcon={<Search className='size-4' />}>Search</Button>
      <Button variant='outlined' suffixIcon={<ArrowRight className='size-4' />}>
        Continue
      </Button>
      <Button iconButton aria-label='Download'>
        <Download className='size-4' />
      </Button>
    </div>
  );
}

export function ButtonLoading() {
  return (
    <div className='flex flex-wrap items-center gap-3'>
      <Button loading>Submitting</Button>
      <Button variant='outlined' disabled>
        Disabled
      </Button>
    </div>
  );
}

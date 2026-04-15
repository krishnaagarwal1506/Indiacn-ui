/* eslint-disable eslint-frontend-rules/enforce-typography-components */

import { Badge } from '@/components/ui/badge';

export function BadgeDefault() {
  return <Badge>Badge</Badge>;
}

export function BadgeVariants() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Badge variant='filled'>Filled</Badge>
      <Badge variant='outlined'>Outlined</Badge>
      <Badge variant='tonal'>Tonal</Badge>
    </div>
  );
}

export function BadgeThemes() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Badge theme='primary'>Primary</Badge>
      <Badge theme='secondary'>Secondary</Badge>
      <Badge theme='success'>Success</Badge>
      <Badge theme='danger'>Danger</Badge>
      <Badge theme='warning'>Warning</Badge>
    </div>
  );
}

export function BadgeOutlined() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Badge variant='outlined' theme='primary'>
        Primary
      </Badge>
      <Badge variant='outlined' theme='secondary'>
        Secondary
      </Badge>
      <Badge variant='outlined' theme='success'>
        Success
      </Badge>
      <Badge variant='outlined' theme='danger'>
        Danger
      </Badge>
      <Badge variant='outlined' theme='warning'>
        Warning
      </Badge>
    </div>
  );
}

export function BadgePill() {
  return (
    <div className='flex flex-wrap gap-2'>
      <Badge shape='pill' theme='primary'>
        Primary
      </Badge>
      <Badge shape='pill' theme='secondary'>
        Secondary
      </Badge>
      <Badge shape='pill' theme='success'>
        Success
      </Badge>
      <Badge shape='pill' theme='danger'>
        Danger
      </Badge>
      <Badge shape='pill' theme='warning'>
        Warning
      </Badge>
    </div>
  );
}

export function BadgeSizes() {
  return (
    <div className='flex flex-wrap items-center gap-2'>
      <Badge size='sm'>Small</Badge>
      <Badge size='md'>Medium</Badge>
      <Badge size='lg'>Large</Badge>
    </div>
  );
}

export function BadgeHeadings() {
  return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-4xl font-bold'>
        Heading 1 <Badge>New</Badge>
      </h1>
      <h2 className='text-3xl font-bold'>
        Heading 2 <Badge>New</Badge>
      </h2>
      <h3 className='text-2xl font-bold'>
        Heading 3 <Badge>New</Badge>
      </h3>
      <h4 className='text-xl font-bold'>
        Heading 4 <Badge>New</Badge>
      </h4>
      <h5 className='text-lg font-bold'>
        Heading 5 <Badge>New</Badge>
      </h5>
      <h6 className='text-base font-bold'>
        Heading 6 <Badge>New</Badge>
      </h6>
    </div>
  );
}

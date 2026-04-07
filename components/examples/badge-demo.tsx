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

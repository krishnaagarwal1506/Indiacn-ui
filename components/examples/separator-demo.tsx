import { Separator } from '@/components/ui/separator';
import { Body2, Headline5, Label2 } from '@/components/ui/typography';

export function SeparatorDefault() {
  return (
    <div className='w-full max-w-sm'>
      <Headline5>IndiaCN</Headline5>
      <Body2 className='text-neutral-500'>An open source design system.</Body2>
      <Separator className='my-4' />
      <div className='flex h-5 items-center gap-4 text-sm'>
        <Label2>Docs</Label2>
        <Separator orientation='vertical' />
        <Label2>Source</Label2>
        <Separator orientation='vertical' />
        <Label2>License</Label2>
      </div>
    </div>
  );
}

export function SeparatorVertical() {
  return (
    <div className='flex h-10 items-center gap-4'>
      <Body2>Left</Body2>
      <Separator orientation='vertical' />
      <Body2>Middle</Body2>
      <Separator orientation='vertical' />
      <Body2>Right</Body2>
    </div>
  );
}

export function SeparatorInList() {
  return (
    <div className='bg-neutral-0 w-full max-w-sm rounded-lg border border-neutral-200'>
      <div className='p-3'>
        <Body2>Account settings</Body2>
      </div>
      <Separator />
      <div className='p-3'>
        <Body2>Notifications</Body2>
      </div>
      <Separator />
      <div className='p-3'>
        <Body2>Privacy</Body2>
      </div>
    </div>
  );
}

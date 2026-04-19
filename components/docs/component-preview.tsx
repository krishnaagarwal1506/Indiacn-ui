import Image from 'next/image';

import { ComponentPreviewTabs } from '@/components/docs/component-preview-tabs';
import { ComponentSource } from '@/components/docs/component-source';
import { Body1 } from '@/components/ui/typography';
import { Index } from '@/registry/index';

export function ComponentPreview({
  name,
  type,
  className,
  align = 'center',
  hideCode = false,
  chromeLessOnMobile = false,
  ...props
}: React.ComponentProps<'div'> & {
  name: string;
  align?: 'center' | 'start' | 'end';
  description?: string;
  hideCode?: boolean;
  type?: 'block' | 'component' | 'example';
  chromeLessOnMobile?: boolean;
}) {
  const entry = Index[name];
  const Component = entry?.component;

  if (!Component) {
    return (
      <Body1 className='text-muted-foreground mt-6 text-sm'>
        Component{' '}
        <code className='bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm'>
          {name}
        </code>{' '}
        not found in registry.
      </Body1>
    );
  }

  if (type === 'block') {
    return (
      <div className='not-prose relative aspect-[4/2.5] w-full overflow-hidden rounded-md border md:-mx-1'>
        <Image
          src={`/components/${name}-light.png`}
          alt={name}
          width={1440}
          height={900}
          className='bg-background absolute top-0 left-0 z-20 w-[970px] max-w-none sm:w-7xl md:hidden dark:hidden'
        />
        <Image
          src={`/components/${name}-dark.png`}
          alt={name}
          width={1440}
          height={900}
          className='bg-background absolute top-0 left-0 z-20 hidden w-[970px] max-w-none sm:w-7xl md:hidden dark:block'
        />
        <div className='bg-background absolute inset-0 hidden w-[1600px] md:block'>
          <iframe src={`/view/${name}`} className='size-full' />
        </div>
      </div>
    );
  }

  return (
    <ComponentPreviewTabs
      className={className}
      align={align}
      hideCode={hideCode}
      component={<Component />}
      source={
        entry.code ? (
          <ComponentSource name={name} title={name} />
        ) : (
          <ComponentSource src={entry.files?.[0]?.path} title={name} />
        )
      }
      chromeLessOnMobile={chromeLessOnMobile}
      {...props}
    />
  );
}

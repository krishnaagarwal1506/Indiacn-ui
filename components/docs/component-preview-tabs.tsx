import { Tabs, TabsContent, TabsList, TabsTrigger } from 'fumadocs-ui/components/tabs';

import { cn } from '@/lib/utils';

export function ComponentPreviewTabs({
  className,
  align = 'center',
  hideCode = false,
  chromeLessOnMobile = false,
  component,
  source,
  ...props
}: React.ComponentProps<'div'> & {
  align?: 'center' | 'start' | 'end';
  hideCode?: boolean;
  chromeLessOnMobile?: boolean;
  component: React.ReactNode;
  source: React.ReactNode;
}) {
  const alignClass = {
    center: 'items-center justify-center',
    start: 'items-start justify-start',
    end: 'items-end justify-end',
  }[align];

  return (
    <div className={cn('not-prose my-6', className)} {...props}>
      <Tabs defaultValue='preview'>
        <TabsList>
          <TabsTrigger value='preview'>Preview</TabsTrigger>
          {!hideCode && <TabsTrigger value='code'>Code</TabsTrigger>}
        </TabsList>
        <TabsContent value='preview'>
          <div
            className={cn(
              'bg-neutral-0 flex min-h-72 rounded-lg border border-neutral-100 p-8',
              alignClass,
              chromeLessOnMobile && 'sm:p-4',
            )}
          >
            {component}
          </div>
        </TabsContent>
        {/* The source's own figure is the bordered surface, so it needs no wrapper. */}
        {!hideCode && <TabsContent value='code'>{source}</TabsContent>}
      </Tabs>
    </div>
  );
}

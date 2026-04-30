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
              'flex min-h-96 rounded-lg border p-8',
              alignClass,
              chromeLessOnMobile && 'sm:p-4',
            )}
          >
            {component}
          </div>
        </TabsContent>
        {!hideCode && (
          <TabsContent value='code'>
            <div className='overflow-hidden rounded-lg [&_figure]:rounded-none [&_figure]:border-0'>
              {source}
            </div>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}

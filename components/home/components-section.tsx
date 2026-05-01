import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Chip } from '@/components/ui/chip';
import { Progress, ProgressBar } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Body1, Body2, Headline2, Label1, Label2, Label3 } from '@/components/ui/typography';
import { COMPONENTS } from '@/constants/home';
import { cn } from '@/lib/utils';

/* ── Component tile wrapper ─────────────────────────────────── */

const ComponentTile = ({
  title,
  tag,
  children,
}: {
  title: string;
  tag: string;
  children: React.ReactNode;
}) => (
  <div className='group bg-neutral-0 flex flex-col overflow-hidden rounded-xl border border-neutral-200 transition-all hover:-translate-y-0.5 hover:shadow-md'>
    <div className='flex flex-1 items-center justify-center bg-neutral-50 p-7'>{children}</div>
    <div className='bg-neutral-0 flex items-center justify-between border-t border-neutral-200 px-4 py-3.5'>
      <Label1 className='text-neutral font-semibold'>{title}</Label1>
      <Label3 className='font-mono text-neutral-500'>{tag}</Label3>
    </div>
  </div>
);

/* ── Individual demo tiles ──────────────────────────────────── */

const ButtonTile = () => (
  <div className='flex flex-wrap justify-center gap-2'>
    <Button size='sm'>Primary</Button>
    <Button size='sm' variant='outlined'>
      Outlined
    </Button>
    <Button size='sm' theme='success'>
      Success
    </Button>
  </div>
);

const BadgeTile = () => (
  <div className='flex max-w-[220px] flex-wrap justify-center gap-2'>
    <Badge theme='success' variant='tonal'>
      Verified
    </Badge>
    <Badge theme='warning' variant='tonal'>
      Pending
    </Badge>
    <Badge theme='danger' variant='tonal'>
      Rejected
    </Badge>
    <Badge theme='neutral' variant='tonal'>
      Draft
    </Badge>
    <Badge theme='info' variant='tonal'>
      In review
    </Badge>
  </div>
);

const InputTile = () => (
  <div className='w-full max-w-[240px]'>
    <Label2 className='mb-1.5 block font-semibold text-neutral-600'>Aadhaar number</Label2>
    <div className='border-primary bg-neutral-0 shadow-focus-primary flex h-10 items-center rounded-md border-2 px-3'>
      <Label1 className='text-neutral font-mono tracking-widest'>1234 5678 ____</Label1>
    </div>
    <Label3 className='text-success-600 mt-1.5 flex items-center gap-1'>
      <Check className='size-3' /> Format valid
    </Label3>
  </div>
);

const TabsTile = () => (
  <div className='w-full max-w-[260px]'>
    <Tabs defaultValue='application' variant='underline'>
      <TabsList>
        <TabsTrigger value='application'>Application</TabsTrigger>
        <TabsTrigger value='status'>Status</TabsTrigger>
        <TabsTrigger value='docs'>Documents</TabsTrigger>
      </TabsList>
      <TabsContent value='application'>
        <Body2 className='pt-3 text-center text-neutral-500'>Application details</Body2>
      </TabsContent>
      <TabsContent value='status'>
        <Body2 className='pt-3 text-center text-neutral-500'>Track your status</Body2>
      </TabsContent>
      <TabsContent value='docs'>
        <Body2 className='pt-3 text-center text-neutral-500'>Upload documents</Body2>
      </TabsContent>
    </Tabs>
  </div>
);

const ProgressTile = () => (
  <div className='w-full max-w-[220px]'>
    <div className='mb-2 flex justify-between'>
      <Label2 className='text-neutral-600'>Verification</Label2>
      <Label2 className='text-neutral font-semibold'>72%</Label2>
    </div>
    <Progress value={72} size='md'>
      <ProgressBar value={72} theme='primary' />
    </Progress>
    <div className='mt-3 mb-1.5 flex justify-between'>
      <Label2 className='text-neutral-600'>Documents</Label2>
      <Label2 className='text-neutral font-semibold'>45%</Label2>
    </div>
    <Progress value={45} size='md'>
      <ProgressBar value={45} theme='warning' />
    </Progress>
  </div>
);

const ChipTile = () => (
  <div className='flex max-w-[220px] flex-wrap justify-center gap-1.5'>
    {['PAN', 'Aadhaar', 'Driving Licence', 'Voter ID', 'Passport'].map(x => (
      <Chip key={x} variant='outlined' theme='neutral' size='sm'>
        {x}
      </Chip>
    ))}
  </div>
);

const ToastTile = () => (
  <div className='bg-neutral flex w-full max-w-[260px] items-center gap-2.5 rounded-lg p-3.5 shadow-lg dark:bg-neutral-100 dark:text-neutral-900'>
    <Check className='text-success-400 size-4 shrink-0' />
    <Label2 className='text-neutral-0 flex-1 dark:text-neutral-900'>
      Document uploaded successfully
    </Label2>
    <Label3 className='font-mono text-neutral-500'>2s</Label3>
  </div>
);

const AvatarTile = () => (
  <div className='flex'>
    {[
      { initials: 'KA', color: 'var(--color-primary)' },
      { initials: 'PR', color: 'var(--color-success)' },
      { initials: 'SM', color: 'var(--color-warning)' },
      { initials: '+4', color: 'var(--color-neutral-500)' },
    ].map((a, idx) => (
      <div
        key={idx}
        style={{ background: a.color }}
        className={cn(
          'border-neutral-0 text-neutral-0 flex size-10 items-center justify-center rounded-full border-2 dark:border-neutral-900 dark:text-neutral-900',
          idx > 0 && '-ml-2.5',
        )}
      >
        <Label3 className='font-semibold'>{a.initials}</Label3>
      </div>
    ))}
  </div>
);

/* ── Exported sections ──────────────────────────────────────── */

export const ComponentTicker = () => (
  <section
    aria-hidden='true'
    className='relative overflow-hidden border-y border-neutral-200 bg-neutral-50/50 py-5'
  >
    <div className='flex animate-[scroll_30s_linear_infinite] gap-4 whitespace-nowrap'>
      {[...COMPONENTS, ...COMPONENTS].map((name, i) => (
        <Label1
          key={`${name}-${i}`}
          className='bg-neutral-0 inline-flex items-center rounded-full border border-neutral-200 px-4 py-1.5 text-xs text-neutral-600'
        >
          {name}
        </Label1>
      ))}
    </div>
  </section>
);

export const ComponentsSection = () => (
  <section id='components' className='bg-neutral-50 py-28'>
    <div className='mx-auto max-w-6xl px-6'>
      <div className='mb-14 flex flex-wrap items-end justify-between gap-10'>
        <div className='max-w-xl'>
          <Label2 className='text-primary mb-4 block font-semibold tracking-widest uppercase'>
            The library
          </Label2>
          <Headline2 className='text-neutral-0 mb-4 text-3xl tracking-tight sm:text-4xl'>
            {COMPONENTS.length}+ accessible components.{' '}
            <em className='font-[inherit] text-neutral-500 not-italic'>Copy, paste, ship.</em>
          </Headline2>
          <Body1 className='text-neutral-600'>
            Every component is built on Radix UI primitives, styled with Tailwind v4, and tested
            against WCAG 2.1 AA. The source lives in your repo — no black-box dependency.
          </Body1>
        </div>
        <Link
          href='/docs'
          className='text-primary inline-flex items-center gap-1.5 text-sm font-medium no-underline hover:underline'
        >
          View all components <ArrowRight className='size-3.5' />
        </Link>
      </div>

      <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
        <ComponentTile title='Button' tag='button.tsx'>
          {' '}
          <ButtonTile />{' '}
        </ComponentTile>
        <ComponentTile title='Badge' tag='badge.tsx'>
          {' '}
          <BadgeTile />{' '}
        </ComponentTile>
        <ComponentTile title='Input' tag='input.tsx'>
          {' '}
          <InputTile />{' '}
        </ComponentTile>
        <ComponentTile title='Tabs' tag='tabs.tsx'>
          {' '}
          <TabsTile />{' '}
        </ComponentTile>
        <ComponentTile title='Progress' tag='progress.tsx'>
          {' '}
          <ProgressTile />{' '}
        </ComponentTile>
        <ComponentTile title='Chip' tag='chip.tsx'>
          {' '}
          <ChipTile />{' '}
        </ComponentTile>
        <ComponentTile title='Toast' tag='toast.tsx'>
          {' '}
          <ToastTile />{' '}
        </ComponentTile>
        <ComponentTile title='Avatar group' tag='avatar.tsx'>
          {' '}
          <AvatarTile />{' '}
        </ComponentTile>
      </div>

      {/* Full component name strip */}
      <div className='mt-14 flex flex-wrap gap-x-5 gap-y-2.5 border-t border-b border-neutral-200 py-5'>
        {COMPONENTS.map(c => (
          <Label2 key={c} className='text-neutral-600'>
            {c}
          </Label2>
        ))}
      </div>
    </div>
  </section>
);

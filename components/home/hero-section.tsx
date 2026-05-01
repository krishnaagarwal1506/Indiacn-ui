'use client';

import { ArrowRight, Check, Github, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Step, Stepper } from '@/components/ui/stepper';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Body1, Body2, Headline1, Label1, Label3 } from '@/components/ui/typography';
import { GITHUB_URL, UX_4G_URL } from '@/constants';

import { ChakraBg } from './chakra-bg';
import { WindowChromeDots } from './window-chrome-dots';

const HeroPreviewCard = () => {
  const [tab, setTab] = useState('button');

  return (
    <div className='bg-neutral-0 overflow-hidden rounded-2xl border border-neutral-200 shadow-xl'>
      {/* macOS-style window chrome — purely decorative */}
      <div className='flex h-9 items-center justify-between border-b border-neutral-200 bg-neutral-50 px-3.5'>
        <WindowChromeDots />
        <Label3 className='font-mono text-neutral-500'>
          components/<strong className='text-neutral font-semibold'>{tab}.tsx</strong>
        </Label3>
        <div className='w-8' />
      </div>

      {/* Real Tabs component from the library */}
      <Tabs value={tab} onValueChange={setTab} variant='underline'>
        <TabsList className='bg-neutral-0 border-b border-neutral-200 px-2'>
          <TabsTrigger value='button'>button</TabsTrigger>
          <TabsTrigger value='alert'>alert</TabsTrigger>
          <TabsTrigger value='stepper'>stepper</TabsTrigger>
        </TabsList>

        <div className='flex min-h-[220px] items-center justify-center bg-neutral-50 p-8'>
          <TabsContent value='button' className='w-full max-w-[280px]'>
            <div className='flex flex-col gap-3'>
              <Button className='w-full'>Apply for Aadhaar update</Button>
              <Button className='w-full' variant='outlined'>
                View status
              </Button>
              <Button className='w-full' variant='tonal'>
                Verify with DigiLocker
              </Button>
            </div>
          </TabsContent>

          <TabsContent value='alert' className='w-full max-w-[360px]'>
            <div className='flex flex-col gap-2.5'>
              <Alert theme='success'>
                <AlertIcon>
                  <Check className='size-4' />
                </AlertIcon>
                <div>
                  <AlertTitle>Application submitted</AlertTitle>
                  <AlertDescription>Reference number ARN-2026-0481</AlertDescription>
                </div>
              </Alert>
              <Alert theme='info'>
                <AlertIcon>
                  <Shield className='size-4' />
                </AlertIcon>
                <div>
                  <AlertTitle>Verify your mobile</AlertTitle>
                  <AlertDescription>OTP sent to +91 ••••• ••231</AlertDescription>
                </div>
              </Alert>
            </div>
          </TabsContent>

          <TabsContent value='stepper' className='w-full max-w-[400px]'>
            <Stepper activeStep={1}>
              <Step step={0} title='Eligibility' />
              <Step step={1} title='Details' />
              <Step step={2} title='Documents' />
              <Step step={3} title='Review' />
            </Stepper>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export const HeroSection = () => (
  <section className='relative overflow-hidden pt-20 pb-24'>
    <ChakraBg />

    {/* Subtle dot grid */}
    <div className='pointer-events-none absolute inset-0 overflow-hidden'>
      <div className='absolute inset-0 mask-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-neutral-0)_80%)]'>
        <div className='absolute inset-0 bg-[linear-gradient(var(--color-primary-200)_1px,transparent_1px),linear-gradient(to_right,var(--color-primary-200)_1px,transparent_1px)] bg-size-[60px_60px] opacity-[0.12]' />
      </div>
    </div>

    <div className='relative mx-auto max-w-6xl px-6'>
      <div
        className='grid items-center gap-16'
        style={{ gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 0.95fr)' }}
      >
        {/* Left — text content */}
        <div>
          <Badge variant='tonal' theme='primary' shape='pill' className='mb-6'>
            <Sparkles className='mr-1.5 size-3.5' />
            Open source · MIT · Built in India
          </Badge>

          <Headline1
            className='text-neutral mb-6 font-bold tracking-tight'
            style={{
              fontSize: 'clamp(36px, 4.5vw, 56px)',
              lineHeight: 1.12,
              letterSpacing: '-0.025em',
            }}
          >
            Components <em className='text-primary not-italic'>built for Bharat.</em>
          </Headline1>

          <Body1 className='mb-3 max-w-[540px] text-lg text-neutral-600'>
            IndiaCN is an open-source, copy-paste React component library based on UX4G&nbsp;2.0 —
            the design language used for India&apos;s public digital services. ShadCN-compatible,
            accessible by default, and free forever under MIT.
          </Body1>

          <Body2 className='mb-9 text-neutral-500'>
            A community initiative — not affiliated with the Government of India.
          </Body2>

          <div className='flex flex-wrap items-center gap-3'>
            <Link href='/docs'>
              <Button size='lg' suffixIcon={<ArrowRight className='size-4' />}>
                Get started
              </Button>
            </Link>
            <a href={GITHUB_URL} target='_blank' rel='noopener noreferrer'>
              <Button size='lg' variant='outlined' prefixIcon={<Github className='size-4' />}>
                Star on GitHub
              </Button>
            </a>
            <a href={UX_4G_URL} target='_blank' rel='noopener noreferrer'>
              <Button size='lg' variant='text'>
                UX4G inspiration
              </Button>
            </a>
          </div>

          {/* Trust strip */}
          <div className='mt-14 flex flex-wrap items-baseline gap-x-9 gap-y-4'>
            {[
              { v: '25+', l: 'components' },
              { v: 'WCAG 2.1 AA', l: 'accessibility' },
              { v: '7', l: 'semantic scales' },
              { v: '21', l: 'type styles' },
            ].map(s => (
              <div key={s.l}>
                <Label1 className='text-neutral text-xl font-semibold tracking-tight'>{s.v}</Label1>
                <Label3 className='mt-1 block tracking-widest text-neutral-500 uppercase'>
                  {s.l}
                </Label3>
              </div>
            ))}
          </div>
        </div>

        {/* Right — live preview */}
        <div className='relative'>
          <HeroPreviewCard />
          <div className='bg-neutral text-neutral-0 absolute top-[-14px] right-5 rounded-full px-3 py-1'>
            <Label3 className='font-semibold tracking-widest uppercase'>Live preview</Label3>
          </div>
        </div>
      </div>
    </div>
  </section>
);

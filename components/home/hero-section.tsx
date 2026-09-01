'use client';

import { ArrowRight, Check, Github, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { BharatCycle } from '@/components/home/bharat-cycle';
import { ChakraBg } from '@/components/home/chakra-bg';
import { WindowChromeDots } from '@/components/home/window-chrome-dots';
import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Step, Stepper } from '@/components/ui/stepper';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Body1, Headline1, Label2, Label3 } from '@/components/ui/typography';
import {
  COMPONENT_COUNT,
  DOC_PAGE_COUNT,
  GITHUB_URL,
  SEMANTIC_SCALE_COUNT,
  TYPE_STYLE_COUNT,
  UX_4G_URL,
} from '@/constants';

/* Font size and line height always travel together: a size override alone
 * leaves the typography component's own leading behind and the lines collide. */
const HERO_LEAD_STYLE = {
  fontSize: 'clamp(26px, 3.1vw, 42px)',
  lineHeight: 1.15,
  letterSpacing: '-0.02em',
} as const;

const HERO_WORD_STYLE = {
  fontSize: 'clamp(60px, 9vw, 116px)',
  lineHeight: 0.92,
  letterSpacing: '-0.035em',
} as const;

/** Facts a developer can check, set like a package manifest rather than a stat block. */
const MANIFEST = [
  `${COMPONENT_COUNT} components`,
  `${DOC_PAGE_COUNT} documented`,
  `${TYPE_STYLE_COUNT} type styles`,
  `${SEMANTIC_SCALE_COUNT} semantic scales`,
  'WCAG 2.1 AA',
  'MIT',
];

/** Framed component preview shown inside the homepage hero. */
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
  <section className='relative overflow-hidden pt-16 pb-24'>
    <ChakraBg />

    {/* Subtle dot grid */}
    <div className='pointer-events-none absolute inset-0 overflow-hidden'>
      <div className='absolute inset-0 mask-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-neutral-0)_80%)]'>
        <div className='absolute inset-0 bg-[linear-gradient(var(--color-primary-200)_1px,transparent_1px),linear-gradient(to_right,var(--color-primary-200)_1px,transparent_1px)] bg-size-[60px_60px] opacity-[0.12]' />
      </div>
    </div>

    <div className='relative mx-auto max-w-6xl px-6'>
      <Badge variant='tonal' theme='primary' shape='pill' className='mb-8'>
        <Sparkles className='mr-1.5 size-3.5' />
        Open source · MIT · Built in India
      </Badge>

      {/* The masthead. The heading carries the whole sentence for screen
          readers; the cycling word below it is decorative and aria-hidden. */}
      <Headline1 className='text-neutral font-semibold' style={HERO_LEAD_STYLE}>
        Components built for <Label2 className='sr-only'>Bharat</Label2>
      </Headline1>
      <BharatCycle className='mt-2 mb-10' style={HERO_WORD_STYLE} />

      <div className='grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16'>
        <div>
          <Body1 className='mb-8 max-w-[540px] text-lg text-neutral-600'>
            An open-source React component library built on UX4G&nbsp;2.0 — the design language
            behind India&apos;s public digital services. Installed through a shadcn registry, so the
            source lands in your repo instead of your lockfile.
          </Body1>

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

          {/* Reads like a package manifest. No character separators: at narrow
              widths a wrapped line would open with an orphaned glyph. */}
          <div className='mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-neutral-200 pt-6'>
            {MANIFEST.map(item => (
              <Label3 key={item} className='font-mono text-neutral-500'>
                {item}
              </Label3>
            ))}
          </div>

          <Label3 className='mt-4 block text-neutral-500'>
            A community initiative — not affiliated with the Government of India.
          </Label3>
        </div>

        <HeroPreviewCard />
      </div>
    </div>
  </section>
);

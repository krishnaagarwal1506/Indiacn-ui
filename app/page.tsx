'use client';

import { ArrowRight, Code2, Copy, Github, Layers, Palette, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Body1, Body2, Display6, Headline2, Headline5, Label1 } from '@/components/ui/typography';
import { GITHUB_URL } from '@/constants';
import { cn } from '@/utils';

const COMPONENTS = [
  'Accordion',
  'Alert',
  'Badge',
  'Breadcrumb',
  'Button',
  'Card',
  'Chip',
  'Collapse',
  'Dropdown',
  'List Group',
  'Modal',
  'Offcanvas',
  'Pagination',
  'Popover',
  'Progress',
  'Search',
  'Separator',
  'Skeleton',
  'Spinner',
  'Stepper',
  'Tabs',
  'Toast',
  'Tooltip',
  'Typography',
];

/** Decorative background grid. */
function AnimatedGrid() {
  return (
    <div className='pointer-events-none absolute inset-0 overflow-hidden'>
      <div className='absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,var(--color-neutral))]'>
        <div className='absolute inset-0 bg-[linear-gradient(var(--color-primary)_1px,transparent_1px),linear-gradient(to_right,var(--color-primary)_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.03] dark:opacity-[0.06]' />
      </div>
    </div>
  );
}

/** Decorative floating label shown on desktop. */
function FloatingComponent({
  name,
  delay,
  className,
}: {
  name: string;
  delay: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'bg-neutral-0/80 absolute rounded-lg border border-neutral-200/60 px-3 py-1.5 text-xs font-medium text-neutral-500 shadow-sm backdrop-blur-sm dark:border-neutral-700/60 dark:bg-neutral-900/80 dark:text-neutral-400',
        className,
      )}
      style={{
        animation: `float ${3 + delay * 0.5}s ease-in-out infinite`,
        animationDelay: `${delay * 0.3}s`,
      }}
    >
      {name}
    </div>
  );
}

/** Copyable CLI command display. */
function CopyCommand() {
  const [copied, setCopied] = useState(false);
  const command = 'npx indiacn-ui init';

  const handleCopy = useCallback(() => {
    void navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [command]);

  return (
    <button
      onClick={handleCopy}
      className='group flex items-center gap-3 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 font-mono text-sm transition-colors hover:border-neutral-300 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-700'
    >
      <Body2 className='text-neutral-500'>$</Body2>
      <Body2 className='text-neutral-700 dark:text-neutral-300'>{command}</Body2>
      {copied ? (
        <Label1 className='text-success text-xs'>Copied!</Label1>
      ) : (
        <Copy className='size-3.5 text-neutral-400 transition-colors group-hover:text-neutral-600 dark:group-hover:text-neutral-300' />
      )}
    </button>
  );
}

/** Homepage for IndiaCN UI. */
export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  return (
    <div className='relative min-h-screen overflow-hidden'>
      <AnimatedGrid />

      {mounted && (
        <div className='pointer-events-none absolute inset-0 hidden lg:block'>
          <FloatingComponent name='Button' delay={0} className='top-[18%] left-[8%]' />
          <FloatingComponent name='Card' delay={1} className='top-[22%] right-[12%]' />
          <FloatingComponent name='Modal' delay={2} className='top-[55%] left-[5%]' />
          <FloatingComponent name='Tabs' delay={3} className='top-[48%] right-[8%]' />
          <FloatingComponent name='Accordion' delay={4} className='top-[75%] left-[15%]' />
          <FloatingComponent name='Toast' delay={5} className='top-[72%] right-[15%]' />
        </div>
      )}

      {/* Hero */}
      <section className='relative flex min-h-[85vh] flex-col items-center justify-center px-6 text-center'>
        <div
          className={cn(
            'mx-auto max-w-4xl transition-all duration-700',
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          )}
        >
          <Badge variant='tonal' theme='primary' shape='pill' size='lg' className='mb-6'>
            <Sparkles className='mr-1 size-3.5' />
            Open Source Design System for India
          </Badge>

          <Display6 className='mb-6 text-5xl leading-[1.1] tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl dark:text-neutral-100'>
            Beautiful components
            <br />
            for{' '}
            <Display6 className='from-primary to-primary-400 inline bg-linear-to-r bg-clip-text text-transparent'>
              Indian Digital
            </Display6>{' '}
            Services
          </Display6>

          <Body1 className='mx-auto mb-10 max-w-2xl text-lg text-neutral-500 sm:text-xl dark:text-neutral-400'>
            Copy-paste ready React components built with Tailwind CSS and Radix UI. Based on the
            UX4G 2.0 Design System for government and public-service applications.
          </Body1>

          <div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
            <Link href='/docs'>
              <Button size='lg'>
                Get Started
                <ArrowRight className='ml-1 size-4' />
              </Button>
            </Link>
            <a href={GITHUB_URL} target='_blank' rel='noopener noreferrer'>
              <Button size='lg' variant='outlined'>
                <Github className='mr-1 size-4' />
                GitHub
              </Button>
            </a>
          </div>

          <div className='mt-8'>
            <CopyCommand />
          </div>
        </div>
      </section>

      {/* Component ticker */}
      <section className='relative overflow-hidden border-y border-neutral-200 bg-neutral-50/50 py-6 dark:border-neutral-800 dark:bg-neutral-900/50'>
        <div className='flex animate-[scroll_30s_linear_infinite] gap-6 whitespace-nowrap'>
          {[...COMPONENTS, ...COMPONENTS].map((name, i) => (
            <Label1
              key={`${name}-${i}`}
              className='bg-neutral-0 inline-flex items-center rounded-full border border-neutral-200 px-4 py-1.5 text-sm text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300'
            >
              {name}
            </Label1>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className='relative mx-auto max-w-6xl px-6 py-24'>
        <div className='mb-16 text-center'>
          <Headline2 className='mb-4 text-3xl tracking-tight sm:text-4xl'>Why IndiaCN?</Headline2>
          <Body1 className='mx-auto max-w-2xl text-lg text-neutral-500 dark:text-neutral-400'>
            A design system made specifically for Indian government and public-service digital
            products, following UX4G 2.0 guidelines.
          </Body1>
        </div>

        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {[
            {
              icon: <Code2 className='size-6' />,
              title: 'Copy & Paste',
              description:
                'No npm package needed. Copy the component code directly into your project and customize it.',
            },
            {
              icon: <Palette className='size-6' />,
              title: 'UX4G 2.0 Themed',
              description:
                'Pre-configured with the official UX4G 2.0 color palette, typography, and spacing tokens.',
            },
            {
              icon: <Layers className='size-6' />,
              title: 'Radix UI Primitives',
              description:
                'Built on accessible Radix UI primitives with proper ARIA attributes and keyboard navigation.',
            },
          ].map(feature => (
            <div
              key={feature.title}
              className='group bg-neutral-0 hover:border-primary/30 dark:hover:border-primary/30 rounded-xl border border-neutral-200 p-8 transition-all hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900'
            >
              <div className='bg-primary-100 text-primary group-hover:bg-primary group-hover:text-neutral-0 dark:bg-primary-900/30 mb-4 inline-flex rounded-lg p-2.5 transition-colors'>
                {feature.icon}
              </div>
              <Headline5 className='mb-2'>{feature.title}</Headline5>
              <Body2 className='leading-relaxed text-neutral-500 dark:text-neutral-400'>
                {feature.description}
              </Body2>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className='border-t border-neutral-200 bg-neutral-50/50 py-20 dark:border-neutral-800 dark:bg-neutral-900/50'>
        <div className='mx-auto flex max-w-4xl flex-col items-center gap-12 px-6 sm:flex-row sm:justify-center'>
          {[
            { value: '23+', label: 'Components' },
            { value: '60+', label: 'Examples' },
            { value: '5', label: 'Color Themes' },
            { value: '100%', label: 'Accessible' },
          ].map(stat => (
            <div key={stat.label} className='text-center'>
              <Headline2 className='text-primary text-4xl'>{stat.value}</Headline2>
              <Body2 className='mt-1 text-neutral-500 dark:text-neutral-400'>{stat.label}</Body2>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className='mx-auto max-w-4xl px-6 py-24 text-center'>
        <Headline2 className='mb-4 text-3xl tracking-tight sm:text-4xl'>
          Start building today
        </Headline2>
        <Body1 className='mx-auto mb-8 max-w-xl text-lg text-neutral-500 dark:text-neutral-400'>
          Browse the docs, pick a component, and paste it into your project.
        </Body1>
        <Link href='/docs'>
          <Button size='lg'>
            Browse Components
            <ArrowRight className='ml-1 size-4' />
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className='border-t border-neutral-200 px-6 py-8 dark:border-neutral-800'>
        <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row'>
          <Body2 className='text-neutral-500 dark:text-neutral-400'>
            IndiaCN UI — Open Source Design System for India
          </Body2>
          <div className='flex items-center gap-4'>
            <a
              href={GITHUB_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm text-neutral-500 transition-colors hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'
            >
              GitHub
            </a>
            <Link
              href='/docs'
              className='text-sm text-neutral-500 transition-colors hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'
            >
              Documentation
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

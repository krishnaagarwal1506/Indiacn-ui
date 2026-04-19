'use client';

import {
  ArrowRight,
  Code2,
  Github,
  Layers,
  Palette,
  Sparkles,
  Zap,
  Accessibility,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Body1,
  Body2,
  Display6,
  Headline1,
  Headline2,
  Headline5,
  Label1,
} from '@/components/ui/typography';
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

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  return (
    <div className='relative min-h-screen'>
      {/* Hero */}
      <section className='relative flex min-h-[80vh] flex-col items-center justify-center px-6 pt-16 text-center'>
        {/* Subtle grid bg */}
        <div className='pointer-events-none absolute inset-0 overflow-hidden'>
          <div className='absolute inset-0 mask-[radial-gradient(ellipse_at_center,transparent_20%,var(--color-neutral-0))]'>
            <div className='absolute inset-0 bg-[linear-gradient(var(--color-primary-200)_1px,transparent_1px),linear-gradient(to_right,var(--color-primary-200)_1px,transparent_1px)] bg-size-[60px_60px] opacity-[0.15]' />
          </div>
        </div>

        <div
          className={cn(
            'relative mx-auto max-w-3xl transition-all duration-700',
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          )}
        >
          <Badge variant='tonal' theme='primary' shape='pill' size='lg' className='mb-8'>
            <Sparkles className='mr-1.5 size-3.5' />
            Open Source Design System for India
          </Badge>

          <Headline1 className='mb-6 text-4xl leading-[1.15] font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl'>
            Beautiful components for{' '}
            {/* eslint-disable-next-line eslint-frontend-rules/enforce-typography-components */}
            <span className='from-primary to-primary-400 bg-linear-to-r bg-clip-text text-transparent'>
              Indian Digital
            </span>{' '}
            Services
          </Headline1>

          <Body1 className='mx-auto mb-10 max-w-2xl text-lg text-neutral-600'>
            Copy-paste ready React components built with Tailwind CSS and Radix UI.
            <br className='hidden sm:block' /> Based on the UX4G 2.0 Design System for government
            and public-service applications.
          </Body1>

          <div className='flex flex-wrap items-center justify-center gap-4'>
            <Link href='/docs'>
              <Button size='lg' suffixIcon={<ArrowRight className='size-4' />}>
                Get Started
              </Button>
            </Link>
            <a href={GITHUB_URL} target='_blank' rel='noopener noreferrer'>
              <Button size='lg' variant='outlined' prefixIcon={<Github className='size-4' />}>
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Component ticker */}
      <section className='relative overflow-hidden border-y border-neutral-200 bg-neutral-50/50 py-5'>
        <div className='flex animate-[scroll_30s_linear_infinite] gap-4 whitespace-nowrap'>
          {[...COMPONENTS, ...COMPONENTS].map((name, i) => (
            <Label1
              key={`${name}-${i}`}
              className='bg-neutral-0 inline-flex items-center rounded-full border border-neutral-200 px-4 py-1.5 text-xs text-neutral-500'
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
          <Body1 className='mx-auto max-w-2xl text-lg text-neutral-500'>
            Purpose-built for Indian government and public-service digital products, following UX4G
            2.0 guidelines pixel-by-pixel.
          </Body1>
        </div>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {[
            {
              icon: <Code2 className='size-6' />,
              title: 'Copy & Paste',
              description:
                'No heavy dependency. Copy the component code into your project and own it. Customize freely.',
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
            {
              icon: <Zap className='size-6' />,
              title: 'Tailwind CSS v4',
              description:
                'Built with Tailwind CSS v4 and CSS variables for instant theming. No SASS compilation needed.',
            },
            {
              icon: <Accessibility className='size-6' />,
              title: '100% Accessible',
              description:
                'Every component follows WCAG 2.1 AA standards with proper ARIA attributes, roles, and keyboard support.',
            },
            {
              icon: <Sparkles className='size-6' />,
              title: '8 Color Themes',
              description:
                'Primary, secondary, success, danger, warning, info, light, and dark — all matching UX4G specification.',
            },
          ].map(feature => (
            <div
              key={feature.title}
              className='group bg-neutral-0 hover:border-primary/25 rounded-xl border border-neutral-200 p-7 transition-all hover:shadow-md'
            >
              <div className='bg-primary/10 text-primary group-hover:bg-primary group-hover:text-neutral-0 mb-4 inline-flex rounded-lg p-2.5 transition-colors'>
                {feature.icon}
              </div>
              <Headline5 className='mb-2'>{feature.title}</Headline5>
              <Body2 className='leading-relaxed text-neutral-500'>{feature.description}</Body2>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className='border-y border-neutral-200 bg-neutral-50/50 py-20'>
        <div className='mx-auto flex max-w-5xl flex-col items-center gap-12 px-6 sm:flex-row sm:justify-between'>
          {[
            { value: '25+', label: 'Components' },
            { value: '70+', label: 'Examples' },
            { value: '8', label: 'Color Themes' },
            { value: '100%', label: 'Accessible' },
            { value: '0', label: 'Dependencies' },
          ].map(stat => (
            <div key={stat.label} className='text-center'>
              <Display6 className='text-primary'>{stat.value}</Display6>
              <Body2 className='mt-1 text-neutral-500'>{stat.label}</Body2>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className='mx-auto max-w-3xl px-6 py-24 text-center'>
        <Headline2 className='mb-4 text-3xl tracking-tight sm:text-4xl'>
          Start building today
        </Headline2>
        <Body1 className='mx-auto mb-8 max-w-xl text-lg text-neutral-500'>
          Browse the docs, pick a component, and paste it into your project.
        </Body1>
        <Link href='/docs'>
          <Button size='lg' suffixIcon={<ArrowRight className='size-4' />}>
            Browse Components
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className='border-t border-neutral-200 px-6 py-8'>
        <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row'>
          <Body2 className='text-neutral-500'>IndiaCN — Open Source Design System for India</Body2>
          <div className='flex items-center gap-4'>
            <a
              href={GITHUB_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm text-neutral-500 transition-colors hover:text-neutral-700'
            >
              GitHub
            </a>
            <Link
              href='/docs'
              className='text-sm text-neutral-500 transition-colors hover:text-neutral-700'
            >
              Documentation
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

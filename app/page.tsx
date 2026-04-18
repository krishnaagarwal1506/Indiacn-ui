'use client';

import {
  Accessibility,
  ArrowRight,
  Bell,
  Check,
  CheckCircle2,
  Code2,
  Copy,
  Github,
  Heart,
  Layers,
  Palette,
  Shield,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Chip } from '@/components/ui/chip';
import { Spinner } from '@/components/ui/spinner';
import { Step, Stepper } from '@/components/ui/stepper';
import {
  Body1,
  Body2,
  Display5,
  Display6,
  Headline2,
  Headline3,
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

/** Decorative animated background grid. */
function AnimatedGrid() {
  return (
    <div className='pointer-events-none absolute inset-0 overflow-hidden'>
      <div className='absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,var(--color-neutral))]'>
        <div className='absolute inset-0 bg-[linear-gradient(var(--color-primary)_1px,transparent_1px),linear-gradient(to_right,var(--color-primary)_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.03] dark:opacity-[0.06]' />
      </div>
      <div className='from-primary/5 via-primary/0 absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-radial to-transparent blur-3xl' />
    </div>
  );
}

/** Copyable CLI install command with feedback. */
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
      className='group hover:border-primary/30 dark:hover:border-primary/30 flex items-center gap-3 rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-3 font-mono text-sm transition-all hover:shadow-sm dark:border-neutral-700 dark:bg-neutral-800'
    >
      <Body2 className='text-neutral-400'>$</Body2>
      <Body2 className='text-neutral-700 dark:text-neutral-300'>{command}</Body2>
      {copied ? (
        <Label1 className='text-success text-xs'>Copied!</Label1>
      ) : (
        <Copy className='group-hover:text-primary size-3.5 text-neutral-400 transition-colors' />
      )}
    </button>
  );
}

/** Live component showcase card. */
function ShowcaseCard({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'bg-neutral-0 group hover:border-primary/20 dark:hover:border-primary/20 relative overflow-hidden rounded-xl border border-neutral-200 p-6 transition-all hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-900',
        className,
      )}
    >
      <Label1 className='mb-4 text-xs tracking-wider text-neutral-400 uppercase'>{title}</Label1>
      <div className='flex flex-wrap items-center gap-2'>{children}</div>
    </div>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  return (
    <div className='relative min-h-screen overflow-hidden'>
      <AnimatedGrid />

      {/* Hero */}
      <section className='relative flex min-h-[90vh] flex-col items-center justify-center px-6 text-center'>
        <div
          className={cn(
            'mx-auto max-w-5xl transition-all duration-700',
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          )}
        >
          <Badge variant='tonal' theme='primary' shape='pill' size='lg' className='mb-8'>
            <Sparkles className='mr-1 size-3.5' />
            UX4G 2.0 Design System for React
          </Badge>

          <Display5 className='mb-6 leading-[1.1] tracking-tight text-neutral-900 dark:text-neutral-100'>
            Build Indian Digital
            <br />
            Services{' '}
            <Label1 className='from-primary to-primary-300 inline bg-linear-to-r bg-clip-text text-transparent'>
              beautifully
            </Label1>
          </Display5>

          <Body1 className='mx-auto mb-10 max-w-2xl text-lg text-neutral-500 sm:text-xl dark:text-neutral-400'>
            Production-ready React components following the official UX4G 2.0 Design System. Built
            with Tailwind CSS and Radix UI for accessible, government-grade applications.
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

          <div className='mt-8 flex justify-center'>
            <CopyCommand />
          </div>
        </div>
      </section>

      {/* Live Component Showcase */}
      <section className='relative mx-auto max-w-6xl px-6 py-16'>
        <div className='mb-12 text-center'>
          <Headline2 className='mb-4 text-3xl tracking-tight sm:text-4xl'>
            Components in action
          </Headline2>
          <Body1 className='mx-auto max-w-2xl text-neutral-500 dark:text-neutral-400'>
            Every component is pixel-perfect to the UX4G 2.0 specification. Here are some
            highlights.
          </Body1>
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {/* Buttons showcase */}
          <ShowcaseCard title='Buttons'>
            <Button size='sm'>Primary</Button>
            <Button size='sm' variant='outlined'>
              Outlined
            </Button>
            <Button size='sm' variant='tonal'>
              Tonal
            </Button>
            <Button size='sm' theme='success'>
              Success
            </Button>
            <Button size='sm' variant='text'>
              Text
            </Button>
          </ShowcaseCard>

          {/* Badges showcase */}
          <ShowcaseCard title='Badges'>
            <Badge theme='primary'>Primary</Badge>
            <Badge theme='success'>Success</Badge>
            <Badge theme='danger'>Danger</Badge>
            <Badge theme='warning'>Warning</Badge>
            <Badge theme='info'>Info</Badge>
            <Badge shape='pill' theme='primary'>
              Pill
            </Badge>
            <Badge variant='outlined' theme='danger'>
              Outlined
            </Badge>
            <Badge theme='dark'>Dark</Badge>
          </ShowcaseCard>

          {/* Alert showcase */}
          <ShowcaseCard title='Alerts' className='md:col-span-2 lg:col-span-1'>
            <div className='w-full space-y-2'>
              <Alert theme='success'>
                <AlertIcon>
                  <CheckCircle2 className='size-5 shrink-0' />
                  <div>
                    <AlertTitle>Success</AlertTitle>
                    <AlertDescription>Changes saved.</AlertDescription>
                  </div>
                </AlertIcon>
              </Alert>
              <Alert theme='info'>
                <AlertIcon>
                  <Bell className='size-5 shrink-0' />
                  <div>
                    <AlertTitle>Info</AlertTitle>
                    <AlertDescription>New update available.</AlertDescription>
                  </div>
                </AlertIcon>
              </Alert>
            </div>
          </ShowcaseCard>

          {/* Chips showcase */}
          <ShowcaseCard title='Chips'>
            <Chip>Default</Chip>
            <Chip icon={<Star />}>Favourite</Chip>
            <Chip icon={<Check />} selected>
              Selected
            </Chip>
            <Chip variant='filled'>Filled</Chip>
            <Chip variant='tonal'>Tonal</Chip>
          </ShowcaseCard>

          {/* Spinners showcase */}
          <ShowcaseCard title='Spinners'>
            <Spinner size='sm' theme='primary' />
            <Spinner size='sm' theme='success' />
            <Spinner size='sm' theme='danger' />
            <Spinner size='sm' theme='warning' />
            <Spinner size='sm' theme='info' />
            <Spinner size='sm' variant='grow' theme='primary' />
            <Spinner size='sm' variant='grow' theme='success' />
            <Spinner size='sm' variant='grow' theme='danger' />
          </ShowcaseCard>

          {/* Stepper showcase */}
          <ShowcaseCard title='Stepper'>
            <div className='w-full'>
              <Stepper activeStep={2}>
                <Step step={0} title='Details' />
                <Step step={1} title='Review' />
                <Step step={2} title='Payment' />
                <Step step={3} title='Done' isLast />
              </Stepper>
            </div>
          </ShowcaseCard>
        </div>
      </section>

      {/* Component ticker */}
      <section className='relative overflow-hidden border-y border-neutral-200 bg-neutral-50/50 py-5 dark:border-neutral-800 dark:bg-neutral-900/50'>
        <div className='flex animate-[scroll_30s_linear_infinite] gap-4 whitespace-nowrap'>
          {[...COMPONENTS, ...COMPONENTS].map((name, i) => (
            <Label1
              key={`${name}-${i}`}
              className='bg-neutral-0 inline-flex items-center rounded-full border border-neutral-200 px-4 py-1.5 text-xs text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400'
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
            Purpose-built for Indian government and public-service digital products, following UX4G
            2.0 guidelines pixel-by-pixel.
          </Body1>
        </div>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {[
            {
              icon: <Shield className='size-6' />,
              title: 'UX4G 2.0 Compliant',
              description:
                'Every component matches the official UX4G 2.0 spec — exact colors, spacing, radii, and animations from the source CSS.',
            },
            {
              icon: <Code2 className='size-6' />,
              title: 'Copy & Paste',
              description:
                'No heavy dependency. Copy the component code into your project and own it. Customize freely.',
            },
            {
              icon: <Layers className='size-6' />,
              title: 'Radix UI Primitives',
              description:
                'Built on accessible Radix UI primitives with WAI-ARIA patterns, keyboard navigation, and focus management.',
            },
            {
              icon: <Palette className='size-6' />,
              title: '8 Color Themes',
              description:
                'Primary, secondary, success, danger, warning, info, light, and dark — all matching UX4G specification.',
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
          ].map(feature => (
            <div
              key={feature.title}
              className='group bg-neutral-0 hover:border-primary/25 dark:hover:border-primary/25 rounded-xl border border-neutral-200 p-7 transition-all hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900'
            >
              <div className='bg-primary/10 text-primary group-hover:bg-primary group-hover:text-neutral-0 mb-4 inline-flex rounded-lg p-2.5 transition-colors'>
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
      <section className='border-y border-neutral-200 bg-neutral-50/50 py-20 dark:border-neutral-800 dark:bg-neutral-900/50'>
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
              <Body2 className='mt-1 text-neutral-500 dark:text-neutral-400'>{stat.label}</Body2>
            </div>
          ))}
        </div>
      </section>

      {/* UX4G Compliance */}
      <section className='mx-auto max-w-4xl px-6 py-24'>
        <div className='bg-neutral-0 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900'>
          <div className='from-primary/5 to-primary/0 bg-linear-to-r px-8 py-6'>
            <Headline3 className='tracking-tight'>Built on UX4G 2.0</Headline3>
            <Body1 className='mt-2 text-neutral-500 dark:text-neutral-400'>
              Every value comes directly from the official UX4G 2.0.8 CSS source.
            </Body1>
          </div>
          <div className='grid gap-0 divide-y divide-neutral-200 px-8 dark:divide-neutral-700'>
            {[
              { spec: 'Alert border-radius', value: '0.25rem', source: '.alert' },
              { spec: 'Modal default width', value: '500px', source: '.modal-dialog' },
              { spec: 'Offcanvas width', value: '400px', source: '.offcanvas' },
              { spec: 'Dropdown hover bg', value: '#FAEFFF', source: '.dropdown-item:hover' },
              { spec: 'Pagination active bg', value: '#613AF5', source: '.page-link.active' },
              { spec: 'Spinner border-width', value: '0.3em', source: '.spinner-border' },
            ].map(item => (
              <div key={item.spec} className='flex items-center justify-between py-4'>
                <div>
                  <Body2 className='font-medium'>{item.spec}</Body2>
                  <Body2 className='text-xs text-neutral-400'>{item.source}</Body2>
                </div>
                <code className='text-primary rounded bg-neutral-100 px-2 py-1 font-mono text-sm dark:bg-neutral-800'>
                  {item.value}
                </code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='mx-auto max-w-4xl px-6 pb-24 text-center'>
        <div className='from-primary/5 via-primary/2 rounded-2xl bg-linear-to-br to-transparent px-8 py-16'>
          <Headline2 className='mb-4 text-3xl tracking-tight sm:text-4xl'>
            Start building today
          </Headline2>
          <Body1 className='mx-auto mb-8 max-w-xl text-lg text-neutral-500 dark:text-neutral-400'>
            Browse the documentation, pick a component, and paste it into your project. No npm
            install required.
          </Body1>
          <div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
            <Link href='/docs'>
              <Button size='lg'>
                Browse Components
                <ArrowRight className='ml-1 size-4' />
              </Button>
            </Link>
            <a href={GITHUB_URL} target='_blank' rel='noopener noreferrer'>
              <Button size='lg' variant='outlined'>
                <Heart className='mr-1 size-4' />
                Star on GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t border-neutral-200 px-6 py-8 dark:border-neutral-800'>
        <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row'>
          <Body2 className='text-neutral-500 dark:text-neutral-400'>
            IndiaCN UI — Open Source Design System for India
          </Body2>
          <div className='flex items-center gap-6'>
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

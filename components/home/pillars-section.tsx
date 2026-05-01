import { Accessibility, Code2, Layers } from 'lucide-react';

import { Body1, Body2, Headline2, Headline5, Label2 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

const PILLARS = [
  {
    icon: <Accessibility className='size-5' />,
    title: 'WCAG 2.1 AA',
    body: 'Every component ships with proper ARIA, keyboard navigation, visible focus rings, and reduced-motion support. Tested with screen readers.',
    iconCn: 'bg-success-50 text-success-600',
  },
  {
    icon: <Layers className='size-5' />,
    title: 'UX4G 2.0 themed',
    body: 'Token-based theme aligned with UX4G 2.0: semantic scales for primary, secondary, success, danger, warning, info, plus neutral and alert.',
    iconCn: 'bg-primary-50 text-primary-600',
  },
  {
    icon: <Code2 className='size-5' />,
    title: "Copy, don't depend",
    body: 'Source lands in your repo. No runtime, no version lock, no surprise breakage. Fork it, theme it, ship it on your terms.',
    iconCn: 'bg-neutral-100 text-neutral-700',
  },
];

export const PillarsSection = () => (
  <section className='py-28'>
    <div className='mx-auto max-w-6xl px-6'>
      <div className='mb-14 max-w-2xl'>
        <Label2 className='text-primary mb-4 block font-semibold tracking-widest uppercase'>
          Why IndiaCN
        </Label2>
        <Headline2 className='mb-5 text-3xl tracking-tight sm:text-4xl'>
          Designed for the realities of <em className='text-primary not-italic'>Indian users.</em>
        </Headline2>
        <Body1 className='text-neutral-600'>
          Most component libraries are built for SaaS dashboards. IndiaCN is built for eKYC flows,
          ration-card portals, scholarship forms, and citizen services — at scale across India.
        </Body1>
      </div>
      <div className='grid gap-4 sm:grid-cols-3'>
        {PILLARS.map(p => (
          <div
            key={p.title}
            className='bg-neutral-0 flex h-full flex-col rounded-xl border border-neutral-200 p-7'
          >
            <div
              className={cn(
                'mb-5 inline-flex size-11 items-center justify-center rounded-lg',
                p.iconCn,
              )}
            >
              {p.icon}
            </div>
            <Headline5 className='mb-2.5'>{p.title}</Headline5>
            <Body2 className='leading-relaxed text-neutral-600'>{p.body}</Body2>
          </div>
        ))}
      </div>
    </div>
  </section>
);

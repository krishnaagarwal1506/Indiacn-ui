import { ArrowRight, BookOpen, CreditCard, Grid, Layers, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

import { Body1, Headline2, Label1, Label2, Label3 } from '@/components/ui/typography';

const USE_CASES = [
  {
    title: 'eKYC verification',
    desc: 'Aadhaar, PAN, DigiLocker',
    icon: <Shield className='size-5' />,
  },
  {
    title: 'Citizen dashboard',
    desc: 'Schemes, applications, status',
    icon: <Grid className='size-5' />,
  },
  {
    title: 'Grievance portal',
    desc: 'File, track, escalate',
    icon: <BookOpen className='size-5' />,
  },
  {
    title: 'Form workflows',
    desc: 'Multi-step, validated flows',
    icon: <Layers className='size-5' />,
  },
  {
    title: 'Payment & receipts',
    desc: 'UPI, challan, invoice',
    icon: <CreditCard className='size-5' />,
  },
  {
    title: 'Status tracking',
    desc: 'Steppers, timelines, alerts',
    icon: <Zap className='size-5' />,
  },
];

export const UseCasesSection = () => (
  <section className='py-28'>
    <div className='mx-auto max-w-6xl px-6'>
      <div
        className='grid gap-16'
        style={{ gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.4fr)' }}
      >
        <div>
          <Label2 className='text-primary mb-4 block font-semibold tracking-widest uppercase'>
            Use cases
          </Label2>
          <Headline2 className='mb-5 text-3xl tracking-tight sm:text-4xl'>
            Built for the surfaces that matter.
          </Headline2>
          <Body1 className='mb-6 text-neutral-600'>
            From eKYC and document upload to citizen dashboards and grievance portals — the patterns
            that move 1.4 billion people through digital services every day.
          </Body1>
          <Link
            href='/docs'
            className='text-primary inline-flex items-center gap-1.5 text-sm font-medium no-underline hover:underline'
          >
            See all components <ArrowRight className='size-3.5' />
          </Link>
        </div>
        <div className='grid grid-cols-2 gap-3.5'>
          {USE_CASES.map(u => (
            <div key={u.title} className='bg-neutral-0 rounded-xl border border-neutral-200 p-5'>
              <div className='text-primary mb-3.5'>{u.icon}</div>
              <Label1 className='text-neutral mb-1 block font-semibold'>{u.title}</Label1>
              <Label3 className='text-neutral-600'>{u.desc}</Label3>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

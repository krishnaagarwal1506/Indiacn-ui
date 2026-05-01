import { ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Body1, Body2, Headline2, Label1, Label2, Label3 } from '@/components/ui/typography';
import { GITHUB_URL } from '@/constants';

import { ChakraBgDark } from './chakra-bg';

export const CommunityCtaSection = () => (
  <div className='dark'>
    <section className='bg-neutral-0 relative overflow-hidden py-28'>
      <ChakraBgDark />
      <div className='relative mx-auto max-w-6xl px-6'>
        <div className='grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16'>
          <div>
            <Label2 className='text-primary mb-4 block font-semibold tracking-widest uppercase'>
              Community
            </Label2>
            <Headline2
              className='text-neutral mb-5 font-semibold tracking-tight'
              style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
            >
              A movement, not a library.
            </Headline2>
            <Body1 className='mb-8 max-w-[540px] text-neutral-600'>
              IndiaCN is built in the open, by Indian developers, designers, and accessibility
              advocates. Star the repo, file an issue, ship a component — every contribution shapes
              the standard.
            </Body1>
            <div className='flex flex-wrap gap-3'>
              <a href={GITHUB_URL} target='_blank' rel='noopener noreferrer'>
                <Button prefixIcon={<Github className='size-4' />}>Contribute on GitHub</Button>
              </a>
              <Link href='/docs'>
                <Button variant='outlined' suffixIcon={<ArrowRight className='size-4' />}>
                  Browse docs
                </Button>
              </Link>
            </div>
          </div>

          <div className='rounded-2xl border border-neutral-200 bg-neutral-50 p-7'>
            <div className='grid grid-cols-2 gap-6'>
              {[
                { v: '25+', l: 'Components' },
                { v: 'MIT', l: 'License — forever free' },
                { v: 'WCAG', l: '2.1 AA compliant' },
                { v: 'Early', l: 'Planning phase' },
              ].map(s => (
                <div key={s.l}>
                  <Label1 className='text-neutral text-3xl font-semibold tracking-tight'>
                    {s.v}
                  </Label1>
                  <Label3 className='mt-1.5 block tracking-widest text-neutral-500 uppercase'>
                    {s.l}
                  </Label3>
                </div>
              ))}
            </div>
            <div className='my-6 h-px bg-neutral-200' />
            <Body2 className='text-neutral leading-relaxed font-semibold'>
              &ldquo;IndiaCN is in early planning. Suggest a component, file an issue, or open a PR
              — every contribution shapes the standard.&rdquo;
            </Body2>
            <Body2 className='mt-1.5 text-neutral-500'>— From the project README</Body2>
          </div>
        </div>
      </div>
    </section>
  </div>
);

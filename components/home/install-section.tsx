'use client';

import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

import { WindowChromeDots } from '@/components/home/window-chrome-dots';
import { Body1, Body2, Headline2, Label2, Label3, Label1 } from '@/components/ui/typography';

export const InstallSection = () => {
  const [copied, setCopied] = useState(false);
  const cmd = 'npx shadcn@latest add https://indiacn.in/r/button.json';

  const handleCopy = () => {
    navigator.clipboard?.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  const steps = [
    {
      n: '01',
      title: 'Run shadcn init in your project',
      description: 'Tailwind CSS v4 required — uses @theme inline.',
    },
    {
      n: '02',
      title: 'Add the IndiaCN theme preset',
      description: 'Brings semantic scales, focus rings, dark mode, keyframes.',
    },
    {
      n: '03',
      title: 'Add components by registry URL',
      description: 'Dependencies (theme, typography, …) auto-resolve.',
    },
  ];

  return (
    <section id='install' className='py-28'>
      <div className='mx-auto max-w-6xl px-6'>
        <div
          className='grid items-center gap-20'
          style={{ gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)' }}
        >
          <div>
            <Label2 className='text-primary mb-4 block font-semibold tracking-widest uppercase'>
              Install
            </Label2>
            <Headline2 className='mb-5 text-3xl tracking-tight sm:text-4xl'>
              One{' '}
              <code className='rounded bg-neutral-100 px-2 py-0.5 font-mono text-[0.85em]'>
                shadcn add
              </code>{' '}
              away.
            </Headline2>
            <Body1 className='mb-8 max-w-[480px] text-neutral-600'>
              IndiaCN ships as a ShadCN-compatible registry — not an npm package. Install the theme
              once, then add components one at a time. Each one lands as source code in your repo:
              no runtime dependency, no version lock.
            </Body1>
            <div className='flex flex-col gap-4'>
              {steps.map(s => (
                <div key={s.n} className='flex gap-4'>
                  <Label3 className='text-primary shrink-0 pt-0.5 font-mono font-semibold'>
                    {s.n}
                  </Label3>
                  <div>
                    <Label1 className='text-neutral font-semibold'>{s.title}</Label1>
                    <Body2 className='mt-0.5 text-neutral-600'>{s.description}</Body2>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal — forced dark context so it always looks like a code terminal */}
          <div className='dark'>
            <div className='bg-neutral-0 overflow-hidden rounded-xl border border-neutral-200 shadow-xl'>
              <div className='flex h-9 items-center justify-between border-b border-neutral-200 bg-neutral-50 px-3.5'>
                <WindowChromeDots />
                <Label3 className='font-mono text-neutral-500'>~/your-app</Label3>
                <button
                  onClick={handleCopy}
                  className='hover:text-neutral flex cursor-pointer items-center gap-1.5 border-none bg-transparent p-1 text-xs text-neutral-500 transition-colors'
                >
                  {copied ? (
                    <>
                      <Check className='text-success size-3' /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className='size-3' /> Copy
                    </>
                  )}
                </button>
              </div>
              <pre className='m-0 p-5 font-mono text-[13px] leading-[1.85] text-neutral-800'>
                <div>
                  <mark className='bg-transparent text-neutral-500'>
                    # 1. Add the IndiaCN theme
                  </mark>
                </div>
                <div>
                  <mark className='text-primary bg-transparent'>$</mark>
                  {' npx shadcn@latest add '}
                  <br />
                  {'  '}
                  <mark className='text-info bg-transparent'>https://indiacn.in/r/theme.json</mark>
                </div>
                <br />
                <div>
                  <mark className='bg-transparent text-neutral-500'># 2. Add components</mark>
                </div>
                <div>
                  <mark className='text-primary bg-transparent'>$</mark>
                  {' npx shadcn@latest add '}
                  <mark className='text-warning bg-transparent'>@indiacn/button</mark>
                </div>
                <div>
                  <mark className='text-primary bg-transparent'>$</mark>
                  {' npx shadcn@latest add '}
                  <mark className='text-warning bg-transparent'>
                    @indiacn/card @indiacn/dropdown
                  </mark>
                </div>
                <br />
                <div className='text-success'>✓ Theme tokens, focus rings, dark mode installed</div>
                <div className='text-success'>✓ button, card, dropdown ready in components/ui/</div>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

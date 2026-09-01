'use client';

import { CSSProperties, useEffect, useState } from 'react';

import { Label1, Label3 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

/*
 * India's public services are delivered in many scripts, so the masthead is
 * written in them. Noto Sans covers Latin and Devanagari; the rest load as
 * separate families, declared in the root layout.
 */
const BENGALI_FONT = { fontFamily: 'var(--font-bengali)' } as const;
const TAMIL_FONT = { fontFamily: 'var(--font-tamil)' } as const;
const TELUGU_FONT = { fontFamily: 'var(--font-telugu)' } as const;

const NAMES = [
  { word: 'Bharat', script: 'English', style: undefined },
  { word: 'भारत', script: 'हिन्दी', style: undefined },
  { word: 'ভারত', script: 'বাংলা', style: BENGALI_FONT },
  { word: 'பாரதம்', script: 'தமிழ்', style: TAMIL_FONT },
  { word: 'భారత్', script: 'తెలుగు', style: TELUGU_FONT },
] as const;

const CYCLE_MS = 2600;

/** Index of the Devanagari entry, shown when motion is not wanted. */
const RESTING_INDEX = 1;

/**
 * Cycles the word "Bharat" through the scripts the library has to render.
 *
 * Every name occupies the same grid cell, so the line never reflows as the word
 * changes. The incoming name is delayed past the outgoing one's fade, because
 * two names cross-fading in the same cell read as a double exposure. The whole block is aria-hidden — the heading above it carries the
 * sentence in full — and the cycle stops when the visitor asks for reduced
 * motion.
 */
export const BharatCycle = ({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) => {
  const [index, setIndex] = useState(RESTING_INDEX);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setAnimate(!query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (!animate) return;
    const id = setInterval(() => setIndex(i => (i + 1) % NAMES.length), CYCLE_MS);
    return () => clearInterval(id);
  }, [animate]);

  const active = animate ? index : RESTING_INDEX;

  return (
    <div className={cn('flex flex-col items-start', className)} style={style} aria-hidden>
      <div className='grid'>
        {NAMES.map((name, i) => (
          <Label1
            key={name.script}
            aria-hidden
            style={name.style}
            className={cn(
              'text-primary col-start-1 row-start-1 text-[length:inherit] leading-[inherit] font-bold tracking-[inherit] transition-opacity ease-out',
              i === active ? 'opacity-100 delay-200 duration-300' : 'opacity-0 duration-200',
            )}
          >
            {name.word}
          </Label1>
        ))}
      </div>

      <div className='mt-1 grid'>
        {NAMES.map((name, i) => (
          <Label3
            key={name.script}
            style={name.style}
            className={cn(
              'col-start-1 row-start-1 tracking-widest text-neutral-500 uppercase transition-opacity ease-out',
              i === active ? 'opacity-100 delay-200 duration-300' : 'opacity-0 duration-200',
            )}
          >
            {name.script}
          </Label3>
        ))}
      </div>
    </div>
  );
};

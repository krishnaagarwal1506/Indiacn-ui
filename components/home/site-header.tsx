'use client';

import { ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { GITHUB_URL } from '@/constants';
import { cn } from '@/lib/utils';

import { BrandName } from './brand-name';
import { ChakraMark } from './chakra-mark';

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-200',
        scrolled
          ? 'bg-neutral-0/90 border-b border-neutral-200 backdrop-blur-md'
          : 'bg-neutral-0 border-b border-transparent',
      )}
    >
      <div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-6'>
        <div className='flex items-center gap-8'>
          <Link href='/' className='text-neutral flex items-center gap-2.5 no-underline'>
            <ChakraMark size={24} />
            <BrandName />
          </Link>
          <nav aria-label='Primary navigation' className='hidden items-center gap-6 md:flex'>
            {[
              { label: 'Components', href: '#components' },
              { label: 'Docs', href: '/docs' },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className='hover:text-neutral text-sm font-medium text-neutral-600 no-underline transition-colors'
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className='flex items-center gap-3'>
          <a href={GITHUB_URL} target='_blank' rel='noopener noreferrer'>
            <Button variant='outlined' size='sm' prefixIcon={<Github className='size-3.5' />}>
              Star on GitHub
            </Button>
          </a>
          <Link href='/docs'>
            <Button size='sm' suffixIcon={<ArrowRight className='size-3.5' />}>
              Get started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

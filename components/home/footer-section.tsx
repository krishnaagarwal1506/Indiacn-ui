import Link from 'next/link';

import { BrandName } from '@/components/home/brand-name';
import { ChakraMark } from '@/components/home/chakra-mark';
import { Body2, Label3 } from '@/components/ui/typography';
import { GITHUB_URL, UX_4G_URL } from '@/constants';

const FOOTER_COLS: {
  heading: string;
  links: { label: string; href: string; external?: boolean }[];
}[] = [
  {
    heading: 'Library',
    links: [
      { label: 'Components', href: '/docs' },
      { label: 'Themes', href: '/docs' },
      { label: 'Changelog', href: `${GITHUB_URL}/releases`, external: true },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'UX4G 2.0', href: UX_4G_URL, external: true },
      { label: 'Accessibility', href: '/docs' },
    ],
  },
  {
    heading: 'Community',
    links: [
      { label: 'GitHub', href: GITHUB_URL, external: true },
      { label: 'Contributing', href: `${GITHUB_URL}/blob/main/CONTRIBUTING.md`, external: true },
      { label: 'Roadmap', href: `${GITHUB_URL}/issues`, external: true },
    ],
  },
  {
    heading: 'About',
    links: [
      { label: 'License', href: `${GITHUB_URL}/blob/main/LICENSE`, external: true },
      { label: 'Credits', href: GITHUB_URL, external: true },
    ],
  },
];

export const FooterSection = () => (
  <div className='dark'>
    <footer className='bg-neutral-0 pt-20 pb-10 text-neutral-600'>
      <div className='mx-auto max-w-6xl px-6'>
        <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] lg:gap-12'>
          <div className='col-span-2 sm:col-span-3 lg:col-span-1'>
            <div className='mb-4 flex items-center gap-2.5'>
              <ChakraMark size={24} />
              <BrandName className='text-neutral' />
            </div>
            <Body2 className='max-w-[300px] leading-relaxed text-neutral-600'>
              Open-source design system for India&apos;s digital services. Built in the open under
              MIT. A community initiative — not affiliated with the Government of India.
            </Body2>
          </div>

          {FOOTER_COLS.map(col => (
            <div key={col.heading}>
              <Label3 className='text-neutral mb-4 block font-semibold tracking-widest uppercase'>
                {col.heading}
              </Label3>
              <ul className='flex list-none flex-col gap-2.5 p-0'>
                {col.links.map(link =>
                  link.external ? (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-neutral text-sm text-neutral-600 no-underline transition-colors'
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className='hover:text-neutral text-sm text-neutral-600 no-underline transition-colors'
                      >
                        {link.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className='my-14 h-px bg-neutral-200' />

        <div className='flex flex-wrap items-center justify-between gap-4'>
          <Label3 className='text-neutral-500'>
            © 2026 IndiaCN · MIT License · Made with care in Bharat
          </Label3>
          <div className='flex gap-5'>
            <a href='#' className='hover:text-neutral text-xs text-neutral-500 no-underline'>
              Privacy
            </a>
            <a href='#' className='hover:text-neutral text-xs text-neutral-500 no-underline'>
              Terms
            </a>
            <a
              href={GITHUB_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-neutral text-xs text-neutral-500 no-underline'
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

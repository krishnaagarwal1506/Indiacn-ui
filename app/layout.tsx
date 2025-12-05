import { Noto_Sans } from 'next/font/google';
import { ReactNode } from 'react';

import { cn } from '@/utils';

import type { Metadata } from 'next';

import '@/app/globals.css';

const NOTO_SANS = Noto_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'IndiaCN UI — Community Design System for India',
  description:
    'IndiaCN is an upcoming **open-source design system** created to help build better digital experiences for India — especially government and public-service applications. Based on UX4G 2.0 theme',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(NOTO_SANS.className, 'antialiased')}>{children}</body>
    </html>
  );
}

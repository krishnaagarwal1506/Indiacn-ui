import { RootProvider } from 'fumadocs-ui/provider/next';
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

const SITE_URL = 'https://indiacn.in';

export const metadata: Metadata = {
  title: {
    default: 'IndiaCN — Open Source Design System for India',
    template: '%s | IndiaCN',
  },
  description:
    'Copy-paste ready React components built with Tailwind CSS and Radix UI. Based on the UX4G 2.0 Design System for Indian government and public-service applications.',
  metadataBase: new URL(SITE_URL),
  keywords: [
    'IndiaCN',
    'India design system',
    'UX4G',
    'UX4G 2.0',
    'React components',
    'Tailwind CSS',
    'Radix UI',
    'government UI',
    'Indian government design',
    'shadcn India',
    'accessible components',
    'open source',
  ],
  authors: [{ name: 'IndiaCN' }],
  creator: 'IndiaCN',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'IndiaCN',
    title: 'IndiaCN — Open Source Design System for India',
    description:
      'Copy-paste ready React components built with Tailwind CSS and Radix UI. Based on the UX4G 2.0 Design System for Indian government and public-service applications.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IndiaCN — Open Source Design System for India',
    description:
      'Copy-paste ready React components built with Tailwind CSS and Radix UI. Based on the UX4G 2.0 Design System for Indian government and public-service applications.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn(NOTO_SANS.className, 'antialiased')}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

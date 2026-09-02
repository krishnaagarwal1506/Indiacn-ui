import { RootProvider } from 'fumadocs-ui/provider/next';
import { Noto_Sans, Noto_Sans_Bengali, Noto_Sans_Tamil, Noto_Sans_Telugu } from 'next/font/google';
import { ReactNode } from 'react';

import {
  GITHUB_URL,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from '@/constants';
import { cn } from '@/lib/utils';

import type { Metadata, Viewport } from 'next';

import '@/app/globals.css';

const NOTO_SANS = Noto_Sans({
  subsets: ['latin', 'devanagari'],
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
});

/*
 * Noto exists so that no script renders as tofu, which is the same promise a
 * component library for Indian public services has to make. These carry the
 * scripts Noto Sans itself does not cover, at the one weight the masthead uses.
 */
const NOTO_BENGALI = Noto_Sans_Bengali({
  subsets: ['bengali'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-bengali',
});

const NOTO_TAMIL = Noto_Sans_Tamil({
  subsets: ['tamil'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-tamil',
});

const NOTO_TELUGU = Noto_Sans_Telugu({
  subsets: ['telugu'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-telugu',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: SITE_TITLE,
    template: '%s | IndiaCN UI',
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: 'IndiaCN Community', url: SITE_URL }],
  creator: 'IndiaCN Community',
  publisher: 'IndiaCN Community',
  category: 'technology',
  classification: 'Design System Documentation',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/twitter-image'],
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: ['/icon.svg'],
    apple: [{ url: '/icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  colorScheme: 'light dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: 'en-IN',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      sameAs: [GITHUB_URL],
      logo: `${SITE_URL}/icon.svg`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: SITE_NAME,
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Web',
      isAccessibleForFree: true,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      url: SITE_URL,
      description: SITE_DESCRIPTION,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareSourceCode',
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      codeRepository: GITHUB_URL,
      programmingLanguage: [
        { '@type': 'ComputerLanguage', name: 'TypeScript' },
        { '@type': 'ComputerLanguage', name: 'React' },
        { '@type': 'ComputerLanguage', name: 'CSS' },
      ],
      license: 'https://opensource.org/licenses/MIT',
      isAccessibleForFree: true,
      runtimePlatform: 'Node.js',
    },
  ];

  return (
    <html lang='en-IN' suppressHydrationWarning>
      <body
        className={cn(
          NOTO_SANS.className,
          NOTO_BENGALI.variable,
          NOTO_TAMIL.variable,
          NOTO_TELUGU.variable,
          'antialiased',
        )}
      >
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

import { SITE_DESCRIPTION, SITE_NAME } from '@/constants';

import type { MetadataRoute } from 'next';

//eslint-disable-next-line
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: 'IndiaCN',
    description: SITE_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f172a',
    lang: 'en-IN',
    categories: ['developer tools', 'design system', 'documentation'],
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}

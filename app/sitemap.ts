import { SITE_URL } from '@/constants';
import { source } from '@/utils/source';

import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const params = await Promise.resolve(source.generateParams());

  const docsRoutes = params.map(({ slug }) => ({
    url: slug?.length ? `${SITE_URL}/docs/${slug.join('/')}` : `${SITE_URL}/docs`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: slug?.length ? 0.8 : 0.9,
  }));

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...docsRoutes,
  ];
}

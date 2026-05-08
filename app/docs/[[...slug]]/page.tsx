import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
// import { DocsPage, DocsDescription, DocsTitle, DocsBody } from 'fumadocs-ui/layouts/notebook/page';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { notFound } from 'next/navigation';

import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/constants';
import { getMDXComponents } from '@/utils/mdx-components';
import { source } from '@/utils/source';

import type { Metadata } from 'next';

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const { toc, full, title, description } = page.data;

  const slug = params.slug?.join('/');
  const url = slug ? `${SITE_URL}/docs/${slug}` : `${SITE_URL}/docs`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Docs', item: `${SITE_URL}/docs` },
      ...(slug ? [{ '@type': 'ListItem', position: 3, name: title, item: url }] : []),
    ],
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <DocsPage toc={toc} full={full}>
        <DocsTitle>{title}</DocsTitle>
        <DocsDescription>{description}</DocsDescription>
        <DocsBody>
          <MDX
            components={getMDXComponents({
              // this allows you to link to other pages with relative file paths
              a: createRelativeLink(source, page),
            })}
          />
        </DocsBody>
      </DocsPage>
    </>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: PageProps<'/docs/[[...slug]]'>): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const slug = params.slug?.join('/');
  const url = slug ? `${SITE_URL}/docs/${slug}` : `${SITE_URL}/docs`;
  const description = page.data.description || SITE_DESCRIPTION;
  const modifiedTime = new Date().toISOString();

  return {
    title: page.data.title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.data.title,
      description,
      url,
      siteName: SITE_NAME,
      type: 'article',
      publishedTime: '2025-01-01T00:00:00.000Z',
      modifiedTime,
      authors: ['IndiaCN Community'],
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: page.data.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.data.title,
      description,
      images: ['/twitter-image'],
    },
  };
}

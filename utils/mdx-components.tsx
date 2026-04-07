import defaultMdxComponents from 'fumadocs-ui/mdx';

import { ComponentPreview } from '@/components/docs/component-preview';
import { ComponentPreviewTabs } from '@/components/docs/component-preview-tabs';
import { ComponentSource } from '@/components/docs/component-source';

import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ComponentPreview,
    ComponentPreviewTabs,
    ComponentSource,
    ...components,
  };
}

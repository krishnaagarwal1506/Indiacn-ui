import defaultMdxComponents from 'fumadocs-ui/mdx';

import { ComponentPreview, ComponentSource } from '@/components/ui/component-preview';

import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ComponentPreview,
    ComponentSource,
    ...components,
  };
}

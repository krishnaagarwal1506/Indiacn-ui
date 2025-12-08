import { DocsLayout } from 'fumadocs-ui/layouts/docs';
// import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { ReactNode } from 'react';

import { baseOptions } from '@/utils/layout.shared';
import { source } from '@/utils/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout {...baseOptions()} tree={source.pageTree}>
      {children}
    </DocsLayout>
  );
}

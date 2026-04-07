import { GITHUB_URL } from '@/constants';

import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'IndiaCN UI',
    },
    githubUrl: GITHUB_URL,
  };
}

import { GITHUB_URL } from '@/constants';

import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/** Shared fumadocs layout options: nav title, links and theme switcher. */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'IndiaCN UI',
    },
    githubUrl: GITHUB_URL,
  };
}

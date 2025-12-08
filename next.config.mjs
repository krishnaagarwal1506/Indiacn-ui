import { createMDX } from 'fumadocs-mdx/next';

/** @type {import('next').NextConfig} */

const withMDX = createMDX({
  // configPath: 'source.config.ts',
});

const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

export default withMDX(nextConfig);

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
  // Serve the shadcn registry JSON files cross-origin so `npx shadcn add`
  // can fetch them from any consumer machine.
  async headers() {
    return [
      {
        source: '/r/:path*.json',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, OPTIONS' },
          { key: 'Content-Type', value: 'application/json; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=300, must-revalidate' },
        ],
      },
      {
        source: '/registry.json',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, OPTIONS' },
          { key: 'Content-Type', value: 'application/json; charset=utf-8' },
        ],
      },
    ];
  },
};

export default withMDX(nextConfig);

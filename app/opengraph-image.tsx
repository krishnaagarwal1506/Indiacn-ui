import { ImageResponse } from 'next/og';

import { SITE_NAME, SITE_TITLE } from '@/constants';

export const alt = SITE_TITLE;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

/* eslint-disable eslint-frontend-rules/no-default-export, eslint-frontend-rules/no-direct-colors -- Next.js Open Graph image routes require a default export, and ImageResponse renders in an isolated context where app CSS variables/theme tokens are not reliably resolved. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background:
            'linear-gradient(135deg, rgba(255,153,51,0.14) 0%, rgba(255,255,255,1) 45%, rgba(19,136,8,0.14) 100%)',
          color: '#0f172a',
          padding: '52px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              display: 'flex',
              height: '64px',
              width: '64px',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '18px',
              background: '#0f172a',
              color: '#ffffff',
              fontSize: '28px',
              fontWeight: 700,
            }}
          >
            IC
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '26px', fontWeight: 700 }}>{SITE_NAME}</div>
            <div style={{ fontSize: '18px', color: '#475569' }}>Open Source UI for India</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '880px' }}>
          <div
            style={{
              display: 'flex',
              alignSelf: 'flex-start',
              borderRadius: '999px',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              padding: '10px 18px',
              fontSize: '18px',
            }}
          >
            UX4G-inspired • Accessible • Tailwind + Radix
          </div>
          <div style={{ fontSize: '60px', lineHeight: 1.1, fontWeight: 800 }}>{SITE_TITLE}</div>
          <div style={{ fontSize: '28px', lineHeight: 1.35, color: '#334155' }}>
            Build citizen-facing digital services with copy-paste ready React components.
          </div>
        </div>
      </div>
    ),
    size,
  );
}

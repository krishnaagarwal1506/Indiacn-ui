import { Body1, Headline2, Label1, Label2, Label3 } from '@/components/ui/typography';

/* These hex values are the explicit color palette being showcased — intentionally kept as literals */
const COLOR_SCALES = [
  {
    name: 'primary',
    base: '#613af5',
    swatches: [
      '#ece7fe',
      '#d8cefd',
      '#b19efa',
      '#8a6df8',
      '#633df5',
      '#3c0cf3',
      '#300ac2',
      '#240792',
      '#180561',
    ],
  },
  {
    name: 'secondary',
    base: '#938bb6',
    swatches: [
      '#f0eff5',
      '#e2e0eb',
      '#c5c0d8',
      '#a8a1c4',
      '#8a82b0',
      '#6d629d',
      '#574f7d',
      '#423b5e',
      '#2c273f',
    ],
  },
  {
    name: 'success',
    base: '#3c9718',
    swatches: [
      '#edf7e6',
      '#e3f2d9',
      '#c6e5b5',
      '#9bcf80',
      '#69b349',
      '#389314',
      '#107400',
      '#005a00',
      '#024900',
    ],
  },
  {
    name: 'danger',
    base: '#b7131a',
    swatches: [
      '#ffeeea',
      '#ffcdc0',
      '#ffac9a',
      '#ff8b78',
      '#ff6c5a',
      '#ec5042',
      '#d4362e',
      '#b72120',
      '#961416',
    ],
  },
  {
    name: 'warning',
    base: '#b77224',
    swatches: [
      '#fef1e7',
      '#f9d7b9',
      '#f0bd8f',
      '#e2a468',
      '#d08d47',
      '#bb772b',
      '#a46212',
      '#8b5000',
      '#713f00',
    ],
  },
  {
    name: 'info',
    base: '#00aaff',
    swatches: [
      '#e5f6ff',
      '#cbf0ff',
      '#99dfff',
      '#66ceff',
      '#33beff',
      '#00aaff',
      '#0088cc',
      '#006699',
      '#004466',
    ],
  },
  {
    name: 'neutral',
    base: '#212121',
    swatches: [
      '#f3f3f3',
      '#dddddd',
      '#c6c6c6',
      '#b0b0b0',
      '#9b9b9b',
      '#868686',
      '#727272',
      '#5e5e5e',
      '#4b4b4b',
    ],
  },
];

export const ThemeBand = () => (
  <section className='bg-neutral-50 py-28'>
    <div className='mx-auto max-w-6xl px-6'>
      <div className='mb-12 flex flex-wrap items-end justify-between gap-10'>
        <div className='max-w-xl'>
          <Label2 className='text-primary mb-4 block font-semibold tracking-widest uppercase'>
            Tokens
          </Label2>
          <Headline2 className='mb-4 text-3xl tracking-tight sm:text-4xl'>
            Semantic scales, not brand colors.
          </Headline2>
          <Body1 className='text-neutral-600'>
            Seven semantic scales — primary, secondary, neutral, success, danger, warning, info.
            Each ramps 50 → 900 with a matched dark-mode pair. Drop in your own primary; the rest
            adapts.
          </Body1>
        </div>
      </div>

      <div className='bg-neutral-0 overflow-hidden rounded-xl border border-neutral-200'>
        {COLOR_SCALES.map((s, i) => (
          <div
            key={s.name}
            style={{
              display: 'grid',
              gridTemplateColumns: '160px 1fr',
              borderTop: i === 0 ? 'none' : '1px solid var(--color-neutral-200)',
            }}
          >
            <div className='flex items-center gap-3 border-r border-neutral-200 px-5 py-4'>
              <div
                aria-hidden='true'
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 3,
                  background: s.base,
                  flexShrink: 0,
                }}
              />
              <div>
                <Label1 className='text-neutral font-semibold'>{s.name}</Label1>
                <Label3 className='font-mono text-neutral-500'>{s.base}</Label3>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(9,1fr)' }}>
              {s.swatches.map((c, idx) => (
                <div
                  key={idx}
                  style={{
                    background: c,
                    height: 48,
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '0 6px 5px',
                    fontSize: 9,
                    fontFamily: 'monospace',
                    color: idx >= 5 ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.4)',
                  }}
                >
                  {[50, 100, 200, 300, 400, 500, 600, 700, 800][idx]}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

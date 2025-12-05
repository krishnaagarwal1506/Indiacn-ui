import { ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import { Headline1, Headline2, Headline3 } from '@/components/ui/typography';
import Add from '@/public/svg/add.svg';

const VARIANTS = ['filled', 'outlined', 'text', 'tonal'] as const;
const THEMES = ['primary', 'success', 'destructive'] as const;
const SIZES = ['sm', 'md', 'lg'] as const;

type TIconConfig = {
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
};

const ICON_CONFIGS: { label: string; props: TIconConfig }[] = [
  { label: 'No Icons', props: {} },
  { label: 'Suffix Icon', props: { suffixIcon: <Add /> } },
  { label: 'Both Icons', props: { prefixIcon: <Add />, suffixIcon: <Add /> } },
];

export default function Home() {
  return (
    <div className='space-y-16 p-8'>
      {/* Button Documentation */}
      <section>
        <Headline1 className='mb-8 text-4xl font-bold'>Button Component Documentation</Headline1>

        {/* Regular Buttons */}
        {ICON_CONFIGS.map(({ label, props: iconProps }) => (
          <div key={label} className='mb-16'>
            <Headline2 className='mb-6 text-2xl font-semibold'>{label}</Headline2>
            {SIZES.map(size => (
              <div key={size} className='mb-8'>
                <Headline3 className='mb-4 text-xl font-medium capitalize'>Size: {size}</Headline3>
                <div className='flex flex-wrap gap-4'>
                  {VARIANTS.map(variant =>
                    THEMES.map(theme => (
                      <Button
                        key={`${variant}-${theme}-${size}`}
                        variant={variant}
                        theme={theme}
                        size={size}
                        {...iconProps}
                      >
                        Click Me
                      </Button>
                    )),
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Icon Buttons */}
        <div className='mt-16'>
          <Headline2 className='mb-6 text-2xl font-semibold'>Icon Buttons</Headline2>
          {SIZES.map(size => (
            <div key={size} className='mb-8'>
              <Headline3 className='mb-4 text-xl font-medium capitalize'>Size: {size}</Headline3>
              <div className='flex flex-wrap gap-4'>
                {VARIANTS.map(variant =>
                  THEMES.map(theme => (
                    <Button
                      key={`${variant}-${theme}-${size}-icon`}
                      variant={variant}
                      theme={theme}
                      size={size}
                      iconButton
                    >
                      <Add />
                    </Button>
                  )),
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

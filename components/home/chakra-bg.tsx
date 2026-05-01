import ChakraBgDarkIcon from '@/public/svg/chakra-bg-dark.svg';
import ChakraBgIcon from '@/public/svg/chakra-bg.svg';

export const ChakraBg = () => (
  <ChakraBgIcon
    aria-hidden='true'
    className='text-primary pointer-events-none absolute top-[-120px] right-[-120px] opacity-[0.06]'
    width={720}
    height={720}
  />
);

export const ChakraBgDark = () => (
  <ChakraBgDarkIcon
    aria-hidden='true'
    className='text-primary-300 pointer-events-none absolute bottom-[-200px] left-[-160px] opacity-[0.08]'
    width={620}
    height={620}
  />
);

import {
  Carousel,
  CarouselCaption,
  CarouselContent,
  CarouselIndicators,
  CarouselItem,
  CarouselNext,
  CarouselPlayPause,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Headline4 } from '@/components/ui/typography';

const SLIDES = [
  { title: 'Apply online', body: 'Start a new application from any device.' },
  { title: 'Track progress', body: 'Follow every stage with a reference number.' },
  { title: 'Collect your document', body: 'Download it or pick it up at a centre.' },
];

export function CarouselDefault() {
  return (
    <Carousel className='w-full max-w-[640px]' label='How it works'>
      <CarouselContent>
        {SLIDES.map(slide => (
          <CarouselItem key={slide.title}>
            <div className='flex h-[280px] items-center justify-center bg-neutral-50'>
              <Headline4 className='text-neutral-400'>{slide.title}</Headline4>
            </div>
            <CarouselCaption title={slide.title}>{slide.body}</CarouselCaption>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselIndicators />
    </Carousel>
  );
}

export function CarouselDark() {
  return (
    <Carousel variant='dark' className='w-full max-w-[640px]' label='How it works, dark slides'>
      <CarouselContent>
        {SLIDES.map(slide => (
          <CarouselItem key={slide.title}>
            <div className='bg-neutral flex h-[280px] items-center justify-center'>
              <Headline4 className='text-neutral-0/40'>{slide.title}</Headline4>
            </div>
            <CarouselCaption title={slide.title}>{slide.body}</CarouselCaption>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselIndicators />
    </Carousel>
  );
}

export function CarouselAutoPlay() {
  return (
    <Carousel
      autoPlayInterval={4000}
      className='w-full max-w-[640px]'
      label='How it works, advancing automatically'
    >
      <CarouselContent>
        {SLIDES.map(slide => (
          <CarouselItem key={slide.title}>
            <div className='flex h-[280px] items-center justify-center bg-neutral-50'>
              <Headline4 className='text-neutral-400'>{slide.title}</Headline4>
            </div>
            <CarouselCaption title={slide.title}>{slide.body}</CarouselCaption>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPlayPause />
      <CarouselPrevious />
      <CarouselNext />
      <CarouselIndicators />
    </Carousel>
  );
}

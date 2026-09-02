'use client';

import { cva } from 'class-variance-authority';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import {
  ComponentProps,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useState,
} from 'react';

import { Body2, Label1, Label2 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

/*
 * UX4G carousel: slides fill the frame, chevrons sit inside the left and right
 * edges, and the indicators are 30x3px bars — current colour at 50% when
 * inactive, full when current. `variant` follows the kit's Dark property and
 * describes the slide behind the controls, not the page theme.
 */
type TCarouselVariant = 'light' | 'dark';

interface ICarouselContext {
  index: number;
  count: number;
  variant: TCarouselVariant;
  baseId: string;
  playing: boolean;
  canAutoPlay: boolean;
  goTo: (i: number) => void;
  next: () => void;
  previous: () => void;
  togglePlaying: () => void;
  register: (n: number) => void;
}

const CAROUSEL_CONTEXT = createContext<ICarouselContext | null>(null);

/** Reads the nearest Carousel context, or fails loudly rather than silently. */
function useCarousel() {
  const context = useContext(CAROUSEL_CONTEXT);
  if (!context) throw new Error('Carousel parts must be rendered inside <Carousel>');
  return context;
}

const CONTROL_VARIANTS = cva(
  'focus-visible:shadow-focus-primary absolute top-1/2 z-10 flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-md p-2 transition-opacity focus-visible:outline-none disabled:pointer-events-none disabled:opacity-30',
  {
    variants: {
      variant: {
        light: 'text-neutral-600 hover:text-neutral',
        dark: 'text-neutral-0/70 hover:text-neutral-0',
      },
    },
    defaultVariants: { variant: 'light' },
  },
);

interface ICarouselProps extends Omit<ComponentProps<'section'>, 'onChange'> {
  variant?: TCarouselVariant;
  /** Milliseconds between slides. Omit for a manual carousel. */
  autoPlayInterval?: number;
  label?: string;
}

/**
 * Slideshow region.
 *
 * Auto-advance stops on hover, on focus, and whenever the visitor asks for
 * reduced motion, and CarouselPlayPause exposes the manual control WCAG 2.2.2
 * requires for anything that moves on its own.
 */
function Carousel({
  className,
  children,
  variant = 'light',
  autoPlayInterval,
  label = 'Carousel',
  ...props
}: ICarouselProps) {
  const baseId = useId();
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [playing, setPlaying] = useState(Boolean(autoPlayInterval));
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduceMotion(query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  const goTo = useCallback((i: number) => setIndex(i), []);
  const next = useCallback(() => setIndex(i => (count ? (i + 1) % count : 0)), [count]);
  const previous = useCallback(() => setIndex(i => (count ? (i - 1 + count) % count : 0)), [count]);
  const togglePlaying = useCallback(() => setPlaying(p => !p), []);
  const register = useCallback((n: number) => setCount(n), []);

  const canAutoPlay = Boolean(autoPlayInterval) && !reduceMotion;
  const running = canAutoPlay && playing && !paused && count > 1;

  useEffect(() => {
    if (!running) return;
    const id = setInterval(next, autoPlayInterval);
    return () => clearInterval(id);
  }, [running, next, autoPlayInterval]);

  const value = useMemo(
    () => ({
      index,
      count,
      variant,
      baseId,
      playing,
      canAutoPlay,
      goTo,
      next,
      previous,
      togglePlaying,
      register,
    }),
    [
      index,
      count,
      variant,
      baseId,
      playing,
      canAutoPlay,
      goTo,
      next,
      previous,
      togglePlaying,
      register,
    ],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        previous();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      }
    },
    [next, previous],
  );

  const pause = useCallback(() => setPaused(true), []);
  const resume = useCallback(() => setPaused(false), []);

  return (
    <CAROUSEL_CONTEXT.Provider value={value}>
      <section
        aria-roledescription='carousel'
        aria-label={label}
        className={cn('relative overflow-hidden rounded-md', className)}
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocusCapture={pause}
        onBlurCapture={resume}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {children}
      </section>
    </CAROUSEL_CONTEXT.Provider>
  );
}

/** Track holding the slides. Counts its children so the parts stay in step. */
function CarouselContent({ className, children, ...props }: ComponentProps<'div'>) {
  const { index, register } = useCarousel();
  const slides = Array.isArray(children) ? children : [children];

  useEffect(() => {
    register(slides.length);
  }, [register, slides.length]);

  return (
    <div
      aria-live='polite'
      className={cn('flex transition-transform duration-500 ease-in-out', className)}
      style={{ transform: `translateX(-${index * 100}%)` }}
      {...props}
    >
      {children}
    </div>
  );
}

/** A single slide. */
function CarouselItem({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      role='group'
      aria-roledescription='slide'
      className={cn('relative w-full shrink-0 grow-0 basis-full', className)}
      {...props}
    />
  );
}

/** Caption block sitting over the lower part of a slide. */
function CarouselCaption({
  className,
  title,
  children,
  ...props
}: ComponentProps<'div'> & { title?: ReactNode }) {
  const { variant } = useCarousel();

  return (
    <div
      className={cn(
        'absolute inset-x-0 bottom-12 px-12 text-center',
        variant === 'dark' ? 'text-neutral-0' : 'text-neutral',
        className,
      )}
      {...props}
    >
      {title && <Label1 className='block font-semibold'>{title}</Label1>}
      {children && <Body2 className='mt-1'>{children}</Body2>}
    </div>
  );
}

/** Previous-slide control. */
function CarouselPrevious({ className, ...props }: ComponentProps<'button'>) {
  const { previous, variant, count } = useCarousel();

  return (
    <button
      type='button'
      onClick={previous}
      disabled={count < 2}
      aria-label='Previous slide'
      className={cn(CONTROL_VARIANTS({ variant }), 'left-2', className)}
      {...props}
    >
      <ChevronLeft className='size-8' aria-hidden />
    </button>
  );
}

/** Next-slide control. */
function CarouselNext({ className, ...props }: ComponentProps<'button'>) {
  const { next, variant, count } = useCarousel();

  return (
    <button
      type='button'
      onClick={next}
      disabled={count < 2}
      aria-label='Next slide'
      className={cn(CONTROL_VARIANTS({ variant }), 'right-2', className)}
      {...props}
    >
      <ChevronRight className='size-8' aria-hidden />
    </button>
  );
}

/** One indicator bar. Split out so its handler is not rebuilt on every render. */
function CarouselIndicator({ slide }: { slide: number }) {
  const { index, goTo, variant } = useCarousel();
  const handleClick = useCallback(() => goTo(slide), [goTo, slide]);
  const current = slide === index;

  return (
    <button
      type='button'
      onClick={handleClick}
      aria-label={`Go to slide ${slide + 1}`}
      aria-current={current || undefined}
      className={cn(
        'focus-visible:shadow-focus-primary h-3 w-[30px] cursor-pointer transition-opacity focus-visible:outline-none',
        'before:block before:h-[3px] before:w-full before:translate-y-[4.5px] before:bg-current before:content-[""]',
        variant === 'dark' ? 'text-neutral-0' : 'text-neutral',
        current ? 'opacity-100' : 'opacity-50 hover:opacity-75',
      )}
    />
  );
}

/** Bar indicators. 30x3px, half opacity until current. */
function CarouselIndicators({ className, ...props }: ComponentProps<'div'>) {
  const { count } = useCarousel();

  return (
    <div
      className={cn('absolute inset-x-0 bottom-4 z-10 flex justify-center gap-1.5', className)}
      {...props}
    >
      {Array.from({ length: count }, (_, i) => (
        <CarouselIndicator key={i} slide={i} />
      ))}
    </div>
  );
}

/** Pause and resume control for an auto-advancing carousel. */
function CarouselPlayPause({ className, ...props }: ComponentProps<'button'>) {
  const { playing, togglePlaying, variant, canAutoPlay } = useCarousel();
  if (!canAutoPlay) return null;

  const Icon = playing ? Pause : Play;

  return (
    <button
      type='button'
      onClick={togglePlaying}
      aria-label={playing ? 'Pause carousel' : 'Play carousel'}
      className={cn(
        'focus-visible:shadow-focus-primary absolute top-3 right-3 z-10 inline-flex cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-1.5 transition-opacity focus-visible:outline-none',
        variant === 'dark'
          ? 'text-neutral-0/70 hover:text-neutral-0 bg-neutral/40'
          : 'hover:text-neutral bg-neutral-0/70 text-neutral-600',
        className,
      )}
      {...props}
    >
      <Icon className='size-3.5' aria-hidden />
      <Label2>{playing ? 'Pause' : 'Play'}</Label2>
    </button>
  );
}

export type { TCarouselVariant };

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselCaption,
  CarouselPrevious,
  CarouselNext,
  CarouselIndicators,
  CarouselPlayPause,
  CONTROL_VARIANTS,
};

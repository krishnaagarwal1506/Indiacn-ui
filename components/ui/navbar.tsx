'use client';

import { ChevronDown, ExternalLink, Menu, X } from 'lucide-react';
import {
  ComponentProps,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useId,
  useMemo,
  useState,
} from 'react';

import { Label1, Label2 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

/*
 * UX4G government header: a 41px primary utility bar over a 72px white bar.
 * The utility bar holds the Government of India mark and whatever site-wide
 * controls a site offers; the main bar holds brand, navigation and actions.
 */
interface INavbarContext {
  open: boolean;
  navId: string;
  toggle: () => void;
  close: () => void;
}

const NAVBAR_CONTEXT = createContext<INavbarContext | null>(null);

/** Reads the nearest Navbar context, or fails loudly rather than silently. */
function useNavbar() {
  const context = useContext(NAVBAR_CONTEXT);
  if (!context) throw new Error('Navbar parts must be rendered inside <Navbar>');
  return context;
}

/** Government website header. */
function Navbar({ className, children, ...props }: ComponentProps<'header'>) {
  const navId = useId();
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(o => !o), []);
  const close = useCallback(() => setOpen(false), []);
  const value = useMemo(() => ({ open, navId, toggle, close }), [open, navId, toggle, close]);

  return (
    <NAVBAR_CONTEXT.Provider value={value}>
      <header className={cn('bg-neutral-0 w-full', className)} {...props}>
        {children}
      </header>
    </NAVBAR_CONTEXT.Provider>
  );
}

/**
 * Primary bar above the main header.
 *
 * `start` defaults to the Government of India mark, which is the whole point
 * of this bar on a government site.
 */
function NavbarUtilityBar({
  className,
  children,
  start,
  ...props
}: ComponentProps<'div'> & { start?: ReactNode }) {
  return (
    <div className={cn('bg-primary text-primary-foreground', className)} {...props}>
      <div className='mx-auto flex min-h-10 max-w-[1440px] flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-1.5 sm:px-6'>
        {start ?? <NavbarGovBadge />}
        <div className='flex items-center gap-3'>{children}</div>
      </div>
    </div>
  );
}

/** The Government of India mark, linking out to india.gov.in by default. */
function NavbarGovBadge({
  className,
  href = 'https://www.india.gov.in',
  label = 'Government of India',
  ...props
}: ComponentProps<'a'> & { label?: string }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={cn(
        'focus-visible:shadow-focus-neutral inline-flex items-center gap-2 no-underline focus-visible:outline-none',
        className,
      )}
      {...props}
    >
      {/* Drawn from a theme token rather than shipped as an asset, so the
          component needs no image file to install. */}
      <div
        aria-hidden
        className='h-[15px] w-[22px] shrink-0 rounded-[2px] bg-[linear-gradient(to_bottom,var(--color-flag-band-top)_0_33.34%,var(--color-flag-band-middle)_33.34%_66.67%,var(--color-flag-band-bottom)_66.67%_100%)]'
      />
      <Label2 className='font-medium'>{label}</Label2>
      <ExternalLink className='size-3.5 shrink-0' aria-hidden />
    </a>
  );
}

/**
 * Skip link. Hidden until focused, which is the only reason it works — it has
 * to be the first thing a keyboard user reaches.
 */
function NavbarSkipLink({
  className,
  href = '#main',
  children = 'Skip to main content',
  ...props
}: ComponentProps<'a'>) {
  return (
    <a
      href={href}
      className={cn(
        'focus-visible:shadow-focus-neutral rounded-sm underline decoration-transparent transition-colors hover:decoration-current focus-visible:outline-none',
        'sr-only focus:not-sr-only focus:relative',
        className,
      )}
      {...props}
    >
      <Label2>{children}</Label2>
    </a>
  );
}

/** Thin divider between utility-bar controls. */
function NavbarSeparator({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      aria-hidden
      className={cn('bg-primary-foreground/30 hidden h-5 w-px sm:block', className)}
      {...props}
    />
  );
}

/** White bar holding brand, navigation and actions. */
function NavbarMain({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cn('border-b border-neutral-100', className)} {...props}>
      <div className='mx-auto flex min-h-[72px] max-w-[1440px] items-center gap-6 px-4 sm:px-6'>
        {children}
      </div>
    </div>
  );
}

/** Emblem and wordmark. */
function NavbarBrand({ className, ...props }: ComponentProps<'a'>) {
  return (
    <a
      className={cn(
        'focus-visible:shadow-focus-primary mr-auto inline-flex shrink-0 items-center gap-3 no-underline focus-visible:outline-none',
        className,
      )}
      {...props}
    />
  );
}

/**
 * Navigation list. Collapses behind NavbarToggle below `lg`, where it becomes a
 * stacked panel under the header rather than an overlay.
 */
function NavbarNav({ className, children, ...props }: ComponentProps<'nav'>) {
  const { open, navId } = useNavbar();

  return (
    <nav
      id={navId}
      aria-label='Main'
      className={cn(
        'lg:static lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-1 lg:border-0 lg:py-0',
        open
          ? 'bg-neutral-0 absolute inset-x-0 top-full z-40 flex w-full flex-col items-stretch gap-1 border-b border-neutral-100 px-4 py-2 sm:px-6'
          : 'hidden',
        className,
      )}
      {...props}
    >
      {children}
    </nav>
  );
}

interface INavbarLinkProps extends ComponentProps<'a'> {
  active?: boolean;
  /** Shows a chevron, for a link that opens a menu. */
  hasMenu?: boolean;
}

/** One navigation link. */
function NavbarLink({ className, active, hasMenu, children, ...props }: INavbarLinkProps) {
  return (
    <a
      aria-current={active ? 'page' : undefined}
      className={cn(
        'focus-visible:shadow-focus-primary hover:text-primary inline-flex items-center gap-1 rounded-md px-3 py-2 whitespace-nowrap no-underline transition-colors focus-visible:outline-none',
        active ? 'text-primary font-medium' : 'text-neutral',
        className,
      )}
      {...props}
    >
      <Label1 className='font-[inherit]'>{children}</Label1>
      {hasMenu && <ChevronDown className='size-4 shrink-0' aria-hidden />}
    </a>
  );
}

/** Trailing actions: search, sign in, and so on. */
function NavbarActions({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('flex shrink-0 items-center gap-2', className)} {...props} />;
}

/** Mobile disclosure button for the navigation. */
function NavbarToggle({ className, ...props }: ComponentProps<'button'>) {
  const { open, toggle, navId } = useNavbar();

  return (
    <button
      type='button'
      onClick={toggle}
      aria-expanded={open}
      aria-controls={navId}
      aria-label={open ? 'Close menu' : 'Open menu'}
      className={cn(
        'focus-visible:shadow-focus-primary text-neutral inline-flex size-10 cursor-pointer items-center justify-center rounded-md border border-neutral-100 transition-colors hover:border-neutral-300 focus-visible:outline-none lg:hidden',
        className,
      )}
      {...props}
    >
      {open ? <X className='size-5' aria-hidden /> : <Menu className='size-5' aria-hidden />}
    </button>
  );
}

/** Full-width row beneath the header, for the fill navigation layout. */
function NavbarSecondaryRow({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cn('hidden border-b border-neutral-100 lg:block', className)} {...props}>
      <div className='mx-auto flex max-w-[1440px] items-center justify-between px-4 sm:px-6'>
        {children}
      </div>
    </div>
  );
}

export {
  Navbar,
  NavbarUtilityBar,
  NavbarGovBadge,
  NavbarSkipLink,
  NavbarSeparator,
  NavbarMain,
  NavbarBrand,
  NavbarNav,
  NavbarLink,
  NavbarActions,
  NavbarToggle,
  NavbarSecondaryRow,
};

import { FC, HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

/**
 * Display1 Component - A large heading component for prominent titles.
 */
const Display1: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h1 className={cn('text-neutral text-[5rem] leading-25 font-medium', className)} {...props}>
      {children}
    </h1>
  );
};

/**
 * Display2 Component - 72px display text
 */
const Display2: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h1 className={cn('text-neutral text-[4.5rem] leading-25 font-medium', className)} {...props}>
      {children}
    </h1>
  );
};

/**
 * Display3 Component - 64px display text
 */
const Display3: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h1 className={cn('text-neutral text-[4rem] leading-20 font-medium', className)} {...props}>
      {children}
    </h1>
  );
};

/**
 * Display4 Component - 56px display text
 */
const Display4: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h1 className={cn('text-neutral text-[3.5rem] leading-18 font-medium', className)} {...props}>
      {children}
    </h1>
  );
};

/**
 * Display5 Component - 48px display text
 */
const Display5: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h1 className={cn('text-neutral text-[3rem] leading-14 font-medium', className)} {...props}>
      {children}
    </h1>
  );
};

/**
 * Display6 Component - 40px display text
 */
const Display6: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h1 className={cn('text-neutral text-[2.5rem] leading-12 font-medium', className)} {...props}>
      {children}
    </h1>
  );
};

/**
 * Headline1 Component - 40px headline text
 */
const Headline1: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h1 className={cn('text-neutral text-[2.5rem] leading-12 font-semibold', className)} {...props}>
      {children}
    </h1>
  );
};

/**
 * Headline2 Component - 32px headline text
 */
const Headline2: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h2 className={cn('text-neutral text-[2rem] leading-10 font-semibold', className)} {...props}>
      {children}
    </h2>
  );
};

/**
 * Headline3 Component - 28px headline text
 */
const Headline3: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h3 className={cn('text-neutral text-[1.75rem] leading-8 font-semibold', className)} {...props}>
      {children}
    </h3>
  );
};

/**
 * Headline4 Component - 24px headline text
 */
const Headline4: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h4 className={cn('text-neutral text-[1.5rem] leading-7 font-semibold', className)} {...props}>
      {children}
    </h4>
  );
};

/**
 * Headline5 Component - 20px headline text
 */
const Headline5: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h5 className={cn('text-neutral text-[1.25rem] leading-6 font-semibold', className)} {...props}>
      {children}
    </h5>
  );
};

/**
 * Headline6 Component - 16px headline text
 */
const Headline6: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h6 className={cn('text-neutral text-[1rem] leading-5 font-semibold', className)} {...props}>
      {children}
    </h6>
  );
};

/**
 * Title1 Component - 22px title text
 */
const Title1: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h3 className={cn('text-neutral text-[1.375rem] leading-7 font-medium', className)} {...props}>
      {children}
    </h3>
  );
};

/**
 * Title2 Component - 16px title text
 */
const Title2: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h4
      className={cn(
        'text-neutral text-[1rem] leading-6 font-medium tracking-[0.009375rem]',
        className,
      )}
      {...props}
    >
      {children}
    </h4>
  );
};

/**
 * Title3 Component - 14px title text
 */
const Title3: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h5
      className={cn(
        'text-neutral text-[0.875rem] leading-5 font-medium tracking-[0.00625rem]',
        className,
      )}
      {...props}
    >
      {children}
    </h5>
  );
};

/**
 * Label1 Component - 14px label text
 */
const Label1: FC<HTMLAttributes<HTMLSpanElement>> = ({ children, className, ...props }) => {
  return (
    <span
      className={cn(
        'text-neutral text-[0.875rem] leading-5 font-medium tracking-[0.00625rem]',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};

/**
 * Label2 Component - 12px label text
 */
const Label2: FC<HTMLAttributes<HTMLSpanElement>> = ({ children, className, ...props }) => {
  return (
    <span
      className={cn(
        'text-neutral text-[0.75rem] leading-4 font-medium tracking-[0.03125rem]',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};

/**
 * Label3 Component - 11px label text
 */
const Label3: FC<HTMLAttributes<HTMLSpanElement>> = ({ children, className, ...props }) => {
  return (
    <span
      className={cn(
        'text-neutral text-[0.6875rem] leading-4 font-medium tracking-[0.03125rem]',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};

/**
 * Body1 Component - 16px body text
 */
const Body1: FC<HTMLAttributes<HTMLParagraphElement>> = ({ children, className, ...props }) => {
  return (
    <p
      className={cn(
        'text-neutral text-[1rem] leading-6 font-normal tracking-[0.03125rem]',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};

/**
 * Body2 Component - 14px body text
 */
const Body2: FC<HTMLAttributes<HTMLParagraphElement>> = ({ children, className, ...props }) => {
  return (
    <p
      className={cn(
        'text-neutral text-[0.875rem] leading-5 font-normal tracking-[0.015625rem]',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};

/**
 * Body3 Component - 12px body text
 */
const Body3: FC<HTMLAttributes<HTMLParagraphElement>> = ({ children, className, ...props }) => {
  return (
    <p
      className={cn(
        'text-neutral text-[0.75rem] leading-4 font-normal tracking-[0.025rem]',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export {
  Display1,
  Display2,
  Display3,
  Display4,
  Display5,
  Display6,
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
  Headline6,
  Title1,
  Title2,
  Title3,
  Label1,
  Label2,
  Label3,
  Body1,
  Body2,
  Body3,
};

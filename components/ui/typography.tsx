import { FC, HTMLAttributes } from 'react';

import { cn } from '@/utils';

/**
 * Display1 Component - 80px display text for prominent titles and hero sections.
 *
 * @component
 * @example
 * ```tsx
 * <Display1>Large Hero Title</Display1>
 * <Display1 className="text-center">Centered Title</Display1>
 * ```
 *
 * @param props - Standard HTML heading attributes
 * @returns  An h1 element with 80px font size and medium weight
 */
const Display1: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h1 className={cn('text-[5rem] leading-25 font-medium', className)} {...props}>
      {children}
    </h1>
  );
};

/**
 * Display2 Component - 72px display text for large headings.
 *
 * @component
 * @example
 * ```tsx
 * <Display2>Section Title</Display2>
 * ```
 *
 * @param props - Standard HTML heading attributes
 * @returns  An h1 element with 72px font size and medium weight
 */
const Display2: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h1 className={cn('text-[4.5rem] leading-25 font-medium', className)} {...props}>
      {children}
    </h1>
  );
};

/**
 * Display3 Component - 64px display text for medium-large headings.
 *
 * @component
 * @example
 * ```tsx
 * <Display3>Page Title</Display3>
 * ```
 *
 * @param props - Standard HTML heading attributes
 * @returns  An h1 element with 64px font size and medium weight
 */
const Display3: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h1 className={cn('text-[4rem] leading-20 font-medium', className)} {...props}>
      {children}
    </h1>
  );
};

/**
 * Display4 Component - 56px display text for prominent headings.
 *
 * @component
 * @example
 * ```tsx
 * <Display4>Feature Title</Display4>
 * ```
 *
 * @param props - Standard HTML heading attributes
 * @returns  An h1 element with 56px font size and medium weight
 */
const Display4: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h1 className={cn('text-[3.5rem] leading-18 font-medium', className)} {...props}>
      {children}
    </h1>
  );
};

/**
 * Display5 Component - 48px display text for section headings.
 *
 * @component
 * @example
 * ```tsx
 * <Display5>Content Section</Display5>
 * ```
 *
 * @param props - Standard HTML heading attributes
 * @returns  An h1 element with 48px font size and medium weight
 */
const Display5: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h1 className={cn('text-[3rem] leading-14 font-medium', className)} {...props}>
      {children}
    </h1>
  );
};

/**
 * Display6 Component - 40px display text for smaller display headings.
 *
 * @component
 * @example
 * ```tsx
 * <Display6>Card Title</Display6>
 * ```
 *
 * @param props - Standard HTML heading attributes
 * @returns  An h1 element with 40px font size and medium weight
 */
const Display6: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h1 className={cn('text-[2.5rem] leading-12 font-medium', className)} {...props}>
      {children}
    </h1>
  );
};

/**
 * Headline1 Component - 40px semibold headline for main page headings.
 *
 * @component
 * @example
 * ```tsx
 * <Headline1>Main Page Heading</Headline1>
 * ```
 *
 * @param props - Standard HTML heading attributes
 * @returns  An h1 element with 40px font size and semibold weight
 */
const Headline1: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h1 className={cn('text-[2.5rem] leading-12 font-semibold', className)} {...props}>
      {children}
    </h1>
  );
};

/**
 * Headline2 Component - 32px semibold headline for section headings.
 *
 * @component
 * @example
 * ```tsx
 * <Headline2>Section Heading</Headline2>
 * ```
 *
 * @param props - Standard HTML heading attributes
 * @returns  An h2 element with 32px font size and semibold weight
 */
const Headline2: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h2 className={cn('text-[2rem] leading-10 font-semibold', className)} {...props}>
      {children}
    </h2>
  );
};

/**
 * Headline3 Component - 28px semibold headline for subsection headings.
 *
 * @component
 * @example
 * ```tsx
 * <Headline3>Subsection Title</Headline3>
 * ```
 *
 * @param props - Standard HTML heading attributes
 * @returns  An h3 element with 28px font size and semibold weight
 */
const Headline3: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h3 className={cn('text-[1.75rem] leading-8 font-semibold', className)} {...props}>
      {children}
    </h3>
  );
};

/**
 * Headline4 Component - 24px semibold headline for card headings.
 *
 * @component
 * @example
 * ```tsx
 * <Headline4>Card Title</Headline4>
 * ```
 *
 * @param props - Standard HTML heading attributes
 * @returns  An h4 element with 24px font size and semibold weight
 */
const Headline4: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h4 className={cn('text-[1.5rem] leading-7 font-semibold', className)} {...props}>
      {children}
    </h4>
  );
};

/**
 * Headline5 Component - 20px semibold headline for component headings.
 *
 * @component
 * @example
 * ```tsx
 * <Headline5>Component Header</Headline5>
 * ```
 *
 * @param props - Standard HTML heading attributes
 * @returns  An h5 element with 20px font size and semibold weight
 */
const Headline5: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h5 className={cn('text-[1.25rem] leading-6 font-semibold', className)} {...props}>
      {children}
    </h5>
  );
};

/**
 * Headline6 Component - 16px semibold headline for small headings.
 *
 * @component
 * @example
 * ```tsx
 * <Headline6>Small Heading</Headline6>
 * ```
 *
 * @param props - Standard HTML heading attributes
 * @returns  An h6 element with 16px font size and semibold weight
 */
const Headline6: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h6 className={cn('text-[1rem] leading-5 font-semibold', className)} {...props}>
      {children}
    </h6>
  );
};

/**
 * Title1 Component - 22px medium title for list items and card titles.
 *
 * @component
 * @example
 * ```tsx
 * <Title1>List Item Title</Title1>
 * ```
 *
 * @param props - Standard HTML heading attributes
 * @returns  An h3 element with 22px font size and medium weight
 */
const Title1: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h3 className={cn('text-[1.375rem] leading-7 font-medium', className)} {...props}>
      {children}
    </h3>
  );
};

/**
 * Title2 Component - 16px medium title for buttons and form labels.
 *
 * @component
 * @example
 * ```tsx
 * <Title2>Button Text</Title2>
 * ```
 *
 * @param props - Standard HTML heading attributes
 * @returns  An h4 element with 16px font size and medium weight
 */
const Title2: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h4
      className={cn('text-[1rem] leading-6 font-medium tracking-[0.009375rem]', className)}
      {...props}
    >
      {children}
    </h4>
  );
};

/**
 * Title3 Component - 14px medium title for compact headings.
 *
 * @component
 * @example
 * ```tsx
 * <Title3>Compact Title</Title3>
 * ```
 *
 * @param props - Standard HTML heading attributes
 * @returns  An h5 element with 14px font size and medium weight
 */
const Title3: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => {
  return (
    <h5
      className={cn('text-[0.875rem] leading-5 font-medium tracking-[0.00625rem]', className)}
      {...props}
    >
      {children}
    </h5>
  );
};

/**
 * Label1 Component - 14px medium label for button text and form labels.
 *
 * @component
 * @example
 * ```tsx
 * <Label1>Button Label</Label1>
 * <label><Label1>Form Field</Label1></label>
 * ```
 *
 * @param  props - Standard HTML span attributes
 * @returns  A span element with 14px font size and medium weight
 */
const Label1: FC<HTMLAttributes<HTMLSpanElement>> = ({ children, className, ...props }) => {
  return (
    <span
      className={cn('text-[0.875rem] leading-5 font-medium tracking-[0.00625rem]', className)}
      {...props}
    >
      {children}
    </span>
  );
};

/**
 * Label2 Component - 12px medium label for small buttons and tags.
 *
 * @component
 * @example
 * ```tsx
 * <Label2>Small Button</Label2>
 * <Label2>Tag</Label2>
 * ```
 *
 * @param  props - Standard HTML span attributes
 * @returns  A span element with 12px font size and medium weight
 */
const Label2: FC<HTMLAttributes<HTMLSpanElement>> = ({ children, className, ...props }) => {
  return (
    <span
      className={cn('text-[0.75rem] leading-4 font-medium tracking-[0.03125rem]', className)}
      {...props}
    >
      {children}
    </span>
  );
};

/**
 * Label3 Component - 11px medium label for tiny labels and captions.
 *
 * @component
 * @example
 * ```tsx
 * <Label3>Tiny Label</Label3>
 * ```
 *
 * @param  props - Standard HTML span attributes
 * @returns  A span element with 11px font size and medium weight
 */
const Label3: FC<HTMLAttributes<HTMLSpanElement>> = ({ children, className, ...props }) => {
  return (
    <span
      className={cn('text-[0.6875rem] leading-4 font-medium tracking-[0.03125rem]', className)}
      {...props}
    >
      {children}
    </span>
  );
};

/**
 * Body1 Component - 16px normal body text for main content.
 *
 * @component
 * @example
 * ```tsx
 * <Body1>This is the main content paragraph with regular body text.</Body1>
 * ```
 *
 * @param  props - Standard HTML paragraph attributes
 * @returns  A p element with 16px font size and normal weight
 */
const Body1: FC<HTMLAttributes<HTMLParagraphElement>> = ({ children, className, ...props }) => {
  return (
    <p
      className={cn('text-[1rem] leading-6 font-normal tracking-[0.03125rem]', className)}
      {...props}
    >
      {children}
    </p>
  );
};

/**
 * Body2 Component - 14px normal body text for secondary content.
 *
 * @component
 * @example
 * ```tsx
 * <Body2>This is secondary body text for descriptions.</Body2>
 * ```
 *
 * @param  props - Standard HTML paragraph attributes
 * @returns  A p element with 14px font size and normal weight
 */
const Body2: FC<HTMLAttributes<HTMLParagraphElement>> = ({ children, className, ...props }) => {
  return (
    <p
      className={cn('text-[0.875rem] leading-5 font-normal tracking-[0.015625rem]', className)}
      {...props}
    >
      {children}
    </p>
  );
};

/**
 * Body3 Component - 12px normal body text for small text and captions.
 *
 * @component
 * @example
 * ```tsx
 * <Body3>This is small text for captions or helper text.</Body3>
 * ```
 *
 * @param  props - Standard HTML paragraph attributes
 * @returns  A p element with 12px font size and normal weight
 */
const Body3: FC<HTMLAttributes<HTMLParagraphElement>> = ({ children, className, ...props }) => {
  return (
    <p
      className={cn('text-[0.75rem] leading-4 font-normal tracking-[0.025rem]', className)}
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

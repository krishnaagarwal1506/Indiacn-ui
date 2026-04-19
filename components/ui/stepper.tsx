'use client';

import { AlertTriangle, Check } from 'lucide-react';
import { ComponentProps, createContext, useContext } from 'react';

import { Label1, Label2 } from '@/components/ui/typography';
import { cn } from '@/utils';

/*
 * UX4G stepper:
 * icon size: 1.938rem (~31px), font-size 0.875rem, font-weight 500
 * completed icon: color #9E9E9E, border 1px solid #E0E0E0
 * done icon: bg #3C9718 with checkmark SVG
 * connector line: 1px solid #C6C6C6, done: #3C9718
 * head-text color: #212121
 * vertical connector: left 2.45rem, width 1px
 * horizontal padding: 1.5rem
 */

interface IStepperContext {
  activeStep: number;
  orientation: 'horizontal' | 'vertical';
}

const STEPPER_CONTEXT = createContext<IStepperContext>({
  activeStep: 0,
  orientation: 'horizontal',
});

interface IStepperProps extends ComponentProps<'ul'> {
  activeStep?: number;
  orientation?: 'horizontal' | 'vertical';
}

/**
 * A stepper component for displaying progress through a multi-step process.
 * Matches the UX4G 2.0 Stepper specification.
 *
 * Uses semantic `<ul>/<li>` elements per UX4G.
 * Supports horizontal/vertical, completed/done/warning/active/pending states.
 */
function Stepper({
  className,
  activeStep = 0,
  orientation = 'horizontal',
  children,
  ...props
}: IStepperProps) {
  return (
    <STEPPER_CONTEXT.Provider value={{ activeStep, orientation }}>
      <ul
        className={cn(
          'relative m-0 flex w-full gap-0 overflow-hidden p-0',
          orientation === 'horizontal' ? 'flex-row justify-between' : 'flex-col',
          className,
        )}
        style={{ listStyle: 'none' }}
        {...props}
      >
        {children}
      </ul>
    </STEPPER_CONTEXT.Provider>
  );
}

interface IStepProps extends ComponentProps<'li'> {
  step: number;
  title?: string;
  description?: string;
  status?: 'completed' | 'active' | 'warning' | 'pending';
  isLast?: boolean;
}

/**
 * Individual step within a Stepper.
 * UX4G icon: 1.938rem, connector: 1px #C6C6C6, done connector: #3C9718.
 */
function Step({ className, step, title, description, status, isLast, ...props }: IStepProps) {
  const { activeStep, orientation } = useContext(STEPPER_CONTEXT);

  const resolvedStatus =
    status ?? (step < activeStep ? 'completed' : step === activeStep ? 'active' : 'pending');

  const isCompleted = resolvedStatus === 'completed';
  const isActive = resolvedStatus === 'active';
  const isWarning = resolvedStatus === 'warning';

  return (
    <li
      className={cn(
        'relative flex h-fit',
        orientation === 'horizontal' ? 'h-18 flex-auto items-center' : 'flex-col',
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          'flex items-center text-inherit no-underline',
          orientation === 'horizontal' ? 'px-6' : 'px-6 py-6',
        )}
      >
        {/* Step icon - UX4G: 1.938rem = ~31px */}
        <div
          className={cn(
            'flex size-[1.938rem] shrink-0 items-center justify-center rounded-full text-[0.875rem] font-medium transition-colors',
            orientation === 'horizontal' && 'my-6 mr-2',
            orientation === 'vertical' && 'mr-3',
            isCompleted && 'border-success bg-success border text-white',
            isActive && 'border-primary text-primary border-2 bg-transparent',
            isWarning && 'border-danger text-danger border bg-transparent',
            !isCompleted &&
              !isActive &&
              !isWarning &&
              'border border-neutral-200 text-neutral-400 dark:border-neutral-600 dark:text-neutral-500',
          )}
        >
          {isCompleted ? (
            <Check className='size-3.5' strokeWidth={3} />
          ) : isWarning ? (
            <AlertTriangle className='size-3.5' />
          ) : (
            <Label2>{step + 1}</Label2>
          )}
        </div>
        {/* Step text */}
        {(title || description) && (
          <div className='flex flex-col'>
            {title && (
              <Label1
                className={cn(
                  'text-sm leading-[1.3]',
                  isCompleted && 'text-neutral font-medium',
                  isActive && 'text-primary font-medium',
                  isWarning && 'text-danger',
                  !isCompleted && !isActive && !isWarning && 'text-neutral',
                )}
              >
                {title}
              </Label1>
            )}
            {description && <Label2 className='text-xs text-neutral-500'>{description}</Label2>}
          </div>
        )}
        {/* Horizontal connector line after icon+text */}
        {orientation === 'horizontal' && !isLast && (
          <div
            className={cn(
              'ml-2 h-px flex-1',
              isCompleted ? 'bg-success' : 'bg-neutral-200 dark:bg-neutral-600',
            )}
          />
        )}
      </div>
      {/* Vertical connector line */}
      {orientation === 'vertical' && !isLast && (
        <div
          className={cn(
            'absolute left-[2.45rem] w-px',
            isCompleted ? 'bg-success' : 'bg-neutral-200 dark:bg-neutral-600',
          )}
          style={{ top: '3.25rem', height: 'calc(100% - 2.45rem)' }}
        />
      )}
    </li>
  );
}

export { Stepper, Step };

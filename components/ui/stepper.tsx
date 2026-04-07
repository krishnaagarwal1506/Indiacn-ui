'use client';
/* eslint-disable eslint-frontend-rules/enforce-typography-components, eslint-frontend-rules/top-level-const-snake */

import { Check } from 'lucide-react';
import { ComponentProps, createContext, useContext } from 'react';

import { cn } from '@/utils';

interface IStepperContext {
  activeStep: number;
  orientation: 'horizontal' | 'vertical';
}

const StepperContext = createContext<IStepperContext>({
  activeStep: 0,
  orientation: 'horizontal',
});

interface IStepperProps extends ComponentProps<'div'> {
  activeStep?: number;
  orientation?: 'horizontal' | 'vertical';
}

function Stepper({
  className,
  activeStep = 0,
  orientation = 'horizontal',
  children,
  ...props
}: IStepperProps) {
  return (
    <StepperContext.Provider value={{ activeStep, orientation }}>
      <div
        className={cn(
          'flex gap-2',
          orientation === 'horizontal' ? 'flex-row items-center' : 'flex-col',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </StepperContext.Provider>
  );
}

interface IStepProps extends ComponentProps<'div'> {
  step: number;
  title?: string;
  description?: string;
}

function Step({ className, step, title, description, ...props }: IStepProps) {
  const { activeStep, orientation } = useContext(StepperContext);
  const isCompleted = step < activeStep;
  const isActive = step === activeStep;

  return (
    <div
      className={cn('flex items-center gap-3', orientation === 'horizontal' && 'flex-1', className)}
      {...props}
    >
      <div className='flex items-center gap-3'>
        <div
          className={cn(
            'flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-medium transition-colors',
            isCompleted && 'bg-primary text-neutral-0',
            isActive && 'border-primary bg-neutral-0 text-primary border-2 dark:bg-neutral-900',
            !isCompleted && !isActive && 'border border-neutral-300 text-neutral-400',
          )}
        >
          {isCompleted ? <Check className='size-4' /> : step + 1}
        </div>
        {(title || description) && (
          <div className='flex flex-col'>
            {title && (
              <span
                className={cn(
                  'text-sm font-medium',
                  isActive && 'text-primary',
                  !isCompleted && !isActive && 'text-neutral-400',
                )}
              >
                {title}
              </span>
            )}
            {description && <span className='text-xs text-neutral-400'>{description}</span>}
          </div>
        )}
      </div>
      {orientation === 'horizontal' && (
        <div
          className={cn(
            'ml-2 h-px flex-1',
            isCompleted ? 'bg-primary' : 'bg-neutral-200 dark:bg-neutral-700',
          )}
        />
      )}
    </div>
  );
}

export { Stepper, Step };

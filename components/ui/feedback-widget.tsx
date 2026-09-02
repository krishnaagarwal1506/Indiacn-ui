'use client';

import { Angry, Frown, Laugh, Meh, Smile } from 'lucide-react';
import { ComponentProps, FormEvent, ReactNode, useCallback, useId, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input, InputMessage } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from '@/components/ui/modal';
import { Textarea } from '@/components/ui/textarea';
import { Body3, Label2 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

/*
 * UX4G feedback widget: a vertical tab pinned to the right edge opening a form
 * with a five-point rating, a message and a character counter.
 *
 * The kit draws the rating as illustrated yellow emoji. Those would be image
 * assets a registry component cannot ship, and they cannot be recoloured or
 * themed, so this uses the matching line faces instead.
 */
const RATINGS = [
  { value: 1, label: 'Very dissatisfied', Icon: Angry },
  { value: 2, label: 'Dissatisfied', Icon: Frown },
  { value: 3, label: 'Neutral', Icon: Meh },
  { value: 4, label: 'Satisfied', Icon: Smile },
  { value: 5, label: 'Very satisfied', Icon: Laugh },
] as const;

interface IFeedbackRatingProps {
  value: number | null;
  onChange: (value: number) => void;
  className?: string;
}

/**
 * Five-point rating scale.
 *
 * A radio group rather than five buttons, so arrow keys move between options
 * and a screen reader announces "3 of 5" instead of five unrelated controls.
 */
function FeedbackRating({ value, onChange, className }: IFeedbackRatingProps) {
  return (
    <div role='radiogroup' aria-label='Rating' className={cn('flex gap-3', className)}>
      {RATINGS.map(({ value: option, label, Icon }) => (
        <FeedbackRatingOption
          key={option}
          option={option}
          label={label}
          Icon={Icon}
          selected={value === option}
          onChange={onChange}
        />
      ))}
    </div>
  );
}

/** One face in the scale. Split out so its handler is stable. */
function FeedbackRatingOption({
  option,
  label,
  Icon,
  selected,
  onChange,
}: {
  option: number;
  label: string;
  Icon: typeof Angry;
  selected: boolean;
  onChange: (value: number) => void;
}) {
  const handleClick = useCallback(() => onChange(option), [onChange, option]);

  return (
    <button
      type='button'
      role='radio'
      aria-checked={selected}
      aria-label={label}
      onClick={handleClick}
      className={cn(
        'focus-visible:shadow-focus-primary flex size-12 cursor-pointer items-center justify-center rounded-full border transition-colors focus-visible:outline-none',
        selected
          ? 'border-primary bg-primary-100 text-primary-800'
          : 'hover:border-primary hover:text-primary border-neutral-200 text-neutral-600',
      )}
    >
      <Icon className='size-6' aria-hidden />
    </button>
  );
}

interface IFeedbackValue {
  name: string;
  email: string;
  rating: number | null;
  message: string;
}

interface IFeedbackWidgetProps extends Omit<ComponentProps<'div'>, 'onSubmit' | 'children'> {
  onSubmit: (value: IFeedbackValue) => void | Promise<void>;
  title?: string;
  description?: string;
  maxLength?: number;
  /** Replaces the tab label. */
  triggerLabel?: string;
  footer?: ReactNode;
}

/**
 * Feedback tab and form.
 *
 * Rating and message are required, matching the asterisks in the kit. The
 * form refuses to submit without them and says which one is missing rather
 * than disabling the button with no explanation.
 */
function FeedbackWidget({
  className,
  onSubmit,
  title = 'We value your feedback',
  description = 'Share your thoughts to help us improve this service.',
  maxLength = 200,
  triggerLabel = 'Feedback',
  footer,
  ...props
}: IFeedbackWidgetProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<IFeedbackValue>({
    name: '',
    email: '',
    rating: null,
    message: '',
  });
  const [showErrors, setShowErrors] = useState(false);
  const formId = useId();

  const missingRating = value.rating === null;
  const missingMessage = value.message.trim() === '';

  const setName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue(current => ({ ...current, name: e.target.value })),
    [],
  );
  const setEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue(current => ({ ...current, email: e.target.value })),
    [],
  );
  const setMessage = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      setValue(current => ({ ...current, message: e.target.value })),
    [],
  );
  const setRating = useCallback(
    (rating: number) => setValue(current => ({ ...current, rating })),
    [],
  );
  const close = useCallback(() => setOpen(false), []);
  const openForm = useCallback(() => setOpen(true), []);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (missingRating || missingMessage) {
        setShowErrors(true);
        return;
      }
      void onSubmit(value);
      setOpen(false);
      setShowErrors(false);
      setValue({ name: '', email: '', rating: null, message: '' });
    },
    [missingRating, missingMessage, onSubmit, value],
  );

  return (
    <div className={cn('fixed top-1/2 right-0 z-40 -translate-y-1/2', className)} {...props}>
      <Modal open={open} onOpenChange={setOpen}>
        <button
          type='button'
          onClick={openForm}
          aria-label={`${triggerLabel} — open the feedback form`}
          className='bg-primary text-primary-foreground focus-visible:shadow-focus-primary w-10 cursor-pointer rounded-l-md py-5 transition-opacity hover:opacity-90 focus-visible:outline-none'
        >
          <Label2 className='[text-orientation:mixed] [writing-mode:vertical-rl]'>
            {triggerLabel}
          </Label2>
        </button>

        <ModalContent className='max-w-[560px]'>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <ModalDescription className='mb-6'>{description}</ModalDescription>

            <form id={formId} onSubmit={handleSubmit} className='flex flex-col gap-5'>
              <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                <div>
                  <Label htmlFor={`${formId}-name`} className='mb-2'>
                    Full name
                  </Label>
                  <Input
                    id={`${formId}-name`}
                    value={value.name}
                    onChange={setName}
                    placeholder='Enter name'
                  />
                </div>
                <div>
                  <Label htmlFor={`${formId}-email`} className='mb-2'>
                    Email
                  </Label>
                  <Input
                    id={`${formId}-email`}
                    type='email'
                    value={value.email}
                    onChange={setEmail}
                    placeholder='name@example.in'
                  />
                </div>
              </div>

              <div>
                <Label className='mb-2 block'>Rating (required)</Label>
                <FeedbackRating value={value.rating} onChange={setRating} />
                {showErrors && missingRating && (
                  <InputMessage state='error'>Choose a rating.</InputMessage>
                )}
              </div>

              <div>
                <Label htmlFor={`${formId}-message`} className='mb-2'>
                  Feedback (required)
                </Label>
                <Textarea
                  id={`${formId}-message`}
                  value={value.message}
                  onChange={setMessage}
                  maxLength={maxLength}
                  showCount
                  state={showErrors && missingMessage ? 'error' : 'default'}
                  placeholder='Tell us what happened'
                />
                {showErrors && missingMessage && (
                  <InputMessage state='error'>Tell us what you would change.</InputMessage>
                )}
              </div>
            </form>
          </ModalBody>
          <ModalFooter className='flex-col items-stretch gap-3 sm:flex-row sm:items-center'>
            <Button type='button' variant='outlined' onClick={close} className='sm:flex-1'>
              Cancel
            </Button>
            <Button type='submit' form={formId} className='sm:flex-1'>
              Submit
            </Button>
          </ModalFooter>
          {footer && <Body3 className='pb-4 text-center text-neutral-500'>{footer}</Body3>}
        </ModalContent>
      </Modal>
    </div>
  );
}

export type { IFeedbackValue };

export { FeedbackWidget, FeedbackRating };

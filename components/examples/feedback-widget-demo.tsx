'use client';

import { useCallback, useState } from 'react';

import { FeedbackRating, FeedbackWidget, IFeedbackValue } from '@/components/ui/feedback-widget';
import { Body1, Body3, Headline5 } from '@/components/ui/typography';

export function FeedbackWidgetDefault() {
  const [last, setLast] = useState<IFeedbackValue | null>(null);
  const handleSubmit = useCallback((value: IFeedbackValue) => setLast(value), []);

  return (
    <div className='relative flex min-h-[220px] w-full items-center justify-end overflow-hidden rounded-md border border-neutral-100'>
      <Body3 className='absolute top-4 left-4 max-w-[24rem] text-neutral-600'>
        In a real page the tab is fixed to the right edge of the viewport. Here it is pinned to this
        box instead so the surface stays inside the example.
      </Body3>
      {last && (
        <Body3 className='text-primary absolute bottom-4 left-4'>
          Submitted: {last.rating} of 5 — “{last.message}”
        </Body3>
      )}
      <FeedbackWidget
        onSubmit={handleSubmit}
        footer='Powered by UX4G'
        className='absolute top-1/2 right-0 -translate-y-1/2'
      />
    </div>
  );
}

export function FeedbackRatingDefault() {
  const [rating, setRating] = useState<number | null>(4);
  const handleChange = useCallback((value: number) => setRating(value), []);

  return (
    <div className='flex w-full max-w-[420px] flex-col gap-4'>
      <Headline5>How was this service?</Headline5>
      <FeedbackRating value={rating} onChange={handleChange} />
      <Body1 className='text-neutral-600'>
        {rating === null ? 'No rating chosen.' : `You chose ${rating} of 5.`}
      </Body1>
    </div>
  );
}

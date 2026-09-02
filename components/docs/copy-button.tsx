'use client';

import { Check, Copy } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

export function CopyButton({ value, className }: { value: string; className?: string }) {
  const [copied, setCopied] = React.useState(false);

  const onCopy = React.useCallback(() => {
    void navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [value]);

  return (
    <button
      onClick={onCopy}
      aria-label='Copy code'
      className={cn(
        'focus-visible:shadow-focus-primary hover:text-neutral z-10 shrink-0 cursor-pointer rounded-md bg-neutral-100 p-1.5 text-neutral-600 transition-colors hover:bg-neutral-200 focus-visible:outline-none',
        className,
      )}
    >
      {copied ? <Check className='size-4' /> : <Copy className='size-4' />}
    </button>
  );
}

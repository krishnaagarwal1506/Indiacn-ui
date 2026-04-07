'use client';

import { Check, Copy } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/utils';

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
        'absolute top-3 right-3 z-10 rounded-md p-1.5 text-zinc-400 transition-colors hover:bg-zinc-200 hover:text-zinc-700 focus:outline-none dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-100',
        className,
      )}
    >
      {copied ? <Check className='size-4' /> : <Copy className='size-4' />}
    </button>
  );
}

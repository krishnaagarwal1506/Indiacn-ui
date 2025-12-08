import { FC, ReactNode } from 'react';

import { Label1 } from '@/components/ui/typography';
import { cn } from '@/utils';
// TODO: TO be discussed: whether to include lucide-react or not
// import { Check, Copy } from 'lucide-react';

interface ComponentPreviewProps {
  children: ReactNode;
  code: string;
  className?: string;
}

export const ComponentPreview: FC<ComponentPreviewProps> = ({ children, code, className }) => {
  // const [copied, setCopied] = useState(false);

  // const copyToClipboard = async () => {
  //   await navigator.clipboard.writeText(code);
  //   setCopied(true);
  //   setTimeout(() => setCopied(false), 2000);
  // };

  return (
    <div className={cn('group relative my-6 overflow-hidden rounded-lg border', className)}>
      {/* Preview Area */}
      <div className='preview relative flex min-h-[350px] w-full items-center justify-center p-10'>
        {children}
      </div>

      {/* Code Area */}
      <div className='relative'>
        <div className='flex items-center justify-between border-t px-4 py-2'>
          <Label1>Code</Label1>
          {/* <button
            onClick={copyToClipboard}
            className='inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium transition-colors'
            aria-label='Copy code'
          >
            {copied ? (
              <>
                <Check className='h-3 w-3' />
                Copied
              </>
            ) : (
              <>
                <Copy className='h-3 w-3' />
                Copy
              </>
            )}
          </button> */}
        </div>
        <div className='overflow-x-auto'>
          <pre className='p-4'>
            <code className='text-sm'>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

interface ComponentSourceProps {
  children: string;
}

export const ComponentSource: FC<ComponentSourceProps> = ({ children }) => {
  // const [copied, setCopied] = useState(false);

  // const copyToClipboard = async () => {
  //   await navigator.clipboard.writeText(children);
  //   setCopied(true);
  //   setTimeout(() => setCopied(false), 2000);
  // };

  return (
    <div className='relative my-6 overflow-hidden rounded-lg border'>
      <div className='flex items-center justify-between border-b px-4 py-2'>
        <Label1 className='text-zinc-400'>Installation</Label1>
        {/* <button
          onClick={copyToClipboard}
          className='inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium transition-colors'
          aria-label='Copy code'
        >
          {copied ? (
            <>
              <Check className='h-3 w-3' />
              Copied
            </>
          ) : (
            <>
              <Copy className='h-3 w-3' />
              Copy
            </>
          )}
        </button> */}
      </div>
      <div className='overflow-x-auto'>
        <pre className='p-4'>
          <code className='text-sm'>{children}</code>
        </pre>
      </div>
    </div>
  );
};

import fs from 'node:fs/promises';
import path from 'node:path';

import { Braces, FileCode, FileCode2, FileType } from 'lucide-react';
import * as React from 'react';

import { CodeCollapsibleWrapper } from '@/components/docs/code-collapsible-wrapper';
import { CopyButton } from '@/components/docs/copy-button';
import { highlightCode } from '@/components/docs/highlight-code';
import { cn } from '@/lib/utils';
import { Index } from '@/registry/index';

/** Maps a language/file extension string to a Lucide file icon. */
function getIconForLanguageExtension(lang: string) {
  switch (lang) {
    case 'tsx':
    case 'ts':
      return <FileCode2 className='size-4' />;
    case 'jsx':
    case 'js':
      return <FileCode className='size-4' />;
    case 'css':
      return <FileType className='size-4' />;
    case 'json':
      return <Braces className='size-4' />;
    default:
      return <FileCode2 className='size-4' />;
  }
}

/** Lines of code before the block becomes collapsible. */
const COLLAPSE_LINE_THRESHOLD = 16;

export async function ComponentSource({
  name,
  src,
  code: directCode,
  title,
  language,
  collapsible = true,
  className,
}: React.ComponentProps<'div'> & {
  name?: string;
  src?: string;
  code?: string;
  title?: string;
  language?: string;
  collapsible?: boolean;
}) {
  let code: string | undefined;

  if (name) {
    code = Index[name]?.code;
  }

  if (src) {
    code = await fs.readFile(path.join(process.cwd(), src), 'utf-8');
  }

  if (directCode) {
    code = directCode;
  }

  if (!code) {
    return null;
  }

  const lang = language ?? (title?.includes('.') ? title.split('.').pop() : undefined) ?? 'tsx';
  const highlightedCode = await highlightCode(code, lang);

  // Only wrap in collapsible when explicitly enabled AND content is long enough
  const lineCount = code.split('\n').length;
  const shouldCollapse = collapsible && lineCount > COLLAPSE_LINE_THRESHOLD;

  return (
    <ComponentCode
      code={code}
      highlightedCode={highlightedCode}
      language={lang}
      title={title}
      collapsible={shouldCollapse}
      className={className}
    />
  );
}

/**
 * Renders syntax-highlighted code with an optional title and copy button.
 *
 * The figure is the only bordered surface: the caption and the collapse control
 * sit inside it, so a titled or collapsible block is still one box rather than
 * a box nested in a box.
 */
function ComponentCode({
  code,
  highlightedCode,
  language,
  title,
  collapsible,
  className,
}: {
  code: string;
  highlightedCode: string;
  language: string;
  title: string | undefined;
  collapsible: boolean;
  className?: string;
}) {
  const codeBlock = <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />;

  return (
    <figure
      className={cn(
        'not-fumadocs-codeblock bg-neutral-0 relative my-0! overflow-hidden rounded-lg border border-neutral-100 font-mono',
        className,
      )}
    >
      {title ? (
        <figcaption className='mt-0! flex items-center gap-2 border-b border-neutral-100 bg-neutral-50 py-1.5 pr-1.5 pl-4 text-xs text-neutral-600'>
          {getIconForLanguageExtension(language)}
          {title}
          <CopyButton value={code} className='ml-auto' />
        </figcaption>
      ) : (
        <CopyButton value={code} className='absolute top-3 right-3' />
      )}
      {collapsible ? <CodeCollapsibleWrapper>{codeBlock}</CodeCollapsibleWrapper> : codeBlock}
    </figure>
  );
}

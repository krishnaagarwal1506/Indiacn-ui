import fs from 'node:fs/promises';
import path from 'node:path';

import { Braces, FileCode, FileCode2, FileType } from 'lucide-react';
import * as React from 'react';

import { CodeCollapsibleWrapper } from '@/components/docs/code-collapsible-wrapper';
import { CopyButton } from '@/components/docs/copy-button';
import { highlightCode } from '@/components/docs/highlight-code';
import { Index } from '@/registry/index';
import { cn } from '@/utils';

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

  if (!shouldCollapse) {
    return (
      <div className={cn('relative', className)}>
        <ComponentCode
          code={code}
          highlightedCode={highlightedCode}
          language={lang}
          title={title}
        />
      </div>
    );
  }

  return (
    <CodeCollapsibleWrapper className={className}>
      <ComponentCode code={code} highlightedCode={highlightedCode} language={lang} title={title} />
    </CodeCollapsibleWrapper>
  );
}

/** Renders syntax-highlighted code with an optional title and copy button. */
function ComponentCode({
  code,
  highlightedCode,
  language,
  title,
}: {
  code: string;
  highlightedCode: string;
  language: string;
  title: string | undefined;
}) {
  return (
    <figure className='relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 font-mono'>
      {title && (
        <figcaption className='flex items-center gap-2 border-b border-zinc-700/60 bg-zinc-800/80 px-4 py-2 text-xs text-zinc-400'>
          {getIconForLanguageExtension(language)}
          {title}
        </figcaption>
      )}
      <CopyButton value={code} />
      <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </figure>
  );
}

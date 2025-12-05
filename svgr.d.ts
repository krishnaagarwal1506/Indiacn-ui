declare module '*.svg' {
  import { FC, SVGProps } from 'react';
  const content: FC<SVGProps<SVGElement>>;
  export { content };
}

declare module '*.svg?url' {
  const content: any;
  export { content };
}

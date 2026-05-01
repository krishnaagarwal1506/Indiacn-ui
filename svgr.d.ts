declare module '*.css';

declare module '*.svg' {
  import { FC, SVGProps } from 'react';
  const content: FC<SVGProps<SVGSVGElement>>;
  export default content; //eslint-disable-line
}

declare module '*.svg?url' {
  const content: any;
  export { content };
}

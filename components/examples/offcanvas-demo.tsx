'use client';
/* eslint-disable eslint-frontend-rules/enforce-typography-components */

import { Button } from '@/components/ui/button';
import {
  Offcanvas,
  OffcanvasBody,
  OffcanvasContent,
  OffcanvasHeader,
  OffcanvasTitle,
  OffcanvasTrigger,
} from '@/components/ui/offcanvas';

export function OffcanvasDefault() {
  return (
    <Offcanvas>
      <OffcanvasTrigger asChild>
        <Button variant='outlined'>Open Offcanvas</Button>
      </OffcanvasTrigger>
      <OffcanvasContent>
        <OffcanvasHeader>
          <OffcanvasTitle>Offcanvas</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <p className='text-sm'>
            Some text as placeholder. In real life you can have the elements you have chosen.
          </p>
        </OffcanvasBody>
      </OffcanvasContent>
    </Offcanvas>
  );
}

export function OffcanvasSides() {
  return (
    <div className='flex flex-wrap gap-2'>
      {(['left', 'right', 'top', 'bottom'] as const).map(side => (
        <Offcanvas key={side}>
          <OffcanvasTrigger asChild>
            <Button variant='outlined' size='sm'>
              {side}
            </Button>
          </OffcanvasTrigger>
          <OffcanvasContent side={side}>
            <OffcanvasHeader>
              <OffcanvasTitle>Offcanvas {side}</OffcanvasTitle>
            </OffcanvasHeader>
            <OffcanvasBody>
              <p className='text-sm'>Content slides in from the {side}.</p>
            </OffcanvasBody>
          </OffcanvasContent>
        </Offcanvas>
      ))}
    </div>
  );
}

export function OffcanvasBodyScroll() {
  return (
    <Offcanvas>
      <OffcanvasTrigger asChild>
        <Button variant='outlined'>Enable Body Scroll</Button>
      </OffcanvasTrigger>
      <OffcanvasContent bodyScroll>
        <OffcanvasHeader>
          <OffcanvasTitle>Body Scrolling</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <p className='text-sm'>
            Try scrolling the rest of the page while this offcanvas is open. The backdrop is hidden
            and body scroll is enabled.
          </p>
        </OffcanvasBody>
      </OffcanvasContent>
    </Offcanvas>
  );
}

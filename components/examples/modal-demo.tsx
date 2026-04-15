'use client';

import { Button } from '@/components/ui/button';
import {
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from '@/components/ui/modal';
import { Body1 } from '@/components/ui/typography';

export function ModalDefault() {
  return (
    <Modal>
      <ModalTrigger asChild>
        <Button>Open Modal</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Modal Title</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <Body1 className='text-sm'>
            This is the modal body content. You can place any content here including forms, text,
            images, and other components.
          </Body1>
        </ModalBody>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant='outlined'>Cancel</Button>
          </ModalClose>
          <Button>Save Changes</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export function ModalSizes() {
  return (
    <div className='flex flex-wrap gap-2'>
      {(['sm', 'md', 'lg', 'xl'] as const).map(size => (
        <Modal key={size}>
          <ModalTrigger asChild>
            <Button variant='outlined'>{size.toUpperCase()}</Button>
          </ModalTrigger>
          <ModalContent size={size}>
            <ModalHeader>
              <ModalTitle>{size.toUpperCase()} Modal</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <Body1 className='text-sm'>
                This is a {size} sized modal (
                {{ sm: '300px', md: '500px', lg: '800px', xl: '1140px' }[size]}).
              </Body1>
            </ModalBody>
            <ModalFooter>
              <ModalClose asChild>
                <Button>Close</Button>
              </ModalClose>
            </ModalFooter>
          </ModalContent>
        </Modal>
      ))}
    </div>
  );
}

export function ModalScrollable() {
  return (
    <Modal>
      <ModalTrigger asChild>
        <Button variant='outlined'>Scrollable Modal</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Scrollable Content</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <div className='space-y-4'>
            {Array.from({ length: 10 }, (_, i) => (
              <Body1 key={i} className='text-sm'>
                This is paragraph {i + 1} of the scrollable content. When the content exceeds the
                modal height, the body becomes scrollable while the header and footer remain fixed.
              </Body1>
            ))}
          </div>
        </ModalBody>
        <ModalFooter>
          <ModalClose asChild>
            <Button>Close</Button>
          </ModalClose>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

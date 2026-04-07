'use client';
/* eslint-disable eslint-frontend-rules/enforce-typography-components */

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
          <p className='text-sm'>
            This is the modal body content. You can place any content here including forms, text,
            images, and other components.
          </p>
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
      {(['sm', 'md', 'lg'] as const).map(size => (
        <Modal key={size}>
          <ModalTrigger asChild>
            <Button variant='outlined'>{size.toUpperCase()}</Button>
          </ModalTrigger>
          <ModalContent size={size}>
            <ModalHeader>
              <ModalTitle>{size.toUpperCase()} Modal</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <p className='text-sm'>This is a {size} sized modal dialog.</p>
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

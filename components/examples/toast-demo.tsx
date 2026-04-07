'use client';

import { Toast, ToastDescription, ToastTitle } from '@/components/ui/toast';

export function ToastDefault() {
  return (
    <Toast onDismiss={() => {}}>
      <ToastTitle>Notification</ToastTitle>
      <ToastDescription>This is a default toast message.</ToastDescription>
    </Toast>
  );
}

export function ToastThemes() {
  return (
    <div className='flex w-full flex-col gap-3'>
      <Toast theme='default' onDismiss={() => {}}>
        <ToastTitle>Default</ToastTitle>
        <ToastDescription>A default styled toast message.</ToastDescription>
      </Toast>
      <Toast theme='primary' onDismiss={() => {}}>
        <ToastTitle>Primary</ToastTitle>
        <ToastDescription>A primary themed toast.</ToastDescription>
      </Toast>
      <Toast theme='success' onDismiss={() => {}}>
        <ToastTitle>Success</ToastTitle>
        <ToastDescription>Action completed successfully.</ToastDescription>
      </Toast>
      <Toast theme='danger' onDismiss={() => {}}>
        <ToastTitle>Error</ToastTitle>
        <ToastDescription>Something went wrong.</ToastDescription>
      </Toast>
      <Toast theme='warning' onDismiss={() => {}}>
        <ToastTitle>Warning</ToastTitle>
        <ToastDescription>Please review before proceeding.</ToastDescription>
      </Toast>
    </div>
  );
}

export function ToastSimple() {
  return (
    <Toast>
      <ToastDescription>Your file has been uploaded.</ToastDescription>
    </Toast>
  );
}

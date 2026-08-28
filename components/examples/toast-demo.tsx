'use client';

import { Toast, ToastDescription, ToastTitle } from '@/components/ui/toast';

/** No-op callback for demo purposes. */
const noop = () => {};

export function ToastDefault() {
  return (
    <Toast onDismiss={noop}>
      <ToastTitle>Notification</ToastTitle>
      <ToastDescription>This is a default toast message.</ToastDescription>
    </Toast>
  );
}

export function ToastThemes() {
  return (
    <div className='flex w-full flex-col gap-3'>
      <Toast theme='default' onDismiss={noop}>
        <ToastTitle>Default</ToastTitle>
        <ToastDescription>A default styled toast message.</ToastDescription>
      </Toast>
      <Toast theme='primary' onDismiss={noop}>
        <ToastTitle>Primary</ToastTitle>
        <ToastDescription>A primary themed toast.</ToastDescription>
      </Toast>
      <Toast theme='success' onDismiss={noop}>
        <ToastTitle>Success</ToastTitle>
        <ToastDescription>Action completed successfully.</ToastDescription>
      </Toast>
      <Toast theme='danger' onDismiss={noop}>
        <ToastTitle>Error</ToastTitle>
        <ToastDescription>Something went wrong.</ToastDescription>
      </Toast>
      <Toast theme='warning' onDismiss={noop}>
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

export function ToastStatuses() {
  return (
    <div className='flex flex-col gap-3'>
      <Toast status='success'>
        <ToastTitle>Application submitted</ToastTitle>
        <ToastDescription>Reference number MH-2026-44815.</ToastDescription>
      </Toast>
      <Toast status='warning'>
        <ToastTitle>Session expiring</ToastTitle>
        <ToastDescription>You will be signed out in two minutes.</ToastDescription>
      </Toast>
      <Toast status='error'>
        <ToastTitle>Upload failed</ToastTitle>
        <ToastDescription>The file exceeds the 5 MB limit.</ToastDescription>
      </Toast>
      <Toast status='info'>
        <ToastTitle>Aadhaar verification pending</ToastTitle>
        <ToastDescription>This usually takes under a minute.</ToastDescription>
      </Toast>
      <Toast status='loading'>
        <ToastTitle>Uploading documents</ToastTitle>
        <ToastDescription>Please keep this tab open.</ToastDescription>
      </Toast>
    </div>
  );
}

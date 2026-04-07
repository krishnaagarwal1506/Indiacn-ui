'use client';

import { AlertCircle, CheckCircle2, Info, TriangleAlert } from 'lucide-react';

import { Alert, AlertDescription, AlertLink, AlertTitle } from '@/components/ui/alert';

export function AlertDefault() {
  return (
    <Alert theme='primary'>
      <Info className='size-4' />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  );
}

export function AlertThemes() {
  return (
    <div className='flex w-full flex-col gap-4'>
      <Alert theme='primary'>
        <Info className='size-4' />
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>This is a primary alert for general information.</AlertDescription>
      </Alert>
      <Alert theme='success'>
        <CheckCircle2 className='size-4' />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Your changes have been saved successfully.</AlertDescription>
      </Alert>
      <Alert theme='danger'>
        <AlertCircle className='size-4' />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong. Please try again.</AlertDescription>
      </Alert>
      <Alert theme='warning'>
        <TriangleAlert className='size-4' />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Your session is about to expire.</AlertDescription>
      </Alert>
    </div>
  );
}

export function AlertDismissible() {
  return (
    <Alert theme='success' dismissible>
      <CheckCircle2 className='size-4' />
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        Your changes have been saved. You can safely navigate away.
      </AlertDescription>
    </Alert>
  );
}

export function AlertWithLink() {
  return (
    <Alert theme='primary'>
      <Info className='size-4' />
      <AlertTitle>Update available</AlertTitle>
      <AlertDescription>
        A new version is available. <AlertLink href='#'>Update now</AlertLink>.
      </AlertDescription>
    </Alert>
  );
}

export function AlertSimple() {
  return (
    <Alert theme='danger'>
      <AlertCircle className='size-4' />
      <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
    </Alert>
  );
}

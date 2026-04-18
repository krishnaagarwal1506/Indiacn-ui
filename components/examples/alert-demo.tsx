'use client';

import { AlertCircle, CheckCircle2, Info, TriangleAlert } from 'lucide-react';

import { Alert, AlertDescription, AlertIcon, AlertLink, AlertTitle } from '@/components/ui/alert';

export function AlertDefault() {
  return (
    <Alert theme='primary'>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  );
}

export function AlertThemes() {
  return (
    <div className='flex w-full flex-col gap-4'>
      <Alert theme='primary'>
        <AlertDescription>A simple primary alert — check it out!</AlertDescription>
      </Alert>
      <Alert theme='secondary'>
        <AlertDescription>A simple secondary alert — check it out!</AlertDescription>
      </Alert>
      <Alert theme='success'>
        <AlertDescription>A simple success alert — check it out!</AlertDescription>
      </Alert>
      <Alert theme='danger'>
        <AlertDescription>A simple danger alert — check it out!</AlertDescription>
      </Alert>
      <Alert theme='warning'>
        <AlertDescription>A simple warning alert — check it out!</AlertDescription>
      </Alert>
      <Alert theme='info'>
        <AlertDescription>A simple info alert — check it out!</AlertDescription>
      </Alert>
      <Alert theme='light'>
        <AlertDescription>A simple light alert — check it out!</AlertDescription>
      </Alert>
      <Alert theme='dark'>
        <AlertDescription>A simple dark alert — check it out!</AlertDescription>
      </Alert>
    </div>
  );
}

export function AlertWithIcon() {
  return (
    <div className='flex w-full flex-col gap-4'>
      <Alert theme='success'>
        <AlertIcon>
          <CheckCircle2 className='size-5 shrink-0' />
          <AlertDescription>Your changes have been saved successfully.</AlertDescription>
        </AlertIcon>
      </Alert>
      <Alert theme='danger'>
        <AlertIcon>
          <AlertCircle className='size-5 shrink-0' />
          <AlertDescription>Something went wrong. Please try again.</AlertDescription>
        </AlertIcon>
      </Alert>
      <Alert theme='warning'>
        <AlertIcon>
          <TriangleAlert className='size-5 shrink-0' />
          <AlertDescription>Your session is about to expire.</AlertDescription>
        </AlertIcon>
      </Alert>
      <Alert theme='info'>
        <AlertIcon>
          <Info className='size-5 shrink-0' />
          <AlertDescription>A new update is available for download.</AlertDescription>
        </AlertIcon>
      </Alert>
    </div>
  );
}

export function AlertDismissible() {
  return (
    <Alert theme='warning' dismissible>
      <AlertDescription>
        Holy guacamole! You should check in on some of those fields below.
      </AlertDescription>
    </Alert>
  );
}

export function AlertWithLink() {
  return (
    <Alert theme='primary'>
      <AlertDescription>
        A new version is available. <AlertLink href='#'>Update now</AlertLink>.
      </AlertDescription>
    </Alert>
  );
}

export function AlertSimple() {
  return (
    <Alert theme='danger'>
      <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
    </Alert>
  );
}

export function AlertAdditionalContent() {
  return (
    <Alert theme='success'>
      <AlertTitle>Well done!</AlertTitle>
      <AlertDescription>You successfully completed the onboarding process.</AlertDescription>
      <hr className='my-3 border-current opacity-25' />
      <AlertDescription>
        Whenever you need to, be sure to check out the documentation for guidance.
      </AlertDescription>
    </Alert>
  );
}

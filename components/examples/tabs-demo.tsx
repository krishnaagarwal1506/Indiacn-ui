/* eslint-disable eslint-frontend-rules/enforce-typography-components */
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Body2 } from '@/components/ui/typography';

export function TabsDefault() {
  return (
    <Tabs defaultValue='account' className='w-full max-w-md'>
      <TabsList>
        <TabsTrigger value='account'>Account</TabsTrigger>
        <TabsTrigger value='password'>Password</TabsTrigger>
        <TabsTrigger value='settings'>Settings</TabsTrigger>
      </TabsList>
      <TabsContent value='account'>
        <p className='text-sm text-neutral-500'>
          Make changes to your account here. Click save when you are done.
        </p>
      </TabsContent>
      <TabsContent value='password'>
        <p className='text-sm text-neutral-500'>
          Change your password here. After saving, you will be logged out.
        </p>
      </TabsContent>
      <TabsContent value='settings'>
        <p className='text-sm text-neutral-500'>
          Configure your application settings and preferences here.
        </p>
      </TabsContent>
    </Tabs>
  );
}

export function TabsPills() {
  return (
    <Tabs variant='pills' defaultValue='overview' className='w-full max-w-md'>
      <TabsList>
        <TabsTrigger value='overview'>Overview</TabsTrigger>
        <TabsTrigger value='analytics'>Analytics</TabsTrigger>
        <TabsTrigger value='reports'>Reports</TabsTrigger>
      </TabsList>
      <TabsContent value='overview'>
        <Body2 className='text-neutral-500'>Pills variant — active tab fills with primary.</Body2>
      </TabsContent>
      <TabsContent value='analytics'>
        <Body2 className='text-neutral-500'>Track engagement and conversions.</Body2>
      </TabsContent>
      <TabsContent value='reports'>
        <Body2 className='text-neutral-500'>Generate scheduled reports.</Body2>
      </TabsContent>
    </Tabs>
  );
}

export function TabsUnderline() {
  return (
    <Tabs variant='underline' defaultValue='general' className='w-full max-w-md'>
      <TabsList>
        <TabsTrigger value='general'>General</TabsTrigger>
        <TabsTrigger value='security'>Security</TabsTrigger>
        <TabsTrigger value='billing'>Billing</TabsTrigger>
      </TabsList>
      <TabsContent value='general'>
        <Body2 className='text-neutral-500'>
          Underline variant — active tab gets a primary-colored 2px underline.
        </Body2>
      </TabsContent>
      <TabsContent value='security'>
        <Body2 className='text-neutral-500'>Manage password and 2FA.</Body2>
      </TabsContent>
      <TabsContent value='billing'>
        <Body2 className='text-neutral-500'>Update payment method and invoices.</Body2>
      </TabsContent>
    </Tabs>
  );
}

export function TabsDisabled() {
  return (
    <Tabs defaultValue='active' className='w-full max-w-md'>
      <TabsList>
        <TabsTrigger value='active'>Active</TabsTrigger>
        <TabsTrigger value='disabled' disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value='another'>Another</TabsTrigger>
      </TabsList>
      <TabsContent value='active'>
        <p className='text-sm text-neutral-500'>This tab is active and selectable.</p>
      </TabsContent>
      <TabsContent value='another'>
        <p className='text-sm text-neutral-500'>This is another active tab.</p>
      </TabsContent>
    </Tabs>
  );
}

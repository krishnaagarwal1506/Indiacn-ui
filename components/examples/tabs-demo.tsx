/* eslint-disable eslint-frontend-rules/enforce-typography-components */
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

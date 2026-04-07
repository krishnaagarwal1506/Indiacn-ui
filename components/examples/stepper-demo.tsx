import { Step, Stepper } from '@/components/ui/stepper';

export function StepperDefault() {
  return (
    <Stepper activeStep={1}>
      <Step step={0} title='Account' description='Create your account' />
      <Step step={1} title='Profile' description='Set up your profile' />
      <Step step={2} title='Complete' description='Review and finish' />
    </Stepper>
  );
}

export function StepperVertical() {
  return (
    <Stepper activeStep={2} orientation='vertical'>
      <Step step={0} title='Order Placed' description='Your order has been placed' />
      <Step step={1} title='Processing' description='Your order is being processed' />
      <Step step={2} title='Shipped' description='Your order has been shipped' />
      <Step step={3} title='Delivered' description='Waiting for delivery' />
    </Stepper>
  );
}

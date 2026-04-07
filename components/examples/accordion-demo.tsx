import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function AccordionDefault() {
  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern and includes proper ARIA attributes.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the UX4G design system and can be customized
          with Tailwind CSS classes.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It uses CSS animations for smooth open/close transitions powered by Radix UI.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function AccordionMultiple() {
  return (
    <Accordion type='multiple' className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
        <AccordionContent>
          Yes. Set <code>type=&quot;multiple&quot;</code> to allow multiple items to be open at the
          same time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>How does it work?</AccordionTrigger>
        <AccordionContent>
          Each item maintains its own open/closed state independently of other items.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Can I set default open items?</AccordionTrigger>
        <AccordionContent>
          Yes. Use the <code>defaultValue</code> prop to set initially open items.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

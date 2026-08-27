'use client';

import { useCallback, useState } from 'react';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Body3 } from '@/components/ui/typography';

export function CheckboxDefault() {
  return (
    <div className='flex items-center gap-3'>
      <Checkbox id='terms' defaultChecked />
      <Label htmlFor='terms'>Accept terms and conditions</Label>
    </div>
  );
}

export function CheckboxStates() {
  return (
    <div className='grid gap-4'>
      <div className='flex items-center gap-3'>
        <Checkbox id='state-checked' defaultChecked />
        <Label htmlFor='state-checked'>Checked</Label>
      </div>
      <div className='flex items-center gap-3'>
        <Checkbox id='state-indeterminate' checked='indeterminate' />
        <Label htmlFor='state-indeterminate'>Indeterminate</Label>
      </div>
      <div className='flex items-center gap-3'>
        <Checkbox id='state-unchecked' />
        <Label htmlFor='state-unchecked'>Unchecked</Label>
      </div>
      <div className='flex items-center gap-3'>
        <Checkbox id='state-disabled' disabled defaultChecked />
        <Label htmlFor='state-disabled'>Disabled</Label>
      </div>
    </div>
  );
}

const DOCUMENTS = ['Aadhaar', 'PAN card', 'Driving licence'];

interface IDocumentOptionProps {
  document: string;
  checked: boolean;
  onToggle: (document: string) => void;
}

/** Single checkbox row within the controlled group example. */
function DocumentOption({ document, checked, onToggle }: IDocumentOptionProps) {
  const handleCheckedChange = useCallback(() => onToggle(document), [document, onToggle]);

  return (
    <div className='flex items-center gap-3'>
      <Checkbox id={document} checked={checked} onCheckedChange={handleCheckedChange} />
      <Label htmlFor={document}>{document}</Label>
    </div>
  );
}

export function CheckboxGroup() {
  const [selected, setSelected] = useState<string[]>(['Aadhaar']);

  const handleToggle = useCallback((document: string) => {
    setSelected(current =>
      current.includes(document)
        ? current.filter(entry => entry !== document)
        : [...current, document],
    );
  }, []);

  return (
    <div className='grid gap-3'>
      {DOCUMENTS.map(document => (
        <DocumentOption
          key={document}
          document={document}
          checked={selected.includes(document)}
          onToggle={handleToggle}
        />
      ))}
      <Body3 className='text-neutral-500'>
        {selected.length} document{selected.length === 1 ? '' : 's'} selected
      </Body3>
    </div>
  );
}

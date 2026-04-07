'use client';

import { Button } from '@/components/ui/button';
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownShortcut,
  DropdownTrigger,
} from '@/components/ui/dropdown';

export function DropdownDefault() {
  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant='outlined'>Open Menu</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownLabel>My Account</DropdownLabel>
        <DropdownSeparator />
        <DropdownItem>Profile</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Billing</DropdownItem>
        <DropdownSeparator />
        <DropdownItem>Log out</DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}

export function DropdownWithShortcuts() {
  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant='outlined'>Actions</Button>
      </DropdownTrigger>
      <DropdownContent className='w-56'>
        <DropdownLabel>Actions</DropdownLabel>
        <DropdownSeparator />
        <DropdownItem>
          New Tab <DropdownShortcut>⌘T</DropdownShortcut>
        </DropdownItem>
        <DropdownItem>
          New Window <DropdownShortcut>⌘N</DropdownShortcut>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem>
          Cut <DropdownShortcut>⌘X</DropdownShortcut>
        </DropdownItem>
        <DropdownItem>
          Copy <DropdownShortcut>⌘C</DropdownShortcut>
        </DropdownItem>
        <DropdownItem>
          Paste <DropdownShortcut>⌘V</DropdownShortcut>
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}

export function DropdownDisabledItems() {
  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant='outlined'>Options</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem>Edit</DropdownItem>
        <DropdownItem>Duplicate</DropdownItem>
        <DropdownSeparator />
        <DropdownItem disabled>Archive</DropdownItem>
        <DropdownItem disabled>Move to trash</DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}

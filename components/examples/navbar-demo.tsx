'use client';

import { Search as SearchIcon } from 'lucide-react';
import { useCallback, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarLink,
  NavbarMain,
  NavbarNav,
  NavbarLanguage,
  NavbarSeparator,
  NavbarSkipLink,
  NavbarTextSize,
  NavbarThemeToggle,
  NavbarToggle,
  NavbarUtilityBar,
} from '@/components/ui/navbar';
import { Label2, Title2 } from '@/components/ui/typography';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'bn', label: 'বাংলা' },
  { code: 'ta', label: 'தமிழ்' },
];

const LINKS = [
  { label: 'About us', href: '#about' },
  { label: 'Citizen Corner', href: '#citizen', hasMenu: true },
  { label: 'Resources', href: '#resources', hasMenu: true },
];

export function NavbarDefault() {
  const [language, setLanguage] = useState('en');
  const handleLanguage = useCallback((code: string) => setLanguage(code), []);

  return (
    <div className='relative w-full overflow-hidden rounded-md border border-neutral-100'>
      <Navbar>
        <NavbarUtilityBar>
          <NavbarSkipLink href='#main-demo' />
          <NavbarSeparator />
          <NavbarTextSize />
          <NavbarSeparator />
          <NavbarThemeToggle />
          <NavbarSeparator />
          <NavbarLanguage languages={LANGUAGES} value={language} onSelect={handleLanguage} />
        </NavbarUtilityBar>

        <NavbarMain className='relative'>
          <NavbarBrand href='#home'>
            <Title2 className='text-primary font-semibold'>Sewa Setu</Title2>
          </NavbarBrand>

          <NavbarNav>
            {LINKS.map(link => (
              <NavbarLink
                key={link.label}
                href={link.href}
                hasMenu={link.hasMenu}
                active={link.label === 'About us'}
              >
                {link.label}
              </NavbarLink>
            ))}
          </NavbarNav>

          <NavbarActions>
            <Button variant='text' iconButton aria-label='Search'>
              <SearchIcon />
            </Button>
            <Button variant='outlined' size='sm' className='hidden sm:inline-flex'>
              Login
            </Button>
            <Button size='sm' className='hidden sm:inline-flex'>
              Signup
            </Button>
            <NavbarToggle />
          </NavbarActions>
        </NavbarMain>
      </Navbar>

      <div id='main-demo' className='p-6'>
        <Label2 className='text-neutral-600'>
          Page content starts here. Tab from the top to reach the skip link.
        </Label2>
      </div>
    </div>
  );
}

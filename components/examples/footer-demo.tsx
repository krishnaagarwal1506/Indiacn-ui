import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

import {
  Footer,
  FooterAttribution,
  FooterBody,
  FooterBottom,
  FooterBottomLink,
  FooterBrand,
  FooterColumn,
  FooterColumns,
  FooterLink,
  FooterSocial,
  FooterSocialLink,
} from '@/components/ui/footer';
import { Body2, Label2, Title2 } from '@/components/ui/typography';

const COLUMNS = [
  { title: 'Services', items: ['Ration card', 'Scholarships', 'Pension', 'Certificates'] },
  { title: 'Citizen corner', items: ['Track application', 'Grievance', 'Downloads', 'Fees'] },
  { title: 'About', items: ['Department', 'Right to Information', 'Tenders', 'Careers'] },
  { title: 'Help', items: ['Contact us', 'Seva Kendras', 'Accessibility', 'Sitemap'] },
];

const SOCIALS = [
  { label: 'Twitter', Icon: Twitter },
  { label: 'Facebook', Icon: Facebook },
  { label: 'Instagram', Icon: Instagram },
  { label: 'LinkedIn', Icon: Linkedin },
  { label: 'YouTube', Icon: Youtube },
];

export function FooterDefault() {
  return (
    <Footer>
      <FooterBody>
        <FooterBrand tagline='A comprehensive citizen services platform for the state.'>
          <Title2 className='text-primary font-semibold'>Sewa Setu</Title2>
          <FooterSocial>
            {SOCIALS.map(({ label, Icon }) => (
              <FooterSocialLink key={label} href='#social' label={label}>
                <Icon aria-hidden />
              </FooterSocialLink>
            ))}
          </FooterSocial>
        </FooterBrand>

        <FooterColumns>
          {COLUMNS.map(column => (
            <FooterColumn key={column.title} title={column.title}>
              {column.items.map(item => (
                <FooterLink key={item} href='#link'>
                  {item}
                </FooterLink>
              ))}
            </FooterColumn>
          ))}
        </FooterColumns>

        <FooterAttribution>
          <Label2 className='text-neutral font-semibold'>National e-Governance Division</Label2>
          <Body2 className='text-neutral-600'>
            Ministry of Electronics &amp; IT, Government of India
          </Body2>
          <Body2 className='text-neutral-500'>Powered by Digital India</Body2>
        </FooterAttribution>
      </FooterBody>

      <FooterBottom
        actions={
          <>
            <FooterBottomLink href='#terms'>Terms &amp; Conditions</FooterBottomLink>
            <FooterBottomLink href='#privacy'>Privacy Policy</FooterBottomLink>
          </>
        }
      >
        © 2026 Sewa Setu. All rights reserved.
      </FooterBottom>
    </Footer>
  );
}

import { CommunityCtaSection } from '@/components/home/community-cta-section';
import { ComponentsSection, ComponentTicker } from '@/components/home/components-section';
import { FooterSection } from '@/components/home/footer-section';
import { HeroSection } from '@/components/home/hero-section';
import { InstallSection } from '@/components/home/install-section';
import { PillarsSection } from '@/components/home/pillars-section';
import { SiteHeader } from '@/components/home/site-header';
import { ThemeBand } from '@/components/home/theme-band';
import { UseCasesSection } from '@/components/home/use-cases-section';

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <HeroSection />
        <ComponentTicker />
        <ComponentsSection />
        <InstallSection />
        <PillarsSection />
        <ThemeBand />
        <UseCasesSection />
        <CommunityCtaSection />
      </main>

      <FooterSection />
    </>
  );
}

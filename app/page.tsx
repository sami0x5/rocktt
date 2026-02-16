import { HeroSection } from '@/components/sections/hero';
import { CategoriesSection } from '@/components/sections/categories';
import { WholesaleValueSection } from '@/components/sections/wholesale-value';
import { FeaturedInventorySection } from '@/components/sections/featured-inventory';
import { FinancingSection } from '@/components/sections/financing';
import { BlogSection } from '@/components/sections/blog';
import { SellCtaSection } from '@/components/sections/sell-cta';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <WholesaleValueSection />
      <FeaturedInventorySection />
      <FinancingSection />
      <BlogSection />
      <SellCtaSection />
      <ContactSection />
    </>
  );
}

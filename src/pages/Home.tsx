import { Hero } from "../components/sections/Hero";
import { Features } from "../components/sections/Features";
import { TenantPortalHighlight } from "../components/sections/TenantPortalHighlight";
import { Services } from "../components/sections/Services";
import { Showcase } from "../components/sections/Showcase";
import { Testimonials } from "../components/sections/Testimonials";
import { Pricing } from "../components/sections/Pricing";
import { FAQ } from "../components/sections/FAQ";
import { SEOContent } from "../components/sections/SEOContent";
import { CTA } from "../components/sections/CTA";

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <TenantPortalHighlight />
      <Services />
      <Showcase />
      <Testimonials />
      <Pricing />
      <SEOContent />
      <FAQ />
      <CTA />
    </>
  );
}

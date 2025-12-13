import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Features } from "./components/sections/Features";
import { TenantPortalHighlight } from "./components/sections/TenantPortalHighlight";
import { Services } from "./components/sections/Services";
import { Showcase } from "./components/sections/Showcase";
import { Testimonials } from "./components/sections/Testimonials";
import { Pricing } from "./components/sections/Pricing";
import { FAQ } from "./components/sections/FAQ";
import { CTA } from "./components/sections/CTA";

function App() {
  return (
    <div className="min-h-screen bg-white text-body font-sans antialiased selection:bg-primary/20 selection:text-primary">
      <Header />
      <main>
        <Hero />
        <Features />
        <TenantPortalHighlight />
        <Services />
        <Showcase />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

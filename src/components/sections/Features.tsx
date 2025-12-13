import { BedDouble, ReceiptIndianRupee, Utensils, Users, ShieldCheck, Wrench } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';

const features = [
  {
    icon: BedDouble,
    title: "Bed & Room Management",
    copy: "Real-time tracking of beds availability. Prevent booking conflicts and manage check-ins seamlessly."
  },
  {
    icon: ReceiptIndianRupee,
    title: "Smart Billing & GST",
    copy: "Auto-generate rent invoices, track payments, and stay GST compliant without the manual headaches."
  },
  {
    icon: Utensils,
    title: "Food Management",
    copy: "Track daily meal counts and wastage. Plan your inventory better and reduce food costs instantly."
  },
  {
    icon: Users,
    title: "Tenant Portal",
    copy: "Empower tenants to view bills, pay rents, and raise tickets via their own self-service login."
  },
  {
    icon: ShieldCheck,
    title: "Digital KYC",
    copy: "Secure Aadhaar-based verification for every tenant. Keep your property safe and compliant."
  },
  {
    icon: Wrench,
    title: "Issue Tracking",
    copy: "Log infrastructure issues and track them to closure. Keep your tenants happy with prompt service."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Features"
          title="Everything you need to run a modern PG"
          copy="We've packed PGHandle with tools that handle the boring stuff, so you can focus on growing your business."
          className="mb-16"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <Card key={i} delay={i * 0.1} className="hover:border-primary/30 group">
              <div className="h-12 w-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <f.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{f.title}</h3>
              <p className="text-body leading-relaxed">{f.copy}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

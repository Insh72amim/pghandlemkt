import { BedDouble, ReceiptIndianRupee, UserCog, Users, ShieldCheck, Wrench } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';

const features = [
  {
    icon: BedDouble,
    title: "Instant Room & Bed Tracking",
    copy: "Never double-book again. See exactly which beds are free, occupied, or under maintenance in real-time."
  },
  {
    icon: ReceiptIndianRupee,
    title: "Auto-Pilot Billing",
    copy: "Generate rent invoices and send WhatsApp reminders automatically. Collect payments faster with zero effort."
  },
  {
    icon: UserCog,
    title: "Role-Based Staff Access",
    copy: "Delegate securely. Add staff members, assign specific roles, and control access permissions to specific PGs."
  },
  {
    icon: Users,
    title: "Tenant Self-Service App",
    copy: "Give tenants their own app to pay rent, view receipts, and request support. Reduce your daily phone calls."
  },
  {
    icon: ShieldCheck,
    title: "1-Click Digital KYC",
    copy: "Verify tenants instantly with secure Aadhaar integration. Enhance security without handling piles of paper."
  },
  {
    icon: Wrench,
    title: "Complaint Resolution Tracker",
    copy: "Don't let broken taps break trust. Log, assign, and track maintenance issues until they're fixed."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Features"
          title="Everything you need in a PG App"
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

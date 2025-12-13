import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';

const services = [
  {
    title: "Bookings",
    body: "Take bed bookings for future check-ins and avoid check-in conflicts. Manage waitlists and advance booking requests with ease."
  },
  {
    title: "Issue Management",
    body: "Track and resolve tenant issues promptly. Manage maintenance requests, complaints, and facility problems to keep everyone happy."
  },
  {
    title: "Aadhaar KYC",
    body: "Perform Aadhaar-based KYC verification to validate tenant identity. Maintain secure digital records of all tenant documentation."
  },
  {
    title: "Reports & Analytics",
    body: "Get detailed insights into your revenue, occupancy, and expenses. Make data-driven decisions to grow your profits."
  },
  {
    title: "Multi-User Access",
    body: "Give staff specific access roles (Manager, Caretaker, Security). Control what they can see and do."
  },
  {
    title: "Data Security",
    body: "Bank-grade encryption for all your data. Automatic daily backups ensure you never lose a single record."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Core Services"
          title="Built for the modern PG owner"
          copy="A complete suite of tools designed to handle every aspect of your PG operations."
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Card key={i} delay={i * 0.05} className="bg-gray-50 border-transparent hover:bg-white hover:border-stroke">
               <h3 className="text-sm font-bold uppercase tracking-wider text-secondary mb-3">{s.title}</h3>
               <p className="text-body leading-relaxed">{s.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

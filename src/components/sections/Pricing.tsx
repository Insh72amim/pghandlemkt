import { Check } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

const plans = [
  {
    name: "Starter",
    price: "3,600",
    period: "/ year",
    desc: "Perfect for single PG facilities.",
    features: ["Up to 50 beds", "Automated Billing", "Basic Reports", "Email Support"],
    popular: false
  },
  {
    name: "Professional",
    price: "8,999",
    period: "/ year",
    desc: "For growing PG chains.",
    features: ["Up to 150 beds", "Food Management", "Tenant Portal", "WhatsApp Reminders", "Priority Support"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large scale operations.",
    features: ["Unlimited beds", "Multi-property Dashboard", "Custom Integrations", "Dedicated Manager", "24/7 Support"],
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          copy="No hidden fees. Pay annually and save 2 months."
          className="mb-16"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <Card 
              key={i} 
              className={`relative flex flex-col ${plan.popular ? 'border-primary ring-2 ring-primary ring-offset-4' : ''}`}
              delay={i * 0.1}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-black">{plan.name}</h3>
                <p className="text-sm text-body mt-2">{plan.desc}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-black">₹{plan.price}</span>
                <span className="text-body text-sm font-medium">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((f, idx) => (
                   <li key={idx} className="flex items-start gap-3 text-sm font-medium text-body">
                     <Check className="h-5 w-5 text-primary shrink-0" />
                     {f}
                   </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? 'primary' : 'outline'} 
                className="w-full"
                href="https://app.pghandle.in/signup"
              >
                Choose {plan.name}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Check } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

const plans = [
  {
    name: "Free Forever",
    price: "0",
    period: "",
    desc: "Perfect for getting started.",
    features: [
      "Manage 1 PG",
      "Up to 10 Beds",
      "Guest Portal Access",
      "Automated Billing",
      "Email Notifications",
      "Basic Reports"
    ],
    popular: false
  },
  {
    name: "Basic",
    price: "199",
    period: "/ month per PG",
    desc: "For growing PGs needing staff.",
    features: [
      "Up to 60 Beds",
      "2 Staff Accounts",
      "Role-Based Access Control",
      "Everything in Free",
      "Advanced Reports",
      "Document Management"
    ],
    popular: true
  },
  {
    name: "Pro",
    price: "399",
    period: "/ month per PG",
    desc: "For established businesses.",
    features: [
      "Up to 200 Beds",
      "10 Staff Accounts",
      "Priority Support",
      "Everything in Basic",
      "Data Export",
      "Dedicated Manager"
    ],
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
          copy="Start for free. Upgrade as you grow. No hidden fees."
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
                href="https://app.pghandle.in/auth/signup"
              >
                {plan.price === "0" ? "Start for Free" : `Choose ${plan.name}`}
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto p-4 bg-blue-50 rounded-lg border border-blue-100">
             <p className="text-sm font-medium text-blue-800">
                📢 <strong>Note on Notifications:</strong> Email notifications are completely FREE on all plans. 
                WhatsApp & SMS notifications are available as pay-as-you-go add-ons via Credit Packs (approx ₹0.49 - ₹0.99 per message).
             </p>
        </div>

      </div>
    </section>
  );
}

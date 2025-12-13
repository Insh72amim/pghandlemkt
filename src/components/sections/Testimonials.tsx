import { Quote } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

const testimonials = [
  {
    quote: "I was managing everything in notebooks and Excel. PGHandle saved me so much time! Now billing happens automatically, and I get instant notifications when someone pays.",
    author: "Rajesh Kumar",
    role: "Owner, Green Park PG",
    location: "Bengaluru"
  },
  {
    quote: "Managing 4 PG properties was becoming overwhelming. PGHandle brought everything into one place. Highly recommend for any serious PG owner.",
    author: "Meena Sharma",
    role: "Founder, SafeNest Chains",
    location: "Pune"
  },
  {
    quote: "The support team is amazing. They helped me upload all my data and get started in just one day. The app is so easy to use even my caretaker uses it.",
    author: "Suresh Reddy",
    role: "Owner, Reddy's Luxury PG",
    location: "Hyderabad"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[150px] opacity-20" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <SectionTitle
          eyebrow="Testimonials"
          title="Loved by 150+ PG Owners"
          className="mb-16 text-white"
        />
         <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto -mt-10">Don't just take our word for it.</p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative">
              <Quote className="absolute top-6 left-6 text-primary/40 h-10 w-10 rotate-180" />
              <p className="text-lg leading-relaxed text-gray-200 mb-6 relative z-10 pt-8">"{t.quote}"</p>
              <div>
                <p className="font-bold text-white">{t.author}</p>
                <p className="text-sm text-gray-400">{t.role}</p>
                <p className="text-xs text-primary uppercase tracking-wider mt-1">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

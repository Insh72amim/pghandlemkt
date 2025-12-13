import { Plus } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

const faqs = [
  {
    question: "How quickly can I start using PGHandle?",
    answer: "Most PG owners go live within 2-3 days. We help you import your existing tenant data, room details, and rent structure."
  },
  {
    question: "Do I need technical knowledge to use PGHandle?",
    answer: "Not at all! PGHandle is designed for PG owners, not tech experts. If you can use WhatsApp, you can use PGHandle."
  },
  {
    question: "Can tenants access their bills online?",
    answer: "Yes. Each tenant gets a personal login (Tenant Portal) to view bills, payment history, raise maintenance issues, and make payments."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. All your data is encrypted and stored securely in the cloud with automatic daily backups."
  },
  {
    question: "What if I manage multiple PG properties?",
    answer: "PGHandle is built for multi-property management. You can manage all your PG facilities from a single dashboard."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle
          title="Common Questions"
          align="center"
          className="mb-12"
        />

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group rounded-2xl bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer open:bg-white open:shadow-lg open:ring-1 open:ring-black/5 transition-all">
              <summary className="flex items-center justify-between font-semibold text-lg text-black">
                {faq.question}
                <span className="ml-4 shrink-0 transition duration-300 group-open:-rotate-45">
                  <Plus className="h-5 w-5" />
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-body text-black/80 group-open:animate-fadeIn">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

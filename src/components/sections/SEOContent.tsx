import { SectionTitle } from '../ui/SectionTitle';

export function SEOContent() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle
          title="Why Indian PG Owners choose PGHandle"
          align="center"
          className="mb-12"
        />
        
        <div className="prose prose-lg mx-auto text-body">
          <p>
            Managing a Paying Guest (PG) facility in India comes with unique challenges. From tracking rent payments via UPI to managing tenant verification with Aadhaar, standard property management tools often fall short. That's why we built <strong>PGHandle – the best PG management software for owners in India</strong>.
          </p>

          <h3 className="text-xl font-bold text-black mt-8 mb-4">Complete PG Management Tools</h3>
          <p>
            Whether you run a student hostel in Kota, a luxury co-living space in Bengaluru, or a ladies' PG in Pune, our software adapts to your needs. As the leading <strong>PG software in India</strong>, we offer:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Automated Rent Collection:</strong> Send automatic WhatsApp reminders with payment links.</li>
            <li><strong>Digital KYC:</strong> Secure tenant verification that complies with local regulations.</li>
            <li><strong>Expense Tracking:</strong> Monitor utility bills, maintenance costs, and staff salaries in one dashboard.</li>
          </ul>

          <h3 className="text-xl font-bold text-black mt-8 mb-4">Empowering Owners with Data</h3>
          <p>
            Stop guessing your profits. Our <strong>PG management tools</strong> provide real-time insights into occupancy rates and revenue. Join 150+ smart owners who have modernized their business with the most reliable <strong>PG management software in India</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

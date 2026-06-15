import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, X } from "lucide-react";
import { Button } from "../../components/ui/Button";

export function CompareDetail() {
  const { competitor } = useParams();

  // Simple capitalization for the dynamic competitor name
  const compName = competitor === 'excel' 
    ? 'Excel Spreadsheets' 
    : competitor?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Competitor';

  return (
    <div className="pt-32 pb-24 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="mx-auto max-w-5xl px-6">
        <Link to="/compare" className="inline-flex items-center text-sm font-bold text-primary mb-8 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Comparisons
        </Link>
        
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl font-bold text-black sm:text-5xl md:text-6xl mb-6">
            PGHandle vs <span className="text-secondary">{compName}</span>
          </h1>
          <p className="text-xl text-body max-w-2xl mx-auto">
            Why independent PG owners are switching to PGHandle for a faster, lighter, and more profitable management experience.
          </p>
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-white rounded-3xl border border-stroke shadow-xl overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-stroke">
                  <th className="p-6 text-sm font-bold uppercase tracking-wider text-black w-1/3">Feature</th>
                  <th className="p-6 text-sm font-bold uppercase tracking-wider text-primary w-1/3 border-l border-stroke bg-primary/5">
                    PGHandle
                  </th>
                  <th className="p-6 text-sm font-bold uppercase tracking-wider text-gray-500 w-1/3 border-l border-stroke">
                    {compName}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stroke">
                {[
                  { feature: "Automated Rent Reminders (WhatsApp)", pg: true, comp: false },
                  { feature: "Tenant Self-Service App", pg: true, comp: competitor !== 'excel' },
                  { feature: "Aadhaar Digital KYC", pg: true, comp: competitor !== 'excel' },
                  { feature: "Setup Time", pg: "1 Day", comp: "Weeks/Months" },
                  { feature: "Pricing Model", pg: "Transparent SaaS", comp: "Revenue Share / Hidden Fees" },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-6 text-black font-medium">{row.feature}</td>
                    <td className="p-6 border-l border-stroke bg-primary/5">
                      {typeof row.pg === 'boolean' 
                        ? (row.pg ? <Check className="text-success h-6 w-6" /> : <X className="text-danger h-6 w-6" />)
                        : <span className="font-bold text-primary">{row.pg}</span>
                      }
                    </td>
                    <td className="p-6 border-l border-stroke">
                      {typeof row.comp === 'boolean' 
                        ? (row.comp ? <Check className="text-success h-6 w-6" /> : <X className="text-gray-400 h-6 w-6" />)
                        : <span className="text-gray-500">{row.comp}</span>
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-black rounded-3xl p-10 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-30"></div>
          <h2 className="text-3xl font-bold mb-4 relative z-10">Ready to make the switch?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto relative z-10">
            Join the 150+ Indian PG owners who have optimized their operations with PGHandle. It takes less than 5 minutes to set up.
          </p>
          <div className="relative z-10">
            <Button href="https://app.pghandle.in/auth/signup" size="lg">Start Free Trial</Button>
          </div>
        </div>

      </div>
    </div>
  );
}

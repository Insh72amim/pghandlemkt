import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { CheckCircle2, MessageCircle } from "lucide-react";

export function RentCollection() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-6">
        <header className="text-center mb-16">
          <h1 className="font-display text-4xl font-bold text-black sm:text-5xl mb-6">
            How to Collect PG Rent On Time, Every Time
          </h1>
          <p className="text-xl text-body max-w-2xl mx-auto">
            Stop chasing tenants for payments. Automate your billing and rent collection with PGHandle's WhatsApp integration.
          </p>
        </header>

        <div className="prose prose-lg prose-primary max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            The most common question PG owners ask is, <strong>"How do I collect PG rent on time without ruining my relationship with tenants?"</strong> Manual rent collection leads to awkward conversations, delayed cash flow, and disputes over partial payments.
          </p>

          <div className="bg-primary/5 rounded-2xl p-8 mb-10 border border-primary/20">
            <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
              <MessageCircle className="mr-3 text-primary" /> The WhatsApp Automation Solution
            </h3>
            <p className="text-body mb-6">
              With PGHandle, you never have to ask for rent again. The system automatically:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start"><CheckCircle2 className="text-success mr-2 shrink-0 mt-1" /> Generates personalized invoices on the 1st of every month.</li>
              <li className="flex items-start"><CheckCircle2 className="text-success mr-2 shrink-0 mt-1" /> Sends a polite WhatsApp reminder directly to the tenant's phone.</li>
              <li className="flex items-start"><CheckCircle2 className="text-success mr-2 shrink-0 mt-1" /> Automatically adds late fees if configured.</li>
            </ul>
            <Button href="https://app.pghandle.in/auth/signup">Try Automated Billing Free</Button>
          </div>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Why Manual Rent Tracking Fails</h2>
          <p className="text-body">
            Using Excel or a physical ledger to track rent is a recipe for revenue leakage. When a tenant pays ₹5,000 via UPI and ₹3,000 in cash two days later, updating spreadsheets becomes a nightmare. PGHandle's Tenant Portal allows tenants to view their exact dues and log their payments, which you simply approve with one click.
          </p>
          
          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Start Collecting Rent Professionally</h2>
          <p className="text-body mb-8">
            Treat your PG like a proper business. Professional invoices and automated reminders increase on-time payments by 80%.
          </p>
          
          <div className="text-center mt-12">
            <Link to="/" className="text-primary font-bold hover:underline">
              Learn more about PGHandle's full feature set &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

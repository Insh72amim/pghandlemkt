import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "../../components/ui/Button";

export function BlogPost() {
  useParams();

  // In a real app, you would fetch the post content based on the `id`.
  // For the marketing site, we use a static placeholder article.

  return (
    <article className="pt-32 pb-24 bg-white min-h-screen">
      <div className="mx-auto max-w-3xl px-6">
        <Link to="/blog" className="inline-flex items-center text-sm font-bold text-primary mb-8 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>
        
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-wider text-primary mb-4">
            <span>PG Management</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span className="text-gray-500">8 min read</span>
          </div>
          <h1 className="font-display text-4xl font-bold text-black sm:text-5xl mb-6 leading-tight">
            How to Manage a PG in India: The Ultimate Guide
          </h1>
          <div className="flex items-center gap-4 border-t border-b border-stroke py-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              PG
            </div>
            <div>
              <p className="text-sm font-bold text-black">PGHandle Editorial Team</p>
              <p className="text-xs text-gray-500">Oct 12, 2026</p>
            </div>
          </div>
        </header>

        <div className="prose prose-lg prose-primary max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Running a Paying Guest (PG) facility in India is a highly profitable venture, but it comes with immense operational challenges. From tenant disputes to late rent payments, the day-to-day management can overwhelm even experienced owners.
          </p>

          <img 
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80" 
            alt="Hostel interior" 
            className="w-full h-auto rounded-2xl mb-10 shadow-lg"
          />

          <h2 className="text-2xl font-bold text-black mt-10 mb-4">1. The Problem with Manual Management</h2>
          <p className="text-body mb-6">
            Traditionally, PG owners have relied on Excel sheets, physical registers, and endless WhatsApp messages to manage their properties. This leads to:
          </p>
          <ul className="list-disc pl-6 text-body space-y-2 mb-8">
            <li>Lost rent payments and revenue leakage.</li>
            <li>Double-booked beds due to poor tracking.</li>
            <li>Compliance risks due to missing tenant KYC documents.</li>
          </ul>

          <h2 className="text-2xl font-bold text-black mt-10 mb-4">2. Automating Rent Collection</h2>
          <p className="text-body mb-6">
            The biggest bottleneck for any PG owner is cash flow. Implementing an automated billing system ensures invoices are generated on exactly the 1st of every month. By sending automated SMS and WhatsApp reminders, you eliminate the awkwardness of calling tenants for rent.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 my-10">
            <h3 className="text-xl font-bold text-black mb-3">Scale your PG Business Today</h3>
            <p className="text-body mb-6">
              PGHandle automates your entire PG operation—from digital KYC to automated billing. Stop managing spreadsheets and start growing your business.
            </p>
            <Button href="https://app.pghandle.in/auth/signup">Start Your Free 14-Day Trial</Button>
          </div>

          <h2 className="text-2xl font-bold text-black mt-10 mb-4">3. Ensuring Tenant Safety with Digital KYC</h2>
          <p className="text-body mb-6">
            Safety is paramount. Collecting physical ID copies is not just cumbersome, it's a security risk. Modern PG management software allows tenants to complete their KYC digitally via Aadhaar integration before they even step foot in the property.
          </p>

          <h2 className="text-2xl font-bold text-black mt-10 mb-4">Conclusion</h2>
          <p className="text-body mb-6">
            The PG market in India is booming, driven by student migration and young professionals. However, the owners who will truly succeed are those who treat their PG like a scalable business rather than a passive income stream. Investing in the right technology is step one.
          </p>
        </div>
      </div>
    </article>
  );
}

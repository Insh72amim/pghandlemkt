import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { TableProperties, TrendingUp } from "lucide-react";

export function ExcelAlternative() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-6">
        <header className="text-center mb-16">
          <h1 className="font-display text-4xl font-bold text-black sm:text-5xl mb-6">
            Excel Sheet Format for PG Management
          </h1>
          <p className="text-xl text-body max-w-2xl mx-auto">
            Looking for a free PG management excel template? We'll give you one—but here is why you shouldn't use it.
          </p>
        </header>

        <div className="prose prose-lg prose-primary max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Every PG owner starts by searching for an <strong>"Excel sheet format for PG rent collection."</strong> It seems like the easiest, cheapest way to manage tenant data, room availability, and monthly billing. 
          </p>

          <div className="bg-gray-50 border border-stroke rounded-2xl p-8 mb-10 text-center">
            <TableProperties className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-black mb-2">Free PG Excel Template</h3>
            <p className="text-body mb-6 text-sm max-w-md mx-auto">
              You can build a simple tracker with columns for Tenant Name, Room No, Rent Amount, and Payment Status.
            </p>
            <a href="#" className="text-primary font-bold underline cursor-not-allowed opacity-50" title="Actually, don't download this. Read below.">
              Download Template (.xlsx)
            </a>
          </div>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">The Hidden Cost of "Free" Spreadsheets</h2>
          <p className="text-body mb-6">
            While Excel is free, the mistakes you make in it are incredibly expensive. Here is what happens when you run a PG on spreadsheets:
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex flex-col">
              <strong className="text-black">1. Revenue Leakage</strong>
              <span className="text-body">You forget to log a partial payment. A tenant claims they paid, but you can't find the record. You lose ₹5,000 instantly.</span>
            </li>
            <li className="flex flex-col">
              <strong className="text-black">2. Zero Automation</strong>
              <span className="text-body">You have to manually text 50 tenants every month to remind them about rent.</span>
            </li>
            <li className="flex flex-col">
              <strong className="text-black">3. No Mobile Access for Tenants</strong>
              <span className="text-body">Tenants have to call you to know their outstanding balance or raise a maintenance complaint.</span>
            </li>
          </ul>

          <div className="bg-primary/5 rounded-2xl p-8 my-10 border border-primary/20">
            <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
              <TrendingUp className="mr-3 text-primary" /> Upgrade to PGHandle
            </h3>
            <p className="text-body mb-6">
              PGHandle replaces your messy Excel sheets with a beautiful, automated dashboard. It tracks revenue, generates invoices, and provides a dedicated app for your tenants.
            </p>
            <Button href="https://app.pghandle.in/auth/signup">Ditch Excel - Start Free Trial</Button>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/compare/excel" className="text-primary font-bold hover:underline">
              See a detailed comparison of PGHandle vs Excel &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

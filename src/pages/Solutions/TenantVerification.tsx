import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { ShieldCheck, FileCheck } from "lucide-react";

export function TenantVerification() {
  return (
    <div className="pt-32 pb-24 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="mx-auto max-w-4xl px-6">
        <header className="text-center mb-16">
          <h1 className="font-display text-4xl font-bold text-black sm:text-5xl mb-6">
            Online Tenant Police Verification & KYC
          </h1>
          <p className="text-xl text-body max-w-2xl mx-auto">
            Secure your PG instantly. Replace physical document collection with PGHandle's 1-click Aadhaar KYC.
          </p>
        </header>

        <div className="prose prose-lg prose-primary max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            If you are searching for <strong>"online police verification for PG tenants"</strong>, you already know the risks of undocumented guests. Collecting physical Aadhaar cards is slow, prone to forgery, and a hassle to store securely.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-white p-8 rounded-2xl border border-stroke shadow-sm">
              <ShieldCheck className="h-10 w-10 text-danger mb-4" />
              <h3 className="text-xl font-bold text-black mb-3">The Old Way</h3>
              <p className="text-body text-sm">
                Asking tenants for photocopies. Waiting days to receive them. Piling up physical files in a cabinet that can be lost or damaged. Zero actual identity verification.
              </p>
            </div>
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20">
              <FileCheck className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-black mb-3">The PGHandle Way</h3>
              <p className="text-body text-sm">
                Tenants upload their details via the PGHandle Tenant App. Aadhaar KYC is verified digitally in seconds. All data is securely encrypted in the cloud.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-black mt-12 mb-6">Why Digital KYC is Mandatory</h2>
          <p className="text-body mb-6">
            Local authorities are cracking down on unverified hostel and PG residents. Having a structured, digital KYC database ensures you are always compliant with local regulations. PGHandle formats tenant data perfectly so you can easily export it if requested by authorities for police verification.
          </p>

          <div className="bg-black text-white rounded-2xl p-8 my-10 text-center">
            <h3 className="text-2xl font-bold mb-4">Secure your property today</h3>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Don't wait for an incident to happen. Implement military-grade digital KYC for your PG in under 5 minutes.
            </p>
            <Button href="https://app.pghandle.in/auth/signup" size="lg">Start Free Trial</Button>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/" className="text-primary font-bold hover:underline">
              Explore how PGHandle secures your business &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

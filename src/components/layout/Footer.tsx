import { Link } from 'react-router-dom';
import logoIcon from "../../assets/logo-icon.svg";

export function Footer() {
  const productLinks = [
    { label: "Features", href: "/#features" },
    { label: "Services", href: "/#services" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Compare", href: "/compare" },
    { label: "FAQs", href: "/#faq" },
  ];

  const resourceLinks = [
    { label: "Tenant Portal", href: "https://guest.pghandle.in/signin" },
    { label: "Owner Dashboard", href: "https://app.pghandle.in/auth/signin" },
    { label: "Start Free Trial", href: "https://app.pghandle.in/auth/signup" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
  ];

  return (
    <footer className="border-t border-stroke bg-white pt-16 pb-8 text-sm text-body">
      <div className="mx-auto max-w-6xl px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand Column */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-4" aria-label="PGHandle Homepage">
              <img src={logoIcon} alt="PGHandle" width="32" height="32" loading="lazy" className="h-8 w-8" />
              <span className="text-lg font-bold text-black">PGHandle</span>
            </a>
            <p className="text-body leading-relaxed">
              India's most loved PG management software. Automate billing, manage tenants, and grow your PG business.
            </p>
            {/* Social Links */}
            <div className="mt-5 flex items-center gap-4">
              <a href="https://twitter.com/pghandle" target="_blank" rel="noopener noreferrer" aria-label="Follow PGHandle on Twitter" className="text-body hover:text-primary transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/pghandle" target="_blank" rel="noopener noreferrer" aria-label="Follow PGHandle on LinkedIn" className="text-body hover:text-primary transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.facebook.com/pghandle" target="_blank" rel="noopener noreferrer" aria-label="Follow PGHandle on Facebook" className="text-body hover:text-primary transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-bold text-black uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-body hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-bold text-black uppercase tracking-wider mb-4">Access</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-body hover:text-primary transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="text-sm font-bold text-black uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-body hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-bold text-black uppercase tracking-wider mb-3">Contact</h4>
              <a href="mailto:support@pghandle.in" className="text-body hover:text-primary transition-colors">support@pghandle.in</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stroke pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-semibold text-black">
            © {new Date().getFullYear()} PGHandle. India's most loved PG management software.
          </p>
          <p>Made with <span role="img" aria-label="love">❤️</span> in India for Indian PG owners.</p>
        </div>
      </div>
    </footer>
  );
}

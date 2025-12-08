import type { ReactNode } from "react";

import LogoFull from "./assets/logo.svg";
import LogoMark from "./assets/logo-icon.svg";
import ArrowIcon from "./assets/icon-arrow-down.svg";

const APP_URL = "https://app.pghandle.in";
const DEMO_URL = "https://cal.com/pghandle/demo";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "Success Stories", href: "#showcase" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faq" },
];

const metrics = [
  { label: "PG Facilities Managed", value: "150+" },
  { label: "Hours Saved Weekly", value: "20h" },
  { label: "Owner Satisfaction", value: "4.8/5" },
  { label: "Average Occupancy", value: "94%" },
];

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    caption: "Modern PG Management — Indiranagar",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
    caption: "Smart Facility Operations — HSR Layout",
  },
];

const features = [
  {
    title: "Complete Bed & Room Management",
    copy: "Manage bed bookings, room allocation, check-ins and check-outs seamlessly. Prevent booking conflicts with real-time availability tracking across all your PG properties.",
  },
  {
    title: "Automated Billing & GST Compliance",
    copy: "Generate rent invoices automatically, collect GST, track payments, and send automated reminders via SMS and WhatsApp. Stay compliant with zero manual effort.",
  },
  {
    title: "Food & Expense Management",
    copy: "Track daily meal counts, manage food registers, and calculate per-plate costs. Control expenses and reduce wastage with smart inventory tracking.",
  },
  {
    title: "Tenant & Owner Portal",
    copy: "Give tenants self-service access to bills, maintenance requests, and notices. Keep property owners updated with automated monthly statements and profit/loss reports.",
  },
];

const services = [
  {
    title: "Bookings",
    body: "Take bed bookings for future check-ins and avoid check-in conflicts. Manage waitlists and advance booking requests with ease.",
  },
  {
    title: "Issue Management",
    body: "Track and resolve tenant issues promptly. Manage maintenance requests, complaints, and facility problems to keep everyone happy.",
  },
  {
    title: "Aadhaar KYC",
    body: "Perform Aadhaar-based KYC verification to validate tenant identity. Maintain secure digital records of all tenant documentation.",
  },
];

type PricingPlan = {
  name: string;
  price: string;
  caption: string;
  badge?: string;
  features: string[];
  cta: string;
};

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "₹3,600/year",
    caption: "1 PG Facility • Up to 50 beds • excl. GST",
    features: [
      "Complete bed & room management",
      "Automated billing & rent collection",
      "SMS & WhatsApp notifications",
      "Tenant & owner portals",
      "Email & chat support",
    ],
    cta: "Start free trial",
  },
  {
    name: "Professional",
    price: "₹8,999/year",
    caption: "Up to 3 PG facilities • 150 beds • excl. GST",
    badge: "Most popular",
    features: [
      "Everything in Starter",
      "Food register & expense tracking",
      "Issue management system",
      "GST invoicing & compliance",
      "Aadhaar KYC verification",
      "Priority support",
    ],
    cta: "Book live demo",
  },
  {
    name: "Enterprise",
    price: "Custom pricing",
    caption: "Unlimited facilities • Custom solutions",
    features: [
      "Everything in Professional",
      "Multi-location management",
      "Custom integrations & APIs",
      "Dedicated account manager",
      "Advanced analytics & reports",
      "24/7 priority support",
    ],
    cta: "Talk to sales",
  },
];

const pgShowcase = [
  {
    title: "Green Valley PG — Bengaluru",
    location: "3 facilities • 120 beds near Koramangala",
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80",
    copy: "Moved from Excel sheets to PGHandle. Now managing bookings, food counts, and billing for 3 properties from a single dashboard. Reduced manual work by 15 hours weekly.",
    metric: "98% occupancy rate",
    tag: "Multi-property",
    cta: "Read success story",
  },
  {
    title: "Student Hub PG — Hyderabad",
    location: "2 buildings • 85 beds near HITEC City",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    copy: "Automated rent reminders via WhatsApp reduced payment delays by 80%. GST compliance and invoicing now takes minutes instead of hours each month.",
    metric: "₹4.2L monthly revenue",
    tag: "Student Housing",
    cta: "See how they did it",
  },
  {
    title: "SafeStay Women's PG — Pune",
    location: "Premium women's PG at Koregaon Park",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
    copy: "Digital KYC verification and issue tracking system improved safety and tenant satisfaction. Parents receive monthly updates automatically, building trust and referrals.",
    metric: "4.9★ tenant rating",
    tag: "Women-first",
    cta: "View case study",
  },
];

const faqs = [
  {
    question: "How quickly can I start using PGHandle?",
    answer:
      "Most PG owners go live within 2-3 days. We help you import your existing tenant data, room details, and rent structure. Our team provides hands-on onboarding support to get you started smoothly.",
  },
  {
    question: "Do I need technical knowledge to use PGHandle?",
    answer:
      "Not at all! PGHandle is designed for PG owners, not tech experts. If you can use WhatsApp, you can use PGHandle. We provide video tutorials and chat support whenever you need help.",
  },
  {
    question: "Can tenants access their bills and make payments online?",
    answer:
      "Yes. Each tenant gets a personal login to view bills, payment history, raise maintenance issues, and make online payments. This reduces your workload and improves tenant satisfaction.",
  },
  {
    question: "Is my data secure and backed up?",
    answer:
      "Absolutely. All your data is stored securely in the cloud with automatic daily backups. Your PG data is encrypted and protected with bank-grade security. You'll never lose data even if your computer crashes.",
  },
  {
    question: "What if I manage multiple PG properties?",
    answer:
      "Perfect! PGHandle is built for multi-property management. You can manage all your PG facilities from a single dashboard, with consolidated reports and individual property tracking.",
  },
];

const logos = [
  "WhatsApp",
  "Razorpay",
  "Paytm",
  "Google Pay",
  "PhonePe",
  "UIDAI Aadhaar",
];

const testimonials = [
  {
    quote:
      "I was managing everything in notebooks and Excel. PGHandle saved me so much time! Now billing happens automatically, and I get instant notifications when someone pays. My tenants love the WhatsApp reminders too.",
    author: "Rajesh Kumar, Owner — Green Park PG, Bengaluru",
  },
  {
    quote:
      "Managing 4 PG properties was becoming overwhelming. PGHandle brought everything into one place. Food register, attendance, billing, maintenance requests - all organized. Highly recommend for any serious PG owner.",
    author: "Meena Sharma, Founder — SafeNest PG Chain, Pune",
  },
];

const SectionTitle = ({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) => (
  <div className="mx-auto mb-12 max-w-3xl text-center">
    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary">
      {eyebrow}
    </p>
    <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-black">
      {title}
    </h2>
    <p className="mt-4 text-lg text-body">{copy}</p>
  </div>
);

const SurfaceCard = ({ children }: { children: ReactNode }) => (
  <div className="rounded-3xl border border-stroke bg-white p-6 shadow-card">
    {children}
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-whiter via-white to-whiten text-body">
      <div className="border-b border-stroke/60 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-6">
          <a href="/" className="flex items-center gap-3 text-black">
            <img
              src={LogoMark}
              alt="PGHandle logomark"
              className="h-10 w-10 lg:hidden"
            />
            <img
              src={LogoFull}
              alt="PGHandle logotype"
              className="hidden h-12 w-auto lg:block"
            />
            <span className="font-display text-2xl font-semibold lg:hidden">
              PGHandle
            </span>
            <span className="sr-only">PGHandle</span>
          </a>
          <nav className="hidden gap-8 text-sm text-body md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition hover:text-primary">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={APP_URL}
              className="hidden rounded-full border border-stroke bg-white px-5 py-2 text-sm font-semibold text-black shadow-sm transition hover:border-primary hover:text-primary md:inline-flex">
              Log in
            </a>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5">
              Talk to sales
            </a>
          </div>
        </div>
      </div>

      <main id="platform" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-soft-grid opacity-80" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary">
                PG Management Made Simple
              </p>
              <h1 className="mt-6 font-display text-5xl font-semibold leading-tight text-black md:text-6xl">
                Ditch the notebooks. Manage your PG like a pro.
              </h1>
              <p className="mt-6 text-lg text-body">
                PGHandle is India's most powerful PG and hostel management
                software. Automate bookings, billing, food management, and
                tenant communication from one beautiful dashboard. Join 150+ PG
                owners who've gone digital.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={APP_URL}
                  className="inline-flex items-center rounded-full bg-primary px-7 py-3 font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5">
                  Start Free Trial
                </a>
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-stroke bg-white px-7 py-3 font-semibold text-primary transition hover:border-primary hover:text-primary/80">
                  <span>Book a Demo</span>
                  <img
                    src={ArrowIcon}
                    alt=""
                    aria-hidden="true"
                    className="ml-3 h-4 w-4 -rotate-90"
                  />
                </a>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6 text-sm text-body md:flex md:gap-12">
                <div>
                  <span className="block text-3xl font-semibold text-black">
                    ₹300
                  </span>
                  <p>Per month (₹3,600/year)</p>
                </div>
                <div>
                  <span className="block text-3xl font-semibold text-black">
                    2-3
                  </span>
                  <p>Days to go live & start saving time</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-primary/15 via-white to-secondary/20 blur-3xl" />
              <div className="rounded-[32px] border border-stroke bg-white p-8 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary">
                  Your PG Dashboard
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-black">
                  Real-time Overview
                </h3>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {metrics.map((metric) => (
                    <SurfaceCard key={metric.label}>
                      <p className="text-3xl font-semibold text-black">
                        {metric.value}
                      </p>
                      <p className="text-sm text-body">{metric.label}</p>
                    </SurfaceCard>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-stroke bg-gray p-4">
                  <p className="text-sm font-medium text-black">
                    Today's Tasks
                  </p>
                  <div className="mt-3 space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Send rent reminders (WhatsApp)</span>
                      <span className="text-primary">12 tenants</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Process pending check-ins</span>
                      <span className="text-primary">3 bookings</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Resolve maintenance issues</span>
                      <span className="text-primary">5 requests</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {heroImages.map((image) => (
                    <figure
                      key={image.caption}
                      className="overflow-hidden rounded-2xl border border-stroke">
                      <img
                        src={image.src}
                        alt={image.caption}
                        className="h-32 w-full object-cover"
                      />
                      <figcaption className="px-4 py-3 text-xs uppercase tracking-[0.3em] text-bodydark">
                        {image.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="border-y border-stroke bg-gray/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-6 py-8 text-xs font-semibold uppercase tracking-[0.3em] text-bodydark">
          {logos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle
          eyebrow="Features"
          title="Everything you need to manage your PG effortlessly"
          copy="From tenant onboarding to monthly billing, PGHandle automates the tedious work so you can focus on providing great living experiences."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <SurfaceCard key={feature.title}>
              <h3 className="font-display text-2xl text-black">
                {feature.title}
              </h3>
              <p className="mt-3 text-base text-body">{feature.copy}</p>
            </SurfaceCard>
          ))}
        </div>
      </section>

      <section
        id="gallery"
        className="bg-gradient-to-b from-gray via-whiten to-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Success Stories"
            title="Real PG owners getting real results with PGHandle"
            copy="Join hundreds of PG owners across India who've transformed their operations with PGHandle. See how they save time, reduce hassles, and improve tenant satisfaction."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pgShowcase.map((space) => (
              <article
                key={space.title}
                className="group overflow-hidden rounded-3xl border border-stroke bg-white shadow-card">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={space.image}
                    alt={space.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-black">
                    {space.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-black">
                    {space.title}
                  </h3>
                  <p className="text-sm text-secondary">{space.location}</p>
                  <p className="mt-4 text-base text-body">{space.copy}</p>
                  <div className="mt-6 flex items-center justify-between text-sm">
                    <span className="font-semibold text-black">
                      {space.metric}
                    </span>
                    <span className="inline-flex items-center gap-2 text-primary">
                      {space.cta}
                      <img
                        src={ArrowIcon}
                        alt=""
                        aria-hidden="true"
                        className="h-4 w-4 -rotate-90"
                      />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Core Services"
            title="Everything a modern PG needs, built right in"
            copy="No more juggling multiple tools. PGHandle gives you all the essential services you need to run a professional PG operation."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((item) => (
              <SurfaceCard key={item.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary">
                  {item.title}
                </p>
                <p className="mt-4 text-lg text-black">{item.body}</p>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-whiten py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Testimonials"
            title="Loved by PG owners across India"
            copy="Don't just take our word for it. Here's what PG owners say about how PGHandle transformed their business."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <SurfaceCard key={testimonial.author}>
                <p className="text-lg text-black">“{testimonial.quote}”</p>
                <p className="mt-4 text-sm text-bodydark">
                  {testimonial.author}
                </p>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="bg-gradient-to-b from-whiter via-gray to-whiten py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Pricing"
            title="Affordable plans for PGs of every size"
            copy="Choose the plan that fits your PG. All plans include onboarding support, regular updates, and access to our support team."
          />
          <p className="mb-8 text-center text-sm text-bodydark">
            All prices in INR. 18% GST additional. Save 2 months with annual
            billing.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className="flex h-full flex-col rounded-3xl border border-stroke bg-white p-6 shadow-card">
                {plan.badge && (
                  <span className="inline-flex items-center self-start rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold text-secondary">
                    {plan.badge}
                  </span>
                )}
                <h3 className="mt-4 font-display text-2xl text-black">
                  {plan.name}
                </h3>
                <p className="mt-2 text-4xl font-semibold text-black">
                  {plan.price}
                </p>
                <p className="text-sm text-body">{plan.caption}</p>
                <ul className="mt-6 space-y-3 text-sm text-body">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.name === "Launch" ? APP_URL : DEMO_URL}
                  target={plan.name === "Launch" ? "_self" : "_blank"}
                  rel={plan.name === "Launch" ? undefined : "noreferrer"}
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5">
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionTitle
            eyebrow="FAQs"
            title="Common questions from PG owners"
            copy="Have more questions? Our support team is always happy to help. Contact us anytime."
          />
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-stroke bg-gray p-6">
                <summary className="cursor-pointer list-none text-lg font-semibold text-black">
                  {faq.question}
                </summary>
                <p className="mt-3 text-base text-body">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-center text-white">
        <h3 className="font-display text-4xl">
          Ready to transform your PG management?
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/80">
          Join 150+ PG owners who've ditched notebooks and spreadsheets. Start
          your free trial today and see the difference in 2 days.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={APP_URL}
            className="rounded-full bg-white px-7 py-3 font-semibold text-primary transition hover:-translate-y-0.5">
            Start Free Trial
          </a>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/60 px-7 py-3 font-semibold text-white transition hover:bg-white/10">
            Schedule a Demo
          </a>
        </div>
      </section>

      <footer className="border-t border-stroke bg-white py-10 text-center text-sm text-body">
        <p>
          © {new Date().getFullYear()} PGHandle. India's most loved PG
          management software.
        </p>
        <p className="mt-2">Made with ❤️ in India for Indian PG owners.</p>
      </footer>
    </div>
  );
}

export default App;

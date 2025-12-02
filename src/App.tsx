import type { ReactNode } from "react";

const APP_URL = "https://app.pghandle.com";
const DEMO_URL = "https://cal.com/pghandle/demo";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Automation", href: "#automation" },
  { label: "PG Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faq" },
];

const metrics = [
  { label: "Nightly revenue uplift", value: "+18%" },
  { label: "Hours saved / week", value: "14h" },
  { label: "Guest CSAT", value: "4.9 / 5" },
  { label: "Stay brands onboarded", value: "120+" },
];

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    caption: "Premium PG suites — Indiranagar",
  },
  {
    src: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80",
    caption: "Co-living social hub — HSR Layout",
  },
];

const features = [
  {
    title: "Unified stay command center",
    copy: "Manage inventory, rates, owner payouts, and compliance from a single, opinionated workspace built for boutique stay operators.",
  },
  {
    title: "AI guest concierge",
    copy: "Automated itineraries, proactive upsells, and instant answers across WhatsApp, SMS, and email keep guests delighted without extra headcount.",
  },
  {
    title: "Operations autopilot",
    copy: "Smart tasks sync with housekeeping, maintenance, and vendor SLAs so teams know exactly what wins the day.",
  },
  {
    title: "Owner trust toolkit",
    copy: "Transparent revenue splits, branded statements, and payout tracking keep owners feeling plugged in from day one.",
  },
];

const timeline = [
  {
    title: "Signal",
    body: "Connect OTAs, direct bookings, payments, and IoT signals into the PGHandle data lake in <10 minutes.",
  },
  {
    title: "Decide",
    body: "The intelligence layer predicts occupancy risk, rate opportunities, and churn signals before they hurt revenue.",
  },
  {
    title: "Act",
    body: "Autonomous playbooks push updates to pricing, messaging, and workforce tools so execution is never manual.",
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
    name: "Launch",
    price: "₹12,499/mo",
    caption: "Up to 25 keys • All channels • excl. GST",
    features: [
      "Core PMS + channel sync",
      "Digital guidebooks & upsells",
      "Automated owner statements",
      "Unlimited support during onboarding",
    ],
    cta: "Start free trial",
  },
  {
    name: "Growth",
    price: "₹32,999/mo",
    caption: "26-150 keys • Scale ready • excl. GST",
    badge: "Most popular",
    features: [
      "AI concierge + WhatsApp automation",
      "Workflow builder for ops teams",
      "Revenue intelligence & pacing alerts",
      "Quarterly owner health reviews",
    ],
    cta: "Book live demo",
  },
  {
    name: "Enterprise",
    price: "Custom INR",
    caption: "150+ keys • Multi-market • custom SLA",
    features: [
      "Dedicated CSM & success pods",
      "Advanced API + custom data warehouse",
      "Preferred partner marketplace rates",
      "White-glove migration from legacy PMS",
    ],
    cta: "Talk to sales",
  },
];

const pgShowcase = [
  {
    title: "PGHandle Prime — Bengaluru",
    location: "12-storey smart PG near Indiranagar Metro",
    image:
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1200&q=80",
    copy: "100% occupancy waitlist maintained via PGHandle guest funnels, with automated meal plans and biometric access syncing nightly.",
    metric: "Avg. ₹38K monthly beds",
    tag: "Premium PG",
    cta: "View playbook →",
  },
  {
    title: "Co-Live Collective — Hyderabad",
    location: "4 blocks • 280 beds near HITEC City",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    copy: "Hybrid PG + managed apartments powered by PGHandle automation for dining slots, utility billing, and WhatsApp concierge.",
    metric: "₹1.2Cr monthly revenue",
    tag: "Hybrid living",
    cta: "See automations →",
  },
  {
    title: "UrbanNest PG — Pune",
    location: "Boutique women-focused PG at Koregaon Park",
    image:
      "https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&w=1200&q=80",
    copy: "Personalised move-in journeys and safety audits triggered through PGHandle workflows keep parents confident and reviews glowing.",
    metric: "4.95★ average rating",
    tag: "Women-first",
    cta: "Explore journey →",
  },
];

const faqs = [
  {
    question: "How fast can we go live?",
    answer:
      "Most stay brands launch within 10 business days. Our migration specialists import reservations, owners, taxes, and automations so your team stays focused on guests.",
  },
  {
    question: "Does PGHandle replace my current PMS?",
    answer:
      "Yes. PGHandle consolidates PMS, task management, owner portals, and guest comms. We integrate with your existing booking channels, accounting stack, and smart locks.",
  },
  {
    question: "Can I route guests directly into the PGHandle app?",
    answer:
      "Marketing CTAs on this page deep-link into the PGHandle experience, so prospects jump straight into the app or booking flow you configure.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Every plan starts with a 14-day pilot in a sandbox environment with live data. No credit card required.",
  },
];

const logos = ["Hostfully", "Airbnb", "Stripe", "Zapier", "WhatsApp", "Google"];

const testimonials = [
  {
    quote:
      "PGHandle removed a full day of manual reconciliation from my week. Owners stopped asking for spreadsheets because everything updates in real time.",
    author: "Priya S, Founder — Verve Stays",
  },
  {
    quote:
      "We went from five disconnected tools to one dashboard that actually nudges us when revenue leaks. The AI concierge even drives 23% of ancillary sales.",
    author: "Marcus W, COO — UrbanHost",
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
          <div className="font-display text-2xl font-semibold text-black">
            PGHandle
          </div>
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
                Stay orchestration OS
              </p>
              <h1 className="mt-6 font-display text-5xl font-semibold leading-tight text-black md:text-6xl">
                Automate every stay, wow every guest, and grow owner trust.
              </h1>
              <p className="mt-6 text-lg text-body">
                PGHandle is the single control room for boutique stay brands.
                Replace the patchwork of PMS, spreadsheets, and chat apps with
                guided workflows that turn every team into hospitality heroes.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={APP_URL}
                  className="inline-flex items-center rounded-full bg-primary px-7 py-3 font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5">
                  Launch PGHandle
                </a>
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-stroke bg-white px-7 py-3 font-semibold text-primary transition hover:border-primary hover:text-primary/80">
                  See live demo
                </a>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6 text-sm text-body md:flex md:gap-12">
                <div>
                  <span className="block text-3xl font-semibold text-black">
                    98%
                  </span>
                  <p>Satisfied guests during pilot</p>
                </div>
                <div>
                  <span className="block text-3xl font-semibold text-black">
                    14
                  </span>
                  <p>Days to value with guided onboarding</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-primary/15 via-white to-secondary/20 blur-3xl" />
              <div className="rounded-[32px] border border-stroke bg-white p-8 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary">
                  Live control tower
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-black">
                  Tonight&apos;s Pulse
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
                    Playbooks queued
                  </p>
                  <div className="mt-3 space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Raise rates for waterfront lofts</span>
                      <span className="text-primary">+12%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Trigger housekeeping sprint</span>
                      <span className="text-primary">8 units</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Send VIP upsell packs</span>
                      <span className="text-primary">17 guests</span>
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
          title="Everything you need to make every stay legendary"
          copy="From first inquiry to final payout, PGHandle keeps teams aligned on the plays that move revenue, reviews, and owner happiness forward."
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
            eyebrow="PG showcase"
            title="Designed for Indian PG brands that sell out faster"
            copy="Real PGHandle deployments across Bengaluru, Hyderabad, and Pune that use immersive imagery, community perks, and automated ops to stay permanently waitlisted."
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
                    <span className="text-primary">{space.cta}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="automation" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Automation engine"
            title="The intelligence loop that watches your entire portfolio"
            copy="PGHandle ingests every booking, guest touchpoint, and IoT signal to predict what your team should do next—then does it for you."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {timeline.map((item) => (
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
            eyebrow="Proof"
            title="Hospitality teams choose PGHandle for bold growth"
            copy="Whether you manage 10 lofts or 500 villas, PGHandle removes the noise so you can obsess over the guest experience again."
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
            title="Straightforward INR plans that grow with you"
            copy="Every plan includes white-glove migration, 24/7 concierge support, and access to the PGHandle partner marketplace."
          />
          <p className="mb-8 text-center text-sm text-bodydark">
            All pricing shown in INR. GST billed separately.
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
            title="Everything else teams ask before switching"
            copy="If you need something bespoke, our product specialists will shape the plan that fits your portfolio."
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
          Ready to route guests straight into PGHandle?
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/80">
          Launch the marketing CTA below and send prospects right into the
          PGHandle application flow you configure—no custom code required.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={APP_URL}
            className="rounded-full bg-white px-7 py-3 font-semibold text-primary transition hover:-translate-y-0.5">
            Route to PGHandle
          </a>
          <a
            href="mailto:hello@pghandle.com"
            className="rounded-full border border-white/60 px-7 py-3 font-semibold text-white transition hover:bg-white/10">
            Email our team
          </a>
        </div>
      </section>

      <footer className="border-t border-stroke bg-white py-10 text-center text-sm text-body">
        <p>
          © {new Date().getFullYear()} PGHandle. Purpose-built for modern stay
          brands.
        </p>
        <p className="mt-2">
          Built with ❤️ using the same React + Tailwind stack that powers the
          PGHandle application.
        </p>
      </footer>
    </div>
  );
}

export default App;

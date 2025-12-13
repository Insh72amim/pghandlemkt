import { SectionTitle } from '../ui/SectionTitle';

const pgShowcase = [
  {
    title: "Green Valley PG",
    location: "Bengaluru",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    copy: "Moved from Excel sheets to PGHandle. Now managing bookings and billing for 3 properties from a single dashboard.",
    metric: "98% occupancy",
    tag: "Multi-property"
  },
  {
    title: "Student Hub",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    copy: "Automated rent reminders reduced payment delays by 80%. GST compliance now takes minutes.",
    metric: "₹4.2L revenue",
    tag: "Student Housing"
  },
  {
    title: "SafeStay Women's PG",
    location: "Pune",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
    copy: "Digital KYC verification improved safety. Parents receive monthly updates automatically, building trust.",
    metric: "4.9★ rating",
    tag: "Women-first"
  },
];

export function Showcase() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Success Stories"
          title="Thriving PGs run on PGHandle"
          copy="See how owners across India are scaling their business."
          className="mb-16"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {pgShowcase.map((pg, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <img 
                src={pg.image} 
                alt={pg.title} 
                className="h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-white/30">
                  {pg.tag}
                </span>
                <h3 className="text-2xl font-bold">{pg.title}</h3>
                <p className="text-white/80 text-sm mb-3">{pg.location}</p>
                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300 opacity-0 group-hover:opacity-100">
                   <p className="text-sm text-white/90 mb-3">{pg.copy}</p>
                   <p className="text-primary font-bold">{pg.metric}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

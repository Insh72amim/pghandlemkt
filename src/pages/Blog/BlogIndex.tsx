import { Link } from "react-router-dom";
import { Card } from "../../components/ui/Card";
import { ArrowRight } from "lucide-react";

export function BlogIndex() {
  const posts = [
    {
      id: "how-to-manage-pg-in-india",
      title: "How to Manage a PG in India: The Ultimate Guide",
      excerpt: "From licensing to tenant verification, learn everything you need to know about running a successful Paying Guest facility.",
      category: "PG Management",
      date: "Oct 12, 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "tenant-verification-aadhaar",
      title: "Why Digital KYC is Essential for Your PG",
      excerpt: "Manual police verification is slow. Discover how Aadhaar-based KYC protects your business instantly.",
      category: "Legal & Security",
      date: "Oct 10, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "automate-rent-collection",
      title: "Stop Chasing Rent: Automate Your Billing",
      excerpt: "How automated WhatsApp reminders can reduce late rent payments by 80%.",
      category: "Growth",
      date: "Oct 05, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl font-bold text-black sm:text-5xl mb-6">
            The <span className="text-primary">PGHandle</span> Blog
          </h1>
          <p className="text-lg text-body max-w-2xl mx-auto">
            Insights, strategies, and guides to help you scale your PG business and maximize occupancy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="group block">
              <Card className="h-full flex flex-col p-0 overflow-hidden hover:border-primary/50 transition-colors">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary mb-3">
                    <span>{post.category}</span>
                    <span className="text-gray-400">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-black mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-body text-sm mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-stroke">
                    <span className="text-xs font-medium text-gray-500">{post.date}</span>
                    <span className="text-primary flex items-center text-sm font-bold">
                      Read Article <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

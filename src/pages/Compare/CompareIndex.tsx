import { Link } from "react-router-dom";
import { Card } from "../../components/ui/Card";
import { ArrowRight, ShieldCheck, Zap, Users } from "lucide-react";

export function CompareIndex() {
  const competitors = [
    {
      id: "stanza-living",
      name: "Stanza Living",
      description: "See why independent PG owners prefer PGHandle's lightweight tools over Stanza's heavy operating model.",
      icon: Users
    },
    {
      id: "zolostays",
      name: "ZoloStays",
      description: "Compare PGHandle's pricing and features against Zolo's property management solutions.",
      icon: Zap
    },
    {
      id: "excel",
      name: "Excel & Notebooks",
      description: "Still using spreadsheets? See how much time and money you're losing every month.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl font-bold text-black sm:text-5xl mb-6">
            Compare <span className="text-primary">PGHandle</span>
          </h1>
          <p className="text-lg text-body max-w-2xl mx-auto">
            Don't just take our word for it. See exactly how PGHandle stacks up against the alternatives in the Indian PG market.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {competitors.map((comp) => (
            <Link key={comp.id} to={`/compare/${comp.id}`} className="group block">
              <Card className="h-full flex flex-col hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <comp.icon size={24} aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-bold text-black mb-3">
                  PGHandle vs {comp.name}
                </h2>
                <p className="text-body leading-relaxed mb-6 flex-1">
                  {comp.description}
                </p>
                <div className="flex items-center text-primary font-bold mt-auto">
                  Read Comparison <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

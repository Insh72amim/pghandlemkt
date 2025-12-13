import { Button } from "../ui/Button";

export function CTA() {
  return (
    <section className="bg-primary py-24 text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <h2 className="font-display text-4xl font-bold mb-6">Ready to transform your PG?</h2>
        <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
          Join 150+ PG owners who've ditched notebooks for good. Start your free trial today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="secondary" size="lg" href="https://app.pghandle.in/signup">Start Free Trial</Button>
          <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary hover:border-white" size="lg" href="https://cal.com/pghandle/demo">Schedule Demo</Button>
        </div>
      </div>
    </section>
  );
}

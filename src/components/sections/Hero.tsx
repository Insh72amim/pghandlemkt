import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

const heroMetrics = [
  { label: "PG Facilities", value: "150+" },
  { label: "Hours Saved", value: "20h" },
  { label: "Rating", value: "4.8/5" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-whiter via-white to-whiten">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Copy */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Easily handle your PG with PgHandle
          </div>
          
          <h1 className="font-display text-4xl font-bold leading-tight text-black sm:text-5xl md:text-6xl mb-6">
            India's #1 <br />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">PG Management Software</span>
          </h1>
          
          <p className="text-lg text-body text-balance mb-8 max-w-lg">
            <strong>Your PG on Autopilot.</strong> The easiest way to run your PG. Automate billing, rent reminders, and happy tenants—all in one simple app.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" icon href="https://app.pghandle.in/auth/signup">Start Free Trial</Button>
          </div>

          <div className="mt-10 flex items-center gap-8 text-sm font-medium text-body">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span>No credit card required</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Visuals */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
               <div>
                 <p className="text-xs font-bold uppercase tracking-wider text-secondary">Dashboard Overview</p>
                 <h3 className="text-2xl font-bold text-black mt-1">Real-time Stats</h3>
               </div>
               <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">PG</div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
               {heroMetrics.map((m, i) => (
                 <Card key={i} className="bg-white/80 border-none shadow-sm pb-4">
                    <p className="text-3xl font-bold text-black">{m.value}</p>
                    <p className="text-sm text-body mt-1">{m.label}</p>
                 </Card>
               ))}
               <Card className="bg-primary text-white border-none shadow-lg shadow-primary/20 pb-4">
                  <p className="text-3xl font-bold">94%</p>
                  <p className="text-sm opacity-90 mt-1">Occupancy</p>
               </Card>
            </div>
            
            {/* Task Area */}
            <div className="bg-white/60 rounded-xl p-4 border border-white/60">
               <p className="text-sm font-bold text-black mb-3">Priority Tasks</p>
               <div className="space-y-3">
                 {[
                   { task: "Rent Reminders", count: "12 pending", color: "text-orange-500" },
                   { task: "New Check-ins", count: "3 today", color: "text-green-500" },
                 ].map((t, idx) => (
                   <div key={idx} className="flex items-center justify-between text-sm p-2 hover:bg-white rounded-lg transition-colors">
                      <span className="font-medium">{t.task}</span>
                      <span className={`font-bold ${t.color}`}>{t.count}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Floaters for decoration */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 bg-white p-4 rounded-xl shadow-xl z-20 border border-stroke hidden md:block"
          >
            <div className="flex items-center gap-3">
               <div className="bg-green-100 p-2 rounded-full text-green-600">
                 <CheckCircle size={20} />
               </div>
               <div>
                 <p className="text-xs text-gray-500">Rent Collected</p>
                 <p className="font-bold text-black">₹45,000</p>
               </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

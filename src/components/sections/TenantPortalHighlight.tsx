import { motion } from 'framer-motion';
import { Smartphone, Check } from 'lucide-react';
import { Button } from '../ui/Button';

export function TenantPortalHighlight() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Visual */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative mx-auto w-[300px] h-[600px] bg-black rounded-[40px] border-[8px] border-black shadow-2xl overflow-hidden">
             {/* Mock Mobile Screen */}
             <div className="h-full w-full bg-white text-left overflow-hidden">
                <div className="bg-primary h-32 p-6 text-white pt-12">
                   <p className="text-xs opacity-80">Welcome back,</p>
                   <p className="text-xl font-bold">Rahul Sharma</p>
                </div>
                <div className="p-6 -mt-6">
                   <div className="bg-white rounded-xl shadow-lg p-4 mb-4">
                      <p className="text-xs text-gray-500 uppercase">Rent Due</p>
                      <p className="text-2xl font-bold text-red-500">₹8,500</p>
                      <button className="w-full bg-black text-white rounded-lg py-2 mt-3 text-sm font-bold">Pay Now</button>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-xl text-center">
                        <span className="block text-2xl mb-1">🧾</span>
                        <span className="text-xs font-bold text-gray-600">Invoices</span>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl text-center">
                        <span className="block text-2xl mb-1">📢</span>
                        <span className="text-xs font-bold text-gray-600">Notices</span>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl text-center">
                        <span className="block text-2xl mb-1">🍲</span>
                        <span className="text-xs font-bold text-gray-600">Food Menu</span>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl text-center">
                        <span className="block text-2xl mb-1">🔧</span>
                        <span className="text-xs font-bold text-gray-600">Support</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -ml-40 -mt-60 w-[320px] h-[500px] bg-gradient-to-tr from-primary to-purple-500 rounded-full blur-[100px] -z-10 opacity-20"></div>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple-600 mb-6">
            <Smartphone size={14} /> New Feature
          </div>
          <h2 className="font-display text-4xl font-bold text-black mb-6">
            Give tenants the <span className="text-purple-600">Freedom</span> they want.
          </h2>
          <p className="text-lg text-body mb-8">
            Stop answering "What's the wifi password?" and "Send me the bill" 100 times a day. The Tenant Portal puts everything they need right in their pocket.
          </p>

          <ul className="space-y-4 mb-8">
            {[
              "Self-service rent payments",
              "Access and download past invoices",
              "Raise maintenance tickets instantly",
              "View daily food menu & notices"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-black font-medium">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
                {item}
              </li>
            ))}
          </ul>

          <Button variant="secondary" size="lg" href="https://guest.pghandle.in/signin">Explore Tenant Portal</Button>
        </motion.div>

      </div>
    </section>
  );
}

import React from 'react';
import { Check, Zap, Trophy, Star, ShieldCheck, Flame } from 'lucide-react';

const Pricing = () => {
  const features = [
    "Unlimited Gym Access (24/7)",
    "Personalized Workout Plans",
    "Nutrition Tracking App",
    "Weekly Group Classes",
    "1-on-1 Trainer Consultation",
    "Sauna & Recovery Zone Access",
    "Premium Locker Amenities"
  ];

  return (
    <section className="relative py-24 bg-zinc-950 overflow-hidden flex items-center justify-center min-h-[90vh]">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-screen filter blur-[100px] animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-md mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Unlock Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Potential</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            One simple plan. Everything you need to transform.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {/* Card Container with Glow Effect */}
          <div className="relative group">
            {/* Animated Border Gradient */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 rounded-[2rem] blur opacity-40 group-hover:opacity-75 transition duration-500 will-change-transform"></div>
            
            {/* Main Card Content */}
            <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-[1.8rem] p-8 md:p-10 border border-zinc-700/50 shadow-2xl flex flex-col h-full">
              
              {/* Floating Badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold uppercase tracking-widest py-2 px-6 rounded-full shadow-lg flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Most Popular
              </div>

              {/* Header */}
              <div className="text-center border-b border-zinc-800 pb-8 mb-8 mt-2">
                <h3 className="text-xl font-semibold text-zinc-300 uppercase tracking-wider mb-2">Professional Plan</h3>
                <div className="flex items-center justify-center gap-1 text-white">
                  <span className="text-2xl font-medium text-zinc-500">$</span>
                  <span className="text-7xl font-black tracking-tighter">29</span>
                  <span className="text-lg font-medium text-zinc-500 self-end mb-2">/month</span>
                </div>
                <p className="text-emerald-400 text-sm font-medium mt-4 bg-emerald-950/30 inline-block px-4 py-1 rounded-lg border border-emerald-900/50">
                  No hidden fees. Cancel anytime.
                </p>
              </div>

              {/* Feature List */}
              <ul className="space-y-4 mb-10 flex-grow">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4 text-zinc-200 group/item">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover/item:bg-emerald-500/20 transition-colors">
                      <Check className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-lg font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="mt-auto">
                <a 
                  href="https://buy.stripe.com/test_00g5lq0OG2lG2pq144"
                  className="relative w-full group/btn overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 p-1 text-white shadow-xl shadow-emerald-900/20 transition-all hover:shadow-emerald-500/40 hover:-translate-y-1 block"
                >
                  <div className="relative flex items-center justify-center gap-3 rounded-lg bg-transparent px-8 py-5 transition-all group-hover/btn:bg-white/10">
                    <span className="text-xl font-bold uppercase tracking-wide">Start Free Trial</span>
                    <Zap className="w-6 h-6 fill-current" />
                  </div>
                  {/* Button Shine Effect */}
                  <div className="absolute -left-[100%] top-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover/btn:left-[100%]"></div>
                </a>
                
                <div className="mt-6 flex items-center justify-center gap-6 text-zinc-500 text-sm">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4" />
                    <span>Top Rated</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

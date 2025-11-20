import React from 'react';
import { Dumbbell, Users, Calendar, Zap, Trophy, ArrowRight, Flame, Activity } from 'lucide-react';

const Services = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-lime-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-lime-400 font-medium tracking-wider uppercase mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4" /> Our Expertise
            </h2>
            <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter text-white uppercase">
              Redefine Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">Limits</span>
            </h3>
          </div>
          <p className="text-zinc-400 max-w-md text-lg leading-relaxed">
            Elite facilities, world-class coaching, and a community that pushes you further. Choose your path to greatness.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto md:grid-rows-[repeat(2,300px)] gap-4">
          
          {/* 1. Strength & Conditioning (Hero Card) */}
          <div className="group relative md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden bg-zinc-900">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
              alt="Strength Training" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="bg-lime-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-zinc-950 group-hover:rotate-12 transition-transform">
                <Dumbbell className="w-6 h-6" />
              </div>
              <h4 className="text-3xl font-bold uppercase italic mb-2">Iron Paradise</h4>
              <p className="text-zinc-300 mb-6 line-clamp-2 group-hover:text-white transition-colors">
                Olympic lifting platforms, power racks, and dumbbells up to 150lbs. The ultimate environment for serious strength athletes.
              </p>
              <button className="flex items-center gap-2 text-lime-400 font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                Explore Zone <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 2. Personal Training (Vertical Card) */}
          <div className="group relative md:col-span-1 md:row-span-2 rounded-3xl overflow-hidden bg-zinc-800 border border-zinc-800 hover:border-lime-500/50 transition-colors">
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
              alt="Personal Trainer" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-all"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/0 via-zinc-950/60 to-zinc-950" />
            <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <span className="text-xs font-bold text-white">ELITE TIER</span>
            </div>
            <div className="absolute bottom-0 left-0 p-6">
              <Users className="w-10 h-10 text-blue-500 mb-4" />
              <h4 className="text-2xl font-bold uppercase italic mb-2">1-on-1 Coaching</h4>
              <ul className="space-y-2 text-sm text-zinc-400 mb-6">
                <li className="flex items-center gap-2"><Activity className="w-4 h-4 text-blue-500" /> Biometric Analysis</li>
                <li className="flex items-center gap-2"><Trophy className="w-4 h-4 text-blue-500" /> Custom Programming</li>
                <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-blue-500" /> Nutrition Guidance</li>
              </ul>
              <div className="flex -space-x-3 mb-4">
                {[1,2,3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-zinc-700 overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-${i === 1 ? '1535713875002-d1d0cf377fde' : i === 2 ? '1583454110551-21f2fa2afe61' : '1438761681033-6461ffad8d80'}?auto=format&fit=crop&w=100&q=60`} alt="Trainer" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center text-xs font-bold text-white">
                  +12
                </div>
              </div>
            </div>
          </div>

          {/* 3. Class Schedule (Info Card) */}
          <div className="group relative md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden bg-zinc-900 p-6 flex flex-col justify-between hover:bg-zinc-800 transition-colors">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-orange-500/20 rounded-2xl text-orange-500">
                <Calendar className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Today</span>
            </div>
            
            <div className="space-y-4 mt-4">
              <h4 className="text-xl font-bold uppercase italic">Live Classes</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                  <span className="text-zinc-300 font-medium">HIIT Burn</span>
                  <span className="text-lime-400 font-mono text-sm">09:00 AM</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                  <span className="text-zinc-300 font-medium">Power Yoga</span>
                  <span className="text-lime-400 font-mono text-sm">12:30 PM</span>
                </div>
                <div className="flex justify-between items-center text-zinc-500">
                  <span>CrossFit</span>
                  <span className="font-mono text-sm">05:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Membership / Join (Action Card) */}
          <div className="group relative md:col-span-2 md:row-span-1 rounded-3xl overflow-hidden bg-lime-400 flex flex-col md:flex-row items-center justify-between p-8 md:p-10">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
             
             <div className="relative z-10 max-w-sm">
                <h4 className="text-zinc-950 text-3xl font-black uppercase italic leading-none mb-3">
                  Start Your <br/>Legacy Today
                </h4>
                <p className="text-zinc-800 font-medium">
                  $0 Initiation fee for new members this week.
                </p>
             </div>

             <button className="relative z-10 mt-6 md:mt-0 bg-zinc-950 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider hover:scale-105 hover:shadow-xl hover:shadow-zinc-950/20 transition-all">
               Join Now
             </button>
          </div>

          {/* 5. Recovery / Amenities (Image Card) */}
          <div className="group relative md:col-span-2 lg:col-span-2 md:row-span-1 rounded-3xl overflow-hidden bg-zinc-900">
            <img 
              src="https://images.unsplash.com/photo-1544367563-12123d8966cd?q=80&w=2070&auto=format&fit=crop" 
              alt="Recovery" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/50 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-center items-start">
              <div className="bg-cyan-500/20 p-3 rounded-2xl text-cyan-400 mb-4 backdrop-blur-sm">
                <Flame className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold uppercase italic mb-2">Recovery Zone</h4>
              <p className="text-zinc-400 max-w-xs text-sm">
                Cryotherapy, infrared saunas, and deep tissue massage therapy to keep you performing at your peak.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div></div></div></div></div></div>);
};

export default Services;
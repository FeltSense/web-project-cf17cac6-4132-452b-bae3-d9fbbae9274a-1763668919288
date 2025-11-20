import React from 'react';
import { ArrowRight, PlayCircle, Trophy, Users, Timer } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full bg-neutral-900 overflow-hidden flex items-center">
      {/* Background Image with Parallax feel */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col space-y-8">
            <div className="flex items-center space-x-3 animate-fade-in-up">
              <div className="h-[2px] w-12 bg-yellow-500"></div>
              <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm">
                redefine your limits
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9]">
              SCULPT <br />
              YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">LEGACY</span>
            </h1>

            <p className="text-neutral-400 text-lg md:text-xl max-w-lg leading-relaxed border-l-4 border-neutral-800 pl-6">
              Join the elite community dedicated to pushing boundaries. 
              State-of-the-art equipment, world-class coaching, and an 
              atmosphere that breeds success.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <button className="group relative px-8 py-4 bg-yellow-500 text-black font-black uppercase tracking-wider overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Start Training <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              </button>
              
              <button className="flex items-center gap-3 px-8 py-4 border border-neutral-700 text-white font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors">
                <PlayCircle className="w-6 h-6 text-yellow-500" />
                Watch Video
              </button>
            </div>

            {/* Stats Strip */}
            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-neutral-800 mt-8">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-yellow-500 mb-1">
                  <Users size={20} />
                  <span className="font-bold text-2xl">2k+</span>
                </div>
                <span className="text-neutral-500 text-xs uppercase tracking-widest">Members</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-yellow-500 mb-1">
                  <Trophy size={20} />
                  <span className="font-bold text-2xl">15+</span>
                </div>
                <span className="text-neutral-500 text-xs uppercase tracking-widest">Trainers</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-yellow-500 mb-1">
                  <Timer size={20} />
                  <span className="font-bold text-2xl">24/7</span>
                </div>
                <span className="text-neutral-500 text-xs uppercase tracking-widest">Access</span>
              </div>
            </div>
          </div>

          {/* Right Side Visual Elements (Optional decorative or specific layout) */}
          <div className="hidden lg:block relative h-full min-h-[500px]">
             {/* Abstract shapes or floating cards could go here, but we're keeping it clean to let the background shine 
                 However, let's add a floating card for visual depth */}
             <div className="absolute bottom-10 right-10 bg-neutral-900/80 backdrop-blur-md p-6 border-l-4 border-yellow-500 max-w-xs transform translate-y-0 hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-12 h-12 rounded-full bg-neutral-700 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Trainer" className="w-full h-full object-cover" />
                   </div>
                   <div>
                      <p className="text-white font-bold">Alex Sterling</p>
                      <p className="text-yellow-500 text-xs uppercase">Head Coach</p>
                   </div>
                </div>
                <p className="text-neutral-300 text-sm italic">"The only bad workout is the one that didn't happen. Let's crush it today."</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div></div></div>);
};

export default Hero;

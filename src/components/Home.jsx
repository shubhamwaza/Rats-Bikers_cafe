import React from 'react';
import { 
  Bike, 
  Coffee, 
  Sparkles, 
  Award, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Compass, 
  Star,
  CheckCircle2,
  Clock,
  ChevronRight,
  Flame,
  Zap,
  Activity
} from 'lucide-react';

export default function Home({ setActiveTab, onOpenBooking, onOpenMembership }) {
  return (
    <div className="space-y-24 pb-16">
      
      {/* EDITORIAL HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden mechanical-grid">
        
        {/* Background Image & Editorial Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-biker.jpg" 
            alt="R.A.T.S Motorcycle Riders" 
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-125 transition-transform duration-10000 animate-pulse-glow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/80 to-[#08090C]/60"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FF3D00]/20 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          {/* Telemetry Badge */}
          <div className="inline-flex items-center gap-2 bg-[#11141F]/90 border border-[#FF3D00]/50 px-4 py-2 rounded-full backdrop-blur-md flame-glow-sm">
            <Flame className="w-4 h-4 text-[#FF3D00] animate-bounce" />
            <span className="text-xs font-telemetry font-bold tracking-widest text-[#FF3D00] uppercase">
              THE ULTIMATE BIKER SQUAD & CAFE
            </span>
          </div>

          {/* High-Impact Headline (Bebas Neue Display) */}
          <div className="space-y-3 max-w-5xl mx-auto">
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-wider uppercase leading-none">
              RIDE & TOUR <br className="hidden sm:inline" />
              <span className="flame-gradient-text">THE WORLD</span>
            </h1>
            <p className="text-base sm:text-xl font-light text-slate-300 italic tracking-widest uppercase">
              "YOU LIVE JUST ONCE — RIDE LIKE IT!"
            </p>
          </div>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            R.A.T.S is a high-energy collective of touring riders, custom bike purists, and highway enthusiasts. Joining our rider squad is completely free — always has been, always will be!
          </p>

          {/* Action Triggers */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-lg mx-auto">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto bg-[#FF3D00] hover:bg-[#D63300] text-white font-extrabold text-xs px-8 py-4 rounded-xl shadow-xl flame-glow transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>Book Bike Spa & Detailing</span>
            </button>
            <button
              onClick={onOpenMembership}
              className="w-full sm:w-auto bg-[#11141F]/90 hover:bg-slate-800 text-[#FFB800] border border-[#FFB800]/50 font-bold text-xs px-8 py-4 rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Award className="w-5 h-5 text-[#FFB800]" />
              <span>VIP Priority Membership</span>
            </button>
          </div>

          {/* Telemetry Stats Ticker */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto font-telemetry">
            <div className="tactile-card p-5 rounded-2xl text-center space-y-1">
              <p className="text-3xl sm:text-4xl font-black text-white">12,500+</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">KM HIGHWAY TOURED</p>
            </div>
            <div className="tactile-card p-5 rounded-2xl text-center space-y-1">
              <p className="text-3xl sm:text-4xl font-black text-[#FF3D00]">450+</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">SQUAD RIDERS</p>
            </div>
            <div className="tactile-card p-5 rounded-2xl text-center space-y-1">
              <p className="text-3xl sm:text-4xl font-black text-white">98+</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">BREAKFAST RIDES</p>
            </div>
            <div className="tactile-card p-5 rounded-2xl text-center space-y-1">
              <p className="text-3xl sm:text-4xl font-black text-[#FFB800]">4.9 ★</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">SPA RATING</p>
            </div>
          </div>

        </div>
      </section>


      {/* EDITORIAL SECTION: R.A.T.S ON THE ROADS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#FF3D00]/10 border border-[#FF3D00]/30 px-3.5 py-1.5 rounded-full text-xs font-telemetry font-bold text-[#FF3D00] uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>R.A.T.S ON THE ROADS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase leading-tight">
              JUST FOR THE <br />
              <span className="flame-gradient-text">LOVE OF THE ROADS</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Travel is a passion and many put it away indefinitely for "someday". R.A.T.S is a group of high-energy road riders and tourers who lead the way for all travel enthusiasts. Join us. Signing up on the rider group is free. It always will be that!
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF3D00] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">Weekend Highway & Twisties Rides every Saturday & Sunday</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF3D00] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">Dedicated Motorcycle Detailing & Ceramic Spa Bay</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF3D00] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">Bikers Cafe with Artisanal Coffee & Protein Bowls</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => setActiveTab('rides')}
                className="bg-[#FF3D00] hover:bg-[#D63300] text-white text-xs font-extrabold px-6 py-3.5 rounded-xl transition-all flex items-center gap-2 flame-glow-sm"
              >
                <span>View Rides Calendar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveTab('cafe')}
                className="bg-[#11141F] hover:bg-slate-800 text-slate-200 border border-white/10 text-xs font-bold px-6 py-3.5 rounded-xl transition-all"
              >
                Explore Cafe Menu
              </button>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <img 
                  src="/bikers-cafe.jpg" 
                  alt="RATS Bikers Cafe Lounge" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="tactile-card p-5 rounded-2xl space-y-2">
                <Coffee className="w-6 h-6 text-[#FF3D00]" />
                <h4 className="font-bold text-white text-sm">Bikers Lounge & Hub</h4>
                <p className="text-xs text-slate-400">Coffee, wifi, gear storage & rider networking space.</p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="tactile-card p-5 rounded-2xl space-y-2">
                <Sparkles className="w-6 h-6 text-[#FFB800]" />
                <h4 className="font-bold text-white text-sm">Automotive Spa</h4>
                <p className="text-xs text-slate-400">Snow foam, ceramic coating & chain maintenance.</p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <img 
                  src="/bike-spa.jpg" 
                  alt="RATS Motorcycle Detailing Spa" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION: 4 PILLARS OF OUR CLUBHOUSE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-12">
          <span className="text-xs font-telemetry font-bold text-[#FF3D00] uppercase tracking-widest">
            EXPERIENCE R.A.T.S
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-white uppercase">
            FOUR PILLARS OF OUR CLUBHOUSE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Bikers Cafe */}
          <div className="tactile-card p-6 rounded-2xl flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FF3D00]/10 border border-[#FF3D00]/30 flex items-center justify-center text-[#FF3D00] group-hover:bg-[#FF3D00] group-hover:text-white transition-colors">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white">R.A.T.S Bikers Cafe</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Freshly roasted artisanal coffee, espresso, high-protein breakfast plates, smoothies, and rider snacks.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('cafe')}
              className="mt-6 text-xs font-bold text-[#FF3D00] flex items-center gap-1 hover:gap-2 transition-all"
            >
              <span>View Cafe Menu</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Bike Spa & Detailing */}
          <div className="tactile-card-glow p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between">
            <span className="absolute top-3 right-3 bg-[#FF3D00] text-white text-[9px] font-telemetry font-extrabold px-2.5 py-0.5 rounded-full uppercase">
              ONLINE ESTIMATOR
            </span>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FF3D00] text-white flex items-center justify-center flame-glow-sm">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white">Bike Spa & Detailing</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Precision foam wash, ceramic pro shield, chain lube & tensioning, engine oil replacement.
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              className="mt-6 w-full bg-[#FF3D00] hover:bg-[#D63300] text-white text-xs font-extrabold py-3 rounded-xl transition-all shadow-md text-center flame-glow-sm"
            >
              Calculate Cost & Book
            </button>
          </div>

          {/* Card 3: Priority VIP Membership */}
          <div className="tactile-card p-6 rounded-2xl border-[#FFB800]/30 hover:border-[#FFB800] transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FFB800]/10 border border-[#FFB800]/40 flex items-center justify-center text-[#FFB800]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white">Priority VIP Club</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                20% Cafe discounts, free monthly washes, VIP lounge access, and exclusive track day passes.
              </p>
            </div>
            <button
              onClick={onOpenMembership}
              className="mt-6 text-xs font-bold text-[#FFB800] flex items-center gap-1 hover:gap-2 transition-all"
            >
              <span>Explore VIP Perks</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 4: Rides Calendar */}
          <div className="tactile-card p-6 rounded-2xl flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-slate-200">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white">Cafe Rides Calendar</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Join our squad for upcoming highway rides, coffee runs, and multi-state touring expeditions.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('rides')}
              className="mt-6 text-xs font-bold text-slate-200 flex items-center gap-1 hover:gap-2 transition-all"
            >
              <span>View Ride Dates</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>


      {/* UPCOMING FEATURED RIDE PROMO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#141724] to-[#0A0C12] border border-white/10 p-8 sm:p-12 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF3D00]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#FF3D00] text-white px-3 py-1 rounded-full text-xs font-telemetry font-black uppercase">
                <Zap className="w-3.5 h-3.5" /> NEXT SQUAD EXPEDITION
              </div>
              <h3 className="font-display text-3xl sm:text-5xl text-white tracking-wide">
                SUNRISE HIGHWAY RUN TO NANDI HILLS & COFFEE SPA
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                60 KM Morning Twisties Ride • Assembly at R.A.T.S Cafe at 5:00 AM • Complimentary Breakfast for VIP Members.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-telemetry font-semibold text-slate-300">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#FF3D00]" /> Saturday, 6:00 AM</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#FF3D00]" /> Starting at Indiranagar HQ</span>
                <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-[#FF3D00]" /> 34 Riders RSVP'd</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                onClick={() => setActiveTab('rides')}
                className="w-full bg-[#FF3D00] hover:bg-[#D63300] text-white font-extrabold text-xs py-4 rounded-xl shadow-xl flame-glow transition-all text-center"
              >
                1-Click RSVP Now
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

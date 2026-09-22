import React from 'react';
import { 
  Coffee, 
  Sparkles, 
  Award, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Users, 
  CheckCircle2,
  ChevronRight,
  Flame,
  Wrench,
  Droplet
} from 'lucide-react';

export default function Home({ setActiveTab, onOpenBooking, onOpenMembership }) {
  return (
    <div className="space-y-24 pb-20 apple-bg-mesh min-h-screen">
      
      {/* APPLE RELEASE-STYLE HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-biker.jpg" 
            alt="R.A.T.S Motorcycle Riders" 
            className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-110 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-radial-vignette opacity-70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          {/* Status Glass Pill */}
          <div className="inline-flex items-center gap-2.5 glass-pill px-4 py-1.5 text-xs text-slate-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-sm shadow-emerald-500"></span>
            <span className="font-mono text-orange-400 font-semibold tracking-wide">SYSTEM ACTIVE</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300 font-medium">Official Rider Squadron HQ</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 max-w-5xl mx-auto">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white leading-none">
              Built for the Ride. <br />
              <span className="bg-gradient-to-r from-orange-400 via-rose-500 to-amber-300 bg-clip-text text-transparent">
                Ride the World.
              </span>
            </h1>
            <p className="text-sm sm:text-lg font-mono text-orange-400 tracking-wider font-semibold uppercase pt-2">
              "You live just once — Ride like it!"
            </p>
          </div>

          {/* Subtitle Paragraph */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            R.A.T.S is a high-energy collective of touring riders, custom bike purists, and highway enthusiasts. Joining our rider squad is completely free — always has been, always will be.
          </p>

          {/* Action Button Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto">
            <button
              onClick={onOpenBooking}
              className="apple-btn-primary w-full sm:w-auto py-3.5 px-8 text-sm flex items-center justify-center gap-2 active:scale-95"
            >
              <Wrench className="w-4 h-4" />
              <span>Book Bay / Spa</span>
            </button>
            <button
              onClick={onOpenMembership}
              className="apple-btn-secondary w-full sm:w-auto py-3.5 px-8 text-sm flex items-center justify-center gap-2 active:scale-95"
            >
              <Award className="w-4 h-4 text-orange-400" />
              <span>VIP Club</span>
            </button>
          </div>

          {/* Bento Stats Grid */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="glass-card p-6 text-center space-y-1">
              <p className="text-slate-400 text-xs font-mono font-medium tracking-wide">KM TOURED</p>
              <p className="text-3xl font-extrabold text-white font-mono">12,500+</p>
              <p className="text-[11px] text-slate-400">Highway Miles</p>
            </div>

            <div className="glass-card p-6 text-center space-y-1 border-orange-500/20">
              <p className="text-orange-400 text-xs font-mono font-semibold tracking-wide">SQUAD RIDERS</p>
              <p className="text-3xl font-extrabold text-white font-mono">450+</p>
              <p className="text-[11px] text-slate-400">Active Members</p>
            </div>

            <div className="glass-card p-6 text-center space-y-1">
              <p className="text-slate-400 text-xs font-mono font-medium tracking-wide">BREAKFAST RIDES</p>
              <p className="text-3xl font-extrabold text-white font-mono">98+</p>
              <p className="text-[11px] text-slate-400">Completed Runs</p>
            </div>

            <div className="glass-card p-6 text-center space-y-1">
              <p className="text-amber-400 text-xs font-mono font-semibold tracking-wide">BAY RATING</p>
              <p className="text-3xl font-extrabold text-white font-mono">4.9 ★</p>
              <p className="text-[11px] text-slate-400">Verified Spa</p>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION: R.A.T.S MANIFESTO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 glass-pill px-3.5 py-1 text-xs text-orange-400 font-mono">
                <Flame className="w-3.5 h-3.5 text-orange-400" />
                <span>Squad Manifesto</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Just for the <br />
                <span className="bg-gradient-to-r from-orange-400 to-rose-500 bg-clip-text text-transparent">
                  Love of the Roads.
                </span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Travel is a passion and many put it away indefinitely for "someday". R.A.T.S is a group of high-energy road riders and tourers who lead the way for all travel enthusiasts. Join us. Signing up on the rider group is free. It always will be that!
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 glass-card p-3.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Weekend breakfast & twisties rides every Saturday & Sunday</span>
                </div>
                <div className="flex items-center gap-3 glass-card p-3.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0" />
                  <span>Dedicated motorcycle detailing & ceramic spa bay</span>
                </div>
                <div className="flex items-center gap-3 glass-card p-3.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-rose-400 shrink-0" />
                  <span>Bikers cafe with artisanal coffee & protein fuel bowls</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => setActiveTab('rides')}
                  className="apple-btn-primary px-6 py-3 text-xs font-semibold flex items-center gap-2"
                >
                  <span>View Rides Calendar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTab('cafe')}
                  className="apple-btn-secondary px-6 py-3 text-xs font-medium"
                >
                  Explore Cafe Menu
                </button>
              </div>
            </div>

            {/* Right Image Bento Box */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="glass-card overflow-hidden p-2 group">
                  <img 
                    src="/bikers-cafe.jpg" 
                    alt="RATS Bikers Cafe Lounge" 
                    className="w-full h-56 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="glass-card p-5 space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-sm">Bikers Lounge & Hub</h4>
                  <p className="text-xs text-slate-400">Coffee, wifi, gear storage & rider networking space.</p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="glass-card p-5 space-y-2 border-rose-500/20">
                  <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-sm">Automotive Spa</h4>
                  <p className="text-xs text-slate-400">Snow foam wash, ceramic pro shield & chain care.</p>
                </div>
                <div className="glass-card overflow-hidden p-2 group">
                  <img 
                    src="/bike-spa.jpg" 
                    alt="RATS Motorcycle Detailing Spa" 
                    className="w-full h-56 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION: FOUR PILLARS BENTO GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 glass-pill px-3 py-1 text-xs text-orange-400 font-mono">
            <span>Pit Stop Infrastructure</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">Four Pillars of Our Garage</h2>
          <p className="text-slate-400 text-sm">Engineered for performance, community, and rider care.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pillar 1: Cafe */}
          <div className="glass-card p-7 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-white">R.A.T.S Bikers Cafe</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Freshly roasted artisanal coffee, espresso, high-protein breakfast plates, smoothies, and rider snacks.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('cafe')}
              className="mt-6 text-xs font-semibold text-orange-400 flex items-center gap-1 group-hover:gap-2 transition-all"
            >
              <span>View Cafe Menu</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Pillar 2: Detailing Spa */}
          <div className="glass-card p-7 flex flex-col justify-between group border-rose-500/20">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                <Droplet className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-white">Bike Spa & Detailing</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Precision foam wash, ceramic pro shield, chain lube & tensioning, engine oil replacement.
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              className="apple-btn-primary mt-6 w-full py-2.5 text-xs text-center"
            >
              Schedule Service
            </button>
          </div>

          {/* Pillar 3: Priority VIP Membership */}
          <div className="glass-card p-7 flex flex-col justify-between group border-amber-500/20">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-white">Priority VIP Club</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                20% Cafe discounts, free monthly washes, VIP lounge access, and exclusive track day passes.
              </p>
            </div>
            <button
              onClick={onOpenMembership}
              className="mt-6 text-xs font-semibold text-amber-400 flex items-center gap-1 group-hover:gap-2 transition-all"
            >
              <span>Explore VIP Perks</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Pillar 4: Rides Calendar */}
          <div className="glass-card p-7 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-500/10 border border-slate-500/20 flex items-center justify-center text-slate-300">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-white">Cafe Rides Calendar</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Join our squad for upcoming highway rides, coffee runs, and multi-state touring expeditions.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('rides')}
              className="mt-6 text-xs font-semibold text-white flex items-center gap-1 group-hover:gap-2 transition-all"
            >
              <span>View Ride Dates</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>


      {/* EXPEDITION PROMO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 relative overflow-hidden border-orange-500/30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full filter blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 glass-pill px-3 py-1 text-xs text-orange-400 font-mono">
                <Flame className="w-3.5 h-3.5 text-orange-400" />
                <span>Next Squad Expedition</span>
              </div>
              <h3 className="font-extrabold text-3xl sm:text-5xl tracking-tight text-white">
                Sunrise Highway Run to Nandi Hills & Coffee Spa
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                60 KM Morning Twisties Ride • Assembly at R.A.T.S Cafe at 5:00 AM • Complimentary Breakfast for VIP Members.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2 font-mono text-xs text-slate-300">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-orange-400" /> SATURDAY, 6:00 AM</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-orange-400" /> INDIRANAGAR HQ</span>
                <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-orange-400" /> 34 RIDERS REGISTERED</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-end">
              <button
                onClick={() => setActiveTab('rides')}
                className="apple-btn-primary py-3.5 px-8 text-xs text-center font-semibold active:scale-95"
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


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
  Wrench,
  Gauge,
  Droplet
} from 'lucide-react';

export default function Home({ setActiveTab, onOpenBooking, onOpenMembership }) {
  return (
    <div className="space-y-20 pb-16">
      
      {/* EDITORIAL HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden garage-bg">
        
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-biker.jpg" 
            alt="R.A.T.S Motorcycle Riders" 
            className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-125 transition-transform duration-10000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/80 to-[#1A1A1A]/60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          {/* Work Order Terminal Badge */}
          <div className="inline-flex items-center gap-3 bg-[#111111] border-2 border-[#4A4C50] px-5 py-2 font-mono text-xs text-[#FF5E00]">
            <span className="w-2.5 h-2.5 bg-[#D92323] animate-pulse"></span>
            <span className="font-bold tracking-widest uppercase">SYSTEM READY // SQUAD SQUADRON HQ</span>
          </div>

          {/* Heavy Condensed Display Headline */}
          <div className="space-y-4 max-w-5xl mx-auto">
            <h1 className="font-black text-6xl sm:text-8xl md:text-9xl text-white tracking-tighter uppercase leading-none">
              BUILT FOR THE RIDE <br className="hidden sm:inline" />
              <span className="text-[#D92323]">RIDE & TOUR THE WORLD</span>
            </h1>
            <p className="text-base sm:text-xl font-mono text-[#8B5A2B] uppercase tracking-widest font-bold">
              "YOU LIVE JUST ONCE — RIDE LIKE IT!"
            </p>
          </div>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
            R.A.T.S is a high-energy collective of touring riders, custom bike purists, and highway enthusiasts. Joining our rider squad is completely free — always has been, always will be!
          </p>

          {/* Action Triggers */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-lg mx-auto">
            <button
              onClick={onOpenBooking}
              className="btn-red w-full sm:w-auto py-4 px-8 text-sm flex items-center justify-center gap-2"
            >
              <Wrench className="w-5 h-5" />
              <span>Book a Bay / Spa</span>
            </button>
            <button
              onClick={onOpenMembership}
              className="btn-orange w-full sm:w-auto py-4 px-8 text-sm flex items-center justify-center gap-2"
            >
              <Award className="w-5 h-5" />
              <span>VIP Membership</span>
            </button>
          </div>

          {/* Diagnostics Stats Bar */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto font-mono">
            <div className="bg-[#111111] border-2 border-[#4A4C50] p-5 text-center space-y-1">
              <div className="text-[#D92323] text-xs font-bold mb-1">{">>"} KM TOURED</div>
              <p className="text-3xl font-black text-white">12,500+</p>
              <p className="text-[10px] text-[#4A4C50] uppercase tracking-widest">HIGHWAY MILES</p>
            </div>

            <div className="bg-[#111111] border-2 border-[#FF5E00] p-5 text-center space-y-1">
              <div className="text-[#FF5E00] text-xs font-bold mb-1">{">>"} SQUAD RIDERS</div>
              <p className="text-3xl font-black text-white">450+</p>
              <p className="text-[10px] text-[#FF5E00] uppercase tracking-widest">ACTIVE MEMBERS</p>
            </div>

            <div className="bg-[#111111] border-2 border-[#4A4C50] p-5 text-center space-y-1">
              <div className="text-[#D92323] text-xs font-bold mb-1">{">>"} BREAKFAST RIDES</div>
              <p className="text-3xl font-black text-white">98+</p>
              <p className="text-[10px] text-[#4A4C50] uppercase tracking-widest">COMPLETED RUNS</p>
            </div>

            <div className="bg-[#111111] border-2 border-[#8B5A2B] p-5 text-center space-y-1">
              <div className="text-[#8B5A2B] text-xs font-bold mb-1">{">>"} BAY RATING</div>
              <p className="text-3xl font-black text-white">4.9 ★</p>
              <p className="text-[10px] text-[#8B5A2B] uppercase tracking-widest">VERIFIED SPA</p>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION: R.A.T.S ON THE ROADS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block bg-[#111111] border border-[#4A4C50] px-3.5 py-1.5 font-mono text-xs text-[#D92323] uppercase tracking-widest">
              // SQUAD MANIFESTO
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white leading-none">
              JUST FOR THE <br />
              <span className="text-[#FF5E00]">LOVE OF THE ROADS</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Travel is a passion and many put it away indefinitely for "someday". R.A.T.S is a group of high-energy road riders and tourers who lead the way for all travel enthusiasts. Join us. Signing up on the rider group is free. It always will be that!
            </p>
            
            <div className="space-y-3 pt-2 font-mono text-xs">
              <div className="flex items-center gap-3 bg-[#111111] border border-[#4A4C50] p-3 text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#D92323] shrink-0" />
                <span>WEEKEND BREAKFAST & TWISTIES RIDES EVERY SATURDAY & SUNDAY</span>
              </div>
              <div className="flex items-center gap-3 bg-[#111111] border border-[#4A4C50] p-3 text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#FF5E00] shrink-0" />
                <span>DEDICATED MOTORCYCLE DETAILING & CERAMIC SPA BAY</span>
              </div>
              <div className="flex items-center gap-3 bg-[#111111] border border-[#4A4C50] p-3 text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#8B5A2B] shrink-0" />
                <span>BIKERS CAFE WITH ARTISANAL COFFEE & PROTEIN FUEL BOWLS</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => setActiveTab('rides')}
                className="btn-red px-6 py-3.5 text-xs flex items-center gap-2"
              >
                <span>View Rides Calendar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveTab('cafe')}
                className="btn-secondary px-6 py-3.5 text-xs"
              >
                Explore Cafe Menu
              </button>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="border-2 border-[#4A4C50] overflow-hidden group">
                <img 
                  src="/bikers-cafe.jpg" 
                  alt="RATS Bikers Cafe Lounge" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-[#111111] p-5 border-2 border-[#4A4C50] space-y-2">
                <Coffee className="w-6 h-6 text-[#D92323]" />
                <h4 className="font-black text-white text-sm uppercase">Bikers Lounge & Hub</h4>
                <p className="text-xs text-gray-400">Coffee, wifi, gear storage & rider networking space.</p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="bg-[#111111] p-5 border-2 border-[#FF5E00] space-y-2">
                <Sparkles className="w-6 h-6 text-[#FF5E00]" />
                <h4 className="font-black text-white text-sm uppercase">Automotive Spa</h4>
                <p className="text-xs text-gray-400">Snow foam, ceramic coating & chain maintenance.</p>
              </div>
              <div className="border-2 border-[#4A4C50] overflow-hidden group">
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


      {/* SECTION: FOUR PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b-2 border-[#4A4C50] pb-4 mb-10 flex justify-between items-end">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white">Four Pillars of Our Garage</h2>
            <p className="text-[#8B5A2B] font-mono mt-1 uppercase text-xs">// Pit Stop Infrastructure</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pillar 1: Cafe */}
          <div className="garage-card-red p-6 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="bg-[#1A1A1A] p-3 border border-[#4A4C50] w-12 h-12 flex items-center justify-center text-[#D92323]">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-black text-xl uppercase tracking-tighter text-white">R.A.T.S Bikers Cafe</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Freshly roasted artisanal coffee, espresso, high-protein breakfast plates, smoothies, and rider snacks.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('cafe')}
              className="mt-6 font-mono text-xs font-bold text-[#D92323] flex items-center gap-1 hover:gap-2 transition-all uppercase"
            >
              <span>View Cafe Menu</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Pillar 2: Detailing Spa */}
          <div className="garage-card-orange p-6 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="bg-[#1A1A1A] p-3 border border-[#FF5E00] w-12 h-12 flex items-center justify-center text-[#FF5E00]">
                <Droplet className="w-6 h-6" />
              </div>
              <h3 className="font-black text-xl uppercase tracking-tighter text-white">Bike Spa & Detailing</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Precision foam wash, ceramic pro shield, chain lube & tensioning, engine oil replacement.
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              className="btn-orange mt-6 w-full py-3 text-xs text-center"
            >
              Schedule Service
            </button>
          </div>

          {/* Pillar 3: Priority VIP Membership */}
          <div className="garage-card-leather p-6 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="bg-[#1A1A1A] p-3 border border-[#8B5A2B] w-12 h-12 flex items-center justify-center text-[#8B5A2B]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-black text-xl uppercase tracking-tighter text-white">Priority VIP Club</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                20% Cafe discounts, free monthly washes, VIP lounge access, and exclusive track day passes.
              </p>
            </div>
            <button
              onClick={onOpenMembership}
              className="mt-6 font-mono text-xs font-bold text-[#8B5A2B] flex items-center gap-1 hover:gap-2 transition-all uppercase"
            >
              <span>Explore VIP Perks</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Pillar 4: Rides Calendar */}
          <div className="garage-card p-6 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="bg-[#1A1A1A] p-3 border border-[#4A4C50] w-12 h-12 flex items-center justify-center text-[#E5E7EB]">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-black text-xl uppercase tracking-tighter text-white">Cafe Rides Calendar</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Join our squad for upcoming highway rides, coffee runs, and multi-state touring expeditions.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('rides')}
              className="mt-6 font-mono text-xs font-bold text-white flex items-center gap-1 hover:gap-2 transition-all uppercase"
            >
              <span>View Ride Dates</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>


      {/* EXPEDITION PROMO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111111] border-2 border-[#D92323] border-l-8 p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-block bg-[#D92323] text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest">
                NEXT SQUAD EXPEDITION
              </div>
              <h3 className="font-black text-3xl sm:text-5xl uppercase tracking-tighter text-white">
                SUNRISE HIGHWAY RUN TO NANDI HILLS & COFFEE SPA
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                60 KM Morning Twisties Ride • Assembly at R.A.T.S Cafe at 5:00 AM • Complimentary Breakfast for VIP Members.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2 font-mono text-xs text-gray-300">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#D92323]" /> SATURDAY, 6:00 AM</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#D92323]" /> INDIRANAGAR HQ</span>
                <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-[#D92323]" /> 34 RIDERS REGISTERED</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-end">
              <button
                onClick={() => setActiveTab('rides')}
                className="btn-red py-4 px-8 text-xs text-center"
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

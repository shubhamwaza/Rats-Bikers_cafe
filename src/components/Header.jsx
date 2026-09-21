import React, { useState, useEffect } from 'react';
import { 
  Coffee, 
  Calendar, 
  Sparkles, 
  Award, 
  ShoppingBag, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight,
  Flame,
  Radio
} from 'lucide-react';

export default function Header({ activeTab, setActiveTab, onOpenBooking, onOpenMembership }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Flame },
    { id: 'cafe', label: 'Bikers Cafe', icon: Coffee },
    { id: 'booking', label: 'Bike Spa & Booking', icon: Sparkles, badge: 'Estimator' },
    { id: 'membership', label: 'Priority VIP', icon: Award, highlight: true },
    { id: 'rides', label: 'Rides Calendar', icon: Calendar },
    { id: 'store', label: 'Gear Store', icon: ShoppingBag },
    { id: 'location', label: 'Location & Hours', icon: MapPin },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#08090C]/95 backdrop-blur-md border-b border-white/10 py-2.5 shadow-2xl' 
        : 'bg-gradient-to-b from-[#08090C]/95 to-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Mark with Official R.A.T.S Emblem */}
          <div 
            onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 p-1 border border-white/20 flame-glow-sm group-hover:scale-105 transition-transform flex items-center justify-center bg-white">
              <img 
                src="/rats-logo.png" 
                alt="R.A.T.S Riding and Touring Squad Official Emblem" 
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl tracking-widest text-white leading-none">R.A.T.S</span>
                <span className="text-[9px] font-telemetry bg-[#FF3D00]/20 text-[#FF3D00] px-1.5 py-0.5 rounded font-bold border border-[#FF3D00]/40 uppercase">
                  HQ
                </span>
              </div>
              <p className="text-[9px] font-telemetry text-slate-400 tracking-widest uppercase font-semibold">
                Riding & Touring Squad
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#11141F]/80 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#FF3D00] to-[#FF7700] text-white shadow-lg flame-glow-sm' 
                      : item.highlight 
                        ? 'text-[#FFB800] hover:bg-white/5 hover:text-white' 
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : item.highlight ? 'text-[#FFB800]' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="bg-[#FF3D00] text-white text-[9px] px-1.5 py-0.2 rounded-full font-bold uppercase tracking-wider animate-pulse">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live Telemetry Pill */}
            <div className="hidden lg:flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-full text-xs font-telemetry text-emerald-400">
              <Radio className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
              <span>LIVE • CAFE OPEN</span>
            </div>

            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 bg-[#FF3D00] hover:bg-[#D63300] text-white text-xs font-extrabold px-4 py-2.5 rounded-xl transition-all duration-200 shadow-md hover:scale-105 active:scale-95 flame-glow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Spa</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-[#11141F] border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF3D00]" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0C12] border-b border-white/10 px-4 py-6 space-y-3 animate-fade-in shadow-2xl">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-xs font-telemetry text-emerald-400">Cafe Open • Mon-Sun</span>
            </div>
            <span className="text-xs text-slate-400 font-telemetry">Indiranagar HQ</span>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#FF3D00] to-[#FF7700] text-white' 
                      : 'bg-[#11141F] text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-[#FF3D00]'}`} />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              );
            })}
          </div>

          <div className="pt-3 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#FF3D00] text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Book Bike Spa
            </button>
            <button
              onClick={() => {
                onOpenMembership();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-[#FFB800] to-[#FF8800] text-black py-3 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2"
            >
              <Award className="w-4 h-4" />
              VIP Club
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

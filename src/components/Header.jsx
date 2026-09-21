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
  Wrench,
  Gauge
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
    { id: 'home', label: 'Pit Stop', icon: Flame },
    { id: 'cafe', label: 'Bikers Cafe', icon: Coffee },
    { id: 'booking', label: 'Bay Booking', icon: Sparkles, badge: 'ESTIMATOR' },
    { id: 'membership', label: 'VIP Club', icon: Award, highlight: true },
    { id: 'rides', label: 'Rides Calendar', icon: Calendar },
    { id: 'store', label: 'Gear Store', icon: ShoppingBag },
    { id: 'location', label: 'Location & Hours', icon: MapPin },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#111111]/95 border-b-2 border-[#4A4C50] py-2.5 shadow-2xl backdrop-blur-md' 
        : 'bg-gradient-to-b from-[#111111]/95 to-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Mark: Official Circular R.A.T.S Tire Emblem */}
          <div 
            onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full bg-white p-1 border-2 border-[#4A4C50] group-hover:border-[#D92323] transition-colors flex items-center justify-center shadow-lg">
              <img 
                src="/rats-logo.png" 
                alt="R.A.T.S Riding & Touring Squad Official Emblem" 
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl tracking-wider text-white leading-none">R.A.T.S</span>
                <span className="text-[9px] font-mono bg-[#D92323] text-white px-1.5 py-0.5 font-bold uppercase tracking-widest">
                  GARAGE OS
                </span>
              </div>
              <p className="text-[9px] font-mono text-[#8B5A2B] tracking-widest uppercase font-bold">
                Riding & Touring Squad
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#111111] p-1.5 border-2 border-[#4A4C50]">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                    isActive 
                      ? 'bg-[#FF5E00] text-black border-2 border-[#FF5E00]' 
                      : item.highlight 
                        ? 'text-[#FF5E00] hover:bg-[#1A1A1A] hover:text-white' 
                        : 'text-slate-300 hover:text-white hover:bg-[#1A1A1A]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-black' : item.highlight ? 'text-[#FF5E00]' : 'text-[#4A4C50]'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="bg-[#D92323] text-white text-[9px] px-1.5 py-0.2 font-mono font-bold uppercase tracking-wider animate-pulse">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live Terminal Pill */}
            <div className="hidden lg:flex items-center gap-2 bg-[#1A1A1A] border border-[#4A4C50] px-3 py-1.5 font-mono text-xs text-[#FF5E00]">
              <span className="w-2 h-2 rounded-full bg-[#FF5E00] animate-ping"></span>
              <span>BAY ACTIVE // CAFE OPEN</span>
            </div>

            <button
              onClick={onOpenBooking}
              className="btn-red px-5 py-2.5 text-xs font-black flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Bay</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 bg-[#111111] border-2 border-[#4A4C50] text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#D92323]" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111111] border-b-2 border-[#4A4C50] px-4 py-6 space-y-3 animate-fade-in shadow-2xl">
          <div className="flex items-center justify-between pb-3 border-b border-[#4A4C50] mb-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-[#FF5E00]">
              <span className="w-2 h-2 rounded-full bg-[#FF5E00] animate-ping"></span>
              <span>CAFE OPEN • MON-SUN</span>
            </div>
            <span className="text-[#4A4C50]">GARAGE OS v1.0</span>
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
                  className={`flex items-center justify-between p-3 text-sm font-black uppercase tracking-wider transition-all border-l-4 ${
                    isActive 
                      ? 'bg-[#1A1A1A] border-[#FF5E00] text-white' 
                      : 'bg-[#1A1A1A]/60 border-transparent text-slate-300 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${isActive ? 'text-[#FF5E00]' : 'text-[#D92323]'}`} />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#4A4C50]" />
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
              className="btn-red w-full py-3 text-xs flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Book Bay
            </button>
            <button
              onClick={() => {
                onOpenMembership();
                setMobileMenuOpen(false);
              }}
              className="btn-orange w-full py-3 text-xs flex items-center justify-center gap-2"
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

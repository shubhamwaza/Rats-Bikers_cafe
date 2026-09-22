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
  Flame
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
    { id: 'booking', label: 'Bay Booking', icon: Sparkles, badge: 'Estimator' },
    { id: 'membership', label: 'VIP Club', icon: Award, highlight: true },
    { id: 'rides', label: 'Rides', icon: Calendar },
    { id: 'store', label: 'Gear Store', icon: ShoppingBag },
    { id: 'location', label: 'Location', icon: MapPin },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 pb-2 pointer-events-none">
      <div className={`max-w-7xl mx-auto pointer-events-auto transition-all duration-300 rounded-full ${
        isScrolled 
          ? 'bg-black/75 backdrop-blur-2xl border border-white/15 shadow-2xl shadow-black/80 py-2 px-5' 
          : 'bg-black/40 backdrop-blur-xl border border-white/10 py-2.5 px-6'
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Logo Mark: Official Circular R.A.T.S Tire Emblem */}
          <div 
            onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 p-0.5 border border-white/20 group-hover:border-orange-500/80 transition-all duration-300 flex items-center justify-center shadow-lg backdrop-blur-md">
              <img 
                src="/rats-logo.png" 
                alt="R.A.T.S Official Tire Emblem" 
                className="w-full h-full object-contain rounded-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-lg tracking-tight text-white leading-none group-hover:text-orange-400 transition-colors">
                  R.A.T.S
                </span>
                <span className="text-[10px] font-mono bg-gradient-to-r from-orange-500 to-rose-600 text-white px-2 py-0.5 rounded-full font-semibold tracking-wide">
                  SQUAD
                </span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wider font-medium">
                Riding & Touring Squad
              </p>
            </div>
          </div>

          {/* Desktop Navigation Glass Capsule */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.04] p-1.5 rounded-full border border-white/10 backdrop-blur-lg">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 active:scale-95 ${
                    isActive 
                      ? 'bg-white/15 text-white shadow-sm border border-white/20' 
                      : item.highlight 
                        ? 'text-orange-400 hover:text-white hover:bg-white/10' 
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-orange-400' : item.highlight ? 'text-orange-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="bg-gradient-to-r from-orange-500 to-rose-600 text-white text-[9px] px-1.5 py-0.2 rounded-full font-mono font-semibold tracking-tight">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Active Status Dot */}
            <div className="hidden xl:flex items-center gap-2 bg-white/[0.05] border border-white/10 px-3 py-1.5 rounded-full text-xs text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-sm shadow-emerald-500"></span>
              <span>Bay Open • Cafe Ready</span>
            </div>

            <button
              onClick={onOpenBooking}
              className="apple-btn-primary px-5 py-2 text-xs font-semibold flex items-center gap-2 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book Bay</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-all active:scale-95"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-orange-400" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Glass Modal Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto max-w-7xl mx-auto mt-2 bg-black/90 border border-white/15 rounded-3xl p-5 space-y-3 backdrop-blur-2xl shadow-2xl animate-apple-modal">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
            <div className="flex items-center gap-2 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Cafe & Spa Open Daily</span>
            </div>
            <span className="text-slate-400 font-mono text-[10px]">R.A.T.S v2.0</span>
          </div>

          <div className="grid grid-cols-1 gap-1.5">
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
                  className={`flex items-center justify-between p-3 rounded-2xl text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-white/15 text-white border border-white/20' 
                      : 'bg-white/[0.04] text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-orange-400' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              );
            })}
          </div>

          <div className="pt-2 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="apple-btn-primary w-full py-2.5 text-xs flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Book Bay
            </button>
            <button
              onClick={() => {
                onOpenMembership();
                setMobileMenuOpen(false);
              }}
              className="apple-btn-secondary w-full py-2.5 text-xs flex items-center justify-center gap-2"
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


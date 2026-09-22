import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUpRight,
  Heart,
  Share2,
  Globe,
  MessageCircle,
  ArrowUp
} from 'lucide-react';

export default function Footer({ setActiveTab, onOpenBooking, onOpenMembership }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-12 text-slate-400 relative overflow-hidden">
      {/* Soft Ambient Light Leak */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-orange-500/5 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 p-0.5 border border-white/20 shadow-lg shrink-0 flex items-center justify-center backdrop-blur-md">
                <img 
                  src="/rats-logo.png" 
                  alt="R.A.T.S Riding & Touring Squad Logo" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-white tracking-tight leading-none">R.A.T.S</h3>
                <p className="text-[10px] text-slate-400 font-mono mt-0.5">Riding & Touring Squad</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              A high-energy community of road riders, touring enthusiasts, custom bike lovers, and coffee connoisseurs. You live just once — ride the world!
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a 
                href="https://www.facebook.com/ridingandtouringsquad" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-all active:scale-95"
                title="Facebook"
              >
                <Share2 className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://www.instagram.com/r.a.t.s_ridingandtouringsquad" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-all active:scale-95"
                title="Instagram"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-all active:scale-95"
                title="WhatsApp Group"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-xs text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <button onClick={() => setActiveTab('home')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" /> Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('cafe')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" /> R.A.T.S Bikers Cafe Menu
                </button>
              </li>
              <li>
                <button onClick={onOpenBooking} className="hover:text-orange-400 transition-colors flex items-center gap-1.5 font-semibold text-orange-400">
                  <ArrowUpRight className="w-3.5 h-3.5" /> Book Bike Spa & Detailing
                </button>
              </li>
              <li>
                <button onClick={onOpenMembership} className="hover:text-amber-400 transition-colors flex items-center gap-1.5 font-semibold text-amber-400">
                  <ArrowUpRight className="w-3.5 h-3.5" /> VIP Priority Membership
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('rides')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" /> Upcoming Cafe Rides Calendar
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('store')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" /> Accessories & Gear Store
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="space-y-4">
            <h4 className="font-semibold text-xs text-white uppercase tracking-wider">R.A.T.S Clubhouse & Spa</h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>100 Ft Rd, Indiranagar, Bengaluru, Karnataka 560038</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="font-mono">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="font-mono">ride@rats.com</span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-xs text-white uppercase tracking-wider">Operating Timings</h4>
            <div className="glass-card p-4 space-y-2.5 text-xs font-mono">
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-slate-400">Mon - Fri:</span>
                <span className="font-semibold text-white">07:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-slate-400">Sat - Sun:</span>
                <span className="font-semibold text-orange-400">05:00 AM - Midnight</span>
              </div>
              <div className="flex justify-between items-center text-amber-400">
                <span>Bike Spa:</span>
                <span className="font-semibold">08:00 AM - 08:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} R.A.T.S Riding & Touring Squad. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-400">
              Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for riders
            </span>
            <button
              onClick={scrollToTop}
              className="glass-pill px-3 py-1.5 text-xs text-slate-300 hover:text-white flex items-center gap-1 transition-all active:scale-95"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}


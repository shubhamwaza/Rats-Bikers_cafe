import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUpRight,
  ShieldCheck,
  Heart,
  Share2,
  Globe,
  MessageCircle
} from 'lucide-react';

export default function Footer({ setActiveTab, onOpenBooking, onOpenMembership }) {
  return (
    <footer className="bg-[#07080B] border-t border-white/10 pt-16 pb-12 text-slate-400 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#FF3D00]/10 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white p-1 border border-white/20 shadow-lg shrink-0">
                <img 
                  src="/rats-logo.png" 
                  alt="R.A.T.S Riding & Touring Squad Logo" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl text-white tracking-widest leading-none">R.A.T.S</h3>
                <p className="text-[9px] font-telemetry text-slate-400 uppercase tracking-widest">Riding & Touring Squad</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              A high-energy community of road riders, touring enthusiasts, custom bike lovers, and coffee connoisseurs. You live just once — ride the world!
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.facebook.com/ridingandtouringsquad" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#11141F] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#FF3D00] hover:border-[#FF3D00]/50 transition-colors"
                title="Facebook"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/r.a.t.s_ridingandtouringsquad" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#11141F] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#FF3D00] hover:border-[#FF3D00]/50 transition-colors"
                title="Instagram"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg bg-[#11141F] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#FF3D00] hover:border-[#FF3D00]/50 transition-colors"
                title="WhatsApp Group"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <button onClick={() => setActiveTab('home')} className="hover:text-[#FF3D00] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" /> Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('cafe')} className="hover:text-[#FF3D00] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" /> R.A.T.S Bikers Cafe Menu
                </button>
              </li>
              <li>
                <button onClick={onOpenBooking} className="hover:text-[#FF3D00] transition-colors flex items-center gap-1.5 font-semibold text-[#FF3D00]">
                  <ArrowUpRight className="w-3.5 h-3.5" /> Book Bike Spa & Detailing
                </button>
              </li>
              <li>
                <button onClick={onOpenMembership} className="hover:text-[#FFB800] transition-colors flex items-center gap-1.5 font-semibold text-[#FFB800]">
                  <ArrowUpRight className="w-3.5 h-3.5" /> VIP Priority Membership
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('rides')} className="hover:text-[#FF3D00] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" /> Upcoming Cafe Rides Calendar
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('store')} className="hover:text-[#FF3D00] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" /> Accessories & Gear Store
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">R.A.T.S Clubhouse & Spa</h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF3D00] shrink-0 mt-0.5" />
                <span>R.A.T.S Bikers Cafe, 100 Ft Rd, Indiranagar, Bengaluru, Karnataka 560038</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF3D00] shrink-0" />
                <span>+91 98765 43210 / +91 80 4123 9900</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF3D00] shrink-0" />
                <span>ride@rats-ridingandtouringsquad.com</span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider font-telemetry">Operating Timings</h4>
            <div className="bg-[#11141F]/90 p-4 rounded-xl border border-white/10 space-y-2.5 text-xs font-telemetry">
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-slate-300">Mon - Fri:</span>
                <span className="font-semibold text-white">07:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-slate-300">Sat - Sun (Breakfast Runs):</span>
                <span className="font-semibold text-[#FF3D00]">05:00 AM - Midnight</span>
              </div>
              <div className="flex justify-between items-center text-[#FFB800]">
                <span>Bike Spa Detailing:</span>
                <span className="font-semibold">08:00 AM - 08:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 font-telemetry">
          <p>© {new Date().getFullYear()} R.A.T.S Riding & Touring Squad. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              Built for Bikers with <Heart className="w-3.5 h-3.5 text-[#FF3D00] fill-[#FF3D00]" />
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

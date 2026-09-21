import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  Navigation,
  Compass,
  Bike
} from 'lucide-react';

export default function LocationTimings() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactData, setContactData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 rounded-full text-xs font-bold text-emerald-400 uppercase tracking-wider">
          <Clock className="w-4 h-4" />
          <span>Clubhouse Timings & Directions</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
          Location & <span className="text-gradient-orange">Operating Hours</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          Visit the R.A.T.S Clubhouse in Indiranagar. Open early for sunrise riders and late for evening lounge coffee chats.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Timings & Contact Info */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Operating Hours Box */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#FF5500]" />
                <h3 className="font-bold text-white text-base">Clubhouse Operating Schedule</h3>
              </div>
              <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                Open Now
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-slate-300 font-semibold">Monday - Friday:</span>
                <span className="font-mono text-white font-bold">07:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-slate-300 font-semibold">Saturday - Sunday (Breakfast Runs):</span>
                <span className="font-mono text-[#FF5500] font-extrabold">05:00 AM - Midnight</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-300 font-semibold">Bike Spa & Detailing Bay:</span>
                <span className="font-mono text-[#FFB800] font-bold">08:00 AM - 08:00 PM</span>
              </div>
            </div>
          </div>

          {/* Location & Map Card */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#FF5500]" />
              <h3 className="font-bold text-white text-base">Physical Address & Map</h3>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              R.A.T.S Bikers Cafe & Detailing Spa <br />
              100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038
            </p>

            {/* Simulated Map Visual */}
            <div className="relative rounded-2xl overflow-hidden h-48 bg-slate-900 border border-white/10 flex items-center justify-center text-center p-4">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0F111A] via-[#161A28] to-[#0A0B0E] opacity-90"></div>
              <div className="relative z-10 space-y-2">
                <Navigation className="w-8 h-8 text-[#FF5500] mx-auto animate-bounce" />
                <p className="text-xs font-bold text-white">Interactive Clubhouse Map Preview</p>
                <a
                  href="https://maps.google.com/?q=Indiranagar+Bengaluru"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-[#FF5500] text-white text-xs font-bold px-4 py-2 rounded-xl orange-glow-sm"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-[#FF5500]" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-[#FF5500]" />
                <span>ride@rats.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="lg:col-span-6">
          <div className="glass-panel-glow p-6 sm:p-8 rounded-3xl space-y-6">
            <div className="space-y-1">
              <h3 className="font-bold text-white text-xl">Get in Touch with Squad HQ</h3>
              <p className="text-xs text-slate-400">Have questions about rides, custom spa detailing, or membership?</p>
            </div>

            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={contactData.name}
                    onChange={(e) => setContactData({...contactData, name: e.target.value})}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF5500]"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={contactData.phone}
                    onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF5500]"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Message / Inquiry *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you need..."
                    value={contactData.message}
                    onChange={(e) => setContactData({...contactData, message: e.target.value})}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF5500]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FF5500] hover:bg-[#E04B00] text-white font-extrabold text-xs py-4 rounded-xl shadow-xl orange-glow flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Squad Inquiry
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4 animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold text-white">Message Received!</h4>
                <p className="text-xs text-slate-300">
                  Thanks {contactData.name}, our squad captain will get back to you shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="bg-slate-900 text-white text-xs font-bold px-6 py-2.5 rounded-xl border border-white/10"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}

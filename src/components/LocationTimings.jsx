import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  Navigation
} from 'lucide-react';

export default function LocationTimings() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactData, setContactData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 min-h-screen">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 text-xs font-mono text-emerald-400">
          <Clock className="w-4 h-4 text-emerald-400" />
          <span>Clubhouse Timings & Directions</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Location & <span className="bg-gradient-to-r from-orange-400 to-rose-500 bg-clip-text text-transparent">Operating Hours</span>
        </h1>
        <p className="text-slate-400 text-sm">
          Visit the R.A.T.S Clubhouse in Indiranagar. Open early for sunrise riders and late for evening lounge coffee chats.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Timings & Contact Info */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Operating Hours Box */}
          <div className="glass-panel p-6 sm:p-8 space-y-4 border-white/15">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-400" />
                <h3 className="font-bold text-white text-base">Clubhouse Operating Schedule</h3>
              </div>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 glass-pill px-3 py-1 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Open Now
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-slate-300 font-medium">Monday - Friday:</span>
                <span className="font-mono text-white font-semibold">07:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-slate-300 font-medium">Saturday - Sunday (Breakfast Runs):</span>
                <span className="font-mono text-orange-400 font-bold">05:00 AM - Midnight</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-300 font-medium">Bike Spa & Detailing Bay:</span>
                <span className="font-mono text-amber-400 font-semibold">08:00 AM - 08:00 PM</span>
              </div>
            </div>
          </div>

          {/* Location & Map Card */}
          <div className="glass-panel p-6 sm:p-8 space-y-4 border-white/15">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-orange-400" />
              <h3 className="font-bold text-white text-base">Physical Address & Map</h3>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              R.A.T.S Bikers Cafe & Detailing Spa <br />
              100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038
            </p>

            {/* Simulated Map Visual */}
            <div className="relative rounded-2xl overflow-hidden h-48 bg-black/60 border border-white/10 flex items-center justify-center text-center p-4">
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/80 to-transparent"></div>
              <div className="relative z-10 space-y-2">
                <Navigation className="w-8 h-8 text-orange-400 mx-auto animate-bounce" />
                <p className="text-xs font-bold text-white">Interactive Clubhouse Map Preview</p>
                <a
                  href="https://maps.google.com/?q=Indiranagar+Bengaluru"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block apple-btn-primary text-xs font-semibold px-4 py-2 active:scale-95"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-orange-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-orange-400" />
                <span>ride@rats.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="lg:col-span-6">
          <div className="glass-panel p-6 sm:p-8 space-y-6 border-white/15">
            <div className="space-y-1">
              <h3 className="font-bold text-white text-xl">Get in Touch with Squad HQ</h3>
              <p className="text-xs text-slate-400">Have questions about rides, custom spa detailing, or membership?</p>
            </div>

            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={contactData.name}
                    onChange={(e) => setContactData({...contactData, name: e.target.value})}
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={contactData.phone}
                    onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Message / Inquiry *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you need..."
                    value={contactData.message}
                    onChange={(e) => setContactData({...contactData, message: e.target.value})}
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <button
                  type="submit"
                  className="apple-btn-primary w-full text-xs font-semibold py-3.5 flex items-center justify-center gap-2 active:scale-95"
                >
                  <Send className="w-4 h-4" /> Send Squad Inquiry
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4 animate-apple-modal">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold text-white">Message Received!</h4>
                <p className="text-xs text-slate-300">
                  Thanks {contactData.name}, our squad captain will get back to you shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="apple-btn-secondary text-xs font-medium px-6 py-2.5"
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


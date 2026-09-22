import React, { useState } from 'react';
import { 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Printer, 
  Check,
  Gauge,
  Droplet
} from 'lucide-react';

export default function AppointmentBooking() {
  const bikeTypes = [
    { id: 'commuter', name: 'Commuter / Street', engine: '100 - 200cc', multiplier: 1.0, icon: '🛵' },
    { id: 'cruiser', name: 'Cruiser / Classic', engine: '250 - 650cc', multiplier: 1.15, icon: '🏍️' },
    { id: 'adv', name: 'Adventure / ADV', engine: '650 - 1250cc', multiplier: 1.25, icon: '🏔️' },
    { id: 'superbike', name: 'Superbike / Track', engine: '600 - 1000cc+', multiplier: 1.4, icon: '⚡' },
  ];

  const serviceCatalog = [
    { id: 'foam_wash', name: 'Hydro Foam Wash & Polish', category: 'Cleaning', price: 499, duration: 30, desc: 'High-pressure foam bath, wheel degreasing, and micro-fiber hand polish.' },
    { id: 'ceramic', name: 'Ceramic Pro Coating Shield', category: 'Detailing', price: 1999, duration: 90, desc: 'Hydrophobic nano-ceramic coat protecting paint & chrome from scratches.' },
    { id: 'chain_lube', name: 'Chain Cleaning & Lube', category: 'Maintenance', price: 299, duration: 20, desc: 'Kerosene chain bath, Motul lube spray, and tension adjustment.' },
    { id: 'engine_oil', name: 'Synthetic Oil & Filter Service', category: 'Maintenance', price: 1499, duration: 45, desc: 'Motul 7100 10W50 synthetic oil flush and OEM oil filter replacement.' },
    { id: 'brake_service', name: 'Brake Pad & Caliper Spa', category: 'Maintenance', price: 399, duration: 25, desc: 'Brake pad de-dusting, caliper pin greasing, and fluid top-up check.' },
    { id: 'helmet_spa', name: 'Rider Helmet Sanitization Spa', category: 'Add-on', price: 199, duration: 15, desc: 'UV-C bacterial sterilizer, interior padding foam wash & visor polish.' },
    { id: 'nitrox', name: 'Nitrox Tire Calibration', category: 'Add-on', price: 99, duration: 10, desc: 'Purged pure nitrogen inflation for cooler running & stable PSI.' }
  ];

  const timeSlots = [
    '08:00 AM - 09:30 AM',
    '10:00 AM - 11:30 AM',
    '12:00 PM - 01:30 PM',
    '02:30 PM - 04:00 PM',
    '04:30 PM - 06:00 PM',
    '06:30 PM - 08:00 PM'
  ];

  const [selectedBikeType, setSelectedBikeType] = useState('cruiser');
  const [selectedServices, setSelectedServices] = useState(['foam_wash', 'chain_lube']);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedSlot, setSelectedSlot] = useState(timeSlots[1]);
  
  const [riderInfo, setRiderInfo] = useState({
    fullName: '',
    phone: '',
    email: '',
    bikeModel: '',
    regNumber: ''
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const currentBike = bikeTypes.find(b => b.id === selectedBikeType);
  
  const calculateTotal = () => {
    const rawServicesSum = selectedServices.reduce((sum, serviceId) => {
      const s = serviceCatalog.find(item => item.id === serviceId);
      return sum + (s ? s.price : 0);
    }, 0);

    return Math.round(rawServicesSum * (currentBike ? currentBike.multiplier : 1));
  };

  const calculateDuration = () => {
    return selectedServices.reduce((sum, serviceId) => {
      const s = serviceCatalog.find(item => item.id === serviceId);
      return sum + (s ? s.duration : 0);
    }, 0);
  };

  const toggleService = (id) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length === 1) return;
      setSelectedServices(selectedServices.filter(s => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!riderInfo.fullName || !riderInfo.phone || !riderInfo.bikeModel) {
      alert('Please fill in your name, phone number, and bike model.');
      return;
    }

    const ref = 'WO-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setBookingConfirmed(true);
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 min-h-screen">
      
      {/* Header */}
      <div className="glass-panel p-8 sm:p-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <div className="inline-flex items-center gap-2 glass-pill px-3 py-1 text-xs text-orange-400 font-mono mb-2">
            <Droplet className="w-3.5 h-3.5 text-orange-400" />
            <span>Interactive Estimator</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">Garage Bay Booking & Diagnostics</h1>
          <p className="text-slate-400 text-sm mt-1">Select your motorcycle class, customized spa services, and preferred time slot.</p>
        </div>
        <div className="glass-pill px-4 py-2 text-xs text-emerald-400 font-mono flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Bays Available Today</span>
        </div>
      </div>

      {!bookingConfirmed ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Service Selection */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Select Bike Category */}
            <div className="glass-panel p-6 space-y-4">
              <div className="flex items-center gap-3 text-white font-bold text-lg">
                <span className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-mono font-bold">1</span>
                <span>Select Vehicle Class</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {bikeTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedBikeType(type.id)}
                    className={`p-4 rounded-2xl border text-left transition-all active:scale-95 ${
                      selectedBikeType === type.id
                        ? 'bg-white/15 border-orange-500/80 text-white shadow-lg shadow-orange-500/10'
                        : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="text-2xl mb-1">{type.icon}</div>
                    <div className="font-bold text-xs text-white">{type.name}</div>
                    <div className="text-[10px] text-slate-400">{type.engine}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Services */}
            <div className="glass-panel p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-white font-bold text-lg">
                  <span className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-mono font-bold">2</span>
                  <span>Select Garage Services</span>
                </div>
                <span className="font-mono text-xs text-orange-400 font-semibold">{selectedServices.length} SELECTED</span>
              </div>

              <div className="space-y-3">
                {serviceCatalog.map((service) => {
                  const isChecked = selectedServices.includes(service.id);
                  const scaledPrice = Math.round(service.price * currentBike.multiplier);
                  return (
                    <div
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start justify-between gap-4 active:scale-[0.99] ${
                        isChecked 
                          ? 'bg-white/10 border-orange-500/60 shadow-md' 
                          : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-lg mt-0.5 flex items-center justify-center border transition-all ${
                          isChecked ? 'bg-orange-500 border-orange-500 text-white font-bold' : 'border-white/20 bg-white/5'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-white">{service.name}</span>
                            <span className="font-mono text-[9px] bg-white/10 text-orange-400 px-2 py-0.5 rounded-full font-medium">
                              {service.category}
                            </span>
                          </div>
                          <p className="text-xs text-slate-300 leading-snug">{service.desc}</p>
                          <div className="font-mono text-[11px] text-slate-400 flex items-center gap-2 pt-1">
                            <span className="flex items-center gap-1 text-orange-400"><Clock className="w-3 h-3" /> ~{service.duration} mins</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right shrink-0 font-mono">
                        <span className="font-extrabold text-sm text-white">₹{scaledPrice}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Date & Slot */}
            <div className="glass-panel p-6 space-y-4">
              <div className="flex items-center gap-3 text-white font-bold text-lg">
                <span className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-mono font-bold">3</span>
                <span>Select Appointment Date & Time</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-medium text-slate-300 mb-2">Service Date</label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white font-semibold focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-300 mb-2">Available Slot</label>
                  <select
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white font-semibold focus:outline-none focus:border-orange-500"
                  >
                    {timeSlots.map((slot, idx) => (
                      <option key={idx} value={slot} className="bg-black text-white">{slot}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

          </div>


          {/* RIGHT COLUMN: Diagnostic Work Order Summary */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            
            <div className="glass-panel p-6 space-y-6 border-orange-500/30">
              
              {/* Header */}
              <div className="border-b border-white/10 pb-3 flex justify-between items-center">
                <div className="text-orange-400 font-mono font-semibold text-xs">WORK ORDER ESTIMATE</div>
                <span className="text-[10px] glass-pill px-2.5 py-0.5 text-white font-mono">LIVE TOTAL</span>
              </div>

              {/* Selected List */}
              <div className="space-y-2 text-xs border-b border-white/10 pb-4 max-h-40 overflow-y-auto">
                {selectedServices.map(id => {
                  const s = serviceCatalog.find(item => item.id === id);
                  if (!s) return null;
                  const price = Math.round(s.price * currentBike.multiplier);
                  return (
                    <div key={id} className="flex justify-between text-slate-300">
                      <span>{s.name}</span>
                      <span className="font-semibold text-white">₹{price}</span>
                    </div>
                  );
                })}
              </div>

              {/* Work Order Breakdown */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>CLASS MULTIPLIER:</span>
                  <span className="text-white font-semibold">{currentBike.name} ({currentBike.multiplier}x)</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>LABOR TIME:</span>
                  <span className="text-orange-400 font-semibold font-mono">~{calculateDuration()} MINS</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-white/10">
                  <span className="font-bold text-white text-sm">TOTAL ESTIMATED:</span>
                  <span className="text-3xl font-black text-white bg-gradient-to-r from-orange-400 to-rose-500 bg-clip-text text-transparent font-mono">₹{calculateTotal()}</span>
                </div>
              </div>

              {/* Rider Form */}
              <form onSubmit={handleBookingSubmit} className="space-y-3 pt-4 border-t border-white/10">
                <div className="text-xs font-semibold text-slate-400">RIDER CONTACT DETAILS</div>
                
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  value={riderInfo.fullName}
                  onChange={(e) => setRiderInfo({...riderInfo, fullName: e.target.value})}
                  className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
                />

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    value={riderInfo.phone}
                    onChange={(e) => setRiderInfo({...riderInfo, phone: e.target.value})}
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
                  />
                  <input
                    type="text"
                    placeholder="Bike Model *"
                    required
                    value={riderInfo.bikeModel}
                    onChange={(e) => setRiderInfo({...riderInfo, bikeModel: e.target.value})}
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <button
                  type="submit"
                  className="apple-btn-primary w-full py-3.5 text-xs font-semibold flex items-center justify-center gap-2 mt-4 active:scale-95"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>SCHEDULE SERVICE BAY</span>
                </button>
              </form>

            </div>

          </div>

        </div>
      ) : (
        /* CONFIRMATION WORK ORDER PASS */
        <div className="max-w-2xl mx-auto glass-panel p-8 space-y-6 text-center animate-apple-modal">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-rose-600 rounded-full text-white flex items-center justify-center mx-auto shadow-lg shadow-orange-500/30">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">WORK ORDER CREATED</span>
            <h2 className="text-3xl font-extrabold text-white">Service Bay Reserved</h2>
          </div>

          <div className="glass-card p-6 text-left space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-white/10">
              <div>
                <p className="text-[10px] text-slate-400 font-mono">WORK ORDER ID</p>
                <p className="font-extrabold text-lg text-orange-400 font-mono">{bookingRef}</p>
              </div>
              <span className="glass-pill px-3 py-1 text-xs text-emerald-400 font-semibold">
                Confirmed
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <p className="text-slate-400">RIDER:</p>
                <p className="font-semibold text-white">{riderInfo.fullName}</p>
              </div>
              <div>
                <p className="text-slate-400">VEHICLE:</p>
                <p className="font-semibold text-white">{riderInfo.bikeModel}</p>
              </div>
              <div>
                <p className="text-slate-400">SLOT:</p>
                <p className="font-semibold text-white">{selectedDate} @ {selectedSlot}</p>
              </div>
              <div>
                <p className="text-slate-400">TOTAL COST:</p>
                <p className="font-extrabold text-lg text-white font-mono">₹{calculateTotal()}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => window.print()}
              className="apple-btn-secondary flex-1 py-3 text-xs flex items-center justify-center gap-2"
            >
              <Printer className="w-4 h-4" /> Print Work Order
            </button>
            <button
              onClick={() => setBookingConfirmed(false)}
              className="apple-btn-primary flex-1 py-3 text-xs"
            >
              Book Another Bay
            </button>
          </div>

        </div>
      )}

    </div>
  );
}

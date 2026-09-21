import React, { useState } from 'react';
import { 
  Sparkles, 
  Bike, 
  Calendar as CalendarIcon, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  DollarSign, 
  ChevronRight, 
  Download, 
  Printer, 
  AlertCircle,
  Wrench,
  Check,
  User,
  Phone,
  Mail,
  FileText
} from 'lucide-react';

export default function AppointmentBooking() {
  // Vehicle Types
  const bikeTypes = [
    { id: 'commuter', name: 'Commuter / Street', engine: '100 - 200cc', multiplier: 1.0, icon: '🛵' },
    { id: 'cruiser', name: 'Cruiser / Classic', engine: '250 - 650cc', multiplier: 1.15, icon: '🏍️' },
    { id: 'adv', name: 'Adventure / ADV', engine: '650 - 1250cc', multiplier: 1.25, icon: '🏔️' },
    { id: 'superbike', name: 'Superbike / Track', engine: '600 - 1000cc+', multiplier: 1.4, icon: '⚡' },
  ];

  // Service Catalog
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

  // Form State
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

  // Calculations
  const currentBike = bikeTypes.find(b => b.id === selectedBikeType);
  
  const calculateTotal = () => {
    const rawServicesSum = selectedServices.reduce((sum, serviceId) => {
      const s = serviceCatalog.find(item => item.id === serviceId);
      return sum + (s ? s.price : 0);
    }, 0);

    const vehicleScaledSum = Math.round(rawServicesSum * (currentBike ? currentBike.multiplier : 1));
    return vehicleScaledSum;
  };

  const calculateDuration = () => {
    return selectedServices.reduce((sum, serviceId) => {
      const s = serviceCatalog.find(item => item.id === serviceId);
      return sum + (s ? s.duration : 0);
    }, 0);
  };

  const toggleService = (id) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length === 1) return; // Keep at least one
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

    const ref = 'RATS-SPA-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setBookingConfirmed(true);
  };

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 bg-[#FF5500]/10 border border-[#FF5500]/30 px-4 py-1.5 rounded-full text-xs font-bold text-[#FF5500] uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Automotive Detailing Spa</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
          Online Bike Spa <span className="text-gradient-orange">Appointment & Cost Estimator</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          Select your bike type and service package below. Get a real-time instant price estimate before choosing your preferred date & time slot!
        </p>
      </div>

      {!bookingConfirmed ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Service Selection */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Select Bike Category */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <span className="w-7 h-7 rounded-full bg-[#FF5500] text-white flex items-center justify-center text-xs">1</span>
                <span>Select Bike Category</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {bikeTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedBikeType(type.id)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedBikeType === type.id
                        ? 'bg-[#FF5500]/15 border-[#FF5500] orange-glow-sm'
                        : 'bg-slate-900/60 border-white/10 hover:border-white/30'
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
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white font-bold text-base">
                  <span className="w-7 h-7 rounded-full bg-[#FF5500] text-white flex items-center justify-center text-xs">2</span>
                  <span>Select Spa Services Checklist</span>
                </div>
                <span className="text-xs text-[#FF5500] font-semibold">{selectedServices.length} selected</span>
              </div>

              <div className="space-y-3">
                {serviceCatalog.map((service) => {
                  const isChecked = selectedServices.includes(service.id);
                  const scaledPrice = Math.round(service.price * currentBike.multiplier);
                  return (
                    <div
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start justify-between gap-4 ${
                        isChecked 
                          ? 'bg-slate-800/80 border-[#FF5500]/60' 
                          : 'bg-slate-900/40 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded mt-0.5 flex items-center justify-center transition-colors ${
                          isChecked ? 'bg-[#FF5500] text-white' : 'border border-slate-600 bg-slate-900'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-white">{service.name}</span>
                            <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded uppercase font-semibold">
                              {service.category}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 leading-snug">{service.desc}</p>
                          <div className="text-[11px] text-slate-400 flex items-center gap-2 pt-1">
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#FF5500]" /> ~{service.duration} mins</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="font-extrabold text-sm text-white">₹{scaledPrice}</span>
                        {currentBike.multiplier > 1.0 && (
                          <div className="text-[9px] text-[#FF5500]">Tier Scaled</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Select Date & Time Slot */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <span className="w-7 h-7 rounded-full bg-[#FF5500] text-white flex items-center justify-center text-xs">3</span>
                <span>Select Appointment Date & Time Slot</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Service Date</label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white text-xs font-semibold focus:outline-none focus:border-[#FF5500]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Available Time Slot</label>
                  <select
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white text-xs font-semibold focus:outline-none focus:border-[#FF5500]"
                  >
                    {timeSlots.map((slot, idx) => (
                      <option key={idx} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

          </div>


          {/* RIGHT COLUMN: Live Estimate Summary & Rider Form */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            
            {/* Live Cost Calculation Card */}
            <div className="glass-panel-glow p-6 rounded-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-[#FF5500]" />
                  <h3 className="font-bold text-white text-base">Live Service Estimate</h3>
                </div>
                <span className="text-xs bg-[#FF5500]/20 text-[#FF5500] px-2.5 py-1 rounded-full font-bold">
                  Instant Calculator
                </span>
              </div>

              {/* Selected Services List */}
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {selectedServices.map(id => {
                  const s = serviceCatalog.find(item => item.id === id);
                  if (!s) return null;
                  const price = Math.round(s.price * currentBike.multiplier);
                  return (
                    <div key={id} className="flex justify-between text-xs py-1 border-b border-white/5">
                      <span className="text-slate-300">{s.name}</span>
                      <span className="font-semibold text-white">₹{price}</span>
                    </div>
                  );
                })}
              </div>

              {/* Summary Totals */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Bike Class ({currentBike.name}):</span>
                  <span>{currentBike.multiplier > 1 ? `+${Math.round((currentBike.multiplier - 1) * 100)}% Rate` : 'Standard Rate'}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Estimated Time Required:</span>
                  <span className="text-[#FF5500] font-semibold">~{calculateDuration()} Mins</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-white/10">
                  <span className="text-sm font-extrabold text-white">Total Estimated Cost:</span>
                  <span className="text-2xl font-black text-[#FF5500]">₹{calculateTotal()}</span>
                </div>
              </div>

              {/* Rider Details Form */}
              <form onSubmit={handleBookingSubmit} className="space-y-3 pt-4 border-t border-white/10">
                <h4 className="font-bold text-xs text-slate-200 uppercase tracking-wider">Rider Contact Information</h4>
                
                <div>
                  <input
                    type="text"
                    placeholder="Full Name *"
                    required
                    value={riderInfo.fullName}
                    onChange={(e) => setRiderInfo({...riderInfo, fullName: e.target.value})}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF5500]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    value={riderInfo.phone}
                    onChange={(e) => setRiderInfo({...riderInfo, phone: e.target.value})}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF5500]"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={riderInfo.email}
                    onChange={(e) => setRiderInfo({...riderInfo, email: e.target.value})}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF5500]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Bike Make & Model * (e.g. RE Himalayan)"
                    required
                    value={riderInfo.bikeModel}
                    onChange={(e) => setRiderInfo({...riderInfo, bikeModel: e.target.value})}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF5500]"
                  />
                  <input
                    type="text"
                    placeholder="Reg No (e.g. KA-03-HM-1234)"
                    value={riderInfo.regNumber}
                    onChange={(e) => setRiderInfo({...riderInfo, regNumber: e.target.value})}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF5500]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FF5500] to-[#FF7700] hover:from-[#E04B00] hover:to-[#FF5500] text-white font-extrabold text-sm py-4 rounded-xl shadow-xl orange-glow transition-all flex items-center justify-center gap-2 mt-4"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Confirm Spa Appointment Slot</span>
                </button>
              </form>

              <div className="flex items-center gap-2 text-[11px] text-slate-400 justify-center pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Pay at cafe after service completion • Free cancellation</span>
              </div>

            </div>

          </div>

        </div>
      ) : (
        /* CONFIRMATION PASS SCREEN */
        <div className="max-w-2xl mx-auto glass-panel-glow p-8 rounded-3xl space-y-6 text-center animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Appointment Confirmed!</span>
            <h2 className="text-3xl font-extrabold text-white">R.A.T.S Bike Spa Slot Reserved</h2>
            <p className="text-xs text-slate-300">
              We have reserved your slot at the R.A.T.S Clubhouse Spa Bay. Please bring your motorcycle 10 mins before your slot time.
            </p>
          </div>

          {/* Booking Pass Details Card */}
          <div className="bg-slate-900/90 border border-white/10 rounded-2xl p-6 text-left space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-white/10">
              <div>
                <p className="text-[10px] text-slate-400 uppercase">Booking Reference</p>
                <p className="font-mono font-bold text-base text-[#FF5500]">{bookingRef}</p>
              </div>
              <span className="bg-emerald-500/20 text-emerald-400 text-xs px-3 py-1 rounded-full font-bold">
                CONFIRMED
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <p className="text-slate-400">Rider Name:</p>
                <p className="font-bold text-white">{riderInfo.fullName}</p>
              </div>
              <div>
                <p className="text-slate-400">Bike Model:</p>
                <p className="font-bold text-white">{riderInfo.bikeModel} ({currentBike.name})</p>
              </div>
              <div>
                <p className="text-slate-400">Slot Date & Time:</p>
                <p className="font-bold text-white">{selectedDate} @ {selectedSlot}</p>
              </div>
              <div>
                <p className="text-slate-400">Estimated Total Cost:</p>
                <p className="font-black text-lg text-[#FF5500]">₹{calculateTotal()}</p>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 text-xs text-slate-400">
              <p className="font-semibold text-slate-300 mb-1">Selected Services:</p>
              <ul className="list-disc list-inside space-y-0.5">
                {selectedServices.map(id => {
                  const s = serviceCatalog.find(item => item.id === id);
                  return s ? <li key={id}>{s.name}</li> : null;
                })}
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => window.print()}
              className="flex-1 bg-slate-900 border border-white/20 hover:bg-slate-800 text-white font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <Printer className="w-4 h-4" /> Print Booking Receipt
            </button>
            <button
              onClick={() => {
                setBookingConfirmed(false);
                setSelectedServices(['foam_wash']);
              }}
              className="flex-1 bg-[#FF5500] hover:bg-[#E04B00] text-white font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2"
            >
              Book Another Appointment
            </button>
          </div>

        </div>
      )}

    </div>
  );
}

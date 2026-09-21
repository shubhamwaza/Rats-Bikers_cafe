import React, { useState } from 'react';
import { 
  Sparkles, 
  Bike, 
  Calendar as CalendarIcon, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight, 
  Printer, 
  Wrench,
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
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="border-b-2 border-[#4A4C50] pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white">Garage Bay Booking & Diagnostics</h1>
          <p className="text-[#FF5E00] font-mono mt-1 uppercase text-xs">// Work Order Estimator</p>
        </div>
        <div className="font-mono text-xs text-gray-400 bg-[#111111] p-2 border border-[#4A4C50]">
          STATUS: BAY ACTIVE
        </div>
      </div>

      {!bookingConfirmed ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Service Selection */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Select Bike Category */}
            <div className="bg-[#111111] p-6 border-2 border-[#4A4C50] space-y-4">
              <div className="flex items-center gap-2 text-white font-black text-lg uppercase tracking-wider">
                <span className="bg-[#D92323] text-white px-2 py-0.5 text-xs font-mono font-bold">01</span>
                <span>Select Vehicle Class</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
                {bikeTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedBikeType(type.id)}
                    className={`p-4 border-2 text-left transition-all ${
                      selectedBikeType === type.id
                        ? 'bg-[#1A1A1A] border-[#FF5E00] text-white shadow-[0_0_10px_rgba(255,94,0,0.2)]'
                        : 'bg-[#1A1A1A]/40 border-[#4A4C50] text-gray-400 hover:text-white'
                    }`}
                  >
                    <div className="text-2xl mb-1">{type.icon}</div>
                    <div className="font-bold text-xs uppercase">{type.name}</div>
                    <div className="text-[10px] text-[#4A4C50]">{type.engine}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Services */}
            <div className="bg-[#111111] p-6 border-2 border-[#4A4C50] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white font-black text-lg uppercase tracking-wider">
                  <span className="bg-[#D92323] text-white px-2 py-0.5 text-xs font-mono font-bold">02</span>
                  <span>Select Garage Services</span>
                </div>
                <span className="font-mono text-xs text-[#FF5E00] font-bold">{selectedServices.length} SELECTED</span>
              </div>

              <div className="space-y-3">
                {serviceCatalog.map((service) => {
                  const isChecked = selectedServices.includes(service.id);
                  const scaledPrice = Math.round(service.price * currentBike.multiplier);
                  return (
                    <div
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`p-4 border-2 cursor-pointer transition-all flex items-start justify-between gap-4 ${
                        isChecked 
                          ? 'bg-[#1A1A1A] border-[#FF5E00]' 
                          : 'bg-[#1A1A1A]/40 border-[#4A4C50] hover:border-gray-400'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-5 h-5 mt-0.5 flex items-center justify-center border transition-colors ${
                          isChecked ? 'bg-[#FF5E00] border-[#FF5E00] text-black font-bold' : 'border-[#4A4C50] bg-[#1A1A1A]'
                        }`}>
                          {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-white uppercase">{service.name}</span>
                            <span className="font-mono text-[9px] bg-[#1A1A1A] text-[#8B5A2B] px-2 py-0.5 border border-[#4A4C50] uppercase">
                              {service.category}
                            </span>
                          </div>
                          <p className="text-xs text-gray-400 leading-snug">{service.desc}</p>
                          <div className="font-mono text-[11px] text-gray-400 flex items-center gap-2 pt-1">
                            <span className="flex items-center gap-1 text-[#FF5E00]"><Clock className="w-3 h-3" /> ~{service.duration} MINS</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right shrink-0 font-mono">
                        <span className="font-black text-sm text-white">₹{scaledPrice}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Date & Slot */}
            <div className="bg-[#111111] p-6 border-2 border-[#4A4C50] space-y-4">
              <div className="flex items-center gap-2 text-white font-black text-lg uppercase tracking-wider">
                <span className="bg-[#D92323] text-white px-2 py-0.5 text-xs font-mono font-bold">03</span>
                <span>Select Appointment Date & Time</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                <div>
                  <label className="block font-bold text-gray-300 mb-2 uppercase">Service Date</label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-[#1A1A1A] border-2 border-[#4A4C50] px-4 py-3 text-white font-bold focus:outline-none focus:border-[#FF5E00]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-300 mb-2 uppercase">Available Slot</label>
                  <select
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    className="w-full bg-[#1A1A1A] border-2 border-[#4A4C50] px-4 py-3 text-white font-bold focus:outline-none focus:border-[#FF5E00]"
                  >
                    {timeSlots.map((slot, idx) => (
                      <option key={idx} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

          </div>


          {/* RIGHT COLUMN: Diagnostic Work Order Summary */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28 font-mono">
            
            <div className="bg-[#111111] p-6 border-2 border-[#D92323] border-l-6 space-y-6">
              
              {/* Header */}
              <div className="border-b border-[#4A4C50] pb-3 flex justify-between items-center">
                <div className="text-[#D92323] font-bold text-xs uppercase">{">>"} WORK ORDER ESTIMATE</div>
                <span className="text-[10px] bg-[#D92323] text-white px-2 py-0.5 font-bold">GARAGE OS</span>
              </div>

              {/* Selected List */}
              <div className="space-y-2 text-xs border-b border-[#4A4C50] pb-4 max-h-40 overflow-y-auto">
                {selectedServices.map(id => {
                  const s = serviceCatalog.find(item => item.id === id);
                  if (!s) return null;
                  const price = Math.round(s.price * currentBike.multiplier);
                  return (
                    <div key={id} className="flex justify-between text-gray-300">
                      <span>{s.name}</span>
                      <span className="font-bold text-white">₹{price}</span>
                    </div>
                  );
                })}
              </div>

              {/* Work Order Breakdown */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-gray-400">
                  <span>CLASS MULTIPLIER:</span>
                  <span className="text-white font-bold">{currentBike.name} ({currentBike.multiplier}x)</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>LABOR TIME:</span>
                  <span className="text-[#FF5E00] font-bold">~{calculateDuration()} MINS</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-[#4A4C50]">
                  <span className="font-bold text-white uppercase text-sm">TOTAL ESTIMATED:</span>
                  <span className="text-3xl font-black text-[#D92323]">₹{calculateTotal()}</span>
                </div>
              </div>

              {/* Rider Form */}
              <form onSubmit={handleBookingSubmit} className="space-y-3 pt-4 border-t border-[#4A4C50]">
                <div className="text-xs font-bold text-[#8B5A2B] uppercase">// RIDER CONTACT INFO</div>
                
                <input
                  type="text"
                  placeholder="FULL NAME *"
                  required
                  value={riderInfo.fullName}
                  onChange={(e) => setRiderInfo({...riderInfo, fullName: e.target.value})}
                  className="w-full bg-[#1A1A1A] border border-[#4A4C50] px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF5E00]"
                />

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="tel"
                    placeholder="PHONE *"
                    required
                    value={riderInfo.phone}
                    onChange={(e) => setRiderInfo({...riderInfo, phone: e.target.value})}
                    className="w-full bg-[#1A1A1A] border border-[#4A4C50] px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF5E00]"
                  />
                  <input
                    type="text"
                    placeholder="BIKE MODEL *"
                    required
                    value={riderInfo.bikeModel}
                    onChange={(e) => setRiderInfo({...riderInfo, bikeModel: e.target.value})}
                    className="w-full bg-[#1A1A1A] border border-[#4A4C50] px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF5E00]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-red w-full py-4 text-xs font-black flex items-center justify-center gap-2 mt-4"
                >
                  <Gauge className="w-5 h-5" />
                  <span>SCHEDULE SERVICE BAY</span>
                </button>
              </form>

            </div>

          </div>

        </div>
      ) : (
        /* CONFIRMATION WORK ORDER PASS */
        <div className="max-w-2xl mx-auto bg-[#111111] border-2 border-[#D92323] border-l-8 p-8 space-y-6 text-center animate-fade-in font-mono">
          <div className="w-16 h-16 bg-[#D92323] text-white flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold text-[#FF5E00] uppercase">// WORK ORDER CREATED</span>
            <h2 className="text-3xl font-black text-white uppercase">SERVICE BAY RESERVED</h2>
          </div>

          <div className="bg-[#1A1A1A] border border-[#4A4C50] p-6 text-left space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-[#4A4C50]">
              <div>
                <p className="text-[10px] text-gray-400">WORK ORDER ID</p>
                <p className="font-bold text-lg text-[#D92323]">{bookingRef}</p>
              </div>
              <span className="bg-[#D92323] text-white text-xs px-3 py-1 font-bold">
                CONFIRMED
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <p className="text-gray-400">RIDER:</p>
                <p className="font-bold text-white">{riderInfo.fullName}</p>
              </div>
              <div>
                <p className="text-gray-400">VEHICLE:</p>
                <p className="font-bold text-white">{riderInfo.bikeModel}</p>
              </div>
              <div>
                <p className="text-gray-400">SLOT:</p>
                <p className="font-bold text-white">{selectedDate} @ {selectedSlot}</p>
              </div>
              <div>
                <p className="text-gray-400">TOTAL COST:</p>
                <p className="font-black text-lg text-[#D92323]">₹{calculateTotal()}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => window.print()}
              className="btn-secondary flex-1 py-3 text-xs flex items-center justify-center gap-2"
            >
              <Printer className="w-4 h-4" /> Print Work Order
            </button>
            <button
              onClick={() => setBookingConfirmed(false)}
              className="btn-red flex-1 py-3 text-xs"
            >
              Book Another Bay
            </button>
          </div>

        </div>
      )}

    </div>
  );
}

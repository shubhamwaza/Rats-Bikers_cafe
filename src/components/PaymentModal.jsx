import React, { useState } from 'react';
import { 
  X, 
  CreditCard, 
  QrCode, 
  Building2, 
  Lock, 
  Award, 
  Printer, 
  ArrowRight
} from 'lucide-react';

export default function PaymentModal({ tier, billingCycle, onClose }) {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [couponCode, setCouponCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  
  const [riderDetails, setRiderDetails] = useState({
    fullName: '',
    email: '',
    phone: '',
    bikeModel: ''
  });

  const [otpInput, setOtpInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [generatedMemberId, setGeneratedMemberId] = useState('');

  if (!tier) return null;

  const basePrice = billingCycle === 'annual' ? tier.priceAnnual : tier.priceMonthly;
  const discountAmount = discountApplied ? Math.round(basePrice * 0.1) : 0;
  const finalPrice = basePrice - discountAmount;

  const handleApplyCoupon = () => {
    if (couponCode.trim().toUpperCase() === 'RATS2026' || couponCode.trim().toUpperCase() === 'RATS10') {
      setDiscountApplied(true);
    } else {
      alert('Invalid coupon code. Try using RATS2026 for 10% off!');
    }
  };

  const handleProceedToAuth = (e) => {
    e.preventDefault();
    if (!riderDetails.fullName || !riderDetails.phone || !riderDetails.bikeModel) {
      alert('Please fill in your name, phone, and bike model.');
      return;
    }
    setStep(2);
  };

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const memberId = `RATS-${tier.name.split(' ')[0].toUpperCase()}-${Math.floor(10000 + Math.random() * 90000)}`;
      setGeneratedMemberId(memberId);
      setStep(3);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-apple-modal">
      <div className="glass-panel w-full max-w-2xl overflow-hidden shadow-2xl relative border-white/20">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 border border-white/15 text-slate-300 hover:text-white transition-all active:scale-95"
        >
          <X className="w-5 h-5" />
        </button>

        {/* STEP 1: PAYMENT METHOD & RIDER INFO */}
        {step === 1 && (
          <div className="p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-orange-500 to-rose-600 text-white flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-xl tracking-tight">Priority VIP Club Checkout</h3>
                <p className="text-xs text-orange-400 font-mono">Tier: {tier.name} ({billingCycle.toUpperCase()})</p>
              </div>
            </div>

            <form onSubmit={handleProceedToAuth} className="space-y-4">
              <div className="space-y-3">
                <div className="text-xs font-semibold text-slate-400">1. RIDER INFORMATION</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    required
                    value={riderDetails.fullName}
                    onChange={(e) => setRiderDetails({...riderDetails, fullName: e.target.value})}
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    value={riderDetails.phone}
                    onChange={(e) => setRiderDetails({...riderDetails, phone: e.target.value})}
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={riderDetails.email}
                    onChange={(e) => setRiderDetails({...riderDetails, email: e.target.value})}
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
                  />
                  <input
                    type="text"
                    placeholder="Motorcycle Model *"
                    required
                    value={riderDetails.bikeModel}
                    onChange={(e) => setRiderDetails({...riderDetails, bikeModel: e.target.value})}
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-semibold text-slate-400">2. PAYMENT METHOD</div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all active:scale-95 ${
                      paymentMethod === 'upi' ? 'bg-white/20 border-orange-500 text-white' : 'bg-white/[0.04] border-white/10 text-slate-400'
                    }`}
                  >
                    <QrCode className="w-4 h-4 text-orange-400" /> UPI / QR
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all active:scale-95 ${
                      paymentMethod === 'card' ? 'bg-white/20 border-orange-500 text-white' : 'bg-white/[0.04] border-white/10 text-slate-400'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-orange-400" /> Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('netbanking')}
                    className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all active:scale-95 ${
                      paymentMethod === 'netbanking' ? 'bg-white/20 border-orange-500 text-white' : 'bg-white/[0.04] border-white/10 text-slate-400'
                    }`}
                  >
                    <Building2 className="w-4 h-4 text-orange-400" /> NetBank
                  </button>
                </div>
              </div>

              {/* Coupon */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Coupon Code (RATS2026)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white uppercase placeholder-slate-400 focus:outline-none focus:border-orange-500"
                />
                <button
                  type="button"
                  onClick={handleApplyCoupon}
                  className="apple-btn-secondary px-4 py-2.5 text-xs"
                >
                  Apply
                </button>
              </div>

              {/* Total & CTA */}
              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-slate-400">TOTAL PAYABLE:</p>
                  <p className="text-2xl font-extrabold text-white font-mono">
                    ₹{finalPrice} {discountApplied && <span className="text-xs text-orange-400">(10% OFF)</span>}
                  </p>
                </div>
                <button
                  type="submit"
                  className="apple-btn-primary px-7 py-3 text-xs font-semibold flex items-center gap-2 active:scale-95"
                >
                  <span>Pay Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>

          </div>
        )}

        {/* STEP 2: SIMULATED OTP */}
        {step === 2 && (
          <div className="p-8 space-y-6 text-center">
            <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-full text-orange-400 flex items-center justify-center mx-auto">
              <Lock className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-white">Bank Authorization OTP</h3>
              <p className="text-xs text-slate-400">
                A simulated verification code has been sent for <span className="text-white font-bold">₹{finalPrice}</span>.
              </p>
            </div>

            <div className="max-w-xs mx-auto space-y-3">
              <input
                type="text"
                placeholder="ENTER 4-DIGIT OTP"
                maxLength={4}
                value={otpInput}
                onChange={(e) => setOtpInput(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-center text-xl font-bold tracking-widest text-white focus:outline-none focus:border-orange-500 font-mono"
              />
            </div>

            <div className="flex gap-3 justify-center pt-4">
              <button
                onClick={() => setStep(1)}
                className="apple-btn-secondary px-6 py-3 text-xs font-medium"
              >
                Back
              </button>
              <button
                onClick={handleSimulatePayment}
                disabled={isProcessing}
                className="apple-btn-primary px-8 py-3 text-xs font-semibold flex items-center gap-2"
              >
                {isProcessing ? 'Authorizing...' : 'Authorize & Issue VIP Pass'}
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: METALLIC DIGITAL VIP PASS CARD WITH OFFICIAL R.A.T.S TIRE EMBLEM */}
        {step === 3 && (
          <div className="p-8 space-y-6 text-center">
            
            <div className="inline-flex items-center gap-2 glass-pill px-4 py-1 text-xs text-emerald-400 font-medium">
              <span>✓ Membership Active & Verified</span>
            </div>

            {/* DIGITAL VIP CARD MOCKUP WITH OFFICIAL EMBLEM */}
            <div className="max-w-md mx-auto rounded-3xl p-6 glass-panel border-orange-500/40 text-left space-y-6 shadow-2xl relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl">
              
              {/* Card Header with Official Emblem */}
              <div className="flex justify-between items-start pb-4 border-b border-white/15">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 p-0.5 border border-white/30 shrink-0 flex items-center justify-center backdrop-blur-md">
                    <img 
                      src="/rats-logo.png" 
                      alt="R.A.T.S Tire Emblem Logo" 
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white leading-none">R.A.T.S CLUBHOUSE</h4>
                    <p className="text-[11px] text-orange-400 font-mono mt-1 font-semibold">{tier.name}</p>
                  </div>
                </div>
                <Award className="w-7 h-7 text-amber-400" />
              </div>

              {/* Card Details */}
              <div className="space-y-4 text-xs font-mono">
                <div>
                  <p className="text-[9px] text-slate-400">MEMBER ID</p>
                  <p className="font-extrabold text-lg text-orange-400">{generatedMemberId}</p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-[9px] text-slate-400">CARD HOLDER:</p>
                    <p className="font-semibold text-white">{riderDetails.fullName || 'Registered Rider'}</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-400">VEHICLE:</p>
                    <p className="font-semibold text-white">{riderDetails.bikeModel || 'Squad Rider'}</p>
                  </div>
                </div>
              </div>

              {/* QR Code */}
              <div className="pt-3 border-t border-white/15 flex justify-between items-end">
                <div>
                  <p className="text-[9px] text-slate-400 font-mono">VALID THRU</p>
                  <p className="text-xs font-bold text-emerald-400 font-mono">SEPTEMBER 2027</p>
                </div>
                <div className="w-12 h-12 bg-white p-1 rounded-xl">
                  <QrCode className="w-full h-full text-black" />
                </div>
              </div>

            </div>

            {/* Actions */}
            <div className="flex gap-3 max-w-md mx-auto pt-2">
              <button
                onClick={() => window.print()}
                className="apple-btn-secondary flex-1 py-3 text-xs font-medium flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4" /> Print VIP Pass
              </button>
              <button
                onClick={onClose}
                className="apple-btn-primary flex-1 py-3 text-xs font-semibold"
              >
                Return to Pit Stop
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}


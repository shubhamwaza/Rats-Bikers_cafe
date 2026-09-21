import React, { useState } from 'react';
import { 
  X, 
  CreditCard, 
  QrCode, 
  Building2, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Award, 
  Download, 
  Printer, 
  Tag, 
  Bike,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function PaymentModal({ tier, billingCycle, onClose }) {
  const [step, setStep] = useState(1); // 1: Info & Method, 2: OTP/Auth, 3: Success VIP Card
  const [paymentMethod, setPaymentMethod] = useState('upi'); // 'upi', 'card', 'netbanking'
  const [couponCode, setCouponCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  
  const [riderDetails, setRiderDetails] = useState({
    fullName: '',
    email: '',
    phone: '',
    bikeModel: ''
  });

  const [cardInfo, setCardInfo] = useState({ number: '', expiry: '', cvv: '' });
  const [upiId, setUpiId] = useState('');
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
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#10121A] border border-white/10 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* STEP 1: PAYMENT METHOD & RIDER INFO */}
        {step === 1 && (
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-[#FFB800] text-black flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-lg">Priority VIP Membership Checkout</h3>
                <p className="text-xs text-slate-400">Selected Tier: <span className="text-[#FFB800] font-bold">{tier.name}</span> ({billingCycle})</p>
              </div>
            </div>

            {/* Rider Info Form */}
            <form onSubmit={handleProceedToAuth} className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">1. Rider Details</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    required
                    value={riderDetails.fullName}
                    onChange={(e) => setRiderDetails({...riderDetails, fullName: e.target.value})}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#FF5500]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    value={riderDetails.phone}
                    onChange={(e) => setRiderDetails({...riderDetails, phone: e.target.value})}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#FF5500]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={riderDetails.email}
                    onChange={(e) => setRiderDetails({...riderDetails, email: e.target.value})}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#FF5500]"
                  />
                  <input
                    type="text"
                    placeholder="Motorcycle Model * (e.g. Triumph Tiger 900)"
                    required
                    value={riderDetails.bikeModel}
                    onChange={(e) => setRiderDetails({...riderDetails, bikeModel: e.target.value})}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#FF5500]"
                  />
                </div>
              </div>

              {/* Payment Method Choice */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">2. Payment Method</h4>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      paymentMethod === 'upi' ? 'bg-[#FF5500]/20 border-[#FF5500] text-white' : 'bg-slate-900 border-white/10 text-slate-400'
                    }`}
                  >
                    <QrCode className="w-4 h-4 text-[#FF5500]" /> UPI / QR
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      paymentMethod === 'card' ? 'bg-[#FF5500]/20 border-[#FF5500] text-white' : 'bg-slate-900 border-white/10 text-slate-400'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-[#FF5500]" /> Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('netbanking')}
                    className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      paymentMethod === 'netbanking' ? 'bg-[#FF5500]/20 border-[#FF5500] text-white' : 'bg-slate-900 border-white/10 text-slate-400'
                    }`}
                  >
                    <Building2 className="w-4 h-4 text-[#FF5500]" /> NetBanking
                  </button>
                </div>

                {/* Sub-inputs */}
                {paymentMethod === 'upi' && (
                  <div className="p-4 bg-slate-900/90 rounded-xl border border-white/10 space-y-3">
                    <p className="text-xs text-slate-300">Scan QR Code using GPay, PhonePe, or Paytm:</p>
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-24 bg-white p-2 rounded-xl flex items-center justify-center shrink-0">
                        <QrCode className="w-20 h-20 text-black" />
                      </div>
                      <div className="space-y-1 text-xs">
                        <p className="text-slate-400">Or enter VPA / UPI ID:</p>
                        <input
                          type="text"
                          placeholder="username@upi"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          className="bg-slate-800 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white w-full focus:outline-none focus:border-[#FF5500]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'card' && (
                  <div className="p-4 bg-slate-900/90 rounded-xl border border-white/10 space-y-3">
                    <input
                      type="text"
                      placeholder="Card Number (4532 •••• •••• ••••)"
                      value={cardInfo.number}
                      onChange={(e) => setCardInfo({...cardInfo, number: e.target.value})}
                      className="w-full bg-slate-800 border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="MM / YY"
                        value={cardInfo.expiry}
                        onChange={(e) => setCardInfo({...cardInfo, expiry: e.target.value})}
                        className="bg-slate-800 border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                      />
                      <input
                        type="password"
                        placeholder="CVV"
                        maxLength={4}
                        value={cardInfo.cvv}
                        onChange={(e) => setCardInfo({...cardInfo, cvv: e.target.value})}
                        className="bg-slate-800 border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Coupon Code */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Coupon Code (Try RATS2026)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF5500]"
                />
                <button
                  type="button"
                  onClick={handleApplyCoupon}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl border border-white/10"
                >
                  Apply
                </button>
              </div>

              {/* Order Total & CTA */}
              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-slate-400">Total Payable:</p>
                  <p className="text-xl font-black text-[#FFB800]">
                    ₹{finalPrice} {discountApplied && <span className="text-xs text-emerald-400 font-semibold">(10% Off Applied)</span>}
                  </p>
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#FFB800] to-[#FF8800] text-black font-extrabold text-xs px-6 py-3.5 rounded-xl flex items-center gap-2 shadow-lg"
                >
                  <span>Proceed to Payment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>

          </div>
        )}

        {/* STEP 2: SIMULATED PAYMENT OTP AUTHORIZATION */}
        {step === 2 && (
          <div className="p-8 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#FF5500]/20 text-[#FF5500] flex items-center justify-center mx-auto animate-pulse">
              <Lock className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-white">Bank Authorization OTP</h3>
              <p className="text-xs text-slate-400">
                A simulated verification code has been sent to your registered mobile number for <span className="text-white font-bold">₹{finalPrice}</span>.
              </p>
            </div>

            <div className="max-w-xs mx-auto space-y-3">
              <input
                type="text"
                placeholder="Enter 4-digit OTP (e.g. 1234)"
                maxLength={4}
                value={otpInput}
                onChange={(e) => setOtpInput(e.target.value)}
                className="w-full bg-slate-900 border border-[#FF5500]/50 rounded-xl px-4 py-3 text-center text-lg font-mono font-bold tracking-widest text-white focus:outline-none focus:border-[#FF5500]"
              />
              <p className="text-[10px] text-slate-400">Enter any 4-digit code to complete test checkout</p>
            </div>

            <div className="flex gap-3 justify-center pt-4">
              <button
                onClick={() => setStep(1)}
                className="bg-slate-900 border border-white/10 text-slate-400 text-xs font-bold px-6 py-3 rounded-xl"
              >
                Back
              </button>
              <button
                onClick={handleSimulatePayment}
                disabled={isProcessing}
                className="bg-[#FF5500] hover:bg-[#E04B00] text-white font-extrabold text-xs px-8 py-3 rounded-xl orange-glow flex items-center gap-2"
              >
                {isProcessing ? 'Authorizing...' : 'Authorize & Issue VIP Pass'}
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: DIGITAL VIP MEMBERSHIP CARD RENDER */}
        {step === 3 && (
          <div className="p-8 space-y-6 animate-fade-in text-center">
            
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-bold">
              <CheckCircle2 className="w-4 h-4" /> Payment Successful & Membership Active!
            </div>

            {/* DIGITAL VIP CARD MOCKUP */}
            <div className="max-w-md mx-auto relative rounded-3xl p-6 bg-gradient-to-br from-[#1E2230] via-[#0F111A] to-[#08090E] border border-[#FFB800]/50 shadow-2xl text-left space-y-6 orange-glow-sm overflow-hidden">
              
              {/* Card Hologram Glow */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#FFB800]/20 rounded-full blur-2xl pointer-events-none"></div>

              {/* Card Header */}
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <Bike className="w-6 h-6 text-[#FFB800]" />
                  <div>
                    <h4 className="font-extrabold text-white text-sm tracking-wider">R.A.T.S CLUBHOUSE</h4>
                    <p className="text-[9px] text-[#FFB800] uppercase font-bold tracking-widest">{tier.name}</p>
                  </div>
                </div>
                <Award className="w-8 h-8 text-[#FFB800]" />
              </div>

              {/* Card Body */}
              <div className="space-y-4">
                <div>
                  <p className="text-[9px] text-slate-400 uppercase tracking-widest">Member ID</p>
                  <p className="font-mono font-black text-lg text-white tracking-widest">{generatedMemberId}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <p className="text-[9px] text-slate-400 uppercase">Card Holder</p>
                    <p className="font-bold text-slate-200">{riderDetails.fullName || 'Registered Rider'}</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-400 uppercase">Motorcycle</p>
                    <p className="font-bold text-slate-200">{riderDetails.bikeModel || 'Squad Rider'}</p>
                  </div>
                </div>
              </div>

              {/* Card Footer with QR */}
              <div className="pt-3 border-t border-white/10 flex justify-between items-end">
                <div>
                  <p className="text-[8px] text-slate-400 uppercase">Valid Thru</p>
                  <p className="text-xs font-bold text-emerald-400">SEPTEMBER 2027</p>
                </div>
                <div className="w-12 h-12 bg-white p-1 rounded-lg">
                  <QrCode className="w-full h-full text-black" />
                </div>
              </div>

            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
              <button
                onClick={() => window.print()}
                className="flex-1 bg-slate-900 border border-white/20 hover:bg-slate-800 text-white font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4" /> Download / Print VIP Card
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-[#FFB800] text-black font-extrabold text-xs py-3 rounded-xl flex items-center justify-center gap-2"
              >
                Return to Clubhouse
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

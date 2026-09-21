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
  Printer, 
  Bike,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in font-mono">
      <div className="bg-[#111111] border-2 border-[#D92323] w-full max-w-2xl overflow-hidden shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#1A1A1A] border border-[#4A4C50] text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* STEP 1: PAYMENT METHOD & RIDER INFO */}
        {step === 1 && (
          <div className="p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center gap-3 border-b-2 border-[#4A4C50] pb-4">
              <div className="w-10 h-10 bg-[#D92323] text-white flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black text-white text-xl uppercase font-sans tracking-tight">Priority VIP Club Checkout</h3>
                <p className="text-xs text-[#8B5A2B]">Tier: {tier.name} ({billingCycle.toUpperCase()})</p>
              </div>
            </div>

            <form onSubmit={handleProceedToAuth} className="space-y-4">
              <div className="space-y-2">
                <div className="text-xs font-bold text-[#FF5E00] uppercase">// 1. RIDER DETAILS</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="FULL NAME *"
                    required
                    value={riderDetails.fullName}
                    onChange={(e) => setRiderDetails({...riderDetails, fullName: e.target.value})}
                    className="w-full bg-[#1A1A1A] border border-[#4A4C50] px-4 py-3 text-xs text-white focus:outline-none focus:border-[#FF5E00]"
                  />
                  <input
                    type="tel"
                    placeholder="PHONE NUMBER *"
                    required
                    value={riderDetails.phone}
                    onChange={(e) => setRiderDetails({...riderDetails, phone: e.target.value})}
                    className="w-full bg-[#1A1A1A] border border-[#4A4C50] px-4 py-3 text-xs text-white focus:outline-none focus:border-[#FF5E00]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    value={riderDetails.email}
                    onChange={(e) => setRiderDetails({...riderDetails, email: e.target.value})}
                    className="w-full bg-[#1A1A1A] border border-[#4A4C50] px-4 py-3 text-xs text-white focus:outline-none focus:border-[#FF5E00]"
                  />
                  <input
                    type="text"
                    placeholder="MOTORCYCLE MODEL *"
                    required
                    value={riderDetails.bikeModel}
                    onChange={(e) => setRiderDetails({...riderDetails, bikeModel: e.target.value})}
                    className="w-full bg-[#1A1A1A] border border-[#4A4C50] px-4 py-3 text-xs text-white focus:outline-none focus:border-[#FF5E00]"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold text-[#FF5E00] uppercase">// 2. PAYMENT METHOD</div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-3 border text-xs font-bold flex items-center justify-center gap-2 uppercase transition-all ${
                      paymentMethod === 'upi' ? 'bg-[#D92323] text-white border-[#D92323]' : 'bg-[#1A1A1A] border-[#4A4C50] text-gray-400'
                    }`}
                  >
                    <QrCode className="w-4 h-4" /> UPI / QR
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 border text-xs font-bold flex items-center justify-center gap-2 uppercase transition-all ${
                      paymentMethod === 'card' ? 'bg-[#D92323] text-white border-[#D92323]' : 'bg-[#1A1A1A] border-[#4A4C50] text-gray-400'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" /> Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('netbanking')}
                    className={`p-3 border text-xs font-bold flex items-center justify-center gap-2 uppercase transition-all ${
                      paymentMethod === 'netbanking' ? 'bg-[#D92323] text-white border-[#D92323]' : 'bg-[#1A1A1A] border-[#4A4C50] text-gray-400'
                    }`}
                  >
                    <Building2 className="w-4 h-4" /> NetBank
                  </button>
                </div>
              </div>

              {/* Coupon */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="COUPON (TRY RATS2026)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 bg-[#1A1A1A] border border-[#4A4C50] px-4 py-2.5 text-xs text-white uppercase focus:outline-none focus:border-[#FF5E00]"
                />
                <button
                  type="button"
                  onClick={handleApplyCoupon}
                  className="btn-secondary px-4 py-2.5 text-xs"
                >
                  APPLY
                </button>
              </div>

              {/* Total & CTA */}
              <div className="border-t border-[#4A4C50] pt-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-gray-400">TOTAL PAYABLE:</p>
                  <p className="text-xl font-black text-[#D92323]">
                    ₹{finalPrice} {discountApplied && <span className="text-xs text-[#FF5E00]">(10% OFF)</span>}
                  </p>
                </div>
                <button
                  type="submit"
                  className="btn-red px-6 py-3.5 text-xs flex items-center gap-2"
                >
                  <span>PAY NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>

          </div>
        )}

        {/* STEP 2: SIMULATED OTP */}
        {step === 2 && (
          <div className="p-8 space-y-6 text-center">
            <div className="w-16 h-16 bg-[#D92323] text-white flex items-center justify-center mx-auto">
              <Lock className="w-8 h-8" />
            </div>

            <div className="space-y-2 font-sans">
              <h3 className="text-2xl font-black text-white uppercase">BANK AUTHORIZATION OTP</h3>
              <p className="text-xs text-gray-400">
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
                className="w-full bg-[#1A1A1A] border-2 border-[#D92323] px-4 py-3 text-center text-xl font-bold tracking-widest text-white focus:outline-none"
              />
            </div>

            <div className="flex gap-3 justify-center pt-4">
              <button
                onClick={() => setStep(1)}
                className="btn-secondary px-6 py-3 text-xs"
              >
                Back
              </button>
              <button
                onClick={handleSimulatePayment}
                disabled={isProcessing}
                className="btn-red px-8 py-3 text-xs flex items-center gap-2"
              >
                {isProcessing ? 'AUTHORIZING...' : 'AUTHORIZE & ISSUE VIP PASS'}
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: METALLIC DIGITAL VIP PASS CARD WITH OFFICIAL R.A.T.S TIRE EMBLEM */}
        {step === 3 && (
          <div className="p-8 space-y-6 animate-fade-in text-center">
            
            <div className="inline-block bg-[#FF5E00] text-black px-4 py-1 font-bold text-xs uppercase">
              ✓ MEMBERSHIP ACTIVE & VERIFIED
            </div>

            {/* DIGITAL VIP CARD MOCKUP WITH OFFICIAL EMBLEM */}
            <div className="max-w-md mx-auto rounded-none p-6 bg-[#1A1A1A] border-2 border-[#D92323] border-l-8 text-left space-y-6 shadow-2xl relative">
              
              {/* Card Header with Official Emblem */}
              <div className="flex justify-between items-start pb-4 border-b border-[#4A4C50]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white p-1 border-2 border-[#4A4C50] shrink-0">
                    <img 
                      src="/rats-logo.png" 
                      alt="R.A.T.S Tire Emblem Logo" 
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-display text-xl text-white tracking-widest leading-none">R.A.T.S CLUBHOUSE</h4>
                    <p className="text-[10px] text-[#FF5E00] uppercase font-bold">{tier.name}</p>
                  </div>
                </div>
                <Award className="w-8 h-8 text-[#D92323]" />
              </div>

              {/* Card Details */}
              <div className="space-y-4 text-xs">
                <div>
                  <p className="text-[9px] text-gray-400">MEMBER ID</p>
                  <p className="font-bold text-lg text-[#D92323]">{generatedMemberId}</p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-[9px] text-gray-400">CARD HOLDER:</p>
                    <p className="font-bold text-white">{riderDetails.fullName || 'Registered Rider'}</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-gray-400">VEHICLE:</p>
                    <p className="font-bold text-white">{riderDetails.bikeModel || 'Squad Rider'}</p>
                  </div>
                </div>
              </div>

              {/* QR Code */}
              <div className="pt-3 border-t border-[#4A4C50] flex justify-between items-end">
                <div>
                  <p className="text-[8px] text-gray-400">VALID THRU</p>
                  <p className="text-xs font-bold text-[#FF5E00]">SEPTEMBER 2027</p>
                </div>
                <div className="w-12 h-12 bg-white p-1">
                  <QrCode className="w-full h-full text-black" />
                </div>
              </div>

            </div>

            {/* Actions */}
            <div className="flex gap-3 max-w-md mx-auto pt-2">
              <button
                onClick={() => window.print()}
                className="btn-secondary flex-1 py-3 text-xs flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4" /> Print VIP Card
              </button>
              <button
                onClick={onClose}
                className="btn-red flex-1 py-3 text-xs"
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

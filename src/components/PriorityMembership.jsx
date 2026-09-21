import React, { useState } from 'react';
import { 
  Award, 
  Check, 
  Zap, 
  Crown, 
  Sparkles, 
  ShieldCheck, 
  Coffee, 
  Bike, 
  Star, 
  ArrowRight,
  CreditCard,
  QrCode,
  Lock,
  X,
  Printer,
  CheckCircle2,
  Gift
} from 'lucide-react';

export default function PriorityMembership({ onOpenPayment }) {
  const [billingCycle, setBillingCycle] = useState('annual'); // 'annual' or 'monthly'

  const membershipTiers = [
    {
      id: 'free',
      name: 'Squad Rider',
      tagline: 'Basic Community Access',
      priceAnnual: 0,
      priceMonthly: 0,
      popular: false,
      badgeColor: 'bg-slate-800 text-slate-300',
      borderColor: 'border-white/10',
      buttonText: 'Current Basic Tier',
      buttonStyle: 'bg-slate-800 text-slate-400 cursor-default',
      features: [
        'Access to public weekend breakfast rides',
        'Standard Bikers Cafe menu prices',
        'Access to WhatsApp rider group',
        'Standard bike spa rates'
      ]
    },
    {
      id: 'silver',
      name: 'Silver Rider Club',
      tagline: 'For Weekend Touring Enthusiasts',
      priceAnnual: 999,
      priceMonthly: 119,
      popular: false,
      badgeColor: 'bg-[#C0C0C0]/20 text-[#E0E0E0] border border-[#C0C0C0]/40',
      borderColor: 'border-[#C0C0C0]/30 hover:border-[#C0C0C0]',
      buttonText: 'Join Silver Club',
      buttonStyle: 'bg-slate-800 hover:bg-slate-700 text-white border border-[#C0C0C0]/50',
      features: [
        '10% Discount on all Cafe food & brews',
        '1 FREE Foam Wash every month (Worth ₹499)',
        '10% Discount on Accessories Store & Gear',
        'Priority RSVP seating for weekend rides',
        'Custom Silver Helmet Sticker & Patch'
      ]
    },
    {
      id: 'gold',
      name: 'Gold VIP Club',
      tagline: 'The Ultimate Biker Lounge Perk Package',
      priceAnnual: 2499,
      priceMonthly: 249,
      popular: true,
      badgeColor: 'bg-[#FFB800] text-black font-extrabold',
      borderColor: 'border-[#FFB800] orange-glow-sm',
      buttonText: 'Get Gold VIP Membership',
      buttonStyle: 'bg-gradient-to-r from-[#FFB800] to-[#FF8800] hover:from-[#E5A700] hover:to-[#FF8800] text-black font-extrabold shadow-xl',
      features: [
        '20% Discount on all Cafe food & brews',
        'Unlimited Lounge WiFi & Workspace Access',
        '1 FREE Full Bike Spa & Lube every month (Worth ₹1,200)',
        '15% Discount on Accessories Store & Gear',
        'Exclusive R.A.T.S Official Squad Hoodie & Metal Badge',
        'Priority booking for multi-state touring expeditions',
        'Complimentary Artisanal Espresso on every visit'
      ]
    },
    {
      id: 'platinum',
      name: 'Platinum Legend VIP',
      tagline: 'For Die-Hard Touring Purists & Superbike Owners',
      priceAnnual: 4999,
      priceMonthly: 499,
      popular: false,
      badgeColor: 'bg-gradient-to-r from-[#FF5500] to-[#FF8800] text-white font-extrabold',
      borderColor: 'border-[#FF5500]/60 hover:border-[#FF5500]',
      buttonText: 'Join Platinum Legends',
      buttonStyle: 'bg-[#FF5500] hover:bg-[#E04B00] text-white font-extrabold shadow-xl orange-glow-sm',
      features: [
        '30% Discount on all Cafe food & brews',
        '24/7 Clubhouse Lounge Keycard Access',
        '1 FREE Ceramic Coating Session per year (Worth ₹2,000)',
        '2 FREE Deep Bike Spa & Tune-ups every month',
        '20% Discount on Accessories Store & Apparel',
        'VIP Track Day Invitations & Reserved Parking Bay',
        'Personalized Leather Riding Jacket Patch'
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 bg-[#FFB800]/10 border border-[#FFB800]/30 px-4 py-1.5 rounded-full text-xs font-bold text-[#FFB800] uppercase tracking-wider">
          <Crown className="w-4 h-4" />
          <span>Priority Cafe & Squad Perks</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
          Unlock Priority <span className="text-gradient-gold">VIP Club Membership</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          Elevate your rider experience. Enjoy exclusive cafe discounts, free monthly motorcycle detailing spas, private lounge workspace, and priority touring ride slots!
        </p>

        {/* Annual / Monthly Toggle */}
        <div className="pt-4 flex items-center justify-center gap-3">
          <span className={`text-xs font-bold ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'annual' ? 'monthly' : 'annual')}
            className="w-14 h-8 rounded-full bg-slate-900 border border-white/20 p-1 flex items-center transition-colors relative"
          >
            <div className={`w-6 h-6 rounded-full bg-[#FFB800] shadow-md transition-transform duration-300 ${
              billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-0'
            }`}></div>
          </button>
          <span className={`text-xs font-bold flex items-center gap-1.5 ${billingCycle === 'annual' ? 'text-[#FFB800]' : 'text-slate-400'}`}>
            Annual Billing
            <span className="bg-[#FF5500] text-white text-[9px] px-2 py-0.5 rounded-full uppercase font-extrabold">
              Save 20%
            </span>
          </span>
        </div>
      </div>

      {/* Tiers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {membershipTiers.map((tier) => {
          const price = billingCycle === 'annual' ? tier.priceAnnual : tier.priceMonthly;
          return (
            <div
              key={tier.id}
              className={`glass-panel p-6 rounded-3xl border flex flex-col justify-between relative transition-all duration-300 hover:scale-[1.02] ${tier.borderColor}`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FFB800] to-[#FF8800] text-black text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1">
                  <Star className="w-3 h-3 fill-black" /> Most Popular VIP Choice
                </div>
              )}

              <div className="space-y-6">
                
                {/* Header info */}
                <div className="space-y-2">
                  <span className={`inline-block text-[11px] px-3 py-1 rounded-full font-bold ${tier.badgeColor}`}>
                    {tier.name}
                  </span>
                  <p className="text-xs text-slate-400 leading-snug">{tier.tagline}</p>
                </div>

                {/* Price */}
                <div className="border-y border-white/10 py-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white">₹{price}</span>
                    <span className="text-xs text-slate-400">/{billingCycle === 'annual' ? 'year' : 'month'}</span>
                  </div>
                  {billingCycle === 'annual' && tier.priceAnnual > 0 && (
                    <p className="text-[10px] text-emerald-400 mt-1 font-semibold">
                      Equivalent to ₹{Math.round(tier.priceAnnual / 12)}/month
                    </p>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-2.5">
                  <p className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">Perks Included:</p>
                  <ul className="space-y-2">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* CTA Button */}
              <div className="pt-8">
                <button
                  onClick={() => tier.id !== 'free' && onOpenPayment(tier, billingCycle)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${tier.buttonStyle}`}
                >
                  <span>{tier.buttonText}</span>
                  {tier.id !== 'free' && <ArrowRight className="w-4 h-4" />}
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Member Lounge Perks Showcase */}
      <div className="mt-16 glass-panel p-8 rounded-3xl border border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FF5500]/10 border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500] shrink-0 mx-auto md:mx-0">
              <Coffee className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-white text-base">Complimentary Espresso</h4>
              <p className="text-xs text-slate-400">Gold & Platinum VIP members receive a freshly pulled double-shot espresso on every clubhouse visit.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFB800]/10 border border-[#FFB800]/30 flex items-center justify-center text-[#FFB800] shrink-0 mx-auto md:mx-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-white text-base">Free Monthly Detailing</h4>
              <p className="text-xs text-slate-400">Never ride a dirty bike again. Automatic monthly credits for snow foam washes and ceramic maintenance.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mx-auto md:mx-0">
              <Gift className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-white text-base">Official Squad Merch Kit</h4>
              <p className="text-xs text-slate-400">Receive a physical welcome kit with custom embroidered rider patches, metallic badge, and squad hoodie.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

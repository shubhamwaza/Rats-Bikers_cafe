import React, { useState } from 'react';
import { 
  Award, 
  Check, 
  ArrowRight
} from 'lucide-react';

export default function PriorityMembership({ onOpenPayment }) {
  const [billingCycle, setBillingCycle] = useState('annual');

  const membershipTiers = [
    {
      id: 'free',
      name: 'Squad Rider',
      tagline: 'Basic Community Access',
      priceAnnual: 0,
      priceMonthly: 0,
      popular: false,
      badgeColor: 'glass-pill px-2.5 py-0.5 text-slate-400',
      buttonStyle: 'apple-btn-secondary opacity-60 cursor-default text-slate-400',
      buttonText: 'Current Basic Tier',
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
      badgeColor: 'glass-pill px-2.5 py-0.5 text-orange-400 font-semibold',
      buttonStyle: 'apple-btn-primary',
      buttonText: 'Join Silver Club',
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
      badgeColor: 'bg-gradient-to-r from-orange-500 to-rose-600 text-white font-bold px-2.5 py-0.5 rounded-full',
      buttonStyle: 'apple-btn-primary shadow-lg shadow-orange-500/30',
      buttonText: 'Get Gold VIP Membership',
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
      badgeColor: 'glass-pill px-2.5 py-0.5 text-amber-400 font-bold',
      buttonStyle: 'apple-btn-secondary border-amber-500/40 text-amber-300',
      buttonText: 'Join Platinum Legends',
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
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 min-h-screen">
      
      {/* Header */}
      <div className="glass-panel p-8 sm:p-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <div className="inline-flex items-center gap-2 glass-pill px-3 py-1 text-xs text-orange-400 font-mono mb-2">
            <Award className="w-3.5 h-3.5 text-orange-400" />
            <span>Pit Stop Privileges</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">Priority VIP Club Membership</h1>
          <p className="text-slate-400 text-sm mt-1">Unlock exclusive spa discounts, VIP lounge access, free monthly washes, and squad gear.</p>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center gap-1 bg-white/[0.05] p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-4 py-2 text-xs font-medium rounded-full transition-all active:scale-95 ${
              billingCycle === 'monthly' ? 'bg-white/20 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-4 py-2 text-xs font-semibold rounded-full transition-all active:scale-95 ${
              billingCycle === 'annual' ? 'apple-btn-primary' : 'text-slate-400 hover:text-white'
            }`}
          >
            Annual (Save 20%)
          </button>
        </div>
      </div>

      {/* Tiers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {membershipTiers.map((tier) => {
          const price = billingCycle === 'annual' ? tier.priceAnnual : tier.priceMonthly;
          return (
            <div
              key={tier.id}
              className={`glass-card p-7 flex flex-col justify-between relative ${tier.popular ? 'border-orange-500/50 bg-white/[0.06]' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-rose-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-orange-500/25">
                  Most Popular Choice
                </div>
              )}

              <div className="space-y-6">
                
                <div className="space-y-2">
                  <span className={`inline-block text-xs ${tier.badgeColor}`}>
                    {tier.name}
                  </span>
                  <p className="text-xs text-slate-400">{tier.tagline}</p>
                </div>

                <div className="border-y border-white/10 py-4 font-mono">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">₹{price}</span>
                    <span className="text-xs text-slate-400">/{billingCycle === 'annual' ? 'yr' : 'mo'}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Perks Included:</p>
                  <ul className="space-y-2.5">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              <div className="pt-8">
                <button
                  onClick={() => tier.id !== 'free' && onOpenPayment(tier, billingCycle)}
                  className={`${tier.buttonStyle} w-full py-3.5 text-xs font-semibold flex items-center justify-center gap-2 active:scale-95`}
                >
                  <span>{tier.buttonText}</span>
                  {tier.id !== 'free' && <ArrowRight className="w-4 h-4" />}
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}


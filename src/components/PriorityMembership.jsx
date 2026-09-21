import React, { useState } from 'react';
import { 
  Award, 
  Check, 
  Crown, 
  Sparkles, 
  Coffee, 
  ArrowRight,
  Gift
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
      badgeColor: 'bg-[#1A1A1A] text-gray-400 border border-[#4A4C50]',
      cardStyle: 'garage-card',
      buttonStyle: 'btn-secondary cursor-default text-gray-500',
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
      badgeColor: 'bg-[#1A1A1A] text-white border border-[#4A4C50]',
      cardStyle: 'garage-card-orange',
      buttonStyle: 'btn-orange',
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
      badgeColor: 'bg-[#FF5E00] text-black font-black',
      cardStyle: 'garage-card-red',
      buttonStyle: 'btn-red',
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
      badgeColor: 'bg-[#8B5A2B] text-white font-black',
      cardStyle: 'garage-card-leather',
      buttonStyle: 'btn-orange',
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
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="border-b-2 border-[#4A4C50] pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white">Priority VIP Club Membership</h1>
          <p className="text-[#8B5A2B] font-mono mt-1 uppercase text-xs">// Pit Stop Privileges</p>
        </div>

        {/* Toggle */}
        <div className="flex items-center gap-3 font-mono text-xs">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-3 py-1.5 font-bold uppercase transition-all ${billingCycle === 'monthly' ? 'bg-[#FF5E00] text-black' : 'bg-[#111111] text-gray-400 border border-[#4A4C50]'}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-3 py-1.5 font-bold uppercase transition-all ${billingCycle === 'annual' ? 'bg-[#D92323] text-white' : 'bg-[#111111] text-gray-400 border border-[#4A4C50]'}`}
          >
            Annual (Save 20%)
          </button>
        </div>
      </div>

      {/* Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {membershipTiers.map((tier) => {
          const price = billingCycle === 'annual' ? tier.priceAnnual : tier.priceMonthly;
          return (
            <div
              key={tier.id}
              className={`${tier.cardStyle} p-6 flex flex-col justify-between relative`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D92323] text-white text-[9px] font-mono font-black px-3 py-1 uppercase tracking-widest border border-[#D92323]">
                  MOST POPULAR VIP CHOICE
                </div>
              )}

              <div className="space-y-6">
                
                <div className="space-y-2">
                  <span className={`inline-block font-mono text-[10px] px-2.5 py-0.5 uppercase ${tier.badgeColor}`}>
                    {tier.name}
                  </span>
                  <p className="text-xs text-gray-400">{tier.tagline}</p>
                </div>

                <div className="border-y border-[#4A4C50] py-4 font-mono">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white">₹{price}</span>
                    <span className="text-xs text-gray-400">/{billingCycle === 'annual' ? 'YR' : 'MO'}</span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <p className="text-[10px] font-mono font-bold text-[#8B5A2B] uppercase">// PERKS INCLUDED:</p>
                  <ul className="space-y-2">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                        <Check className="w-4 h-4 text-[#D92323] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              <div className="pt-8">
                <button
                  onClick={() => tier.id !== 'free' && onOpenPayment(tier, billingCycle)}
                  className={`${tier.buttonStyle} w-full py-3.5 text-xs flex items-center justify-center gap-2`}
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

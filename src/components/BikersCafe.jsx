import React, { useState } from 'react';
import { 
  Coffee, 
  Flame, 
  Utensils, 
  Plus, 
  Check, 
  ShoppingBag, 
  Sparkles, 
  Clock, 
  ChevronRight,
  Heart
} from 'lucide-react';

export default function BikersCafe() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cart, setCart] = useState([]);

  const categories = [
    { id: 'all', name: 'All Offerings' },
    { id: 'coffee', name: 'Artisanal Coffees & Brews' },
    { id: 'breakfast', name: 'Bikers Heavy Breakfast' },
    { id: 'mains', name: 'Gourmet Burgers & Wraps' },
    { id: 'shakes', name: 'Protein Shakes & Cold Drinks' },
  ];

  const menuItems = [
    {
      id: 1,
      name: 'R.A.T.S Double Shot Nitro Cold Brew',
      category: 'coffee',
      price: 180,
      badge: 'Bestseller',
      desc: 'Infused with nitrogen for a velvety smooth texture and rich caffeine surge before long highway rides.',
      image: '☕'
    },
    {
      id: 2,
      name: 'High-Octane Espresso Macchiato',
      category: 'coffee',
      price: 140,
      badge: 'Artisanal',
      desc: 'Dark roast Arabica espresso topped with a dollop of silky micro-foam.',
      image: '☕'
    },
    {
      id: 3,
      name: 'Piston Power Protein Omelette',
      category: 'breakfast',
      price: 240,
      badge: 'High Protein',
      desc: '3-egg white omelette with sautéed spinach, mushrooms, cheddar, and toasted sourdough slices.',
      image: '🍳'
    },
    {
      id: 4,
      name: 'Highway Rider Pancake Stack',
      category: 'breakfast',
      price: 260,
      badge: 'Rider Favorite',
      desc: 'Fluffy buttermilk pancakes drizzled with organic maple syrup and whipped cinnamon butter.',
      image: '🥞'
    },
    {
      id: 5,
      name: 'Twin-Cylinder Smoked Bacon Burger',
      category: 'mains',
      price: 360,
      badge: 'Chef Special',
      desc: 'Double smashed tender beef/chicken patty, crispy bacon, aged cheddar, caramelised onions, and house sauce.',
      image: '🍔'
    },
    {
      id: 6,
      name: 'Touring Club Grilled Chicken Wrap',
      category: 'mains',
      price: 290,
      badge: 'Quick Fuel',
      desc: 'Herb-grilled chicken, fresh avocado, bell peppers, and chipotle mayo wrapped in a whole-wheat tortilla.',
      image: '🌯'
    },
    {
      id: 7,
      name: 'Dark Knight Dark Chocolate Shake',
      category: 'shakes',
      price: 220,
      badge: 'Decadent',
      desc: 'Blended 70% Belgian dark chocolate with whole milk and vanilla bean ice cream.',
      image: '🥤'
    },
    {
      id: 8,
      name: 'Whey Nitro Protein Recovery Smoothie',
      category: 'shakes',
      price: 250,
      badge: '30g Protein',
      desc: 'Whey protein isolate, banana, peanut butter, almond milk, and chia seeds.',
      image: '🥤'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 border border-white/10 bg-gradient-to-r from-[#141620] to-[#0A0B0E]">
        <div className="absolute top-0 right-0 w-full h-full opacity-30">
          <img src="/bikers-cafe.jpg" alt="RATS Bikers Cafe" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[#FF5500]/20 border border-[#FF5500]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#FF5500] uppercase">
            <Coffee className="w-4 h-4" /> Clubhouse Gastronomy
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase">
            R.A.T.S <span className="text-gradient-orange">Bikers Cafe</span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Where coffee purists meets highway legends. Enjoy specialty single-origin brews, high-protein rider bowls, and gourmet comfort food in our air-conditioned member lounge.
          </p>
        </div>
      </div>

      {/* Category Pills & Order Summary Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#FF5500] text-white orange-glow-sm'
                  : 'bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-white/30'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Live Cart Counter */}
        {cart.length > 0 && (
          <div className="flex items-center gap-3 bg-slate-900/90 border border-[#FF5500]/50 px-4 py-2 rounded-2xl">
            <ShoppingBag className="w-4 h-4 text-[#FF5500]" />
            <span className="text-xs text-slate-300 font-semibold">{cart.length} Items Selected</span>
            <span className="font-extrabold text-white text-sm">₹{cartTotal}</span>
            <button
              onClick={() => alert(`Pre-order placed for ₹${cartTotal}! Please notify your barista on arrival.`)}
              className="bg-[#FF5500] hover:bg-[#E04B00] text-white text-[11px] font-extrabold px-3 py-1 rounded-lg"
            >
              Pre-Order
            </button>
          </div>
        )}

      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-[#FF5500]/50 transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-3xl">{item.image}</span>
                <span className="bg-[#FF5500]/15 text-[#FF5500] border border-[#FF5500]/30 text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                  {item.badge}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-white text-sm group-hover:text-[#FF5500] transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between">
              <span className="font-extrabold text-base text-white">₹{item.price}</span>
              <button
                onClick={() => addToCart(item)}
                className="bg-slate-900 hover:bg-[#FF5500] text-slate-200 hover:text-white border border-white/10 p-2 rounded-xl transition-all"
                title="Add to Cafe Order"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

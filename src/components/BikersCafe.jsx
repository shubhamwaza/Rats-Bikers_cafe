import React, { useState } from 'react';
import { 
  Coffee, 
  Plus, 
  ShoppingBag
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
      badge: 'High Rev',
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
      name: 'The Spark Plug Smash Burger',
      category: 'mains',
      price: 360,
      badge: 'Chef Special',
      desc: 'Double smash patty, pepper jack, jalapeños, and our signature balsamic motor-oil glaze.',
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
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 min-h-screen">
      
      {/* Header Banner */}
      <div className="glass-panel p-8 sm:p-12 relative overflow-hidden border-orange-500/30">
        <div className="relative z-10 space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 glass-pill px-3 py-1 text-xs text-orange-400 font-mono">
            <Coffee className="w-3.5 h-3.5 text-orange-400" />
            <span>Clubhouse Gastronomy</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            R.A.T.S Bikers Cafe
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            Where coffee purists meet highway legends. Enjoy specialty single-origin brews, high-protein rider bowls, and gourmet comfort food in our air-conditioned member lounge.
          </p>
        </div>
      </div>

      {/* Category Pills & Order Summary */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex flex-wrap items-center gap-2 bg-white/[0.04] p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-full transition-all active:scale-95 ${
                activeCategory === cat.id
                  ? 'apple-btn-primary'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="flex items-center gap-3 glass-pill px-4 py-2 text-xs font-mono border-orange-500/50">
            <ShoppingBag className="w-4 h-4 text-orange-400" />
            <span className="text-slate-300 font-bold">{cart.length} ITEMS</span>
            <span className="font-extrabold text-white text-sm">₹{cartTotal}</span>
            <button
              onClick={() => alert(`Pre-order placed for ₹${cartTotal}! Please notify your barista on arrival.`)}
              className="apple-btn-primary text-[11px] px-3.5 py-1.5 font-semibold active:scale-95"
            >
              PRE-ORDER
            </button>
          </div>
        )}

      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="glass-card p-6 flex flex-col justify-between group transition-all"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-4xl p-2 rounded-2xl bg-white/10">{item.image}</span>
                <span className="glass-pill px-2.5 py-0.5 text-orange-400 font-mono text-[10px] font-semibold">
                  {item.badge}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-white text-base group-hover:text-orange-400 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between font-mono">
              <span className="font-extrabold text-lg text-white">₹{item.price}</span>
              <button
                onClick={() => addToCart(item)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange-500 text-white flex items-center justify-center transition-all active:scale-95"
                title="Add to Order"
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


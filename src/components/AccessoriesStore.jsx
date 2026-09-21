import React, { useState } from 'react';
import { 
  ShoppingBag, 
  ShieldCheck, 
  Sparkles, 
  Star, 
  Plus, 
  Check, 
  X,
  ExternalLink,
  Flame
} from 'lucide-react';

export default function AccessoriesStore() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeProductModal, setActiveProductModal] = useState(null);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'apparel', name: 'R.A.T.S Squad Apparel' },
    { id: 'helmets', name: 'Helmets & Helm Visors' },
    { id: 'gear', name: 'Riding Jackets & Gloves' },
    { id: 'accessories', name: 'Patches & Luggage' }
  ];

  const products = [
    {
      id: 101,
      name: 'R.A.T.S Heavy Duty Touring Hoodie',
      category: 'apparel',
      price: 2499,
      badge: 'Official Squad',
      desc: '350 GSM fleece hoodie with high-density embroidered R.A.T.S crest on back & arm pocket.',
      icon: '🧥'
    },
    {
      id: 102,
      name: 'Carbon Fiber Superbike Helmet',
      category: 'helmets',
      price: 18999,
      badge: 'ECE 22.06 Certified',
      desc: 'Ultra-lightweight 100% 3K carbon shell with Pinlock 120 max-vision anti-fog visor.',
      icon: '🪖'
    },
    {
      id: 103,
      name: 'Knuckle Armor Goat Leather Gloves',
      category: 'gear',
      price: 3499,
      badge: 'TPU Armor',
      desc: 'Full-grain goat leather with carbon slider protection and touchscreen conductive fingertips.',
      icon: '🧤'
    },
    {
      id: 104,
      name: 'All-Weather Cordura Riding Jacket',
      category: 'gear',
      price: 11499,
      badge: 'CE Level 2 Armor',
      desc: '600D Cordura textile jacket with Knox Level 2 shoulder, elbow, and spine protectors.',
      icon: '🧥'
    },
    {
      id: 105,
      name: 'R.A.T.S Metallic Enamel Crest Patch',
      category: 'accessories',
      price: 499,
      badge: 'Squad Emblem',
      desc: 'Heat-press backing or sew-on embroidered emblem for leather jackets & vest.',
      icon: '🏅'
    },
    {
      id: 106,
      name: 'Waterproof 45L Tail Bag & Luggage',
      category: 'accessories',
      price: 4299,
      badge: '100% Dry Roll',
      desc: 'Heavy-duty TPU waterproof tail bag with quick-release mounting straps for highway touring.',
      icon: '🎒'
    }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#FF5500]/10 border border-[#FF5500]/30 px-4 py-1.5 rounded-full text-xs font-bold text-[#FF5500] uppercase tracking-wider">
          <ShoppingBag className="w-4 h-4" />
          <span>Official Gear & Apparel</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
          Accessories & <span className="text-gradient-orange">Squad Store</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          Equip yourself with premium motorcycle gear, CE-certified protective wear, and official R.A.T.S squad apparel.
        </p>

        {/* Category Pills */}
        <div className="pt-4 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#FF5500] text-white orange-glow-sm'
                  : 'bg-slate-900 border border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#FF5500]/50 transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-4xl">{p.icon}</span>
                <span className="bg-[#FF5500]/15 text-[#FF5500] border border-[#FF5500]/30 text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                  {p.badge}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-white text-base group-hover:text-[#FF5500] transition-colors">
                  {p.name}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 mt-6 flex items-center justify-between">
              <span className="font-black text-xl text-white">₹{p.price}</span>
              <button
                onClick={() => setActiveProductModal(p)}
                className="bg-[#FF5500] hover:bg-[#E04B00] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-md"
              >
                Inspect Gear
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Product Detail Modal */}
      {activeProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-[#10121A] border border-white/10 w-full max-w-lg rounded-3xl p-6 sm:p-8 space-y-6 relative">
            <button
              onClick={() => setActiveProductModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center space-y-3">
              <span className="text-5xl">{activeProductModal.icon}</span>
              <span className="inline-block bg-[#FF5500]/20 text-[#FF5500] text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                {activeProductModal.badge}
              </span>
              <h3 className="text-2xl font-black text-white">{activeProductModal.name}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{activeProductModal.desc}</p>
            </div>

            <div className="border-y border-white/10 py-4 flex justify-between items-center text-sm">
              <span className="text-slate-400">Clubhouse Store Price:</span>
              <span className="font-black text-2xl text-[#FF5500]">₹{activeProductModal.price}</span>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => {
                  alert(`Inquiry sent for ${activeProductModal.name}! Visit R.A.T.S Clubhouse store to try it on.`);
                  setActiveProductModal(null);
                }}
                className="w-full bg-[#FF5500] hover:bg-[#E04B00] text-white font-extrabold text-xs py-3.5 rounded-xl shadow-lg orange-glow text-center"
              >
                Reserve in Clubhouse Store
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

import React, { useState } from 'react';
import { 
  ShoppingBag, 
  X
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
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 min-h-screen">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 text-xs font-mono text-orange-400">
          <ShoppingBag className="w-4 h-4 text-orange-400" />
          <span>Official Gear & Apparel</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Accessories & <span className="bg-gradient-to-r from-orange-400 to-rose-500 bg-clip-text text-transparent">Squad Store</span>
        </h1>
        <p className="text-slate-400 text-sm">
          Equip yourself with premium motorcycle gear, CE-certified protective wear, and official R.A.T.S squad apparel.
        </p>

        {/* Category Pills */}
        <div className="pt-4 flex flex-wrap justify-center gap-2 bg-white/[0.04] p-1.5 rounded-full border border-white/10 w-fit mx-auto backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all active:scale-95 ${
                selectedCategory === cat.id
                  ? 'apple-btn-primary'
                  : 'text-slate-400 hover:text-white hover:bg-white/10'
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
            className="glass-card p-6 rounded-3xl border border-white/10 hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-4xl p-2 rounded-2xl bg-white/10">{p.icon}</span>
                <span className="glass-pill px-2.5 py-0.5 text-orange-400 font-mono text-[10px] font-semibold">
                  {p.badge}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-white text-base group-hover:text-orange-400 transition-colors">
                  {p.name}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 mt-6 flex items-center justify-between font-mono">
              <span className="font-extrabold text-xl text-white">₹{p.price}</span>
              <button
                onClick={() => setActiveProductModal(p)}
                className="apple-btn-primary text-xs font-semibold px-4 py-2 active:scale-95"
              >
                Inspect Gear
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Product Detail Modal */}
      {activeProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-apple-modal">
          <div className="glass-panel w-full max-w-lg rounded-3xl p-6 sm:p-8 space-y-6 relative border-white/20">
            <button
              onClick={() => setActiveProductModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-400 hover:text-white transition-all active:scale-95"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center space-y-3">
              <span className="text-5xl inline-block p-4 rounded-3xl bg-white/10">{activeProductModal.icon}</span>
              <div>
                <span className="glass-pill px-3 py-1 text-orange-400 font-mono text-[10px] font-semibold">
                  {activeProductModal.badge}
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">{activeProductModal.name}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{activeProductModal.desc}</p>
            </div>

            <div className="border-y border-white/10 py-4 flex justify-between items-center text-sm font-mono">
              <span className="text-slate-400">Clubhouse Store Price:</span>
              <span className="font-extrabold text-2xl text-white bg-gradient-to-r from-orange-400 to-rose-500 bg-clip-text text-transparent">₹{activeProductModal.price}</span>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => {
                  alert(`Inquiry sent for ${activeProductModal.name}! Visit R.A.T.S Clubhouse store to try it on.`);
                  setActiveProductModal(null);
                }}
                className="apple-btn-primary w-full py-3.5 text-xs font-semibold text-center active:scale-95"
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


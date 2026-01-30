import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  X, 
  ChevronRight, 
  Star, 
  Instagram, 
  Facebook, 
  Truck, 
  ShieldCheck, 
  Flower2
} from 'lucide-react';

// --- Mock Data ---
const PRODUCTS = [
  {
    id: 1,
    name: "Eternal Red Rose",
    price: 24.99,
    category: "Individual",
    description: "A single, perfectly crafted deep red rose that never fades. Includes a personalized gift tag.",
    image: "https://images.unsplash.com/photo-1621508620202-6031024376c7?auto=format&fit=crop&q=80&w=600",
    color: "Red",
    rating: 5
  },
  {
    id: 2,
    name: "Blushing Tulip Bouquet",
    price: 58.00,
    category: "Bouquets",
    description: "A bundle of 5 pastel pink tulips wrapped in premium craft paper and tied with a silk ribbon.",
    image: "https://images.unsplash.com/photo-1596438459194-f275f413d6ff?auto=format&fit=crop&q=80&w=600",
    color: "Pink",
    rating: 4.8
  },
  {
    id: 3,
    name: "Sun-Kissed Daisy Pot",
    price: 32.50,
    category: "Decor",
    description: "Hand-potted crochet daisies in a mini terracotta pot. Perfect for office desks.",
    image: "https://images.unsplash.com/photo-1599110906885-b02449830850?auto=format&fit=crop&q=80&w=600",
    color: "Yellow",
    rating: 4.9
  },
  {
    id: 4,
    name: "Lavender Dreams Bundle",
    price: 45.00,
    category: "Bouquets",
    description: "Soothing lavender sprigs paired with white lilies. Scented with essential oils.",
    image: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&q=80&w=600",
    color: "Purple",
    rating: 5
  },
  {
    id: 5,
    name: "Sweetheart Sunflower",
    price: 18.00,
    category: "Individual",
    description: "A bright, cheerful sunflower to show your sunshine how much they mean to you.",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&q=80&w=600",
    color: "Yellow",
    rating: 4.7
  },
  {
    id: 6,
    name: "Midnight Lily",
    price: 29.00,
    category: "Individual",
    description: "Elegant white lily with contrasting dark green leaves. A classic statement of love.",
    image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&q=80&w=600",
    color: "White",
    rating: 4.9
  }
];

// --- Sub-Components ---

const Navbar = ({ cartCount, onCartClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Flower2 className="text-rose-500" size={28} />
          <span className={`text-2xl font-serif font-bold ${isScrolled ? 'text-gray-900' : 'text-gray-800'}`}>Bloom & Knot</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider text-gray-700">
          <a href="#" className="hover:text-rose-500 transition">Shop All</a>
          <a href="#" className="hover:text-rose-500 transition">Our Story</a>
          <a href="#" className="hover:text-rose-500 transition">Care Guide</a>
        </div>

        <button 
          onClick={onCartClick}
          className="relative p-2 hover:bg-rose-50 rounded-full transition"
        >
          <ShoppingBag className="text-gray-800" size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-[90vh] flex items-center overflow-hidden bg-[#fdf8f7]">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div className="z-10">
        <div className="inline-block px-4 py-1 rounded-full bg-rose-100 text-rose-600 text-sm font-bold mb-6">
          Valentine's Collection 2024
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-tight mb-6">
          Flowers that <br /> 
          <span className="text-rose-500 italic">Bloom Forever</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md">
          Gift a symbol of love that never wilts. Hand-crocheted with premium cotton yarn and a whole lot of heart.
        </p>
        <div className="flex gap-4">
          <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-bold transition flex items-center gap-2">
            Shop the Collection <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-rose-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <img 
          src="https://images.unsplash.com/photo-1621508620202-6031024376c7?auto=format&fit=crop&q=80&w=800" 
          alt="Main Bouquet" 
          className="rounded-3xl shadow-2xl relative z-10 transform hover:scale-105 transition duration-700"
        />
      </div>
    </div>
  </section>
);

const ProductCard = ({ product, onAddToCart }) => (
  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
    <div className="relative aspect-[4/5] overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
      />
      <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full text-gray-400 hover:text-rose-500 transition">
        <Heart size={20} fill={product.rating > 4.8 ? "currentColor" : "none"} />
      </button>
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition duration-300">
        <button 
          onClick={() => onAddToCart(product)}
          className="w-full bg-white text-gray-900 font-bold py-3 rounded-xl shadow-lg hover:bg-rose-500 hover:text-white transition"
        >
          Quick Add
        </button>
      </div>
    </div>
    <div className="p-5">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
        <span className="font-bold text-rose-600">${product.price.toFixed(2)}</span>
      </div>
      <div className="flex items-center gap-1 text-yellow-400 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
        ))}
        <span className="text-xs text-gray-400 ml-1">({product.rating})</span>
      </div>
      <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
    </div>
  </div>
);

const CartDrawer = ({ isOpen, onClose, cartItems, onRemove, onUpdateQty }) => {
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold flex items-center gap-2">
            Your Cart <span className="text-gray-400 font-normal">({cartItems.length})</span>
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingBag className="mx-auto text-gray-200 mb-4" size={64} />
              <p className="text-gray-500">Your basket is empty</p>
              <button onClick={onClose} className="mt-4 text-rose-500 font-bold underline">Start Shopping</button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-24 object-cover rounded-lg" />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-bold">{item.name}</h4>
                    <button onClick={() => onRemove(item.id)} className="text-gray-400 hover:text-rose-500"><X size={16} /></button>
                  </div>
                  <p className="text-sm text-rose-500 font-bold mb-3">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-3">
                    <div className="flex border rounded-lg">
                      <button onClick={() => onUpdateQty(item.id, -1)} className="px-3 py-1 hover:bg-gray-50">-</button>
                      <span className="px-3 py-1 border-x font-medium">{item.quantity}</span>
                      <button onClick={() => onUpdateQty(item.id, 1)} className="px-3 py-1 hover:bg-gray-50">+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t bg-gray-50">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-2xl font-bold">${total.toFixed(2)}</span>
          </div>
          <button 
            disabled={cartItems.length === 0}
            className="w-full bg-rose-500 hover:bg-rose-600 disabled:bg-gray-300 text-white font-bold py-4 rounded-xl shadow-lg transition"
          >
            Proceed to Checkout
          </button>
          <p className="text-center text-xs text-gray-400 mt-4">Free shipping on orders over $50</p>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
      <div className="col-span-1 md:col-span-1">
        <div className="flex items-center gap-2 mb-6">
          <Flower2 className="text-rose-500" size={28} />
          <span className="text-2xl font-serif font-bold">Bloom & Knot</span>
        </div>
        <p className="text-gray-400 mb-6">
          Creating timeless botanical beauty through the art of crochet. Each stitch is a promise of forever.
        </p>
        <div className="flex gap-4">
          <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-rose-500 transition"><Instagram size={20} /></a>
          <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-rose-500 transition"><Facebook size={20} /></a>
        </div>
      </div>
      
      <div>
        <h4 className="font-bold mb-6">Shop</h4>
        <ul className="space-y-4 text-gray-400">
          <li><a href="#" className="hover:text-white transition">All Flowers</a></li>
          <li><a href="#" className="hover:text-white transition">Valentine's Bundles</a></li>
          <li><a href="#" className="hover:text-white transition">Custom Bouquets</a></li>
          <li><a href="#" className="hover:text-white transition">Sale</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-6">Support</h4>
        <ul className="space-y-4 text-gray-400">
          <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
          <li><a href="#" className="hover:text-white transition">Shipping Policy</a></li>
          <li><a href="#" className="hover:text-white transition">Returns</a></li>
          <li><a href="#" className="hover:text-white transition">FAQs</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-6">Newsletter</h4>
        <p className="text-gray-400 mb-4 text-sm">Join the floral club for 10% off your first order!</p>
        <div className="flex gap-2">
          <input 
            type="email" 
            placeholder="Your email" 
            className="bg-gray-800 border-none rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-rose-500"
          />
          <button className="bg-rose-500 px-4 py-2 rounded-lg font-bold">Join</button>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
      <p>&copy; 2024 Bloom & Knot. All rights reserved.</p>
    </div>
  </footer>
);

// --- Main App Component ---

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const filteredProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-rose-100 selection:text-rose-900">
      <Navbar cartCount={cart.reduce((a, b) => a + b.quantity, 0)} onCartClick={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />

        {/* Features Bar */}
        <section className="bg-white py-12 border-y">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 justify-center">
              <div className="p-3 bg-rose-50 text-rose-500 rounded-full"><Truck size={24} /></div>
              <div>
                <h4 className="font-bold">Fast Delivery</h4>
                <p className="text-sm text-gray-500">Express shipping for V-Day arrivals</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <div className="p-3 bg-rose-50 text-rose-500 rounded-full"><Heart size={24} /></div>
              <div>
                <h4 className="font-bold">100% Handmade</h4>
                <p className="text-sm text-gray-500">Every petal crafted by hand</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <div className="p-3 bg-rose-50 text-rose-500 rounded-full"><ShieldCheck size={24} /></div>
              <div>
                <h4 className="font-bold">Eco-Friendly</h4>
                <p className="text-sm text-gray-500">Organic cotton & sustainable packaging</p>
              </div>
            </div>
          </div>
        </section>

        {/* Shop Section */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">The Valentine's Collection</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-10">
              Discover our handcrafted selection of eternal blooms. From romantic red roses to cheerful sunflowers, 
              find the perfect piece for your special someone.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {["All", "Individual", "Bouquets", "Decor"].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full font-medium transition ${activeCategory === cat ? 'bg-rose-500 text-white shadow-lg shadow-rose-200' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        </section>

        {/* Customization Callout */}
        <section className="bg-rose-500 py-20 px-6 text-white text-center rounded-[3rem] mx-6 mb-24 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="grid grid-cols-6 h-full w-full">
              {[...Array(12)].map((_, i) => <Flower2 key={i} className="m-auto" size={48} />)}
            </div>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-serif font-bold mb-6">Want something bespoke?</h2>
            <p className="text-rose-100 mb-8 max-w-xl mx-auto text-lg italic">
              "We love creating unique arrangements. Choose your colors, flowers, and message for a truly one-of-a-kind gift."
            </p>
            <button className="bg-white text-rose-500 px-10 py-4 rounded-full font-bold hover:bg-rose-50 transition shadow-xl">
              Request a Custom Order
            </button>
          </div>
        </section>
      </main>

      <Footer />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cart}
        onRemove={removeFromCart}
        onUpdateQty={updateQuantity}
      />
    </div>
  );
}
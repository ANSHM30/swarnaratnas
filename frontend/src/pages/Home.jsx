import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Shield, Truck, Award, ChevronRight, ArrowRight, ShoppingCart, CheckCircle, Package, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import { products } from '../data/products';

const Home = () => {
  const bestSellers = products.slice(0, 8);
  
  const categories = [
    { name: 'Exotic Nuts', img: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400', color: 'bg-emerald-50' },
    { name: 'Premium Dates', img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400', color: 'bg-amber-50' },
    { name: 'Dry Berries', img: 'https://images.unsplash.com/photo-1564729694921-2e9a7b79c9a5?w=400', color: 'bg-stone-50' },
    { name: 'Luxury Gifts', img: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400', color: 'bg-emerald-50' },
  ];

  return (
    <Layout>
      <Hero />

      {/* Trust Badges - Refined */}
      <div className="bg-stone-50 border-b border-stone-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: CheckCircle, text: "Certified Organic", sub: "100% Purity Guaranteed" },
              { icon: Package, text: "Sustainable Pack", sub: "Eco-friendly Materials" },
              { icon: Globe, text: "Directly Sourced", sub: "From Global Orchards" },
              { icon: Truck, text: "Express Shipping", sub: "Across All of India" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <item.icon className="w-8 h-8 text-emerald-900 mb-3" />
                <span className="font-black uppercase text-[10px] tracking-[0.2em] text-emerald-950">{item.text}</span>
                <span className="text-[10px] text-stone-400 mt-1 uppercase tracking-widest">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shop By Category - Modern Squares */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black text-emerald-900 uppercase tracking-[0.4em] mb-4">Curated Selections</h2>
            <h3 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tight">Our Collections</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, i) => (
              <Link key={i} to={`/products?category=${cat.name.toLowerCase()}`} className="group relative aspect-[4/5] overflow-hidden bg-stone-100">
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h4 className="text-white font-black uppercase tracking-[0.2em] text-sm mb-2">{cat.name}</h4>
                  <div className="w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - High Contrast */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-[10px] font-black text-emerald-900 uppercase tracking-[0.4em] mb-4">Most Desired</h2>
              <h3 className="text-4xl font-black text-stone-900 tracking-tight">Bestsellers</h3>
            </div>
            <Link to="/products" className="group flex items-center font-black text-emerald-900 uppercase tracking-[0.2em] text-[10px]">
              View All Products
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>

          <Carousel>
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Carousel>
        </div>
      </section>

      {/* Luxury Promo Section */}
      <section className="py-24 bg-[#1a2e1a] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <img 
                src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800" 
                className="w-full h-full object-cover" 
                alt="Craftsmanship" 
              />
              <div className="absolute -inset-4 border border-[#d4af37]/30 -z-10" />
            </motion.div>
            
            <div className="space-y-8">
              <p className="text-[#d4af37] text-[10px] font-black tracking-[0.4em] uppercase">The Swarnaratna Standard</p>
              <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight italic">Elegance in Every <br /> Single Kernel.</h2>
              <p className="text-stone-300 text-lg font-light leading-relaxed">
                Our legacy is built on the pursuit of perfection. From the sun-drenched hills of California to the ancient groves of the Middle East, we bring you dry fruits that are as beautiful as they are nutritious.
              </p>
              <Link 
                to="/about" 
                className="inline-block px-12 py-5 border border-[#d4af37] text-[#d4af37] font-black uppercase tracking-[0.2em] text-[11px] hover:bg-[#d4af37] hover:text-emerald-950 transition-all duration-500"
              >
                Our Heritage
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: "Pure Heritage", desc: "Generations of expertise in selecting only the most premium grades." },
              { title: "Global Reach", desc: "Sourcing from 20+ countries to ensure variety and authenticity." },
              { title: "Freshly Crafted", desc: "Small-batch processing to maintain the natural oils and flavors." }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="w-12 h-[1px] bg-emerald-900" />
                <h4 className="font-black uppercase tracking-[0.2em] text-emerald-950">{item.title}</h4>
                <p className="text-stone-500 font-light leading-relaxed text-sm italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

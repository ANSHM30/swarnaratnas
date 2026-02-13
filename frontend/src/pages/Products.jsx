import React, { useState, useMemo } from 'react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { Filter, Search } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCategory, searchTerm, sortBy]);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-emerald-900 font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">Premium Collection</span>
          <h1 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tight">Our Products</h1>
          <div className="w-12 h-[1px] bg-emerald-900 mx-auto mt-6" />
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for Dry Fruits, Nuts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-stone-50 border border-stone-100 rounded-none focus:bg-white focus:ring-0 focus:border-emerald-900 transition-all font-light tracking-wide outline-none"
              />
            </div>

            {/* Sort */}
            <div className="w-full lg:w-64">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-4 bg-stone-50 border border-stone-100 rounded-none focus:bg-white focus:ring-0 focus:border-emerald-900 transition-all font-black text-[10px] uppercase tracking-widest outline-none"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center px-4 py-3 border border-stone-200 rounded-none hover:bg-stone-50 font-black text-[10px] uppercase tracking-widest"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </button>
          </div>

          {/* Category Filters */}
          <div className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
            <div className="flex flex-wrap gap-4 mb-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 border transition-all duration-300 text-[10px] font-black uppercase tracking-widest ${
                    selectedCategory === category.id
                      ? 'bg-emerald-900 border-emerald-900 text-white'
                      : 'bg-white border-stone-200 text-stone-600 hover:border-emerald-900 hover:text-emerald-900'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 flex items-center justify-between border-b border-stone-100 pb-4">
          <p className="text-stone-400 text-[10px] uppercase tracking-widest font-bold">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="text-stone-200 mb-8 flex justify-center">
              <Search className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-black text-stone-900 uppercase tracking-widest mb-4">No results found</h3>
            <p className="text-stone-400 font-light mb-8 max-w-md mx-auto italic">
              We couldn't find any products matching your current criteria. Try widening your search.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSortBy('name');
              }}
              className="px-8 py-4 border border-emerald-900 text-emerald-900 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-emerald-900 hover:text-white transition-all duration-300"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Products;
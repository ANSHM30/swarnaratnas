import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, User, LogOut, LogIn, Search, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { totalItems } = useCart();
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Gifts', href: '/gifts' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-full">
      {/* Premium Top Announcement - Elegant & Minimal */}
      <div className="bg-[#1a2e1a] text-[#d4af37] py-2 px-4 sm:px-6 lg:px-8 text-[10px] sm:text-xs flex justify-center items-center font-bold tracking-[0.2em] uppercase border-b border-white/10">
        <p>Sourced Globally • Crafted Honestly • Delivered Fresh</p>
      </div>

      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0 transition-transform duration-300 hover:scale-105">
              <img 
                src="/Swarnaratna_Logo.jpeg" 
                alt="Swarnaratna Logo" 
                className="h-16 md:h-24 w-auto object-contain brightness-110 contrast-105"
              />
            </Link>

            {/* Desktop Navigation - Minimalist */}
            <nav className="hidden lg:flex space-x-10 items-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-[13px] font-black uppercase tracking-[0.15em] transition-all duration-300 relative group ${
                    isActive(item.href) ? 'text-emerald-900' : 'text-stone-400 hover:text-emerald-900'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-emerald-900 transition-all duration-300 ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2 sm:space-x-5">
              {/* Search Toggle */}
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-emerald-950 hover:bg-stone-50 rounded-full transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Desktop User Section */}
              <div className="hidden lg:flex items-center border-l border-stone-200 pl-5">
                {user ? (
                  <div className="flex items-center space-x-3">
                    <span className="text-[11px] font-black text-emerald-950 uppercase tracking-widest">Hi, {user.name.split(' ')[0]}</span>
                    <button
                      onClick={logout}
                      className="p-2 text-stone-400 hover:text-red-600 transition-colors"
                      title="Logout"
                    >
                      <LogOut className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="flex items-center space-x-2 text-emerald-950 hover:text-emerald-700 transition-colors"
                  >
                    <User className="w-5 h-5" />
                    <span className="hidden xl:inline text-[11px] font-black uppercase tracking-[0.15em]">Account</span>
                  </Link>
                )}
              </div>

              {/* Cart */}
              <Link
                to="/cart"
                className="relative p-2 text-emerald-950 hover:bg-stone-50 rounded-full transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 bg-emerald-800 text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-emerald-950 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Search Bar Dropdown - Elegant Search */}
          {isSearchOpen && (
            <div className="pb-6 pt-2">
              <div className="relative max-w-3xl mx-auto">
                <input 
                  autoFocus
                  type="text" 
                  placeholder="What are you looking for?" 
                  className="w-full border-b-2 border-emerald-900/10 bg-transparent px-10 py-4 focus:outline-none focus:border-emerald-900 transition-all text-xl font-light italic"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      navigate(`/products?q=${e.target.value}`);
                      setIsSearchOpen(false);
                    }
                  }}
                />
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-emerald-900 w-6 h-6" />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 hover:text-emerald-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Navigation Sidebar */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white fixed inset-0 z-[60] p-8 animate-in fade-in slide-in-from-top duration-300">
            <div className="flex justify-between items-center mb-12">
              <img src="/Swarnaratna_Logo.jpeg" className="h-10 w-auto" alt="Logo" />
              <button onClick={() => setIsMenuOpen(false)}><X className="w-8 h-8 text-emerald-950" /></button>
            </div>
            <div className="space-y-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-3xl font-black uppercase tracking-tighter ${
                    isActive(item.href) ? 'text-emerald-900' : 'text-stone-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-12 space-y-6">
                {user ? (
                  <button onClick={logout} className="text-red-600 font-bold uppercase tracking-widest text-sm">Sign Out</button>
                ) : (
                  <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block text-emerald-950 font-bold uppercase tracking-widest text-sm">Sign In</Link>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
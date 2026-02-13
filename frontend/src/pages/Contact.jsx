import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you. Our concierge will reach out to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Layout>
      <div className="bg-stone-50 py-32 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-[#d4af37] text-[10px] font-black tracking-[0.4em] uppercase mb-8">Concierge Services</h2>
            <h1 className="text-5xl md:text-8xl font-black text-stone-900 leading-none tracking-tighter mb-12">
              Connect <br />
              <span className="italic font-light">With Us.</span>
            </h1>
            <p className="text-xl text-stone-500 font-light leading-relaxed">
              Whether you're seeking a custom gift collection or have inquiries about our sourcing, our team is here to assist with artisanal care.
            </p>
          </div>
        </div>
      </div>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-32">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-16">
              <div className="space-y-12">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-stone-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-emerald-900" />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-900 mb-2">Private Line</h3>
                    <p className="text-stone-500 font-light">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-stone-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-emerald-900" />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-900 mb-2">Concierge Email</h3>
                    <p className="text-stone-500 font-light tracking-wide">concierge@swarnaratna.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-stone-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-900" />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-900 mb-2">Headquarters</h3>
                    <p className="text-stone-500 font-light leading-relaxed">
                      Suite 402, Swarna Ratna Towers,<br />
                      Marine Drive, Mumbai, MH 400002
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-12 border border-stone-100 bg-stone-50/50">
                <h4 className="font-black text-stone-900 uppercase tracking-widest text-xs mb-4 text-center">Opening Hours</h4>
                <div className="space-y-2 text-center">
                  <p className="text-stone-400 text-xs font-light tracking-widest">MON — SAT: 09:00 — 20:00</p>
                  <p className="text-stone-400 text-xs font-light tracking-widest">SUN: 10:00 — 18:00</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-transparent border-b border-stone-200 py-4 focus:outline-none focus:border-emerald-900 transition-all font-light italic text-lg"
                      placeholder="e.g. Alexander Pierce"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-transparent border-b border-stone-200 py-4 focus:outline-none focus:border-emerald-900 transition-all font-light italic text-lg"
                      placeholder="e.g. alex@luxury.com"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">Subject of Inquiry</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-transparent border-b border-stone-200 py-4 focus:outline-none focus:border-emerald-900 transition-all font-light italic text-lg"
                    placeholder="e.g. Custom Gifting Collection"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">Your Message</label>
                  <textarea
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-transparent border-b border-stone-200 py-4 focus:outline-none focus:border-emerald-900 transition-all font-light italic text-lg resize-none"
                    placeholder="How may we assist you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-16 py-5 bg-emerald-900 text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-emerald-800 transition-all flex items-center justify-center space-x-3 group"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

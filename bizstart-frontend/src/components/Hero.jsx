import React from 'react';
import heroImg from '../assets/hero-woman.jpg';
const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Unlock Your Business <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-500 to-teal-100">Potential with AI</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              AI-powered mentorship, micro-learning modules, and interactive tools to help you launch and grow your business sustainably.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-teal-100">
              Start Learning Free
            </button>
          </div>

          {/* Feature Quick-Links Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {/* AI Mentor */}
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all group">
              <span className="text-2xl group-hover:scale-110 transition-transform">👤</span>
              <span className="font-bold text-slate-800 text-sm md:text-base">AI Mentor</span>
            </div>

            {/* Business Plan */}
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all group">
              <span className="text-2xl group-hover:scale-110 transition-transform">📋</span>
              <span className="font-bold text-slate-800 text-sm md:text-base">Plan Builder</span>
            </div>

            {/* Financial Toolkit - NEW */}
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all group">
              <span className="text-2xl group-hover:scale-110 transition-transform">📊</span>
              <span className="font-bold text-slate-800 text-sm md:text-base">Finance Kit</span>
            </div>

            {/* Learning Roadmap - NEW */}
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all group">
              <span className="text-2xl group-hover:scale-110 transition-transform">🛣️</span>
              <span className="font-bold text-slate-800 text-sm md:text-base">Roadmap</span>
            </div>
          </div>

      </div>
        {/* Right Visual Area */}
        <div className="relative">
          <div className=" overflow-hidden w-full">
            <img 
              src={heroImg}
              alt="Entrepreneur using BizStart AI" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
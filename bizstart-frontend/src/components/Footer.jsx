import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Final CTA Banner */}
        <div className="bg-teal-500 rounded-[3rem] p-10 md:p-16 text-center mb-20 shadow-2xl shadow-teal-500/20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Ready to Build Your <br /> Sustainable Business?
          </h2>
          <button className="bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg">
            Start Learning Free
          </button>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-12 border-b border-slate-800 pb-16 mb-10">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-teal-500 rounded-lg"></div>
              <span className="text-2xl font-bold tracking-tight">BizStart AI</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              AI-powered mentorship and interactive tools for the next generation of Nigerian entrepreneurs.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-teal-400">AI Mentor</a></li>
              <li><a href="#" className="hover:text-teal-400">Roadmaps</a></li>
              <li><a href="#" className="hover:text-teal-400">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-teal-400">Success Stories</a></li>
              <li><a href="#" className="hover:text-teal-400">Blog</a></li>
              <li><a href="#" className="hover:text-teal-400">Guides</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-teal-400">About Us</a></li>
              <li><a href="#" className="hover:text-teal-400">Contact</a></li>
              <li><a href="#" className="hover:text-teal-400">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© 2026 BizStart AI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
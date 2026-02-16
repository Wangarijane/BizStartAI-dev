import React, { useState } from 'react'; // Added useState
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Logic to track mobile menu

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-2">
          {/* The Logo Image */}
          <img 
            src={logo} 
            alt="BizStart AI Logo" 
            className="w-8 h-8 object-contain" 
          />
          
          {/* The Text */}
          <span className="text-xl font-bold text-slate-900 tracking-tight">
            BizStart <span className="text-[#00BBA7]">AI</span>
          </span>
        </div>
        
        {/* HAMBURGER BUTTON - Only shows on mobile */}
        <button 
          className="md:hidden text-slate-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* YOUR ORIGINAL DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="/#how-it-works" className="hover:text-teal-600 transition-colors">Features</a>
          <a href="/#pricing" className="hover:text-teal-600 transition-colors">Pricing</a>
          <a href="/#testimonials" className="hover:text-teal-600 transition-colors">Testimonials</a>
          
          <Link to="/login" className="hover:text-teal-600 transition-colors">Login</Link>
          
          <Link 
            to="/signup" 
            className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2.5 rounded-full transition-all shadow-md shadow-teal-100 inline-block text-center"
          >
            Start Learning Free
          </Link>
        </div>
      </div>

      {/* MOBILE MENU - Only shows when isOpen is true */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-50 flex flex-col px-8 py-6 gap-4 text-sm font-medium text-slate-600">
          <a href="/#how-it-works" onClick={() => setIsOpen(false)} className="hover:text-teal-600">Features</a>
          <a href="/#pricing" onClick={() => setIsOpen(false)} className="hover:text-teal-600">Pricing</a>
          <a href="/#testimonials" onClick={() => setIsOpen(false)} className="hover:text-teal-600">Testimonials</a>
          <hr className="border-gray-100" />
          <Link to="/login" onClick={() => setIsOpen(false)} className="hover:text-teal-600">Login</Link>
          <Link 
            to="/signup" 
            onClick={() => setIsOpen(false)}
            className="bg-teal-500 text-white px-5 py-3 rounded-full text-center font-bold"
          >
            Start Learning Free
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
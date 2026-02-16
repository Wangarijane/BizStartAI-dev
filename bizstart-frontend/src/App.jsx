import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Hero from './components/Hero'; 
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <Routes>
          {/* Landing Page Route */}
          <Route path="/" element={
            <>
              <Hero />
              <ProblemSection />
              <HowItWorks />
              <Pricing />
              <Testimonials />
            </>
          } />

          {/* Login Page Route */}
          <Route path="/login" element={<Login />} />

          {/* Signup Page Route */}
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
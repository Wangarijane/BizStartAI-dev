import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Take Personalized Assessment",
      desc: "Identify your business strengths and knowledge gaps with our AI-powered quiz.",
      features: ["Personalized learning paths", "AI Business Mentor access", "Smart Builder setup"],
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: "02",
      title: "Get Your Learning Roadmap",
      desc: "Receive a tailored step-by-step plan based on your industry and current stage.",
      features: ["Industry-specific modules", "Progress tracking", "Goal setting"],
      color: "bg-teal-50 text-teal-600"
    },
    {
      id: "03",
      title: "Scale with AI Mentorship",
      desc: "Chat with your 24/7 AI mentor to solve pricing, marketing, and finance hurdles.",
      features: ["Interactive chat", "Financial calculators", "PDF Exporting"],
      color: "bg-emerald-50 text-emerald-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">How BizStart AI Works</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Start your entrepreneurial journey with AI-powered, step-by-step, personalized mentorship.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-4xl border border-slate-100 hover:shadow-xl hover:shadow-slate-100 transition-all">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold mb-6 ${step.color}`}>
                {step.id}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed">{step.desc}</p>
              
              <ul className="space-y-3">
                {step.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <span className="text-teal-500">✓</span> {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-8 w-full py-3 bg-white border border-slate-200 rounded-full font-bold text-slate-800 hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-all text-sm">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
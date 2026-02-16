import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "₦0",
      desc: "Ideal for aspiring founders in the ideation phase.",
      features: ["Basic Learning Modules", "5 AI Mentor Chats / mo", "Access to Community"],
      button: "Get Started",
      highlight: false
    },
    {
      name: "Standard",
      price: "₦10,000",
      desc: "Perfect for active learners building their first plan.",
      features: ["Unlimited Learning Modules", "50 AI Mentor Chats / mo", "Business Plan Builder", "PDF Exports"],
      button: "Choose Standard",
      highlight: true // This will be the featured card
    },
    {
      name: "Growth",
      price: "₦25,000",
      desc: "For established SMEs ready to scale operations.",
      features: ["Unlimited AI Mentorship", "Full Financial Toolkit", "Pitch Deck Generator", "Priority Support"],
      button: "Choose Growth",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Transparent Pricing</h2>
        <p className="text-slate-600 mb-16 max-w-2xl mx-auto">
          From ideation to scaling, choose the plan that matches your business journey.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-[2.5rem] text-left transition-all ${
                plan.highlight 
                ? 'bg-slate-900 text-white shadow-2xl shadow-teal-900/20 scale-105 border-2 border-teal-500 relative' 
                : 'bg-white text-slate-900 border border-slate-200'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-500 text-slate-900 px-4 py-1 rounded-full text-xs font-bold uppercase">
                  Most Popular
                </div>
              )}
              <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-teal-400' : 'text-slate-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                {plan.desc}
              </p>
              <div className="text-4xl font-extrabold mb-8">
                {plan.price}<span className="text-lg font-normal opacity-50">/mo</span>
              </div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-teal-500 font-bold">✓</span> {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-full font-bold transition-all ${
                plan.highlight 
                ? 'bg-teal-500 text-slate-900 hover:bg-teal-400' 
                : 'border border-slate-200 hover:bg-slate-50'
              }`}>
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
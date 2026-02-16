import React from 'react';

const Testimonials = () => {
  const stories = [
    {
      name: "Amaka O.",
      role: "Retailer, Lagos",
      quote: "The AI Mentor helped me fix my pricing in one afternoon. My profit margins are finally healthy.",
      avatar: "👩🏾‍💼"
    },
    {
      name: "David K.",
      role: "Tech Founder, Abuja",
      quote: "Building my business plan used to be a nightmare. BizStart AI made it feel like a professional conversation.",
      avatar: "👨🏾‍💻"
    },
    {
      name: "Blessing E.",
      role: "SME Owner, Port Harcourt",
      quote: "The financial toolkit gave me the confidence to apply for a loan. I finally understand my cash flow.",
      avatar: "👩🏾‍🔬"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 text-center mb-16">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <div key={i} className="p-8 rounded-4xl bg-slate-50 border border-slate-100 relative">
              <div className="text-4xl mb-4">{s.avatar}</div>
              <p className="text-slate-600 italic mb-6">"{s.quote}"</p>
              <div>
                <h4 className="font-bold text-slate-900">{s.name}</h4>
                <p className="text-sm text-teal-600 font-medium">{s.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
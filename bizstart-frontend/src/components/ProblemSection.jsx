import React from 'react';

const ProblemSection = () => {
  const painPoints = [
    {
      title: "No Real Mentorship",
      desc: "Most entrepreneurs lack access to knowledgeable mentors who can provide actionable business advice.",
      icon: "👥"
    },
    {
      title: "Scattered Learning",
      desc: "Entrepreneurship resources are often unstructured, fragmented, and outdated.",
      icon: "📚"
    },
    {
      title: "Weak Financial Skills",
      desc: "Many SME owners struggle to manage cash flow, price products, or understand business finances.",
      icon: "💰"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight max-w-4xl mx-auto">
          Entrepreneurs Struggle to Start and Scale Due to Lack of Guidance.
        </h2>
        <p className="text-slate-600 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
          Starting a business is hard. Limited mentorship and fragmented resources result in high SME failure rates in emerging markets.
        </p>

        {/* Pain Point Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-left">
              <div className="text-3xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{point.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* The "Blue Pill" Stat Banner - Styled for High Impact */}
        <div className="inline-block relative">
          <div className="bg-blue-600 text-white px-8 md:px-12 py-5 rounded-full font-bold text-lg md:text-xl shadow-2xl shadow-blue-200">
            70% of small businesses fail within the first few years.
          </div>
          {/* Decorative pulse effect */}
          <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
// ProductPage.jsx
import React from "react";

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-500 text-white p-12 rounded-3xl shadow-lg mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">🚧 SiteCost Pro</h1>
        <p className="text-lg md:text-xl max-w-3xl">
          All-in-one construction cost calculator — empowering builders, engineers, and homeowners to plan smarter, estimate faster, and build better.
        </p>
      </section>

      {/* Product Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-800">🛠️ Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: "📊",
              title: "Multi-Tool Calculators",
              desc: "Estimate costs for stairs, flooring, plaster, bricks, roofing, and more.",
            },
            {
              icon: "⚙️",
              title: "Smart Inputs",
              desc: "Auto-fill suggestions, real-time unit conversions, and dynamic pricing logic.",
            },
            {
              icon: "📁",
              title: "Project Saving",
              desc: "Save and revisit your cost breakdowns for multiple projects.",
            },
            {
              icon: "📐",
              title: "Precision-First Design",
              desc: "Get granular cost breakdowns with near-engineering accuracy.",
            },
            {
              icon: "🌐",
              title: "Responsive UI",
              desc: "Use seamlessly on desktop, tablet, or mobile — on-site or at the office.",
            },
            {
              icon: "📤",
              title: "Export & Share",
              desc: "Export your estimates as PDFs and share them with teams or clients.",
            },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-lg transition">
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-gray-100 p-10 rounded-2xl shadow-inner mb-16">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-8">👷‍♂️ Built For Everyone</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h4 className="text-xl font-semibold text-indigo-600 mb-2">Contractors</h4>
            <p className="text-gray-700">
              Quickly estimate materials and labor for accurate bidding and scheduling.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-indigo-600 mb-2">Architects & Engineers</h4>
            <p className="text-gray-700">
              Use real-time cost feedback during design and planning phases.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-indigo-600 mb-2">Homeowners & DIYers</h4>
            <p className="text-gray-700">
              Plan your dream space with confidence, knowing what it’ll cost before you begin.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">Ready to Calculate Smarter?</h2>
        <p className="text-gray-600 mb-6">Start using SiteCost Pro today and take control of your construction budget.</p>
        <a
          href="/home/home-cost-calculator"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition"
        >
          Try the Cost Calculator
        </a>
      </section>
    </div>
  );
}

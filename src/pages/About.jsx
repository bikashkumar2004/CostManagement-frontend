// AboutPage.jsx
import React from "react";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 text-white p-10 rounded-2xl shadow-xl mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">📐 About SiteCost Pro</h1>
        <p className="text-lg md:text-xl font-medium max-w-3xl">
          The smarter way to plan, budget, and build. SiteCost Pro empowers builders, homeowners, and engineers with the tools to calculate precise construction costs — from foundation to finishing.
        </p>
      </section>

      {/* Content Grid */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">🔧 Why SiteCost Pro?</h2>
          <ul className="space-y-3 text-gray-700">
            <li>✅ Accurate cost breakdowns for every part of your project</li>
            <li>✅ Time-saving tools for quick estimates</li>
            <li>✅ Designed for contractors, architects & DIY builders</li>
            <li>✅ Easy-to-use interface with smart defaults</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h3 className="text-lg font-semibold mb-2 text-indigo-600">Did You Know?</h3>
          <p className="text-gray-600">
            Over 70% of small to mid-sized construction projects go over budget due to poor cost estimation. With SiteCost Pro, you can change that—one project at a time.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="text-center bg-gray-100 p-10 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">🚀 Our Vision</h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          At SiteCost Pro, we believe every great build starts with a great plan. 
          We’re on a mission to simplify construction planning through technology—making accuracy, transparency, and confidence available to everyone from contractors to first-time homeowners.
        </p>
      </section>
    </div>
  );
}

// ContactPage.jsx
import React from "react";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-10 rounded-2xl shadow-lg mb-12">
        <h1 className="text-4xl font-extrabold mb-2">📞 Contact SiteCost Pro</h1>
        <p className="text-lg max-w-3xl">
          Have a question, suggestion, or need help with your project estimate?
          We’re here to support your building journey.
        </p>
      </section>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        <form className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 space-y-6">
          <h2 className="text-2xl font-bold text-indigo-700">Send Us a Message</h2>
          
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Tell us how we can help..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-200 space-y-6">
          <h2 className="text-2xl font-bold text-indigo-700">Quick Info</h2>
          <div className="space-y-2 text-gray-700">
            <p>📧 <span className="font-medium">support@sitecostpro.com</span></p>
            <p>📍 Office: 123 Builder’s Lane, Construct City, 45678</p>
            <p>🕒 Mon - Fri: 9 AM – 6 PM</p>
            <p>📞 Phone: +1 (800) 555-9090</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">Follow Us</h3>
            <div className="flex gap-4 text-gray-500">
              <a href="#" className="hover:text-indigo-600">🌐 Website</a>
              <a href="#" className="hover:text-indigo-600">💬 Twitter</a>
              <a href="#" className="hover:text-indigo-600">📘 Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

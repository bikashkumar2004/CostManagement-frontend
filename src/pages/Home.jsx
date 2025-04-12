
import { Link, Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const navItems = [
  { path: "/home/home-cost-calculator", label: "Cost Calculator" },
  { path: "/home/stair-calculator", label: "Stairs" },
  { path: "/home/floring-calculator", label: "Flooring" },
  { path: "/home/brick-calculator", label: "Brick" },
  { path: "/home/plaster-calculator", label: "Plaster" }, // typo?
  { path: "/home/roofing-calculator", label: "Roofing" },
];

export default function HomePage() {
  return (
    <>
      <Navbar/>
      <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-2xl p-10 shadow-lg mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">🏗️ Build Smart, Build Strong</h1>
        <p className="text-lg md:text-xl font-medium mb-6">
          "A great building begins with an even better calculation. Precision today, perfection tomorrow."
        </p>
        <Link
          to="/home/home-cost-calculator"
          className="inline-block bg-white text-indigo-600 font-semibold px-6 py-2 rounded-xl hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Card Navigation */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {navItems.map((item, idx) => (
          <Link
            to={item.path}
            key={idx}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1 text-center border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-indigo-600">{item.label}</h3>
          </Link>
        ))}
      </section>

      {/* Nested Route Display */}
      <div className="bg-gray-100 p-4 rounded-xl shadow">
        <Outlet />
      </div>
    </div>
    </>
    
  );
}

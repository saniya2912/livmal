import { motion } from "framer-motion";
import { Sun, Droplet, Leaf, Recycle, Wind, Bolt } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    { id: 1, title: "Solar Power", icon: <Sun className="w-10 h-10 text-yellow-500" />, desc: "100% energy from solar panels on the rooftop." },
    { id: 2, title: "Rainwater Harvesting", icon: <Droplet className="w-10 h-10 text-blue-500" />, desc: "Collect and reuse rainwater for landscaping and utilities." },
    { id: 3, title: "Green Roofs", icon: <Leaf className="w-10 h-10 text-green-500" />, desc: "Eco-friendly roofs to reduce heat and improve air quality." },
    { id: 4, title: "Recycling Hub", icon: <Recycle className="w-10 h-10 text-gray-600" />, desc: "Waste segregation and composting stations across the mall." },
    { id: 5, title: "Wind Turbines", icon: <Wind className="w-10 h-10 text-cyan-500" />, desc: "Small-scale turbines provide additional renewable energy." },
    { id: 6, title: "Energy Efficiency", icon: <Bolt className="w-10 h-10 text-yellow-600" />, desc: "LED lighting and smart HVAC reduce energy consumption." },
    { id: 7, title: "Water Conservation", icon: <Droplet className="w-10 h-10 text-blue-600" />, desc: "Low-flow fixtures and water recycling systems." }
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen font-sans text-gray-800">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-green-700 cursor-pointer">LivMal 🌿</h1>
        <ul className="flex gap-6 font-medium">
          <li><a href="#motivation" className="hover:text-green-700">Motivation</a></li>
          <li><a href="#goals" className="hover:text-green-700">Our Goals</a></li>
          <li><a href="#features" className="hover:text-green-700">Features</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-green-800"
        >
          Welcome to LivMal
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Designing the world’s first truly sustainable shopping mall.  
          Connect, shop, and live in harmony with the environment. 🌎
        </p>
      </header>

      {/* Motivation Section */}
      <section id="motivation" className="py-16 px-10 bg-white">
        <h3 className="text-3xl font-bold text-center text-green-800">Motivation</h3>
        <p className="mt-6 max-w-3xl mx-auto text-center text-gray-600">
          The world needs greener spaces. LivMal demonstrates how architecture,  
          renewable energy, and sustainable design principles can combine to create  
          a shopping experience that is eco-friendly, energy-efficient, and community-driven.
        </p>
      </section>

      {/* Goals Section */}
      <section id="goals" className="py-16 px-10 bg-green-50">
        <h3 className="text-3xl font-bold text-center text-green-800">What We Are Achieving</h3>
        <div className="mt-10 grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-gray-700">
          <GoalCard title="Reduce Carbon Footprint" desc="Using renewable energy and energy-efficient design to minimize environmental impact." />
          <GoalCard title="Promote Eco-Living" desc="Educating visitors through interactive sustainability workshops and events." />
          <GoalCard title="Resource Conservation" desc="Implementing water, energy, and waste management systems to conserve resources." />
          <GoalCard title="Community Engagement" desc="Creating spaces that encourage eco-conscious community interaction." />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-10 bg-white">
        <h3 className="text-3xl font-bold text-center text-green-800">Features of Our Design</h3>
        <p className="mt-4 text-center max-w-2xl mx-auto text-gray-600">
          Click on each feature to explore how LivMal’s design implements sustainability.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 max-w-6xl mx-auto">
          {features.map(f => (
            <FeatureCard key={f.id} feature={f} onClick={() => setSelectedFeature(f)} />
          ))}
        </div>

        {selectedFeature && (
          <FeatureModal feature={selectedFeature} onClose={() => setSelectedFeature(null)} />
        )}
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-green-700 text-white mt-16">
        <p>© 2025 LivMal | Designing a Sustainable Future 🌍</p>
      </footer>
    </div>
  );
}

// Goal Card Component
function GoalCard({ title, desc }) {
  return (
    <div className="bg-green-100 rounded-2xl p-6 shadow hover:shadow-lg transition">
      <h4 className="font-semibold text-green-800 text-xl">{title}</h4>
      <p className="mt-2 text-gray-700">{desc}</p>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ feature, onClick }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-center mb-4">{feature.icon}</div>
      <h4 className="text-xl font-semibold text-green-700">{feature.title}</h4>
    </div>
  );
}

// Feature Modal Component
function FeatureModal({ feature, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
      <div className="bg-white rounded-2xl p-8 max-w-xl w-full relative shadow-lg">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✖
        </button>
        <div className="text-center">
          <div className="flex justify-center mb-4">{feature.icon}</div>
          <h3 className="text-2xl font-bold text-green-800">{feature.title}</h3>
          <p className="mt-4 text-gray-700">{feature.desc}</p>
        </div>
      </div>
    </div>
  );
}

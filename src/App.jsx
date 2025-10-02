// import { motion } from "framer-motion";
// import { Sun, Droplet, Leaf, Recycle, Wind, Bolt } from "lucide-react";
// import { useState } from "react";
// import mallImg from "./assets/mall.jpg"; // placeholder

// export default function App() {
//   const [selectedFeature, setSelectedFeature] = useState(null);

//   const features = [
//     { id: 1, title: "Solar Power", icon: <Sun className="w-10 h-10 text-yellow-500" />, desc: "100% energy from solar panels on the rooftop.", img: mallImg },
//     { id: 2, title: "Rainwater Harvesting", icon: <Droplet className="w-10 h-10 text-blue-500" />, desc: "Collect and reuse rainwater.", img: mallImg },
//     { id: 3, title: "Green Roofs", icon: <Leaf className="w-10 h-10 text-green-500" />, desc: "Eco-friendly roofs to reduce heat.", img: mallImg },
//     { id: 4, title: "Recycling Hub", icon: <Recycle className="w-10 h-10 text-gray-600" />, desc: "Waste segregation & composting.", img: mallImg },
//     { id: 5, title: "Wind Turbines", icon: <Wind className="w-10 h-10 text-cyan-500" />, desc: "Small-scale turbines provide renewable energy.", img: mallImg },
//     { id: 6, title: "Energy Efficiency", icon: <Bolt className="w-10 h-10 text-yellow-600" />, desc: "LED lighting and smart HVAC reduce energy consumption.", img: mallImg }
//   ];

//   return (
//     <div className="min-h-screen font-sans text-gray-800">

//       {/* Navbar */}
//       <nav className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-10">
//         <h1 className="text-2xl font-bold text-green-700 cursor-pointer">LivMal 🌿</h1>
//         <ul className="flex gap-6 font-medium">
//           <li><a href="#features" className="hover:text-green-700">Explore Features</a></li>
//         </ul>
//       </nav>

//       {/* Hero Section */}
//       <header className="relative h-screen w-full">
//         <img src={mallImg} alt="LivMal Mall" className="w-full h-full object-cover" />
//         <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-6">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-5xl md:text-6xl font-bold text-white"
//           >
//             Welcome to LivMal 🌿
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 1 }}
//             className="mt-6 text-lg md:text-xl text-white max-w-2xl"
//           >
//             Designing the world’s first truly sustainable shopping mall.  
//             Connect, shop, and live in harmony with the environment.
//           </motion.p>
//           <a href="#features" className="mt-8 inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
//             Explore Features
//           </a>
//         </div>
//       </header>

//       {/* Features Section */}
//       <section id="features" className="py-16 px-10 bg-green-50">
//         <h2 className="text-3xl font-bold text-center text-green-800 mb-6">Click on a Feature to Explore</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {features.map(f => (
//             <FeatureCard key={f.id} feature={f} onClick={() => setSelectedFeature(f)} />
//           ))}
//         </div>
//         {selectedFeature && <FeatureModal feature={selectedFeature} onClose={() => setSelectedFeature(null)} />}
//       </section>

//       {/* Footer */}
//       <footer className="text-center py-6 bg-green-700 text-white mt-16">
//         <p>© 2025 LivMal | Designing a Sustainable Future 🌍</p>
//       </footer>
//     </div>
//   );
// }

// // Feature Card
// function FeatureCard({ feature, onClick }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       className="bg-white rounded-2xl shadow-lg p-6 text-center cursor-pointer hover:shadow-xl transition"
//       onClick={onClick}
//     >
//       <div className="flex justify-center mb-4">{feature.icon}</div>
//       <h3 className="text-xl font-semibold text-green-700">{feature.title}</h3>
//     </motion.div>
//   );
// }

// // Feature Modal
// function FeatureModal({ feature, onClose }) {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.8, opacity: 0 }}
//         className="bg-white rounded-2xl p-8 max-w-xl w-full relative shadow-lg"
//       >
//         <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-800" onClick={onClose}>✖</button>
//         <img src={feature.img} alt={feature.title} className="w-full rounded-lg mb-4" />
//         <h3 className="text-2xl font-bold text-green-800">{feature.title}</h3>
//         <p className="mt-4 text-gray-700">{feature.desc}</p>
//       </motion.div>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { useState } from "react";

// Icons (just placeholders for now)
import { Sun, Wind, Droplet, Leaf, Bolt } from "lucide-react";

export default function App() {
  const categories = ["All", "Energy Generation", "Sustainable Lifestyle & Community"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      id: 1,
      title: "Grass Turbines",
      category: "Energy Generation",
      desc: "Each blade of grass in the garden acts as a bladeless wind turbine generating energy.",
      img: "https://via.placeholder.com/400x250?text=Grass+Turbines",
      icon: <Wind className="w-10 h-10 text-green-500" />
    },
    {
      id: 2,
      title: "Archimedes Mycelium Turbine",
      category: "Energy Generation",
      desc: "A wind turbine made from mycelium bricks, blending sustainability and innovation.",
      img: "https://via.placeholder.com/400x250?text=Mycelium+Turbine",
      icon: <Leaf className="w-10 h-10 text-green-600" />
    },
    {
      id: 3,
      title: "Microbacteria Cilia",
      category: "Energy Generation",
      desc: "Microbacteria cilia on the outer walls harvest energy from ambient movement.",
      img: "https://via.placeholder.com/400x250?text=Microbacteria+Cilia",
      icon: <Bolt className="w-10 h-10 text-yellow-500" />
    },
    {
      id: 4,
      title: "Hydraulic Telescopic Roof",
      category: "Energy Generation",
      desc: "Supports the flexible roof and contains a wind turbine on top.",
      img: "https://via.placeholder.com/400x250?text=Hydraulic+Roof",
      icon: <Sun className="w-10 h-10 text-yellow-400" />
    },
    {
      id: 5,
      title: "Flexible Roof",
      category: "Energy Generation",
      desc: "Changes topology based on wind patterns to optimize air flow to turbines.",
      img: "https://via.placeholder.com/400x250?text=Flexible+Roof",
      icon: <Wind className="w-10 h-10 text-cyan-500" />
    },
    {
      id: 6,
      title: "Sharing Economy Shops",
      category: "Sustainable Lifestyle & Community",
      desc: "Stores dedicated to promoting sharing economy principles.",
      img: "https://via.placeholder.com/400x250?text=Sharing+Shops",
      icon: <Leaf className="w-10 h-10 text-green-700" />
    },
    {
      id: 7,
      title: "Energy-Generating Recreation",
      category: "Sustainable Lifestyle & Community",
      desc: "Cycling and treadmill desks help generate energy while staying active.",
      img: "https://via.placeholder.com/400x250?text=Recreation+Energy",
      icon: <Bolt className="w-10 h-10 text-yellow-600" />
    },
    {
      id: 8,
      title: "Car-Free Public Transport",
      category: "Sustainable Lifestyle & Community",
      desc: "Public transport inside the mall eliminates the need for cars.",
      img: "https://via.placeholder.com/400x250?text=Public+Transport",
      icon: <Droplet className="w-10 h-10 text-blue-500" />
    }
  ];

  const filteredFeatures =
    selectedCategory === "All"
      ? features
      : features.filter((f) => f.category === selectedCategory);

  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen font-sans text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-green-700 cursor-pointer">LivMal 🌿</h1>
        <ul className="flex gap-6 font-medium">
          <li>
            <a href="#motivation" className="hover:text-green-700">
              Motivation
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-green-700">
              Features
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="relative text-center py-20 px-6">
        <img
          src="https://via.placeholder.com/1200x600?text=LivMal+Sustainable+Mall"
          alt="LivMal Mall"
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40 rounded-lg"
        >
          <h2 className="text-5xl font-bold text-green-100">Welcome to LivMal</h2>
          <p className="mt-4 max-w-2xl text-center text-lg">
            Designing the world’s first truly sustainable shopping mall.  
            Connect, shop, and live in harmony with the environment. 🌎
          </p>
        </motion.div>
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

      {/* Features Section */}
      <section id="features" className="py-16 px-10 bg-green-50">
        <h3 className="text-3xl font-bold text-center text-green-800">Explore Features</h3>

        {/* Category Tabs */}
        <div className="flex justify-center mt-6 gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`${
                selectedCategory === cat
                  ? "bg-green-700 text-white"
                  : "bg-green-100 text-green-800"
              } px-4 py-2 rounded-full font-semibold transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 max-w-6xl mx-auto">
          {filteredFeatures.map((f) => (
            <FeatureCard key={f.id} feature={f} onClick={() => setSelectedFeature(f)} />
          ))}
        </div>

        {/* Feature Modal */}
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

// Feature Card Component
function FeatureCard({ feature, onClick }) {
  return (
    <div
      className="feature-card bg-white rounded-2xl shadow-lg p-6 text-center cursor-pointer hover:shadow-xl transition"
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
    <div className="feature-modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
      <div className="modal-content bg-white rounded-2xl p-8 max-w-xl w-full relative shadow-lg">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold"
          onClick={onClose}
        >
          ✖
        </button>
        <div className="text-center">
          <img
            src={feature.img}
            alt={feature.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-bold text-green-800">{feature.title}</h3>
          <p className="mt-4 text-gray-700">{feature.desc}</p>
        </div>
      </div>
    </div>
  );
}

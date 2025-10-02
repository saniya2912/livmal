import { motion } from "framer-motion";
import { useState } from "react";
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
      imgTopView: "https://via.placeholder.com/400x250?text=Grass+Turbines+Top",
      imgSideView: "https://via.placeholder.com/400x250?text=Grass+Turbines+Side",
      icon: <Wind className="w-10 h-10 text-green-500" />
    },
    {
      id: 2,
      title: "Archimedes Mycelium Turbine",
      category: "Energy Generation",
      desc: "A wind turbine made from mycelium bricks, blending sustainability and innovation.",
      imgTopView: "https://via.placeholder.com/400x250?text=Mycelium+Turbine+Top",
      imgSideView: "https://via.placeholder.com/400x250?text=Mycelium+Turbine+Side",
      icon: <Leaf className="w-10 h-10 text-green-600" />
    },
    {
      id: 3,
      title: "Microbacteria Cilia",
      category: "Energy Generation",
      desc: "Microbacteria cilia on the outer walls harvest energy from ambient movement.",
      imgTopView: "https://via.placeholder.com/400x250?text=Microbacteria+Cilia+Top",
      imgSideView: "https://via.placeholder.com/400x250?text=Microbacteria+Cilia+Side",
      icon: <Bolt className="w-10 h-10 text-yellow-500" />
    },
    {
      id: 4,
      title: "Hydraulic Telescopic Roof",
      category: "Energy Generation",
      desc: "Supports the flexible roof and contains a wind turbine on top.",
      imgTopView: "https://via.placeholder.com/400x250?text=Hydraulic+Roof+Top",
      imgSideView: "https://via.placeholder.com/400x250?text=Hydraulic+Roof+Side",
      icon: <Sun className="w-10 h-10 text-yellow-400" />
    },
    {
      id: 5,
      title: "Flexible Roof",
      category: "Energy Generation",
      desc: "Changes topology based on wind patterns to optimize airflow to turbines.",
      imgTopView: "https://via.placeholder.com/400x250?text=Flexible+Roof+Top",
      imgSideView: "https://via.placeholder.com/400x250?text=Flexible+Roof+Side",
      icon: <Wind className="w-10 h-10 text-cyan-500" />
    },
    {
      id: 6,
      title: "Sharing Economy Shops",
      category: "Sustainable Lifestyle & Community",
      desc: "Stores dedicated to promoting sharing economy principles.",
      imgTopView: "https://via.placeholder.com/400x250?text=Sharing+Shops+Top",
      imgSideView: "https://via.placeholder.com/400x250?text=Sharing+Shops+Side",
      icon: <Leaf className="w-10 h-10 text-green-700" />
    },
    {
      id: 7,
      title: "Energy-Generating Recreation",
      category: "Sustainable Lifestyle & Community",
      desc: "Cycling and treadmill desks help generate energy while staying active.",
      imgTopView: "https://via.placeholder.com/400x250?text=Recreation+Energy+Top",
      imgSideView: "https://via.placeholder.com/400x250?text=Recreation+Energy+Side",
      icon: <Bolt className="w-10 h-10 text-yellow-600" />
    },
    {
      id: 8,
      title: "Car-Free Public Transport",
      category: "Sustainable Lifestyle & Community",
      desc: "Public transport inside the mall eliminates the need for cars.",
      imgTopView: "https://via.placeholder.com/400x250?text=Public+Transport+Top",
      imgSideView: "https://via.placeholder.com/400x250?text=Public+Transport+Side",
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
          <li><a href="#motivation" className="hover:text-green-700">Motivation</a></li>
          <li><a href="#features" className="hover:text-green-700">Features</a></li>
        </ul>
      </nav>

      {/* Hero Section with Top & Side View */}
      <header className="relative text-center py-20 px-6 flex flex-col gap-6">
        <MallView
          title="Top View of LivMal"
          img="https://via.placeholder.com/1200x600?text=Top+View+of+LivMal"
          subtitle="Explore the layout of our sustainable shopping mall."
        />
        <MallView
          title="Side View of LivMal"
          img="https://via.placeholder.com/1200x600?text=Side+View+of+LivMal"
          subtitle="See the architecture and sustainable energy features in profile."
        />
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

// Mall View Component
function MallView({ title, img, subtitle }) {
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <img
        src={img}
        alt={title}
        className="w-full h-64 object-cover rounded-lg shadow-lg"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40 rounded-lg"
      >
        <h2 className="text-4xl font-bold text-green-100">{title}</h2>
        <p className="mt-2 max-w-2xl text-center text-lg">{subtitle}</p>
      </motion.div>
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
            src={feature.imgTopView || feature.img}
            alt={`${feature.title} Top View`}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-bold text-green-800">{feature.title}</h3>
          <p className="mt-4 text-gray-700">{feature.desc}</p>
          {feature.imgSideView && (
            <img
              src={feature.imgSideView}
              alt={`${feature.title} Side View`}
              className="w-full h-64 object-cover rounded-lg mt-4"
            />
          )}
        </div>
      </div>
    </div>
  );
}


// import { motion } from "framer-motion";
// import { useState } from "react";

// // Icons (just placeholders for now)
// import { Sun, Wind, Droplet, Leaf, Bolt } from "lucide-react";

// export default function App() {
//   const categories = ["All", "Energy Generation", "Sustainable Lifestyle & Community"];
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedFeature, setSelectedFeature] = useState(null);

//   const features = [
//     {
//       id: 1,
//       title: "Grass Turbines",
//       category: "Energy Generation",
//       desc: "Each blade of grass in the garden acts as a bladeless wind turbine generating energy.",
//       img: "https://via.placeholder.com/400x250?text=Grass+Turbines",
//       icon: <Wind className="w-10 h-10 text-green-500" />
//     },
//     {
//       id: 2,
//       title: "Archimedes Mycelium Turbine",
//       category: "Energy Generation",
//       desc: "A wind turbine made from mycelium bricks, blending sustainability and innovation.",
//       img: "https://via.placeholder.com/400x250?text=Mycelium+Turbine",
//       icon: <Leaf className="w-10 h-10 text-green-600" />
//     },
//     {
//       id: 3,
//       title: "Microbacteria Cilia",
//       category: "Energy Generation",
//       desc: "Microbacteria cilia on the outer walls harvest energy from ambient movement.",
//       img: "https://via.placeholder.com/400x250?text=Microbacteria+Cilia",
//       icon: <Bolt className="w-10 h-10 text-yellow-500" />
//     },
//     {
//       id: 4,
//       title: "Hydraulic Telescopic Roof",
//       category: "Energy Generation",
//       desc: "Supports the flexible roof and contains a wind turbine on top.",
//       img: "https://via.placeholder.com/400x250?text=Hydraulic+Roof",
//       icon: <Sun className="w-10 h-10 text-yellow-400" />
//     },
//     {
//       id: 5,
//       title: "Flexible Roof",
//       category: "Energy Generation",
//       desc: "Changes topology based on wind patterns to optimize air flow to turbines.",
//       img: "https://via.placeholder.com/400x250?text=Flexible+Roof",
//       icon: <Wind className="w-10 h-10 text-cyan-500" />
//     },
//     {
//       id: 6,
//       title: "Sharing Economy Shops",
//       category: "Sustainable Lifestyle & Community",
//       desc: "Stores dedicated to promoting sharing economy principles.",
//       img: "https://via.placeholder.com/400x250?text=Sharing+Shops",
//       icon: <Leaf className="w-10 h-10 text-green-700" />
//     },
//     {
//       id: 7,
//       title: "Energy-Generating Recreation",
//       category: "Sustainable Lifestyle & Community",
//       desc: "Cycling and treadmill desks help generate energy while staying active.",
//       img: "https://via.placeholder.com/400x250?text=Recreation+Energy",
//       icon: <Bolt className="w-10 h-10 text-yellow-600" />
//     },
//     {
//       id: 8,
//       title: "Car-Free Public Transport",
//       category: "Sustainable Lifestyle & Community",
//       desc: "Public transport inside the mall eliminates the need for cars.",
//       img: "https://via.placeholder.com/400x250?text=Public+Transport",
//       icon: <Droplet className="w-10 h-10 text-blue-500" />
//     }
//   ];

//   const filteredFeatures =
//     selectedCategory === "All"
//       ? features
//       : features.filter((f) => f.category === selectedCategory);

//   return (
//     <div className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen font-sans text-gray-800">
//       {/* Navbar */}
//       <nav className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-10">
//         <h1 className="text-2xl font-bold text-green-700 cursor-pointer">LivMal 🌿</h1>
//         <ul className="flex gap-6 font-medium">
//           <li>
//             <a href="#motivation" className="hover:text-green-700">
//               Motivation
//             </a>
//           </li>
//           <li>
//             <a href="#features" className="hover:text-green-700">
//               Features
//             </a>
//           </li>
//         </ul>
//       </nav>

//       {/* Hero Section */}
//       <header className="relative text-center py-20 px-6">
//         <img
//           src="https://via.placeholder.com/1200x600?text=LivMal+Sustainable+Mall"
//           alt="LivMal Mall"
//           className="w-full h-96 object-cover rounded-lg shadow-lg"
//         />
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40 rounded-lg"
//         >
//           <h2 className="text-5xl font-bold text-green-100">Welcome to LivMal</h2>
//           <p className="mt-4 max-w-2xl text-center text-lg">
//             Designing the world’s first truly sustainable shopping mall.  
//             Connect, shop, and live in harmony with the environment. 🌎
//           </p>
//         </motion.div>
//       </header>

//       {/* Motivation Section */}
//       <section id="motivation" className="py-16 px-10 bg-white">
//         <h3 className="text-3xl font-bold text-center text-green-800">Motivation</h3>
//         <p className="mt-6 max-w-3xl mx-auto text-center text-gray-600">
//           The world needs greener spaces. LivMal demonstrates how architecture,  
//           renewable energy, and sustainable design principles can combine to create  
//           a shopping experience that is eco-friendly, energy-efficient, and community-driven.
//         </p>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-16 px-10 bg-green-50">
//         <h3 className="text-3xl font-bold text-center text-green-800">Explore Features</h3>

//         {/* Category Tabs */}
//         <div className="flex justify-center mt-6 gap-6">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setSelectedCategory(cat)}
//               className={`${
//                 selectedCategory === cat
//                   ? "bg-green-700 text-white"
//                   : "bg-green-100 text-green-800"
//               } px-4 py-2 rounded-full font-semibold transition`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Features Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 max-w-6xl mx-auto">
//           {filteredFeatures.map((f) => (
//             <FeatureCard key={f.id} feature={f} onClick={() => setSelectedFeature(f)} />
//           ))}
//         </div>

//         {/* Feature Modal */}
//         {selectedFeature && (
//           <FeatureModal feature={selectedFeature} onClose={() => setSelectedFeature(null)} />
//         )}
//       </section>

//       {/* Footer */}
//       <footer className="text-center py-6 bg-green-700 text-white mt-16">
//         <p>© 2025 LivMal | Designing a Sustainable Future 🌍</p>
//       </footer>
//     </div>
//   );
// }

// // Feature Card Component
// function FeatureCard({ feature, onClick }) {
//   return (
//     <div
//       className="feature-card bg-white rounded-2xl shadow-lg p-6 text-center cursor-pointer hover:shadow-xl transition"
//       onClick={onClick}
//     >
//       <div className="flex justify-center mb-4">{feature.icon}</div>
//       <h4 className="text-xl font-semibold text-green-700">{feature.title}</h4>
//     </div>
//   );
// }

// // Feature Modal Component
// function FeatureModal({ feature, onClose }) {
//   return (
//     <div className="feature-modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
//       <div className="modal-content bg-white rounded-2xl p-8 max-w-xl w-full relative shadow-lg">
//         <button
//           className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold"
//           onClick={onClose}
//         >
//           ✖
//         </button>
//         <div className="text-center">
//           <img
//             src={feature.img}
//             alt={feature.title}
//             className="w-full h-64 object-cover rounded-lg mb-4"
//           />
//           <h3 className="text-2xl font-bold text-green-800">{feature.title}</h3>
//           <p className="mt-4 text-gray-700">{feature.desc}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

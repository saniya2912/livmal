import { motion } from "framer-motion";
import { useState } from "react";
import { Sun, Wind, Droplet, Leaf, Bolt } from "lucide-react";

// Import assets
import logo from "./assets/logo.jpg";
import background from "./assets/background.jpg";
import grassImg from "./assets/grass.jpg";
import mushroomImg from "./assets/mushroom.jpg";
import tranviewImg from "./assets/tranview.jpg";
import sideviewImg from "./assets/sideview.jpg";

export default function App() {
  const categories = ["All", "Energy Generation", "Sustainable Lifestyle & Community"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      id: 1,
      title: "Grass Turbines",
      category: "Energy Generation",
      desc: "Each blade of grass in the garden acts as a bladeless wind turbine, contributing to the mall's clean energy supply.",
      imgTopView: grassImg,
      imgSideView: grassImg,
      icon: <Wind className="w-10 h-10 text-green-500" />
    },
    {
      id: 2,
      title: "Archimedes Mycelium Turbine",
      category: "Energy Generation",
      desc: "A wind turbine made from mycelium bricks, combining innovation and sustainability.",
      imgTopView: mushroomImg,
      imgSideView: mushroomImg,
      icon: <Leaf className="w-10 h-10 text-green-600" />
    },
    {
      id: 3,
      title: "Public Transport View",
      category: "Sustainable Lifestyle & Community",
      desc: "Experience our car-free public transport system within the mall, making shopping eco-friendly.",
      imgTopView: tranviewImg,
      imgSideView: tranviewImg,
      icon: <Droplet className="w-10 h-10 text-blue-500" />
    },
    {
      id: 4,
      title: "Side View of Mall",
      category: "All",
      desc: "A side view of LivMal showcasing its adaptive, sustainable architecture.",
      imgTopView: sideviewImg,
      imgSideView: sideviewImg,
      icon: <Sun className="w-10 h-10 text-yellow-400" />
    }
  ];

  const filteredFeatures =
    selectedCategory === "All"
      ? features
      : features.filter((f) => f.category === selectedCategory);

  return (
    <div
      className="min-h-screen font-sans text-gray-800"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white bg-opacity-80 shadow-md sticky top-0 z-10 backdrop-blur">
        <div className="flex items-center gap-2">
          <img src={logo} alt="LivMal Logo" className="w-12 h-12 rounded-full" />
          <h1 className="text-2xl font-bold text-green-700 cursor-pointer">LivMal 🌿</h1>
        </div>
        <ul className="flex gap-6 font-medium">
          <li><a href="#motivation" className="hover:text-green-700">Motivation</a></li>
          <li><a href="#features" className="hover:text-green-700">Features</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="relative text-center py-20 px-6 flex flex-col gap-6">
        {/* Logo on Hero */}
        <div className="mx-auto w-32 h-32">
          <img
            src={logo}
            alt="LivMal Logo"
            className="w-full h-full object-cover rounded-full shadow-lg"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white bg-opacity-70 p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-5xl font-bold text-green-800">Welcome to LivMal</h2>
          <p className="mt-4 text-lg text-gray-700">
            LivMal, the “Live Mall”, is a shopping destination that **breathes and adapts like a living organism**. 
            The mall responds to the environment, shifting and evolving with the climate to create a space 
            that feels alive, dynamic, and in harmony with nature.
          </p>
        </motion.div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <MallView title="Top View" img={sideviewImg} />
          <MallView title="Side View" img={sideviewImg} />
        </div>
      </header>

      {/* Motivation Section */}
      <section id="motivation" className="py-16 px-10 bg-white bg-opacity-80">
        <h3 className="text-3xl font-bold text-center text-green-800">Motivation</h3>
        <p className="mt-6 max-w-3xl mx-auto text-center text-gray-700">
          LivMal is designed to be immersive, inspiring, and regenerative – a shopping experience
          where people feel connected to both community and environment. It’s a living ecosystem
          where architecture, nature, and human activity coexist beautifully.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-10 bg-green-50 bg-opacity-90">
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
function MallView({ title, img }) {
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
        className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-30 rounded-lg"
      >
        <h2 className="text-3xl font-bold">{title}</h2>
      </motion.div>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ feature, onClick }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg p-6 text-center cursor-pointer hover:shadow-xl transition"
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

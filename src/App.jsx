import { motion } from "framer-motion";
import { useState } from "react";

// Images
import logo from "./assets/logo.jpg";
import background from "./assets/background.jpg";
import topviewImg from "./assets/topview.jpg";
import sideviewImg from "./assets/sideview.jpg";
import tranviewImg from "./assets/trainview.jpg";
import inside1Img from "./assets/inside1.jpg";
import inside2Img from "./assets/inside2.jpg";
import grassImg from "./assets/grass.jpg";
import mushroomImg from "./assets/mushroom.jpg";
import telescopicImg from "./assets/sideview.jpg";
import roofImg from "./assets/topview.jpg";

export default function App() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    { id: 1, title: "Grass Bladeless Turbines", desc: "Each blade of grass in the garden generates energy through bladeless turbines.", img: grassImg },
    { id: 2, title: "Mycelium Wind Turbine", desc: "Archimedes turbine made of real mycelium bricks for sustainable energy.", img: mushroomImg },
    { id: 3, title: "Microbacteria Cilia", desc: "Energy-harvesting microbacteria cilia installed on the exterior walls.", img: inside1Img },
    { id: 4, title: "Telescopic Roof Support", desc: "Hydraulic telescopic structure supporting the flexible roof topped with a wind turbine.", img: telescopicImg },
    { id: 5, title: "Flexible Roof", desc: "Roof topology adapts to wind patterns to maximize airflow to the turbine.", img: roofImg },
    { id: 6, title: "Sharing Economy Shops", desc: "Shops dedicated to promoting sharing economy and sustainable products.", img: inside2Img },
    { id: 7, title: "Energy-Generating Recreation", desc: "Cycling and treadmill desks allow visitors to generate energy while exercising.", img: inside1Img },
    { id: 8, title: "Car-Free Public Transport", desc: "Public transport inside the mall ensures a car-less, sustainable environment.", img: tranviewImg },
  ];

  return (
    <div
      className="min-h-screen font-sans text-gray-800"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white bg-opacity-80 shadow-md sticky top-0 z-10 backdrop-blur">
        <div className="flex items-center gap-2">
          <img src={logo} alt="LivMal Logo" className="w-14 h-14 rounded-full" />
          <h1 className="text-3xl font-bold text-green-700">LivMal 🌿</h1>
        </div>
        <ul className="flex gap-8 font-medium text-lg">
          <li><a href="#motivation" className="hover:text-green-700">Motivation</a></li>
          <li><a href="#mallviews" className="hover:text-green-700">Mall Views</a></li>
          <li><a href="#features" className="hover:text-green-700">Features</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.img
          src={topviewImg}
          alt="Top View of LivMal"
          className="w-full max-w-6xl rounded-xl shadow-lg object-cover mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute top-20 md:top-28 bg-white bg-opacity-80 p-10 rounded-xl max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-bold text-green-800">Welcome to LivMal</h2>
          <p className="mt-6 text-xl md:text-2xl text-gray-700 leading-relaxed">
            LivMal, the “Live Mall”, adapts to the environment, creating a living, harmonious, and regenerative space for everyone.
          </p>
        </div>
      </header>

      {/* Motivation Section */}
      <section id="motivation" className="py-20 px-10 bg-white rounded-xl max-w-5xl mx-auto shadow-lg mt-12">
        <h3 className="text-4xl md:text-5xl font-bold text-center text-green-800">Motivation</h3>
        <p className="mt-8 text-lg md:text-xl text-center text-gray-700 leading-relaxed">
          LivMal, short for “Live Mall”, is not just a shopping destination—it is a living, adaptive ecosystem.
          The mall responds dynamically to its environment, optimizing energy generation and comfort.
          Every design element contributes to a sustainable, interactive, and immersive shopping experience.
          At LivMal, shopping, recreation, and community engagement happen in harmony with nature.
        </p>
      </section>

      {/* Mall Views Section */}
      <section id="mallviews" className="py-20 px-10 mt-12 max-w-6xl mx-auto">
        <h3 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-12">Mall Views</h3>
        <div className="grid md:grid-cols-2 gap-10">
          <ViewCard img={topviewImg} title="Top View" />
          <ViewCard img={sideviewImg} title="Side View" />
          <ViewCard img={tranviewImg} title="Transport View" />
          <ViewCard img={inside1Img} title="Inside View 1" />
          <ViewCard img={inside2Img} title="Inside View 2" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-10 mt-12 max-w-6xl mx-auto">
        <h3 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-12">Features</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map(f => (
            <FeatureCard key={f.id} feature={f} onClick={() => setSelectedFeature(f)} />
          ))}
        </div>
      </section>

      {/* Feature Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-20">
          <div className="bg-white rounded-3xl p-10 max-w-xl w-full relative shadow-2xl">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-2xl"
              onClick={() => setSelectedFeature(null)}
            >
              ✖
            </button>
            <div className="text-center">
              <img
                src={selectedFeature.img}
                alt={selectedFeature.title}
                className="w-full h-72 md:h-80 object-cover rounded-lg mb-6"
              />
              <h3 className="text-3xl md:text-4xl font-bold text-green-800">{selectedFeature.title}</h3>
              <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">{selectedFeature.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center py-8 bg-green-700 text-white mt-20 text-lg md:text-xl">
        <p>© 2025 LivMal | Designing a Sustainable Future 🌍</p>
      </footer>
    </div>
  );
}

// View Card
function ViewCard({ img, title }) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg">
      <img src={img} alt={title} className="w-full h-72 md:h-80 object-cover" />
      <div className="absolute bottom-0 bg-black bg-opacity-50 w-full p-4 text-white text-center">
        <h4 className="font-semibold text-xl md:text-2xl">{title}</h4>
      </div>
    </div>
  );
}

// Feature Card
function FeatureCard({ feature, onClick }) {
  return (
    <div
      className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105"
      onClick={onClick}
    >
      <img src={feature.img} alt={feature.title} className="w-full h-72 md:h-80 object-cover" />
      <div className="absolute bottom-0 bg-black bg-opacity-50 w-full p-4 text-white text-center">
        <h4 className="font-semibold text-xl md:text-2xl">{feature.title}</h4>
      </div>
    </div>
  );
}

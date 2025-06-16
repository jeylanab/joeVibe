import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, useAnimation } from 'framer-motion';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const ProductCard = ({ product, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.015 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-200"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
        />
        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-orange-500 hover:text-white transition-colors duration-200">
          <FaHeart size={16} />
        </button>
      </div>

      <div className="flex flex-col flex-1 justify-between px-5 pt-5 pb-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
          <p className="text-gray-400 text-sm capitalize mt-1">{product.category}</p>
        </div>
        <div className="mt-5 flex flex-col gap-2">
          <p className="text-lg font-bold text-orange-500">${product.price}</p>
          <div className="flex justify-between gap-3">
            <button className="w-1/2 bg-orange-500 hover:bg-orange-600 text-white text-sm py-2 rounded-full flex items-center justify-center gap-1 transition">
              <FaShoppingCart /> Add to Cart
            </button>
            <button className="w-1/2 border border-orange-500 hover:bg-orange-50 text-orange-500 text-sm py-2 rounded-full transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    axios.get("https://joevibe.onrender.com/api/products")
      .then(res => setProducts(res.data))
      .catch(() => alert("Failed to load products"));
  }, []);

  // Auto-close popup after 4s
  useEffect(() => {
    const timeout = setTimeout(() => setShowPopup(false), 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative py-20 px-6 sm:px-10 lg:px-24 bg-white opacity-80 backdrop-blur-sm">
      {/* Welcome Popup */}
      {showPopup && (
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-orange-100 border border-orange-300 shadow-lg px-6 py-3 rounded-full text-orange-800 text-sm font-medium z-50"
        >
          Welcome to <span className="font-semibold">JoeVibe</span> — Discover your perfect vibe!
        </motion.div>
      )}

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-medium text-gray-900">Our Best Picks</h2>
        <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
          Discover premium products crafted for your lifestyle.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12">
        {products.map((product, index) => (
          <ProductCard key={product._id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;

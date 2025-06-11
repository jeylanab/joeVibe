// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleAddToCart = (product) => {
    alert(`🛒 "${product.name}" added to cart.`);
  };

  const handleBuyNow = (product) => {
    alert(`💳 Proceeding to buy "${product.name}"...`);
  };

  return (
    <div className="min-h-screen py-12 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
        🌟 Trending Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white border rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
              />
              <span className="absolute top-2 right-2 bg-white/80 text-gray-800 text-xs px-3 py-1 rounded-full shadow-sm font-medium">
                ${product.price}
              </span>
            </div>

            <div className="mt-5">
              <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{product.description}</p>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleBuyNow(product)}
                  className="bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

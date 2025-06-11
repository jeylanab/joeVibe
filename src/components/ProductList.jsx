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
    console.log('🛒 Added to cart:', product.name);
    alert(`"${product.name}" has been added to cart.`);
    // future: dispatch to Redux/cart state
  };

  const handleBuyNow = (product) => {
    console.log('💳 Buying:', product.name);
    alert(`Proceed to buy "${product.name}"...`);
    // future: redirect to checkout/payment page
  };

  return (
    <div className="py-10 px-4 md:px-10 lg:px-20 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
        Our Trending Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-md hover:scale-[1.02] transition-all duration-300 group"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl group-hover:opacity-90 transition"
              />
              <span className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full shadow">
                ${product.price}
              </span>
            </div>

            <div className="mt-4 space-y-2">
              <h3 className="text-xl text-white font-semibold">
                {product.name}
              </h3>
              <p className="text-gray-300 text-sm">
                {product.description}
              </p>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleBuyNow(product)}
                  className="bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition"
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

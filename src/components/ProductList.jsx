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
    <div className="min-h-screen bg-[#f5f5f7] py-20 px-6 md:px-16 font-['San Francisco','Inter','Helvetica Neue',sans-serif]">
      <h2 className="text-3xl md:text-5xl font-semibold text-center text-[#1d1d1f] mb-16 tracking-tight">
        Discover Premium Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white border border-[#e5e5ea] rounded-3xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="overflow-hidden rounded-t-3xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-[#1d1d1f]">{product.name}</h3>
              <p className="text-sm text-[#6e6e73]">{product.description}</p>

              <div className="flex justify-between items-center pt-4">
                <span className="text-base font-semibold text-[#1d1d1f]">${product.price}</span>
              </div>

              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex-1 border border-[#d2d2d7] text-[#1d1d1f] py-2 rounded-full text-sm font-medium hover:bg-[#f2f2f2] transition"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleBuyNow(product)}
                  className="flex-1 bg-[#fd9a30] text-white py-2 rounded-full text-sm font-medium hover:bg-[#443215] transition"
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

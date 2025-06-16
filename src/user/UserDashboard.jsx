import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

const UserDashboard = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    axios.get("https://joevibe.onrender.com/api/products")
      .then(res => {
        const allProducts = res.data;
        setProducts(allProducts);
        setFiltered(allProducts);

        const uniqueCategories = ['All', ...new Set(allProducts.map(p => p.category))];
        setCategories(uniqueCategories);
      })
      .catch(() => alert("Failed to load products"));
  }, []);

  useEffect(() => {
    const filteredData = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    setFiltered(filteredData);
  }, [search, selectedCategory, products]);

  return (
    <section className="p-6 md:p-12 bg-gray-100 min-h-screen">
      {/* Search & Category Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        {/* Search Bar */}
        <div className="relative w-full md:w-1/2">
          <FaSearch className="absolute top-3 left-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500 capitalize">{product.category}</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-orange-500 font-bold">${product.price}</span>
                  <button className="flex items-center gap-1 text-sm bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-full">
                    <FaShoppingCart /> Add
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 text-lg">No products found</p>
        )}
      </div>
    </section>
  );
};

export default UserDashboard;

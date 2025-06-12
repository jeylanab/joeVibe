import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(() => alert("Failed to load products"));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div key={product._id} className="border rounded-lg p-4 shadow hover:shadow-md">
          <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded" />
          <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
          <p className="text-gray-600">${product.price}</p>
          <p className="text-sm text-gray-500">{product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

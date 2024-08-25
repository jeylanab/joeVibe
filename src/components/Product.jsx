import React, { useEffect, useState } from 'react';

const Product = () => {
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('https://real-time-amazon-data.p.rapidapi.com/product-offers?asin=B09SM24S8C&country=US&limit=100&page=1', {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '206f5fabb5mshd6a12f5f0fefd42p122a88jsn651b1c6c0620',
            'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
          }
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setProductData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProductData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
          <>{JSON.stringify(productData, null, 2)}</>
          
    </div>
  );
};

export default Product;

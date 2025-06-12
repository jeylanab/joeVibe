import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Redirect non-admin users
  useEffect(() => {
    if (!user || user.role !== 'admin') {
      alert('Access denied. Admins only.');
      navigate('/');
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await axios.post(
        'http://localhost:5000/api/products/add-product',
        product,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            'Content-Type': 'application/json',
          }
        }
      );
      setMessage('✅ Product added successfully!');
      setProduct({ name: '', price: '', description: '', image: '' });
    } catch (err) {
      console.error(err.response?.data || err.message);
      setMessage('❌ Failed to add product: ' + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-orange-100 via-white to-orange-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg space-y-6 transition duration-300"
      >
        <h2 className="text-2xl font-bold text-center text-orange-600">Add New Product</h2>

        {message && (
          <div className="text-center text-sm text-red-500">{message}</div>
        )}

        <div className="space-y-4">
          <input
            name="name"
            type="text"
            required
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            name="price"
            type="number"
            required
            placeholder="Price (USD)"
            value={product.price}
            onChange={handleChange}
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            name="image"
            type="text"
            required
            placeholder="Image URL"
            value={product.image}
            onChange={handleChange}
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <textarea
            name="description"
            placeholder="Product Description"
            required
            value={product.description}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
        >
          {loading ? 'Adding Product...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

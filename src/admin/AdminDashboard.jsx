import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import { AuthContext } from '../context/AuthContext';
const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [loading, setLoading] = useState(false);

  const headers = {
    Authorization: `Bearer ${user?.token}`,
    'Content-Type': 'application/json',
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('https://joevibe.onrender.com/api/products');
      setProducts(res.data);
    } catch (err) {
      alert('Failed to load products');
    }
  };

  const deleteProduct = async (id) => {
    if (!window.confirm('Delete this product?')) return;
    try {
      await axios.delete(`https://joevibe.onrender.com/api/products/${id}`, { headers });
      setProducts(prev => prev.filter(p => p._id !== id));
    } catch (err) {
      alert('❌ Failed to delete product: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      if (modalData?._id) {
        // Update product
        await axios.put(`https://joevibe.onrender.com/api/products/${modalData._id}`, formData, { headers });
        setProducts(prev =>
          prev.map(p => (p._id === modalData._id ? { ...p, ...formData } : p))
        );
      } else {
        // Add new product
        const res = await axios.post(`https://joevibe.onrender.com/api/products/add-product`, formData, { headers });
        setProducts(prev => [...prev, res.data]);
      }
      setModalData(null);
    } catch (err) {
      console.error(err);
      alert('❌ Failed to submit: ' + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-8 sm:px-8">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-orange-600">Admin Dashboard</h1>
        <button
          onClick={() => setModalData({})}
          className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-900 transition"
        >
          + Add Product
        </button>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map(product => (
          <div
            key={product._id}
            className="rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <img src={product.image} alt={product.name} className="w-full h-52 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 truncate mb-1">{product.name}</h2>
              <p className="text-orange-500 font-bold text-lg mb-1">${product.price}</p>
              <p className="text-sm text-gray-500 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setModalData(product)}
                  className="text-sm text-black font-medium px-4 py-1.5 bg-orange-100 rounded-full hover:bg-orange-200 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(product._id)}
                  className="text-sm text-white px-4 py-1.5 bg-red-500 rounded-full hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {modalData && (
        <ProductForm
          initialData={modalData}
          onSubmit={handleSubmit}
          onClose={() => setModalData(null)}
          loading={loading}
        />
      )}
    </div>
  );
};

export default AdminDashboard;

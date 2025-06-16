import { useState, useEffect } from 'react';

const ProductForm = ({ initialData = {}, onSubmit, onClose, loading }) => {
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setForm({
        name: initialData.name || '',
        price: initialData.price || '',
        description: initialData.description || '',
        image: initialData.image || '',
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional: Trim fields and capitalize name
    const cleanedForm = {
      ...form,
      name: form.name.trim(),
      description: form.description.trim(),
      image: form.image.trim(),
    };

    onSubmit(cleanedForm);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl space-y-4 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-xl font-bold text-gray-600 hover:text-red-500 transition"
          type="button"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-center text-orange-600 mb-2">
          {initialData?._id ? 'Edit Product' : 'Add New Product'}
        </h2>

        <div className="space-y-3">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-600 mb-1">Product Name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Product Name"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm text-gray-600 mb-1">Price (USD)</label>
            <input
              id="price"
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
              required
              placeholder="Price"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label htmlFor="image" className="block text-sm text-gray-600 mb-1">Image URL</label>
            <input
              id="image"
              name="image"
              value={form.image}
              onChange={handleChange}
              required
              placeholder="Image URL"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm text-gray-600 mb-1">Description</label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              placeholder="Enter product description"
              rows={4}
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
        >
          {loading
            ? (initialData?._id ? 'Updating...' : 'Saving...')
            : (initialData?._id ? 'Update Product' : 'Add Product')}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;

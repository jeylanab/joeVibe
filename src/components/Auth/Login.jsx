import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("https://joevibe.onrender.com/api/auth/login", form);
      login(res.data); // store in context or localStorage

      // ✅ Redirect based on role
      const userRole = res.data.user?.role || res.data.role;
      if (userRole === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/user/products'); // ✅ Corrected route for user
      }
    } catch (err) {
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-orange-100 via-white to-orange-50 backdrop-blur-sm">
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-70 shadow-xl rounded-2xl p-8 w-full max-w-md transform transition-all duration-500 hover:scale-[1.01]"
      >
        <h2 className="text-3xl font-semibold text-center text-orange-700 mb-6">
          Welcome back 👋
        </h2>

        <div className="space-y-4">
          <input
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
          />

          <input
            name="password"
            type="password"
            required
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-lg hover:opacity-90 active:scale-95 transition duration-300"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-sm text-center text-gray-500 mt-4">
          Don’t have an account?
          <a href="/register" className="text-orange-600 hover:underline ml-1">
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;

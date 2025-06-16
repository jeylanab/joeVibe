import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('https://joevibe.onrender.com/api/auth/register', form);
      console.log(res.data);
      alert('Registered Successfully');
    } catch (err) {
      alert('Registration Failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-md p-8 bg-white dark:bg-gray-900 shadow-xl rounded-3xl space-y-6 transition-all"
      >
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white text-center">
          Create Account
        </h2>

        <input 
          name="name" 
          onChange={handleChange} 
          placeholder="Full Name"
          className="w-full px-4 py-3 text-lg rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
        />

        <input 
          name="email" 
          type="email" 
          onChange={handleChange} 
          placeholder="Email Address"
          className="w-full px-4 py-3 text-lg rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
        />

        <input 
          name="password" 
          type="password" 
          onChange={handleChange} 
          placeholder="Password"
          className="w-full px-4 py-3 text-lg rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
        />

        <button 
          type="submit" 
          className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-3 rounded-xl font-medium transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

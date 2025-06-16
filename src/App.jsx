// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import People from './components/People';
import BrandLogoCarousel from './components/BrandLogoCarousel';
import ProductList from './components/ProductList';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import ProtectedRoute from './components/ProtectedRoute';

import AdminLayout from './admin/AdminLayout';
import AdminDashboard from './admin/AdminDashboard';
import AddProduct from './admin/AddProduct';

const App = () => {
  return (
    <Router>
      <div className="w-full">
        <NavBar />

        <Routes>
          {/* Public Pages */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <People />
                <BrandLogoCarousel />
                <ProductList />
              </>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductList />} />

          {/* Admin Pages */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute role="admin">
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="add-product" element={<AddProduct />} />
          </Route>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

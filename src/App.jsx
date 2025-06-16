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

import UserLayout from './user/UserLayout';
import UserOrders from './user/UserOrders';
import UserProfile from './user/UserProfile';
import UserWishlist from './user/UserWishlist';
import UserSupport from './user/UserSupport';

// ✅ Import your new component
import UserDashboard from './user/UserDashboard';

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
                <ProductList />
                <People />
                <BrandLogoCarousel />
              </>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductList />} />

          {/* ✅ User Pages */}
          <Route
            path="/user"
            element={
              <ProtectedRoute role="user">
                <UserLayout />
              </ProtectedRoute>
            }
          >
            <Route path="products" element={<UserDashboard />} />
            <Route path="orders" element={<UserOrders />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="wishlist" element={<UserWishlist />} />
            <Route path="support" element={<UserSupport />} />
          </Route>

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

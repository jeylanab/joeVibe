import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import People from './components/People';
import Footer from './components/Footer';
import ProductList from "./components/ProductList";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import AddProduct from "./components/AddProduct";
import BrandLogoCarousel from "./components/BrandLogoCarousel";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className='w-full'>
        <NavBar />

        <Routes>
          <Route path="/" element={<>
            <Hero />
            <People />
            <BrandLogoCarousel />
            <ProductList /> {/* Home page includes products */}
          </>} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductList />} /> {/* <-- Add this */}
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

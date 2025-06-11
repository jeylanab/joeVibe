import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Testmonial from './components/Testmonial';
import People from './components/People';
import Footer from './components/Footer';
import Items from './components/Items';
import "./index.css";
import ProductList from './components/ProductList';

const App = () => {
  return (
    <Router>
      <div className='w-full'>
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ProductList/>
              <Testmonial />
              <People />
              <Footer />
            </>
          } />
          <Route path="/items" element={
            <>
              <Items />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

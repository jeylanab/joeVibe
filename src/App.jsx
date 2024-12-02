import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Testmonial from './components/Testmonial';
import People from './components/People';
import Footer from './components/Footer';
import "./index.css"



const App = () => {
  return (
    <div className='w-full'>
      <NavBar />
      <Hero />
      <Testmonial />
      <People/>
      <Footer />
    
      
    </div>
  );
};

export default App;

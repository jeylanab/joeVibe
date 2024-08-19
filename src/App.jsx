import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Testmonial from './components/Testmonial';
import People from './components/People';
import "./index.css"



const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Testmonial />
      <People/>
      
    </div>
  );
};

export default App;

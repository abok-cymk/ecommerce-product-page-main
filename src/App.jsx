import React from 'react';
import data from "../data.json";
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  return (
    <div className='max-w-5xl mx-auto px-0 md:px-6 py-4 md:py-10 overflow-x-hidden'>
      <Navbar 
      logo={data.logo}
      cart={data.cart}
      avatar={data.avatar}
      />
      <Hero />
    </div>
  );
}

export default App;

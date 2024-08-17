import React from 'react';
import hero1 from "../assets/hero1.svg";
import hero2 from "../assets/hero2.svg";
import hero3 from "../assets/hero3.svg";
import hero4 from "../assets/hero4.svg";
import hero5 from "../assets/hero5.svg";

const Hero = () => {
  const images = [hero1, hero2, hero4];

  return (
    <div className='flex flex-col md:flex-row h-auto md:h-[500px] m-10'>
      {/* Left side for hero text */}
      <div className='w-full md:w-1/2 flex items-center justify-center p-5'>
        <div className='text-center'>
          <h1 className='text-2xl md:text-8xl font-bold mb-4 text-shadow'>Discover Your Style</h1>
          <p className='text-md md:text-lg'>Some descriptive text goes here. Explain the purpose of the hero section or a call to action.</p>
        </div>
      </div>

      {/* Right side for images */}
      <div className='w-full md:w-1/2 flex flex-col md:flex-row p-5'>
        {/* Full height image */}
        <div
          className='w-full md:w-1/2 h-[300px] md:h-full bg-cover bg-center rounded-sm flex items-end justify-center'
          style={{ backgroundImage: `url(${images[0]})` }}
        >
          <button className='text-white p-5'>Shop Collection</button>
        </div>

        {/* Two images sharing height */}
        <div className='w-full md:w-1/2 flex flex-col pl-3'>
          <div
            className='w-full h-[150px] md:h-1/2 bg-cover bg-center mb-3'
            style={{ backgroundImage: `url(${images[1]})` }}
          >
          </div>
          <div
            className='w-full h-[150px] md:h-1/2 bg-cover bg-center'
            style={{ backgroundImage: `url(${images[2]})` }}
          >
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';

// Import your logos from /assets/brands/
import brand1 from '../assets/brands/1.png';
import brand2 from '../assets/brands/2.png';
import brand3 from '../assets/brands/3.png';
import brand4 from '../assets/brands/4.png';
import brand5 from '../assets/brands/5.png';
import brand6 from '../assets/brands/6.png';
import brand7 from '../assets/brands/7.png';
import brand8 from '../assets/brands/8.png';
import brand9 from '../assets/brands/9.png';

const brandLogos = [
  brand1, brand2, brand3, brand4, brand5,
  brand6, brand7, brand8, brand9,
];

// Duplicate to create an infinite loop effect
const loopedLogos = [...brandLogos, ...brandLogos];

const BrandShowcase = () => {
  return (
    <section className="bg-white py-20 w-full overflow-hidden">
      <div className="text-center px-4 mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Trusted by Global Icons
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-lg">
          These brands represent innovation, confidence, and identity. We’re proud to showcase the vibes that influence fashion today.
        </p>
      </div>

      <motion.div
        className="flex gap-12 items-center w-max px-4"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {loopedLogos.map((logo, index) => (
          <div
            key={index}
            className="w-32 sm:w-36 h-20 sm:h-24 flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            <img
              src={logo}
              alt={`Brand ${index + 1}`}
              className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </motion.div>

      <div className="mt-16 mx-2 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Ready to Join These Visionaries?
        </h3>
        <p className="text-gray-600 mb-6">
          Become part of a platform that grows your vibe into a global identity.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300">
          Join the Movement
        </button>
      </div>
    </section>
  );
};

export default BrandShowcase;

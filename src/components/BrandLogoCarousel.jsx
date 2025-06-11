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

const loopedLogos = [...brandLogos, ...brandLogos];

const BrandShowcase = () => {
  return (
    <section className="bg-white py-16 w-full overflow-hidden">
      <div className="text-center px-4 mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Trusted by Global Icons
        </h2>
        <p className="text-gray-600 max-w-md sm:max-w-xl mx-auto text-base sm:text-lg">
          Join the wave of top global brands shaping the future of fashion, culture, and creativity with us.
        </p>
      </div>

      <motion.div
        className="flex gap-8 items-center w-max px-4"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {loopedLogos.map((logo, index) => (
          <div
            key={index}
            className="w-24 h-16 flex items-center justify-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={logo}
              alt={`Brand ${index + 1}`}
              className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </motion.div>

      <div className="mt-14 text-center px-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          Ready to Join These Visionaries?
        </h3>
        <p className="text-gray-600 mb-5 max-w-md mx-auto">
          Whether you're a startup or a style leader, JoeVibe elevates your presence with identity and influence.
        </p>
        <button className="bg-black text-white px-6 py-2.5 text-sm sm:text-base rounded-full hover:bg-gray-800 transition-all duration-300">
          Join the Movement
        </button>
      </div>
    </section>
  );
};

export default BrandShowcase;

import React from 'react';
import { motion } from 'framer-motion';

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
    <section className="bg-white py-20 w-full overflow-hidden relative">

      {/* 🔥 Top Animated Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/30 backdrop-blur-md border border-white/40 shadow-xl rounded-2xl max-w-2xl mx-auto px-6 py-8 text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Trusted by Global Icons
        </h2>
        <p className="text-gray-700 text-base sm:text-lg max-w-lg mx-auto">
          Join the wave of top global brands shaping the future of fashion, culture, and creativity with us.
        </p>
      </motion.div>

      {/* 🎞️ Rolling Brand Logos */}
      <motion.div
        className="flex gap-10 items-center w-max px-4"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {loopedLogos.map((logo, index) => (
          <div
            key={index}
            className="w-36 h-28 sm:w-40 sm:h-28 flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            <img
              src={logo}
              alt={`Brand ${index + 1}`}
              className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </motion.div>

{/* Bottom CTA Card with Animated Rolling Stroke */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="relative mt-16 max-w-2xl mx-auto text-center px-6 py-8 rounded-2xl bg-white shadow-xl z-10 overflow-hidden"
>
  {/* Animated Border */}
  <div className="absolute inset-0 z-0 before:content-[''] before:absolute before:inset-[-4px] before:rounded-3xl before:bg-[conic-gradient(from_0deg,_orange,green,green,_orange,_orange,_orange,_orange,_orange)] before:animate-spin-slow before:z-[-1]"></div>

  {/* Inner Content */}
  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 relative z-10">
    Ready to Join These Visionaries?
  </h3>
  <p className="mb-5 max-w-md mx-auto text-sm sm:text-base text-gray-700 relative z-10">
    Whether you're a startup or a style leader, JoeVibe elevates your presence with identity and influence.
  </p>
  <button className="bg-black text-white font-medium px-6 py-2.5 text-sm sm:text-base rounded-full hover:bg-gray-900 transition-all duration-300 relative z-10">
    Join the Movement
  </button>
</motion.div>


    </section>
  );
};

export default BrandShowcase;

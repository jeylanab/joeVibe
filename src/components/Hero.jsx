import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import hero1 from "../assets/hero1.svg";
import hero2 from "../assets/hero2.svg";
import hero4 from "../assets/hero4.svg";

const Hero = () => {
  const allImages = [hero1, hero2, hero4];
  const [images, setImages] = useState(allImages);
  const [textIndex, setTextIndex] = useState(0);
  const [imageKey, setImageKey] = useState(0);

  const textOptions = ['Discover', 'Uncover', 'Unleash', 'Explore'];

  // Rotate heading text
  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % textOptions.length);
    }, 3000);
    return () => clearInterval(textInterval);
  }, []);

  // Rotate images
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setImages((prev) => {
        const next = [prev[1], prev[2], prev[0]];
        setImageKey((k) => k + 1);
        return next;
      });
    }, 5000);
    return () => clearInterval(imageInterval);
  }, []);

  // Animation variants
  const centerVariants = {
    enter: {
      opacity: 0,
      scale: 0.95,
      zIndex: 0,
      y: 20,
    },
    center: {
      opacity: 1,
      scale: 1,
      zIndex: 10,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      zIndex: 0,
      y: -20,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <div className="w-full bg-[#f8f9fb] py-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-center gap-6 px-4 md:px-8 relative">
        
        {/* Left small image */}
        <motion.div
          key={`left-${imageKey}`}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="w-[120px] h-[120px] md:h-[400px] bg-cover bg-center rounded-full shadow-xl"
          style={{ backgroundImage: `url(${images[1]})` }}
        />

        {/* Center image */}
        <div className="relative w-full md:w-[500px] h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`center-${imageKey}`}
              variants={centerVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-[40px] shadow-2xl flex items-end justify-center"
              style={{ backgroundImage: `url(${images[0]})` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-[40px]" />

              {/* Text content */}
              <div className="z-10 text-center pb-10 px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-green-500 animate-pulse">
                  {textOptions[textIndex]} <span className="text-white block">Your Style</span>
                </h1>
                <p className="text-sm sm:text-base text-white mb-6">
                  Shop the latest trends and exclusive collections
                </p>
                <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300 shadow-md">
                  Shop Collections
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right small image */}
        <motion.div
          key={`right-${imageKey}`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="w-[120px] h-[120px] md:h-[400px] bg-cover bg-center rounded-full shadow-xl"
          style={{ backgroundImage: `url(${images[2]})` }}
        />
      </div>
    </div>
  );
};

export default Hero;

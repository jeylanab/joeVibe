import React, { useState, useEffect } from 'react';
import lg1 from "../assets/lg1.svg";
import lg2 from "../assets/lg2.svg";
import lg3 from "../assets/lg3.svg";
import lg4 from "../assets/lg4.svg";
import cart2 from "../assets/cart2.svg";
import measure from "../assets/measure.svg";
import delivered from "../assets/delivered.svg";
import twotone from "../assets/twotone.svg";

const Testmonial = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const targetNumber = 32000;

  useEffect(() => {
    const increment = Math.ceil(targetNumber / 100);
    const interval = setInterval(() => {
      setCurrentNumber((prev) => {
        if (prev >= targetNumber) {
          clearInterval(interval);
          return targetNumber;
        }
        return prev + increment;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [targetNumber]);

  return (
    <div className="w-full">
      <div className='card-item mx-auto max-w-7xl sm:mx-4'>
        <div className='side-card'>
          <h1 className='text-center text-xl sm:text-2xl font-medium p-3'>
            Join <span className='text-shadow text-3xl sm:text-4xl font-bold'>{currentNumber.toLocaleString()}+ </span> 
            style enthusiasts growing their brands with JoeVibe
          </h1>
          <div className='flex flex-wrap justify-center items-center'>
            <img className='m-2 w-20 sm:w-24' src={lg1} alt="brand-one" />
            <img className='m-2 w-20 sm:w-24' src={lg2} alt="brand-two" />
            <img className='m-2 w-20 sm:w-24' src={lg3} alt="brand-three" />
            <img className='m-2 w-20 sm:w-24' src={lg4} alt="brand-four" />
          </div>
        </div>
      </div>
      <div className='test-background py-10 sm:py-20'>
        <h1 className='pt-10 sm:pt-[100px] title-color text-center text-3xl sm:text-4xl font-semibold mb-5'>What we do</h1>
        <div className='card-item-2 mx-auto max-w-7xl sm:mx-4'>
          <div className='flex flex-col justify-between items-center p-4 sm:p-10'>
            <div className='flex flex-col sm:flex-row justify-between w-full sm:px-10'>
              <div className='flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-0'>
                <div className='flex items-center justify-center small-box'>
                    <img className='w-12 sm:w-16' src={cart2} alt="cart two" />
                </div> 
                <h3 className='px-4 text-center sm:text-left text-base sm:text-lg'>Discover the Latest in Urban Fashion - Style that Resonates with Your Vibe</h3>
              </div>
              <div className='flex flex-col sm:flex-row justify-between items-center'>
               <div className='flex items-center justify-center small-box'>
                    <img className='w-12 sm:w-16' src={delivered} alt="cart two" />
                </div> 
                <h3 className='px-4 text-center sm:text-left text-base sm:text-lg'>Fast and Reliable Delivery - Bringing Your Vibe to Your Doorstep</h3>
              </div>
            </div>
            <div className='flex flex-col sm:flex-row justify-between w-full mt-8 sm:px-10'>
              <div className='flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-0'>
                <div className='flex items-center justify-center small-box'>
                    <img className='w-12 sm:w-16' src={twotone} alt="cart two" />
                </div> 
                <h3 className='px-4 text-center sm:text-left text-base sm:text-lg'>Bold and Versatile Designs - Elevate Your Look with Two-Tone Fashion</h3>
              </div>
              <div className='flex flex-col sm:flex-row justify-between items-center'>
                <div className='flex items-center justify-center small-box'>
                    <img className='w-12 sm:w-16' src={measure} alt="cart two" />
                </div> 
                <h3 className='px-4 text-center sm:text-left text-base sm:text-lg'>Perfect Fit, Every Time - Customized Sizing for Your Unique Vibe</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testmonial;

import React from 'react';
import test1 from "../assets/test1.svg";
import test2 from "../assets/test2.svg";
import test3 from "../assets/test3.svg";
import quest from "../assets/quest.svg";

const People = () => {
  return (
    <div className="w-full">
      <div>
        <h1 className='text-center text-2xl sm:text-4xl font-semibold  m-10'>
          What people all over the world are saying about us
        </h1>
        <div className='flex flex-col md:flex-row justify-center items-center sm:px-[100px]'>
          <div className='flex flex-col justify-start items-center m-5 sm:m-5 px-5 py-2 mytest cursor-pointer sm:w-auto'>
            <h3 className='title-color py-3 text-center sm:text-left'>
              Excellent service and support. Highly recommended by everyone who tried!
            </h3>
            <hr className='w-full m-5' />
            <div className='flex justify-start w-full items-center'>
              <img className='rounded-full w-12 h-12 sm:w-16 sm:h-16' src={test1} alt="test 1" />
              <div className='px-5'>
                <h3>John Doe</h3>
                <h2 className='title-color'>Designer</h2>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-start items-center m-5 sm:m-5 px-5 py-2 mytest cursor-pointer sm:w-auto'>
            <h3 className='title-color py-3 text-center sm:text-left'>
              Amazing experience, outstanding quality, and support I can rely on.
            </h3>
            <hr className='w-full m-5' />
            <div className='flex justify-start w-full items-center'>
              <img className='rounded-full w-12 h-12 sm:w-16 sm:h-16' src={test3} alt="test 3" />
              <div className='px-5'>
                <h3>Jane Smith</h3>
                <h2 className='title-color'>Developer</h2>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-start items-center m-5 sm:m-5 px-5 py-2 mytest cursor-pointer sm:w-auto'>
            <h3 className='title-color py-3 text-center sm:text-left'>
              Great product! Exceeded all my expectations, and love it.
            </h3>
            <hr className='w-full m-5' />
            <div className='flex justify-start w-full items-center'>
              <img className='rounded-full w-12 h-12 sm:w-16 sm:h-16' src={test2} alt="test 2" />
              <div className='px-5'>
                <h3>Emily Davis</h3>
                <h2 className='title-color'>Artist</h2>
              </div>
            </div>
          </div>
        </div>
        
        <h1 className='text-center text-2xl sm:text-4xl font-semibold pt-[50px] sm:pt-[100px] py-10'>
          Frequently asked questions
        </h1>
      </div>

      {/* Frequently asked questions section */}
      <div className='flex flex-col m-5 sm:flex-row justify-center items-start sm:items-center'>
        <ul className='accordion w-full'>
          <li className='shadow-md'>
            <input type="radio" name='accordion' id='first' />
            <label className='flex items-center cursor-pointer py-3 px-4' htmlFor='first'>
              What is JoeVibe?
            </label>
            <div className='content px-4 py-2'>
              <p>JoeVibe is an online marketplace that offers a curated selection of fashion, accessories, and lifestyle products. We focus on providing high-quality, stylish items at affordable prices.</p>
            </div>
          </li>
          <li className='shadow-md'>
            <input type="radio" name='accordion' id='second' />
            <label className='flex items-center cursor-pointer py-3 px-4' htmlFor='second'>
              How do I track my order?
            </label>
            <div className='content px-4 py-2'>
              <p>After placing your order, you will receive an email with a tracking link. You can also log into your JoeVibe account and check the order status in the "My Orders" section.</p>
            </div>
          </li>
          <li className='shadow-md'>
            <input type="radio" name='accordion' id='third' />
            <label className='flex items-center cursor-pointer py-3 px-4' htmlFor='third'>
              What is your return policy?
            </label>
            <div className='content px-4 py-2'>
              <p>We offer a 30-day return policy on most items. Products must be unused and in their original packaging. To initiate a return, visit the "Returns" page on our website and follow the instructions.</p>
            </div>
          </li>
          <li className='shadow-md'>
            <input type="radio" name='accordion' id='fourth' checked />
            <label className='flex items-center cursor-pointer py-3 px-4' htmlFor='fourth'>
              How can I contact customer support?
            </label>
            <div className='content px-4 py-2'>
              <p>You can reach our customer support team via the "Contact Us" page on our website. We are available by email, live chat, and phone during regular business hours.</p>
            </div>
          </li>
        </ul>
        
        <div className='flex flex-col items-center justify-center  bg-white shadow-md py-10 mt-10 sm:mt-0'>
          <div className='py-5'>
            <img src={quest} alt="More Questions" />
          </div>
          <h1 className='font-semibold text-xl sm:text-2xl text-center'>
            Do you have more questions?
          </h1>
          <p className='text-center py-5 px-3'>
            Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.
          </p>
          <button className='button-1 px-5 py-3 rounded-[2px]'>
            Shop Collection
          </button>
        </div>
      </div>
    </div>
  );
}

export default People;

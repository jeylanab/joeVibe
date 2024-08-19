import React from 'react'
import test1 from "../assets/test1.svg"
import test2 from "../assets/test2.svg"
import test3 from "../assets/test3.svg"
import quest from "../assets/quest.svg"

const People = () => {
  return (
      <div>
          <div>
              <h1 className='text-center text-4xl font-semibold my-10'>What people all over the world are saying about us</h1>
              <div className='flex justify-start items-center px-[100px]'>
                  <div className='flex flex-col justify-start items-center m-5 px-5 py-2 mytest cursor-pointer'>
                      <h3 className='title-color py-3'>Excellent service and support. Highly recommended by everyone who tried!</h3>
                      <hr />
                      <div className='flex justify-start w-full items-center'>
                          <img className='rounded-full' src={test1} alt="test 1" />
                          <div className='px-5'>
                             <h3>John Doe</h3>
                             <h2 className='title-color'>Designer</h2>
                          </div>
                      </div>
                  </div>
                  <div className='flex flex-col justify-start items-center m-5 px-5 py-2 mytest cursor-pointer'>
                      <h3 className='title-color py-3'>Amazing experience, outstanding quality, and support I can rely on.</h3>
                      <hr />
                      <div className='flex justify-start w-full items-center'>
                          <img className='rounded-full' src={test3} alt="test 3" />
                          <div className='px-5'>
                             <h3>Jane Smith</h3>
                             <h2 className='title-color'>Developer</h2>
                          </div>
                      </div>
                  </div>
                  <div className='flex flex-col justify-start items-center m-5 px-5 py-2 mytest cursor-pointer'>
                      <h3 className='title-color py-3'>Great product! Exceeded all my expectations, and love it.</h3>
                      <hr />
                      <div className='flex justify-start w-full items-center'>
                          <img className='rounded-full' src={test2} alt="test 2" />
                          <div className='px-5'>
                             <h3>Emily Davis</h3>
                             <h2 className='title-color'>Artist</h2>
                          </div>
                      </div>
                  </div>
              </div>
              
              <h1 className='text-center text-4xl font-semibold pt-[100px] py-10'>Frequently asked questions</h1>

          </div>
          {/* frequently asked questions tag */}
         <div className=' flex justify-center items-center'>
                <ul className='accordion '>
                    <li className='shadow-md'>
                        <input type="radio" name='accordion' id='first' />
                        <label className='flex items-center' htmlFor='first'>What is JoeVibe?</label>
                        <div className='content'>
                            <p>JoeVibe is an online marketplace that offers a curated selection of fashion, accessories, and lifestyle products. We focus on providing high-quality, stylish items at affordable prices.</p>
                        </div>
                    </li>
                     <li className='shadow-md'>
                        <input type="radio" name='accordion' id='second' />
                        <label htmlFor='second'>How do I track my order?</label>
                        <div className='content'>
                            <p>After placing your order, you will receive an email with a tracking link. You can also log into your JoeVibe account and check the order status in the "My Orders" section.</p>
                        </div>
                    </li>
                     <li className='shadow-md'>
                        <input type="radio" name='accordion' id='third' />
                        <label htmlFor='third'>What is your return policy?</label>
                        <div className='content'>
                            <p>We offer a 30-day return policy on most items. Products must be unused and in their original packaging. To initiate a return, visit the "Returns" page on our website and follow the instructions.</p>
                        </div>
                    </li>
                    <li className='shadow-md'>
                        <input type="radio" name='accordion' id='fourth' />
                        <label htmlFor='fourth'>How can I contact customer support?</label>
                        <div className='content'>
                            <p>You can reach our customer support team via the "Contact Us" page on our website. We are available by email, live chat, and phone during regular business hours.</p>
                        </div>
                    </li>
              </ul>
              
              <div className=' flex flex-col items-center justify-center w-[400px] mx-5 bg-white shadow-md py-10'>
                  <div className='py-5'>
                      <img src={quest} alt="" />
                  </div>
                  <h1 className='font-semibold text-2xl'>Do you have more questions?</h1>
                  
                  <p className='text-center py-5'>Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.</p>
                  <button className='button-1 px-5 py-3 rounded-[2px]'>Shop Collection</button>
                  
              </div>
          </div>
      </div>
  )
}

export default People

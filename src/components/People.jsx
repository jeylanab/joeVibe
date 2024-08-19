import React from 'react'
import test1 from "../assets/test1.svg"
import test2 from "../assets/test2.svg"
import test3 from "../assets/test3.svg"

const People = () => {
  return (
      <div>
          <div>
              <h1 className='text-center text-4xl font-semibold my-10'>What people all over the world are saying about us</h1>
              <div className='flex justify-start items-center px-[100px]'>
                  <div className='flex flex-col justify-start items-center m-5 px-5 py-2 mytest'>
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
                  <div className='flex flex-col justify-start items-center m-5 px-5 py-2 mytest'>
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
                  <div className='flex flex-col justify-start items-center m-5 px-5 py-2 mytest'>
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
          </div>
      </div>
  )
}

export default People

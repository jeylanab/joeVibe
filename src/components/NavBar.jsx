import React from 'react'
import logo from "../assets/joevibe.svg"
import search from "../assets/search.svg"
import cart from "../assets/cart.svg"

const NavBar = () => {
  return (
      <div className=''> 
          <div className='flex justify-around items-center my-5'>
              <div className='logo flex items-center justify-start'>
                <img src={logo} alt="WEBSITE LOGO" />
              </div>
              <ul className=' flex justify-evenly items-center '>
                  <li className='mx-5'>Home</li>
                  <li className='mx-5'> Product</li>
                  <li className='mx-5'>Contact</li>
              
              </ul>
              <div className='flex justify-center items-center'>
                  <div className=' search flex justify-center items-center mx-5'>
                      <div className=' bg-white icons p-3 rounded-full mx-2'>
                          <img className='' src={search} alt="search button" />
                      </div>
                      <p>Search</p>
                  </div>
                  <div className=' cart flex justify-center items-center mx-5'>
                      <div className=' bg-white  icons p-3 rounded-full mx-2 '>
                          <img src={cart} alt="search button" />
                      </div>
                      <p>Cart</p>
                  </div>
                  <div className=' '>
                    <button className=' starter px-5 py-2 rounded-[2px]'>Get Started</button>
                  </div>
                
              </div>
          </div>
          
   
      
      </div>
  )
}

export default NavBar
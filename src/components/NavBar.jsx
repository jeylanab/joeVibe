import React from 'react'
import { navLinks } from '../constants/data'
import logo from "../assets/logo.svg"
import favorite from "../assets/favorite.svg"
import cart from "../assets/cart.png"
import profile from "../assets/profile.svg"

const NavBar = () => {
  return (
    <div>
      <div className=' flex justify-between items-center m-5'>
        {/* menus div */}
        <div className='  flex justify-center items-center '>
          <ul className= 'flex  items-center justify-center  p-0 m-0'>{navLinks.map((item, index) => (
            <li className='mx-3' key={index}>{item.title}</li>
            
            ))}
          </ul>
          
        </div>
        {/* logo div */}
        <div className='p-0 logo-div'>
          <img src={logo} alt="" />
        </div>
        {/* icon div */}
        <div className='p-0 nav-icon flex justify-center items-center'>
           <div><input className='mx-2 rounded-md p-1 border border-gray-300 focus:border-orange-500 outline-none ' type="text" placeholder='Search for Interest' /></div>
           <img className='mx-2' src={favorite} alt="" />
           <img className='mx-2' src={cart} alt="" />
           <img className='mx-2' src={profile} alt="" />
        </div>
         
      </div>
       
    </div>
  )
}

export default NavBar
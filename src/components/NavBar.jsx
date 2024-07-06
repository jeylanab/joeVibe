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
          <ul className= 'flex  items-center justify-center  p-0'>{navLinks.map((item, index) => (
            <li className='mx-2' key={index}>{item.title}</li>
            
            ))}
          </ul>
          
        </div>
        {/* logo div */}
        <div className='p-0 logo-div'>
          <img src={logo} alt="" />
        </div>
        {/* icon div */}
        <div className='p-0 nav-icon flex justify-center items-center'>
           <div><input type="text" /></div>
           <img src={favorite} alt="" />
           <img src={cart} alt="" />
           <img src={profile} alt="" />
        </div>
         
      </div>
       
    </div>
  )
}

export default NavBar
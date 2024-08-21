import React from 'react'
import logo from "../assets/joevibe.svg";

const Footer = () => {
   const currentYear = new Date().getFullYear();
  return (
    <div className='bg-slate-950 font-light text-sm mt-[100px] text-slate-200 text-center w-full '>
      <div className='p-5'>
           <a><img src={logo} alt="JoeVibe logo" /></a> 
      </div>
      <div className='flex justify-center items-center px-5'>
        <div className='flex-grow basis-0'>
          <ul>
             <li className='extra-small'> <a href="/collections">Shop Collections</a> </li>
             <li className='extra-small'> <a href="/new-arrivals">New Arrivals</a></li>
             <li className='extra-small'> <a href="/best-sellers">Best Sellers</a></li>
             <li className='extra-small'> <a href="/sale">Sale Items</a></li>
          </ul>
        </div>
        <div className='flex-grow basis-0 p-5'>
          <ul>
             <li className='extra-small'> <a href="/about">Our Story</a> </li>
             <li className='extra-small'> <a href="/sustainability">Sustainability</a></li>
             <li className='extra-small'> <a href="/careers">Careers</a></li>
             <li className='extra-small'> <a href="/blog">Blog</a></li>
          </ul>
        </div>
        <div className='flex-grow basis-0'>
          <ul>
             <li className='extra-small'><a href="/contact">Customer Service</a> </li>
             <li className='extra-small'><a href="/shipping">Shipping & Returns</a>  </li>
             <li className='extra-small'><a href="/faq">FAQs</a>  </li>
             <li className='extra-small'><a href="/terms">Terms & Conditions</a>  </li>
          </ul>
          
        </div>
        
      </div>
      <div>
        <div className='flex justify-around'>
         <p className='paragraph p-2'> ©{currentYear} JoeVibe. All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;

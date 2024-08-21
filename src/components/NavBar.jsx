import React, { useState } from 'react';
import logo from "../assets/joevibe.svg";
import search from "../assets/search.svg";
import close from "./close.svg";
import cart from "../assets/cart.svg";
import menu from "./menu.svg";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='sticky top-0 z-50 navbg'>
      {/* Desktop Navbar */}
      <div className='hidden md:flex justify-around items-center my-5'>
        <div className='logo flex items-center justify-start cursor-pointer'>
          <img src={logo} alt="WEBSITE LOGO" />
        </div>
        <ul className='flex justify-evenly items-center cursor-pointer'>
          <li className='mx-5'>Home</li>
          <li className='mx-5'>Product</li>
          <li className='mx-5'>Contact</li>
        </ul>
        <div className='flex justify-center items-center'>
          <div className='search flex justify-center items-center mx-5 cursor-pointer'>
            <div className='bg-white icons p-3 rounded-full mx-2'>
              <img src={search} alt="search button" />
            </div>
            <p>Search</p>
          </div>
          <div className='cart flex justify-center items-center mx-5 cursor-pointer'>
            <div className='bg-white icons p-3 rounded-full mx-2'>
              <img src={cart} alt="cart button" />
            </div>
            <p>Cart</p>
          </div>
          <div>
            <button className='starter px-5 py-2 rounded-[2px]'>Get Started</button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navbar */}
      <div className='md:hidden flex justify-between items-center mobile m-5'>
        <div className='left'>
          <img src={logo} alt="JOEVIBE LOGO" />
        </div>
        <div>
          <img
            src={isMobileMenuOpen ? close : menu}
            alt={isMobileMenuOpen ? "close menu" : "open menu"}
            onClick={toggleMobileMenu}
            className="cursor-pointer p-3"
          />
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden flex flex-col items-center bg-gray-100 p-5 absolute top-0 left-0 w-full h-screen z-40'>
          <div className='flex justify-between items-center w-full mb-5'>
            <img 
              src={close} 
              alt="close menu" 
              onClick={toggleMobileMenu} 
              className="cursor-pointer"
            />
          </div>
          <ul className='flex flex-col text-left items-center space-y-5'>
            <li onClick={toggleMobileMenu}>Home</li>
            <li onClick={toggleMobileMenu}>Product</li>
            <li onClick={toggleMobileMenu}>Contact</li>
          </ul>
          <div className='flex flex-col items-left mt-5'>
            <div className='search flex items-center my-3'>
              <div className='bg-white icons p-3 rounded-full mx-2'>
                <img src={search} alt="search button" />
              </div>
              <p>Search</p>
            </div>
            <div className='cart flex  items-center my-3'>
              <div className='bg-white icons p-3 rounded-full mx-2'>
                <img src={cart} alt="cart button" />
              </div>
              <p>Cart</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;

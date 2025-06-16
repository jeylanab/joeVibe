import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'; // 👈 Added for routing
import logo from "../assets/joevibe.svg";
import search from "../assets/search.svg";
import close from "./close.svg";
import cart from "../assets/cart.svg";
import menu from "./menu.svg";
import { AuthContext } from "../context/AuthContext"; // 👈 Import context

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext); // 👈 Use auth state

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='sticky top-0 z-50 navbg'>
      {/* Desktop Navbar */}
      <div className='hidden md:flex justify-around items-center my-5'>
        <div className='logo flex items-center justify-start cursor-pointer'>
          <Link to="/"><img src={logo} alt="WEBSITE LOGO" /></Link>
        </div>
        <ul className='flex justify-evenly items-center cursor-pointer'>
          <li className='mx-5'><Link to="/">Home</Link></li>
          <li className='mx-5'><Link to="/">Product</Link></li>
          <li className='mx-5'><Link to="/">Contact</Link></li>
          {user && (
            <li className='mx-5 text-purple-500'><Link to="/admin/add-product">Admin</Link></li>
          )}
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
            {user ? (
              <button onClick={logout} className='starter px-5 py-2 rounded-[2px] bg-red-500 text-white'>Logout</button>
            ) : (
              <>
                <Link to="/login" className='starter px-4 py-2 rounded-[2px] mx-1 bg-blue-500 text-white'>Login</Link>
                <Link to="/register" className='starter px-4 py-2 rounded-[2px] mx-1 bg-green-500 text-white'>Register</Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className='md:hidden flex justify-between items-center mobile m-5'>
        <div className='left'>
          <Link to="/"><img src={logo} alt="JOEVIBE LOGO" /></Link>
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
        <div className='md:hidden flex flex-col items-center mybg p-5 absolute top-0 left-0 w-full h-screen z-40'>
          <div className='flex justify-between items-center w-full mb-5'>
            <img 
              src={close} 
              alt="close menu" 
              onClick={toggleMobileMenu} 
              className="cursor-pointer"
            />
          </div>
          <ul className='flex flex-col text-2xl text-left items-center space-y-5'>
            <li onClick={toggleMobileMenu}><Link to="/">Home</Link></li>
            <li onClick={toggleMobileMenu}><Link to="/">Product</Link></li>
            <li onClick={toggleMobileMenu}><Link to="/">Contact</Link></li>
          </ul>
          <div className='flex flex-col text-2xl items-left mt-5'>
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
            <div className='mt-5 space-y-3'>
              {user ? (
                <button onClick={() => { logout(); toggleMobileMenu(); }} className='starter w-full py-2 bg-red-500 text-white'>Logout</button>
              ) : (
                <>
                  <Link to="/login" onClick={toggleMobileMenu} className='starter w-full py-2 bg-blue-500 text-white text-center block'>Login</Link>
                  <Link to="/register" onClick={toggleMobileMenu} className='starter w-full py-2 bg-green-500 text-white text-center block'>Register</Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;

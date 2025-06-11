import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import logo from "../assets/joevibe.svg";
import search from "../assets/search.svg";
import close from "./close.svg";
import cart from "../assets/cart.svg";
import menu from "./menu.svg";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/items" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between px-10 py-4 backdrop-blur-lg bg-white/30 shadow-sm rounded-b-xl">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="w-[130px]" />
        </Link>

        {/* Nav Links */}
        <ul className="flex space-x-8 text-gray-800 font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className="hover:text-orange-500 hover:underline transition duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Action Icons & Button */}
        <div className="flex items-center space-x-6">
          <div className="hover:bg-white/50 p-2 rounded-full transition">
            <img src={search} alt="Search" className="w-5 h-5" />
          </div>
          <div className="hover:bg-white/50 p-2 rounded-full transition">
            <img src={cart} alt="Cart" className="w-5 h-5" />
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-semibold shadow transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile Top Bar */}
      <div className="flex md:hidden justify-between items-center px-5 py-3 backdrop-blur-lg bg-white/30 shadow-sm">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-[110px]" />
        </Link>
        <img
          src={isMobileMenuOpen ? close : menu}
          alt="Toggle Menu"
          onClick={toggleMobileMenu}
          className="w-8 h-8 cursor-pointer"
        />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-start backdrop-blur-lg bg-white/30 px-6 py-10"
          >
            <div className="w-full flex justify-end mb-6">
              <img
                src={close}
                alt="Close"
                onClick={toggleMobileMenu}
                className="w-8 h-8 cursor-pointer"
              />
            </div>

            <ul className="flex flex-col space-y-6 text-xl font-semibold text-gray-800">
              {navLinks.map((link, index) => (
                <li key={index} onClick={toggleMobileMenu}>
                  <Link
                    to={link.path}
                    className="hover:text-orange-500 transition duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-center gap-6 mt-10">
              <div className="flex items-center gap-2">
                <img src={search} alt="Search" className="w-5 h-5" />
                <span>Search</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={cart} alt="Cart" className="w-5 h-5" />
                <span>Cart</span>
              </div>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="mt-10 bg-orange-500 text-white px-8 py-2 rounded-full hover:bg-orange-600 font-semibold shadow-md"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;

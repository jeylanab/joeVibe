import React from 'react';
import logo from "../assets/joevibe.svg";
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-slate-200 py-12 mt-24 font-light">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        {/* Logo and Social */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="JoeVibe logo" className="w-28 mb-4" />
            <p className="text-sm text-slate-400 max-w-sm text-center md:text-left">
              Elevate your identity through fashion, sustainability, and curated design. Join the JoeVibe movement.
            </p>
          </div>

          <div className="flex gap-6 text-2xl">
            <motion.a
              href="https://github.com/jeylanab/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/jeylan-tesi-53a746257/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="https://x.com/jetu81"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTwitter />
            </motion.a>
          </div>
        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center sm:text-left mb-10">
          <div>
            <h4 className="font-semibold mb-3 text-slate-100">Shop</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="/collections" className="hover:text-white">Collections</a></li>
              <li><a href="/new-arrivals" className="hover:text-white">New Arrivals</a></li>
              <li><a href="/best-sellers" className="hover:text-white">Best Sellers</a></li>
              <li><a href="/sale" className="hover:text-white">Sale Items</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-slate-100">Company</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="/about" className="hover:text-white">Our Story</a></li>
              <li><a href="/sustainability" className="hover:text-white">Sustainability</a></li>
              <li><a href="/careers" className="hover:text-white">Careers</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-slate-100">Support</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/shipping" className="hover:text-white">Shipping & Returns</a></li>
              <li><a href="/faq" className="hover:text-white">FAQs</a></li>
              <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-slate-800 pt-6 text-xs text-slate-500">
          © {currentYear} JoeVibe. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

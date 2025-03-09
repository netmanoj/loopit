'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Shop() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50/30">
      {/* Modern Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-green-600">Loopit</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-600 hover:text-green-600 transition-colors">About Us</Link>
              <Link href="/#products" className="text-gray-600 hover:text-green-600 transition-colors">Products</Link>
              <Link href="/#esg-platform" className="text-gray-600 hover:text-green-600 transition-colors">ESG Platform</Link>
              <Link href="/contact" className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all duration-300 hover:scale-105">
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <Link href="/about" className="text-gray-600 hover:text-green-600 transition-colors">About Us</Link>
                <Link href="/#products" className="text-gray-600 hover:text-green-600 transition-colors">Products</Link>
                <Link href="/#esg-platform" className="text-gray-600 hover:text-green-600 transition-colors">ESG Platform</Link>
                <Link href="/contact" className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all duration-300 inline-block text-center">
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600"
          >
            Coming Soon
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Our shop is under construction. Stay tuned for amazing sustainable products!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              href="/"
              className="inline-block bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 
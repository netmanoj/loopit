'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TermsOfService() {
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

      <div className="max-w-4xl mx-auto pt-24 pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-xl"
        >
          <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
            Terms of Service
          </h1>
          
          <div className="space-y-6 text-gray-600">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Loopit&apos;s services, you agree to be bound by these Terms of Service
                and all applicable laws and regulations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">2. Use of Services</h2>
              <p>
                Our services are provided for your personal and business use. You agree not to misuse
                our services or help anyone else do so.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">3. User Accounts</h2>
              <p>
                You are responsible for maintaining the security of your account and any activities
                that occur under your account.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">4. Intellectual Property</h2>
              <p>
                All content and materials available through our services are protected by
                intellectual property rights and belong to Loopit or its licensors.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">5. Limitation of Liability</h2>
              <p>
                Loopit shall not be liable for any indirect, incidental, special, consequential,
                or punitive damages resulting from your use of our services.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 
'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50/30">
      {/* Modern Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-green-600">Loopit</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto pt-24 pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
                About Loopit
              </h1>
              
              <div className="space-y-6 text-gray-600">
                <p>
                  Loopit is a pioneering force in sustainable packaging and ESG solutions. We combine
                  innovative technology with environmental consciousness to create products and services
                  that make a real difference.
                </p>

                <p>
                  Founded with a vision to revolutionize how businesses approach sustainability,
                  we&apos;ve grown into a trusted partner for companies seeking to reduce their
                  environmental impact while maintaining operational excellence.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Mission</h2>
              <p className="text-gray-600">
                To accelerate the world&apos;s transition to sustainable practices through innovative
                packaging solutions and comprehensive ESG tracking platforms.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Values</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Innovation</h3>
                    <p className="text-gray-600">Pushing boundaries in sustainable technology</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Sustainability</h3>
                    <p className="text-gray-600">Environmental responsibility in everything we do</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Transparency</h3>
                    <p className="text-gray-600">Open and honest in all our operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Impact</h2>
              <div className="space-y-6">
                <div className="text-center p-6 bg-green-50 rounded-2xl">
                  <h3 className="text-4xl font-bold text-green-600 mb-2">50+</h3>
                  <p className="text-gray-600">Products Delivered</p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-2xl">
                  <h3 className="text-4xl font-bold text-blue-600 mb-2">10+</h3>
                  <p className="text-gray-600">Business Partners</p>
                </div>
                <div className="text-center p-6 bg-yellow-50 rounded-2xl">
                  <h3 className="text-4xl font-bold text-yellow-600 mb-2">100+</h3>
                  <p className="text-gray-600">Trees Worth of Paper Saved</p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/saas.png"
                alt="Our Platform"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                <p className="text-white text-lg font-semibold">
                  Our state-of-the-art ESG tracking platform
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
} 
'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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

      <div className="max-w-4xl mx-auto pt-24 pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-xl"
        >
          <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
            Privacy Policy
          </h1>
          
          <div className="space-y-6 text-gray-600">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">1. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, including when you create an account,
                make a purchase, or contact us for support.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services,
                to process your transactions, and to communicate with you.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">3. Information Sharing</h2>
              <p>
                We do not sell or rent your personal information to third parties.
                We may share your information with service providers who assist in our operations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect
                your personal information against unauthorized access or disclosure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">5. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information.
                Contact us at privacy@loopit.com to exercise these rights.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 
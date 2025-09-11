import React from 'react';
import Navbar from '../components_lite/Navbar';
import Footer from '../../components/components_lite/Footer';  // Adjust path if needed
import { motion } from 'framer-motion';

const Creator = () => {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-white to-purple-100 overflow-hidden relative">
      {/* Navbar fixed at top */}
      <Navbar />

      {/* Scrollable middle content */}
      <main className="flex-grow overflow-y-auto max-w-7xl mx-auto px-6 lg:px-10 py-20 relative">
        {/* Decorative floating circles */}
        <motion.div
          className="absolute top-24 left-6 w-20 h-20 sm:w-32 sm:h-32 bg-purple-300 rounded-full opacity-30"
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-24 right-6 w-28 h-28 sm:w-40 sm:h-40 bg-indigo-300 rounded-full opacity-30"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Main content container with added top padding */}
        <div className="flex flex-col items-center justify-center text-center relative z-10 min-h-full pt-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-4xl md:text-5xl font-extrabold text-gray-800 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent leading-[1.2] pt-2 pb-2"
          >
            Explore My Portfolio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-gray-700 text-lg md:text-xl max-w-2xl mb-8"
          >
            Check out all my projects, skills, and work experience. Click the button below to visit my portfolio.
          </motion.p>

          <motion.a
            href="https://akash-raj-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.1, rotate: 2, boxShadow: "0px 15px 25px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95, rotate: -1 }}
            className="px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            Open Portfolio
          </motion.a>
        </div>
      </main>

      {/* Footer fixed at bottom */}
      <Footer />
    </div>
  );
};

export default Creator;

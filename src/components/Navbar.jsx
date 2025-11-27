import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="glass-effect sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-gray-900"
          >
            UltraSole
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'Products', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-600 hover:text-gray-900"
            >
              <i className="fas fa-search"></i>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-600 hover:text-gray-900"
            >
              <i className="fas fa-shopping-bag"></i>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar

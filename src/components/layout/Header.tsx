'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaBars, FaTimes, FaGraduationCap, FaYoutube } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/#contact' },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com/profile.php?id=61571296202560', label: 'Facebook' },
    { icon: FaYoutube, href: '#', label: 'Youtube' },
    { icon: FaInstagram, href: 'https://www.instagram.com/super_science_academy?igsh=MTR1c3U1aDM0Zm4xbA==', label: 'Instagram' },
    // { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <>
      {/* Modern Top Bar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-2.5"
      >
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-medium flex items-center gap-2"
            >
              <FaGraduationCap className="text-yellow-300" />
              <span className="hidden sm:inline">Excellence in Education Since 2000</span>
              <span className="sm:hidden">Excellence Since 2000</span>
            </motion.div>

            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all duration-300"
                  aria-label={social.label}
                  target="_blank"
                >
                  <social.icon className="text-sm" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modern Main Header */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white shadow-xl py-3'
          : 'bg-white/98 backdrop-blur-sm py-4'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Modern Logo */}
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  {/* Logo Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                    <FaGraduationCap className="text-white text-2xl" />
                  </div>

                  {/* Logo Text */}
                  <div>
                    <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      S. B. Patil Sir&apos;s
                    </h1>
                    <p className="text-xs md:text-sm font-semibold text-gray-700 -mt-0.5">
                      Super Science Academy
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Modern Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {menuItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative px-5 py-2.5 rounded-xl group cursor-pointer"
                  >
                    <span className="text-gray-700 font-semibold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {item.name}
                    </span>

                    {/* Modern gradient underline */}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 group-hover:w-4/5 transition-all duration-300 rounded-full"></span>
                  </motion.div>
                </Link>
              ))}
            </nav>

            {/* Modern Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-50 w-11 h-11 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTimes className="text-xl" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaBars className="text-xl" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Modern Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-2xl z-40 lg:hidden overflow-y-auto"
            >
              {/* Modern Header */}
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-6 text-white">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                    <FaGraduationCap className="text-2xl" />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">Menu</h2>
                    <p className="text-xs text-white/80">Navigate</p>
                  </div>
                </motion.div>
              </div>

              {/* Navigation Links */}
              <nav className="p-6 space-y-3 mt-2">
                {menuItems.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative group"
                    >
                      <div className="flex items-center justify-between p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-transparent overflow-hidden cursor-pointer">
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <span className="relative z-10 text-lg font-bold text-gray-800 group-hover:text-white transition-colors">
                          {item.name}
                        </span>

                        <div className="relative z-10 w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 group-hover:bg-white rounded-xl flex items-center justify-center transition-all">
                          <span className="text-blue-600 group-hover:text-purple-600 text-lg font-bold">→</span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </nav>

              {/* Social Icons Section */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="p-6 border-t border-gray-200"
              >
                <h3 className="text-sm font-bold text-gray-700 mb-4">Connect With Us</h3>
                <div className="grid grid-cols-4 gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="aspect-square bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-md hover:shadow-xl transition-all"
                      aria-label={social.label}
                    >
                      <social.icon className="text-lg" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="p-6 border-t border-gray-200"
              >
                <p className="text-xs text-gray-500 text-center">
                  © 2025 Super Science Academy
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;


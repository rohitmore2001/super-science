'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaGraduationCap, FaAward } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden p-1">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/images/super-video.mp4" type="video/mp4" />
      </video>

      {/* Enhanced Overlay with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/20 to-pink-900/30" />

      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 100, 0],
            x: [0, -50, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [0, -80, 0],
            x: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute bottom-40 left-1/4 w-2 h-2 bg-purple-400 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 80, 0],
            x: [0, 40, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/3 right-1/3 w-2 h-2 bg-orange-400 rounded-full blur-sm"
        />
      </div>

      {/* Enhanced Content */}
      <div className="relative z-10 container-custom text-center text-white px-4">
        {/* Animated Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 200 }}
          className="inline-block mb-8"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity"></div>
            <div className="relative px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-2xl border-2 border-white/30 backdrop-blur-sm">
              <span className="text-gray-900 font-bold text-base md:text-lg tracking-wider uppercase flex items-center gap-2">
                <FaGraduationCap className="text-xl" />
                Hello Students
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main Heading with Enhanced Animation */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-8 leading-tight"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="block mb-2"
          >
            Welcome to S. B. Patil Sir&apos;s
          </motion.span>
          <motion.span
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
            className="block bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-2xl"
          >
            Super Science Academy
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="block text-3xl md:text-4xl lg:text-5xl mt-2 text-white/90"
          >
            Gadhinglaj
          </motion.span>
        </motion.h1>

        {/* Description with modern card design */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="max-w-4xl mx-auto mb-10"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Super Science Academy, Gadhinglaj, is dedicated to providing <span className="font-bold text-yellow-300">top-quality education</span> to students from <span className="font-bold text-orange-300">8th to 12th grade</span>. We specialize in preparing students for competitive exams like <span className="font-bold text-blue-300">JEE</span>, <span className="font-bold text-green-300">NEET</span>, <span className="font-bold text-purple-300">MHT-CET</span>, and other national and state-level exams.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4, type: 'spring', stiffness: 150 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* Primary CTA */}
          <a href="#contact">
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-bold text-lg rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Animated shine */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

              <span className="relative flex items-center gap-3">
                <FaRocket className="text-xl group-hover:rotate-12 transition-transform" />
                <span>Join Us Now!</span>
              </span>
            </motion.button>
          </a>

          {/* Secondary CTA */}
          <a href="#courses">
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold text-lg rounded-2xl shadow-xl hover:bg-white/20 transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                <FaAward className="text-xl group-hover:rotate-12 transition-transform" />
                <span>Explore Courses</span>
              </span>
            </motion.button>
          </a>
        </motion.div>

        {/* Stats Pills */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {[
            { label: 'Expert Faculty', icon: '👨‍🏫' },
            { label: '10,000+ Students', icon: '🎓' },
            { label: 'Award Winning', icon: '🏆' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.8 + index * 0.1, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg"
            >
              <span className="text-white font-semibold flex items-center gap-2">
                <span className="text-xl">{stat.icon}</span>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;

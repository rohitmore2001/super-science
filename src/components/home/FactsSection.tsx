'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { FaGraduationCap, FaChalkboardTeacher, FaUsers, FaTrophy, FaPlay, FaAward, FaStar, FaTimes } from 'react-icons/fa';

const FactsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVideoOpen]);

  // Close modal on ESC key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsVideoOpen(false);
      }
    };

    if (isVideoOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isVideoOpen]);

  const facts = [
    {
      number: 100,
      prefix: '',
      suffix: '%',
      title: 'Succeeded Students',
      icon: FaGraduationCap,
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-500/10 to-teal-500/10',
    },
    {
      number: 22,
      prefix: '',
      suffix: '',
      title: 'Current Teachers',
      icon: FaChalkboardTeacher,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      number: 10000,
      prefix: '',
      suffix: '+',
      title: 'Students Till Now',
      icon: FaUsers,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-600 via-purple-700 to-pink-600 text-white relative overflow-hidden">
      {/* Enhanced Animated background elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.4, 1],
          x: [0, -50, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Header Section */}
            <div>
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={inView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                className="inline-block mb-6"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-white rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative px-6 py-2.5 bg-white/20 backdrop-blur-md rounded-full border-2 border-white/30 shadow-xl">
                    <span className="text-white font-bold text-sm tracking-wider uppercase flex items-center gap-2">
                      <FaStar className="text-yellow-300" />
                      Our Achievements
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
              >
                A Few Facts About Our Academy
              </motion.h2>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="w-32 h-1.5 bg-white rounded-full"
              ></motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
              {facts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, rotate: -10 }}
                  animate={inView ? { scale: 1, rotate: 0 } : {}}
                  transition={{
                    delay: 0.4 + index * 0.15,
                    type: 'spring',
                    stiffness: 150,
                    damping: 15
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  {/* Card glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${fact.gradient} rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`}></div>

                  {/* Card content */}
                  <div className="relative bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden min-h-[240px] sm:min-h-[260px] md:min-h-[280px] flex items-center justify-center">
                    {/* Background gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${fact.bgGradient} opacity-50`}></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="mb-4 md:mb-6"
                      >
                        <div className={`inline-flex w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${fact.gradient} rounded-2xl items-center justify-center shadow-xl border-2 border-white/30`}>
                          <fact.icon className="text-white text-xl md:text-2xl" />
                        </div>
                      </motion.div>

                      {/* Number */}
                      <div className="mb-2 md:mb-3 flex items-center justify-center flex-wrap">
                        {fact.prefix && <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold mr-1">{fact.prefix}</span>}
                        <CountUp end={fact.number} inView={inView} />
                        {fact.suffix && <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold ml-1">{fact.suffix}</span>}
                      </div>

                      {/* Title */}
                      <p className="text-base sm:text-lg font-semibold text-white/90 leading-snug">
                        {fact.title}
                      </p>
                    </div>

                    {/* Decorative corner element */}
                    <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${fact.gradient} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Awards Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

              {/* Card */}
              <div className="relative bg-white/15 backdrop-blur-lg border-2 border-white/30 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      className="flex-shrink-0"
                    >
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl border-2 border-white/30">
                        <FaTrophy className="text-white text-xl md:text-2xl" />
                      </div>
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 flex items-center gap-2 flex-wrap">
                        Awards & Recognition
                        <FaAward className="text-yellow-300 text-lg md:text-xl" />
                      </h3>
                      <p className="text-base sm:text-lg md:text-xl font-semibold text-white/90 leading-relaxed">
                        Idol Of Maharashtra & Brands of Kolhapur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center mt-10 lg:mt-0"
          >
            <div className="relative w-full max-w-xl px-4 sm:px-0">
              {/* Animated border glow */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-[2.5rem] blur-2xl opacity-50"
              ></motion.div>

              {/* Video player */}
              <motion.button
                onClick={() => setIsVideoOpen(true)}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="relative group block w-full cursor-pointer"
              >
                <div className="relative aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="relative"
                    >
                      {/* Pulsing rings */}
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                        className="absolute inset-0 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white/30 rounded-full"
                      ></motion.div>
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
                        className="absolute inset-0 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white/30 rounded-full"
                      ></motion.div>

                      {/* Main play button */}
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 90 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-2xl border-2 sm:border-4 border-white/20 backdrop-blur-sm"
                      >
                        <motion.div
                          animate={{ x: [0, 2, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          <FaPlay className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600 ml-1 sm:ml-2" />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* "Watch Video" text on hover */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/20">
                      <p className="text-white text-center font-bold text-sm sm:text-base md:text-lg flex items-center justify-center gap-2">
                        <FaPlay className="text-xs sm:text-sm" />
                        <span className="hidden sm:inline">Watch Our Success Story</span>
                        <span className="sm:hidden">Watch Video</span>
                      </p>
                    </div>
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-12 h-12 sm:w-20 sm:h-20 border-t-2 border-l-2 sm:border-t-4 sm:border-l-4 border-white/30 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-12 h-12 sm:w-20 sm:h-20 border-b-2 border-r-2 sm:border-b-4 sm:border-r-4 border-white/30 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={inView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 z-20"
                >
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-2xl border-2 border-white/30 backdrop-blur-sm">
                    <p className="font-bold text-xs sm:text-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></span>
                      Watch Now
                    </p>
                  </div>
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl aspect-video"
            >
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 md:-right-12 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl hover:bg-red-500 hover:text-white transition-colors z-10"
              >
                <FaTimes className="text-xl" />
              </motion.button>

              {/* Video iframe */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <iframe
                  src="https://www.youtube.com/embed/XbccuVKwI70?autoplay=1&rel=0"
                  title="Super Science Academy Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// CountUp Component
const CountUp = ({ end, inView }: { end: number; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end, inView]);

  return <span className="text-3xl sm:text-4xl md:text-5xl font-bold block">{count.toLocaleString()}</span>;
};

export default FactsSection;


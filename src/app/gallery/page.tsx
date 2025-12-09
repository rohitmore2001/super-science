'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useState } from 'react';
import { FaCamera, FaTimes, FaChevronLeft, FaChevronRight, FaImages, FaStar } from 'react-icons/fa';

export default function GalleryPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const galleryItems = [
    { image: '/assets/images/imgs/img16.png', title: 'Better career opportunities', category: 'Innovation' },
    { image: '/assets/images/imgs/img2.jpg', title: 'Our Coaching Center', category: 'Infrastructure' },
    { image: '/assets/images/imgs/img3.jpg', title: 'What we Achieve', category: 'Achievements' },
    { image: '/assets/images/imgs/img4.jpg', title: 'This is Our pride', category: 'Success' },
    { image: '/assets/images/imgs/img6.jpg', title: 'Our Powerful Piller', category: 'Faculty' },
    { image: '/assets/images/imgs/img8.jpg', title: 'Study Techniques', category: 'Learning' },
    { image: '/assets/images/imgs/img10.jpg', title: 'Counselling Techniques', category: 'Guidance' },
    { image: '/assets/images/imgs/img11.jpg', title: 'Online Teaching Techniques', category: 'Technology' },
    { image: '/assets/images/imgs/img12.jpg', title: 'Instant Lecture Design', category: 'Teaching' },
    { image: '/assets/images/imgs/img13.jpg', title: 'New Teaching Techniques', category: 'Innovation' },
  ];

  const handlePrevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  const handleNextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryItems.length);
    }
  };

  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px] flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"
        />

        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container-custom text-center text-white px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              className="inline-block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-full blur-lg opacity-30"></div>
                <div className="relative px-6 py-2.5 bg-white/20 backdrop-blur-md rounded-full border-2 border-white/30 shadow-xl">
                  <span className="text-white font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                    <FaImages />
                    Our Gallery
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4"
            >
              This is how we are...!
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl font-medium text-white/90 max-w-3xl mx-auto"
            >
              A glimpse into our world of excellence and achievement
            </motion.p>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"
            ></motion.div>
          </motion.div>
        </div>

        {/* Decorative particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
          />
        ))}
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tl from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          {/* Section Header */}
          <motion.div
            ref={ref}
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-40"></div>
                <div className="relative px-6 py-2.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full">
                  <span className="text-white font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                    <FaCamera />
                    Photo Gallery
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Moments of Excellence
              </span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Capturing the journey of success, learning, and growth
            </motion.p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { y: 50, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedImage(index)}
                className="group cursor-pointer relative"
              >
                {/* Gradient glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>

                {/* Card */}
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  {/* Image container */}
                  <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="eager"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                    {/* Category badge */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="absolute top-4 left-4 z-10"
                    >
                      <div className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                        <span className="text-white text-xs font-semibold">{item.category}</span>
                      </div>
                    </motion.div>

                    {/* Expand icon */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <FaStar className="text-white text-sm" />
                    </motion.div>

                    {/* Title and description */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <motion.h3
                        className="text-white text-xl sm:text-2xl font-bold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        {item.title}
                      </motion.h3>
                      <motion.div
                        className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                      >
                        <div className="h-0.5 w-12 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                        <span className="text-white/80 text-sm">Click to view</span>
                      </motion.div>
                    </div>

                    {/* Corner decoration */}
                    <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-white/20 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 md:mt-20 text-center"
          >
            <div className="relative group">
              {/* Gradient border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur transition-all duration-500"></div>

              {/* Card */}
              <div className="relative max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-10 md:p-12 shadow-xl border border-gray-100">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-400/10 to-orange-400/10 rounded-full blur-2xl"></div>

                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.9 }}
                    className="mb-6"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-lg">
                      <FaCamera className="text-white text-2xl" />
                    </div>
                  </motion.div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Experience Excellence in Education
                    </span>
                  </h2>

                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                    Our state-of-the-art facilities, experienced faculty, and proven teaching methods
                    create the perfect environment for academic success. Join thousands of students
                    who have achieved their dreams with Super Science Academy.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <motion.a
                      href="/#contact"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group inline-flex items-center gap-2"
                    >
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                      <span className="relative z-10">Get Started Today</span>
                      <FaChevronRight className="relative z-10 text-sm" />
                    </motion.a>

                    <motion.a
                      href="/"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-800 font-bold rounded-xl shadow-md hover:shadow-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 inline-flex items-center gap-2"
                    >
                      <span>Back to Home</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          >
            {/* Close button */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl hover:bg-red-500 hover:text-white transition-colors z-10"
            >
              <FaTimes className="text-xl" />
            </motion.button>

            {/* Previous button */}
            <motion.button
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
              className="absolute left-4 md:left-8 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <FaChevronLeft className="text-white text-xl" />
            </motion.button>

            {/* Next button */}
            <motion.button
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
              className="absolute right-4 md:right-8 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <FaChevronRight className="text-white text-xl" />
            </motion.button>

            {/* Image container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl aspect-video md:aspect-auto md:h-[80vh]"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <Image
                  src={galleryItems[selectedImage].image}
                  alt={galleryItems[selectedImage].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Image info */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute -bottom-16 left-0 right-0"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <h3 className="text-white text-xl font-bold">{galleryItems[selectedImage].title}</h3>
                      <p className="text-white/70 text-sm">{galleryItems[selectedImage].category}</p>
                    </div>
                    <div className="text-white/70 text-sm">
                      {selectedImage + 1} / {galleryItems.length}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

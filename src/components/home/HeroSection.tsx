'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaGraduationCap, FaAward, FaWhatsapp } from 'react-icons/fa';

const HeroSection = () => {
  const courses = [
    'IIT Medical foundation course for 8th, 9th, and 10th grade students',
    'Science Stream Coaching for 11th and 12th Grade',
    'JEE Mains and Advanced Preparation',
    'NEET Coaching',
    'MHT-CET Preparation',
    'MHT-CET Crash Course',
    "Others"
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    course: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message
    const message = `*New Admission Enquiry*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Course Interested In:* ${formData.course || 'Not specified'}%0A` +
      `*School/College:* ${formData.school || 'Not provided'}`;

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/919272335192?text=${message}`, '_blank');
    
    // Clear the form
    setFormData({
      name: '',
      email: '',
      phone: '',
      school: '',
      course: ''
    });
  };
  return (
    <section className="relative overflow-hidden">
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

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 text-white text-center lg:text-left">
            {/* Animated Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-block mb-8"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative px-5 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-xl border-2 border-white/30 backdrop-blur-sm">
                  <span className="text-gray-900 font-bold text-sm md:text-base tracking-wider uppercase flex items-center gap-1.5">
                    <FaGraduationCap className="text-base md:text-lg" />
                    Hello Students
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="block mb-1 text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
              >
                Welcome to S. B. Patil Sir&apos;s
              </motion.span>
              <motion.span
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
                className="block bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-2xl text-2xl md:text-4xl lg:text-5xl xl:text-6xl"
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

            {/* Description Card */}
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
                    Super Science Academy, Gadhinglaj, is dedicated to providing <span className="font-bold text-yellow-300">top-quality education</span> to students from <span className="font-bold text-orange-300">8th to 12th grade</span>. We specialize in preparing students for competitive exams like <span className="font-bold text-blue-300">IIT-JEE</span>, <span className="font-bold text-green-300">NEET</span>, <span className="font-bold text-purple-300">MHT-CET,</span> <span className="font-bold text-blue-300">State Board</span>, and other national and state-level exams.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4, type: 'spring', stiffness: 150 }}
              className="w-full flex justify-center sm:w-auto"
            >
              <a href="#courses" className="block w-[200px]">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full group relative px-4 py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-bold text-base rounded-xl shadow-xl overflow-hidden"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    <FaRocket className="text-xl group-hover:rotate-12 transition-transform" />
                    <span>Explore Courses</span>
                  </span>
                </motion.button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="mt-12 flex flex-wrap justify-center lg:justify-start gap-4"
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
                  className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-md text-sm"
                >
                  <span className="text-white font-semibold flex items-center gap-2">
                    <span className="text-xl">{stat.icon}</span>
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Application Form */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl"
            >
              <h2 className="text-2xl font-bold text-center mb-6 text-white">Admission Enquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  {/* Name Field */}
                  <div className="space-y-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-sm text-white bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                        placeholder="Your name"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-sm text-white bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-1">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-sm text-white bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                        placeholder="+91 1234567890"
                        required
                      />
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div className="space-y-1">
                    <label htmlFor="course" className="block text-sm font-medium text-gray-300">
                      Interested Course <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 pr-10 text-sm text-white bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer hover:border-yellow-400/50 focus:outline-none"
                        required
                      >
                        <option value="" className="bg-gray-800 text-gray-300">Select a course</option>
                        {courses.map((course, index) => (
                          <option key={index} value={course} className="bg-gray-900 text-white">
                            {course}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <div className="w-5 h-5 flex items-center justify-center rounded-full bg-yellow-500/20 group-hover:bg-yellow-500/30 transition-colors duration-200">
                          <svg className="w-3 h-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-yellow-500/5 to-amber-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* School/College Field */}
                  <div className="space-y-1">
                    <label htmlFor="school" className="block text-sm font-medium text-gray-300">
                      Current School/College
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="school"
                        name="school"
                        value={formData.school}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-sm text-white bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                        placeholder="Your current school/college name"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center text-base"
                    >
                      <FaRocket className="mr-2" />
                      Enquire Now
                    </button>
                  </div>
                </div>
                <p className="mt-3 text-xs text-center text-gray-400">
                  We&apos;ll get back to you within 24 hours
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

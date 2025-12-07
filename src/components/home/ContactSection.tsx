'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaMap, FaStar } from 'react-icons/fa';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    school: '',
    address: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format message for WhatsApp
    const whatsappMessage = `
*New Enquiry from Website*

*Name:* ${formData.name}
*Mobile:* ${formData.mobile}
*School/College:* ${formData.school}
*Address:* ${formData.address}

*Message:*
${formData.message}
    `.trim();

    // WhatsApp number (without + and spaces)
    const whatsappNumber = '919371061009';

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({
      name: '',
      mobile: '',
      school: '',
      address: '',
      message: '',
    });

    // Show success message
    alert('Redirecting to WhatsApp...');
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone Number',
      details: ['02327-222077', '9371061009', '9226935427', '9272335192'],
      color: 'blue',
    },
    {
      icon: FaEnvelope,
      title: 'Email Address',
      details: ['sbpsuperscience@gmail.com'],
      color: 'purple',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Street Address',
      details: ['Delta Building, Behind Kalyanshetti Hospital, Church Road, Gadhinglaj.'],
      color: 'green',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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
                  <FaEnvelope className="text-sm" />
                  Contact Us
                </span>
              </div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Let&apos;s Get In Touch
            </span>
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            We&apos;re here to answer your questions and help you start your journey towards excellence
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full mt-6"
          ></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="relative group">
              {/* Gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-10 group-hover:opacity-20 blur transition-all duration-500"></div>

              <div className="relative bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block text-sm font-bold text-gray-800 mb-2.5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></span>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all bg-gradient-to-br from-gray-50 to-white hover:border-gray-300 hover:shadow-sm"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.45 }}
                    >
                      <label className="block text-sm font-bold text-gray-800 mb-2.5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"></span>
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        required
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 focus:outline-none transition-all bg-gradient-to-br from-gray-50 to-white hover:border-gray-300 hover:shadow-sm"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-sm font-bold text-gray-800 mb-2.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600"></span>
                      School / College *
                    </label>
                    <input
                      type="text"
                      name="school"
                      value={formData.school}
                      onChange={handleChange}
                      placeholder="Enter your school or college name"
                      required
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 focus:outline-none transition-all bg-gradient-to-br from-gray-50 to-white hover:border-gray-300 hover:shadow-sm"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.55 }}
                  >
                    <label className="block text-sm font-bold text-gray-800 mb-2.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-600 to-emerald-600"></span>
                      Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="City, State"
                      required
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 focus:outline-none transition-all bg-gradient-to-br from-gray-50 to-white hover:border-gray-300 hover:shadow-sm"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block text-sm font-bold text-gray-800 mb-2.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-600 to-pink-600"></span>
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      required
                      rows={5}
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 focus:outline-none transition-all resize-none bg-gradient-to-br from-gray-50 to-white hover:border-gray-300 hover:shadow-sm"
                    />
                  </motion.div>

                  <motion.div
                    className="grid sm:grid-cols-2 gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.65 }}
                  >
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative w-full py-4 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group"
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

                      <motion.div
                        animate={{ rotate: [0, 15, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FaPaperPlane className="relative z-10" />
                      </motion.div>
                      <span className="relative z-10">Send Message</span>
                    </motion.button>

                    <motion.a
                      href="https://maps.google.com/?q=Delta+Building+Kalyanshetti+Hospital+Church+Road+Gadhinglaj"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative w-full py-4 px-6 bg-white text-gray-800 font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group border-2 border-gray-200 hover:border-blue-500"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                      <FaMap className="relative z-10 text-blue-600" />
                      <span className="relative z-10 group-hover:text-blue-600 transition-colors">View Map</span>
                    </motion.a>
                  </motion.div>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const gradientMap = {
                blue: 'from-blue-600 to-cyan-600',
                purple: 'from-purple-600 to-pink-600',
                green: 'from-emerald-600 to-teal-600'
              };

              const bgGradientMap = {
                blue: 'from-blue-50 to-cyan-50',
                purple: 'from-purple-50 to-pink-50',
                green: 'from-emerald-50 to-teal-50'
              };

              return (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${gradientMap[info.color as keyof typeof gradientMap]} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>

                  {/* Card */}
                  <div className={`relative bg-gradient-to-br ${bgGradientMap[info.color as keyof typeof bgGradientMap]} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 backdrop-blur-sm`}>
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className={`w-14 h-14 bg-gradient-to-br ${gradientMap[info.color as keyof typeof gradientMap]} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <info.icon className="text-white text-xl" />
                        </div>
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                          {info.title}
                          <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></span>
                        </h3>
                        <div className="space-y-2">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-700 text-sm font-medium leading-relaxed">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


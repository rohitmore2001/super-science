'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChalkboardTeacher, FaTrophy, FaBook, FaClipboardCheck, FaUsers, FaBuilding, FaQuestionCircle, FaChartLine, FaMobileAlt, FaStar, FaCheckCircle } from 'react-icons/fa';

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: FaChalkboardTeacher,
      title: 'Experienced Faculty',
      description: 'Learn from highly qualified and experienced teachers.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      icon: FaTrophy,
      title: 'Proven Track Record',
      description: 'Consistently producing excellent results and toppers.',
      gradient: 'from-amber-500 to-orange-500',
      bgGradient: 'from-amber-50 to-orange-50',
    },
    {
      icon: FaBook,
      title: 'Comprehensive Study Materials',
      description: 'Thorough and updated study materials for JEE, NEET, MHT-CET and other exams.',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
    },
    {
      icon: FaClipboardCheck,
      title: 'Regular Assessments',
      description: 'Track progress and identify areas for improvement.',
      gradient: 'from-green-500 to-teal-500',
      bgGradient: 'from-green-50 to-teal-50',
    },
    {
      icon: FaUsers,
      title: 'Personalized Attention',
      description: 'Small batch sizes for individual attention and support.',
      gradient: 'from-indigo-500 to-blue-500',
      bgGradient: 'from-indigo-50 to-blue-50',
    },
    {
      icon: FaBuilding,
      title: 'State-of-the-Art Infrastructure',
      description: 'Modern facilities and equipment for effective learning.',
      gradient: 'from-red-500 to-pink-500',
      bgGradient: 'from-red-50 to-pink-50',
    },
    {
      icon: FaQuestionCircle,
      title: 'Doubt-Clearing Sessions',
      description: 'Get clarity on complex topics with expert guidance.',
      gradient: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-50 to-blue-50',
    },
    {
      icon: FaChartLine,
      title: 'Result-Oriented Approach',
      description: 'We Focus on achieving excellent grades and ranks.',
      gradient: 'from-emerald-500 to-green-500',
      bgGradient: 'from-emerald-50 to-green-50',
    },
    {
      icon: FaMobileAlt,
      title: 'No Mobile',
      description: 'Mobile Phones Strictly Prohibited.',
      gradient: 'from-gray-600 to-gray-800',
      bgGradient: 'from-gray-100 to-gray-200',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-400/10 to-purple-400/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-pink-400/10 to-orange-400/10 rounded-full blur-3xl opacity-50"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg">
                <span className="text-white font-bold text-sm tracking-wider uppercase flex items-center gap-2">
                  <FaStar className="text-yellow-300" />
                  Why Choose Us
                </span>
              </div>
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Features
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Experience excellence in education with our comprehensive facilities and expert guidance
          </motion.p>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-8"
          ></motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Card glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              {/* Card content */}
              <div className={`relative bg-gradient-to-br ${service.bgGradient} rounded-3xl p-8 shadow-xl border-2 border-gray-100 group-hover:border-transparent transition-all duration-500 h-full flex flex-col`}>
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6"
                >
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-xl border-2 border-white/50 transform group-hover:scale-110 transition-all duration-500`}>
                    <service.icon className="text-white text-3xl" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="text-center flex-1 flex flex-col">
                  <h4 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* Check mark indicator */}
                  <div className="flex justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 200 }}
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${service.gradient} text-white text-sm font-semibold rounded-full shadow-md`}
                    >
                      <FaCheckCircle />
                      <span>Available</span>
                    </motion.div>
                  </div>
                </div>

                {/* Decorative corner element */}
                <div className={`absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;


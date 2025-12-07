'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { FaGraduationCap, FaFlask, FaRocket, FaUserMd, FaTrophy, FaBolt, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const CoursesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const courses = [
    {
      id: 1,
      title: 'IIT Medical foundation course for 8th, 9th, and 10th grade students',
      image: '/assets/images/meeting-01.jpg',
      slug: 'foundation-course',
      icon: FaGraduationCap,
      gradient: 'from-blue-600 to-cyan-600',
      badge: 'Foundation',
      description: 'Build a strong academic foundation for competitive exams',
    },
    {
      id: 2,
      title: 'Science Stream Coaching for 11th and 12th Grade',
      image: '/assets/images/meeting-02.jpg',
      slug: 'science-stream',
      icon: FaFlask,
      gradient: 'from-purple-600 to-pink-600',
      badge: 'Board Exam',
      description: 'Comprehensive preparation for Maharashtra Board',
    },
    {
      id: 3,
      title: 'JEE Mains and Advanced Preparation',
      image: '/assets/images/meeting-03.jpg',
      slug: 'jee-preparation',
      icon: FaRocket,
      gradient: 'from-green-600 to-teal-600',
      badge: 'IIT-JEE',
      description: 'Expert coaching for JEE Mains & Advanced',
    },
    {
      id: 4,
      title: 'NEET Coaching',
      image: '/assets/images/course-01.jpg',
      slug: 'neet-coaching',
      icon: FaUserMd,
      gradient: 'from-red-600 to-orange-600',
      badge: 'Medical',
      description: 'Complete NEET preparation with medical experts',
    },
    {
      id: 5,
      title: 'MHT-CET Preparation',
      image: '/assets/images/course-02.jpg',
      slug: 'mht-cet',
      icon: FaTrophy,
      gradient: 'from-indigo-600 to-blue-600',
      badge: 'MH-CET',
      description: 'Maharashtra CET exam preparation',
    },
    {
      id: 6,
      title: 'MHT-CET Crash Course',
      image: '/assets/images/single-meeting.jpg',
      slug: 'mht-cet-crash',
      icon: FaBolt,
      gradient: 'from-yellow-600 to-red-600',
      badge: 'Crash Course',
      description: 'Intensive last-minute preparation',
    },
  ];

  return (
    <section id="courses" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Enhanced Background Decoration */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-purple-400/20 to-pink-400/20 rounded-full blur-3xl opacity-40 translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-green-400/10 to-teal-400/10 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>

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
                  <FaCheckCircle className="text-white/90" />
                  Our Premium Programs
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
              Courses & Batches
            </span>
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Choose from our comprehensive range of courses designed to help you excel in your academic journey and achieve your career goals
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-8"
          ></motion.div>
        </motion.div>

        {/* Courses Grid */}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <div className="h-full flex flex-col relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Animated gradient border on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                <div className="absolute -inset-0.5 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                {/* Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                  className="absolute top-5 right-5 z-20"
                >
                  <div className={`px-5 py-2.5 bg-gradient-to-r ${course.gradient} text-white text-xs font-bold rounded-full shadow-xl border-2 border-white/20 backdrop-blur-sm`}>
                    {course.badge}
                  </div>
                </motion.div>

                {/* Image Section */}
                <div className="relative h-72 overflow-hidden rounded-t-3xl">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="eager"
                  />

                  {/* Enhanced gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-40 transition-all duration-700 mix-blend-multiply`}></div>

                  {/* Animated Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="absolute bottom-5 left-5 z-10"
                  >
                    <div className={`w-20 h-20 bg-gradient-to-br ${course.gradient} rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white/30 backdrop-blur-md transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <course.icon className="text-white text-3xl drop-shadow-2xl" />
                    </div>
                  </motion.div>

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className={`absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-ping`}></div>
                    <div className={`absolute top-20 right-16 w-1.5 h-1.5 bg-white rounded-full animate-ping`} style={{ animationDelay: '0.2s' }}></div>
                    <div className={`absolute bottom-20 right-10 w-1 h-1 bg-white rounded-full animate-ping`} style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col bg-white rounded-b-3xl relative">
                  {/* Title */}
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                    {course.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 line-clamp-2 flex-1 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Features with enhanced design */}
                  <div className="flex items-center gap-6 mb-8 text-sm">
                    <div className="flex items-center gap-2 group/feature">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md group-hover/feature:scale-110 transition-transform">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-gray-700">Expert Faculty</span>
                    </div>
                    <div className="flex items-center gap-2 group/feature">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md group-hover/feature:scale-110 transition-transform">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-semibold text-gray-700">2025 Batch</span>
                    </div>
                  </div>

                  {/* Enhanced CTA Button */}
                  <Link href={`/courses/${course.slug}`} className="block">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative w-full py-4 px-6 bg-gradient-to-r ${course.gradient} text-white font-bold rounded-xl overflow-hidden group/btn shadow-lg hover:shadow-2xl transition-all duration-300`}
                    >
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>

                      <span className="relative flex items-center justify-center gap-3">
                        <span className="text-base">Explore Course</span>
                        <FaArrowRight className="text-lg group-hover/btn:translate-x-2 transition-transform duration-300" />
                      </span>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20"
        >
          <div className="relative group">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

            {/* Main CTA card */}
            <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 overflow-hidden shadow-2xl border border-gray-700/50">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>

              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Left content */}
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    Not sure which course to choose?
                  </h3>
                  <p className="text-gray-300 text-lg max-w-2xl">
                    Let our expert counselors guide you to the perfect course for your goals
                  </p>
                </div>

                {/* Right CTA button */}
                <a href="#contact">
                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group/cta px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-2xl overflow-hidden"
                  >
                    {/* Animated shine */}
                    <div className="absolute inset-0 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

                    <span className="relative flex items-center gap-3 text-lg whitespace-nowrap">
                      <span>Get Expert Guidance</span>
                      <FaArrowRight className="group-hover/cta:translate-x-2 transition-transform duration-300" />
                    </span>
                  </motion.button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { FaLightbulb, FaFlask, FaBrain, FaHandsHelping, FaQuoteLeft, FaTrophy, FaStar } from 'react-icons/fa';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const strengths = [
    {
      title: 'Visionary Leadership',
      description: 'Inspiring and motivating students, teachers, and staff to strive for excellence.',
      icon: FaLightbulb,
      gradient: 'from-amber-500 to-orange-500',
      bgGradient: 'from-amber-50 to-orange-50',
    },
    {
      title: 'Expertise in Science',
      description: 'Profound knowledge and understanding of science subjects, enabling effective teaching and mentoring.',
      icon: FaFlask,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      title: 'Innovative Teaching Methods',
      description: 'Implementing modern and effective teaching techniques for better understanding.',
      icon: FaBrain,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
    },
    {
      title: 'Mentorship',
      description: 'Providing guidance, support, and encouragement to students, helping them overcome challenges and achieve their potential.',
      icon: FaHandsHelping,
      gradient: 'from-green-500 to-teal-500',
      bgGradient: 'from-green-50 to-teal-50',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Enhanced Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-400/20 to-purple-400/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-orange-400/20 to-pink-400/20 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg">
                    <span className="text-white font-bold text-sm tracking-wider uppercase flex items-center gap-2">
                      <FaStar className="text-yellow-300" />
                      Meet Our Founder
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl md:text-6xl font-extrabold mb-6"
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  S.B. Patil Sir
                </span>
              </motion.h3>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-2xl font-bold text-gray-700 mb-2"
              >
                A Visionary <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Educator</span>
              </motion.p>
            </div>

            {/* Description with Quote Design */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            >
              <FaQuoteLeft className="absolute top-6 left-6 text-4xl text-blue-200" />
              <div className="relative z-10 pl-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">S.B. Patil Sir</span> is a renowned
                  educator and founder of <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Super Science Academy.</span> With
                  a passion for teaching and a commitment to excellence, he has dedicated his life to
                  empowering students to achieve their academic goals. His expertise, experience, and
                  innovative approach to education have made Super Science Academy a leading institution in the field.
                </p>
              </div>
            </motion.div>

            {/* Key Strengths Section */}
            <div>
              <motion.h4
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3"
              >
                <FaTrophy className="text-amber-500" />
                Key Strengths
              </motion.h4>

              <div className="grid grid-cols-1 gap-4">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -50, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${strength.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-all duration-300`}></div>

                    <div className={`relative bg-gradient-to-br ${strength.bgGradient} p-6 rounded-xl border-2 border-transparent group-hover:border-gray-200 transition-all duration-300 shadow-md hover:shadow-xl`}>
                      <div className="flex gap-4 items-start">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${strength.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                        >
                          <strength.icon className="text-white text-2xl" />
                        </motion.div>

                        <div className="flex-1">
                          <h5 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                            {strength.title}
                          </h5>
                          <p className="text-gray-600 leading-relaxed">{strength.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Quote */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
              className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-[2px] rounded-2xl overflow-hidden"
            >
              <div className="bg-white rounded-2xl p-6">
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Under <span className="font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">S.B. Patil Sir&apos;s</span> guidance,
                  <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Super Science Academy</span> has become a
                  hub for academic excellence, fostering a love for learning and a pursuit of knowledge among its students.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative lg:sticky lg:top-8"
          >
            {/* Main Image Container */}
            <div className="relative group">
              {/* Animated border glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

              {/* Image container */}
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-pink-600/20 z-10 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>

                {/* Image */}
                <Image
                  src="/assets/images/apply-bg.jpg"
                  alt="S.B. Patil Sir - Founder"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />

                {/* Floating badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={inView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  className="absolute top-6 left-6 z-20"
                >
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-2xl border-2 border-white/30 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <FaTrophy className="text-xl" />
                      <span className="font-bold">Award Winning Educator</span>
                    </div>
                  </div>
                </motion.div>

                {/* Experience badge */}
                <motion.div
                  initial={{ scale: 0, rotate: 45 }}
                  animate={inView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 1, type: "spring", stiffness: 200 }}
                  className="absolute bottom-6 right-6 z-20"
                >
                  <div className="bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-2xl border border-gray-200">
                    <div className="text-center">
                      <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        20+
                      </div>
                      <div className="text-sm font-semibold text-gray-600">
                        Years Experience
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Animated particles */}
                <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-ping"></div>
                  <div className="absolute top-40 right-16 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                  <div className="absolute bottom-32 left-20 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
                  <div className="absolute top-60 right-24 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-2xl"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-2xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 -right-12 w-24 h-24 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-full blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

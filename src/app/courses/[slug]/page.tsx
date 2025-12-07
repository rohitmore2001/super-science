'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import { courses } from '@/data/courses';
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa';

export default function CoursePage() {
  const params = useParams();
  const slug = params.slug as string;
  const course = courses.find((c) => c.slug === slug);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Course Not Found</h1>
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 container-custom text-center text-white px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05, x: -5 }}
                className="flex items-center gap-2 text-white mb-6 mx-auto hover:text-yellow-300 transition-colors"
              >
                <FaArrowLeft /> Back to Home
              </motion.button>
            </Link>
            <h6 className="text-xl mb-2 text-yellow-300">Get all details</h6>
            <h1 className="text-4xl md:text-5xl font-bold">{course.title}</h1>
          </motion.div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* Course Image */}
            <motion.div
              ref={ref}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-3xl overflow-hidden shadow-2xl mb-12"
            >
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-6 right-6 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                2025
              </div>
            </motion.div>

            {/* Course Overview */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text">{course.subtitle}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{course.overview}</p>
            </motion.div>

            {/* Key Features */}
            {course.features && course.features.length > 0 && (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-3xl font-bold mb-8 gradient-text">Key Features:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {course.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -50, opacity: 0 }}
                      animate={inView ? { x: 0, opacity: 1 } : {}}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.03 }}
                      className="card p-6"
                    >
                      <div className="flex items-start gap-4">
                        <FaCheckCircle className="text-primary-500 text-2xl flex-shrink-0 mt-1" />
                        <div>
                          <h5 className="font-bold text-lg mb-2 text-gray-800">{feature.title}</h5>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Benefits */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-12"
            >
              <h3 className="text-3xl font-bold mb-8 gradient-text">Benefits:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {course.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 50, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.03 }}
                    className="card p-6 bg-gradient-to-br from-primary-50 to-secondary-50"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-lg mb-2 text-gray-800">{benefit.title}</h5>
                        {benefit.description && (
                          <p className="text-gray-600">{benefit.description}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Course Structure */}
            {course.structure && (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-3xl font-bold mb-8 gradient-text">Course Structure:</h3>
                
                <div className="space-y-8">
                  {course.structure.items && (
                    <div className="card p-6">
                      <h4 className="text-xl font-bold mb-4 text-gray-800">Teaching Methods:</h4>
                      <ul className="space-y-3">
                        {course.structure.items.map((item, index) => (
                          <li key={index} className="flex items-center gap-3 text-gray-700">
                            <FaCheckCircle className="text-primary-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {course.structure.subjects && (
                    <div className="card p-6">
                      <h4 className="text-xl font-bold mb-4 text-gray-800">Subjects Covered:</h4>
                      <ul className="space-y-3">
                        {course.structure.subjects.map((subject, index) => (
                          <li key={index} className="flex items-center gap-3 text-gray-700">
                            <FaCheckCircle className="text-secondary-500" />
                            {subject}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {course.structure.academyBenefits && (
                    <div className="card p-6">
                      <h4 className="text-xl font-bold mb-4 text-gray-800">Academy Benefits:</h4>
                      <ul className="space-y-3">
                        {course.structure.academyBenefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-3 text-gray-700">
                            <FaCheckCircle className="text-primary-500" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Why Choose Us */}
            {course.whyChooseUs && (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-3xl font-bold mb-8 gradient-text">Why Choose Us?</h3>
                <div className="space-y-6">
                  {course.whyChooseUs.map((reason, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="card p-6 bg-gradient-to-r from-primary-50 to-secondary-50"
                    >
                      <h5 className="font-bold text-xl mb-2 text-gray-800">{reason.title}</h5>
                      <p className="text-gray-600">{reason.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Call to Action */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-center bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-12 rounded-3xl shadow-2xl"
            >
              <h3 className="text-3xl font-bold mb-4">Join Us Today!</h3>
              <p className="text-xl mb-6">
                Enroll in our program and give yourself the best possible chance of success.
              </p>
              <p className="text-2xl font-bold mb-8">Achieve Excellence with Us!</p>
              <Link href="/#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Contact Us Now
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

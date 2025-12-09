'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8"
    >
      <div className="container-custom">
        <div className="text-center">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300"
          >
            Copyright © {currentYear} Super Science Academy,Gadhinglaj. All Rights Reserved.
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 mt-2"
          >
            Design:{' '}
            <span className="text-primary-400 font-semibold hover:text-primary-300 transition-colors cursor-pointer">
              <Link href="https://www.instagram.com/dissolveframes/" target="_blank" rel="noopener noreferrer">
              Dissolve Frames
              </Link>
            </span>
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;


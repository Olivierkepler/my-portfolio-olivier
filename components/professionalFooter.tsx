'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaDribbble } from 'react-icons/fa';      
import ContactCircle from './ContactCircle';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Footer() {
  return (
    <motion.footer
      className="bg-black text-white px-16 py-16 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Big Title */}
      <motion.div variants={itemVariants} className="text-[8vw] font-extrabold leading-tight uppercase">
        <h1>Have Any Project!</h1>
      </motion.div>

      {/* Contact Circle */}

      <div className="absolute top-12 right-12">
      <ContactCircle />
      </div>

      {/* <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className="absolute top-12 right-12 w-40 h-40 bg-gray-800 rounded-full flex items-center justify-center text-sm hover:bg-gray-700 transition cursor-pointer"
      >
        <Link href="/contact">Contact us ↗</Link>
      </motion.div> */}

      {/* Footer Content */}
      <motion.div variants={itemVariants} className="mt-20 flex flex-col md:flex-row justify-between">
        {/* Left Section */}
        <motion.div variants={itemVariants}>
          <h2 className="text-lg font-bold mb-4">Kebite</h2>
          <p className="max-w-xs text-gray-400">
            We specialize in crafting unique solutions that help brands make their mark. By combining creativity with strategy.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaDribbble].map((Icon, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link href="#"><Icon size={20} /></Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Section - Navigation Links */}
        <div className="grid grid-cols-2 gap-10 mt-10 md:mt-0">
          {[
            ['Projects', 'Services', 'About us', 'Pricing', 'Blog'],
            ['Style Guide', 'Licenses', 'Changelog', 'Contact', '404 Page'],
          ].map((group, groupIdx) => (
            <motion.div key={groupIdx} variants={itemVariants} className="space-y-2">
              {group.map((link, linkIdx) => (
                <motion.div
                  key={linkIdx}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link
                    href={`/${link.toLowerCase().replace(/ /g, '-')}`}
                    className="hover:underline"
                  >
                    {link}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.footer>
  );
}

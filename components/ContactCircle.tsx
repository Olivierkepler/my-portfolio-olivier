'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import './ContactCircle.css'; // Import the CSS file we’ll create next

export default function ContactCircle() {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      className="contact-circle relative rounded-full flex items-center justify-center text-sm cursor-pointer"
    >
      <Link href="/contact" className="z-10 text-white">Contact us ↗</Link>
      <div className="hover-effect"></div> {/* Light sweep overlay */}
    </motion.div>
  );
}

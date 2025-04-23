'use client';

import { motion } from 'framer-motion';
import TechCloud from './TechCloud';
import NewsletterSection from './Newsletter';

const rotateAnimation = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 90,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

export default function Section2() {
  return (
    <section className="relative isolate overflow-hidden pt-20 pb-20 px-8 sm:px-16 md:px-40 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      {/* ✨ Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-slate-800 via-slate-900 to-gray-900 opacity-70"></div>

        <motion.div
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.08, 1],
            rotate: [0, 8, 0],
            transition: {
              duration: 16,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          }
          className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-400 opacity-25 rounded-full filter blur-3xl mix-blend-multiply"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            scale: [1, 1.08, 1],
            rotate: [0, -8, 0],
            transition: {
              duration: 18,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          }
          className="absolute bottom-[-120px] right-[-120px] w-[250px] h-[250px] bg-slate-300 opacity-30 rounded-full filter blur-2xl mix-blend-multiply"
        />
        <motion.div
          {...rotateAnimation}
          className="absolute top-1/4 left-1/3 w-64 h-64 border border-dashed border-gray-400 dark:border-slate-500 rounded-xl opacity-20"
        />
        <motion.div
          {...rotateAnimation}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-dashed border-gray-400 dark:border-slate-500 rounded-xl opacity-20"
        />
      </div>

      {/* 🛠️ Section Content */}
      <div className="relative z-10 space-y-20">
        <TechCloud />
        <NewsletterSection />
      </div>
    </section>
  );
}

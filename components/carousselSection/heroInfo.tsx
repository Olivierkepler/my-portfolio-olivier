'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IconCheck } from '@tabler/icons-react';
import { motion } from 'framer-motion';

import Menu from '@/components/Menu'; // 👈 You n  eed to create this component
import SocialLinksVertical from '@/components/SocialLinks';

const benefits = [
  'Critical thinking applied to real-world challenges',
  'Experience with scientific research and experimentation',
  'Translating data into actionable insights',
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function HeroInfo() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={container}
      className="relative isolate container mx-auto flex flex-col items-center px-6 py-10 sm:flex-row-reverse sm:px-12"
    >
      {/* 🔳 Menu Modal */}
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* 📌 Floating Social Links */}
      <SocialLinksVertical />

      {/* 🌌 Background */}
      <motion.div
        className="absolute inset-0 -z-10 hidden dark:block starry-bg"
        initial={{ opacity: 0, rotate: -5 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />

      {/* 🖼️ Left Image Section */}
      <div className="mb-8 w-full sm:mb-0 sm:w-1/2 sm:pl-4 md:pl-16">
        <div className="relative">
          <motion.img
            src="/olivier_logo.png"
            alt="Olivier logo"
            className="absolute inset-0 rounded-lg sm:rounded-br-[80px] sm:rounded-tl-[120px]"
            initial={{ x: -50, y: -50, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 0.3 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          <motion.img
            src="/images/meAvatar.webp"
            alt="Avatar"
            className="relative z-10 rounded-lg sm:rounded-br-[80px] sm:rounded-tl-[120px]"
            initial={{ x: 50, y: 50, scale: 0.8, opacity: 0 }}
            animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          />
        </div>
      </div>

      {/* 💬 Right Content Section */}
      <motion.div
        variants={fadeUp}
        className="mr-4 w-full text-center sm:w-1/2 sm:text-left"
      >
        <motion.h1
          variants={fadeUp}
          className="mb-6 text-3xl font-bold leading-tight dark:text-white md:text-4xl"
        >
          Hi, I'm Olivier Kepler François
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mb-2 leading-relaxed text-slate-700 dark:text-slate-400"
        >
          Engineering and Computer Science student passionate about solving real-world problems through technology.
        </motion.p>

        <motion.ul
          variants={container}
          className="mb-8 flex flex-col items-center space-y-1 dark:text-slate-400 sm:items-start"
        >
          {benefits.map((benefit, index) => (
            <motion.li
              key={index}
              variants={fadeUp}
              className="flex items-start"
            >
              <IconCheck className="mr-2 mt-1 text-orange-300" />
              <span>{benefit}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          variants={fadeUp}
          className="flex flex-col space-y-3 md:flex-row md:space-x-3 md:space-y-0"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{
              scale: 0.95,
              y: [0, -16, 0],
              transition: {
                duration: 0.4,
                type: 'spring',
                stiffness: 400,
                damping: 10,
              },
            }}
            onClick={() => setIsMenuOpen(true)}
            className="rounded-lg bg-slate-900 px-6 py-3 text-base text-white shadow-lg hover:bg-orange-300 hover:text-black dark:bg-orange-300 dark:text-black"
          >
            Open menu
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{
              scale: 0.95,
              y: [0, -16, 0],
              transition: {
                duration: 0.4,
                type: 'spring',
                stiffness: 400,
                damping: 10,
              },
            }}
            onClick={() => router.push('/services')}
            className="rounded-lg bg-white px-6 py-3 text-base text-slate-900 shadow-lg hover:bg-orange-300 dark:bg-slate-700 dark:text-slate-300"
          >
            Explore services
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

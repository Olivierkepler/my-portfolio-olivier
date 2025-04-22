'use client';

import { IconCheck } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Menu from '@/components/Menu';
import SocialLinksVertical from '@/components/SocialLinks';
import { motion } from 'framer-motion';

const benefits = [
  'Advanced skills in C, C++, Java, Python, and Web Technologies',
  'Experience in research, project administration, and mentoring',
  'Passionate about solving real-world problems through technology',
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
      className="relative isolate container mx-auto flex flex-col items-center px-8 py-16 sm:flex-row-reverse sm:px-12"
    >
      {/* Menu Modal */}
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Social Links */}
      <SocialLinksVertical />

      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 -z-10 hidden dark:block starry-bg"
        initial={{ opacity: 0, rotate: -5 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />

      {/* Avatar + Logo Section */}
      <div className="mb-10 w-full sm:mb-0 sm:w-1/2 sm:pl-4 md:pl-16">
        <div className="relative flex justify-center items-center">
          {/* Logo */}
          <motion.img
            src="/images/olivier_logo.png"
            alt="Olivier Kepler François Logo"
            className="absolute inset-0 rounded-lg sm:rounded-br-[80px] sm:rounded-tl-[120px] opacity-30"
            initial={{ x: -50, y: -50, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 0.3 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          {/* Avatar */}
          <motion.img
            src="/images/meAvatar.webp"
            alt="Olivier Kepler François Avatar"
            className="relative z-10 rounded-full border-4 border-orange-300 shadow-lg w-64 h-64 object-cover"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          />
        </div>
      </div>

      {/* Content Section */}
      <motion.div
        variants={fadeUp}
        className="w-full text-center sm:w-1/2 sm:text-left"
      >
        <motion.h1
          variants={fadeUp}
          className="mb-6 text-4xl font-extrabold leading-tight dark:text-white md:text-5xl"
        >
          Hi, I'm Olivier Kepler François
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mb-4 text-lg leading-relaxed text-slate-700 dark:text-slate-400"
        >
          Computer Science & Engineering student driven by curiosity, innovation, and a passion for impactful problem-solving.
        </motion.p>

        {/* Skills Highlights */}
        <motion.ul
          variants={container}
          className="mb-8 flex flex-col items-center space-y-2 dark:text-slate-400 sm:items-start"
        >
          {benefits.map((benefit, index) => (
            <motion.li key={index} variants={fadeUp} className="flex items-start">
              <IconCheck className="mr-2 mt-1 text-orange-300" />
              <span>{benefit}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Call To Action Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col space-y-3 md:flex-row md:space-x-4 md:space-y-0"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{
              scale: 0.95,
              y: [0, -12, 0],
              transition: {
                duration: 0.4,
                type: 'spring',
                stiffness: 400,
                damping: 10,
              },
            }}
            onClick={() => setIsMenuOpen(true)}
            className="rounded-lg bg-slate-900 px-6 py-3 text-base text-white shadow-lg hover:bg-orange-300 hover:text-black dark:bg-orange-300 dark:text-black"
            aria-label="Open Menu"
          >
            Open Menu
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{
              scale: 0.95,
              y: [0, -12, 0],
              transition: {
                duration: 0.4,
                type: 'spring',
                stiffness: 400,
                damping: 10,
              },
            }}
            onClick={() => router.push('/projects')}
            className="rounded-lg bg-white px-6 py-3 text-base text-slate-900 shadow-lg hover:bg-orange-300 dark:bg-slate-700 dark:text-slate-300"
            aria-label="Explore Projects"
          >
            Explore Projects
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

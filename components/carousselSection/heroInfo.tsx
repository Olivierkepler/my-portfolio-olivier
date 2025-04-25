'use client';

import { IconCheck } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Menu from '@/components/Menu';
import SocialLinksVertical from '@/components/SocialLinks';
import { motion } from 'framer-motion';
import Tech3DCube from '@/components/Tech3DCube';

const benefits = [
  'Advanced skills in C, C++, Java, Python, and Web Technologies',
  'Experience in research, project administration, and mentoring',
  'Passionate about solving real-world problems through technology',
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
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
      className="relative isolate w-full flex flex-col-reverse items-center justify-between px-6 py-20 sm:flex-row-reverse sm:px-12 lg:px-20 bg-gradient-to-br from-cyan-900 to-teal-800"
    >
      {/* Menu Modal */}
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <SocialLinksVertical />

      {/* 🌊 Animated Blobs and Lines */}
      <div className="absolute inset-0 -z-10 overflow-hidden w-full h-full">
        <div className="absolute top-[-120px] left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-cyan-400 opacity-20 rounded-full blur-3xl mix-blend-screen animate-float animate-pulse-scale"></div>
        <div className="absolute bottom-[-140px] right-1/2 transform translate-x-1/2 w-[350px] h-[350px] bg-teal-300 opacity-30 rounded-full blur-2xl mix-blend-screen animate-float-reverse animate-pulse-scale"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-48 h-48 border border-dashed border-cyan-300 dark:border-teal-500 rounded-xl rotate-12 opacity-20 animate-rotate-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 border border-dashed border-cyan-300 dark:border-teal-500 rounded-xl -rotate-12 opacity-20 animate-rotate-slow"></div>
        </div>
      </div>

      {/* Avatar / Cube Section */}
      <div className="mb-10 w-full sm:mb-0 sm:w-1/2 flex justify-center items-center">
        <div className="max-w-[300px] sm:max-w-[400px] md:max-w-[500px]">
          <Tech3DCube />
        </div>
      </div>

      {/* Content Section */}
      <motion.div
        variants={fadeUp}
        className="w-full text-center sm:w-1/2 sm:text-left space-y-6"
      >
        <motion.h1
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white"
        >
          Hi, I'm Olivier Francois
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg md:text-xl leading-relaxed text-cyan-200"
        >
          Computer Science & Engineering student driven by curiosity, innovation, and a passion for impactful problem-solving.
        </motion.p>

        {/* Skills List */}
        <motion.ul
          variants={container}
          className="flex flex-col items-center space-y-2 text-cyan-200 sm:items-start"
        >
          {benefits.map((benefit, index) => (
            <motion.li key={index} variants={fadeUp} className="flex items-start">
              <IconCheck className="mr-2 mt-1 text-cyan-300" />
              <span>{benefit}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, y: [0, -12, 0], transition: { duration: 0.4, type: 'spring', stiffness: 400, damping: 10 } }}
            onClick={() => setIsMenuOpen(true)}
            className="rounded-lg bg-white px-6 py-3 text-base text-slate-900 shadow-lg hover:bg-cyan-300 hover:text-black dark:bg-cyan-300 dark:text-black"
            aria-label="Open Menu"
          >
            Open Menu
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, y: [0, -12, 0], transition: { duration: 0.4, type: 'spring', stiffness: 400, damping: 10 } }}
            onClick={() => router.push('/projects')}
            className="rounded-lg bg-slate-900 px-6 py-3 text-base text-white shadow-lg hover:bg-cyan-300 hover:text-black"
            aria-label="Explore Projects"
          >
            Explore Projects
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

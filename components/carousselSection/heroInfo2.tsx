'use client';

import { motion } from 'framer-motion';
import { Briefcase, Award } from 'lucide-react';
// import { Certificate } from 'lucide-react';   

const experiences = [
  {
    icon: <Briefcase className="w-7 h-7 text-white" />,
    title: 'Massachusetts General Hospital (MGH)',
    role: 'Work Control Associate | Jan 2022 – Current',
    description: 'Managed 200+ work requests daily, coordinated maintenance dispatch, and maintained inventory systems.',
  },
  {
    icon: <Award className="w-7 h-7 text-white" />,
    title: 'Hope Initiative – Math Gateway Specialist',
    role: 'Hope Ambassador | Dec 2022 – May 2024',
    description: 'Mentored and provided academic support to 60+ students, building leadership and communication skills.',
  },
  {
    icon: <Award className="w-7 h-7 text-white" />,
    title: 'REU Program – Northeastern University',
    role: 'Research Intern | May 2023 – Aug 2023',
    description: 'Researched urban air quality using Python and data analysis, collaborating within a dynamic research team.',
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function HeroInfo2() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={container}
      className="relative isolate overflow-hidden w-full px-40 py-20 pt-50 flex flex-col items-center text-center sm:text-left sm:items-start bg-gradient-to-br from-indigo-900 to-indigo-800"
    >
    {/* 🌌 Radial Gradient Overlay */}
<div className="absolute inset-0 -z-10 overflow-hidden w-full h-full">
  <div className="absolute top-[-150px] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500 opacity-20 rounded-full blur-3xl mix-blend-screen animate-float"></div>
  <div className="absolute bottom-[-150px] right-1/2 transform translate-x-1/2 w-[500px] h-[500px] bg-emerald-400 opacity-30 rounded-full blur-2xl mix-blend-screen animate-float-reverse"></div>

  {/* Geometric Lines */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/3 left-1/4 w-64 h-64 border border-dashed border-gray-300 dark:border-slate-600 rounded-xl rotate-12 opacity-20"></div>
    <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-dashed border-gray-300 dark:border-slate-600 rounded-xl -rotate-12 opacity-20"></div>
  </div>
</div>


      {/* 🏆 Heading */}
      <motion.h2
        variants={fadeUp}
        className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl"
      >
        Experience & Achievements
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="mb-12 max-w-2xl text-lg text-slate-300"
      >
        Highlighting my work experience, leadership roles, and research accomplishments — a journey of learning, growth, and contribution.
      </motion.p>

      {/* 🌟 Experience Cards */}
      <motion.div
        variants={container}
        className="grid gap-10 w-full md:grid-cols-3"
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="group flex flex-col items-center p-8 rounded-xl border border-slate-700 bg-slate-900 hover:bg-emerald-500 hover:text-black dark:hover:text-black shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
          >
            {/* Icon in Circle */}
            <div className="mb-5 flex items-center justify-center w-16 h-16 rounded-full bg-emerald-400 group-hover:bg-emerald-600 transition-colors duration-300 shadow-md">
              {experience.icon}
            </div>
            <h3 className="mb-2 text-xl font-bold">{experience.title}</h3>
            <p className="mb-1 text-sm font-semibold text-emerald-300 group-hover:text-black">{experience.role}</p>
            <p className="text-slate-300 group-hover:text-black">{experience.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

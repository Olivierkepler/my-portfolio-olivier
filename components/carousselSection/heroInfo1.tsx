'use client';

import { motion } from 'framer-motion';
import { Code, GraduationCap, BarChart3 } from 'lucide-react';

const skills = [
  {
    icon: <Code className="w-7 h-7 text-white" />,
    title: 'Full-Stack Development',
    description: 'Proficient in C, C++, Java, Python, React.js, MySQL, and AWS Amplify — building scalable, efficient, and dynamic web solutions.',
  },
  {
    icon: <GraduationCap className="w-7 h-7 text-white" />,
    title: 'Research & Problem Solving',
    description: 'Experience in scientific research, data analysis, and project administration — passionate about learning and applying new technologies.',
  },
  {
    icon: <BarChart3 className="w-7 h-7 text-white" />,
    title: 'Mentorship & Leadership',
    description: 'Strong leadership in academic mentoring and math support — fostering collaborative, inclusive learning environments.',
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

export default function HeroInfo1() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={container}
      className="relative isolate overflow-hidden pt-50 w-full px-40 py-20 flex flex-col items-center text-center sm:text-left sm:items-start bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900"
    >
      {/* 🌟 Fancy Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Radial Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-radial from-slate-800 via-slate-900 to-gray-900 opacity-70"></div>

        {/* Blobs with Pulse and Float */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-400 opacity-25 rounded-full filter blur-3xl mix-blend-multiply animate-float animate-pulse-scale"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[250px] h-[250px] bg-slate-300 opacity-30 rounded-full filter blur-2xl mix-blend-multiply animate-float-reverse animate-pulse-scale"></div>

        {/* Rotating Dashed Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 border border-dashed border-gray-400 dark:border-slate-500 rounded-xl opacity-20 animate-rotate-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-dashed border-gray-400 dark:border-slate-500 rounded-xl opacity-20 animate-rotate-slow"></div>
        </div>
      </div>

      {/* 🧑‍💻 Section Content */}
      <motion.h2
        variants={fadeUp}
        className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl"
      >
        My Focus: Crafting Solutions, Empowering Growth
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="mb-12 max-w-2xl text-lg text-slate-300"
      >
        With a solid foundation in computer science and engineering, my mission is to build impactful technology, solve real-world challenges, and support others through mentorship and leadership.
      </motion.p>

      {/* 🌟 Skills Grid */}
      <motion.div
        variants={container}
        className="grid gap-10 md:grid-cols-3"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="group flex flex-col items-center p-8 rounded-xl border border-gray-400 dark:border-slate-500 bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
          >
            {/* Icon in Circle */}
            <div className="mb-5 flex items-center justify-center w-16 h-16 rounded-full bg-blue-400 group-hover:bg-blue-500 transition-colors duration-300 shadow-md">
              {skill.icon}
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-800 dark:text-white">{skill.title}</h3>
            <p className="text-slate-600 dark:text-slate-400">{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

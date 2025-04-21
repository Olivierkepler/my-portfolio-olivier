'use client'

import { IconCheck } from "@tabler/icons-react"
import SocialLinksVertical from "@/components/SocialLinks"
import { motion } from "framer-motion"

const benefits: string[] = [
  'Critical thinking applied to real-world challenges',
  'Experience with scientific research and experimentation',
  'Translating data into actionable insights',
]

export default function HeroInfo() {
  return (
    <section className="relative isolate container mx-auto flex flex-col items-center px-8 py-10 sm:flex-row-reverse sm:px-12">
      
      {/* 📌 Floating Social Links */}
      <SocialLinksVertical />

      {/* 🌌 Background enters from bottom */}
      <motion.div
        className="absolute inset-0 -z-10 hidden dark:block starry-bg"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Left - Logo & Avatar */}
      <div className="mb-8 w-full sm:mb-0 sm:w-1/2 sm:pl-4 md:pl-16">
        <div className="relative">

          {/* 🌟 Logo with smooth zoom + fade-in */}
          <motion.img
            src="/olivier_logo_white.png"
            alt="Olivier Logo"
            className="absolute inset-0 rounded-lg sm:rounded-br-[80px] sm:rounded-tl-[120px]"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 4, ease: "easeInOut" }}
          />

          {/* 🧍 Avatar slides down and bounces */}
          <motion.img
            src="/images/meAvatar.webp"
            alt="Olivier Portrait"
            className="relative z-10 rounded-lg sm:rounded-br-[80px] sm:rounded-tl-[120px]"
            initial={{ y: -100, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 10, delay: 0.3 }}
          />
        </div>
      </div>

      {/* Right - Text & Buttons */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mr-4 w-full text-center sm:w-1/2 sm:text-left"
      >
        <h1 className="mb-6 text-3xl font-bold leading-tight dark:text-slate-50 md:text-4xl">
          Hi, I m Olivier Kepler François
        </h1>
        <p className="mb-2 leading-relaxed text-slate-700 dark:text-slate-400">
          Engineering and Computer Science student passionate about solving real-world problems through technology.
        </p>

        {/* Animated benefit list */}
        <ul className="mb-8 flex flex-col items-center space-y-1 dark:text-slate-400 sm:items-start">
          {benefits.map((benefit, index) => (
            <motion.li
              key={index}
              className="flex items-start"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
            >
              <IconCheck className="mr-2 mt-1 text-orange-300" />
              <span>{benefit}</span>
            </motion.li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex flex-col space-y-3 md:flex-row md:space-x-2 md:space-y-0">
          <motion.button
            className="rounded-lg border-0 bg-slate-900 px-6 py-3 text-base text-white shadow-lg shadow-slate-300 transition dark:bg-orange-300 dark:text-black dark:shadow-orange-300 dark:hover:bg-orange-400 sm:py-2 hover:bg-orange-300 hover:text-slate-900 hover:shadow-orange-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: [1, 1.01, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            Open menu
          </motion.button>

          <motion.button
            className="rounded-lg border-0 bg-white px-6 py-3 text-base text-slate-900 shadow-lg shadow-slate-100 transition dark:bg-slate-700 dark:text-slate-300 dark:shadow-slate-800 dark:hover:bg-slate-600 sm:py-2 hover:bg-orange-300 hover:text-slate-900 hover:shadow-orange-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: [1, 1.015, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            Explore services
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}

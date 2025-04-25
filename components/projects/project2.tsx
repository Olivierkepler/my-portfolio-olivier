"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const projects = [
  { name: "Cash Odyssey" },
  { name: "Virtual Try-On" },
  { name: "Portfolio V2" },
  { name: "Fitness App" },
  { name: "Meal Planner" },
  { name: "AI Chatbot" },
];

export default function Project2() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 40, // Adjusted for larger orbit — smooth slow rotation
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <div
      className="sticky top-0 z-40 h-screen flex items-center justify-center overflow-hidden relative"
      style={{ backgroundColor: "#F7E37A" }}
    >
      {/* Center Glow Pulse */}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-white/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Central Animated Title */}
      <motion.h2
        className="relative z-10 text-8xl font-extrabold text-black tracking-widest"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        My Projects
      </motion.h2>

      {/* Orbiting Project Nodes (LARGER ORBIT & NODES) */}
      <motion.div
        className="absolute w-[900px] h-[900px] flex items-center justify-center"
        animate={controls}
      >
        {projects.length > 0 &&
          projects.map((project, index) => {
            const total = projects.length;
            const angle = (index / total) * Math.PI * 2;
            const x = Math.cos(angle) * 350; // 🚀 Larger orbit radius
            const y = Math.sin(angle) * 350;

            return (
              <motion.div
                key={index}
                className="absolute w-40 h-40 bg-black text-yellow-300 rounded-full flex items-center justify-center text-center font-bold text-lg shadow-2xl cursor-pointer hover:scale-125 hover:bg-yellow-300 hover:text-black hover:shadow-3xl transition-all"
                animate={{ x, y }}
                whileHover={{ scale: 1.3, rotate: 10 }}
                onClick={() => alert(`Go to: ${project.name}`)} // Replace with router.push if needed
              >
                {project.name}
              </motion.div>
            );
          })}
      </motion.div>
    </div>
  );
}

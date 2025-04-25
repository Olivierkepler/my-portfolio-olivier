"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(300); // Default radius

  // Auto rotation
  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 40,
        ease: "linear",
      },
    });
  }, [controls]);

  // Responsive radius adjustment
  useEffect(() => {
    const updateRadius = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setRadius(Math.min(width / 2 - 80, 300)); // Responsive radius, max 300px
      }
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div
      ref={containerRef}
      className="sticky top-0 z-40 h-screen flex items-center justify-center overflow-hidden relative px-4"
      style={{ backgroundColor: "#F7E37A" }}
    >
      {/* Center Glow Pulse */}
      <motion.div
        className="absolute w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-white/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Central Animated Title */}
      <motion.h2
        className="relative z-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-black tracking-widest text-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        My Projects
      </motion.h2>

      {/* Orbiting Project Nodes (Responsive Orbit) */}
      <motion.div
        className="absolute w-full h-full flex items-center justify-center"
        animate={controls}
      >
        {projects.map((project, index) => {
          const total = projects.length;
          const angle = (index / total) * Math.PI * 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={index}
              className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-black text-yellow-300 rounded-full flex items-center justify-center text-center font-bold text-sm sm:text-base md:text-lg shadow-2xl cursor-pointer hover:scale-125 hover:bg-yellow-300 hover:text-black hover:shadow-3xl transition-all"
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

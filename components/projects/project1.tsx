"use client";

import { motion } from "framer-motion";

export default function Project1() {
  const images = [
    "/images/womanImage.jpg",
    "/images/manImage.jpeg",
    "/images/womanpic.webp",
  ];

  const variants = {
    animate: {
      y: ["100%", "0%", "-100%"],        // Upward motion: from bottom → center → exit top
      opacity: [0, 1, 0],                // Fade in at center, fade out at top
      scale: [0.95, 1, 1.05],            // Optional slight zoom for a natural feel
    },
  };

  return (
    <div className="sticky top-0 z-40 bg-gradient-to-br from-black via-gray-900 to-black h-screen flex items-center justify-center">
      <motion.div
        className="flex items-center justify-center text-white text-8xl font-extrabold relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Left Text */}
        <motion.span
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mr-8 tracking-wide"
        >
          Feat
        </motion.span>

        {/* Floating Images (Fixed Sizing and Animation) */}
        <div className="relative w-100 h-100 overflow-hidden">
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`image${index}`}
              className="absolute top-0 left-0 w-full h-full object-cover  shadow-xl"
              variants={variants}
              animate="animate"
              transition={{
                duration: 6,
                delay: index * (6 / images.length), // Evenly staggered
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Right Text */}
        <motion.span
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="ml-8 tracking-wide"
        >
          ured
        </motion.span>
      </motion.div>
    </div>
  );
}

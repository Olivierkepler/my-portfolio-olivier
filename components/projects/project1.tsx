"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Project1() {
  const images = [
    { src: "/images/womanImage.jpg", link: "/page1" },
    { src: "/images/manImage.jpeg", link: "/page2" },
    { src: "/images/womanpic.webp", link: "/page3" },
  ];

  const variants = {
    animate: {
      y: ["100%", "0%", "-100%"],
      opacity: [0, 1, 0],
      scale: [0.95, 1, 1.05],
    },
  };

  const [isHovering, setIsHovering] = useState(false);
  const [isSquare, setIsSquare] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  const router = useRouter();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    if (isHovering) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovering, mouseX, mouseY]);

  return (
    <div
      className="sticky top-0 z-40 bg-gradient-to-br from-black via-gray-900 to-black h-screen flex items-center justify-center overflow-hidden relative px-4"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setIsSquare(false);
      }}
      onClick={() => setIsSquare(!isSquare)}
    >
      {/* Text and Floating Images */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center text-white text-5xl sm:text-6xl md:text-8xl font-extrabold relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Left Text */}
        <motion.span
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mr-0 sm:mr-8 mb-4 sm:mb-0 tracking-wide"
        >
          Feat
        </motion.span>

        {/* Floating Images with Click to Navigate */}
        <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 overflow-hidden">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="absolute top-0 left-0 w-full h-full cursor-pointer"
              onClick={(e) => {
                e.stopPropagation(); // Prevent square toggle on image click
                router.push(img.link);
              }}
            >
              <motion.img
                src={img.src}
                alt={`image${index}`}
                className="w-full h-full object-cover shadow-xl"
                variants={variants}
                animate="animate"
                transition={{
                  duration: 5,
                  delay: index * (6 / images.length),
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Right Text */}
        <motion.span
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="ml-0 sm:ml-8 mt-4 sm:mt-0 tracking-wide"
        >
          ured
        </motion.span>
      </motion.div>

      {/* Cursor-Follow Shape */}
      {isHovering && (
        <motion.div
          className={`fixed top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-white pointer-events-none mix-blend-difference ${
            isSquare ? "rounded-sm" : "rounded-full"
          }`}
          style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: isSquare ? 45 : 0,
            backgroundColor: isSquare ? "#ffffff" : "#e0e0e0",
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  );
}

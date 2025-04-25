"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const letters = "Project 3".split("");

export default function Project3() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  // Track mouse position for particles
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle ripple creation on click
  const handleClick = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const rippleX = e.clientX - rect.left;
      const rippleY = e.clientY - rect.top;
      const newRipple = { x: rippleX, y: rippleY, id: Date.now() };
      setRipples((prev) => [...prev, newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 1000);
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      className="sticky top-0 z-49 h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-hidden relative px-4"
    >
      {/* Glow Pulse */}
      <motion.div
        className="absolute w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-yellow-300/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Particles */}
      {[...Array(20)].map((_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        const baseX = Math.cos(angle) * 250;
        const baseY = Math.sin(angle) * 250;
        const dx = (mousePos.x - (containerRef.current?.clientWidth || 900) / 2) / 30;
        const dy = (mousePos.y - (containerRef.current?.clientHeight || 900) / 2) / 30;
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full"
            animate={{ x: baseX + dx, y: baseY + dy, opacity: [1, 0.5, 1] }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: "easeInOut" }}
          />
        );
      })}

      {/* Letter-by-letter Title */}
      <div className="relative z-10 flex flex-wrap justify-center gap-2 sm:gap-4">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="text-yellow-300 text-5xl sm:text-7xl md:text-8xl font-extrabold"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
            whileHover={{ scale: 1.2 }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Ripples on click */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="absolute bg-yellow-300 rounded-full pointer-events-none"
          initial={{ opacity: 0.5, scale: 0 }}
          animate={{ opacity: 0, scale: 4 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            left: ripple.x - 25,
            top: ripple.y - 25,
            width: 50,
            height: 50,
          }}
        />
      ))}
    </div>
  );
}

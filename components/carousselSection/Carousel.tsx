'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselProps {
  slides: React.ReactNode[]
  autoPlayInterval?: number
}

export default function Carousel({ slides, autoPlayInterval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    )
  }, [slides.length])

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }, [slides.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevious()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === ' ') setIsPaused((prev) => !prev)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleNext, handlePrevious])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => handleNext(), autoPlayInterval)
    return () => clearInterval(timer)
  }, [autoPlayInterval, handleNext, isPaused])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
    setIsPaused(true)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd

    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext()
      else handlePrevious()
    }

    setTouchStart(null)
    setIsPaused(false)
  }

  return (
    <div
      className="relative w-full  overflow-hidden "
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{
            type: 'tween',
            ease: 'easeInOut',
            duration: 0.6,
          }}
          className="relative w-full"
        >
          <div className="z-10 w-full">{slides[currentIndex]}</div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 z-20 flex items-center justify-between px-10 pointer-events-none">
  <button
    onClick={handlePrevious}
    onMouseEnter={() => setIsPaused(true)}
    onMouseLeave={() => setIsPaused(false)}
    className="pointer-events-auto cursor-pointer bg-white/80 dark:bg-gray-800/80 p-3 rounded-full shadow-lg 
               hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-600 hover:scale-110 hover:shadow-2xl 
               dark:hover:from-cyan-400 dark:hover:to-cyan-600 
               transition-transform transition-colors duration-300 ease-in-out group"
    aria-label="Previous slide"
  >
    <ChevronLeft className="w-6 h-6 text-cyan-600 dark:text-white group-hover:text-white transition-colors duration-300" />
  </button>

  <button
    onClick={handleNext}
    onMouseEnter={() => setIsPaused(true)}
    onMouseLeave={() => setIsPaused(false)}
    className="pointer-events-auto cursor-pointer bg-white/80 dark:bg-gray-800/80 p-3 rounded-full shadow-lg 
               hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-600 hover:scale-110 hover:shadow-2xl 
               dark:hover:from-cyan-400 dark:hover:to-cyan-600 
               transition-transform transition-colors duration-300 ease-in-out group"
    aria-label="Next slide"
  >
    <ChevronRight className="w-6 h-6 text-cyan-600 dark:text-white group-hover:text-white transition-colors duration-300" />
  </button>
</div>



      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-30 cursor-pointer">
  {slides.map((_, index) => (
    <button
      key={index}
      onClick={() => {
        setCurrentIndex(index);
        setIsPaused(true);
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={`w-4 h-4 rounded-full border-2 
        transition-all duration-300 ease-in-out transform 
        ${index === currentIndex 
          ? 'bg-cyan-500 border-cyan-500 scale-110 shadow-md dark:bg-cyan-400 dark:border-cyan-400' 
          : 'bg-gray-300 border-gray-400 hover:bg-cyan-300 hover:border-cyan-400 dark:bg-gray-600 dark:border-gray-500 dark:hover:bg-cyan-500 dark:hover:border-cyan-500'}
      `}
      aria-label={`Go to slide ${index + 1}`}
    />
  ))}
</div>

    </div>
  )
}

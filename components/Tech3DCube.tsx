'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import '@/components/cube.css'

interface Logo {
  src: string
  alt: string
  desc: string
}

const logos: Logo[] = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg',
    alt: 'TensorFlow',
    desc: 'Open-source platform for ML & deep learning.',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    alt: 'React',
    desc: 'JavaScript library for building UIs.',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    alt: 'Python',
    desc: 'Readable language for web, data, and AI.',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    alt: 'JavaScript',
    desc: 'Language of the web, powering frontend & backend.',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    alt: 'Java',
    desc: 'Versatile language for apps, servers, and Android.',
  },
  {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    alt: 'Docker',
    desc: 'Platform to build, ship, and run containers.',
  },
]

export default function Tech3DCube() {
  const [rotate, setRotate] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [selected, setSelected] = useState<Logo | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isHovered || selected) return
    const interval = setInterval(() => {
      setRotate((prev) => prev + 1)
    }, 60)
    return () => clearInterval(interval)
  }, [isHovered, selected])

  useEffect(() => {
    if (typeof window === 'undefined') return // Prevent SSR errors

    function handleClickOutside(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setSelected(null)
        setSelectedIndex(null)
      }
    }

    if (selected) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [selected])

  return (
    <>
      {/* 🌀 Prompt Message */}
      <motion.div
        animate={{ y: [0, -5, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4"
      >
        <span className="inline-block px-4 py-1 mb-10 bg-black/10 dark:bg-white/10 text-white rounded-full shadow-sm backdrop-blur">
          🌀 Click a face to explore technologies
        </span>
      </motion.div>

      {/* 🟠 3D Cube */}
      <div
        className="perspective-3d w-64 h-64"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="cube"
          animate={{
            rotateX: rotate * 0.8,
            rotateY: rotate,
            rotateZ: rotate * 0.2,
          }}
          transition={{ ease: 'linear', duration: 0.1 }}
        >
          {logos.map((logo, i) => (
            <div
              key={i}
              className={`face face-${i + 1} group cursor-pointer relative ${
                selectedIndex === i ? 'ring-4 ring-orange-400 scale-105 z-10' : ''
              }`}
              onClick={() => {
                setSelected(logo)
                setSelectedIndex(i)
              }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={80}
                height={80}
                className="w-20 h-20 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center text-[10px] px-3 py-1 bg-black/70 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 w-36">
                <strong className="block text-sm">{logo.alt}</strong>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 🟢 Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
          <div
            ref={modalRef}
            className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white rounded-xl max-w-sm w-full p-6 shadow-2xl relative"
          >
            <button
              onClick={() => {
                setSelected(null)
                setSelectedIndex(null)
              }}
              className="absolute top-3 right-4 text-xl font-bold text-gray-500 hover:text-gray-700 dark:hover:text-white"
            >
              &times;
            </button>
            <div className="flex flex-col items-center text-center">
              <Image
                src={selected.src}
                alt={selected.alt}
                width={80}
                height={80}
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{selected.alt}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{selected.desc}</p>
              <button
                onClick={() => alert(`Go to ${selected.alt} page`)}
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

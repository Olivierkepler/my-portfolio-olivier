'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { IconBriefcase, IconLoader } from '@tabler/icons-react'

interface Technology {
  name: string
  icon: string
  size: number
  x: number
  y: number
}

const completedWorks = [
  {
    title: 'Urban Air Quality Research – Northeastern University',
    description:
      'Conducted data-driven research using Python to analyze air quality patterns. Collaborated with researchers and documented findings for academic use.',
    tech: ['Python', 'Data Analysis', 'Excel', 'Research'],
  },
  {
    title: 'Math Gateway Specialist – HOPE Initiative',
    description:
      'Mentored over 60 students per semester in mathematics. Provided weekly academic support and led student outreach.',
    tech: ['Mentorship', 'Mathematics', 'Education'],
  },
  {
    title: 'Project Admin Intern – Suffolk Construction',
    description:
      'Assisted project teams with documentation, punch lists, and scheduling using Procore. Supported daily team coordination.',
    tech: ['Procore', 'Project Support', 'Documentation'],
  },
]

const ongoingWorks = [
  {
    title: 'Work Control Associate – Massachusetts General Hospital',
    description:
      'Manage 200+ service requests weekly, coordinate maintenance dispatch, and maintain digital inventory systems.',
    tech: ['Dispatch Ops', 'Customer Support', 'Inventory Management'],
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'Designing and developing this site using Next.js and Tailwind CSS to professionally showcase my work and skills.',
    tech: ['Next.js', 'Tailwind CSS', 'UI/UX', 'TypeScript'],
  },
]

const floatingTechnologies: Technology[] = [
  { name: 'React', icon: '⚛️', size: 40, x: 0, y: 0 },
  { name: 'TypeScript', icon: '📘', size: 35, x: 0, y: 0 },
  { name: 'Node.js', icon: '🟢', size: 38, x: 0, y: 0 },
  { name: 'Python', icon: '🐍', size: 36, x: 0, y: 0 },
  { name: 'JavaScript', icon: '💛', size: 42, x: 0, y: 0 },
  { name: 'Next.js', icon: '⚡', size: 37, x: 0, y: 0 },
  { name: 'TailwindCSS', icon: '🎨', size: 34, x: 0, y: 0 },
  { name: 'MongoDB', icon: '🍃', size: 36, x: 0, y: 0 },
  { name: 'Git', icon: '📦', size: 33, x: 0, y: 0 },
  { name: 'AWS', icon: '☁️', size: 39, x: 0, y: 0 },
]

const MAX_OFFSET = 200
const JITTER_AMOUNT = 20
const ANIMATION_INTERVAL = 2000

function BackgroundTechnologies({ height = 800 }: { height?: number }) {
  const [technologies, setTechnologies] = useState<Technology[]>(floatingTechnologies)

  useEffect(() => {
    setTechnologies(techs =>
      techs.map(tech => ({
        ...tech,
        x: Math.random() * MAX_OFFSET * 2 - MAX_OFFSET,
        y: Math.random() * MAX_OFFSET * 2 - MAX_OFFSET,
      }))
    )

    const interval = setInterval(() => {
      setTechnologies(techs =>
        techs.map(tech => ({
          ...tech,
          x: tech.x + (Math.random() - 0.5) * JITTER_AMOUNT,
          y: tech.y + (Math.random() - 0.5) * JITTER_AMOUNT,
        }))
      )
    }, ANIMATION_INTERVAL)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" style={{ height }}>
      {technologies.map((tech, index) => (
        <motion.div
          key={`${tech.name}-${index}`}
          animate={{
            x: tech.x + (typeof window !== 'undefined' ? window.innerWidth / 2 : 0),
            y: tech.y + height / 3,
            transition: { duration: 2, ease: 'easeInOut' },
          }}
          className="absolute"
          whileHover={{ scale: 1.2 }}
        >
          <div
            className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md text-white"
            style={{ fontSize: tech.size }}
          >
            <span>{tech.icon}</span>
            <span className="text-sm font-medium">{tech.name}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function WorkShowcase() {
  return (
    <section id="work" className="relative py-24 px-10  z-10 ">
      {/* Background Layer */}
      <BackgroundTechnologies height={900} />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900/80 to-slate-800/90 pointer-events-none" />

      {/* Content Layer */}
      <div className="relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Work Experience & Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A curated selection of roles and projects reflecting my hands-on experience in engineering, research, and development.
          </p>
        </div>

        {/* ✅ Completed Work */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6 text-violet-400">
            <IconBriefcase />
            <h3 className="text-2xl font-semibold">Completed Projects</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedWorks.map((work, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 p-6 bg-white/5 backdrop-blur-sm text-white shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-lg font-semibold mb-2">{work.title}</h4>
                  <p className="text-sm text-gray-200 mb-4">{work.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                  {work.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-violet-600/20 text-violet-200 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🚧 Ongoing Work */}
        <div>
          <div className="flex items-center gap-2 mb-6 text-yellow-300">
            <IconLoader className="animate-spin-slow" />
            <h3 className="text-2xl font-semibold">Currently Working On</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ongoingWorks.map((work, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 p-6 bg-white/5 backdrop-blur-sm text-white shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-lg font-semibold mb-2">{work.title}</h4>
                  <p className="text-sm text-gray-200 mb-4">{work.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                  {work.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-yellow-500/20 text-yellow-200 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

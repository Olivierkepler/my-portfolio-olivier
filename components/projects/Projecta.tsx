"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Cash Odyssey",
    description: "A budgeting game that helps users manage their expenses and level up financially.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "/cash-odyssey",
    github: "https://github.com/yourname/cash-odyssey",
  },
  {
    title: "Virtual Try-On",
    description: "Web-based AR app where users can try clothes using TensorFlow.js & Next.js.",
    tech: ["Next.js", "TensorFlow.js", "PoseNet"],
    link: "/virtual-try-on",
    github: "https://github.com/yourname/virtual-try-on",
  },
  {
    title: "Portfolio V2",
    description: "My sleek developer portfolio built with responsive design and animated components.",
    tech: ["Next.js", "Tailwind", "Shadcn UI"],
    link: "/portfolio",
    github: "https://github.com/yourname/portfolio",
  },
];

export default function ProjectsSection() {
  return (
    <main className="bg-[#0d0d0d] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2      
        initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-[#1a1a1a] rounded-2xl p-6 shadow-lg border border-[#333] hover:shadow-white/10 hover:scale-[1.02] transition-all"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Link
                  href={project.link}
                  className="bg-white text-black text-sm px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
                >
                  View Project
                </Link>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-200 underline text-sm"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

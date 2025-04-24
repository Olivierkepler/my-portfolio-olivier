'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { techIcons, techLevels } from '../../components/section2/data/techData';

const techCategories = [
  { key: 'languages', title: 'Languages', desc: 'Languages I use to build software across platforms.', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C'] },
  { key: 'frameworks', title: 'Frameworks & Libraries', desc: 'My go-to tools for scalable and modern app development.', items: ['React', 'Next.js', 'Spring Boot', 'Node.js', 'Express'] },
  { key: 'ml', title: 'Machine Learning / AI', desc: "ML libraries and frameworks I've used in AI projects.", items: ['TensorFlow', 'scikit-learn', 'NumPy'] },
  { key: 'databases', title: 'Databases', desc: 'Efficient and scalable database technologies I work with.', items: ['MongoDB', 'PostgreSQL', 'MySQL'] },
  { key: 'tools', title: 'Dev Tools', desc: 'Core tools I use daily for development and deployment.', items: ['Git', 'Docker', 'VS Code', 'Postman'] },
  { key: 'ui', title: 'UI & Design', desc: 'Design systems and styling tools I use for great UI/UX.', items: ['Tailwind CSS', 'Figma', 'Bootstrap'] },
];

// Animation variants
const flipIn = {
  hidden: { opacity: 0, rotateX: -45, y: 20 },
  visible: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const scalePop = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function TechCloudPage() {
  const [activeTab, setActiveTab] = useState('languages');
  const [search, setSearch] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentCategory = techCategories.find((cat) => cat.key === activeTab);
  const filteredItems = currentCategory?.items.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  if (!mounted) return null;

  return (
    <section className="relative py-32 px-6 sm:px-12 lg:px-24 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-[-120px] left-[-80px] w-[300px] h-[300px] bg-cyan-400 opacity-30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-teal-300 opacity-30 rounded-full blur-2xl"
          animate={{ scale: [1.2, 1, 1.2], y: [0, 25, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // Trigger every scroll up/down
        variants={staggerContainer}
      >
        <motion.h2 className="text-5xl font-extrabold text-white mb-4 tracking-tight" variants={flipIn}>
          <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">My Tech Stack</span>
        </motion.h2>
        <motion.p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto" variants={flipIn}>
          Tools, frameworks, and technologies I use to build responsive, powerful, and scalable applications.
        </motion.p>

        {/* Tabs */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-10" variants={staggerContainer}>
          {techCategories.map((cat) => (
            <motion.button
              key={cat.key}
              onClick={() => {
                setActiveTab(cat.key);
                setSearch('');
              }}
              variants={flipIn}
              className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-medium backdrop-blur-md shadow border transition-all ${
                activeTab === cat.key
                  ? 'bg-cyan-600 text-white border-transparent hover:brightness-110'
                  : 'bg-white/10 text-gray-300 border-gray-500 hover:bg-white/20'
              }`}
            >
              {cat.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Search */}
        <motion.div className="mb-12 flex justify-center" variants={flipIn}>
          <input
            type="text"
            placeholder="Search technology..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-5 py-3 rounded-xl border border-gray-600 bg-white/5 text-white placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </motion.div>

        {/* Tech Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + search}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center"
          >
            {filteredItems && filteredItems.length > 0 ? (
              filteredItems.map((tech) => {
                const slug = encodeURIComponent(tech.replace(/\s/g, '-'));
                const level = techLevels[tech];

                return (
                  <motion.div key={tech} variants={scalePop}>
                    <Link
                      href={`/tech/${slug}`}
                      className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition border border-white/10 hover:border-cyan-400 shadow-xl backdrop-blur-xl hover:shadow-cyan-500/30 w-40 sm:w-44 md:w-48 lg:w-52"
                    >
                      <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
                        <img
                          src={techIcons[tech]}
                          alt={`${tech} logo`}
                          className="max-h-full max-w-full object-contain transition-transform group-hover:scale-110"
                        />
                      </div>
                      <span className="mt-4 text-lg sm:text-xl font-semibold text-white text-center">
                        {tech}
                      </span>
                      <span
                        className={`mt-2 inline-block px-3 py-0.5 rounded-full text-xs font-medium ${
                          level === 'Advanced'
                            ? 'bg-green-500/20 text-green-300'
                            : level === 'Intermediate'
                            ? 'bg-yellow-500/20 text-yellow-300'
                            : 'bg-gray-400/20 text-gray-200'
                        }`}
                      >
                        {level} Skill
                      </span>
                    </Link>
                  </motion.div>
                );
              })
            ) : (
              <div className="col-span-full text-gray-400">No matching technologies found.</div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

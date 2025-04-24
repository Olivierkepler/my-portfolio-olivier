'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { techIcons, techLevels } from './data/techData';

const techCategories = [
  {
    key: 'languages',
    title: 'Languages',
    desc: 'Languages I use to build software across platforms.',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C'],
  },
  {
    key: 'frameworks',
    title: 'Frameworks & Libraries',
    desc: 'My go-to tools for scalable and modern app development.',
    items: ['React', 'Next.js', 'Spring Boot', 'Node.js', 'Express'],
  },
  {
    key: 'ml',
    title: 'Machine Learning / AI',
    desc: "ML libraries and frameworks I've used in AI projects.",
    items: ['TensorFlow', 'scikit-learn', 'NumPy'],
  },
  {
    key: 'databases',
    title: 'Databases',
    desc: 'Efficient and scalable database technologies I work with.',
    items: ['MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    key: 'tools',
    title: 'Dev Tools',
    desc: 'Core tools I use daily for development and deployment.',
    items: ['Git', 'Docker', 'VS Code', 'Postman'],
  },
  {
    key: 'ui',
    title: 'UI & Design',
    desc: 'Design systems and styling tools I use for great UI/UX.',
    items: ['Tailwind CSS', 'Figma', 'Bootstrap'],
  },
];

export default function TechCloud() {
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
    <section className="relative py-28 px-4 sm:px-6 lg:px-10 overflow-hidden">
      {/* 🎨 Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute top-[-150px] left-1/4 w-96 h-96 bg-cyan-300 dark:bg-cyan-700 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-[-120px] right-1/3 w-80 h-80 bg-teal-300 dark:bg-teal-700 rounded-full blur-2xl opacity-30"
        />
      </div>

      {/* 💻 Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Tech Stack
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          My favorite tools, languages, and frameworks that power the software I build.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
          {techCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setActiveTab(cat.key);
                setSearch('');
              }}
              className={`px-5 py-2.5 rounded-full cursor-pointer text-sm sm:text-base font-medium transition duration-200 ${
                activeTab === cat.key
                  ? 'bg-gray-900 text-white shadow-lg dark:bg-white dark:text-gray-900'
                  : 'bg-white/80 backdrop-blur border border-gray-300 text-gray-700 hover:bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="mb-12 flex justify-center">
          <input
            type="text"
            placeholder="Search tech..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-5 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-cyan-500 text-sm bg-white dark:bg-gray-800 text-black dark:text-white dark:border-gray-600"
          />
        </div>

        {/* Tech Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + search}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center"
          >
            {filteredItems && filteredItems.length > 0 ? (
              filteredItems.map((tech) => {
                const slug = encodeURIComponent(tech.replace(/\s/g, '-'));
                const level = techLevels[tech];

                return (
                  <Link
                    href={`/tech/${slug}`}
                    key={tech}
                    className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white/80 dark:bg-gray-800 backdrop-blur-md border border-gray-200 dark:border-gray-700 transition hover:shadow-xl hover:-translate-y-1 w-40 sm:w-44 md:w-48 lg:w-52 cursor-pointer"
                  >
                    <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
                      <img
                        src={techIcons[tech]}
                        alt={`${tech} logo`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="mt-4 text-lg sm:text-xl font-semibold text-gray-800 dark:text-white text-center">
                      {tech}
                    </span>
                    <span
                      className={`mt-2 inline-block px-3 py-0.5 rounded-full text-xs font-medium transition ${
                        level === 'Advanced'
                          ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200'
                          : level === 'Intermediate'
                          ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-200'
                          : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white'
                      }`}
                    >
                      {level} Skill
                    </span>
                  </Link>
                );
              })
            ) : (
              <div className="col-span-full text-gray-500 dark:text-gray-400">
                No matching technologies found.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

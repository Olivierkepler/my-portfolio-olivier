// section2/data/techData.ts

export const techLevels: Record<string, 'Beginner' | 'Intermediate' | 'Advanced'> = {
  JavaScript: 'Advanced',
  Python: 'Advanced',
  React: 'Advanced',
  'Next.js': 'Advanced',
  Docker: 'Intermediate',
  'Tailwind CSS': 'Advanced',
};

export const techIcons: Record<string, string> = {
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
  Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
};

export const techDescriptions: Record<string, string> = {
  JavaScript: 'JavaScript is the language of the web, powering dynamic and interactive websites.',
  Python: 'Python is used for AI, data science, automation, and web development.',
  React: 'React is a JavaScript library for building interactive user interfaces.',
  'Next.js': 'Next.js is a React framework that enables server-side rendering and static site generation.',
  Docker: 'Docker is a platform that simplifies deployment through containerization.',
  'Tailwind CSS': 'Tailwind CSS is a utility-first CSS framework for building modern designs.',
};

import Link from 'next/link';
import { nameToSlug } from '@/app/tech/utils/slugHelpers';      

const techList = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'C',
  'React',
  'Next.js',
  'Spring Boot',
  'Node.js',
  'Express',
  'TensorFlow',
  'scikit-learn',
  'NumPy',
  'MongoDB',
  'PostgreSQL',
  'MySQL',
  'Git',
  'Docker',
  'VS Code',
  'Postman',
  'Tailwind-CSS',
  'Figma',
  'Bootstrap',
  'VS-Code',
  'Next.js',
];

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-10 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Tech List</h1>
      <div className="flex flex-col gap-4">
        {techList.map((techName) => {
          const slug = nameToSlug(techName); // ✅ Use helper for consistent slugs
          return (
            <Link
              key={techName}
              href={`/tech/${slug}`}
              className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition"
            >
              {techName}
            </Link>
          );
        })}
      </div>
    </main>
  );
}

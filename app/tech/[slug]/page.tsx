import { techIcons, techLevels, techDescriptions } from '@/components/section2/data/techData';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface TechSlugPageProps {
  params: {
    slug: string;
  };
}

// ✅ Define this function to tell Next.js what slugs to generate at build time
export async function generateStaticParams() {
  const techNames = Object.keys(techIcons);
  return techNames.map((name) => ({
    slug: name.toLowerCase().replace(/\s/g, '-'),
  }));
}

// ✅ Page component (no need to define a custom type manually)
export default function TechSlugPage({ params }: { params: { slug: string } }) {
  const techName = decodeURIComponent(params.slug.replace(/-/g, ' '));
  const icon = techIcons[techName];
  const level = techLevels[techName];
  const description = techDescriptions[techName];

  if (!icon || !level) {
    notFound(); // ✅ Proper way to handle missing slugs in app/ directory
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-teal-500 dark:from-cyan-700 dark:to-teal-800 px-6 py-20">
      <div className="bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-xl text-center space-y-6">
        <Image src={icon} alt={`${techName} logo`} width={100} height={100} className="mx-auto" />
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white capitalize">{techName}</h1>
        <span
          className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
            level === 'Advanced'
              ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200'
              : level === 'Intermediate'
              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-200'
              : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white'
          }`}
        >
          {level} Skill Level
        </span>
        <p className="text-gray-700 dark:text-gray-300 text-lg">{description}</p>
        <Link href="/" className="inline-block mt-4 px-6 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition">
          ← Back to Tech Stack
        </Link>
      </div>
    </section>
  );
}

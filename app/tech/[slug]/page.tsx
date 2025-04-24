'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { techIcons, techLevels, techDescriptions } from '@/components/section2/data/techData';
import Image from 'next/image';
import Link from 'next/link';
import { slugToName } from '@/app/tech/utils/slugHelpers';

export default function TechSlugPage() {
  const params = useParams();
  const [techName, setTechName] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (params && typeof params.slug === 'string') {
      const normalizedSlug = params.slug.toLowerCase();
      const name = slugToName(normalizedSlug);
      if (techIcons[name]) {
        setTechName(name);
      } else {
        setError(true);
      }
    }
  }, [params]);

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-xl text-red-500">Technology Not Found</div>;
  }

  if (!techName) {
    return <div className="min-h-screen flex items-center justify-center text-xl text-gray-600">Loading...</div>;
  }

  const icon = techIcons[techName];
  const level = techLevels[techName];
  const description = techDescriptions[techName];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-20">
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center space-y-6">
        <Image src={icon} alt={`${techName} logo`} width={100} height={100} className="mx-auto" />
        <h1 className="text-4xl font-extrabold text-gray-900 capitalize">{techName}</h1>
        <span
          className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
            level === 'Advanced'
              ? 'bg-green-100 text-green-800'
              : level === 'Intermediate'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          {level} Skill Level
        </span>
        <p className="text-gray-700 text-lg">{description}</p>
        <Link href="/" className="inline-block mt-4 px-6 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition">
          ← Back to Tech Stack
        </Link>
      </div>
    </section>
  );
}

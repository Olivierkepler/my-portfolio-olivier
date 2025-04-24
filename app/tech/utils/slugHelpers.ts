// utils/slugHelpers.ts
const specialCases: Record<string, string> = {
    'next-js': 'Next.js',
    'vs-code': 'VS Code',
    'scikit-learn': 'scikit-learn',
    'tailwind-css': 'Tailwind CSS',
    'spring-boot': 'Spring Boot',
  };
  
  export function slugToName(slug: string): string {
    if (specialCases[slug]) {
      return specialCases[slug];
    }
    return decodeURIComponent(slug.replace(/-/g, ' '))
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }
  
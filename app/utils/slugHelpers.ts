// // utils/slugHelpers.ts

// /**
//  * Optional: Special cases where the slug does not directly map to a simple capitalized name.
//  * For example, 'next-js' should map back to 'Next.js'.
//  */
// const specialCases: Record<string, string> = {
//     'next-js': 'Next.js',
//     'vs-code': 'VS Code',
//     'scikit-learn': 'scikit-learn',
//     'postgre-sql': 'PostgreSQL', // Example if your slug is 'postgre-sql'
//     'tailwind-css': 'Tailwind CSS',
//     'spring-boot': 'Spring Boot',
//     // Add more special cases here if needed!
//   };
  
//   /**
//    * Converts a slug (e.g., 'next-js') back to a human-readable name (e.g., 'Next.js').
//    * If the slug is not a special case, it applies a default formatting.
//    */
//   export function slugToName(slug: string): string {
//     if (specialCases[slug]) {
//       return specialCases[slug]; // Handle special cases first!
//     }
  
//     // Default behavior: replace hyphens with spaces, then capitalize each word
//     return decodeURIComponent(slug.replace(/-/g, ' '))
//       .replace(/\b\w/g, (char) => char.toUpperCase());
//   }
  
//   /**
//    * Converts a name (e.g., 'Next.js') into a slug (e.g., 'next-js').
//    * This is useful when generating slugs for linking or static params.
//    */
//   export function nameToSlug(name: string): string {
//     return name.toLowerCase().replace(/\s/g, '-').replace(/\./g, '');
//   }
  
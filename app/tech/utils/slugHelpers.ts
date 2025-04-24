// utils/slugHelpers.ts

const specialCases: Record<string, string> = {
    
    'VS Code': 'vscode',
    'scikit-learn': 'scikit-learn',
    'Tailwind-CSS': 'tailwindcss',
    'Spring Boot': 'springboot',
    'PostgreSQL': 'postgresql',
    'MongoDB': 'mongodb',
    'MySQL': 'mysql',
    'Git': 'git',
    'Docker': 'docker',
    'Express': 'express',
    'TensorFlow': 'tensorflow',
    'Java': 'java',
    'Python': 'python',
    'JavaScript': 'javascript',
    'TypeScript': 'typescript',
    'C': 'c',
    'React': 'react',
    'NumPy': 'numpy',
    'Next.js': 'next.js',
    'Tailwind CSS': 'tailwindcss',
    'Figma': 'figma',
    
    

    
    
  };
  
  export function nameToSlug(name: string): string {
    return specialCases[name] || name.toLowerCase().replace(/\s/g, '-').replace(/\./g, '');
  }
  
  export function slugToName(slug: string): string {
    const reverseSpecialCases = Object.entries(specialCases).reduce((acc, [name, slugVal]) => {
      acc[slugVal] = name;
      return acc;
    }, {} as Record<string, string>);
  
    if (reverseSpecialCases[slug]) {
      return reverseSpecialCases[slug];
    }
    return decodeURIComponent(slug.replace(/-/g, ' '))
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }
  
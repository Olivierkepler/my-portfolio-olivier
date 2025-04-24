import { techIcons } from '@/components/section2/data/techData';

// Generate static params for tech page
export async function generateStaticParams() {
  const techNames = Object.keys(techIcons);
  return techNames.map((name) => ({
    slug: name.toLowerCase().replace(/\s/g, '-'),
    techName: name
  }));
}

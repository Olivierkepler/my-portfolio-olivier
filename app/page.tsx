import Hero from '@/components/carousselSection/hero';
import SubNav from '@/components/SubNav';
import { FolderKanban, Brain, Smartphone, Clock, Star } from 'lucide-react';
import Newsletter from '@/components/Newsletter';
const menus = [
  {
    title: 'Categories',
    items: [
      { label: 'All Projects', href: '/projects', icon: <FolderKanban size={16} /> },
      { label: 'Web Apps', href: '/projects/web', icon: <Brain size={16} /> },
      { label: 'Mobile', href: '/projects/mobile', icon: <Smartphone size={16} /> },
      { label: 'AI & ML', href: '/projects/ai', icon: <Brain size={16} /> },
    ],
  },
  {
    title: 'Sort By',
    items: [
      { label: 'Most Recent', href: '/projects?sort=recent', icon: <Clock size={16} /> },
      { label: 'Popular', href: '/projects?sort=popular', icon: <Star size={16} /> },
    ],
  },
];


export default function Home() {
  return (
    <main>
 
   <SubNav menus={menus} />

      {/* ... your content */}

<Hero />    
<Newsletter />
      
    </main>


  );
}

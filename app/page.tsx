import Hero from '@/components/carousselSection/hero';
import SubNav from '@/components/SubNav';
import { FolderKanban, Brain, Smartphone, Clock, Star } from 'lucide-react';
import Testimonials from '@/components/Testimonials';
import Section2 from '@/components/section2/section2';
import Project from '@/components/projects/project';
import Project1 from '@/components/projects/project1';
import Project2 from '@/components/projects/project2';
import Project3 from '@/components/projects/project3';
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
{/* <Project />    */}
<Project1 />
<Project2 />
<Project3 />
<div className='sticky top-0 z-50'>
<Section2 />

<Testimonials />
</div>
      
    </main>


  );
}

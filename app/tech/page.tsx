// import Link from 'next/link';

// const techList = [
//   { name: 'JavaScript' },
//   { name: 'Python' },
//   { name: 'React' },
//   { name: 'Next.js' },
//   { name: 'Tailwind CSS' },
//   { name: 'TypeScript' },
//   { name: 'Node.js' },
//   { name: 'Express' },
//   { name: 'MongoDB' },  
//   { name: 'PostgreSQL' },
//   { name: 'MySQL' },
//   { name: 'Docker' },
//   { name: 'Kubernetes' },
//   { name: 'AWS' },
//   { name: 'Azure' },
//   { name: 'Git' },
//   { name: 'GitHub' },
//   { name: 'GitLab' },
//   { name: 'GitLab CI/CD' },

// ];

// export default function HomePage() {
//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-10">
//       <h1 className="text-3xl font-bold">My Tech List</h1>
//       <div className="flex flex-col gap-4">
//         {techList.map((tech) => {
//           const slug = tech.name.toLowerCase().replace(/\s/g, '-'); 
//           return (
//             <Link
//               key={tech.name}
//               href={`/tech/${slug}`}
//               className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition"
//             >
//               {tech.name}
//             </Link>
//           );
//         })}
//       </div>
//     </main>
//   );
// }

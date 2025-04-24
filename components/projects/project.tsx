import Project1 from "./project1";  
import Project2 from "./project2";
import Project3 from "./project3";

export default function Project() {
  return (
    <div>
   <div className="sticky top-0 z-50 bg-white dark:bg-slate-900">
      <Project1 />
    </div>
      <Project2 />
      <Project3 />
    </div>
  );
}

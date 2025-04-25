export default function Project1() {
  return <div className="sticky top-0 z-40 bg-black h-screen flex items-center justify-center">
 

 <div className="flex gap-4 text-white text-8xl font-bold items-center justify-center">
  <span>Project</span>
  
  <div className="flex gap-2">
    <img src="/images/womanImage.jpg" alt="image1" className="w-200 h-200 object-cover " />
    <img src="/images/womanImage.jpg" alt="image2" className="w-200 h-200 object-cover -translate-x-200" />
    <img src="/images/womanImage.jpg" alt="image3" className="w-200 h-200 object-cover -translate-x-400" />
  </div>

    <span className="text-white text-8xl font-bold -translate-x-290">Design</span>
</div>

</div>;
}

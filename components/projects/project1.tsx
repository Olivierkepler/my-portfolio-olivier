export default function Project1() {
    return (
      <div className="sticky top-0 z-40 bg-black h-screen flex items-center justify-center">
        <div className="flex flex-col justify-center items-center mx-auto">
          <div className="flex items-center justify-center text-white text-8xl font-bold relative">
            <span className="mr-6">Project</span>
  
            {/* Overlayed Images */}
            <div className="relative w-100 h-100">
              <img
                src="/images/womanImage.jpg"
                alt="image1"
                className="absolute top-0 left-0 w-100 h-100 object-cover z-30"
              />
              <img
                src="/images/womanImage.jpg"
                alt="image2"
                className="absolute top-0 left-0 w-100 h-100 object-cover z-20"
              />
              <img
                src="/images/womanImage.jpg"
                alt="image3"
                className="absolute top-0 left-0 w-100 h-100 object-cover z-10"
              />
            </div>
  
            <span className="ml-6">Design</span>
          </div>
        </div>
      </div>
    );
  }
  
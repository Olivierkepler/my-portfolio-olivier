import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className=' dark:bg-gray-900' >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  rounded-lg py-20 px-80 ">
        {/* Testimonial 1 */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-gray-100 p-2 rounded-lg">
                {/* Replace this with the Tuple logo */}
                📘
              </div>
              <h3 className="text-xl font-bold ml-3 text-gray-900 dark:text-white">Tuple</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              “Amet amet eget scelerisque tellus sit neque faucibus non eleifend.
              Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor
              consequat at. Vulputate gravida sociis enim nullam ultricies habitant
              malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.”
            </p>
          </div>
          <div className="flex items-center mt-6">
            <Image
              src="/images/womanImage.jpg" // Replace with the actual image path
              alt="Judith Black"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="ml-4">
              <p className="font-semibold text-gray-900 dark:text-white">Judith Black</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">CEO of Tuple</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="flex flex-col justify-between border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700 pl-0 md:pl-8 pt-8 md:pt-0">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-gray-100 p-2 rounded-lg">
                {/* Replace this with the Reform logo */}
                🅁
              </div>
              <h3 className="text-xl font-bold ml-3 text-gray-900 dark:text-white">Reform</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              “Excepteur veniam labore ullamco eiusmod. Pariatur consequat proident duis dolore
              nulla veniam reprehenderit nisi officia voluptate incididunt exercitation
              exercitation elit. Nostrud veniam sint dolor nisi ullamco.”
            </p>
          </div>
          <div className="flex items-center mt-6">
            <Image
              src="/images/manImage.jpeg" // Replace with the actual image path
              alt="Joseph Rodriguez"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="ml-4">
              <p className="font-semibold text-gray-900 dark:text-white">Joseph Rodriguez</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">CEO of Reform</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

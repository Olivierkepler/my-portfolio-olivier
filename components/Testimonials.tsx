import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Testimonial 1 */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-gray-100 p-3 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out">
                📘
              </div>
              <h3 className="text-2xl font-bold ml-4 text-gray-900 dark:text-white">Tuple</h3>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              “Amet amet eget scelerisque tellus sit neque faucibus non eleifend.
              Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor
              consequat at. Vulputate gravida sociis enim nullam ultricies habitant
              malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.”
            </p>
          </div>
          <div className="flex items-center mt-8">
            <Image
              src="/images/womanImage.jpg"
              alt="Judith Black"
              width={56}
              height={56}
              className="rounded-full object-cover"
            />
            <div className="ml-4">
              <p className="font-semibold text-gray-900 dark:text-white text-lg">Judith Black</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">CEO of Tuple</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="flex flex-col justify-between border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700 pt-8 md:pt-0 md:pl-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-gray-100 p-3 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out">
                🅁
              </div>
              <h3 className="text-2xl font-bold ml-4 text-gray-900 dark:text-white">Reform</h3>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              “Excepteur veniam labore ullamco eiusmod. Pariatur consequat proident duis dolore
              nulla veniam reprehenderit nisi officia voluptate incididunt exercitation
              exercitation elit. Nostrud veniam sint dolor nisi ullamco.”
            </p>
          </div>
          <div className="flex items-center mt-8">
            <Image
              src="/images/manImage.jpeg"
              alt="Joseph Rodriguez"
              width={56}
              height={56}
              className="rounded-full object-cover"
            />
            <div className="ml-4">
              <p className="font-semibold text-gray-900 dark:text-white text-lg">Joseph Rodriguez</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">CEO of Reform</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

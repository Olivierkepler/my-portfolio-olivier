'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconCalendar, IconHandStop } from '@tabler/icons-react';
// import Tech3DCube from './Tech3DCube';
// import CubeCanvas from './CubeCanvas';
// import DeliveryBoxCanvas from './DeliveryBox';
// import ThreeScene from './ThreeScene';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate success (replace with real API in production)
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setEmail('');
  };

  return (
    <section className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* 3D Cube Animation
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 60, damping: 15 }}
          className="mb-14 flex justify-end sm:mb-20"
        >
          <Tech3DCube />
        </motion.div> */}

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 lg:max-w-none lg:grid-cols-2">
          {/* Left: Headline + Form */}
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Stay in the Loop
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Subscribe for monthly insights into my projects, experiments, and developer journey.
              No spam. Just genuine inspiration and value.
            </p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-2 text-sm font-medium text-indigo-400"
            >
              Join 200+ monthly readers.
            </motion.p>

            <form onSubmit={handleSubmit} className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white placeholder:text-gray-400 outline outline-1 outline-white/10 focus:outline-2 focus:outline-indigo-500 transition sm:text-sm"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </form>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-4 text-sm text-green-400"
              >
                🎉 Thanks for subscribing! You ll hear from me soon.
              </motion.p>
            )}
          </div>

          {/* Right: Icons/Benefits */}
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-4">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <IconCalendar className="h-6 w-6 text-white" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">Monthly updates</dt>
              <dd className="mt-2 text-base text-gray-400">
                A quick recap of what I m building, writing, or experimenting with.
              </dd>
            </div>

            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <IconHandStop className="h-6 w-6 text-white" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">No spam, ever.</dt>
              <dd className="mt-2 text-base text-gray-400">
                Just honest insights and updates. Unsubscribe anytime.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Background abstract gradient */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          className="aspect-[1155/678] w-[72rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  );
}

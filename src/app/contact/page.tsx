'use client';

import React, { FormEvent, useState } from 'react';
import { BackgroundBeams } from '../../components/ui/background-beams';

function MusicSchoolContactUs() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted:', { email, message });
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative flex items-center justify-center overflow-hidden">
      {/* Background Beams */}
      <BackgroundBeams className="absolute top-0 left-0 h-full w-full z-0" />

      {/* Glassy White Box for Form */}
      <div className="relative z-10 max-w-2xl w-full mx-auto p-8 rounded-2xl bg-white/20 dark:bg-white/10  backdrop-blur-3xl opacity-70 shadow-2xl  border border-white/50">
        <div className=' font-bold '>
        <h1 className="text-4xl md:text-6xl text-center font-sans font-bold mb-6 text-white ">
          Contact Us
        </h1>
        <p className="text-neutral-200 max-w-lg mx-auto my-2 text-sm text-center">
          We are here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-300 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-white/70 dark:bg-neutral-900/70 text-black dark:text-white placeholder:text-neutral-600 dark:placeholder:text-neutral-400"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-300 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-white/70 dark:bg-neutral-900/70 text-black dark:text-white placeholder:text-neutral-600 dark:placeholder:text-neutral-400"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 w-full rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default MusicSchoolContactUs;

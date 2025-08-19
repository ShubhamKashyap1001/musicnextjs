import React from 'react'
import { Spotlight } from './ui/Spotlight'
import Link from 'next/link';
import { Button } from './ui/moving-border';

function HeroSection() {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />

      {/* Content */}
      <div className="p-5 relative z-10 w-full text-center">
        <h1 className="mb-6 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>
        <p className="mt-4 mb-8 font-normal text-lg md:text-xl text-neutral-300 max-w-xl mx-auto">
          Dive into our comprehensive music courses and transform your musical journey today. 
          Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.
        </p>
        <div className="mt-6">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore courses
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-44"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            d="M0,192 C480,320 960,64 1440,192 L1440,320 L0,320 Z"
            fill="url(#fadeGradient)"
          />
          <defs>
            <linearGradient id="fadeGradient" x1="0" y1="0" x2="0" y2="1">
              {/* Upar black se transparent fade (HeroSection bg) */}
              <stop offset="0%" stopColor="#000000" stopOpacity="1" />
              <stop offset="100%" stopColor="#111827" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default HeroSection

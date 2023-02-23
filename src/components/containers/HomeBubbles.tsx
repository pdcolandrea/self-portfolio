import * as React from 'react';

import GithubButton from '@/components/logos/Github';
import LinkedinLogo from '@/components/logos/Linkedin';

export function WelcomeStatement() {
  return (
    <div className='relative w-full basis-2/3 rounded-lg bg-gray-100 p-8 pr-60 '>
      <div className='pointer-events-none absolute top-0 -left-4 h-80 w-80 animate-blob rounded-full bg-purple-300 opacity-80 mix-blend-multiply blur-xl filter' />
      <div className='animation-delay-2000 pointer-events-none absolute left-56 top-0 h-80 w-80 animate-blob rounded-full bg-yellow-300 opacity-80 mix-blend-multiply blur-xl filter' />
      <div className='animation-delay-4000 pointer-events-none absolute -bottom-8 left-20 h-80 w-80 animate-blob rounded-full bg-pink-300 opacity-80 mix-blend-multiply blur-xl' />
      <h1 className='text-5xl font-semibold leading-relaxed'>
        Hi, I'm Paul. Not the monkey, just a guy who loves software :){' '}
      </h1>
      <p className='text-lg'>
        At the moment, I am thoroughly enjoying my work in the fintech industry.
        The dynamic nature of the field presents various challenges, which I
        find stimulating and rewarding to overcome.
      </p>

      <div className='absolute bottom-6 flex flex-row content-center items-center justify-center '>
        <button
          type='button'
          className='mr-2  rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700'
        >
          Resume
        </button>

        <LinkedinLogo />
        <GithubButton />
      </div>
    </div>
  );
}

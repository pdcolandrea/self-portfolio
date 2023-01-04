import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <header className='row flex justify-between px-4 pt-4 pb-2'>
          <div className='row flex items-center'>
            <span className='mr-1 h-4 w-4 rounded-full bg-yellow-400' />
            <p>PAUL</p>
          </div>

          <nav>
            <span>Home</span>
            <span>Resume</span>
            <span>Spotify</span>
          </nav>
        </header>

        <section className='bg-white'>
          <div className='grid max-h-96 max-w-full grid-cols-2 gap-4 px-4 pb-4'>
            <div className='col-span-2 flex h-96 overflow-hidden'>
              <div className='relative w-full basis-3/5 rounded-lg bg-gray-100 p-6 pr-60'>
                <div className='absolute top-0 -left-4 h-80 w-80 animate-blob rounded-full bg-purple-300 opacity-80 mix-blend-multiply blur-xl filter'></div>
                <div className='animation-delay-2000 absolute left-56 top-0 h-80 w-80 animate-blob rounded-full bg-yellow-300 opacity-80 mix-blend-multiply blur-xl filter'></div>
                <div className='animation-delay-4000 absolute -bottom-8 left-20 h-80 w-80 animate-blob rounded-full bg-pink-300 opacity-80 mix-blend-multiply blur-xl'></div>
                <h1 className='text-5xl font-bold leading-relaxed'>
                  Hi, I'm Paul. Not the monkey, just a guy who loves software :){' '}
                </h1>
              </div>
              <div className='ml-4 flex-1 rounded-lg bg-yellow-500'></div>
            </div>
            <div className='h-96 rounded-lg bg-purple-500'>
              <h1>Software Engineer @ ByteFederal</h1>
            </div>
            <div className='h-96 rounded-lg bg-yellow-200'>
              <h1>Contact Me</h1>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

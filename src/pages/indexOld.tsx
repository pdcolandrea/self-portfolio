import Image from 'next/image';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import GithubButton from '@/components/logos/Github';
import LinkedinLogo from '@/components/logos/Linkedin';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='h-screen'>
        {/* <header className='row flex justify-between px-4 pt-4 pb-2'>
          <div className='row flex items-center'>
            <span className='mr-1 h-4 w-4 rounded-full bg-yellow-400' />
            <p>PAUL</p>
          </div>

          <nav>
            <span>Home</span>
            <span>Resume</span>
            <span>Spotify</span>
          </nav>
        </header> */}

        <section className='h-full'>
          <div className='grid min-h-full max-w-full grid-cols-2 gap-4 px-4 py-4'>
            <div className='col-span-2 flex  overflow-hidden'>
              <div className='relative w-full basis-2/3 rounded-lg bg-gray-100 p-8 pr-60 '>
                <div className='pointer-events-none absolute top-0 -left-4 h-80 w-80 animate-blob rounded-full bg-purple-300 opacity-80 mix-blend-multiply blur-xl filter' />
                <div className='animation-delay-2000 pointer-events-none absolute left-56 top-0 h-80 w-80 animate-blob rounded-full bg-yellow-300 opacity-80 mix-blend-multiply blur-xl filter' />
                <div className='animation-delay-4000 pointer-events-none absolute -bottom-8 left-20 h-80 w-80 animate-blob rounded-full bg-pink-300 opacity-80 mix-blend-multiply blur-xl' />
                <h1 className='text-5xl font-semibold leading-relaxed'>
                  Hi, I'm Paul. Not the monkey, just a guy who loves software :){' '}
                </h1>
                <p className='text-lg'>
                  Currently enjoy working in fintech and encountering the
                  challenges that come alongside it.
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

              <div className='relative ml-4 flex-1 rounded-lg bg-yellow-500'>
                <Image
                  src='/images/paulc.jpg'
                  objectFit='contain'
                  fill
                  alt='self picture'
                />
              </div>
            </div>

            <div className='rounded-lg bg-purple-500 p-8 text-white'>
              <h1 className='text-2xl'>Software Engineer</h1>
              <p className='font-light'>ByteFederal Inc.</p>

              <Image
                src='/images/screenshot.png'
                alt='screenshot'
                width={180}
                height={180}
              />
            </div>

            <div className='relative rounded-lg bg-gray-600 p-8 text-white'>
              <h1 className='text-2xl'>Contact Me</h1>
              <p className='font-light'>
                Shoot me an email anytime at{' '}
                {/* <a className='' href='mailto:colandrea@gmail.com'>
                  colandreapaul@gmail.com
                </a> */}
                <UnderlineLink href='mailto:colandreapaul@gmail.com'>
                  colandreapaul@gmail.com
                </UnderlineLink>
              </p>
              <Image
                src='/images/monkey.png'
                height={180}
                width={180}
                className='absolute right-1 top-0'
                alt='monkey'
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

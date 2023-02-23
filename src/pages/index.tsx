import Image from 'next/image';
import * as React from 'react';

import { WelcomeStatement } from '@/components/containers/HomeBubbles';
import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='mx-auto h-screen max-w-screen-xl'>
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

        <section className='flex h-screen flex-row flex-wrap p-3'>
          <div className='flex animate-ping overflow-hidden'>
            <WelcomeStatement />

            <div className='relative ml-4 flex flex-1 rounded-lg bg-yellow-500'>
              <Image
                src='/images/paulc.jpg'
                objectFit='cover'
                fill
                alt='self picture'
                className='rounded-lg'
              />
            </div>
          </div>

          <div className='mt-4 flex flex-1'>
            <div className='w-full rounded-lg bg-purple-500 p-8 text-white'>
              <h1 className='text-2xl'>Software Engineer</h1>
              <p className='font-light'>ByteFederal Inc.</p>

              {/* <Image
                src='/images/screenshot.png'
                alt='screenshot'
                width={180}
                height={180}
              /> */}
            </div>

            <div className='relative ml-4 w-full rounded-lg bg-gray-600 p-8 text-white'>
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

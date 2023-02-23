import Image from 'next/image';
import React from 'react';

const LINKEDIN_URL = 'https://www.linkedin.com/in/pdcolandrea/';
export default function LinkedinLogo() {
  return (
    <a href={LINKEDIN_URL}>
      <Image
        src='/images/linkedin.png'
        alt='linkedin'
        width={40}
        height={40}
        className='mr-2 rounded-full mix-blend-multiply'
      />
    </a>
  );
}

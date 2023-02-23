import Image from 'next/image';
import React from 'react';

const GITHUB_URL = 'https://github.com/pdcolandrea';
export default function GithubButton() {
  return (
    <a href={GITHUB_URL}>
      <Image
        src='/images/github.png'
        alt='github'
        width={40}
        height={40}
        className='rounded-full'
      />
    </a>
  );
}

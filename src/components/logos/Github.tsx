import Image from 'next/image';
import React from 'react';

export default function GithubButton() {
  const onImagePressed = () => {
    // do something soon
  };

  return (
    <div onClick={onImagePressed}>
      <Image
        src='/images/github.png'
        alt='github'
        width={40}
        height={40}
        className='rounded-full'
      />
    </div>
  );
}

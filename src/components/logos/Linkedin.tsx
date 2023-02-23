import Image from 'next/image';
import React from 'react';

export default function LinkedinLogo() {
  return (
    <div>
      <Image
        src='/images/linkedin.png'
        alt='linkedin'
        width={40}
        height={40}
        className='mr-2 rounded-full mix-blend-multiply'
      />
    </div>
  );
}

import { UserButton } from '@clerk/nextjs';
import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <div className='flex justify-between items-center p-5'>
      <Image src='/logo.jpeg' width={40} height={40} alt="Logo" />
      <UserButton />
    </div>
  );
}

export default Header;

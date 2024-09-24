import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className='flex justify-between p-5 shadow-sm'>
    <Image src = {'/logo.jpeg'} width={150} height={100}/>
    <button>Get Started</button>
    </div>
  )
}

export default Header
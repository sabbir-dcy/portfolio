import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-24 flex justify-between items-center'>
      <div className='w-12 h-8 bg-black text-white font-medium rounded-full flex justify-center items-center'>
        SA
      </div>
      <div className='space-x-12'>
        <Link href={'/'}>Home</Link>
        <Link href={'/'}>Skills</Link>
        <Link href={'#projects'}>Projects</Link>
        <Link href={'#contact'}>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
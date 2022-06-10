import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-24 flex justify-between items-center'>
      <div className='w-10 h-10 border border-black font-medium rounded-full flex justify-center items-center'>
        SA
      </div>
      <div className='space-x-12'>
        <Link href={'/'}>Home</Link>
        <Link href={'#skills'}>Skills</Link>
        <Link href={'#projects'}>Projects</Link>
        <Link href={'#contact'}>Contact</Link>
        <Link href={'/about'}>About</Link>
      </div>
    </div>
  )
}

export default Navbar
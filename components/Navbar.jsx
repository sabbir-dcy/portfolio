import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Navbar = () => {
  const router = useRouter()
  const { pathname } = router
  console.log()
  return (
    <div className='h-24 flex justify-between items-center'>
      <div className='w-10 h-10 border border-black font-medium rounded-full flex justify-center items-center'>
        SA
      </div>
      <div className='space-x-12'>
        <Link href={'/'} ><a className={`${pathname === '/' && ' border-b-2 border-black'} `}>Home</a></Link>
        <Link href={'/about'}><a className={`${pathname === '/about' && ' border-b-2 border-black'} `}>About</a></Link>
      </div>
    </div>
  )
}

export default Navbar
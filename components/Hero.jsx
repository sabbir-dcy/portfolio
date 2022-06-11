import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <motion.div className='grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] items-center justify-items-center relative gap-y-32' initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .2, ease: "easeOut" }}>
      <div className='text-center lg:text-left'>
        <h1 className='text-lg mb-2 bg-black text-white px-[3px] w-fit '>Sabbir Ahmed</h1>
        <h2 className='font-ogg text-7xl '>Full Stack Developer</h2>
        <div className='mt-5 space-x-2'>
          <Link href='#contact'><button className='bg-black text-white w-36 py-3 hover:bg-zinc-800'>hire</button></Link>
          <Link href='/resume' ><button className='bg-zinc-100 w-36 py-3 font-medium hover:bg-zinc-200'>resume</button></Link>
        </div>
      </div>
      <div className='md:w-[400px] bg-black text-white p-12 relative'>
        <div className='group absolute w-[100px] h-[100px] md:w-[140px] md:h-[140px] md:-top-20 md:-left-20 -top-12 -right-12 transition-all ease-out duration-500 hover:w-[200px] hover:h-[200px] overflow-hidden rounded-full'>
          <Image className='grayscale group-hover:grayscale-0 delay-300' src='/image/dp.png' alt='dp' layout='fill' />
          <div className='w-full h-full bg-black absolute -left-full group-hover:left-full transition-all duration-[800ms]'></div>
        </div>
        <h2 className='text-4xl font-ogg mb-2'>Hi!</h2>
        <p>I am Sabbir Ahmed, a mern stack developer with 1 year of experince in web development field. My area of expertise are react, node, tailwind, firebase and mongodb</p>
      </div>
    </motion.div>
  )
}

export default Hero
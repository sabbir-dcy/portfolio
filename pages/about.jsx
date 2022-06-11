import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion";
const about = () => {

  return (
    <motion.div className='w-3/5 mx-auto' initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .2, ease: "easeOut" }}>
      <h2 className='relative font-garet text-4xl before:content-[""] before:w-20 before:h-[2px] before:bg-purple-400 before:absolute before:-bottom-2'>Sabbir Ahmed</h2>
      <p className='mt-4'>I am Sabbir Ahmed. A mern-stack developer with 1 year of development experince with 5 projects. I have been dedicated myself in this field to make creative websites to build a better experience for online world.</p>

      <h3 className='relative text-2xl font-garet mt-8 before:content-[""] before:w-12 before:h-[2px] before:bg-purple-400 before:absolute before:-bottom-2'>Backgroud</h3>
      <p className='mt-4'>country : Bangladesh</p>
      <p>education : Brac University</p>
      <p>linkedIn : <Link href='https://www.linkedin.com/in/sabbir-ahmed-sa/'><a target='_blank' className='underline'>sabbir-ahmed-sa</a></Link></p>
      <p>github : <Link href='https://github.com/sabbir-dcy?tab=repositories'><a target='_blank' className='underline'>sabbir-dcy</a></Link></p>
    </motion.div >
  )
}
export default about
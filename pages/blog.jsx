import React from 'react'
import { motion } from 'framer-motion'
const Blog = () => {
  return (
    <motion.div><h2 className='text-7xl font-ogg' initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .2, ease: "easeOut" }}>
      Coming Soon ...</h2></motion.div>
  )
}

export default Blog
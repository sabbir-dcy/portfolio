import React from 'react'
import Navbar from './Navbar'

const Layer = ({ children }) => {
  return (
    <div className='w-4/5 mx-auto'>
      <Navbar></Navbar>
      {children}
    </div>
  )
}

export default Layer
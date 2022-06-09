import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  return (
    <div id='projects' className='my-24'>
      <h2 className='mb-16 font-ogg text-7xl text-center'>Sample Projects</h2>
      <div className="mt-12 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        <div>
          <h2 className='text-4xl font-ogg border-l-4 ml-2 px-2 border-black'>Tsushima Production</h2>
          <div className='bg-purple-200 w-fit p-3'>
            <div className='w-[320px] h-[400px] relative'>
              <Image src='/image/project1_ss.png' layout='fill' alt='project2' />
            </div>
          </div>
          <Link href='https://tsushima-corporation.web.app'><a target='_blank'><button className='bg-black text-white w-32 p-3 block mx-auto mt-2'>visit</button></a></Link>
        </div>
        <div className=' -translate-y-8'>
          <h2 className='text-4xl font-ogg border-l-4 ml-2 px-2 border-black'>Offshore Stockroom</h2>
          <div className='bg-orange-200 w-fit p-3'>
            <div className='w-[320px] h-[400px] relative'>
              <Image src='/image/project2_ss.png' layout='fill' alt='project2' />
            </div>
          </div>
          <Link href='https://offshore-stockroom.web.app'><a target='_blank'><button className='bg-black text-white w-32 p-3 block mx-auto mt-2'>visit</button></a></Link>
        </div>
        <div className=' -translate-y-16'>
          <h2 className='text-4xl font-ogg border-l-4 border-black ml-2 px-2'>Font Bey</h2>
          <div className='bg-blue-200 w-fit p-3' >
            <div className='w-[320px] h-[400px] relative'>
              <Image src='/image/project3_ss.png' layout='fill' alt='project2' />
            </div>
          </div>
          <Link href='https://fontbey.netlify.app'><a target='_blank'><button className='bg-black text-white w-32 p-3 block mx-auto mt-2'>visit</button></a></Link>
        </div>

      </div>
    </div>
  )
}

export default Projects

/* <div className='my-20 lg:mt-64'>
      <h2 className='font-ogg text-7xl text-center'>Sample Projects</h2>
      <div className="mt-12 gap-8 grid grid-cols-1 lg:grid-cols-2">
        <div className='overflow-hidden lg:h-[600px] h-[400px]  bg-zinc-100 relative'>
          <div className='w-[320px] h-[666px] lg:w-[480px] lg:h-[999px] absolute hover:bottom-0 lg:-bottom-[400px] -bottom-[265px] transition-all duration-1000 ease-linear'>
            <Image src='/image/project1.png' layout='fill' alt='project2' />
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-ogg '>Tsushima Production</h2>
          <p>
            website of a bike/bycicle parts manufacturer comapany. Website contains home, dashboard and blog page. any user on the internet can access the website and see the parts on home page. however, parts can be ordered only after login.
          </p>
          <Link href="https://tsushima-corporation.web.app/"><a target='_blank'><button className='bg-black text-white w-24 py-2 mt-2'>visit site</button></a></Link>
        </div>
      </div>
    </div> */
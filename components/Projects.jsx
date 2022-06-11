import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineArrowRight } from "react-icons/ai";

const Projects = () => {
  const projects = [{
    name: 'tsushima-production',
    title: 'manufacturer website',
    thumb: '/image/project1_ss.png',
    short_desc: 'A website of a bicycle parts manufacturing company. ',
    link: 'https://tsushima-corporation.web.app',
    bg: 'bg-purple-200',
    _id: '001'
  }, {
    name: 'offshore-stockroom', title: 'warehouse management website',
    thumb: '/image/project2_ss.png',
    short_desc: 'A website of warehouse management company',
    link: 'https://offshore-stockroom.web.app',
    bg: 'bg-orange-200', _id: '002'
  }, {
    name: 'font-bey', title: 'font searching website',
    thumb: '/image/project3_ss.png',
    short_desc: 'A website for searching different fonts for web',
    link: 'https://fontbey.netlify.app/',
    bg: 'bg-blue-200', _id: '003'
  }]

  return (
    <div id='projects' className='my-36' >
      <h2 className='mb-24 font-ogg text-7xl text-center'>Sample Projects</h2>
      <div className="mt-12 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {
          projects.map((project) => <div key={project._id} className='relative'>
            <h2 className='text-4xl font-ogg border-l-4 ml-2 mb-2 px-2 border-black'>{project.name}</h2>

            <div className={`group w-fit relative overflow-hidden`}>
              <div className='w-[320px] h-[400px] relative transition-all ease-out duration-300 cursor-pointer border border-black '>
                <Image src={project.thumb} layout='fill' alt='project2' />
              </div>
              <div className='bg-black text-white absolute top-full h-full w-full group-hover:top-0 transition-all ease-out duration-500 p-8 gap-y-4 flex flex-col'>
                <h2>{project.title}</h2>
                <p>{project.short_desc}</p>
                <div className='flex justify-center mt-8'>
                  <Link href={`/projects/${project.name}`}>
                    <button className='w-12 h-12 rounded-full border border-white text-2xl flex justify-center items-center mt-8'><AiOutlineArrowRight /></button>
                  </Link>
                </div>
              </div>
            </div>
          </div>)
        }
      </div>
    </div >
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
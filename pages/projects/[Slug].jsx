import React from 'react'
import Link from 'next/link'
import { AiOutlineArrowRight } from "react-icons/ai";

const Slug = ({ data: project }) => {
  return (
    <div className='grid grid-cols-2 my-20 '>
      <div>
        <h2 className='text-7xl font-ogg'>{project.name}</h2>
        <h3 className='text-2xl'>{project.title}</h3>
        <Link href={project.link}><a target='_blank'>
          <button className='w-12 h-12 rounded-full border border-black text-2xl flex justify-center items-center mt-8'><AiOutlineArrowRight /></button>
        </a></Link>
      </div>
      <div className=''>
        <h2 className='text-3xl mb-4'>Project Details</h2>
        {project.desc.map((feature, index) => <div key={index}>
          <p className='mt-2'>
            {feature.feature}
          </p>
        </div>)}
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const name = context.query.Slug
  const res = await fetch(`http://portfolio-three-zeta-22.vercel.app/api/projects/?name=${name}`)
  const data = await res.json()
  return {
    props: { data },

  }
}

export default Slug
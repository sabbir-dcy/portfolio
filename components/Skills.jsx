import React from 'react'
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiFirebase, SiTailwindcss, SiFramer } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

import { DiHeroku } from "react-icons/di";
const Skills = () => {
  return (
    <div id='skills'>
      <h2 className='text-5xl font-ogg text-center'>Skills</h2>
      <div className='grid grid-cols-2 lg:grid-cols-4 justify-items-center gap-8'>
        <div className='hover:text-blue-500 cursor-pointer transition-all ease-out flex flex-col items-center'>
          <FaReact className='text-5xl '></FaReact>
          <h2>React</h2>
        </div>
        <div className='hover:text-green-600 cursor-pointer transition-all ease-out flex flex-col items-center'>
          <FaNodeJs className='text-5xl'></FaNodeJs>
          <h2>Nodejs</h2>
        </div>
        <div className='hover:text-green-600 cursor-pointer transition-all ease-out flex flex-col items-center'>
          <DiMongodb className='text-5xl'></DiMongodb>
          <h2>MongoDb</h2>
        </div>
        <div className='hover:text-yellow-400 cursor-pointer transition-all ease-out flex flex-col items-center'>
          <SiFirebase className='text-5xl'></SiFirebase>
          <h2>Firebase</h2>
        </div>
        <div className='hover:text-teal-500 cursor-pointer transition-all ease-out flex flex-col items-center'>
          <SiTailwindcss className='text-5xl'></SiTailwindcss>
          <h2>Tailwind</h2>
        </div>
        <div className='bg-gradient-to-r hover:text-purple-700 cursor-pointer transition-all ease-out flex flex-col items-center'>
          <SiFramer className='text-5xl'></SiFramer>
          <h2>Framer motion</h2>
        </div>
        <div className='bg-gradient-to-r hover:text-orange-400 cursor-pointer transition-all ease-out flex flex-col items-center'>
          <AiFillGithub className='text-5xl'></AiFillGithub>
          <h2>Git</h2>
        </div>
        <div className='bg-gradient-to-r hover:text-purple-300 cursor-pointer transition-all ease-out flex flex-col items-center'>
          <DiHeroku className='text-5xl'></DiHeroku>
          <h2>Heroku</h2>
        </div>
      </div>
    </div>
  )
}

export default Skills
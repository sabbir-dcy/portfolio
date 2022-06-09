import React from 'react'
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiFirebase } from "react-icons/si";

const Skills = () => {
  return (
    <div id='skills'>
      <h2 className='text-5xl font-ogg text-center'>Skills</h2>
      <div className='grid grid-cols-2 lg:grid-cols-4 justify-items-center'>
        <div>
          <FaReact className='text-5xl'></FaReact>
          <h2>React</h2>
        </div>
        <div>
          <FaNodeJs className='text-5xl'></FaNodeJs>
          <h2>Nodejs</h2>
        </div>
        <div>
          <DiMongodb className='text-5xl'></DiMongodb>
          <h2>MongoDb</h2>
        </div>
        <div>
          <SiFirebase className='text-5xl'></SiFirebase>
          <h2>Firebase</h2>
        </div>
      </div>
    </div>
  )
}

export default Skills
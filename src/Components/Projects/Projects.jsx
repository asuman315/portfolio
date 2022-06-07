import React from 'react'
import ProjectOne from './ProjectOne'
import ProjectTwo from './ProjectTwo'

const Projects = () => {
  return (
    <div className='mt-16 px-6'>
      <h2 className='text-center font-bold text-3xl text-primary-2'>
        Projects
      </h2>
      <ProjectOne />
      <ProjectTwo />
    </div>
  );
}

export default Projects
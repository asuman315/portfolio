import React from 'react';
import ProjectOne from './ProjectOne';
import ProjectTwo from './ProjectTwo';

const Projects = () => {
  return (
    <div className='mt-16 px-6'>
      <h2 className='text-center font-bold text-3xl text-primary-2'>
        Projects
      </h2>
      <div className='md:grid md:grid-cols-autofill-lg gap-8 max-w-6xl mx-auto mb-12'>
        <ProjectTwo />
        <ProjectOne />
      </div>
    </div>
  );
};

export default Projects;

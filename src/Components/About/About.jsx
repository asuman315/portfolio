import React from 'react';
import Intro from './Intro';
import Skills from './Skills';

const About = () => {
  return (
    <section className='max-w-[1120px] mx-auto mt-16'>
      <div className=''>
        <h3 className='text-center mt-4 font-bold tracking-wide'>ABOUT</h3>
        <h2 className='text-center font-bold text-3xl text-primary-2'>
          Personal Info
        </h2>
      </div>
      <div className='md:flex'>
        <Intro />
        <Skills />
      </div>
    </section>
  );
};

export default About;

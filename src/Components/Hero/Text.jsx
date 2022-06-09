import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';

const Text = () => {
  return (
    <div className='relative z-10 text[red] w-screen h-screen flex flex-col items-center justify-center'>
      <div>
        <p className='text-1xl font-bold tracking-wide text-white'>
          Hello There!
        </p>
        <h2 className='text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-white my-2 font-["Old_Standard_TT"]'>
          I am <span className='text-secondary-1'>Asuman Ssendegeya</span>
        </h2>
        <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-white font-["Old_Standard_TT"]'>
          I am a <span className='text-secondary-1'>Software Developer</span>
        </h1>
      </div>
      <div>
        <button className='bg-primary- mt-8 py-3 px-12 uppercase tracking-wide font-medium border-[1px] border-primary-2 text-primary-2'>
          <Link to='Projects' smooth={true} offset={-80} duration={500}>
            my projects
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Text
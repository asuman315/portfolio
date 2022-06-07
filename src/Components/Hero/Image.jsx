import React from 'react'
import largeImage from '../../Assets/laptop-large.jpg'
import smallImage from '../../Assets/laptop-small.jpg'

const Image = () => {
  return (
    <div className='absolute bg-[#1c1917]'>
      <img
        src={smallImage}
        alt='hero'
        className='md:hidden h-screen w-screen object-cover mix-blend-overlay'
      />
      <img
        src={largeImage}
        alt='hero'
        className='hidden md:block h-screen w-screen object-cover mix-blend-overlay'
      />
    </div>
  );
}

export default Image
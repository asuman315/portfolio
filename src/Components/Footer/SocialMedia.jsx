import React from 'react';

const linkedin = require('../../Assets/Linkedin.png');
const twitter = require('../../Assets/twitter.png');
const github = require('../../Assets/github.png');

const SocialMedia = () => {
  return (
    <div className='flex mx-auto w-[fit-content] mt-20 mb-6'>
      <a
        href='https://www.linkedin.com/in/ssendegeya-asuman'
        target='_blank'
        rel='noreferrer'>
        <img src={linkedin} alt='Linkedin icon' className='w-8 rounded mr-2' />
      </a>
      <a
        href='https://twitter.com/asumandeveloper'
        target='_blank'
        rel='noreferrer'>
        <img src={twitter} alt='Linkedin icon' className='w-8 rounded mx-6' />
      </a>
      <a href='https://github.com/asuman315' target='_blank' rel='noreferrer'>
        <img
          src={github}
          alt='Linkedin icon'
          className='w-8 rounded-2xl mr-2'
        />
      </a>
    </div>
  );
};

export default SocialMedia;

import React from 'react';
import Flip from 'react-reveal/Flip';

const linkedin = require('../../Assets/Linkedin.png');
const twitter = require('../../Assets/twitter.png');
const github = require('../../Assets/github.png');

const SocialMedia = () => {
  return (
    <div className='flex mx-auto w-[fit-content] mt-20 mb-6'>
      <Flip left>
      <a
        href='https://www.linkedin.com/in/ssendegeya-asuman'
        target='_blank'
        rel='noreferrer' className='pg-primary-2 bottom-2'>
        <img src={linkedin} alt='Linkedin icon' className='w-8 rounded mr-2' />
      </a>
      </Flip>
      <Flip top>
      <a
        href='https://twitter.com/asumandeveloper'
        target='_blank'
        rel='noreferrer'>
        <img src={twitter} alt='Linkedin icon' className='w-8 rounded mx-6' />
      </a>
      </Flip>
      <Flip right>
      <a href='https://github.com/asuman315' target='_blank' rel='noreferrer'>
        <img
          src={github}
          alt='Linkedin icon'
          className='w-8 rounded-2xl mr-2'
        />
      </a>
      </Flip>
    </div>
  );
};

export default SocialMedia;

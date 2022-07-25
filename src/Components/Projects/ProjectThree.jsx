import React from 'react';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';

const ProjectOne = () => {
  const appImage = require('../../Assets/cafeteriase.gif');
  const technologies = [
    'Tailwind CSS',
    'React',
    'NextJs',
    'Typescript',
    'GraphQL',
    'Redux',
    'Strapi',
  ];
  return (
    <div className='mt-10 bg-primary-3 px-5 pt-3 rounded-md shadow-md'>
      <div className='relative mb-3'>
        <Slide right>
          <h3 className='font-bold capitalize tracking-wider text-center text-primary-2 pb-3 lg:cursor-pointer'>
            <a
              href='https://cafeteriase.netlify.app/'
              target='_blank'
              rel='noreferrer'>
              {' '}
              online ordering web application for a modern cafe
            </a>
          </h3>
        </Slide>
        <div className='bg-primary-2 h-[2px] w-[30%] ml-[35%]'></div>
      </div>
      <Zoom bottom>
        <img src={appImage} alt='gif' className='lg:h-[350px] w-full mb-3' />
      </Zoom>
      <div className='leading-8 tracking-wide'>
        <Slide bottom>
          <p className='mb-4'>
            The user can select from a variety of meals and drinks that belong
            to a variety of categories. <br />
            Then the user can add the selected meal to the cart. <br />
            The user can edit the quantity of the selected meal within the cart. <br />
          </p>
        </Slide>
        {/* <Slide bottom>
          <p>
            All the user has to do is to enter their height and weight. <br />{' '}
            Inorder to provide a better user experince, the user can choose the
            units they are comfortable with - that is meters(m) or feet(ft) for
            height. For weight, its either pounds(Ibs) or kilograms(kgs).
          </p>
        </Slide> */}
      </div>
      <div className='flex flex-col mt-6'>
        <Rotate top right>
          <a
            href='https://cafeteriase.netlify.app/'
            target='_blank'
            rel='noreferrer'>
            <button className='uppercase border-none outline-none py-3 mt-3 tracking-widest font-bold text-lg rounded bg-primary-2 w-full'>
              see live app
            </button>
          </a>
        </Rotate>
        {/* <Slide left>
          <a
            href='https://youtu.be/xX2YajoT4z8'
            target='_blank'
            rel='noreferrer'>
            <button className='uppercase border-none outline-none py-3 mt-3 tracking-widest font-bold text-lg rounded bg-primary-2 w-full'>
              short demo video
            </button>
          </a>
        </Slide> */}
        <Rotate bottom left>
          <a
            href='https://github.com/asuman315/cafeterias'
            target='_blank'
            rel='noreferrer'>
            {' '}
            <button className='uppercase border-[1px] outline-none py-3 mt-3 tracking-widest font-bold text-lg rounded w-full'>
              code repo
            </button>
          </a>
        </Rotate>
      </div>
      <Zoom left>
        <div>
          <h3 className='text-center pt-5 pb-2 font-bold text-primary-2'>
            Technologies used in the project
          </h3>
          <div>
            {technologies.map((tech, index) => (
              <button
                key={index}
                className='bg-primary-1 text-white text-sm font-bold mr-3 px-3 mb-3 rounded py-1 cursor-none'>
                {tech}
              </button>
            ))}
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default ProjectOne;

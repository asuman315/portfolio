import React from 'react';

const ProjectOne = () => {
  const appImage = require('../../Assets/bmi-app-gif.gif');
  const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'React-router',
    'useContext',
  ];
  return (
    <div className='mt-10 bg-primary-3 px-5 pt-3 rounded-md shadow-md'>
      <div className='relative mb-3'>
        <h3 className='font-bold text-center text-primary-2 pb-3 lg:cursor-pointer'>
          <a
            href='https://asuman315.github.io/get-bmi'
            target='_blank'
            rel='noreferrer'>
            {' '}
            BMI Application
          </a>
        </h3>
        <div className='bg-primary-2 h-[2px] absolute top-8 w-[16%] left-[42%]'></div>
      </div>
      <img src={appImage} alt='gif' className='lg:h-[350px] w-full mb-3' />
      <div className='leading-8 tracking-wide'>
        <p className='mb-4'>
          Based on the user's height
          and weight, this application will return; <br />
          - BMI (Body Mass Index) <br />
          - BMI category (e.g Underweight, Normal, Overweight, Obese) <br />-
          And Ideal Weight. This depends on the user's height. The ideal weight
          is returned in units that the user chose - i.e pounds or kilogrammes.
        </p>
        <p>
          All the user has to do is to enter their height and weight. <br />{' '}
          Inorder to provide a better user experince, the user can choose the
          units they are comfortable with - that is meters(m) or feet(ft) for
          height. For weight, its either pounds(Ibs) or kilograms(kgs).
        </p>
      </div>
      <div className='flex flex-col mt-6'>
        <a
          href='https://asuman315.github.io/get-bmi'
          target='_blank'
          rel='noreferrer'>
          <button className='uppercase border-none outline-none py-3 mt-3 tracking-widest font-bold text-lg rounded bg-primary-2 w-full'>
            see live app
          </button>
        </a>
        <a href='https://youtu.be/xX2YajoT4z8' target='_blank' rel='noreferrer'>
          <button className='uppercase border-none outline-none py-3 mt-3 tracking-widest font-bold text-lg rounded bg-primary-2 w-full'>
            short demo video
          </button>
        </a>
        <a
          href='https://github.com/asuman315/get-bmi/tree/master'
          target='_blank'
          rel='noreferrer'>
          {' '}
          <button className='uppercase border-[1px] outline-none py-3 mt-3 tracking-widest font-bold text-lg rounded w-full'>
            code repo
          </button>
        </a>
      </div>
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
    </div>
  );
};

export default ProjectOne;

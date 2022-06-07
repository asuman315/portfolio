import React from 'react';

const ProjectOne = () => {
  const appImage = require('../../Assets/bmi-app-gif.gif');
  const technologies = ['HTML5', 'CSS3', 'JavaScript', 'React', 'React-router', 'useContext'];
  return (
    <div className='mt-10 bg-primary-3 px-5 py-5 rounded-md shadow shadow-primary-2 max-w-xl'>
      <img src={appImage} alt='gif' className='pb-6 h-[250px]' />
      <h3 className='font-bold text-center pt-3 text-primary-2 border-t-2 pb-2'>
        BMI Application
      </h3>
      <div className='leading-8 tracking-wide'>
        <p className='mb-4'>
          This web application returns a BMI value based on the user's height
          and weight; <br />
          - BMI (Body Mass Index) <br />
          - BMI category (e.g Underweight, Normal, Overweight, Obese) <br />-
          And Ideal Weight. This depends on the user's height. The ideal weight
          is returned in units that the user chose - i.e pounds or kilogrammes.
        </p>
        <p>
          All the user has to do is enter their height and weight. <br />{' '}
          Inorder to provide a better user experince, the user can choose the
          units they are comfortable with - that is meters(m) or feet(ft) for
          height. For weight - either pounds(Ibs) or kilograms(kgs).
        </p>
      </div>
      <div className='flex flex-col'>
        <button className='uppercase border-none outline-none py-3 mt-3 tracking-widest font-bold text-lg rounded bg-primary-2'>see live app</button>
        <button className='uppercase border-[1px] outline-none py-3 mt-3 tracking-widest font-bold text-lg rounded '>visit code repo</button>
      </div>
      <div>
       <h3 className='text-center pt-5 pb-2 font-bold'>Technologies used in the project</h3>
       <div>
         {technologies.map((tech, index) => (
           <button key={index} className='bg-white text-primary-3 text-sm font-bold mr-3 px-3 mb-3 rounded py-1'>
             {tech}
           </button>
         ))}
       </div>
      </div>
    </div>
  );
};

export default ProjectOne;

import React from 'react'

const ProjectTwo = () => {
   //const appImage = require('../../Assets/.gif');
  return (
    <div className='mt-10 bg-primary-3 px-5 py-5 rounded-md shadow shadow-primary-2 max-w-xl mb-12'>
      {/* <img src={appImage} alt='gif' /> */}
      <h3 className='font-bold text-center pt-3 text-primary-2 border-b-2'>
        Headless Ecommerce Store
      </h3>
     
      <div className='flex flex-col'>
        <button className='uppercase border-none outline-none py-3 mt-3 tracking-widest font-bold text-lg rounded bg-primary-2'>
          see live app
        </button>
        <button className='uppercase border-[1px] outline-none py-3 mt-3 tracking-widest font-bold text-lg rounded '>
          visit code repo
        </button>
      </div>
    </div>
  );
}

export default ProjectTwo
import React from 'react';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className=' p-6 flex flex-col justify-center bg-primary-1 text-white font-medium w-[80%] mx-auto mt-8 rounded md:w-full'>
        <input
          type='text'
          placeholder='Name'
          className='rounded-sm mb-4 py-2 px-2 bg-primary-4'
          autoComplete='on'
          required
        />
        <input
          type='text'
          placeholder='Email'
          className='rounded-sm mb-4 py-2 px-2 bg-primary-4'
          required
        />
        <textarea
          placeholder='Type your message here'
          className=' px-2 py-2 rounded-sm bg-primary-4'
          rows='5'
          required
        />
        <button
          type='submit'
          className='text-left bg-primary-2 w-[fit-content] py-2 px-4 mt-4 rounded-sm font-bold text-primary-1'>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;

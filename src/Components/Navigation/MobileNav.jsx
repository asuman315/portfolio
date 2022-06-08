import React from 'react';
import { useState } from 'react';

const MobileNav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const listItems = [
    {
      name: 'Home',
    },
    {
      name: 'About'
    },
    {
      name: 'Projects',
    },
    {
      name: 'Contact',
    },
  ];
  return (
    <div className=' md:hidden'>
      <div className='absolute z-40 flex w-full justify-between px-4 py-5 bg-primary-3 items-center'>
        <h3 className='font-extrabold text-4xl tracking-widest font-["Dancing_Script"]'>
          A<span className='text-secondary-1'>S</span>
        </h3>
        <HamurgerMenu
          isMobileNavOpen={isMobileNavOpen}
          setIsMobileNavOpen={setIsMobileNavOpen}
        />
      </div>
      <ul
        className={`fixed flex flex-col items-center h-screen right-0 top-20 p-4 z-20 duration-300 ease-in-out pt-10 bg-primary-3 opacity-80 ${
          isMobileNavOpen ? 'left-0' : 'left-[108%]'
        }`}>
       
       {  listItems.map((listItem, index) => {
        const { name } = listItem;
          return (
            <li key={index} className='flex items-center text-xl mb-12 font-bold pb-2 text-white uppercase'>
              {name}
            </li>
          );
       } ) }
      </ul>
    </div>
  );
};

const HamurgerMenu = ({ isMobileNavOpen, setIsMobileNavOpen }) => {
  return (
    <div
      className='flex flex-col items-end overflow-hidden'
      onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
      <div
        className={`bg-white h-[2.8px] w-8 duration-500 ease-in-out ${
          isMobileNavOpen ? 'rotate-45 absolute top-8' : ''
        }`}></div>
      <div
        className={`bg-white h-[2.8px] w-5 mt-2 mb-2 ${
          isMobileNavOpen ? 'hidden' : ''
        }`}></div>
      <div
        className={`bg-white h-[2.8px] w-8 duration-300 ease-in-out ${
          isMobileNavOpen ? 'rotate-[-45deg] absolute top-8' : ''
        }`}></div>
    </div>
  );
};

export default MobileNav;

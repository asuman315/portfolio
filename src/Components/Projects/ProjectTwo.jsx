import React from 'react';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
import Rotate from 'react-reveal/Rotate';

const ProjectTwo = () => {
  const appImage = require('../../Assets/asuman-sounds.gif');
  const technologies = [
    'Tailwind CSS',
    'React',
    'NextJs',
    'Redux',
    'NodeJs',
    'ExpressJs',
    'Strapi',
    'Stripe API',
    'REST API',
    'MongoDb',
    'Heroku',
  ];
  return (
    <div className='mt-10 bg-primary-3 px-5 pt-3 rounded-md shadow-md'>
      <div className='relative mb-3'>
        <Slide left>
          <h3 className='font-bold text-center pb-3 text-primary-2 lg:cursor-pointer'>
            <a
              href='https://asumansounds.com/'
              target='_blank'
              rel='noreferrer'>
              Shopping Experince of an Ecommerce Store
            </a>
          </h3>
        </Slide>
        <div className='bg-primary-2 h-[2px] w-[30%] ml-[35%]'></div>
      </div>
      <Zoom top>
        <img src={appImage} alt='gif' className='lg:h-[350px] mb-3' />
      </Zoom>
      <div className='leading-9'>
        <Slide left>
          <p>
            This is an ecommerce store with a complete userflow from selecting a
            product on the home page to checking out. The customer navigates
            five pages from the home page to the 'thankyou' page.
          </p>
        </Slide>
        <Roll top>
          <p className='my-4 font-bold'>The customer is able to;</p>
        </Roll>
        <Slide left>
          <p>
            - See hover states for all interactive elements on the page. <br />
            -Add/Remove products from the cart. <br />
            - Edit product quantities in the cart. <br />
            - Have a 'buy it now' option that enables the customer to skip the
            cart section. <br />
            - Fill in all fields in the checkout. <br />
            - Receive form validations if fields are missed or incorrect during
            checkout. <br />- See correct checkout totals depending on the
            products in the cart. <br />- VAT is calculated as 3% of the product
            total, excluding shipping. <br />
            - Shipping always adds a certain amount to the order depending on
            the shippng method selected. <br />- Subscribe to the email list.{' '}
            <br />
            - Authenticate before completing the checkout process. <br />
            - See an Order confirmation modal after checking out with an order
            summary. <br />
            - Retain their products in the cart after refreshing the page or
            after leaving the website. <br />
            - Checkout using stripe. (The store is using a special card number
            from stripe for only testing purposes.) <br />
          </p>
        </Slide>
      </div>
      <div className='flex flex-col'>
        <Rotate top left>
          <a
            href='https://asumansounds.com/'
            target='_blank'
            rel='noreferrer'>
            <button className='uppercase border-none outline-none py-3 mt-3 tracking-widest font-bold text-lg rounded bg-primary-2 w-full'>
              see live app
            </button>
          </a>
        </Rotate>
        <Slide right>
          <a
            href='https://res.cloudinary.com/dbsbevgcj/video/upload/v1655058549/asuman_sounds_8_a9bb7fb9ba.mp4?updated_at=2022-06-12T18:29:11.293Z'
            target='_blank'
            rel='noreferrer'>
            <button className='uppercase border-none outline-none py-3 mt-3 tracking-widest font-bold text-lg rounded bg-primary-2 w-full'>
              short demo video
            </button>
          </a>
        </Slide>
        <Rotate bottom right>
          <a
            href='https://github.com/asuman315/asuman-sounds'
            target='_blank'
            rel='noreferrer'>
            <button className='uppercase border-[1px] outline-none py-3 mt-3 tracking-widest font-bold text-lg rounded w-full'>
              code repo
            </button>
          </a>
        </Rotate>
      </div>
      <Zoom right>
        <div>
          <h3 className='text-center pt-5 pb-2 font-bold text-primary-2'>
            Technologies used in the project
          </h3>
          <div>
            {technologies.map((tech, index) => (
              <button
                key={index}
                className='g-white text-white bg-primary-1 text-sm font-bold mr-3 px-3 mb-3 rounded py-1 cursor-none'>
                {tech}
              </button>
            ))}
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default ProjectTwo;

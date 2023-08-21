import Image from 'next/image';
import React from 'react';
import choicenchoiceImg from '../public/assets/projects/choicenchoice.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const choicenchoice = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={choicenchoiceImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>ChoicenChoice </h2>
          <h3>Shopify - E-commerce Website</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p> The website, powered by Shopify, boasts an intuitive and user-friendly interface. Easily browse categories, filter by brands, and compare options to find your perfect match without hassle. To dive into detailed product pages, I have to generate an idea for how it should look and would be easy access to users. The layout is completed with high-quality images, specifications, and comprehensive descriptions with my research. With the robust security features of Shopify, we made clients to shop with confidence. The sensitive information is protected, ensuring a safe and secure shopping experience. Whether you're shopping from your computer, tablet, or smartphone, the website's responsive design ensures a seamless and enjoyable shopping experience on any device. Shopify's streamlined checkout process allows clients to breeze through your purchase, saving you time and ensuring a hassle-free transaction.
          </p>
          {/* <a
            href='https://github.com/fireclint/crypto-react-firebase'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a> */}
          <a
            href='https://choicenchoice.com/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Visit</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Adobe XD
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CMS Builder
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HTML
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Routes
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default choicenchoice;

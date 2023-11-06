import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#ee7c39]'> Jeshish </span>
            {/* text-[#5651e5] */}
          </h1>
          <h1 className='py-2 text-black-700'>A Product designer and developer </h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I&#39;m focused on building intuitive design and integrate a responsive front-end web applications.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/jeshish-maharjan-67833717b/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/JeshishM'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            
            <a target='_blank'>
            <Link href='mailto:jess.maharjan@gmail.com'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            </a>

            {/* <a href="mailto:jess.maharjan@gmail.com"
                  target="_blank"
                  rel='noreferrer'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiOutlineMail />
                    </div>
                  </a> */}

             <Link href='https://drive.google.com/file/d/15PL-o_looxriGbrIJb4Ys7lnigZtaXV1/view'>
                <a target='_blank'>     
                  <div className='resume rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer    hover:scale-110 ease-in duration-300'>
                      <BsFillPersonLinesFill />
                  </div> 
                </a>
              </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

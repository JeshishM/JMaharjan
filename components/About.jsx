import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/JMabout.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
           
          </p>
          <h2 className='py-4'>Introduction</h2>
          <p className='py-2 text-gray-600'>
            I specialize in UX/UI Design building responsive desktop and mobile front-end UI applications that connect with your business goals. I&#39;m passionate about learning new technologies and understand there is more than one way to accomplish a task. Though I am not most proficient in building front-end applications using HTML, CSS, Javascript, and React, but I am a quick learner and can pick up new tech stacks as needed. I want to create solutions to reduce your stress. I believe that being a great developer is not using one specific language, but choosing the best idea and tool for the job.
          </p>
          <h2 className='py-4'>I am focused.</h2>
          <p className='py-2 text-gray-600'>
            I started my web development journey since 2020. I have obtained Full Stack Web Development certificate in Santa Rosa Junior College. In the process, I started working with clients using CMS platforms such as WordPress, GoDaddy ,Wix, Shopify and also used HTML, CSS, JavaScript, Bootstrap, React JS, Vue JS, and Next JS to build a full functional websites. I am recognized and appreciated with my skills I did. My way of thinking and executing the ideas is profound. I want to help you next to create your business in digital market. 
          </p>
          <p className='py-2 text-gray-600'> Besides designing and developing, I spend my breaks reading books, exercise, play soccer, and play guitar & keys and get back to my projects again. I believe in Discipline, Motivation, and Consistency.</p>
            
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;

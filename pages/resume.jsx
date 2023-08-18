import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Jeshish | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[1080px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Jeshish Maharjan</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/jeshish-maharjan-67833717b/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/JeshishM'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> UX / UI
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>Node JS
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Microsoft Teams
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span> RESTAPI
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            SOFTUP TECH
            </span>
            <span className='px-2'>|</span>Dallas, TX
          </p>
          <p className='py-1 italic'>Front End Web Developer & Web Master (2021 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Platform migration managing DNS servers as well as MX records and
              ensuring a smooth migration process.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Full-Stack Web Development
            </span>
            <span className='px-2'>|</span>Santa Rosa, CA
          </p>
          <p className='py-1 italic'>HTML/CSS/Javascript React, Vue, Nodejs, React Courses (2021 - 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              In 2021 I started “Code Course” in Santa Rosa Junior College, a student focused on
              learning and sharing web development skills, specifically
              front-end development and design.
            </li>
            <li>
              Team and client attending in Zoom calls related to web development client projects.
              More specifically designing, developing, testing, debugging, basically more into problem solving business concept and turning those solution into web concepts and doing code reviews.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>City of Rohnert Park, CA</span>
            <span className='px-2'>|</span>Rohnert Park, TX
          </p>
          <p className='py-1 italic'>Tables Games Supervisor (2016 – 2020)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Oversee table games on a floor and ensure their smooth operation.</li>
            <li> Provide excellent customer service, address player inquiries, and resolve disputes.</li>
            <li> Manage and monitor dealers, ensuring they follow casino policies and procedures.</li>
            <li>They detect and prevent cheating, collusion, or suspicious behavior to maintain game integrity.</li>
            <li>Compliance with gaming regulations and laws is a crucial responsibility. </li>
            <li>Handle monetary transactions, including chips, cash, and exchanges.</li>
            <li> Train and develop dealers, providing coaching and feedback.</li>
            <li>Documentation and reporting of game performance, incidents, and player information are maintained.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;

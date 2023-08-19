import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import redemptionImg from '../public/assets/projects/redemption.jpg';
import choicenchoiceImg from '../public/assets/projects/choicenchoice.jpg'
import astrochatImg from '../public/assets/projects/astrochat.jpg'
import softupImg from '../public/assets/projects/softup.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Redemption House'
            backgroundImg={redemptionImg}
            projectUrl='/redemption'
            tech='GoDaddy'
          />
          <ProjectItem
            title='Ecommerce Site'
            backgroundImg={choicenchoiceImg}
            projectUrl='/choicenchoice'
            tech='Shopify'

          />
          <ProjectItem
            title='AstroChat App'
            backgroundImg={astrochatImg}
            projectUrl='/astrochat'
            tech='React JS, Firebase'

          />
          <ProjectItem
            title='Web Services Business'
            backgroundImg={softupImg}
            projectUrl='/softup'
            tech='React JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

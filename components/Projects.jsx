import React from 'react';
import ProjectItem from './ProjectItem';
import tokyoexpressImg from '../public/assets/projects/tokyoexpress.png';
import cinechillImg from '../public/assets/projects/cinechill.png';
import jetreeImg from '../public/assets/projects/jetree.png';
import qotqotImg from '../public/assets/projects/qotqot.png';
import codeImg from '../public/assets/projects/code.jpg';

const Projects = () => {
  return (
    <div id='projects' className='w-full lg:h-auto px-4 sm:px-12 py-20'>
      <div className=' m-auto max-w-[1240px]'>
        <p className='text-xl tracking-widest uppercase font-extrabold text-[#37B6FF] pb-4'>
          Les Projets développés pendant ma formation
        </p>

        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Tokyo Express'
            backgroundImg={tokyoexpressImg}
            projectUrl='/tokyoExpress'
            p='HTML, CSS, Vanilla JS'
          />
          <ProjectItem
            title='CineChill'
            backgroundImg={cinechillImg}
            projectUrl='/cineChill'
            p='React, Node js, API, Bootstrap'
          />
          <ProjectItem
            title='JeTree'
            backgroundImg={jetreeImg}
            projectUrl='/jeTree'
            p='React, Node js, API, CSS modules'
            
          />
          <ProjectItem
            title='QotQot'
            backgroundImg={qotqotImg}
            projectUrl='/qotqot'
            p='Next js (React), Node js, API, Tailwind'
          />
        </div>

         <p className='text-xl tracking-widest uppercase font-extrabold text-[#37B6FF] py-6'>
          Mes Projets personnels
        </p>
        <div className='grid md:grid-cols-2 gap-8'>
         <ProjectItem
            title='Portfolio'
            backgroundImg={codeImg}
            projectUrl='/portfolio'
            p='Next js (React), Node js, Tailwind'
          />
          </div>
      </div>
    </div>
  );
};

export default Projects;

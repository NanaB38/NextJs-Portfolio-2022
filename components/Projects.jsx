import React from 'react';
import ProjectItem from './ProjectItem';
import tokyoexpressImg from '../public/assets/projects/tokyoexpress.png';
import cinechillImg from '../public/assets/projects/cinechill.png';
import jetreeImg from '../public/assets/projects/JeTree.png';
import qotqotImg from '../public/assets/projects/qotqot.png';
import codeImg from '../public/assets/projects/code.jpg';

const Projects = () => {
  return (
    <div id='projects' className='w-full lg:h-auto px-8 pt-20'>
      <div className=' m-auto max-w-[1240px]'>
        <p className='text-xl tracking-widest uppercase font-extrabold text-[#37B6FF]'>
          Mes Projets
        </p>
        <p className='text-md tracking-widest uppercase text-gray-300 opacity-60'>
          Projects
        </p>
        <h2 className='py-6'>Les projets développés pendant ma formation </h2>

        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Tokyo Express'
            backgroundImg={tokyoexpressImg}
            projectUrl='/tokyoExpress'
          />
          <ProjectItem
            title='CineChill'
            backgroundImg={cinechillImg}
            projectUrl='/cineChill'
          />
          <ProjectItem
            title='JeTree'
            backgroundImg={jetreeImg}
            projectUrl='/jeTree'
          />
          <ProjectItem
            title='Portfolio'
            backgroundImg={codeImg}
            projectUrl='/portfolio'
          />
          <ProjectItem
            title='QotQot (en cours)'
            backgroundImg={qotqotImg}
            projectUrl='/'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

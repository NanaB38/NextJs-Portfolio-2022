import React from 'react';
// import netflixImg from '../public/assets/projects/netflix.jpg';
import ProjectItem from './ProjectItem';
import tokyoexpressImg from '../public/assets/projects/tokyoexpress.png';
import cinechillImg from '../public/assets/projects/cinechill.png';
import jetreeImg from '../public/assets/projects/JeTree.png';
import qotqotImg from '../public/assets/projects/qotqot.png';

const Projects = () => {
  return (
    <div id='projects' className='w-full lg:h-screen px-10 pt-20'>
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
            projectUrl='/tokyoexpress'
          />
          <ProjectItem
            title='CineChill'
            backgroundImg={cinechillImg}
            projectUrl='/cinechill'
          />
          <ProjectItem
            title='JeTree'
            backgroundImg={jetreeImg}
            projectUrl='/jetree'
          />
          <ProjectItem
            title='QotQot (en cours)'
            backgroundImg={qotqotImg}
            projectUrl='/qotqot'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

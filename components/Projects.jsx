import React from 'react';
// import netflixImg from '../public/assets/projects/netflix.jpg';
import ProjectItem from './ProjectItem';
import tokyoexpressImg from '../public/assets/projects/tokyoexpress.png';
import cinechillImg from '../public/assets/projects/cinechill.png';
import jetreeImg from '../public/assets/projects/JeTree.png';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-10 py-12'>
        <p className='text-xl tracking-widest uppercase text-[#37B6FF]'>
          Mes Projets
        </p>
        <p className='text-md tracking-widest uppercase text-gray-300 opacity-60'>
          Projects
        </p>
        <h2 className='py-4'>Les projets que j'ai développé</h2>

        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Tokyo Express'
            backgroundImg={tokyoexpressImg}
            projectUrl='/property'
          />
          <ProjectItem
            title='CineChill App'
            backgroundImg={cinechillImg}
            projectUrl='/crypto'
          />
          <ProjectItem
            title='JeTree App'
            backgroundImg={jetreeImg}
            projectUrl='/netflix'
          />
          {/* <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
          />{' '} */}
        </div>
      </div>
    </div>
  );
};

export default Projects;

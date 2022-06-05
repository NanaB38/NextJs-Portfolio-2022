import Image from 'next/image';
import React from 'react';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen px-8 py-20'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center '>
        <p className='text-xl tracking-widest uppercase font-extrabold text-[#37B6FF]'>
          Mes compétences tech
        </p>
        <p className='text-md tracking-widest uppercase text-gray-300 opacity-60'>
          Hard skills
        </p>

        <h2 className='py-10'>Langages et Frameworks</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-lg  shadow-gray-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center '>
              <div className='m-auto'>
                <Image
                  src='/../public/assets/skills/html5.png'
                  width='65px'
                  height='65px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML / CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg  shadow-gray-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center mt-2'>
              <div className='m-auto'>
                <Image
                  src='/../public/assets/skills/js.png'
                  width={350}
                  height={200}
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg  shadow-gray-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center mt-1'>
              <div className='m-auto'>
                <Image
                  src='/../public/assets/skills/React-icon.png'
                  width='70px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg  shadow-gray-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../public/assets/skills/Tailwind_css.png'
                  width='70px'
                  height='50px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center mt-5'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg  shadow-gray-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto mt-5'>
                <Image
                  src='/../public/assets/skills/Cypress.png'
                  width='170px'
                  height='55px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center mt-4'>
                <h3>Cypress</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-lg  shadow-gray-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center mt-4'>
              <div className='m-auto '>
                <Image
                  src='/../public/assets/skills/nodejs.png'
                  width='110px'
                  height='30px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center mt-2'>
                <h3>Node js</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg  shadow-gray-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center '>
              <div className='m-auto'>
                <Image
                  src='/../public/assets/skills/png_mysql.png'
                  width='110px'
                  height='64px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center mt-4'>
                <h3>My SQL</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg  shadow-gray-500 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto mt-3'>
                <Image
                  src='/../public/assets/skills/github-50.png'
                  width='60px'
                  height='60px'
                  alt='/'
                />
              </div>
              <div className='flex flex-col items-center justify-center mt-2'>
                <h3>Git / Github</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

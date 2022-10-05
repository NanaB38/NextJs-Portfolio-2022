import React from 'react';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { VscPreview } from 'react-icons/vsc';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const Main = () => {
  return (
    <div
      id='home'
      className='w-full md:h-screen text-center py-20 px-4 sm:px-12'
    >
      <div className='max-w-[1240px] w-full mx-auto flex justify-center items-center pt-10 sm:mt-14'>
        <div>
          <p className='uppercase text-base tracking-widest text-gray-300 hidden'>
            Développons de super projets ensemble !{' '}
            <span className='text-[20px] md:text-[32px]'>🚀</span>
          </p>
          <h1 className='py-4 text-[#40B9FF]'>Anna Boval</h1>
          <div className='typewritter'>
            <div className='py-4 text-[24px] font-bold text-gray-300'>
              <Typewriter
                options={{
                  strings: [
                    'Bienvenue sur mon Portfolio !',
                    'Développeuse Web et Mobile Full-Stack junior',
                    'Disponible pour une alternance ou un stage',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div >
            <p className='py-2 text-gray-300 max-w-[90%] m-auto text-[20px] '>
            </p>
            <p className='text-[#96d9ff] text-[24px] max-w-[80%] m-auto font-bold'>
              Besoin de renfort dans vos équipes de dév ? <span className='text-[18px] md:text-[24px]'>🚀</span> 
            </p>
              <p className='py-2 max-w-[80%] m-auto text-[20px]'> 
              3 bonnes raisons de me recruter en  <span className='font-bold text-[#47bbff]'>alternance</span> ou 
              en <span className='font-bold text-[#47bbff]'>stage</span> : 
              </p> 
              <p className='pb-2'>
              Je participerai activement au développement de vos sites et applis responsives <br />
              Je proposerai des solutions, serai à l'écoute et solidaire avec l'équipe <br />
              Je me formerai avec sérieux pour réussir dans les différentes missions que vous me confierez <br />
           </p>

            <p className='py-4 text-gray-400 max-w-[70%] m-auto'>
              Hi, I’m a junior full-stack web developer and I love building
              beautiful and responsive digital projects! <br />
              Currently, I'm focused on finding a sandwich degree or an internship from September
            </p>
          </div>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-6'>
            <Link href='https://www.linkedin.com/in/anna-boval-1a5407136/'>
              <a
                className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                target='_blank'
              >
                <FaLinkedinIn />
              </a>
            </Link>
            <Link href='https://github.com/NanaB38'>
              <a
                className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                target='_blank'
              >
                <FaGithub />
              </a>
            </Link>
            <Link href='/#contact'>
              <a className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </a>
            </Link>
            <Link href='https://drive.google.com/file/d/1t7LZTBXxB0hM1g0JcjR2q8fYyJMR4C6v/view'>
              <a
                className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                target='_blank'
              >
                <VscPreview />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

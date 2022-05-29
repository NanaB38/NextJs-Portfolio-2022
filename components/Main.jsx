import React from 'react';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-base tracking-widest mt-40'>
            Construisons de beaux projets ensemble !
          </p>
          <h1 className='py-4'>
            Bonjour, je m'appelle{' '}
            <span className='text-[#40B9FF]'> Anna Boval</span>
          </h1>
          <h2 className='py-3 text-gray-300'>
            Développeuse Web et Mobile junior 👩‍💻
          </h2>
          <div className='mt-5'>
            <p className='py-4 text-gray-300 max-w-[70%] m-auto'>
              Je suis une développeuse full-stack Javascript junior et j'adore{' '}
              <br />
              créer des contenus responsive, beaux et fonctionnels !{' '}
              <span className='shadow-md shadow-gray-300'>📱</span>{' '}
            </p>
            <p className='py-4 text-gray-300 max-w-[70%] m-auto'>
              Actuellement en formation à la{' '}
              <Link href='https://www.wildcodeschool.com/fr-FR/campus/lyon'>
                <a
                  className='text-[#3da7e4] font-bold hover:text-lg'
                  target='_blank'
                >
                  Wild Code School
                </a>
              </Link>
              , je souhaite poursuivre mes études avec une{' '}
              <span className='font-bold'>alternance</span> ou un{' '}
              <span className='font-bold'>stage</span>.
            </p>
            <p className='py-4 text-gray-400 max-w-[70%] m-auto'>
              I’m a Junior Javascript FullStack Developer and I love building
              nice digital experiences! <br />
              Currently, I’m studying in Wild Code School and I'm focused on
              finding a sandwich degree or an internship.
            </p>
          </div>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaLinkedinIn />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaGithub />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

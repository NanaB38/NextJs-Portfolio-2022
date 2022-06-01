import React from 'react';
import Image from 'next/image';
import styles from '../styles/home.module.css';

const About = () => {
  return (
    <div id='about' className='w-full lg:h-screen px-10 py-20'>
      <div className={styles.aboutme}>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
          <div className='col-span-2'>
            <p className='uppercase text-xl font-extrabold tracking-widest text-[#40B9FF]'>
              A propos de moi
            </p>
            <p className='text-md tracking-widest uppercase text-gray-300 opacity-60'>
              About me
            </p>
            <h2 className='py-4'>Qui suis-je ? </h2>
            <p className='py-2 text-gray-300'>
              Développeuse curieuse et motivée 👩‍💻
            </p>
            <p className='py-2 text-gray-300'>
              Ce que j'ai fait. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p className='py-2 text-gray-300'>
              Mes passions. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum
            </p>
            <p className='py-2 text-gray-300 underline cursor-pointer'>
              Jettez un oeil à mes projets ! 🔍
            </p>
          </div>
          <div className='w-60 h-80 m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image
              className='rounded-xl'
              src='/../public/assets/pic.jpg'
              width={150}
              height={200}
              alt='photo-of-me'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

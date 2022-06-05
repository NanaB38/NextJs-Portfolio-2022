import Image from 'next/image';
import React from 'react';
import codeImg from '../public/assets/projects/code.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const Portfolio = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={codeImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Mon Portfolio</h2>
          <h3>React JS (Next) / Tailwind / Vercel</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <h2 className='py-3'>Présentation du Portfolio</h2>
          <p>
            Cette appli a été construite en mai 2022 en React JS et les
            Frameworks Next et Tailwind. Il a été déployé avec Vercel.
          </p>
          <div className='flex justify-center'>
            <button className='px-8 py-2 mt-4 py -inset-5 hover:scale-105'>
              <Link href='https://github.com/NanaB38/Portfolio-Nextjs-2022'>
                <a target='_blank'>Voir le code</a>
              </Link>
            </button>
          </div>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-300 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Vercel
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='cursor-pointer hover:scale-110'> ⬅️ Retour</p>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;

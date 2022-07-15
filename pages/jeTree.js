import Image from 'next/image';
import React from 'react';
import jetreeImg from '../public/assets/projects/jetree.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const jeTree = () => {
  return (
    <>
      <div className='w-full h-[40vh] lg:h-[45vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] z-10 ' />
        <Image
          className='absolute z-1 brightness-75'
          layout='fill'
          objectFit='cover'
          src={jetreeImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>jeTree</h2>
          <h3> React JS / Leaflet / Node / MySql / Express</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 px-4 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <h2 className='py-3 text-[#66c7ff]'>Présentation de jeTree </h2>
          <p className='mb-4'>
            Il s'agit d'un appli développée dans le cadre d'un "Hackathon", qui
            était sur le thème de l'écologie. <br /> Le but était de créer une
            application afin de proposer des solutions pour réduire notre impact
            environnemental. <br />
            Cette appli géolocalise les bornes de tri dans la métropole
            lyonnaise (verre, compost...). <br />
            Nous avons créé une base de donnée, récupéré les données depuis
            l'API data.grandlyon.com et utilisé Express (méthode CRUD).
          </p>
          <div className='flex justify-center'>
            <button className='px-8 py-2 mt-4 py -inset-5 hover:scale-105'>
              <Link href='https://je-tree.netlify.app/'>
                <a target='_blank'>Voir le site</a>
              </Link>
            </button>
          </div>
          <div className='flex justify-center mt-5'>
            <button className='px-8 py-2 mt-4 py -inset-5 hover:scale-105 bg-gradient-to-r from-[#8ccbff] to-[#0c7fc7]'>
              <Link href='https://github.com/NanaB38/hackathlon-1'>
                <a target='_blank'>Voir le code</a>
              </Link>
            </button>
          </div>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-300 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Stack technique</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React js
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Leaflet
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Node js
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MySql / Express
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Figma, Trello
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Netlify
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='cursor-pointer hover:scale-110'> ⬅️ Retour</p>
        </Link>
      </div>
    </>
  );
};

export default jeTree;

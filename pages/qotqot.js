import Image from 'next/image';
import React from 'react';
import qotqotImg from '../public/assets/projects/qotqot.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const qotqot = () => {
  return (
    <>
      <div className='w-full h-[40vh] lg:h-[45vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] z-10 ' />
        <Image
          className='absolute z-1 brightness-75'
          layout='fill'
          objectFit='cover'
          src={qotqotImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>QotQot</h2>
          <h3> React JS / API AirTable / Node / Cypress / Tailwind</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 px-4'>
        <div className='col-span-4'>
          <h2 className='py-3 text-[#66c7ff]'>Présentation de QotQot </h2>

          <p className='mb-4'>
            Développement d’une application pour la Startup QotQot, épicerie
            phygitale et locale.
            <br /> Cette appli permet aux restaurateurs et entreprises de
            commander des produits d'épicerie fine. <br />
            Les fonctionnalités principales sont : <br />
            Login, accès aux commandes, nouvelle commande, panier et
            confirmation. Notre équipe de 4 développeurs a utilisé l'API{' '}
            <span className='pr-1'>
              <Link href='https://www.airtable.com/'>
                <a
                  className='text-[#66c7ff] cursor-pointer font-bold'
                  target='_blank'
                >
                  AirTable
                </a>
              </Link>
            </span>
            utilisée pour la gestion des commandes par le client.
          </p>
          <div className='flex justify-center'>
            <button className='px-8 py-2 mt-4 py -inset-5 hover:scale-105'>
              <Link href='https://qotqot.vercel.app/'>
                <a target='_blank'>Voir le site</a>
              </Link>
            </button>
          </div>
          <div className='flex justify-center mt-5'>
            <button className='px-8 py-2 mt-4 py -inset-5 hover:scale-105 bg-gradient-to-r from-[#8ccbff] to-[#0c7fc7]'>
              <Link href='https://github.com/NanaB38/'>
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
                <RiRadioButtonFill className='pr-1' /> React (Next)
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> API AirTable
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Node js
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Cypress
              </p>

              <p className='text-gray-200 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> GitHub workflow
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

export default qotqot;

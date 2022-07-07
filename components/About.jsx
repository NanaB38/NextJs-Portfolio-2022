import React from 'react';
import Image from 'next/image';
import picImg from '../public/pic.jpg';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='w-full px-4 sm:px-12 py-24 '>
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
            Développeuse curieuse, créative et rigoureuse 👩‍💻
          </p>
          <p className='py-2 text-gray-300'>
            Ancienne conseillère bancaire, j'ai décidé de faire un virage à 360°
            et me reconvertir dans ce métier incroyable qu'est{' '}
            <span className='font-bold'>développeur web et mobile ! </span>{' '}
            <br />
            Pour me former, j'ai choisi la Wild Code School à Lyon, qui propose
            une formation intensive de 5 mois "développeur web et mobile",
            certifiée BAC +2. <br />
            La formation repose sur la théorie mais surtout la pratique
            intensive : maquettage , intégration et développement de projets en
            Javascript/ React pour la partie front-end et Node.js pour le
            back-end. <br /> J'apprends également à modéliser les bases de
            données Sql avec Express et Prisma, créer des API REST et à tester
            le code avec Cypress.
          </p>
          <p className='py-2 text-gray-300'>
            De nature curieuse et technophile, j'ai un attraît pour le digital
            depuis mon enfance. <br /> Ayant toujours aimé dessiner-créer et
            grâce aux cours de dessin/peinture, j'ai développé une sensibilité
            créative. <br />
            Enfin, j'ai une appétence pour les challenges, le sport (rando,
            vélo, ski, danse) et les jeux en équipe. <br />
            C'est donc naturellement que je me suis orientée vers ce métier de
            développeur web, à la fois technique, créatif et stimulant
            intellectuellement.
          </p>
          <Link href='/#projects'>
            <a className='py-2 text-gray-300 font-bold cursor-pointer mb-8 hover:text-lg'>
              Jetez un oeil à mes projets ! 👀
            </a>
          </Link>
        </div>
        <div className='w-60 h-80 mt-8 sm:mt-auto m-auto shadow-lg shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image
            className='rounded-xl'
            src={picImg}
            alt='photo-of-me'
            width={150}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default About;

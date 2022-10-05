import React from 'react';
import Image from 'next/image';
import picImg from '../public/pic.jpg';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='w-full px-4 sm:px-12 py-24 '>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl font-extrabold tracking-widest '>
            À propos de moi
          </p>
          <h2 className='py-4'>Qui suis-je ? </h2>
          <p className='py-2 text-lg font-bold text-[#a58cff]'>
            Développeuse curieuse, créative et rigoureuse 👩‍💻
          </p>
          <p className='py-2 text-gray-300'>
            Ancienne conseillère bancaire, j'ai décidé de faire un virage à 360°
            et me reconvertir dans ce métier incroyable qu'est{' '}
            <span className='font-bold text-[#a9a4ff]'>développeur web et mobile </span>{' '}! 
            <br />
            Pour me former, j'ai choisi tout d'abord la Wild Code School avec une formation intensive "développeur web et
            mobile", <strong>certifiée BAC+2.</strong><br />
            Cette formation repose essentiellement sur la pratique
            intensive en <strong>méthode agile</strong> : maquettage, développement de projets en
            <strong> Js / React / Next js </strong> pour la partie front-end et <strong>Node.js</strong> pour le
            back-end. <br /> J'ai appris également à modéliser les bases de
            données SQL avec Express et Prisma, créer des API REST et à tester le code. <br />
            Aujourd'hui, j'ai décidé de poursuivre mon apprentissage avec un
            <strong> Bachelor "Concepteur Developpeur d'Applications"</strong> (certifié BAC+3/4), 
            en alternance au rythme de 2-3 semaines en entreprise, afin de renforcer mes compétences 
            techniques et me spécialiser sur un/des framework(s).
          </p>
          <p className='py-2 text-gray-300'>
            De nature curieuse, j'ai un attraît pour le digital depuis mon
            enfance et j'adore apprendre au quotidien ! <br /> 
            Aussi, j'ai toujours aimé créer et dessiner, j'ai donc développé une 
            sensibilité créative.
            <br />
            Enfin, j'ai une appétence pour les challenges, le sport (rando,
            vélo, ski, danse) et les jeux en équipe. <br />
            C'est donc naturellement que je me suis orientée vers ce métier qui est à la fois technique, 
            créatif et stimulant intellectuellement ! 🤓
          </p>
          <div className='py-6'>
            <Link href='/#projects'>
              <a className='text-[#a9a4ff] text-[18px] font-bold cursor-pointer mb-8 hover:text-[24px]'>
                Jetez un oeil à mes projets ! 👀
              </a>
            </Link>
          </div>
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

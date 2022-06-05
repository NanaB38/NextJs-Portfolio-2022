import React from 'react';
import Image from 'next/image';
import styles from '../styles/home.module.css';

const About = () => {
  return (
    <div id='about' className='w-full lg:h-screen px-8 py-20 mt-10'>
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
              Développeuse curieuse, créative et solidaire 👩‍💻
            </p>
            <p className='py-2 text-gray-300'>
              Ancienne conseillère bancaire, j'ai décidé il y a plusieurs mois
              de faire un virage à 360° et me reconvertir dans ce métier
              incroyable qu'est{' '}
              <span className='font-bold'>développeur web</span>. <br />
              Pour me former, j'ai donc choisi la Wild Code School à Lyon, qui
              propose une formation intensive de 5 mois, certifiée de niveau BAC
              +2. <br />
              La formation est basée sur la pratique et le développement de
              projets en Javascript/React pour la partie front-end et Node.js
              pour le back-end. J'apprends également à manipuler des bases de
              données avec Express et à tester le code avec cypress.
            </p>
            <p className='py-2 text-gray-300'>
              De nature curieuse et technophile, j'ai toujours eu un attraît
              pour l'univers digital. <br /> Par ailleurs, j'ai une certaine
              sensibilité pour l'Art, j'ai donc suivi des cours de dessin et de
              peinture pendant 8 ans. <br />
              Enfin, j'ai une appétence pour les challenges et j'adore les jeux,
              surtout en équipe. <br />
              C'est donc assez naturellement que je me suis orientée vers ce
              métier à la fois technique, créatif et stimulant
              intellectuellement.
            </p>
            <p className='py-2 text-gray-300 font-bold cursor-pointer mb-8'>
              Jettez un oeil à mes projets ! 👀
            </p>
          </div>
          <div className='w-60 h-80 m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image
              className='rounded-xl'
              src='/../public/pic.jpg'
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

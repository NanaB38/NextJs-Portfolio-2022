import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/home.module.css';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, [shadow]);

  return (
    <div
      className={
        shadow
          ? 'fixed w-full shadow-lg z-[100] shadow-gray-400'
          : 'fixed w-full z-[100]'
      }
    >
      <div className='bg-[#112D47] h-20 bg-opacity-80 z-[100] mx-2'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
          <Link href='/'>
            <a>
              <Image
                src='/../public/assets/logoAB.png'
                alt='logoAnnaBoval'
                width={170}
                height={48}
                className='cursor-pointer hover:scale-110'
              />
            </a>
          </Link>
          <div>
            <nav className='hidden md:flex'>
              <Link href='/'>
                <a
                  onClick={() => setNav(false)}
                  className='ml-10 text-sm uppercase hover:text-[#4dbeff] hover:scale-125'
                >
                  Accueil
                </a>
              </Link>
              <Link href='/#about'>
                <a className='ml-10 text-sm uppercase hover:text-[#4dbeff] hover:scale-125'>
                  A propos
                </a>
              </Link>
              <Link href='/#skills'>
                <a className='ml-10 text-sm uppercase hover:text-[#4dbeff] hover:scale-125'>
                  Compétences
                </a>
              </Link>
              <Link href='/#projects'>
                <a className='ml-10 text-sm uppercase hover:text-[#4dbeff] hover:scale-125'>
                  Projets
                </a>
              </Link>
              <Link href='/#contact'>
                <a className='ml-10 text-sm uppercase hover:text-[#4dbeff] hover:scale-125'>
                  Contact
                </a>
              </Link>
            </nav>

            <div onClick={handleNav} className='md:hidden cursor-pointer'>
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
        <div
          className={
            nav ? 'fixed left-0 top-0 w-full h-screen bg-black/60' : ''
          }
        >
          <div
            className={
              nav
                ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#112D47] ease-in duration-500'
                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }
          >
            <div className={styles.navbar2}>
              <div className='flex w-full items-center justify-between mt-5'>
                <Image
                  src='/../public/assets/logoAB.png'
                  alt='logoAnnaBoval'
                  width={140}
                  height={40}
                />
                <div
                  onClick={handleNav}
                  className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer'
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className='border-b border-gray-400 mt-16'>
                <p className='w-[85%] md:w-[90%]'>
                  Construisons de beaux projets ensemble !
                </p>
              </div>
            </div>
            <div className={styles.menu}>
              <div className='py-4 flex flex-col md-5'>
                <ul className='uppercase'>
                  <Link href='/'>
                    <li className='py-4 text-sm hover:text-base'>Accueil</li>
                  </Link>
                  <Link href='/#about'>
                    <li className='py-4 text-sm hover:text-base'>A propos</li>
                  </Link>
                  <Link href='/#skills'>
                    <li className='py-4 text-sm hover:text-base'>
                      Compétences
                    </li>
                  </Link>
                  <Link href='/#projects'>
                    <li className='py-4 text-sm hover:text-base'>Projets</li>
                  </Link>
                  <Link href='/#contact'>
                    <li className='py-4 text-sm hover:text-base'>Contact</li>
                  </Link>
                </ul>

                <div className='pt-40 mt-20'>
                  <p className='uppercase tracking-widest text-[#37B6FF]'>
                    Contactez-moi !
                  </p>
                  <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                    <div className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                    <div className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <FaGithub />
                    </div>
                    <div className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <AiOutlineMail />
                    </div>
                    <div className='rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <BsFillPersonLinesFill />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

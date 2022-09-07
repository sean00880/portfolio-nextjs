import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { useRouter } from 'next/router';
import NavLogo from '../public/assets/random.png'
import GlitchText from "./glitch-text4";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

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
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-[130%] px-2 2xl:px-16 bg-nav border-t-4 border-b-4 [background-position-y:100px]'>
        <Link href='/'>
          <a>
            <Image
              src={NavLogo}
              alt='/'
              width='125px'
              height='125px'
              className='cursor-pointer'
              priority='true'
            />
          </a>
        </Link>
        <div>
          <ul style={{ color: `white` }} className='font-extrabold bg-opacity-[.3] rounded-md p-6 hidden md:flex'>
            <li className='bg-bg_image6 bg-cover [background-position-y:20px] text-[#d34a4a] border-4 border-[#171717fd] p-3 py-7 w-[14vh] rounded-tl-[20px] rounded-br-[30px] ml-10 text-md uppercase hover:border-2 hover:bg-[#202020] hover:bg-bg_image3 hoverbg-cover hover:text-[#d6d6d6] hover:border-[#fafafa]'>
              <Link href={`${process.env.NEXT_PUBLIC_URL}/#home`} passHref>Home</Link>
            </li>
            <li className='bg-bg_image6 bg-cover [background-position-y:20px] text-[#d34a4a] border-4 border-[#171717fd] p-3 py-7 w-[14vh] rounded-tl-[20px] rounded-br-[30px] ml-10 text-md uppercase hover:border-2 hover:bg-[#202020] hover:bg-bg_image3 hoverbg-cover hover:text-[#d6d6d6] hover:border-[#fafafa]'>
              <Link href={`${process.env.NEXT_PUBLIC_URL}/#about`} passHref>About</Link> 
            </li>
            <li className='bg-bg_image6 bg-cover [background-position-y:20px] text-[#d34a4a] border-4 border-[#171717fd] p-3 py-7 w-[14vh] rounded-tl-[20px] rounded-br-[30px] ml-10 text-md uppercase hover:border-2 hover:bg-[#202020] hover:bg-bg_image3 hoverbg-cover hover:text-[#d6d6d6] hover:border-[#fafafa]'>
              <Link href={`${process.env.NEXT_PUBLIC_URL}/#skills`} passHref>Skills</Link>
            </li>
            <li className='bg-bg_image6 bg-cover [background-position-y:20px] text-[#d34a4a] border-4 border-[#171717fd] p-3 py-7 w-[14vh] rounded-tl-[20px] rounded-br-[30px] ml-10 text-md uppercase hover:border-2 hover:bg-[#202020] hover:bg-bg_image3 hoverbg-cover hover:text-[#d6d6d6] hover:border-[#fafafa]'>
              <Link href={`${process.env.NEXT_PUBLIC_URL}/#projects`} passHref>Projects</Link>
            </li>
            <li className='bg-bg_image6 bg-cover [background-position-y:20px] text-[#d34a4a] border-4 border-[#171717fd] p-3 py-7 w-[14vh] rounded-tl-[20px] rounded-br-[30px] ml-10 text-md uppercase hover:border-2 hover:bg-[#202020] hover:bg-bg_image3 hoverbg-cover hover:text-[#d6d6d6] hover:border-[#fafafa]'>
              <Link href='/resume' passHref target='_blank'>Resume</Link>
            </li>
            <li className='bg-bg_image6 bg-cover [background-position-y:20px] text-[#d34a4a] border-4 border-[#171717fd] p-3 py-7 w-[14vh] rounded-tl-[20px] rounded-br-[30px] ml-10 text-md uppercase hover:border-2 hover:bg-[#202020] hover:bg-bg_image3 hoverbg-cover hover:text-[#d6d6d6] hover:border-[#fafafa]'>
              <Link href='/#footer' passHref> Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a>
                  <Image
                    src={NavLogo}
                    width='87'
                    height='35'
                    alt='/'
                    priority='true'
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Demonstration of Live Developments and Prototype Projects.
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              <Link href='/resume' target = "_blank">
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Resume
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#ae3939]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/decodedweb/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/sean00880/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
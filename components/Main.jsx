import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import GlitchText from "./glitch-text3";

const Main = () => {
  return (
    <div id='home' className='pb-10 w-full lg:h-screen text-center bg-[#bd1240] bg-bg_image2 bg-center bg-cover bg-fixed'>
      <div className='max-w-[1240px] leading-20 pt-40 w-full mx-auto p-2 flex justify-center items-center bg-[#1313139e]'>
        <div >
        <h1 className='py-4 mt-10 pl-7 pr-14 leading-20 text-[#e7e7e7] bg-[#252424] text-center rounded-tl-[110px] rounded-br-[110px]'><span className="text-gray-200 font-bold pb-6">
							DECODED <span className="text-[#aa283c]">Web</span>
						</span><hr/>Web Development Services</h1>
        <p className='uppercase text-md leading-20 tracking-widest bg-[black] text-[#d0d0d0] text-center'>
            Portfolio
          </p>
          <h2 className='mt-[21vh] mb-[5vh] tracking-widest leading-20 text-[#bd1240] m-auto'>Founded by <br/><span className='text-gray-200 leading-20'>Shantanu Dwivedi</span><br/><span className='text-[#438f39bc] leading-20 '>a.k.a.</span><span className='text-[#141414] leading-20'><GlitchText>Sean</GlitchText></span></h2>
          <div className='my-6 text-xl text-black font-bold rounded-xl bg-white'>Need a website? <span className="text-[#aa283c]"><Link href='/#services' passHref>Check out offered services</Link></span> </div>
          <div className='flex items-center justify-between max-w-[330px] m-auto'>
            
            <a
              href='https://www.linkedin.com/in/decodedweb/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-30 bg-gradient-to-b from-red-300 via-red-500 to-gray-800 ring-2 ring-[#6464649c]'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/sean00880'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-b from-red-300 via-red-500 to-gray-800 ring-2 ring-[#6464649c]'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-b from-red-300 via-red-500 to-gray-800 ring-2 ring-[#6464649c]'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-b from-red-300 via-red-500 to-gray-800 ring-2 ring-[#6464649c]'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Main;

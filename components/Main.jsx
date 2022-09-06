import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import GlitchText from "./glitch-text3";

const Main = () => {
  return (
    <div id='home' className='w-full lg:h-screen text-center bg-[#bd1240] bg-bg_image2 bg-center bg-cover bg-fixed'>
      <div className='max-w-[1240px] leading-20 pt-40 w-full mx-auto p-2 flex justify-center items-center bg-[#1313139e]'>
        <div >
        <h1 className='py-4 pl-7 pr-14 leading-20 text-[#e7e7e7] bg-[#252424] text-center rounded-tl-[110px] rounded-br-[110px]'><span className='text-[#bd1240]'>Dec0dedWeb<br/></span><hr/>Web Development Services</h1>
        <p className='uppercase text-sm leading-20 tracking-widest bg-[black] text-[#d0d0d0] text-center'>
            Portfolio
          </p>
          <h1 className='py-4 leading-20 text-[#bd1240]'>presented by <br/><span className='text-white leading-20'>Shantanu Dwivedi</span><br/><span className='text-[#58f643bc] leading-20 '>a.k.a.</span><span className='text-[#141414] leading-20'><GlitchText>Sean</GlitchText></span></h1>
                
          <p className='py-4 leading-20 text-gray-100 sm:max-w-[70%] m-auto bg-[#141414a1] mt-4 rounded-bl-[40px] rounded-tr-[40px] rounded-br-[10px] rounded-tl-[10px]'>
             
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
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
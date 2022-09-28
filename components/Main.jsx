import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/lib/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/lib/fa';
import GlitchText from "./glitch-text3";
import Image from "next/image";

const Main = () => {
  return (
    <div id='home' className='pb-10 w-full h-auto text-center bg-bg_image10 lg:bg-bg_image2 bg-cover bg-fixed'>
      <div className='max-w-[1240px] leading-20 pt-40 w-full mx-auto p-2 flex justify-center items-center bg-[#1313139e]'>
        <div >
        <h1 className='py-4 mt-10 pl-7 pr-14 leading-20 text-[#e7e7e7] bg-[#252424] text-center rounded-tl-[110px] rounded-br-[110px]'><span className="text-gray-200 font-bold pb-6">
							DECODED <span className="text-[#aa283c]">Web </span>
						</span><hr/>Web Development Services</h1>
        <h3 className='uppercase text-sm leading-20 tracking-widest bg-[black] text-[#d0d0d0] text-center'>
           Digital Design, Web Development, Content Creation and Online Marketing Agency
          </h3>
          <Image className='mx-auto m-auto' src='https://i.ibb.co/cFN21G9/entrepreneur.png' width={300} height={300}/>
          <h2 className='mb-[5vh] tracking-widest leading-20 text-[#bd1240] m-auto '>Web & Digital Services Offered by Talented <span className='text-[#141414]'><GlitchText>Professionals</GlitchText></span></h2>
          <div className='p-7 my-6 text-2xl text-black font-bold rounded-xl bg-white'>Need assistance with Web or Web3 services? Check out<span className="text-[#aa283c]"><Link href='/#services' passHref> offered services</Link>.</span> </div>
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

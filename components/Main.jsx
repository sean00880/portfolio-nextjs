import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import GlitchText from "./glitch-text3";
import Image from "next/image";
import ProjectItem from './HeroProject';
import grllc from '../public/assets/projects/grllc.png'
import shipwreckcove from '../public/assets/projects/shipwreckcove.png';
import alsllc from '../public/assets/projects/alsllc.png';

const Main = () => {
  return (
    <div id='home' className='pb-10 w-full h-auto text-center bg-bg_image10 lg:bg-bg_image2 bg-cover bg-fixed'>
      <div className='px-10 justify-around leading-20 pt-40 md:pt-30 w-full mx-auto p-2 flex flex-col md:flex-row items-center bg-[#1313139e]'>
      <div >
      <h1 className='py-2 mt-10 pl-7 pr-14 leading-20 text-2xl text-[#e7e7e7] bg-[#252424] text-center rounded-tl-[110px] rounded-br-[110px]'><span className="text-gray-200 font-bold pb-3">
							DECODED <span className="text-[#aa283c]">Web </span>
						</span><hr/>Web Development Services</h1>
        <h3 className='uppercase text-sm leading-20 tracking-widest bg-[black] text-[#d0d0d0] text-center my-3 rounded-lg'>
           Digital Design, Web Development, Content Creation and Online Marketing Agency
          </h3>
        
        
          <Image src='https://i.ibb.co/cFN21G9/entrepreneur.png' width={250} height={250}/>
          
          <div className='p-3 my-10 text-xl text-black font-bold rounded-xl bg-white'> <div className="bg-[#000000ee] rounded-2xl display md:display-block"> <h2 className='my-2 py-2 tracking-widest leading-20 text-[#bd1240] text-xl m-auto '>Web & Digital Services Offered by Talented <span className='text-[#141414]'><GlitchText>Professionals</GlitchText></span></h2></div>Need assistance with Web or Web3 services? Check out <br /><span className="text-[#aa283c] text-2xl animate-bounce"><Link href='/services' passHref> offered services</Link>.</span> </div>

         <div className='flex items-center justify-between max-w-[330px] m-auto my-3'>
         
    
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
        <div className='mx-6'><h3 className='my-10'>Featured Projects:</h3><ProjectItem
            title='Grandpa Ron&apos;s Lawns & Landscape, LLC'
            backgroundImg={grllc}
            projectUrl='/grandparon'
            tech='React, NextJS, Github, Vercel, Email.JS'
          /><ProjectItem
            title='ShipWreck Cove - Web3 Community on Telegram'
            backgroundImg={shipwreckcove}
            projectUrl='/shipwreckcove'
            tech='React, NextJS, Github, Vercel, Email.JS'
          /><ProjectItem
          title='Grandpa Ron&apos;s Lawns & Landscape, LLC'
          backgroundImg={alsllc}
          projectUrl='/alsllc'
          tech='React, NextJS, Github, Vercel, Email.JS'
        />
          <h4 className='text-right'>More Projects</h4>
          </div>
      </div>
    </div>
  );
};

export default Main;

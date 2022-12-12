import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Image from "next/image";
import ProjectItem from './HeroProject';
import grllc from '../public/assets/projects/grllc.png'
import shipwreckcove from '../public/assets/projects/shipwreckcove.png';
import alsllc from '../public/assets/projects/alsllc.png';

const Main = () => {
  return (
    <div id='home' className='pb-10 pt-[10vh] w-full h-auto text-center lg:bg-bg_image2 bg-cover bg-fixed border-b-4'>
      <div className='px-3 justify-around pt-[6vh] mt-[8vh] lg:mt-[6vh] xl:h-auto leading-20 py-50 sm:py-25 pb-[2rem] md:pt-30 w-full mx-auto p-2 flex flex-col xl:flex-col items-center radial3'>
      <div className='min-h-[100vh] flex flex-col items-center'>
      <h1 className='py-2 mt-10 pl-14 pr-14 leading-20 text-3xl text-[white] bg-[#c24a48] border-[3px] border-solid border-[#161616] text-center'><span className="text-[black] font-bold bg-white p-2">
							DECODED <span className="text-[red]">Web </span>
						</span><hr/>Web Development Services</h1>

<div className='flex flex-col md:flex-row bg-[#191919] p-2' >
<div className='flex flex-col p-4'>
	  <div>
	  <Image src='https://i.ibb.co/6Hb0cB5/hero-Image.png' width={250} height={250}/>
	  </div>
        <h3 className='capitalize text-sm leading-20 tracking-widest bg-[#e3e3e3] text-[#7e4f4f] text-center my-20 lg:my-9 tracking-[8px] p-[17px] border-4 border-double'>
           High Converting Websites for Local businesses
<hr/> 10X The Value for 1/10th the price!
          </h3>
        </div>
        
          
          
          <div className='p-3 justify-evenly flex flex-col leading-[53px] text-xl font-bold text-black bg-[#f5f4f4] border-4 border-[#f3f3f3]'> <div className="bg-[#29282812] border-2 border-[#b62f43e8] display md:display-block"> <h2 className='my-2 py-2 tracking-widest leading-20 text-[#282828] text-xl m-auto px-4 bg-[#c44c4c]
    text-[#f7f1f1]'>Web & Digital Services Offered by Talented Professionals</h2></div>Need assistance with Web or Web3 services? Check out <br /><span className="text-[#aa283c] text-2xl animate-bounce"><Link href='/services' passHref> offered services</Link>.</span> </div>
         
</div>
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
        <div className='m-6 bg-[#000000a1] border-2 border-outset border-[#f3f3f3] px-4 py-6 w-full xl:w-[40%] lg:w-[60%]'><h3 className='my-10'>Featured Projects:</h3><ProjectItem
            title='Grandpa Ron&apos;s Lawns & Landscape, LLC'
            backgroundImg={grllc}
            projectUrl='/grandparon'
            tech='React, NextJS, Github, Vercel, Email.JS'
          /><ProjectItem
            title='ShipWreck Cove - Web3 Community on Telegram'
            backgroundImg={shipwreckcove}
            projectUrl='/shipwreckcove'
            tech='React, Github, Vercel, Email.JS'
          /><ProjectItem
          title='All Landscaping Services, LLC'
          backgroundImg={alsllc}
          projectUrl='/alsllc'
          tech='React, NextJS, Github, Vercel, Email.JS'
        />
        <Link href='/#projects'>
          <div className='cursor-pointer'>
          <span className="inline-block  rounded-full p-2  bg-gradient-to-r from-[#79263f] to-[#be294c] text-white text-sm px-10 border-2 border-white">  More Projects
        <svg className="w-6 h-6 mx-auto animate-pulse" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
            </svg>
    </span>
    </div>
    </Link>
          </div>
      </div>
    </div>
  );
};

export default Main;

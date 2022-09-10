import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';
import Img from '../public/assets/photo.png';
import Marquee from "react-fast-marquee";
import GlitchText from "./glitch-text2";
import {src} from "./bg.png";


const About = () => {
  return (
    <div id='about' className='relative w-full p-2 flex items-center py-16 bg-bg_image bg-cover bg-fixed'>
      <div className='py-20 px-2 max-w-[1240px] relative m-auto md:block grid-cols-3 gap-8 bg-[#ffffff] border-double border-4 rounded-sm rounded-tl-[80px] rounded-br-[80px] border-red-700'>
        <div className='col-span-3 leading-80'>
          <div className='uppercase leading-80 text-xl tracking-widest text-[#b13c3c]'>
            <h2 className='w-[100%] text-[#121212]' ><GlitchText>About</GlitchText></h2>
            <hr className='w-full'></hr>
          </div>
          
          <h2><br></br> <span className='text-[#b13c3c] mt-3 relatives'>|</span> <span className='about-title text-[#959494] mt-4'>Front-End Developer</span></h2>
          <h2 className='mx-10 leading-10 py-4 text-[#b33939] mt-4 text-center'>Introduction</h2><Marquee gradientColor='rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)' className='bg-[#1c1b1b] text-[#f2eded] w-full --gradient-color: rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) --gradient-width:200px;'>|| Web-Developer ⊛ NFT Creator ⊛ NFT Community Founder ⊛ Artist ⊛ Athlete ⊛ Shopify Dropshipping Expert ⊛ Digital Graphics Desinger </Marquee>
          
          <p className='mx-10 leading-10 indent-2 py-2 bg-[#272727] p-2 px-10 text-[#a2cb83] font-bold rounded-tl-[10px] rounded-br-[10px] mt-2 border-[#d660d8] border-2'>
          / / Web Developer with extensive focus on UI/UX design and optimal functionality / / 
          </p>
          
          <p className='flex font-bold mx-10 indent-7 leading-20 py-2 text-[#2b2a2a] mt-4'>

          
          
          I specialize in creating static Web Applications using HTML, CSS and JavaScript, as well as dynamic web applications using JavaScript Front-End libraries, frameworks, Content Management Systems (CMS), and more. As a freelancing content creator, I place high prirotization on aesthetic design as well as proper functionality. I am an active leader in the NFT space and am the founder, developer and artist of an NFT community that offers Web Development as a utility service.
            
          </p>
          <p className='mx-10 font-bold indent-7 leading-20 py-2 text-[#2b2a2a] mt-4'>
          My journey as a developer commenced while I was studying Mechanical Engineering at University of Massachusetts--Amherst. After taking keep intrest in static website development, I landed an internship with Bechtel Co.&apos;s IT sector located in New Delhi, India. This internship deployed my programming skills not only in HTML, CSS and JavaScript, but also in other Full-stack technologlies including Ajax, ASP.NET, MVC Frameworks, PHP, etc. At the end of the internship, I was able to create an inventory/asset management software which helped automate the process of logging which devices were issued within the office to the respective emplyees.<br/><br/>I have some strong Full-Stack foundation, however, my focus is primarly on Front-End Development.<br/>

          I strive to achieve transformational success for all brands and niches by offering Web Deveoplment services that deploy my expertise in Front-End Programming as well as my artistic background. I create top-of-the-line web applications with unique UI/UX design, customized to fit client&lsquo;s needs.<br>
            </br><br></br>By utilizing my background and expertise in full-stack web development, engineering and art, I build top-of-the line websites and applications that possess advanced functionalities and boast cutting edge (UX)User Experience as well as (UI) User Interface design.<br></br> Hire me to build your SEO optimzed website today.
          </p>
          <Link href='/#projects' passHref>
            <p className='mx-8 indent-2 py-2 text-green-700 underline cursor-pointer'>
              View my latest completed projects.
            </p>
          </Link>
        </div>
        <div className='scale-80 w-[80%] h-auto m-auto shadow-xl shadow-gray-700 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' priority='true'/>
        </div>
      </div>
    </div>
  );
};

export default About;
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/assets/logo2.png'
import ProjectItem from './HeroProject';
import grllc from '../public/assets/projects/grllc.png'
import shipwreckcove from '../public/assets/projects/shipwreckcove.png';
import alsllc from '../public/assets/projects/alsllc.png';

export const config = {
  unstable_runtimeJS: false
};

const About = () => {
  return (
    <div id='banner' className=' relative w-auto items-center m-2 border-4 border-white pt-8 bg-[#771d1d] rounded-2xl'>
                <div className='uppercase leading-80 text-xl tracking-widest text-[#b13c3c]'>
            <h2 className=' text-[#e9e6e8] text-center' >Welcome To <Image
              src={Logo}
              alt='/'
              width='100px'
              height= '90px'
              className='cursor-pointer self-baseline items-baseline align-baseline r-[10px] absolute'
              priority='true'
            /> Decoded Web <hr /> </h2> <h5 className='text-center text-red-800 bg-white leading-[4rem]'>| Web Development Services |</h5>
            <hr className='w-full'></hr>
          </div>
      <div className='pt-20 w-full relative flex flex-col m-auto lg:flex-row bg-[#0e0d0de9] rounded-sm border-red py-5 border-t-2 border-b-2 border-white'>
       
      <div className='bg-bg_ad bg-cover bg-fixed bg-no-repeat w-auto lg:w-[30%] rounded-2xl p-4 bg-[#181a1882] border-2 border-double'><div className='bg-[#000000e3] w-full h-full text-center rounded-2xl border-double border-4 p-6'> <h2 className='text-center text-xl font-[900] text-[#549751] p-6 leading-20 shimmer'> Local Business? <hr /> Get an Enterprise Website Developed & Setup for only $99 down!</h2><br /><button className='p-3 m-3 border-4 '>Contact Us</button></div></div>
       
       <div className="flex-col m-5">
        
        <div className='flex'>
        <div className=' md:w-[40%] w-[50%] my-6 p-6 text-xl border-4 border-double border-black bg-white text-black rounded-2xl font-black'><h2 className='text-center'>What We Offer?</h2><hr/><div className='my-20 indent-8'>Professional web services catered for your custom needs. </div><hr /> <div className='my-20 indent-8'>Solutions that include full support for content creation as well as setup. </div></div>
          <div className='uppercase leading-80 text-xl tracking-widest text-[#eeeeee] md:flex flex-row justify-between relative w-full items-center text-center font-black'>
            <div className=' mx-3 py-4 text-sm lg:text-md lg:my-0 w-full'><Image src='https://i.ibb.co/gdVhdNj/image1.png' width={300} height={300} className='rounded-3xl'/><br/> Website Development <hr />- Websites with prioritization on lead generation via focus on UI, UX and functionality. </div><div className='  mx-3 w-full py-4 lg:my-0 text-sm lg:text-md' ><Image src='https://i.ibb.co/3m0cVMd/image2.png' width={300} height={300} className='rounded-3xl'/><br/>Digital Design <hr />- Logo Design, Graphic Design & Branding.</div><div className=' mx-3 py-4 lg:my-0 text-sm w-full lg:text-md'><Image src='https://i.ibb.co/NKT8mWy/image3.png' width={300} height={300} className='rounded-3xl'/><br/>Online Presence Optimization<hr />- Content Setup & Management, Search Engine Optimization. </div>
          </div>   
          </div>
          <Link href='/services' passhref><button className='flex-row w-full h-20 100vh border-4'>List of Services</button></Link> 
          </div>
         
        </div>
        <div className='flex flex-col lg:flex-row radial'>
        <div className='m-6 bg-[#000000a1] border-4 border-[#f3f3f3] px-3 py-2 rounded-2xl xl:w-[40%] lg:w-[60%]'><h3 className='my-10'>Featured Projects:</h3><ProjectItem
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
        <hr />
        <div className='m-6'>
        <h2 className='text-md text-center p-8'>Professional custom websites full optimized available at affordable rates!</h2>
        <h4 className="bg-white text-center text-red-700 p-12 mx-6 rounded-xl ">
          Operating a business website in the United States can cost between $10,000 - $25,000. According to various sources, setting up a business website alone costs $3,500 on average. <br /> <br />
          While a lot of manpower is involved in website development, we believe website solutions should be accessible to most business owners at affordable rates. <br /><br />
          That is why, at Decoded Web, we pledge to charge low set-up costs for fully optimized web solutions so you can allocate your budget on marketing and other business-related needs. <br /><br />
          Our affordable pricing allows business owners to get access to SEO optimized websites for only $99 down. This price covers website development, SEO title & description inclusion, canological meta-tag inclusion, hosting and domain purchase as-well-as deployment!
          <br /><br />
        </h4>
        <h3 className='text-center my-7'>Three Step Process</h3>
        <div className='relative flex justify-evenly p-7 mx-6 rounded-xl bg-white'>
        <div className='flex flex-col text-red-700 text-center font-extrabold my-10 w-[12%]'><Image src='https://i.ibb.co/3MDCjpX/contact.png' width={150} height={150} className='rounded-3xl'/><h3 className='my-10'>Initiate Contact for Quotation</h3></div> 
        <Image src='https://i.ibb.co/P9b4qFk/rightarrow.png' width={100} height={100} className='rounded-3xl'/>    
        <div className='flex flex-col text-red-700 text-center font-extrabold my-10 w-[12%]'><Image src='https://i.ibb.co/YWFL0sM/quote-request.png' width={150} height={150} className='rounded-3xl'/><h3 className='my-10'>Process Order</h3></div> 
        <Image src='https://i.ibb.co/P9b4qFk/rightarrow.png' width={100} height={100} className='rounded-3xl'/>
        <div className='flex flex-col text-red-700 text-center font-extrabold my-10 w-[12%]'><Image src='https://i.ibb.co/Qn4qQKR/website.png' width={150} height={150} className='rounded-3xl'/><h3 className='my-10'>Receive Delivered Product</h3></div> 
        </div>
        </div>
        </div>
        <div className="flex-col w-auto h-auto bg-white text-center p-2  bg-bg_ad2 bg-fixed"><h2 className='text-gray-600 bg-[#ffffffdf] text-center text-[1.2rem] rounded-2xl tracking-widest leading-[2.4em] border-4 border-double border-black'> <span className='text-[#fdc140] styledtitle'> HALLOWEEN PROMO </span><hr /> <h5 className='text-[1rem] font-extrabold text-red-800'>Valid till November 3rd 2022</h5> Operating a <span className='text-[green]'>Landscaping Business</span>? Professional, high converting websites for only $399.99!<Image
              src={Logo}
              alt='/'
              width='100px'
              height= '90px'
              className='cursor-pointer self-baseline items-baseline align-baseline r-[10px] absolute'
              priority='true'
            /></h2> 
            </div>
    </div>
  );
};

export default About;

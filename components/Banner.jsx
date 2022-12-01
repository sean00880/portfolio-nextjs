import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/assets/logo2.png'
import ProjectItem from './HeroProject';
import grllc from '../public/assets/projects/grllc.png'
import shipwreckcove from '../public/assets/projects/shipwreckcove.png';
import alsllc from '../public/assets/projects/alsllc.png';
import BannerCards from './BannerCards'

export const config = {
  unstable_runtimeJS: false
};

const About = () => {
  return (
    <div id='banner' className=' relative w-auto items-center m-2 border-4 border-white pt-8 bg-[#222222] rounded-2xl'>
                <div className='uppercase leading-80 text-xl tracking-widest text-[#b13c3c]'>
            <h2 className=' text-[#e9e6e8] text-center text-[16px]' >Welcome To <Image
              src={Logo}
              alt='/'
              width='100px'
              height= '90px'
              className='cursor-pointer self-baseline items-baseline align-baseline r-[10px] absolute'
              priority='true'
            /> Decoded Web <hr /> </h2> <h5 className='text-center text-red-800 bg-white leading-[4rem] text-[14px]'>| Web Development Services |</h5>
            <hr className='w-full'></hr>
          </div>
            <div>
              <div className='w-full relative flex flex-col m-auto lg:flex-row bg-[#0e0d0de9] rounded-sm border-red py-5 border-t-2 border-b-2 border-white'>
       
      <div className='bg-bg_ad bg-cover m-6 bg-fixed bg-no-repeat w-auto lg:w-[30%] rounded-2xl p-4 bg-[#181a1882] border-4 border-solid'><div className='bg-[#000000e3] w-full h-full text-center rounded-2xl border-double border-4 p-6'> <h2 className='text-center text-xl font-[900] text-[#549751] p-6 leading-20 shimmer'> Local Business? <hr /> Get an Enterprise Website Developed & Setup for only $99 down!</h2><br /><Link href='/#contact'><button className='p-3 m-3 border-4 '>Contact Us</button></Link></div></div>
       
       <div className="flex flex-col items-center bg-[#f7f7f7] rounded-[13px] m-[6px] md:p-7">
        
        <div className='flex w-[100%]'>
        <div className='m-[3px] p-2 text-lg border-4 border-double border-black bg-white text-black rounded-2xl font-black'><h2 className='text-center'>What We Offer?</h2><hr/><div className='my-20 indent-8'>Professional web services catered for your custom needs. </div><hr /> <div className='my-20 indent-8'>Solutions that include full support for content creation as well as setup. </div></div>
          <div className='uppercase py-8 leading-80 text-xl tracking-widest text-[#8d2c2c] md:flex flex-row justify-between relative w-full items-center text-center font-black'>
            <div className='py-4 px-[4px] text-sm lg:text-md lg:my-0 md:w-full'><Image src='https://i.ibb.co/gdVhdNj/image1.png' width={300} height={300} className='rounded-3xl'/><br/> Website Development <hr />- Websites with prioritization on lead generation via focus on UI, UX and functionality. </div><div className='   md:w-full py-4 px-[4px] lg:my-0 text-sm lg:text-md' ><Image src='https://i.ibb.co/3m0cVMd/image2.png' width={300} height={300} className='rounded-3xl'/><br/>Digital Design <hr />- Logo Design, Graphic Design & Branding.</div><div className=' py-4 px-[4px] lg:my-0 text-sm md:w-full lg:text-md'><Image src='https://i.ibb.co/NKT8mWy/image3.png' width={300} height={300} className='rounded-3xl'/><br/>Online Presence Optimization<hr />- Content Setup & Management, Search Engine Optimization. </div>
          </div>   
          </div>
          <Link href='/services' passhref><button className='flex-row h-20 100vh border-4 m-8 p-8'>List of Services</button></Link> 
          </div>
         
        </div>
            <div className='text-[#662828] text-center p-4 text-[14px] bg-white min-h-[100vh]'>
            <h2 className='underline text-[16px]'>Why Choose Decoded Web?</h2>
            <h3 className='text-[14px]'>We offer all-in-one, done-for-you solutions that accelerate business growth by strategically tackling lead generation.</h3>
              <div className='flex-row text-left m-4'>
              <div className='flex-col my-2 p-2 leading-10'>

              <BannerCards className='flex card'/>
                
              <div className=' text-black  font-extrabold px-6'>
              1) We use some of the best technologies to develop web applications that produce high quality results. We ensure each of our websites is optimized for lead generation and targeted to the client organization&apos;s specific audinece. Next.JS is utilized in each of our websites to account for proper UI, UX, SEO and functionality.
              </div>  
              <div className=' text-black font-extrabold px-6'>
              2) Best programing practices are used to ensure efficiency and security.  
              </div>  
              <div className=' text-black font-extrabold px-6'>
              3) Our websites are very affordable. Website development can cost thousands of dollars. We charge standard one-time payments of as low as $399 for a full website setup and deployment with the option of split and partial payments.   
              </div>  
              <div className=' text-black  font-extrabold px-6'>
              4) We underpromise and overdeliver. We strive to provide value and our biggest priority is customer satisfaction. We offer resources, tools and information for our audience and guide them through the entire process, covering your blind-spots so you can focus on real growth for your organization.
              </div>  
                
              
              </div>
              
              </div>
              
              
            </div>
            <div className='text-white text-center p-4 text-[14px] '>
              <h2 className='underline text-[16px]'>High Converting Websites: Let&apos;s define our 4 key proven and tested ingredients of high converting websites at Decoded Web</h2> 
              <div className='flex-row text-left m-4'>
              <div className='flex-col my-2 p-2 leading-10'>
                
              <div className=' text-white  font-extrabold px-6'>
              1) <span className='text-red-300'>User Interface Design (UI)</span>  is used to describe the physical appearance of the website from a design standpoint. 
              </div>  
              <div className=' text-white font-extrabold px-6'>
              2) <span className='text-red-300'>User Experience (UX)</span> refers to the feel of the website (how it navigates and how user intuitive it is).
              </div>  
              <div className=' text-white font-extrabold px-6'>
              3) <span className='text-red-300'>SEO</span> is short for Search Engine Optimization. By ensuring proper implementation of meta tags, open-graph meta tags, titles, descriptions, canonical URL, personalized sitemap and on-page SEO on every page of your application, etc., you&apos;ll certainly gain higher visibility amongst local browsing visitors who are likely to convert into leads.  
              </div>  
              <div className=' text-white  font-extrabold px-6'>
              4) <span className='text-red-300'>Functionality</span>
              </div>  
                
              
              </div>
              
              </div>
              
              
            </div>
            </div>
      
        <div className='flex md:m-4 md:p-7 flex-col lg:flex-row radial'>
        <div className='my-4 bg-[#000000a1] border-4 border-[#f3f3f3] px-3 py-2 rounded-2xl xl:w-[40%] lg:w-[60%]'><h3 className='my-10'>Featured Projects:</h3><ProjectItem
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
        <h2 className='text-[21px] text-center p-8'>Professional custom websites fully optimized available at affordable rates!</h2>
        <h4 className="bg-white text-center text-[#2d1d1d] p-12 mx-6 rounded-xl ">
          Operating a business website in the United States can cost between $10,000 - $25,000. According to various sources, setting up a business website alone costs $3,500 on average. <br /> <br />
          While a lot of manpower is involved in website development, we believe website solutions should be accessible to most business owners at affordable rates. <br /><br />
          That is why, at Decoded Web, we pledge to charge low set-up costs for fully optimized web solutions so you can allocate your budget on marketing and other business-related needs. <br /><br />
          Our affordable pricing allows business owners to get access to SEO optimized websites for only $99 down. This price covers website development, SEO title & description inclusion, canological meta-tag inclusion, hosting and domain purchase as-well-as deployment!
          <br /><br />
        </h4>
        <h3 className='text-center my-7 text-[21px]'>Three Step Process</h3>
        <div className='relative flex flex-col md:flex-row justify-evenly p-7 mx-6 rounded-xl bg-white items-center border-[6px] border-outset border-[#763333b3]'>
        <div className='flex flex-col text-red-700 text-center font-extrabold my-10 p-[26px] w-full md:w-[20%] bg-[#dfdfdf] rounded-tl-[13px] rounded-tr-[4px] rounded-br-[13px] rounded-bl-[4px] border-4 border-[#891212] items-center'><Image src='https://i.ibb.co/3MDCjpX/contact.png' width={150} height={150} className='rounded-3xl w-[80%]'/><h3 className='my-10'>1 <hr/>Initiate Contact for Quotation</h3></div> 
        <Image src='https://i.ibb.co/P9b4qFk/rightarrow.png' width={100} height={100} className='rounded-3xl w-[40%]'/>    
        <div className='flex flex-col text-[#000000d1] text-center font-extrabold my-10 p-[26px] w-full md:w-[20%] bg-[#c9c7b1] rounded-tl-[13px] rounded-tr-[4px] rounded-br-[13px] rounded-bl-[4px] border-4 border-[#00000042] items-center'><Image src='https://i.ibb.co/YWFL0sM/quote-request.png' width={150} height={150} className='rounded-3xl w-[80%]'/><h3 className='my-10'>2 <hr/>Process Order</h3></div> 
        <Image src='https://i.ibb.co/P9b4qFk/rightarrow.png' width={100} height={100} className='rounded-3xl w-[40%]'/>
        <div className='flex flex-col text-[#a2cfa2] text-center font-extrabold my-10 p-[26px] w-full md:w-[20%] bg-[#101010d1] rounded-tl-[13px] rounded-tr-[4px] rounded-br-[13px] rounded-bl-[4px] border-4 border-[#c2dba7] items-center'><Image src='https://i.ibb.co/Qn4qQKR/website.png' width={150} height={150} className='rounded-3xl w-[80%]'/><h3 className='my-10'>3 <hr/>Receive Delivered Product</h3></div> 
        </div>
        </div>
        </div>
        <div className="flex-col w-auto h-auto bg-white text-center p-2  bg-bg_ad2 bg-fixed"><h2 className='text-gray-600 bg-[#ffffffdf] text-center text-[1.2rem] rounded-2xl tracking-widest leading-[2.4em] border-4 border-double border-black'> <span className='text-[#fdc140] styledtitle'> WINTER PROMO </span><hr /> <h5 className='text-[1rem] font-extrabold text-red-800'>Valid till January 31 2023</h5> Operating a <span className='text-[green]'>Landscaping Business</span>? Professional, high converting websites for only $399.99!<Image
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

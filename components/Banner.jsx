import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const config = {
  unstable_runtimeJS: false
};

const About = () => {
  return (
    <div id='banner' className=' relative w-full items-center py-16 bg-bg_image bg-cover bg-fixed'>
      <div className='py-20 w-full relative flex flex-col m-auto lg:flex-row bg-[#0e0d0de9] rounded-sm border-red px-5 border-t-2 border-b-2 border-white'>
       
      <div className='bg-bg_ad bg-cover bg-fixed bg-no-repeat w-full lg:w-[30%] mx-2 rounded-2xl p-4 bg-[#181a1882] border-2 border-double'><div className='bg-[#000000e3] w-full h-full text-center rounded-2xl border-double border-4 p-6'> <h2 className='text-center text-xl font-[900] text-[#549751] p-6 leading-20 shimmer'> Local Business? <hr /> Get an Enterprise Website Developed & Setup for only $99 down!</h2><br /><button className='p-3 m-3 border-4 '>Contact Us</button></div></div>
       
       <div className="flex-col">
        
        <div className='flex'>
        <div className=' md:w-[40%] w-[50%] my-6 p-6 text-xl border-4 border-double border-black bg-white text-black rounded-2xl font-black'><h2 className='text-center'>What We Offer?</h2><hr/><div className='my-20 indent-8'>Professional web services catered for your custom needs. </div><hr /> <div className='my-20 indent-8'>Solutions that include full support for content creation as well as setup. </div></div>
          <div className='uppercase p-20 leading-80 text-xl tracking-widest text-[#eeeeee] md:flex flex-row justify-between relative w-full items-center text-center font-black'>
            <div className='h-[30vh] w-full mx-3 my-24 text-sm lg:text-md lg:my-0'><Image src='https://i.ibb.co/gdVhdNj/image1.png' width={300} height={300} className='rounded-3xl'/><br/> Website Development <hr />- Websites with prioritization on lead generation via focus on UI, UX and functionality. </div><div className='h-[30vh] w-full mx-3 my-24 lg:my-0 text-sm lg:text-md' ><Image src='https://i.ibb.co/3m0cVMd/image2.png' width={300} height={300} className='rounded-3xl'/><br/>Digital Design <hr />- Logo Design, Graphic Design & Branding.</div><div className='h-[30vh] w-full mx-3 my-24 lg:my-0 text-sm lg:text-md'><Image src='https://i.ibb.co/NKT8mWy/image3.png' width={300} height={300} className='rounded-3xl'/><br/>Online Presence Optimization<hr />- Content Setup & Management, Search Engine Optimization. </div>
          </div>   
          </div>
          <Link href='/services' passhref><button className='flex-row w-full h-20 100vh border-4'>List of Services</button></Link> 
          </div>
        </div>
    </div>
  );
};

export default About;

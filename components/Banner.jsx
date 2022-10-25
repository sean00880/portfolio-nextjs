import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/assets/logo2.png'

export const config = {
  unstable_runtimeJS: false
};

const About = () => {
  return (
    <div id='banner' className=' relative w-auto items-center m-2 border-4 border-white pt-8 bg-[#771d1d] rounded-2xl'>
                <div className='uppercase leading-80 text-xl tracking-widest text-[#b13c3c]'>
            <h2 className=' text-[#e9e6e8] text-center text-[16px]' >Welcome To <Image
              src={Logo}
              alt='/'
              width='100px'
              height= '90px'
              className='cursor-pointer self-baseline items-baseline align-baseline r-[10px] absolute'
              priority='true'
            /> Decoded Web <hr /> </h2> <h5 className='text-center text-red-800 bg-white tracking-[1px] leading-[4rem]'>| Web Development Services |</h5>
            <hr className='w-full'></hr>
          </div>
      <div className='pt-20 w-full relative flex flex-col m-auto lg:flex-row bg-[#161616f2] rounded-sm border-red py-5 border-t-2 border-b-2 border-white'>
       
      <div className='bg-bg_ad bg-cover bg-fixed bg-no-repeat w-auto lg:w-[30%] rounded-2xl p-4 bg-[#181a1882] border-2 border-double'><div className='bg-[#000000e3] w-full h-full text-center rounded-2xl border-double border-4 p-6'> <h2 className='text-center text-xl font-[900] text-[#549751] p-6 leading-20 shimmer'> Local Business? <hr /> Get an Enterprise Website Developed & Setup for only $99 down!</h2><br /><button className='p-3 m-3 border-4 '>Contact Us</button></div></div>
       
       <div className="flex-col m-5">
        
        <div className='flex'>
        <div className=' md:w-[40%] w-[50%] my-6 p-6 text-xl border-4 border-double border-black bg-white text-black rounded-2xl font-black'><h2 className='text-center'>What We Offer?</h2><hr/><div className='my-20 indent-8'>Professional web services catered for your custom needs. </div><hr /> <div className='my-20 indent-8'>Solutions that include full support for content creation as well as setup. </div></div>
          <div className='uppercase leading-80 text-xl tracking-widest text-[#eeeeee] md:flex flex-row justify-between relative w-full items-center text-center font-black'>
            <div className=' mx-3 py-4 text-sm lg:text-md lg:my-0'><Image src='https://i.ibb.co/gdVhdNj/image1.png' width={300} height={300} className='rounded-3xl'/><br/> Website Development <hr />- Websites with prioritization on lead generation via focus on UI, UX and functionality. </div><div className='  mx-3 py-4 lg:my-0 text-sm lg:text-md' ><Image src='https://i.ibb.co/3m0cVMd/image2.png' width={300} height={300} className='rounded-3xl'/><br/>Digital Design <hr />- Logo Design, Graphic Design & Branding.</div><div className=' mx-3 py-4 lg:my-0 text-sm lg:text-md'><Image src='https://i.ibb.co/NKT8mWy/image3.png' width={300} height={300} className='rounded-3xl'/><br/>Online Presence Optimization<hr />- Content Setup & Management, Search Engine Optimization. </div>
          </div>   
          </div>
          <Link href='/services' passhref><button className='flex-row w-full h-20 100vh border-4'>List of Services</button></Link> 
          </div>
         
        </div>
        <hr />
        <div className="flex-col w-auto h-auto bg-white text-center p-2  bg-bg_ad2 bg-fixed bg-cover"><h2 className='text-gray-600 bg-[#ffffffdf] text-center text-[1.2rem] rounded-2xl tracking-widest leading-[2.4em] border-4 border-double border-black'> <span className='text-[#fdc140] styledtitle'> HALLOWEEN PROMO </span><hr /> <h5 className='text-[1rem] font-extrabold text-red-800'>Valid till November 3rd 2022</h5> Operating a <span className='text-[green]'>Landscaping Business</span>? Professional, high converting websites for only $399.99!<Image
              src={Logo}
              alt='/'
              width='100px'
              height= '90px'
              className='cursor-pointer self-baseline items-baseline align-baseline r-[10px] absolute'
              priority='true'
            /></h2> </div>
    </div>
  );
};

export default About;

import React from 'react';
import Image from 'next/image';

export const config = {
  unstable_runtimeJS: false
};

const About = () => {
  return (
    <div id='banner' className=' relative w-full items-center py-16 bg-bg_image bg-cover bg-fixed'>
      <div className='py-20 w-full relative m-auto lg:flex-row bg-[#0e0d0de9] rounded-sm border-red px-5 border-t-2 border-b-2 border-white'>
        <div className='flex'>
        <div className=' md:w-[40%] w-[50%] m-6 p-6 text-xl bg-white text-black rounded-2xl font-black'><h2 className='text-center'>What We Offer?</h2><hr/><div className='my-20 indent-8'>Professional web services catered for your custom needs. </div><hr /> <div className='my-20 indent-8'>Solutions that include full support for content creation as well as setup. </div></div>
          <div className='uppercase leading-80 text-xl tracking-widest text-[#eeeeee] md:flex flex-row justify-between relative w-full items-center text-center font-black'>
            <div className='h-[30vh] sm:w-[60%] w-[77%] mx-3 my-24 text-sm lg:text-xl lg:my-0'><Image src='https://i.ibb.co/gdVhdNj/image1.png' width={300} height={300} className='rounded-3xl'/><br/> Website Development <hr />- Websites with focus on UI, UX and SEO. </div><div className='h-[30vh] w-[77%] sm:w-[60%] mx-3 my-24 lg:my-0 text-sm lg:text-xl' ><Image src='https://i.ibb.co/3m0cVMd/image2.png' width={300} height={300} className='rounded-3xl'/><br/>Digital Design </div><div className='h-[30vh] w-[77%] sm:w-[60%] mx-3 my-24 lg:my-0 text-sm lg:text-xl'><Image src='https://i.ibb.co/NKT8mWy/image3.png' width={300} height={300} className='rounded-3xl'/><br/>Online Presence Optimization </div>
          </div>   
          </div>
          <button className='flex-row w-full h-20 100vh border-4'>View Our Services</button>    
        </div>
    </div>
  );
};

export default About;

import React from 'react';
import Image from 'next/image';




const About = () => {
  return (
    <div id='banner' className=' relative w-full items-center py-16 bg-bg_image bg-cover bg-fixed'>
      <div className='py-20 w-full relative m-auto lg:flex-row bg-[#0e0d0de9] rounded-sm border-red px-5 border-t-2 border-b-2 border-white'>
        <div className='flex'>
        <div className=' md:w-[40%] w-[50%] text-xl'><h2 className='text-center'>What We Offer?</h2><hr/><div className='my-20 indent-8'>Professional web services catered for your custom needs. </div><hr /> <div className='my-20 indent-8'>Solutions that include full support for content creation as well as setup. </div></div>
          <div className='uppercase leading-80 text-xl tracking-widest text-[#eeeeee] md:flex flex-row justify-between relative w-full items-center text-center font-black'>
            <div className='h-[30vh] sm:w-[60%] w-[30%] mx-3 my-20 lg:my-0'><Image src='https://cdn-icons-png.flaticon.com/512/2888/2888407.png' width={300} height={300} className='rounded-3xl'></Image><br/> Website Development </div><div className='h-[30vh] w-[30%] sm:w-[60%] mx-3 my-20 lg:my-0' ><Image src='https://cdn-icons-png.flaticon.com/512/2888/2888436.png' width={300} height={300} className='rounded-3xl'></Image><br/>Digital Design </div><div className='h-[30vh] w-[30%] sm:w-[60%] mx-3 my-20 lg:my-0'><Image src='https://cdn-icons-png.flaticon.com/512/1458/1458533.png' width={300} height={300} className='rounded-3xl'></Image><br/>Online Presence Optimization </div>
          </div>   
          </div>
          <button className='flex-row w-40 h-20 mx-10'>Services</button>    
        </div>
    </div>
  );
};

export default About;

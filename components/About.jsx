import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';
import PageSpeed from '../public/assets/siteperformance.jpg';
import Review from '../public/assets/review.jpg';
import Marquee from "react-fast-marquee";
import GlitchText from "./glitch-text2";

export const config = {
  unstable_runtimeJS: false
};

const About = () => {
  return (
    <div id='about' className=' relative w-full bg- p-2 flex items-center py-16 bg-[#ffffffed]'>
      <div className='py-20 px-2 w-full relative m-auto md:block grid-cols-3 gap-8 bg-[#181818fa] border-double border-4 rounded-sm rounded-tl-[80px] rounded-br-[80px] border-red-'>
        <div className='col-span-3 leading-80'>
          <div className='uppercase leading-80 text-xl tracking-widest text-[#b13c3c]'>
            <h2 className='w-[100%] text-[#f5f5f5] text-center' ><GlitchText>Mission</GlitchText></h2>
            <hr className='w-full'></hr>
          </div>
          
          <h2 className='text-right my-10'><br/><span className='about-title text-[#f4f3f3] text-[29px] my-10 text-right'><span className='text-[#b13c3c] my-10 relatives'>|</span> Empower Your Brand</span>  </h2>
          <Marquee gradientColor='rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)' className='bg-[#1c1b1b] text-[#f2eded] w-full --gradient-color: rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) --gradient-width:200px border-4 leading-10 text-2xl border-[#ffffffcf] tracking-widest'>⊛ Web-Development ⊛ Logo Design ⊛ SEO ⊛ Branding & Brand ManagementMarketing ⊛ Digital Graphic Design ⊛ Video Creation ⊛ Branding & Brand Management </Marquee>
          
          <p className='mx-10 text-center leading-10 indent-2 py-7 bg-[#191919] p-2 px-10 text-[#b9f68a] font-bold rounded-tl-[10px] rounded-br-[10px] my-10 border-[#cecece] border-2'>
          Web  Development, Digital Design and Marketing services with extensive focus on UI/UX and functionality optimization. 
          </p>
          <div className='about'>
          <h2 className='text-[#f5f5f5] font-extrabold relative tracking-[5px] leading-[2em]'>Digital Solutions That Work</h2>
          <p className='mx-10 font-bold indent-7 leading-20 py-2 text-[#f5f5f5] my-4 flex'>
          
          
          The focus here at DECODED Web is to provide unique digital solutions that will truly enhance your customers&apos; browsing experience and drastically improve your business or brand&apos;s online presence. We design, develop and create digital content that will highlight your brand in it&apos;s best light. 
          
          </p>
          <div className='scale-80 w-[100%] lg:w-[60%] h-auto m-auto shadow-lg bg-white shadow-gray-700 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={PageSpeed} className='rounded-xl' alt='/' loading='lazy'/>
        </div>
          <p className='mx-10 font-bold indent-7 leading-20 py-2 text-[#f5f5f5] my-4'>
          How are we able to create high converting web applications? We achieve this by adopting and utilizing the ideal technology stack and following best programming practices. Next.JS offers an arsenal of tools, including client-side-rendering as well as server-side rendering, inherent Search Egnine Optimization (SEO), and more. A powerful framework like Next.JS, combined with the vast plethora of libraries and tools available at an angency&apos;s disposal allows for beatiful interfaces to emerge that are packed with all of the bells and whistles needed for a stand-out applications. The inherent SEO features assist with visibility on search engines, making the application suitable for lead generation and customer acquisition.
          </p>
          <hr />
          <h2 className='text-[#f5f5f5] font-extrabold text-right tracking-[5px] leading-[2em]'>Websites That Shape Your Online Presence</h2>
          <p className='mx-10 font-bold indent-7 leading-20 py-2 text-[#f5f5f5] my-4'>
          
          Your online presence is crucial in 21st century if you own a business or a brand of any kind. According to <span className='text-red'> <a href="https://visualobjects.com/digital-marketing/blog/benefits-of-local-seo"> Visual Objects</a></span>, consumers report that sixty-one percent (61%) of their internet searches originate from a mobile device.
Nearly half of consumers (44%) claim to frequently use search engines to learn more about establishments and services nearby.
76% of customers will look up a business&apos;s website before going to one of its physical locations.
In fact, 45% of customers are likely to visit a business&apos;s physical location after discovering a strong online presence. <br />
</p>
<div className='scale-80  w-[100%] lg:w-[60%] h-auto m-auto shadow-lg bg-white shadow-gray-700 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={Review} className='rounded-xl' alt='/'  loading='lazy'/>
        </div>
<p className='mx-10 font-bold indent-7 leading-20 py-2 text-[#f5f5f5] my-4'>
          
          This means a website that exhibits great &apos;User Interface Design&apos; (UI), addresses ideal &apos;User Experience&apos; (UX) needs and is optimized for searches (Search Engine Optimization or SEO) will organically help you target your desired audience and allow you to showcase your brand at its very best. This means broader exposure to your brand and hire number of leads and conversions.
</p>
<hr />
<h2 className='text-[#f5f5f5] font-extrabold tracking-[5px] leading-[2em]'>High Production Quality</h2>
          <p className='mx-10 font-bold indent-7 leading-20 py-2 text-[#f5f5f5] my-4'>
         
          We strive to achieve transformational success for all brands and niches. By utilizing our versatile backgrounds and expertise in various fields that integrate Science, Technology, Engineering, Math (STEM) and art, we build top-of-the line content that boasts originality, excellent performance and professionalism.<br/><br/>Hire us to build your personalized SEO optimzed content today.
          </p>
          <div className='scale-80 w-[100%] lg:w-[60%] bg-black h-auto m-auto shadow-xl shadow-[white] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' loading='lazy'/>
        </div>
          <Link href='/#projects' passHref>
            <p className='mx-8 indent-2 my-10 py-5 text-[#9f3b3b] text-2xl font-black bg-[#dedede] rounded-3xl underline cursor-pointer text-center'>
              View our latest completed projects. 
            </p>
          </Link>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';
import Marquee from "react-fast-marquee";
import GlitchText from "./glitch-text2";


const About = () => {
  return (
    <div id='about' className=' relative w-full p-2 flex items-center py-16 bg-bg_image bg-cover bg-fixed'>
      <div className='py-20 px-2 max-w-[1640px] relative m-auto md:block grid-cols-3 gap-8 bg-[#ffffff] border-double border-4 rounded-sm rounded-tl-[80px] rounded-br-[80px] border-red-700'>
        <div className='col-span-3 leading-80'>
          <div className='uppercase leading-80 text-xl tracking-widest text-[#b13c3c]'>
            <h2 className='w-[100%] text-[#121212] text-center' ><GlitchText>Mission</GlitchText></h2>
            <hr className='w-full'></hr>
          </div>
          
          <h2 className='text-right'><br/><span className='about-title text-[#959494] mt-4 text-right'><span className='text-[#b13c3c] m-3 relatives'>|</span> Empower Your Brand</span>  </h2>
          <h2 className='mx-10 leading-10 py-4 text-[#b33939] mt-10 text-center'>About:</h2><Marquee gradientColor='rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)' className='bg-[#1c1b1b] text-[#f2eded] w-full --gradient-color: rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) --gradient-width:200px;'>|| Web-Developer ⊛ NFT Creator ⊛ NFT Community Founder ⊛ Artist ⊛ Athlete ⊛ Shopify Dropshipping Expert ⊛ Digital Graphics Desinger </Marquee>
          
          <p className='mx-10 text-center leading-10 indent-2 py-7 bg-[#272727] p-2 px-10 text-[#a2cb83] font-bold rounded-tl-[10px] rounded-br-[10px] mt-2 border-[#d660d8] border-2'>
          Web  Development, Digital Design and Marketing services with extensive focus on UI/UX and functionality optimization. 
          </p>
          <div className='about'>
          <h2 className='text-[#181818d1] font-extrabold'>Digital Solutions That Work</h2>
          <p className='mx-10 font-bold indent-7 leading-20 py-2 text-[#2b2a2a] mt-4'>
          
          The focus here at DECODED Web is to provide unique digital solutions that will truly enhance your customers' browsing experience and drastically improve your business or brand's online presence. We design, develop and create digital content that will highlight your brand in it's best light. 
          
          </p>
          <p className='mx-10 font-bold indent-7 leading-20 py-2 text-[#2b2a2a] mt-4'>
          How are we able to create high converting web applications? We achieve this by adopting and utilizing the ideal technology stack and following best programming practices. Next.JS offers an arsenal of tools, including client-side-rendering as well as server-side rendering, inherent Search Egnine Optimization (SEO), and more. A powerful framework like Next.JS, combined with the vast plethora of libraries and tools available at an angency&apos;s disposal allows for beatiful interfaces to emerge that are packed with all of the bells and whistles needed for a stand-out applications. The inherent SEO features assist with visibility on search engines, making the application suitable for lead generation and customer acquisition.
          </p>
          <h2 className='text-[#181818d1] font-extrabold'>Websites That Shape Your Online Presence</h2>
          <p className='mx-10 font-bold indent-7 leading-20 py-2 text-[#2b2a2a] mt-4'>
          
          Your online presence is crucial in 21st century if you own a business or a brand of any kind. According to <span className='text-red'> <a href="https://visualobjects.com/digital-marketing/blog/benefits-of-local-seo"> Visual Objects</a></span>, consumers report that sixty-one percent (61%) of their internet searches originate from a mobile device.
Nearly half of consumers (44%) claim to frequently use search engines to learn more about establishments and services nearby.
76% of customers will look up a business&apos;s website before going to one of its physical locations.
In fact, 45% of customers are likely to visit a business&apos;s physical location after discovering a strong online presence. <br />
</p>
<p className='mx-10 font-bold indent-7 leading-20 py-2 text-[#2b2a2a] mt-4'>
          
          This means a website that exhibits great 'User Interface Design' (UI), addresses ideal 'User Experience' (UX) needs and is optimized for searches (Search Engine Optimization or SEO) will organically help you target your desired audience and allow you to showcase your brand at its very best. This means broader exposure to your brand and hire number of leads and conversions.
</p>
<h2 className='text-[#181818d1] font-extrabold'>High Production Quality</h2>
          <p className='mx-10 font-bold indent-7 leading-20 py-2 text-[#2b2a2a] mt-4'>
         
          We strive to achieve transformational success for all brands and niches. By utilizing our versatile backgrounds and expertise in various fields that integrate Science, Technology, Engineering, Math (STEM) and art, we build top-of-the line content that boasts originality, excellent performance and professionalism.<br/><br/>Hire us to build your personalized SEO optimzed content today.
          </p>
          <Link href='/#projects' passHref>
            <p className='mx-8 indent-2 py-2 text-green-700 underline cursor-pointer'>
              View our latest completed projects. 
            </p>
          </Link>
        </div>
        <div className='scale-80 w-[80%] h-auto m-auto shadow-xl shadow-gray-700 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' priority='true'/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;

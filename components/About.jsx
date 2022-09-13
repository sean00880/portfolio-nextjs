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
    <div id='about' className=' relative w-full p-2 flex items-center py-16 bg-bg_image bg-cover bg-fixed'>
      <div className='py-20 px-2 max-w-[1240px] relative m-auto md:block grid-cols-3 gap-8 bg-[#ffffff] border-double border-4 rounded-sm rounded-tl-[80px] rounded-br-[80px] border-red-700'>
        <div className='col-span-3 leading-80'>
          <div className='uppercase leading-80 text-xl tracking-widest text-[#b13c3c]'>
            <h2 className='w-[100%] text-[#121212]' ><GlitchText>About</GlitchText></h2>
            <hr className='w-full'></hr>
          </div>
          
          <h2><br></br> <span className='text-[#b13c3c] mt-3 relatives'>|</span> <span className='about-title text-[#959494] mt-4'>Dev</span></h2>
          <h2 className='mx-10 leading-10 py-4 text-[#b33939] mt-4 text-center'>Mission</h2><Marquee gradientColor='rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)' className='bg-[#1c1b1b] text-[#f2eded] w-full --gradient-color: rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) --gradient-width:200px;'>|| Web-Developer ⊛ NFT Creator ⊛ NFT Community Founder ⊛ Artist ⊛ Athlete ⊛ Shopify Dropshipping Expert ⊛ Digital Graphics Desinger </Marquee>
          
          <p className='mx-10 leading-10 indent-2 py-2 bg-[#272727] p-2 px-10 text-[#a2cb83] font-bold rounded-tl-[10px] rounded-br-[10px] mt-2 border-[#d660d8] border-2'>
          / / Web Developer with extensive focus on UI/UX design and optimal functionality / / 
          </p>
          <div className='about'>
          <h2 className='text-[#181818d1] font-extrabold'>Prioritization on Conversions</h2>
          <p className='mx-10 font-bold indent-7 leading-20 py-2 text-[#2b2a2a] mt-4'>
          
          The focus here at DECODED Web is to design and develop static websites and applications using technology stacks built around HTML, CSS and JavaScript through the utilization of advanced JavaScript libraries & frameworks, Content Management Systems (CMS), and more. As a freelancing content creator, I place high prirotization on aesthetic design as well as proper functionality. I am the founder, developer and artist of a rising NFT community that strives to offer Web Development services as utility via Blockchain.
          
          </p>
          <p className='mx-10 font-bold indent-7 leading-20 py-2 text-[#2b2a2a] mt-4'>
          How am I able to create high converting web applications? I achieve this by adopting and utilizing the ideal technology stack and following best programming practices. Next.JS offers an arsenal of tools, including client-side-rendering as well as server-side rendering, inherent SEO optimization, and more. A powerful framework like Next.JS, combined with the vast plethora of libraries available at a developer's disposal allows for beatiful interfaces to emerge that are packed with all of the bells and whistles needed for a stand-out application. The inherent SEO features assist with visibility on search engines, making the application suitable for lead generation or customer acquisition.
          </p>
          <h2 className='text-[#181818d1] font-extrabold'>Shaping Your Online Presence</h2>
          <p className='mx-10 font-bold indent-7 leading-20 py-2 text-[#2b2a2a] mt-4'>
          
          Shaping your Online Presence can is crucial in 21st century if you own a business or a brand of any kind. According to <span className='text-red'> <a href="https://visualobjects.com/digital-marketing/blog/benefits-of-local-seo"> Visual Objects</a></span>, consumers report that sixty-one percent (61%) of their internet searches originate from a mobile device, highlighting the prospects for businesses to find new clients through search.
          Younger consumers are more likely than older consumers to conduct informational searches on mobile devices; 57% of those under the age of 35 report conducting at least half of their internet searches from a mobile device, compared to 53% of those between the ages of 35 and 54 and only 31% of those over the age of 55.
Nearly half of consumers (44%) claim to frequently use search engines to learn more about establishments and services nearby.
76% of customers will look up a business' website before going to one of its physical locations.
In fact, 45% of customers are likely to visit a business's physical location after discovering a strong online presence.
</p>
<h2 className='text-[#181818d1] font-extrabold'>The Product</h2>
          <p className='mx-10 font-bold indent-7 leading-20 py-2 text-[#2b2a2a] mt-4'>
         
          I strive to achieve transformational success for all brands and niches by offering Web Deveoplment services that deploy my expertise in Front-End Programming as well as my artistic background.
          </p>
          <p className='mx-10 font-bold indent-7 leading-20 py-2 text-[#2b2a2a] mt-4'>
          By utilizing my background and expertise in full-stack web development, engineering and art, I build top-of-the line websites and applications that possess advanced functionalities and boast cutting edge User Experience (UX) as well as User Interface (UI) design  customized to accommodate all primary client needs.<br/><br/> Hire me to build your SEO optimzed website today.
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
    </div>
  );
};

export default About;

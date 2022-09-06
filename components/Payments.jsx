import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';
import Marquee from "react-fast-marquee";
import GlitchText from "./glitch-text4";
import {src} from "./bg.png";


const Payments = () => {
  return (
    <div id='payments' className='relative w-full p-2 flex items-center py-16 bg-bg_image3 bg-cover bg-fixed'>
      <div className='py-20 px-2 max-w-[1240px] relative m-auto md:block grid-cols-3 gap-8 bg-bg_image8 bg-cover bg-fixed border-double border-4 rounded-sm rounded-tl-[80px] rounded-br-[80px] border-red-700'>
        <div className='col-span-3 leading-80'>
          <div className='uppercase leading-80 text-xl tracking-widest text-[#b13c3c]'>
            <h2 className='w-[100%] text-[#e7b6db]' ><GlitchText>Hire Me</GlitchText></h2>
            <hr className='w-full'></hr>
          </div>
          
          <h2 className='mx-10 leading-10 py-4 text-[#dbdada] mt-4 text-center'>Services</h2><Marquee gradientColor='rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)' className='bg-[#1c1b1b] text-[#f2eded] w-full --gradient-color: rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) --gradient-width:200px;'>|| Web-Developer ⊛ NFT Creator ⊛ NFT Community Founder ⊛ Artist ⊛ Athlete ⊛ Shopify Dropshipping Expert ⊛ Digital Graphics Desinger </Marquee>
          <p className='mx-10 leading-10 indent-2 py-2 bg-[#e6e4e4] p-2 px-10 text-[#913541] font-bold rounded-tl-[10px] rounded-br-[10px] mt-2 border-[#1c1c1c] border-2'>
          &#47; &#47;  Begin a &apos;Quote Request&apos; to dertermine which package best fits your needs. &#47; &#47;  
          </p>
          <div className="border-2 border-white">
          <p className='mx-10 indent-2 leading-7 py-2 text-[#2b2a2a] mt-4'>
          </p>
          </div>
        </div>
        <div className=' w-[80%] flex-col xl:flex-row  h-auto m-auto shadow-xl shadow-gray-700 rounded-xl flex items-center justify-center p-4 '>
          <div className='flex leading-20 flex-col border-2 border-black  h-full w-full xl:h-[65vw] 2xl:h-[40vw] xl:w-[23vw] p-5 m-4 text-center text-black hover:scale-105 ease-in duration-300 bg-[#e4e3e3cd]'>
            <h2 className='my-2 mt-auto'>Basic Website Build & Setup</h2><hr/>
            <h4 className='my-2 mt-auto'>Website built and deployed from start to finish with focus on responsiveness, UI design, UX and functionality. Responsive. <div className='bg-black p-4 m-3 text-white rounded-br-[31px] rounded-tl-[31px] rounded-tr-[8px] rounded-bl-[8px] leading-14'><div className='bg-[#e9e9e9] text-black xl:rounded-br-[110px] xl:rounded-tl-[110px] rounded-br-[40px] rounded-tl-[40px] px-3 my-14'> Example Websites:</div> Local Small Business, Salon, Store Front, Simple Blog, Professional Portfolio, SaaS Product Store, etc.</div></h4>
            <h2 className='mt-auto'>$399.99</h2>
            <button className="text-center border-2 bg-[#b13c3c] border-black mt-auto mb-2 bottom-4 h-[5vw] text-lg">Purchase This</button>
          </div>
          <div className='flex leading-20 flex-col border-2 border-black h-full w-full xl:h-[65vw] xl:w-[23vw] 2xl:h-[40vw] p-5 m-4 text-center text-black hover:scale-105 ease-in duration-300 bg-[#e4e3e3cd] '>
            <h2 className='my-2 mt-auto'>Premium Website Build & Setup</h2><hr/>
            <h4 className='my-2 mt-auto leading-14'>Multi-Page website built and deployed from start to finish with focus on usability, UI design, UX, functionality, responsiveness and SEO. <br></br>Highly optimized for lead-generation and sales conversion.<div className='bg-black p-4 m-3 text-white rounded-br-[31px] rounded-tl-[31px] rounded-tr-[8px] rounded-bl-[8px]'><div className='bg-[#e9e9e9] text-black xl:rounded-br-[110px] xl:rounded-tl-[110px] rounded-br-[40px] rounded-tl-[40px] px-3 my-14'> Example Websites:</div> Local Business, Handyman Services, Huge Store Fronts, Complex Blogs, Professional Portfolio, SaaS Product Store, eCommerce store, NFT Landing Page.</div></h4>
            <h2 className='mt-auto'>$699.99</h2>
            <button className="text-center border-2 bg-[#b13c3c] border-black mt-auto mb-2 bottom-4 h-[5vw] text-lg">Purchase This</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
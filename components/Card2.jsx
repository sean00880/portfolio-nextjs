
import Link from 'next/link'
import React from 'react'

const Card2 = () => {
  return (
    <div className='flex leading-20 flex-col border-2 border-black  h-full w-full xl:h-[75vw] 2xl:h-[58vw] xl:w-[23vw] p-5 mx-5 m-4 text-center text-black hover:scale-105 ease-in duration-300 bg-[#e4e3e3cd] mt-auto'>
    <h2 className='my-2 mt-auto'>Test Pay</h2><hr/>
    <h4 className='my-2 mt-auto'>Multi-Page website built and deployed from start to finish with focus on usability, UI design, UX, functionality, responsiveness and SEO.
Highly optimized for lead-generation and sales conversion.<div className='bg-black p-4 m-3 text-white rounded-br-[31px] rounded-tl-[31px] rounded-tr-[8px] rounded-bl-[8px] leading-14'><div className='bg-[#e9e9e9] text-black xl:rounded-br-[110px] xl:rounded-tl-[110px] rounded-br-[40px] rounded-tl-[40px] px-3 my-14'> Example Websites:</div> Local Business, Handyman Services, Huge Store Fronts, Complex Blogs, Professional Portfolio, SaaS Product Store, eCommerce store, NFT Landing Page.</div></h4>
    <h2 className='mt-auto'>$4.99</h2>
    
       <Link href='/contact' passhref>
      <button className='bg-[#d7d7d776] mt-auto p-2 rounded-md z-0 relative'>Message Us</button>
    </Link>
    
  </div>
  );
};

export default Card2;

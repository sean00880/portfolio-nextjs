import React from 'react';
import Marquee from "react-fast-marquee";
import GlitchText from "./glitch-text4";
import {useEffect} from 'react';
import Card from './Card'
import Card2 from './Card2'
import Contact from './Contact2';
import Link from 'next/link'
import Image from 'next/Image'
import Logo from '../public/assets/logo2.png'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.



const Payments = () => {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  return (
    <>
    <div id='services' className='relative w-full p-2 flex items-center py-16 pt-40 bg-bg_image3 bg-cover bg-fixed'>
      
      <div className='py-20 w-full px-2 mt-10 relative m-auto md:block grid-cols-3 gap-8 bg-[#1b1b1be2] border-double border-4 rounded-sm rounded-tl-[80px] rounded-br-[80px] border-[#a15555]'>
      <div className='uppercase leading-80 text-xl tracking-widest text-[#b13c3c]'>
            <h2 className='w-[100%] text-[#f0efefe4] text-center' >Services</h2>
            <hr className='w-full'></hr>
          </div>
      <div id='banner' className=' relative w-full items-center py-16 bg-[#ffffffd4] rounded-2xl border-4 my-3'>
                
                <div className='py-10 w-full relative flex flex-col m-auto lg:flex-row bg-[#0e0d0de9] rounded-sm border-red border-t-2 border-b-2 border-white'>
                 
                <div className='bg-bg_ad bg-cover bg-fixed bg-no-repeat w-full lg:w-[30%] rounded-2xl p-4 bg-[#181a1882] border-2 border-double'><div className='bg-[#000000e3] w-full h-full text-center rounded-2xl border-double border-4 p-6'> <h2 className='text-center text-xl font-[900] text-[#549751] p-6 leading-20 shimmer'> Local Business? <hr /> Get an Enterprise Website Developed & Setup for only $99 down!</h2><br /><button className='p-3 m-3 border-4 '>Contact Us</button></div></div>
                 
                 <div className="flex-col bg-[#ffffffd4] border-2 border-[#d3d0d0] my-2 p-3 rounded-2xl">
                  
                 <div className='flex'>
        <div className=' md:w-[40%] w-[50%] my-6 p-2 text-lg border-4 border-double border-black bg-white text-black rounded-2xl font-black'><h2 className='text-center'>What We Offer?</h2><hr/><div className='my-20 indent-3 lg:indent-6'>Professional web services catered for your custom needs. </div><hr /> <div className='my-20 indent-8'>Solutions that include full support for content creation as well as setup. </div></div>
          <div className='uppercase leading-80 text-xl tracking-widest text-[#7e3333] md:flex flex-row justify-between relative w-full items-center text-center font-black'>
            <div className=' mx-3 py-4 text-sm lg:text-md lg:my-0'><Image src='https://i.ibb.co/gdVhdNj/image1.png' width={300} height={300} className='rounded-3xl'/><br/> Website Development <hr className='text-black bg-black' />- Websites with prioritization on lead generation via focus on UI, UX and functionality. </div><div className='  mx-3 py-4 lg:my-0 text-sm lg:text-md' ><Image src='https://i.ibb.co/3m0cVMd/image2.png' width={300} height={300} className='rounded-3xl'/><br/>Digital Design <hr />- Logo Design, Graphic Design & Branding.</div><div className=' mx-3 py-4 lg:my-0 text-sm lg:text-md'><Image src='https://i.ibb.co/NKT8mWy/image3.png' width={300} height={300} className='rounded-3xl'/><br/>Online Presence Optimization<hr />- Content Setup & Management, Search Engine Optimization. </div>
          </div>   
          </div>
                    </div>
                  </div>
                  <div className="flex-col w-auto h-auto bg-white text-center m-6 p-2 rounded-2xl bg-bg_ad2 bg-fixed"><h2 className='text-gray-600 bg-[#ffffffdf] text-center text-[1.2rem] rounded-2xl tracking-widest leading-[2.4em] border-4 border-double border-black'> <span className='text-[#fdc140] styledtitle'> HALLOWEEN PROMO </span><hr /> <h5 className='text-[1rem] font-extrabold text-red-800'>Valid till November 3rd 2022</h5> Operating a <span className='text-[green]'>Landscaping Business</span>? Professional, high converting websites for only $399.99!</h2></div>
              </div>
        
        <div className='col-span-3 leading-80'>

          
          <h2 className='mx-10 leading-10 py-4 text-[#dbdada] relative mt-4 text-center shimmer2 self-baseline items-baseline align-baseline'><Image
              src={Logo}
              alt='/'
              width='100px'
              height= '90px'
              className='cursor-pointer self-baseline items-baseline align-baseline t-[18px] relative'
              priority='true'
            /> Hire Decoded Web </h2> <hr /> <h4 className='text-center'> Web Development & Digital Solutions</h4><Marquee gradientColor='rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)' className='my-10 leading-[2rem] border-t-2 border-b-2 bg-[#0c0c0c] text-[#dfdcdc] font-extrabold w-full --gradient-color: rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) --gradient-width:200px;'>|| Web-Developer ⊛ NFT Creator ⊛ NFT Community Founder ⊛ Artist ⊛ Athlete ⊛ Shopify Dropshipping Expert ⊛ Digital Graphics Desinger </Marquee>
          <p className='mx-10 leading-10 indent-2 py-2 bg-[#e6e4e4] p-2 px-10 text-[#913541] font-bold rounded-tl-[10px] rounded-br-[10px] mt-2 border-[#1c1c1c] border-2'>
          &#47; &#47;  Begin a &apos;Quote Request&apos; to dertermine which package best fits your needs. &#47; &#47;  
          </p><hr/>
        </div>
        <div className='bg-[#e9e6e6ea] p-10 m-2 border-2 text-[#682121] font-extrabold border-[#ffffffa5] rounded-lg'>
        <p><h3>To get started with your service:</h3> <br/><br />
        1. Pick a service plan. Choose between one-time or monthly payment options.<br/>
        2. Contact us requesting a quote. Only $99 downpayment is required to initiate your service request.**<br/>
        3. Email all associated media files to developer@decodedweb.usa<br/>
        4. Receive updates on the delivery of your newly ordered product.
        </p>
        <hr />
        <p>** All transactions are carried out via Stripe. Most websites will be ready within 14-21 days and delivered through GitHub Pages. <br/><hr />

        </p>
        </div>
        <div className='bg-[#e0e0e0e5] shadow-[#dadada] rounded-xl'>
        <div className='text-center align-middle flex-col xl:flex-row h-auto m-auto shadow-xl  flex items-center justify-center p-4 '>
          
        <Card />
        <Card2 />
        </div>
        <Contact/>

        </div>
        
       
        
      </div>
    </div>

    </>
  );
};

export default Payments;

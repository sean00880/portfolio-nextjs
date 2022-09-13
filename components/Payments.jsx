import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';
import Marquee from "react-fast-marquee";
import GlitchText from "./glitch-text4";
import {src} from "./bg.png";
import {useEffect} from 'react';
import { loadStripe } from '@stripe/stripe-js';
import StripeLogo from '../public/assets/stripelogo.png'
import {PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js"
import Card from './Card'
import Card2 from './Card2'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);


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
    <div id='services' className='relative w-full p-2 flex items-center py-16 bg-bg_image3 bg-cover bg-fixed'>
      <div className='py-20 px-2 max-w-[1240px] relative m-auto md:block grid-cols-3 gap-8 bg-bg_image8 bg-cover bg-fixed border-double border-4 rounded-sm rounded-tl-[80px] rounded-br-[80px] border-red-700'>
        <div className='col-span-3 leading-80'>
          <div className='uppercase leading-80 text-xl tracking-widest text-[#b13c3c]'>
            <h2 className='w-[100%] text-[#e7b6db]' ><GlitchText>Services</GlitchText></h2>
            <hr className='w-full'></hr>
          </div>
          
          <h2 className='mx-10 leading-10 py-4 text-[#dbdada] mt-4 text-center'>Hire Me</h2><Marquee gradientColor='rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)' className='bg-[#1c1b1b] text-[#f2eded] w-full --gradient-color: rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) --gradient-width:200px;'>|| Web-Developer ⊛ NFT Creator ⊛ NFT Community Founder ⊛ Artist ⊛ Athlete ⊛ Shopify Dropshipping Expert ⊛ Digital Graphics Desinger </Marquee>
          <p className='mx-10 leading-10 indent-2 py-2 bg-[#e6e4e4] p-2 px-10 text-[#913541] font-bold rounded-tl-[10px] rounded-br-[10px] mt-2 border-[#1c1c1c] border-2'>
          &#47; &#47;  Begin a &apos;Quote Request&apos; to dertermine which package best fits your needs. &#47; &#47;  
          </p><hr/>
        </div>
        <div className='bg-[#000000a1] p-10 m-2 border-2 border-[#ffffffa5] rounded-lg'>
        <p>Three simple steps: <br/>
        1. Determine package. <br/>
        2. Purchase package<br/>
        3. Email your files to developer@decodedweb.usa<br/>
        </p>
        <p>Your website will be ready within 14-21 days and delivered through GitHub Pages. <br/>
        </p>
        </div>
        <div className=' text-center align-middle w-[80%] flex-col xl:flex-row h-auto m-auto shadow-xl shadow-[#dadada] rounded-xl flex items-center justify-center p-4 bg-[#aa38387b]'>
          
        <Card />
        <Card2 />
          
        </div>
        
      </div>
    </div>
  );
};

export default Payments;

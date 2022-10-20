
import {PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js"
import React from 'react'

const Card = () => {
  return (
    <div className='flex leading-20 min-h-[83vh] flex-col border-4 border-[#f1f1f1f5] rounded-2xl w-full xl:w-[50%] p-5 mx-5 m-4 text-center text-white hover:scale-105 ease-in duration-300 bg-[#1a1919ef] mt-auto'>
    <h2 className='my-2 mt-auto'>Basic Website Build & Setup</h2><hr/>
    <h4 className='my-2 mt-auto'>Website built and deployed from start to finish with focus on responsiveness, UI design, UX and functionality. Responsive. <div className='bg-[#a15555] border-4 border-double p-4 m-3 text-white rounded-br-[31px] rounded-tl-[31px] rounded-tr-[8px] rounded-bl-[8px] leading-14'><div className='bg-[#e9e9e9] text-black xl:rounded-br-[110px] xl:rounded-tl-[110px] rounded-br-[40px] rounded-tl-[40px] px-3 my-14'> Example Websites:</div> Local Small Business, Salon, Store Front, Simple Blog, Professional Portfolio, Welcome Page, SaaS Product Store, etc.</div></h4>
    <h2 className='mt-auto p-4 bg-white rounded-2xl border-4 border-double border-black text-red-800 text-[23px]'>Due today: $99 <hr  className='my-3'/> Total: $399 </h2>
    
    
  </div>
  );
};

export default Card;

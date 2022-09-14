
import {PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js"
import React from 'react'

const Card = () => {
  return (
    <div className='flex leading-20 flex-col border-2 border-black h-full w-full xl:h-[75vw] 2xl:h-[58vw] xl:w-[23vw] p-5 m-4 text-center text-black hover:scale-105 ease-in duration-300 bg-[#e4e3e3cd] mt-auto mx-5'>
    <h2 className='my-2 mt-auto'>Website Build & Setup</h2><hr/>
    <h4 className='my-2 mt-auto'>Website built and deployed from start to finish with focus on responsiveness, UI design, UX and functionality. Responsive. <div className='bg-black p-4 m-3 text-white rounded-br-[31px] rounded-tl-[31px] rounded-tr-[8px] rounded-bl-[8px] leading-14'><div className='bg-[#e9e9e9] text-black xl:rounded-br-[110px] xl:rounded-tl-[110px] rounded-br-[40px] rounded-tl-[40px] px-3 my-14'> Example Websites:</div> Local Small Business, Salon, Store Front, Simple Blog, Professional Portfolio, SaaS Product Store, etc.</div></h4>
    <h2 className='mt-auto'>$399.99</h2>
    
    <PayPalScriptProvider
      options={{
        "client-id": "AbUS3UDeVlG3e5JvSBPx2iCVL81biUiZCaQymapp43Di1Y8npVEi1WZW5w0L2lE9_bR8rf2h_lm5uPmC"
      }}>
      <PayPalButtons className='bg-[#d7d7d776] mt-auto p-2 rounded-md z-0 relative' createOrder={(data, actions) => {
        return actions.order
            .create({
                purchase_units: [
                    {
                        amount: {
                            value: "399.99",
                        },
                    },
                ],
            })
    }}
    onApprove={async (data, actions) => {
            const details = await actions.order.capture();
            const name = details.payer.name.given_name;
            alert("Transaction completed by " + name);
          }}
    />
    </PayPalScriptProvider>
    
  </div>
  );
};

export default Card;

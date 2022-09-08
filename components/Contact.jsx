import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { useState } from 'react';
import Popup from "./Popup.js";
import GlitchText from "./glitch-text5";

const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_dvckjdg', 'template_3cs9fmt', form.current, 'jUn1z-vodKfQLijZ7')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
    <div id='skills' className='w-full lg:h-screen p-2 py-16 bg-[#f1f1f1] bg-bg_image10 bg-cover bg-fixed'>
      <div className='max-w-[1240px] p-2 py-20 mx-auto flex flex-col justify-center bg-[#c7b7ba98] border-double border-2 rounded-sm border-gray-800' >
      <div className='uppercase text-xl tracking-widest text-[#f4f4f4]'>
          <h2><GlitchText>Contact</GlitchText></h2>
          <hr></hr>
          </div>
          <h2 className='py-4 mt-4 text-[#cd40b3] bg-[#1a1a1a] align-left w-full rounded-tr-border-2 px-10 rounded-br-[10px]  rounded-tl-[10px]'>Submit a Quote Request/Connect with Us</h2>
      
      <form ref={form} onSubmit={sendEmail} className='flex-col'>
        <div className='m-2 flex flex-col'>
        <input className='my-2 h-10 rounded-sm border-2 border-black' type="text" placeholder="Name" name="name"/>
        <input className='my-2 h-10 rounded-sm border-2 border-black' type="text" placeholder="Phone" name="contact" />
        <input className='my-2 h-10 rounded-sm border-2 border-black' type="email" placeholder="Email" name="email" />
        <input className='my-2 h-10 rounded-sm border-2 border-black' type="text" placeholder="Subject" name="subject"/>
        <textarea
          className=''
          type="text"
          rows={6}
          placeholder="Message"
          name="message"
        />
        </div>
        <button className='text-center justify-center w-full h-10' onClick={()=>setButtonPopup(true)}>SUBMIT</button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>Your message has been sent. We will reach out to you shortly.</h3>
        </Popup>
        </form>
    </div>
    </div>
    </>
  );
};

export default Contact;

import React, { useState } from 'react';
import { Data } from "../data";
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import GlitchText from "./glitch-text3";

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <>
    <div id='projects' className='w-full h-[full] p-2 pb-5 bg-bg_image10 bg-center bg-no-repeat bg-fixed border-white border-t-2'>
      <div className='mt-20 mb-20 h-[full] py-20 max-w-[1240px] mx-auto px-2 bg-[#f5f4f448] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[10px] rounded-tr-[10px] border-2 border-[#f0e9ea95]'>
      <div className='uppercase text-xl tracking-widest text-[#b94747]'>
          <h2 className='text-center'><GlitchText>FAQ</GlitchText></h2>
          <hr className='mt-4'/>
          </div>
        <h2 className='py-4 mt-4 text-center text-[#d7d7d7] bg-[#52ce69c2] align-left w-full rounded-tr-border-2 px-10 rounded-br-[10px]  rounded-tl-[10px]'>Frequently Asked Questions</h2>
          {Data.map((item, index) => {
            return (
              <>
                <div className='p-5' onClick={() => toggle(index)} key={index}>
                  <h3>{item.question}</h3>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </div>
                {clicked === index ? (
                  <div className='rounded-md bg-slate-200 text-black p-2'>
                    <p>{item.answer}</p>
                    </div>
                ) : null}
                </>
            );
          })}
      </div>
      </div>
      </>
  );
};

export default Accordion;

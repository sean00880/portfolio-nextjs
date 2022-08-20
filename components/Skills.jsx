import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png'
import AWS from '../public/assets/skills/aws.png';
import Sanity from '../public/assets/skills/sanity.png';
import WordPress from '../public/assets/skills/wordpress.png';
import Photoshop from '../public/assets/skills/photoshop.png';
import Bootstrap from '../public/assets/skills/bootstrap.png';
import GlitchText from "./glitch-text";


const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 py-16 bg-[#f1f1f1] bg-bg_image3 bg-fixed'>
      <div className='max-w-[1240px] p-2 py-20 mx-auto flex flex-col justify-center bg-[#b11b3498] border-double border-2 rounded-sm border-gray-800' >
      <div className='uppercase text-xl tracking-widest text-[#f4f4f4]'>
          <h2><GlitchText>Skills</GlitchText></h2>
          <hr></hr>
          </div>
        <h2 className='py-4'>My Technology Stack:</h2>
        <div className='grid p-4 grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  bg-white text-red-600 border-[.3rem] border-inset border-[#131212de] ring-[#6464649c]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Html} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className=' p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white text-red-600 border-[.3rem] border-inset border-[#131212de] ring-[#6464649c]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center '>
              <div className='m-auto'>
                <Image src={Css} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  bg-white text-red-600 border-[.3rem] border-inset border-[#131212de] ring-[#6464649c]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Bootstrap} width='64px' height='64px' alt='/' className='bg-white rounded-lg' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  bg-white text-red-600 border-[.3rem] border-inset border-[#131212de] ring-[#6464649c]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Javascript} width='64px' height='64px' alt='/' className='bg-black rounded-lg' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  bg-white text-red-600 border-[.3rem] border-inset border-[#131212de] ring-[#6464649c]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ReactImg} width='64px' height='64px' textalt='/' className='bg-black rounded-lg'/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  bg-white text-red-600 border-[.3rem] border-inset border-[#131212de] ring-[#6464649c]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Tailwind} width='64px' height='64px' alt='/' className='bg-black rounded-lg'/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  bg-white text-red-600 border-[.3rem] border-inset border-[#131212de] ring-[#6464649c]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Firebase} width='64px' height='64px' alt='/' className='bg-black rounded-lg' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  bg-white text-red-600 border-[.3rem] border-inset border-[#131212de] ring-[#6464649c]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Sanity} width='64px' height='64px' alt='/' className='bg-black rounded-lg' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Sanity</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  bg-white text-red-600 border-[.3rem] border-inset border-[#131212de] ring-[#6464649c]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Github} width='64px' height='64px' alt='/' className='bg-white rounded-lg'/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  bg-white text-red-600 border-[.3rem] border-inset border-[#131212de] ring-[#6464649c]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={NextJS} width='64px' height='64px' alt='/' className='bg-white rounded-lg' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next.JS</h3>
              </div>
            </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  bg-white text-red-600 border-[.3rem] border-inset border-[#131212de] ring-[#6464649c]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={WordPress} width='64px' height='64px' alt='/' className='bg-black rounded-lg' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>WordPress</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300  bg-white text-red-600 border-[.3rem] border-inset border-[#131212de] ring-[#6464649c]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Photoshop} width='64px' height='64px' alt='/' className=' rounded-lg' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Photoshop CC</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
import Image from 'next/image';
import React from 'react';
import propertyImg from '../public/assets/projects/netflix.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import GlitchText from "../components/glitch-text3";
import Head from 'next/head'

const coffeedecoded = () => {
  return (
    <div className='w-full'>
            <Head>
        <title>Sean | Front-End Developer</title>
        <meta name="description" content="Hire me to build your SEO optimzed website or web application (for all niches). By utilizing my background and expertise in full-stack web development, engineering and art, I build top-of-the line applications that possess advanced functionalities and boast cutting edge (UX)User Experience as well as (UI) User Interface design." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={propertyImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Coffee Decoded</h2>
          <h3>&#47;&#47; Web 3 Coffee Web Store &#47;&#47;</h3>
        </div>
      </div>

      <div className=' text-center max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4 md:col-span-3 lg:col-span-4'>
          <h2 className='mt-2 text-black'><GlitchText>Overview</GlitchText></h2><hr/>
          <p className='mt-2 text-left'>
          A prototype static coffee store website deployed in order to demonstrate and utilize my programming skills in HTML, CSS and advanced JavaScript. <br/><br/>

The main objective of this project was to create a marketable web application/landing page with implimentation of advanced CSS styling and JavaScript animation effects. The focus was on taking under consideration the colors, fonts, spacing and the overall styling, and customizing it to make the product stand out.<br/><br/>Conclusion: The application is fully mobile responsive, however, the image load time was often observed to be low, which serves as a drawback for this beautifully designed site.
          </p>
          <a
            href='https://github.com/sean00880/onlinemarketing'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://sean00880.github.io/onlinemarketing/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='technologies bg-bg_image7 w-full bg-fixed border-4 border-white bg-black col-span-4 md:col-span-2 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2 bg-[#000000ac] rounded-tr-[10px] rounded-bl-[10px] border-2 border-black w-full'>
            <p className='text-center font-bold pb-2'>Technologies Utilized</p>
            <hr />
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HTML
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JavaScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Github Pages
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default coffeedecoded;
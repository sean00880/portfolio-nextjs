import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import netflixImg from '../public/assets/projects/netflix.png'
import shipwreckcove from '../public/assets/projects/shipwreckcove.png'
import loglowImg from '../public/assets/projects/loglow.png'
import theEliteReapers from '../public/assets/projects/theelitereapers.png'
import portfolio from '../public/assets/projects/portfolio.png'
import saas from '../public/assets/projects/saas.png'
import grllc from '../public/assets/projects/grllc.png'
import alsllc from '../public/assets/projects/alsllc.png'
import greenpower from '../public/assets/projects/greenpower.png'
import ProjectItem from './ProjectItem';
import GlitchText from "./glitch-text5";

const Projects = () => {
  return (
    <div id='projects' className='w-full pb-5 bg-bg_image bg-fixed bg-cover p-2'>
      <div className=' py-20 mx-auto px-4 bg-gradient-to-r from-[#fefefe] to-[#959292] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[10px] rounded-tr[10px] border-[#ebebeb46] border-4'>
      <div className='uppercase text-xl tracking-widest text-[#2d2c2d] text-center'>
          <h2><GlitchText>Projects</GlitchText></h2>
          <hr className='mt-4'/>
          </div>
        <h2 className='py-4 mt-4 text-[#912d39] align-left w-full rounded-tr-border-2 px-10 rounded-br-[10px] text-center rounded-tl-[10px]'>Work Demonstration in action</h2>
        <div className='grid md:grid-cols-2 gap-8 mt-10'>
        <ProjectItem
            title='Grandpa Ron&apos;s Lawns & Landscape, LLC'
            backgroundImg={grllc}
            projectUrl='/grandparon'
            tech='React, NextJS, Github, Vercel, Email.JS'
          />
          <ProjectItem
            title='ShipWreck Cove - Telegram Community Website'
            backgroundImg={shipwreckcove}
            projectUrl='/shipwreckcove'
            tech='React, Github Pages'
          />
           <ProjectItem
            title='GREENPOWER Landscaping'
            backgroundImg={greenpower}
            projectUrl='/greenpower'
            tech='Next.js, React, Vercel, Github Pages'
          />
          <ProjectItem
            title='Shareo - Online Marketing Agency'
            backgroundImg={saas}
            projectUrl='/saas'
            tech='React JS, Github Pages'
          />
          <ProjectItem
            title='Loglow - Logo Design Agency'
            backgroundImg={loglowImg}
            projectUrl='/loglow'
            tech='HTML, CSS, JavaScript, Github Pages'

          />
          <ProjectItem
            title='The Elite Reapers - NFT Community Site'
            backgroundImg={theEliteReapers}
            projectUrl='/crypto'
            tech='HTML, CSS, JavaScript, Github Pages'

          />
          <ProjectItem
            title='CoffeeDecoded - Store Website'
            backgroundImg={netflixImg}
            projectUrl='/coffeedecoded'
            tech='HTML, CSS, JavaScript, Github Pages'

          />
          <ProjectItem
            title='Portfolio'
            backgroundImg={portfolio}
            projectUrl='/portfolio'
            tech='React, NextJS, Github, Vercel'
          />
              <ProjectItem
            title='All Landscaping Services - Landscaping Business Website'
            backgroundImg={alsllc}
            projectUrl='/alsllc'
            tech='React, NextJS, Github, Vercel'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

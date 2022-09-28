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
import ProjectItem from './ProjectItem';
import GlitchText from "./glitch-text5";

const Projects = () => {
  return (
    <div id='projects' className='w-full pb-5 bg-bg_image5 bg-fixed bg-cover border-white border-t-2'>
      <div className='mt-20 mb-20 py-20 max-w-[1240px] mx-auto px-2 bg-[#212020] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[10px] rounded-tr[10px] border-2 border-[#f0e9ea95]'>
      <div className='uppercase text-xl tracking-widest text-[#f4f4f4]'>
          <h2><GlitchText>Projects</GlitchText></h2>
          <hr className='mt-4'/>
          </div>
        <h2 className='py-4 mt-4 text-[white] bg-black align-left w-full rounded-tr-border-2 px-10 rounded-br-[10px]  rounded-tl-[10px]'>Work Demonstrations in action</h2>
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
        </div>
      </div>
    </div>
  );
};

export default Projects;

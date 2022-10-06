import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const ProjectItem = ({title, backgroundImg, tech, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center bg-[#000000f1] my-10 h-[23vh] w-[40vh] shadow-lg shadow-[#121212] rounded-xl group hover:bg-gradient-to-r from-[#cdc5c5] to-[#991830]'>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' loading='lazy'/> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
        <h3 className='text-md text-black font-bold tracking-wider text-center'>{title}</h3>
        <p className='pb-2 pt-2 text-white text-sm'>{tech}</p>
        <Link href={projectUrl} passHref>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-sm cursor-pointer'>More Info</p>
        </Link>
    </div>
 </div>
  )
}

export default ProjectItem

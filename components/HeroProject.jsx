import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const ProjectItem = ({title, backgroundImg, tech, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-between bg-[#000000f1] md:h-auto h-[12vh] my-10  w-full shadow-lg shadow-[#121212] rounded-xl group hover:bg-gradient-to-r from-[#cdc5c5] to-[#991830] border-2 border-white'>
    <Image className='rounded-xl group-hover:opacity-10 justify-evenly overflow-hidden object-cover' src={backgroundImg} width={1200} height={200} alt='/' loading='lazy'/> 
    <div className='hidden w-full px-2 group-hover:flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] justify-evenly'>
        <h3 className='text-sm text-black font-bold tracking-wider text-center m-auto'>{title}</h3>
        <p className='pb-2 pt-2 text-white text-sm'>{tech}</p>
        <Link href={projectUrl} passHref>
            <p className='text-center py-3 rounded-lg w-[30vw] md:w-[20vw]] m-auto bg-white text-gray-700 font-bold text-sm cursor-pointer'>More Info</p>
        </Link>
    </div>
 </div>
  )
}

export default ProjectItem

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const ProjectItem = ({title, backgroundImg, tech, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center border-4 border-inset border-[#ffffffe9] bg-[#000000f1] h-[50vh] w-full shadow-xl shadow-[#d9d9d9] rounded-xl group hover:bg-gradient-to-r from-[#e8e8ee] to-[#991830] '>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' loading='lazy'/>  <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  bg-black rounded-2xl p-4 border-4 border-double border-[#ffffffe5]'>

        <h3 className='text-xl text-[#f5f5f5] font-bold tracking-wider text-center'>{title}</h3>
        <hr />
        <p className='pb-2 pt-2 text-[#fdfdfd] text-center'>{tech}</p>
        <Link href={projectUrl} passHref>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
    </div>
 </div>
  )
}

export default ProjectItem

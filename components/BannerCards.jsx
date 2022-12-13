import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Data from "./bannerData.json";
import team from "../pages/team";
import Image from "next/image";

const CardStyle = {
  border: "3px solid white",
  height: "63vh",
  width: "33vh",
  lineHeight: "3rem",
  margin: "10px 0",
  justifyContent:"space-evenly",
  fontFamily:"custom",
};

const Card = ({ project }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  // console.log(project);
  return (



    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" className='border-2 border-white flex' >
      <div
        style={CardStyle}
        onMouseEnter={() => setIsFlipped((prev) => !prev)}
        className="CardBack bg-[#eeececf8] relative border-4  text-[13px] border-[#f1ececf1] rounded-2xl  p-4 text-[#532121] text-center justify-around align-middle items-center leading-1 font-extrabold"
      >
        {project.title}
        <hr />
        <br />
        <Image
                      src={project.logo}
                      width={10}
                      height={10}
                      layout="responsive"
                      objectFit="cover"
                      alt=""
                      loading="lazy"
                      className="m-auto mt-auto"
                    />
      </div>
      <div
        style={CardStyle}
        onMouseLeave={() => setIsFlipped((prev) => !prev)}
        className="CardFront bg-[#1f1e1ef5] leading-[2.4rem] lg:leading-[3rem] grid-cols-3 relative h-[20vh] justify-around border-2 border-[#00000082] rounded-2xl text-[#e9e9e9] text-[13px] sm:text-[15px] md:text-[17px] p-4 font-extrabold text-center">

              {project.desc}
              <hr />
              {project.desc2}

              

      </div>
      
    </ReactCardFlip>
    
  );
  
};

const Projects = () => {
  return (
    <div className="Projects items-center justify-around relative w-full flex  bg-black py-2 rounded-lg border-2 border-red flex-col xl:flex-row">

      {Data.map((item, index) => (
        <Card project={item} key={`card-${index}`} className="flex w-full justify-around items-center " />
      ))}
    </div>
  );
};

export default Projects;

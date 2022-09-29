import React from "react";
import ReactCardFlip from "react-card-flip";
import Data from "./marketingdata.json";
import team from "../pages/team";
import Image from "next/image";

const CardStyle = {
  border: "1px solid black",
  height: "70vh",
  width: "50vh"
};

const Card = ({ project }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  // console.log(project);
  return (



    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        style={CardStyle}
        onMouseEnter={() => setIsFlipped((prev) => !prev)}
        className="CardBack bg-[#171717db] relative min-h-[87vh] md:min-h-[93vh] xl:min-h-[90vh] border-4 border-[#f1ececf1] rounded-2xl m-3 p-5 text-white text-center justify-evenly align-middle items-center"
      >
        <h2 className='text-center text-md md:text-2xl lg:text-3xl tracking-widest mt-[3vh]'>{project.title}</h2>
        <hr />
        
          <Image width={600} height={400}  src={project.img2} className="bg-[#dcdcdcea] h-[38vh] m-4 p-4 flex" layout="responsive" alt="" />
          <h5 className='my-10 text-md md:text-lg h-[18vh]'>{project.bio}</h5>
          <hr className=''/>
          <h5 className='absolute bottom-4 left-0 p-5 mx-3 text-md md:text-lg rounded-2xl bg-[#ebeaead9] font-black text-[#612323]'>{project.bio2}</h5>
      </div>
      <div
        style={CardStyle}
        onMouseLeave={() => setIsFlipped((prev) => !prev)}
        className="CardFront bg-[#e1e1e1db] grid-cols-3 relative min-h-[87vh] md:min-h-[93vh] xl:min-h-[90vh] justify-between h-auto border-2 border-[#00000082] rounded-2xl m-3 text-black">

                <div>
                  <div className='h-[30vh] w-full p-5'>
                <Image width={525} height={525} src={project.img} className="items-center relative h-[30vh] rounded-2xl m-4 p-8 flex" />
                </div>
          <h2 className='text-center lg:text-3xl tracking-widest mt-[16vh] lg:mt-[18vh] text-md md:text-md bg-[#141414] text-white'>{project.title}</h2>
                <hr className='text-black mb-1'/>
                <h3 className='text-center text-sm md:text-md xl:text-lg'>{project.service1}</h3>
                <h3 className='text-center text-sm md:text-md xl:text-lg'>{project.service2}</h3>
                <h3 className='text-center text-sm md:text-md xl:text-lg'>{project.service4}</h3>
                <h3 className='text-center text-sm md:text-md xl:text-lg'>{project.service5}</h3>
                <div className=''>
                <span className='text-center text-black bottom-0 absolute p-5 text-sm md:text-lg'><hr/>Links:<br/>
                <div className='p-3'>
                <span><a href={project.link} className='inline-flex left-5 absolute'><Image src='../public/assets/portfolio.png' className='text-sm md:text-md rounded-[xl] mx-3'/>Portfolio</a></span><br/>
                <span><a href={project.link2} className='inline-flex left-5 absolute'><Image width="200" height="200" src='../public/assets/social.png' className='text-sm md:text-md rounded-[xl] mx-3'/>Social Media</a></span><br/>
                </div >
                Website development for all businesses and niches.</span>
                
                </div>
        </div>

      </div>
      
    </ReactCardFlip>
  );
};

const Projects = () => {
  return (
    <div className="Projects justify-evenly relative w-full grid lg:grid-cols-2 2xl:grid-cols-3 ">
      {Data.map((item, index) => (
        <Card project={item} key={`card-${index}`} className="lg:grid-cols-3 grid w-full " />
      ))}
    </div>
  );
};

export default Projects;

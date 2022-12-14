import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image';
import  { FaClipboard } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import MarketingTeam from '../components/MarketingTeam';
import ArtistTeam from '../components/ArtistTeam';
import DeveloperTeam from '../components/DeveloperTeam';

const team = ({ }) => {

  return (
    <>
    <Head>
        <title>Decoded Web | Web Services</title>
        <meta name="description" content="Web Services for all brands and niches" />
    <meta name="google-site-verification" content="HaKP2hPcnleHL77Ut6RaNNEYiCsnZOWOTnAuZ3ZyXaE" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <div id='team' className='py-16 w-full h-auto pt-40 bg-[#f1f1f1] bg-bg_image11 bg-contain bg-center bg-no-repeat bg-fixed'>
      <div className='xl:max-w-auto max-w-[1640px] p-2 py-20 mt-20 mx-auto bg-[#000000ee] rounded-xl text-black text-bold flex flex-col justify-center border-double border-2 border-[#d8150ee0]' >
        <div className='uppercase text-xl tracking-widest text-[#ce3636]'>
          <h2></h2>
          <hr/>
          </div>
          <h2 className='mx-auto py-4 mt-4 text-[#638d5e] bg-[#1a1a1a] align-left w-full rounded-tr-border-2 px-10 rounded-br-[10px]  rounded-tl-[10px] text-center'>Our Talented Squad</h2>
          <div className='p-4 py-6'>
          <h2 className='flex relative text-white mt-4'>Web Development:</h2>
          <h4 className='text-white'>Our Creators are equipped with the best tools and experience to make bring your ideas into existance.</h4>
        

          <div className="bg-gradient-to-r from-[#c019197e] to-[#1a1919eb] rounded-2xl p-4 m-4 flex w-auto text-gray-800 text-xl justify-between border-2 border-[#ffffffc0]">

          <DeveloperTeam className='flex card'/>
                </div>
          <h2 className='flex text-white mt-4'>Art:</h2>
          <h4 className='text-white'>Use unique and customized art for your projects designed by our professionals.</h4>
            <div className="bg-gradient-to-r from-[#c019197e] to-[#1a1919eb] rounded-2xl p-4 m-4 flex w-auto text-gray-800 text-xl justify-between border-2 border-[#ffffffc0]">
            <ArtistTeam className='grid card lg:grid-cols-3'/>
            </div>
          <h2 className='flex text-white mt-4'>Marketing:</h2>
          <h4 className='text-white'>Hire our marketing experts and experience strategically executed growth.</h4>
          </div>
            <div className="bg-gradient-to-r from-[#c019197e] to-[#1a1919eb] rounded-2xl p-4 m-4 flex w-auto text-gray-800 text-xl justify-between border-2 border-[#ffffffc0]">
                <MarketingTeam className='card grid lg:grid-cols-3'/>
            </div>
        </div>
    </div>
    <Footer /> 
    </>
  );
};

export default team;

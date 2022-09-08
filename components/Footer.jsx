import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

function Footer() {
	return (
		<>
        <div id="footer" className="bg-bg_image6 bg-cover border-4 border-t-red-700">
			<div className=" px-2 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20 bg-[#ffffffb5]">
                
				<div className="p-5">
					<ul>
						<p className="text-gray-800 uppercase font-bold text-3xl pb-6">
							Decoded <span className="text-[#aa283c]">Web</span>
						</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<Link href='https://www.linkedin.com/in/decodedweb/'>
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" /></Link>
							<Link href='https://github.com/sean00880/'>
							<FaGithub className="text-2xl cursor-pointer hover:text-red-600" />
							</Link>
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Navigate</p>
						<Link href='/#home'>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#aa283c] cursor-pointer">
							Home
						</li></Link>
						<Link href='/#about'>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#aa283c] cursor-pointer">
							About
						</li></Link>
						<Link href='/#skills'>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#aa283c] cursor-pointer">
							Skills
						</li></Link>
						<Link href='/#projects'>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#aa283c] cursor-pointer">
							Projects
						</li></Link>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Connect</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#aa283c] cursor-pointer">
							TBD
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#aa283c] cursor-pointer">
							<span className="text-black text-sm">Email:</span> developer@deveodedweb.us
						</li>
						<Link href='/resume'>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#aa283c] cursor-pointer">
							Resume
						</li></Link>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#aa283c] cursor-pointer">
							
						</li>

					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">NFTs</p>
						<Link href='https://discord.gg/NhDrNkH4'>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#aa283c] cursor-pointer">
							Discord
						</li></Link>
						<Link href='https://opensea.io/nft_seandecoded'>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#aa283c] cursor-pointer">
							OpenSea
						</li></Link>
						<Link href='https://rarible.com/theelitereapers/sale'>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#aa283c] cursor-pointer">
							Rarible
						</li></Link>
						<Link href='https://twitter.com/nft_seandecoded'>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#aa283c] cursor-pointer">
							Twitter
						</li></Link>
						<Link href='https://twitter.com/nft_seandecoded'>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							
						</li></Link>
					</ul>
				</div>
                
			</div>
			
        </div>
        <div className="flex flex-col justify-center items-center text-center  p-5 bg-nav">
				<h1 className=" text-[#a23747] font-semibold text-[28px]">
					© 2022 All Rights Reserved <span className='text-[#dadada]'>| Portfolio by Shantanu Dwivedi</span>
					<span className="hover:text-blue-600 font-semibold cursor-pointer">
						
					</span>
				</h1>
			</div>
		</>
	);
}

export default Footer;
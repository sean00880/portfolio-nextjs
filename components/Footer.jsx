import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
	return (
		<>
        <div className="bg-bg_image6 bg-cover border-4 border-t-red-700">
			<div className="bg-[#dad5d556] px-2 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
                
				<div className="p-5">
					<ul>
						<p className="text-gray-800 uppercase font-bold text-3xl pb-6">
							Shantanu <span className="text-[#aa283c]">Dwivedi</span>
						</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#aa283c] cursor-pointer">
							Stocks
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#aa283c] cursor-pointer">
							Futures & Options
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#aa283c] cursor-pointer">
							Mutual Funds
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#aa283c] cursor-pointer">
							Fixed deposits
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#aa283c] cursor-pointer">
							About
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#aa283c] cursor-pointer">
							Products
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#aa283c] cursor-pointer">
							Pricing
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#aa283c] cursor-pointer">
							Careers
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#aa283c] cursor-pointer">
							Press & Media
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#aa283c] cursor-pointer">
							Contact
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#aa283c] cursor-pointer">
							Support Portals
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#aa283c] cursor-pointer">
							List Of Charges
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#aa283c] cursor-pointer">
							Downloads & Resources
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Videos
						</li>
					</ul>
				</div>
                
			</div>
			
        </div>
        <div className="flex flex-col justify-center items-center text-center  p-5 bg-nav">
				<h1 className=" text-[#b41e41] font-semibold text-[28px]">
					© 2021-2022 All rights reserved <span className='text-[#dadada]'>| Portfolio by Shantanu Dwivedi</span>
					<span className="hover:text-blue-600 font-semibold cursor-pointer">
						
					</span>
				</h1>
			</div>
		</>
	);
}

export default Footer;
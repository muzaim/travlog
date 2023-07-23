import React from "react";

import Logo from "../assets/img/logo/logo.svg";

const Navbar = () => {
	return (
		<div className="py-8 w-full  font-circular">
			<div className="container mx-auto flex justify-between items-center px-4 md:px-0">
				<div className="flex items-center gap-3">
					<img src={Logo} alt="" />
					<a href="" className="font-circular text-xl">
						Travlog
					</a>
				</div>
				<ul className="lg:flex gap-20 hidden">
					<li>
						<a href="" className=" font-bold text-sm">
							Home
						</a>
					</li>
					<li>
						<a href="" className="text-gray-500 font-bold text-sm">
							Discover
						</a>
					</li>
					<li>
						<a href="" className="text-gray-500 font-bold text-sm">
							Special Deals
						</a>
					</li>
					<li>
						<a href="" className="text-gray-500 font-bold text-sm">
							Contact
						</a>
					</li>
				</ul>
				<div className="flex gap-3">
					<button className="font-bold">Log In</button>
					<button className="grow font-bold text-sm py-4 px-8 bg-[#5D50C6] rounded-full text-white">
						Sign Up
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

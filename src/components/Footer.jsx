import React from "react";

import Logo from "../assets/img/logo/logo.svg";
import TwitterIcons from "../assets/img/icons/twitter.svg";
import InstagramIcons from "../assets/img/icons/ig.svg";
import FacebookIcons from "../assets/img/icons/fb.svg";

const Footer = () => {
	return (
		<div className="bg-yellow-200 py-10">
			<div className="container mx-auto px-4 flex flex-col lg:flex-row">
				<div className="flex flex-col lg:w-1/2">
					<div className="flex items-center gap-3">
						<img src={Logo} alt="" />
						<a
							href="#"
							className="font-circular text-2xl lg:text-3xl"
						>
							Travlog
						</a>
					</div>
					<p className=" text-xl mt-2 lg:text-2xl w-10/12">
						Contrary to popular belief, Lorem Ipsum is not simply
						random text. It has roots in a piece of classical Latin
						literature from 45 BC.
					</p>
					<div className="flex gap-3 mt-2 py-4">
						<a href="#">
							<img src={TwitterIcons} alt="" className="w-8" />
						</a>
						<a href="#">
							<img src={InstagramIcons} alt="" className="w-8" />
						</a>
						<a href="#">
							<img src={FacebookIcons} alt="" className="w-8" />
						</a>
					</div>
				</div>
				<div className="flex flex-row justify-between py-5 lg:w-1/2">
					<div className="">
						<h1 className="font-bold text-lg lg:text-2xl">
							Company
						</h1>
						<ul className="flex flex-col gap-5 text-gray-600 mt-5 lg:text-xl">
							<li>
								<a href="#">About</a>
							</li>
							<li>
								<a href="#">Career</a>
							</li>
							<li>
								<a href="#">Mobile</a>
							</li>
						</ul>
					</div>
					<div>
						<h1 className="font-bold text-lg lg:text-2xl">
							Contact
						</h1>
						<ul className="flex flex-col gap-5 text-gray-600 mt-5 lg:text-xl">
							<li>
								<a href="#">Why Travlog?</a>
							</li>
							<li>
								<a href="#">Partner with us</a>
							</li>
							<li>
								<a href="#">FAQ's</a>
							</li>
							<li>
								<a href="#">Blog</a>
							</li>
						</ul>
					</div>
					<div>
						<h1 className="font-bold text-lg lg:text-2xl">
							Meet Us
						</h1>
						<ul className="flex flex-col gap-5 text-gray-600 mt-5 lg:text-xl">
							<li>
								<a href="#">+123 456 789</a>
							</li>
							<li>
								<a href="#">info@travlog.com</a>
							</li>
							<li>
								<a href="#">Yogyakarta</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

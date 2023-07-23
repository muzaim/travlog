import React from "react";

import HeroImg from "../assets/img/use/hero.svg";
import Tas from "../assets/img/icons/tas.svg";
import Play from "../assets/img/icons/play.svg";
import U1 from "../assets/img/use/u1.svg";
import U2 from "../assets/img/use/u2.svg";
import U3 from "../assets/img/use/u3.svg";
import U4 from "../assets/img/use/u4.svg";
import U5 from "../assets/img/use/u5.svg";

const Hero = () => {
	return (
		<>
			<div className="container mx-auto py-5 px-4 md:px-0">
				<div className="grid grid-cols-12">
					<div className="col-span-12 lg:col-span-8 lg:order-2">
						<img src={HeroImg} alt="" className="mx-auto" />
					</div>
					<div className="col-span-12 lg:col-span-4 lg:order-1  lg:my-auto">
						<button className="py-4 px-8 shadow-lg flex items-center gap-3 rounded-full mx-auto lg:mx-0">
							<h1 className="text-[#F85E9F]">
								Explore the world
							</h1>
							<img src={Tas} alt="" />
						</button>
						<h1 className="text-6xl text-center font-circular my-5 md:my-10 md:text-7xl lg:text-start">
							Travel{" "}
							<span className="text-[#F85E9F]">
								top destination
							</span>{" "}
							of the world
						</h1>
						<p className="text-gray-400 text-center font-inter text-base px-20 md:px-48 md:my-10 md:text-lg my-5 lg:text-start lg:p-0">
							We always make our customer happy by providing as
							many choices as possible{" "}
						</p>
						<div className="flex flex-col sm:flex-row  sm:justify-center gap-4 lg:justify-start">
							<button className="py-6 px-8 bg-purple-600 text-white font-circular text-base rounded-full">
								Get Started
							</button>
							<button className="flex items-center justify-center gap-2 font-circular text-base py-6 px-8 rounded-full shadow-lg">
								<img src={Play} alt="" />
								Watch Demo
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="px-4 my-5 flex justify-center flex-wrap gap-5 lg:gap-20">
				<img src={U1} alt="" className="h-8 lg:h-10" />
				<img src={U2} alt="" className="h-8 lg:h-10" />
				<img src={U3} alt="" className="h-8 lg:h-10" />
				<img src={U4} alt="" className="h-8 lg:h-10" />
				<img src={U5} alt="" className="h-8 lg:h-10" />
			</div>
		</>
	);
};

export default Hero;
